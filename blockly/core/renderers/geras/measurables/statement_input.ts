/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Objects representing statement inputs with connections on a
 * rendered block.
 *
 * @class
 */
import * as goog from '../../../../closure/goog/goog.js';
goog.declareModuleId('Blockly.geras.StatementInput');

/* eslint-disable-next-line no-unused-vars */
import type {Input} from '../../../input.js';
import type {ConstantProvider as BaseConstantProvider} from '../../../renderers/common/constants.js';
import {StatementInput as BaseStatementInput} from '../../../renderers/measurables/statement_input.js';
import type {ConstantProvider as GerasConstantProvider} from '../constants.js';


/**
 * An object containing information about the space a statement input takes up
 * during rendering.
 *
 * @alias Blockly.geras.StatementInput
 */
export class StatementInput extends BaseStatementInput {
  override constants_: GerasConstantProvider;

  /**
   * @param constants The rendering constants provider.
   * @param input The statement input to measure and store information for.
   * @internal
   */
  constructor(constants: BaseConstantProvider, input: Input) {
    super(constants, input);
    this.constants_ = constants as GerasConstantProvider;

    if (this.connectedBlock) {
      // We allow the dark path to show on the parent block so that the child
      // block looks embossed.  This takes up an extra pixel in both x and y.
      this.height += this.constants_.DARK_PATH_OFFSET;
    }
  }
}
