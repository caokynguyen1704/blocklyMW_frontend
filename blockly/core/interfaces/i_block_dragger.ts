/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The interface for a block dragger.
 *
 * @namespace Blockly.IBlockDragger
 */
import * as goog from '../../closure/goog/goog.js';
import type {Coordinate} from '../utils/coordinate.js';
import type {BlockSvg} from '../block_svg.js';
goog.declareModuleId('Blockly.IBlockDragger');

/**
 * A block dragger interface.
 *
 * @alias Blockly.IBlockDragger
 */
export interface IBlockDragger {
  /**
   * Start dragging a block.  This includes moving it to the drag surface.
   *
   * @param currentDragDeltaXY How far the pointer has moved from the position
   *     at mouse down, in pixel units.
   * @param healStack Whether or not to heal the stack after disconnecting.
   */
  startDrag(currentDragDeltaXY: Coordinate, healStack: boolean): void;

  /**
   * Execute a step of block dragging, based on the given event.  Update the
   * display accordingly.
   *
   * @param e The most recent move event.
   * @param currentDragDeltaXY How far the pointer has moved from the position
   *     at the start of the drag, in pixel units.
   */
  drag(e: Event, currentDragDeltaXY: Coordinate): void;

  /**
   * Finish a block drag and put the block back on the workspace.
   *
   * @param e The mouseup/touchend event.
   * @param currentDragDeltaXY How far the pointer has moved from the position
   *     at the start of the drag, in pixel units.
   */
  endDrag(e: Event, currentDragDeltaXY: Coordinate): void;

  /**
   * Get a list of the insertion markers that currently exist.  Drags have 0, 1,
   * or 2 insertion markers.
   *
   * @returns A possibly empty list of insertion marker blocks.
   */
  getInsertionMarkers(): BlockSvg[];

  /** Sever all links from this object and do any necessary cleanup. */
  dispose(): void;
}
