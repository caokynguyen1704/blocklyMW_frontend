/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Object representing an input (value, statement, or dummy).
 *
 * @class
 */
import * as goog from '../closure/goog/goog.js';
goog.declareModuleId('Blockly.Input');

// Unused import preserved for side-effects. Remove if unneeded.
import './field_label.js';

import type {Block} from './block.js';
import type {BlockSvg} from './block_svg.js';
import type {Connection} from './connection.js';
import type {Field} from './field.js';
import * as fieldRegistry from './field_registry.js';
import {inputTypes} from './input_types.js';
import type {RenderedConnection} from './rendered_connection.js';


/**
 * Class for an input with an optional field.
 *
 * @alias Blockly.Input
 */
export class Input {
  private sourceBlock_: Block;
  fieldRow: Field[] = [];
  align: Align;

  /** Is the input visible? */
  private visible_ = true;

  /**
   * @param type The type of the input.
   * @param name Language-neutral identifier which may used to find this input
   *     again.
   * @param block The block containing this input.
   * @param connection Optional connection for this input.
   */
  constructor(
      public type: number, public name: string, block: Block,
      public connection: Connection|null) {
    if (type !== inputTypes.DUMMY && !name) {
      throw Error(
          'Value inputs and statement inputs must have non-empty name.');
    }
    this.sourceBlock_ = block;

    /** Alignment of input's fields (left, right or centre). */
    this.align = Align.LEFT;
  }

  /**
   * Get the source block for this input.
   *
   * @returns The source block, or null if there is none.
   */
  getSourceBlock(): Block {
    return this.sourceBlock_;
  }

  /**
   * Add a field (or label from string), and all prefix and suffix fields, to
   * the end of the input's field row.
   *
   * @param field Something to add as a field.
   * @param opt_name Language-neutral identifier which may used to find this
   *     field again.  Should be unique to the host block.
   * @returns The input being append to (to allow chaining).
   */
  appendField(field: string|Field, opt_name?: string): Input {
    this.insertFieldAt(this.fieldRow.length, field, opt_name);
    return this;
  }

  /**
   * Inserts a field (or label from string), and all prefix and suffix fields,
   * at the location of the input's field row.
   *
   * @param index The index at which to insert field.
   * @param field Something to add as a field.
   * @param opt_name Language-neutral identifier which may used to find this
   *     field again.  Should be unique to the host block.
   * @returns The index following the last inserted field.
   */
  insertFieldAt(index: number, field: string|Field, opt_name?: string): number {
    if (index < 0 || index > this.fieldRow.length) {
      throw Error('index ' + index + ' out of bounds.');
    }
    // Falsy field values don't generate a field, unless the field is an empty
    // string and named.
    if (!field && !(field === '' && opt_name)) {
      return index;
    }

    // Generate a FieldLabel when given a plain text field.
    if (typeof field === 'string') {
      field = fieldRegistry.fromJson({
        'type': 'field_label',
        'text': field,
      }) as Field;
    }

    field.setSourceBlock(this.sourceBlock_);
    if (this.sourceBlock_.rendered) {
      field.init();
      field.applyColour();
    }
    field.name = opt_name;
    field.setVisible(this.isVisible());

    if (field.prefixField) {
      // Add any prefix.
      index = this.insertFieldAt(index, field.prefixField);
    }
    // Add the field to the field row.
    this.fieldRow.splice(index, 0, field);
    index++;
    if (field.suffixField) {
      // Add any suffix.
      index = this.insertFieldAt(index, field.suffixField);
    }

    if (this.sourceBlock_.rendered) {
      (this.sourceBlock_ as BlockSvg).render();
      // Adding a field will cause the block to change shape.
      this.sourceBlock_.bumpNeighbours();
    }
    return index;
  }

  /**
   * Remove a field from this input.
   *
   * @param name The name of the field.
   * @param opt_quiet True to prevent an error if field is not present.
   * @returns True if operation succeeds, false if field is not present and
   *     opt_quiet is true.
   * @throws {Error} if the field is not present and opt_quiet is false.
   */
  removeField(name: string, opt_quiet?: boolean): boolean {
    for (let i = 0, field; field = this.fieldRow[i]; i++) {
      if (field.name === name) {
        field.dispose();
        this.fieldRow.splice(i, 1);
        if (this.sourceBlock_.rendered) {
          (this.sourceBlock_ as BlockSvg).render();
          // Removing a field will cause the block to change shape.
          this.sourceBlock_.bumpNeighbours();
        }
        return true;
      }
    }
    if (opt_quiet) {
      return false;
    }
    throw Error('Field "' + name + '" not found.');
  }

  /**
   * Gets whether this input is visible or not.
   *
   * @returns True if visible.
   */
  isVisible(): boolean {
    return this.visible_;
  }

  /**
   * Sets whether this input is visible or not.
   * Should only be used to collapse/uncollapse a block.
   *
   * @param visible True if visible.
   * @returns List of blocks to render.
   * @internal
   */
  setVisible(visible: boolean): BlockSvg[] {
    // Note: Currently there are only unit tests for block.setCollapsed()
    // because this function is package. If this function goes back to being a
    // public API tests (lots of tests) should be added.
    let renderList: AnyDuringMigration[] = [];
    if (this.visible_ === visible) {
      return renderList;
    }
    this.visible_ = visible;

    for (let y = 0, field; field = this.fieldRow[y]; y++) {
      field.setVisible(visible);
    }
    if (this.connection) {
      const renderedConnection = this.connection as RenderedConnection;
      // Has a connection.
      if (visible) {
        renderList = renderedConnection.startTrackingAll();
      } else {
        renderedConnection.stopTrackingAll();
      }
      const child = renderedConnection.targetBlock();
      if (child) {
        child.getSvgRoot().style.display = visible ? 'block' : 'none';
      }
    }
    return renderList;
  }

  /**
   * Mark all fields on this input as dirty.
   *
   * @internal
   */
  markDirty() {
    for (let y = 0, field; field = this.fieldRow[y]; y++) {
      field.markDirty();
    }
  }

  /**
   * Change a connection's compatibility.
   *
   * @param check Compatible value type or list of value types.  Null if all
   *     types are compatible.
   * @returns The input being modified (to allow chaining).
   */
  setCheck(check: string|string[]|null): Input {
    if (!this.connection) {
      throw Error('This input does not have a connection.');
    }
    this.connection.setCheck(check);
    return this;
  }

  /**
   * Change the alignment of the connection's field(s).
   *
   * @param align One of the values of Align.  In RTL mode directions
   *     are reversed, and Align.RIGHT aligns to the left.
   * @returns The input being modified (to allow chaining).
   */
  setAlign(align: Align): Input {
    this.align = align;
    if (this.sourceBlock_.rendered) {
      const sourceBlock = this.sourceBlock_ as BlockSvg;
      sourceBlock.render();
    }
    return this;
  }

  /**
   * Changes the connection's shadow block.
   *
   * @param shadow DOM representation of a block or null.
   * @returns The input being modified (to allow chaining).
   */
  setShadowDom(shadow: Element|null): Input {
    if (!this.connection) {
      throw Error('This input does not have a connection.');
    }
    this.connection.setShadowDom(shadow);
    return this;
  }

  /**
   * Returns the XML representation of the connection's shadow block.
   *
   * @returns Shadow DOM representation of a block or null.
   */
  getShadowDom(): Element|null {
    if (!this.connection) {
      throw Error('This input does not have a connection.');
    }
    return this.connection.getShadowDom();
  }

  /** Initialize the fields on this input. */
  init() {
    if (!this.sourceBlock_.workspace.rendered) {
      return;  // Headless blocks don't need fields initialized.
    }
    for (let i = 0; i < this.fieldRow.length; i++) {
      this.fieldRow[i].init();
    }
  }

  /**
   * Sever all links to this input.
   *
   * @suppress {checkTypes}
   */
  dispose() {
    for (let i = 0, field; field = this.fieldRow[i]; i++) {
      field.dispose();
    }
    if (this.connection) {
      this.connection.dispose();
    }
  }
}

export namespace Input {
  /**
   * Enum for alignment of inputs.
   *
   * @alias Blockly.Input.Align
   */
  export enum Align {
    LEFT = -1,
    CENTRE = 0,
    RIGHT = 1,
  }
}

export type Align = Input.Align;
export const Align = Input.Align;
