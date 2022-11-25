/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Class representing statement inputs with connections on a
 * rendered block.
 *
 * @class
 */
import * as goog from '../../../closure/goog/goog.js';
goog.declareModuleId('Blockly.blockRendering.StatementInput');

/* eslint-disable-next-line no-unused-vars */
import type {Input} from '../../input.js';
import type {ConstantProvider} from '../common/constants.js';

import {InputConnection} from './input_connection.js';
import {Types} from './types.js';


/**
 * An object containing information about the space a statement input takes up
 * during rendering
 *
 * @alias Blockly.blockRendering.StatementInput
 */
export class StatementInput extends InputConnection {
  /**
   * @param constants The rendering constants provider.
   * @param input The statement input to measure and store information for.
   * @internal
   */
  constructor(constants: ConstantProvider, input: Input) {
    super(constants, input);
    this.type |= Types.STATEMENT_INPUT;

    if (!this.connectedBlock) {
      this.height = this.constants_.EMPTY_STATEMENT_INPUT_HEIGHT;
    } else {
      // We allow the dark path to show on the parent block so that the child
      // block looks embossed.  This takes up an extra pixel in both x and y.
      this.height =
          this.connectedBlockHeight + this.constants_.STATEMENT_BOTTOM_SPACER;
    }
    this.width = this.constants_.STATEMENT_INPUT_NOTCH_OFFSET +
        (this.shape.width as number);
  }
}
