/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An object representing the bottom row of a rendered block.
 *
 * @class
 */
import * as goog from '../../../../closure/goog/goog.js';
goog.declareModuleId('Blockly.zelos.BottomRow');

import type {BlockSvg} from '../../../block_svg.js';
import type {ConstantProvider} from '../../../renderers/common/constants.js';
import {BottomRow as BaseBottomRow} from '../../../renderers/measurables/bottom_row.js';


/**
 * An object containing information about what elements are in the bottom row of
 * a block as well as spacing information for the top row.
 * Elements in a bottom row can consist of corners, spacers and next
 * connections.
 *
 * @alias Blockly.zelos.BottomRow
 */
export class BottomRow extends BaseBottomRow {
  /**
   * @param constants The rendering constants provider.
   * @internal
   */
  constructor(constants: ConstantProvider) {
    super(constants);
  }

  override endsWithElemSpacer() {
    return false;
  }

  /** Render a round corner unless the block has an output connection. */
  override hasLeftSquareCorner(block: BlockSvg) {
    return !!block.outputConnection;
  }

  /** Render a round corner unless the block has an output connection. */
  override hasRightSquareCorner(block: BlockSvg) {
    return !!block.outputConnection && !block.statementInputCount &&
        !block.nextConnection;
  }
}
