/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Class representing inputs with connections on a rendered block.
 *
 * @class
 */
import * as goog from '../../../closure/goog/goog.js';
goog.declareModuleId('Blockly.blockRendering.InputConnection');

import type {BlockSvg} from '../../block_svg.js';
import type {Input} from '../../input.js';
import type {RenderedConnection} from '../../rendered_connection.js';
import type {ConstantProvider} from '../common/constants.js';

import {Connection} from './connection.js';
import {Types} from './types.js';


/**
 * The base class to represent an input that takes up space on a block
 * during rendering
 *
 * @alias Blockly.blockRendering.InputConnection
 */
export class InputConnection extends Connection {
  align: number;
  connectedBlock: BlockSvg|null;
  connectedBlockWidth: number;
  connectedBlockHeight: number;
  connectionOffsetX = 0;
  connectionOffsetY = 0;

  /**
   * @param constants The rendering constants provider.
   * @param input The input to measure and store information for.
   * @internal
   */
  constructor(constants: ConstantProvider, public input: Input) {
    super(constants, input.connection as RenderedConnection);

    this.type |= Types.INPUT;

    this.align = input.align;

    this.connectedBlock =
        (input.connection && input.connection.targetBlock() ?
             input.connection.targetBlock() as BlockSvg :
             null);

    if (this.connectedBlock) {
      const bBox = this.connectedBlock.getHeightWidth();
      this.connectedBlockWidth = bBox.width;
      this.connectedBlockHeight = bBox.height;
    } else {
      this.connectedBlockWidth = 0;
      this.connectedBlockHeight = 0;
    }
  }
}
