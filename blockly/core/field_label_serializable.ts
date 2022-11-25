/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Non-editable, serializable text field. Behaves like a
 *    normal label but is serialized to XML. It may only be
 *    edited programmatically.
 *
 * @class
 */
import * as goog from '../closure/goog/goog.js';
goog.declareModuleId('Blockly.FieldLabelSerializable');

import {FieldLabelConfig, FieldLabelFromJsonConfig, FieldLabel} from './field_label.js';
import * as fieldRegistry from './field_registry.js';
import * as parsing from './utils/parsing.js';


/**
 * Class for a non-editable, serializable text field.
 *
 * @alias Blockly.FieldLabelSerializable
 */
export class FieldLabelSerializable extends FieldLabel {
  /**
   * Editable fields usually show some sort of UI indicating they are
   * editable. This field should not.
   */
  override EDITABLE = false;

  /**
   * Serializable fields are saved by the XML renderer, non-serializable
   * fields are not.  This field should be serialized, but only edited
   * programmatically.
   */
  override SERIALIZABLE = true;

  /**
   * @param opt_value The initial value of the field. Should cast to a string.
   *     Defaults to an empty string if null or undefined.
   * @param opt_class Optional CSS class for the field's text.
   * @param opt_config A map of options used to configure the field.
   *    See the [field creation documentation]{@link
   * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/label-serializable#creation}
   * for a list of properties this parameter supports.
   */
  constructor(
      opt_value?: string, opt_class?: string, opt_config?: FieldLabelConfig) {
    super(String(opt_value ?? ''), opt_class, opt_config);
  }

  /**
   * Construct a FieldLabelSerializable from a JSON arg object,
   * dereferencing any string table references.
   *
   * @param options A JSON object with options (text, and class).
   * @returns The new field instance.
   * @nocollapse
   * @internal
   */
  static override fromJson(options: FieldLabelFromJsonConfig):
      FieldLabelSerializable {
    const text = parsing.replaceMessageReferences(options.text);
    // `this` might be a subclass of FieldLabelSerializable if that class
    // doesn't override the static fromJson method.
    return new this(text, undefined, options);
  }
}

fieldRegistry.register('field_label_serializable', FieldLabelSerializable);
