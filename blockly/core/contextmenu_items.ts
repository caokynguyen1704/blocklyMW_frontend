/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Registers default context menu items.
 *
 * @namespace Blockly.ContextMenuItems
 */
import * as goog from '../closure/goog/goog.js';
goog.declareModuleId('Blockly.ContextMenuItems');

import type {BlockSvg} from './block_svg.js';
import * as clipboard from './clipboard.js';
import {ContextMenuRegistry, RegistryItem, Scope} from './contextmenu_registry.js';
import * as dialog from './dialog.js';
import * as Events from './events/events.js';
import * as eventUtils from './events/utils.js';
import {inputTypes} from './input_types.js';
import {Msg} from './msg.js';
import * as idGenerator from './utils/idgenerator.js';
import type {WorkspaceSvg} from './workspace_svg.js';


/**
 * Option to undo previous action.
 *
 * @alias Blockly.ContextMenuItems.registerUndo
 */
export function registerUndo() {
  const undoOption: RegistryItem = {
    displayText() {
      return Msg['UNDO'];
    },
    preconditionFn(scope: Scope) {
      if (scope.workspace!.getUndoStack().length > 0) {
        return 'enabled';
      }
      return 'disabled';
    },
    callback(scope: Scope) {
      scope.workspace!.undo(false);
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'undoWorkspace',
    weight: 1,
  };
  ContextMenuRegistry.registry.register(undoOption);
}

/**
 * Option to redo previous action.
 *
 * @alias Blockly.ContextMenuItems.registerRedo
 */
export function registerRedo() {
  const redoOption: RegistryItem = {
    displayText() {
      return Msg['REDO'];
    },
    preconditionFn(scope: Scope) {
      if (scope.workspace!.getRedoStack().length > 0) {
        return 'enabled';
      }
      return 'disabled';
    },
    callback(scope: Scope) {
      scope.workspace!.undo(true);
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'redoWorkspace',
    weight: 2,
  };
  ContextMenuRegistry.registry.register(redoOption);
}

/**
 * Option to clean up blocks.
 *
 * @alias Blockly.ContextMenuItems.registerCleanup
 */
export function registerCleanup() {
  const cleanOption: RegistryItem = {
    displayText() {
      return Msg['CLEAN_UP'];
    },
    preconditionFn(scope: Scope) {
      if (scope.workspace!.isMovable()) {
        if (scope.workspace!.getTopBlocks(false).length > 1) {
          return 'enabled';
        }
        return 'disabled';
      }
      return 'hidden';
    },
    callback(scope: Scope) {
      scope.workspace!.cleanUp();
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'cleanWorkspace',
    weight: 3,
  };
  ContextMenuRegistry.registry.register(cleanOption);
}
/**
 * Creates a callback to collapse or expand top blocks.
 *
 * @param shouldCollapse Whether a block should collapse.
 * @param topBlocks Top blocks in the workspace.
 */
function toggleOption_(shouldCollapse: boolean, topBlocks: BlockSvg[]) {
  const DELAY = 10;
  let ms = 0;
  let timeoutCounter = 0;
  function timeoutFn(block: BlockSvg) {
    timeoutCounter--;
    block.setCollapsed(shouldCollapse);
    if (timeoutCounter === 0) {
      Events.setGroup(false);
    }
  }
  Events.setGroup(true);
  for (let i = 0; i < topBlocks.length; i++) {
    let block: BlockSvg|null = topBlocks[i];
    while (block) {
      timeoutCounter++;
      setTimeout(timeoutFn.bind(null, block), ms);
      block = block.getNextBlock();
      ms += DELAY;
    }
  }
}

/**
 * Option to collapse all blocks.
 *
 * @alias Blockly.ContextMenuItems.registerCollapse
 */
export function registerCollapse() {
  const collapseOption: RegistryItem = {
    displayText() {
      return Msg['COLLAPSE_ALL'];
    },
    preconditionFn(scope: Scope) {
      if (scope.workspace!.options.collapse) {
        const topBlocks = scope.workspace!.getTopBlocks(false);
        for (let i = 0; i < topBlocks.length; i++) {
          let block: BlockSvg|null = topBlocks[i];
          while (block) {
            if (!block.isCollapsed()) {
              return 'enabled';
            }
            block = block.getNextBlock();
          }
        }
        return 'disabled';
      }
      return 'hidden';
    },
    callback(scope: Scope) {
      toggleOption_(true, scope.workspace!.getTopBlocks(true));
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'collapseWorkspace',
    weight: 4,
  };
  ContextMenuRegistry.registry.register(collapseOption);
}

/**
 * Option to expand all blocks.
 *
 * @alias Blockly.ContextMenuItems.registerExpand
 */
export function registerExpand() {
  const expandOption: RegistryItem = {
    displayText() {
      return Msg['EXPAND_ALL'];
    },
    preconditionFn(scope: Scope) {
      if (scope.workspace!.options.collapse) {
        const topBlocks = scope.workspace!.getTopBlocks(false);
        for (let i = 0; i < topBlocks.length; i++) {
          let block: BlockSvg|null = topBlocks[i];
          while (block) {
            if (block.isCollapsed()) {
              return 'enabled';
            }
            block = block.getNextBlock();
          }
        }
        return 'disabled';
      }
      return 'hidden';
    },
    callback(scope: Scope) {
      toggleOption_(false, scope.workspace!.getTopBlocks(true));
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'expandWorkspace',
    weight: 5,
  };
  ContextMenuRegistry.registry.register(expandOption);
}
/**
 * Adds a block and its children to a list of deletable blocks.
 *
 * @param block to delete.
 * @param deleteList list of blocks that can be deleted.
 *     This will be modified in place with the given block and its descendants.
 */
function addDeletableBlocks_(block: BlockSvg, deleteList: BlockSvg[]) {
  if (block.isDeletable()) {
    Array.prototype.push.apply(deleteList, block.getDescendants(false));
  } else {
    const children = block.getChildren(false);
    for (let i = 0; i < children.length; i++) {
      addDeletableBlocks_(children[i], deleteList);
    }
  }
}

/**
 * Constructs a list of blocks that can be deleted in the given workspace.
 *
 * @param workspace to delete all blocks from.
 * @returns list of blocks to delete.
 */
function getDeletableBlocks_(workspace: WorkspaceSvg): BlockSvg[] {
  const deleteList: BlockSvg[] = [];
  const topBlocks = workspace.getTopBlocks(true);
  for (let i = 0; i < topBlocks.length; i++) {
    addDeletableBlocks_(topBlocks[i], deleteList);
  }
  return deleteList;
}

/**
 * Deletes the given blocks. Used to delete all blocks in the workspace.
 *
 * @param deleteList list of blocks to delete.
 * @param eventGroup event group ID with which all delete events should be
 *     associated.
 */
function deleteNext_(deleteList: BlockSvg[], eventGroup: string) {
  const DELAY = 10;
  eventUtils.setGroup(eventGroup);
  const block = deleteList.shift();
  if (block) {
    if (!block.isDeadOrDying()) {
      block.dispose(false, true);
      setTimeout(deleteNext_, DELAY, deleteList, eventGroup);
    } else {
      deleteNext_(deleteList, eventGroup);
    }
  }
  eventUtils.setGroup(false);
}

/**
 * Option to delete all blocks.
 *
 * @alias Blockly.ContextMenuItems.registerDeleteAll
 */
export function registerDeleteAll() {
  const deleteOption: RegistryItem = {
    displayText(scope: Scope) {
      if (!scope.workspace) {
        return '';
      }
      const deletableBlocksLength = getDeletableBlocks_(scope.workspace).length;
      if (deletableBlocksLength === 1) {
        return Msg['DELETE_BLOCK'];
      } else {
        return Msg['DELETE_X_BLOCKS'].replace(
            '%1', String(deletableBlocksLength));
      }
    },
    preconditionFn(scope: Scope) {
      if (!scope.workspace) {
        return 'disabled';
      }
      const deletableBlocksLength = getDeletableBlocks_(scope.workspace).length;
      return deletableBlocksLength > 0 ? 'enabled' : 'disabled';
    },
    callback(scope: Scope) {
      if (!scope.workspace) {
        return;
      }
      scope.workspace.cancelCurrentGesture();
      const deletableBlocks = getDeletableBlocks_(scope.workspace);
      const eventGroup = idGenerator.genUid();
      if (deletableBlocks.length < 2) {
        deleteNext_(deletableBlocks, eventGroup);
      } else {
        dialog.confirm(
            Msg['DELETE_ALL_BLOCKS'].replace(
                '%1', String(deletableBlocks.length)),
            function(ok) {
              if (ok) {
                deleteNext_(deletableBlocks, eventGroup);
              }
            });
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'workspaceDelete',
    weight: 6,
  };
  ContextMenuRegistry.registry.register(deleteOption);
}
/** Registers all workspace-scoped context menu items. */
function registerWorkspaceOptions_() {
  registerUndo();
  registerRedo();
  registerCleanup();
  registerCollapse();
  registerExpand();
  registerDeleteAll();
}

/**
 * Option to duplicate a block.
 *
 * @alias Blockly.ContextMenuItems.registerDuplicate
 */
export function registerDuplicate() {
  const duplicateOption: RegistryItem = {
    displayText() {
      return Msg['DUPLICATE_BLOCK'];
    },
    preconditionFn(scope: Scope) {
      const block = scope.block;
      if (!block!.isInFlyout && block!.isDeletable() && block!.isMovable()) {
        if (block!.isDuplicatable()) {
          return 'enabled';
        }
        return 'disabled';
      }
      return 'hidden';
    },
    callback(scope: Scope) {
      if (scope.block) {
        clipboard.duplicate(scope.block);
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockDuplicate',
    weight: 1,
  };
  ContextMenuRegistry.registry.register(duplicateOption);
}

/**
 * Option to add or remove block-level comment.
 *
 * @alias Blockly.ContextMenuItems.registerComment
 */
export function registerComment() {
  const commentOption: RegistryItem = {
    displayText(scope: Scope) {
      if (scope.block!.getCommentIcon()) {
        // If there's already a comment,  option is to remove.
        return Msg['REMOVE_COMMENT'];
      }
      // If there's no comment yet, option is to add.
      return Msg['ADD_COMMENT'];
    },
    preconditionFn(scope: Scope) {
      const block = scope.block;
      if (!block!.isInFlyout && block!.workspace.options.comments &&
          !block!.isCollapsed() && block!.isEditable()) {
        return 'enabled';
      }
      return 'hidden';
    },
    callback(scope: Scope) {
      const block = scope.block;
      if (block!.getCommentIcon()) {
        block!.setCommentText(null);
      } else {
        block!.setCommentText('');
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockComment',
    weight: 2,
  };
  ContextMenuRegistry.registry.register(commentOption);
}

/**
 * Option to inline variables.
 *
 * @alias Blockly.ContextMenuItems.registerInline
 */
export function registerInline() {
  const inlineOption: RegistryItem = {
    displayText(scope: Scope) {
      return scope.block!.getInputsInline() ? Msg['EXTERNAL_INPUTS'] :
                                              Msg['INLINE_INPUTS'];
    },
    preconditionFn(scope: Scope) {
      const block = scope.block;
      if (!block!.isInFlyout && block!.isMovable() && !block!.isCollapsed()) {
        for (let i = 1; i < block!.inputList.length; i++) {
          // Only display this option if there are two value or dummy inputs
          // next to each other.
          if (block!.inputList[i - 1].type !== inputTypes.STATEMENT &&
              block!.inputList[i].type !== inputTypes.STATEMENT) {
            return 'enabled';
          }
        }
      }
      return 'hidden';
    },
    callback(scope: Scope) {
      scope.block!.setInputsInline(!scope.block!.getInputsInline());
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockInline',
    weight: 3,
  };
  ContextMenuRegistry.registry.register(inlineOption);
}

/**
 * Option to collapse or expand a block.
 *
 * @alias Blockly.ContextMenuItems.registerCollapseExpandBlock
 */
export function registerCollapseExpandBlock() {
  const collapseExpandOption: RegistryItem = {
    displayText(scope: Scope) {
      return scope.block!.isCollapsed() ? Msg['EXPAND_BLOCK'] :
                                          Msg['COLLAPSE_BLOCK'];
    },
    preconditionFn(scope: Scope) {
      const block = scope.block;
      if (!block!.isInFlyout && block!.isMovable() &&
          block!.workspace.options.collapse) {
        return 'enabled';
      }
      return 'hidden';
    },
    callback(scope: Scope) {
      scope.block!.setCollapsed(!scope.block!.isCollapsed());
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockCollapseExpand',
    weight: 4,
  };
  ContextMenuRegistry.registry.register(collapseExpandOption);
}

/**
 * Option to disable or enable a block.
 *
 * @alias Blockly.ContextMenuItems.registerDisable
 */
export function registerDisable() {
  const disableOption: RegistryItem = {
    displayText(scope: Scope) {
      return scope.block!.isEnabled() ? Msg['DISABLE_BLOCK'] :
                                        Msg['ENABLE_BLOCK'];
    },
    preconditionFn(scope: Scope) {
      const block = scope.block;
      if (!block!.isInFlyout && block!.workspace.options.disable &&
          block!.isEditable()) {
        if (block!.getInheritedDisabled()) {
          return 'disabled';
        }
        return 'enabled';
      }
      return 'hidden';
    },
    callback(scope: Scope) {
      const block = scope.block;
      const group = eventUtils.getGroup();
      if (!group) {
        eventUtils.setGroup(true);
      }
      block!.setEnabled(!block!.isEnabled());
      if (!group) {
        eventUtils.setGroup(false);
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockDisable',
    weight: 5,
  };
  ContextMenuRegistry.registry.register(disableOption);
}

/**
 * Option to delete a block.
 *
 * @alias Blockly.ContextMenuItems.registerDelete
 */
export function registerDelete() {
  const deleteOption: RegistryItem = {
    displayText(scope: Scope) {
      const block = scope.block;
      // Count the number of blocks that are nested in this block.
      let descendantCount = block!.getDescendants(false).length;
      const nextBlock = block!.getNextBlock();
      if (nextBlock) {
        // Blocks in the current stack would survive this block's deletion.
        descendantCount -= nextBlock.getDescendants(false).length;
      }
      return descendantCount === 1 ?
          Msg['DELETE_BLOCK'] :
          Msg['DELETE_X_BLOCKS'].replace('%1', String(descendantCount));
    },
    preconditionFn(scope: Scope) {
      if (!scope.block!.isInFlyout && scope.block!.isDeletable()) {
        return 'enabled';
      }
      return 'hidden';
    },
    callback(scope: Scope) {
      if (scope.block) {
        scope.block.checkAndDelete();
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockDelete',
    weight: 6,
  };
  ContextMenuRegistry.registry.register(deleteOption);
}

/**
 * Option to open help for a block.
 *
 * @alias Blockly.ContextMenuItems.registerHelp
 */
export function registerHelp() {
  const helpOption: RegistryItem = {
    displayText() {
      return Msg['HELP'];
    },
    preconditionFn(scope: Scope) {
      const block = scope.block;
      const url = typeof block!.helpUrl === 'function' ? block!.helpUrl() :
                                                         block!.helpUrl;
      if (url) {
        return 'enabled';
      }
      return 'hidden';
    },
    callback(scope: Scope) {
      scope.block!.showHelp();
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockHelp',
    weight: 7,
  };
  ContextMenuRegistry.registry.register(helpOption);
}

/** Registers all block-scoped context menu items. */
function registerBlockOptions_() {
  registerDuplicate();
  registerComment();
  registerInline();
  registerCollapseExpandBlock();
  registerDisable();
  registerDelete();
  registerHelp();
}

/**
 * Registers all default context menu items. This should be called once per
 * instance of ContextMenuRegistry.
 *
 * @alias Blockly.ContextMenuItems.registerDefaultOptions
 * @internal
 */
export function registerDefaultOptions() {
  registerWorkspaceOptions_();
  registerBlockOptions_();
}

registerDefaultOptions();
