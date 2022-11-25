/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Class representing the space a next connection takes up during
 * rendering.
 *
 * @class
 */
import * as goog from '../../../closure/goog/goog.js';
goog.declareModuleId('Blockly.blockRendering.NextConnection');

import type {RenderedConnection} from '../../rendered_connection.js';
import type {ConstantProvider} from '../common/constants.js';

import {Connection} from './connection.js';
import {Types} from './types.js';


/**
 * An object containing information about the space a next connection takes
 * up during rendering.
 *
 * @alias Blockly.blockRendering.NextConnection
 */
export class NextConnection extends Connection {
  /**
   * @param constants The rendering constants provider.
   * @param connectionModel The connection object on the block that this
   *     represents.
   * @internal
   */
  constructor(
      constants: ConstantProvider, connectionModel: RenderedConnection) {
    super(constants, connectionModel);
    this.type |= Types.NEXT_CONNECTION;
    this.height = this.shape.height as number;
    this.width = this.shape.width as number;
  }
}
