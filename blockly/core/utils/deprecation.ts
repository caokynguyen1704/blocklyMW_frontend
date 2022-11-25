/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Helper function for warning developers about deprecations.
 * This method is not specific to Blockly.
 *
 * @namespace Blockly.utils.deprecation
 */
import * as goog from '../../closure/goog/goog.js';
goog.declareModuleId('Blockly.utils.deprecation');


/**
 * Warn developers that a function or property is deprecated.
 *
 * @param name The name of the function or property.
 * @param deprecationDate The date of deprecation. Prefer 'version n.0.0'
 *     format, and fall back to 'month yyyy' or 'quarter yyyy' format.
 * @param deletionDate The date of deletion. Prefer 'version n.0.0'
 *     format, and fall back to 'month yyyy' or 'quarter yyyy' format.
 * @param opt_use The name of a function or property to use instead, if any.
 * @alias Blockly.utils.deprecation.warn
 * @internal
 */
export function warn(
    name: string, deprecationDate: string, deletionDate: string,
    opt_use?: string) {
  let msg = name + ' was deprecated in ' + deprecationDate +
      ' and will be deleted in ' + deletionDate + '.';
  if (opt_use) {
    msg += '\nUse ' + opt_use + ' instead.';
  }
  console.warn(msg);
}
