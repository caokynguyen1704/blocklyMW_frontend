/**
 * @license
 * Copyright 2013 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A mapping of block type names to block prototype objects.
 *
 * @namespace Blockly.blocks
 */
import * as goog from '../closure/goog/goog.js';
goog.declareModuleId('Blockly.blocks');


/**
 * A block definition.  For now this very lose, but it can potentially
 * be refined e.g. by replacing this typedef with a class definition.
 */
export type BlockDefinition = AnyDuringMigration;

/**
 * A mapping of block type names to block prototype objects.
 *
 * @alias Blockly.blocks.Blocks
 */
export const Blocks: {[key: string]: BlockDefinition} = Object.create(null);
