/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Objects representing a hat in a row of a rendered
 * block.
 *
 * @class
 */
import * as goog from '../../../closure/goog/goog.js';
goog.declareModuleId('Blockly.blockRendering.Hat');

import type {ConstantProvider} from '../common/constants.js';

import {Measurable} from './base.js';
import {Types} from './types.js';


/**
 * An object containing information about the space a hat takes up during
 * rendering.
 *
 * @alias Blockly.blockRendering.Hat
 */
export class Hat extends Measurable {
  ascenderHeight: number;

  /**
   * @param constants The rendering constants provider.
   * @internal
   */
  constructor(constants: ConstantProvider) {
    super(constants);
    this.type |= Types.HAT;

    this.height = this.constants_.START_HAT.height;
    this.width = this.constants_.START_HAT.width;

    this.ascenderHeight = this.height;
  }
}
