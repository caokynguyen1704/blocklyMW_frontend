/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Events fired as a block drag.
 *
 * @class
 */
import * as goog from '../../closure/goog/goog.js';
goog.declareModuleId('Blockly.Events.BlockDrag');

import type {Block} from '../block.js';
import * as registry from '../registry.js';
import {AbstractEventJson} from './events_abstract.js';
import {UiBase} from './events_ui_base.js';
import * as eventUtils from './utils.js';


/**
 * Class for a block drag event.
 *
 * @alias Blockly.Events.BlockDrag
 */
export class BlockDrag extends UiBase {
  blockId?: string;
  isStart?: boolean;
  blocks?: Block[];
  override type = eventUtils.BLOCK_DRAG;

  /**
   * @param opt_block The top block in the stack that is being dragged.
   *     Undefined for a blank event.
   * @param opt_isStart Whether this is the start of a block drag.
   *    Undefined for a blank event.
   * @param opt_blocks The blocks affected by this drag. Undefined for a blank
   *     event.
   */
  constructor(opt_block?: Block, opt_isStart?: boolean, opt_blocks?: Block[]) {
    const workspaceId = opt_block ? opt_block.workspace.id : undefined;
    super(workspaceId);
    if (!opt_block) return;

    this.blockId = opt_block.id;

    /** Whether this is the start of a block drag. */
    this.isStart = opt_isStart;

    /** The blocks affected by this drag event. */
    this.blocks = opt_blocks;
  }

  /**
   * Encode the event as JSON.
   *
   * @returns JSON representation.
   */
  override toJson(): BlockDragJson {
    const json = super.toJson() as BlockDragJson;
    if (this.isStart === undefined) {
      throw new Error(
          'Whether this event is the start of a drag is ' +
          'undefined. Either pass the value to the constructor, or call ' +
          'fromJson');
    }
    if (this.blockId === undefined) {
      throw new Error(
          'The block ID is undefined. Either pass a block to ' +
          'the constructor, or call fromJson');
    }
    json['isStart'] = this.isStart;
    json['blockId'] = this.blockId;
    // TODO: I don't think we should actually apply the blocks array to the JSON
    //   object b/c they have functions and aren't actually serializable.
    json['blocks'] = this.blocks;
    return json;
  }

  /**
   * Decode the JSON event.
   *
   * @param json JSON representation.
   */
  override fromJson(json: BlockDragJson) {
    super.fromJson(json);
    this.isStart = json['isStart'];
    this.blockId = json['blockId'];
    this.blocks = json['blocks'];
  }
}

export interface BlockDragJson extends AbstractEventJson {
  isStart: boolean;
  blockId: string;
  blocks?: Block[];
}

registry.register(registry.Type.EVENT, eventUtils.BLOCK_DRAG, BlockDrag);
