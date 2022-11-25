/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Zelos specific objects representing elements in a row of a
 * rendered block.
 *
 * @class
 */
import * as goog from '../../../../closure/goog/goog.js';
goog.declareModuleId('Blockly.zelos.RightConnectionShape');

import type {ConstantProvider} from '../../../renderers/common/constants.js';
import {Measurable} from '../../../renderers/measurables/base.js';
import {Types} from '../../../renderers/measurables/types.js';


/**
 * An object containing information about the space a right connection shape
 * takes up during rendering.
 *
 * @alias Blockly.zelos.RightConnectionShape
 */
export class RightConnectionShape extends Measurable {
  // Size is dynamic
  override height = 0;
  override width = 0;

  /**
   * @param constants The rendering constants provider.
   * @internal
   */
  constructor(constants: ConstantProvider) {
    super(constants);
    this.type |= Types.getType('RIGHT_CONNECTION');
  }
}
