/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Colour input field.
 *
 * @class
 */
import * as goog from '../closure/goog/goog.js';
goog.declareModuleId('Blockly.FieldColour');

// Unused import preserved for side-effects. Remove if unneeded.
import './events/events_block_change.js';

import {BlockSvg} from './block_svg.js';
import * as browserEvents from './browser_events.js';
import * as Css from './css.js';
import * as dom from './utils/dom.js';
import * as dropDownDiv from './dropdowndiv.js';
import {FieldConfig, Field} from './field.js';
import * as fieldRegistry from './field_registry.js';
import * as aria from './utils/aria.js';
import * as colour from './utils/colour.js';
import * as idGenerator from './utils/idgenerator.js';
import {KeyCodes} from './utils/keycodes.js';
import type {Sentinel} from './utils/sentinel.js';
import {Size} from './utils/size.js';


/**
 * Class for a colour input field.
 *
 * @alias Blockly.FieldColour
 */
export class FieldColour extends Field {
  /**
   * An array of colour strings for the palette.
   * Copied from goog.ui.ColorPicker.SIMPLE_GRID_COLORS
   * All colour pickers use this unless overridden with setColours.
   */
  static COLOURS: string[] = [
    // grays
    '#ffffff', '#cccccc', '#c0c0c0', '#999999',
    '#666666', '#333333', '#000000',  // reds
    '#ffcccc', '#ff6666', '#ff0000', '#cc0000',
    '#990000', '#660000', '#330000',  // oranges
    '#ffcc99', '#ff9966', '#ff9900', '#ff6600',
    '#cc6600', '#993300', '#663300',  // yellows
    '#ffff99', '#ffff66', '#ffcc66', '#ffcc33',
    '#cc9933', '#996633', '#663333',  // olives
    '#ffffcc', '#ffff33', '#ffff00', '#ffcc00',
    '#999900', '#666600', '#333300',  // greens
    '#99ff99', '#66ff99', '#33ff33', '#33cc00',
    '#009900', '#006600', '#003300',  // turquoises
    '#99ffff', '#33ffff', '#66cccc', '#00cccc',
    '#339999', '#336666', '#003333',  // blues
    '#ccffff', '#66ffff', '#33ccff', '#3366ff',
    '#3333ff', '#000099', '#000066',  // purples
    '#ccccff', '#9999ff', '#6666cc', '#6633ff',
    '#6600cc', '#333399', '#330099',  // violets
    '#ffccff', '#ff99ff', '#cc66cc', '#cc33cc',
    '#993399', '#663366', '#330033',
  ];

  /**
   * An array of tooltip strings for the palette.  If not the same length as
   * COLOURS, the colour's hex code will be used for any missing titles.
   * All colour pickers use this unless overridden with setColours.
   */
  static TITLES: string[] = [];

  /**
   * Number of columns in the palette.
   * All colour pickers use this unless overridden with setColumns.
   */
  static COLUMNS = 7;

  /** The field's colour picker element. */
  private picker_: Element|null = null;

  /** Index of the currently highlighted element. */
  private highlightedIndex_: number|null = null;

  /** Mouse click event data. */
  private onClickWrapper_: browserEvents.Data|null = null;

  /** Mouse move event data. */
  private onMouseMoveWrapper_: browserEvents.Data|null = null;

  /** Mouse enter event data. */
  private onMouseEnterWrapper_: browserEvents.Data|null = null;

  /** Mouse leave event data. */
  private onMouseLeaveWrapper_: browserEvents.Data|null = null;

  /** Key down event data. */
  private onKeyDownWrapper_: browserEvents.Data|null = null;

  /**
   * Serializable fields are saved by the serializer, non-serializable fields
   * are not. Editable fields should also be serializable.
   */
  override SERIALIZABLE = true;

  /** Mouse cursor style when over the hotspot that initiates the editor. */
  override CURSOR = 'default';

  /**
   * Used to tell if the field needs to be rendered the next time the block is
   * rendered. Colour fields are statically sized, and only need to be
   * rendered at initialization.
   */
  protected override isDirty_ = false;

  /** Array of colours used by this field.  If null, use the global list. */
  // AnyDuringMigration because:  Type 'null' is not assignable to type
  // 'string[]'.
  private colours_: string[] = null as AnyDuringMigration;

  /**
   * Array of colour tooltips used by this field.  If null, use the global
   * list.
   */
  // AnyDuringMigration because:  Type 'null' is not assignable to type
  // 'string[]'.
  private titles_: string[] = null as AnyDuringMigration;

  /**
   * Number of colour columns used by this field.  If 0, use the global
   * setting. By default use the global constants for columns.
   */
  private columns_ = 0;
  override size_: AnyDuringMigration;
  override clickTarget_: AnyDuringMigration;
  override value_: AnyDuringMigration;

  /**
   * @param opt_value The initial value of the field. Should be in '#rrggbb'
   *     format. Defaults to the first value in the default colour array. Also
   *     accepts Field.SKIP_SETUP if you wish to skip setup (only used by
   *     subclasses that want to handle configuration and setting the field
   *     value after their own constructors have run).
   * @param opt_validator A function that is called to validate changes to the
   *     field's value. Takes in a colour string & returns a validated colour
   *     string ('#rrggbb' format), or null to abort the change.Blockly.
   * @param opt_config A map of options used to configure the field.
   *     See the [field creation documentation]{@link
   * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/colour}
   * for a list of properties this parameter supports.
   */
  constructor(
      opt_value?: string|Sentinel, opt_validator?: Function,
      opt_config?: FieldColourConfig) {
    super(Field.SKIP_SETUP);

    if (opt_value === Field.SKIP_SETUP) {
      return;
    }
    if (opt_config) {
      this.configure_(opt_config);
    }
    this.setValue(opt_value);
    if (opt_validator) {
      this.setValidator(opt_validator);
    }
  }

  /**
   * Configure the field based on the given map of options.
   *
   * @param config A map of options to configure the field based on.
   */
  protected override configure_(config: FieldColourConfig) {
    super.configure_(config);
    if (config.colourOptions) this.colours_ = config.colourOptions;
    if (config.colourTitles) this.titles_ = config.colourTitles;
    if (config.columns) this.columns_ = config.columns;
  }

  /**
   * Create the block UI for this colour field.
   *
   * @internal
   */
  override initView() {
    this.size_ = new Size(
        this.getConstants()!.FIELD_COLOUR_DEFAULT_WIDTH,
        this.getConstants()!.FIELD_COLOUR_DEFAULT_HEIGHT);
    if (!this.getConstants()!.FIELD_COLOUR_FULL_BLOCK) {
      this.createBorderRect_();
      this.getBorderRect().style['fillOpacity'] = '1';
    } else if (this.sourceBlock_ instanceof BlockSvg) {
      this.clickTarget_ = this.sourceBlock_.getSvgRoot();
    }
  }

  override applyColour() {
    if (!this.getConstants()!.FIELD_COLOUR_FULL_BLOCK) {
      if (this.borderRect_) {
        this.borderRect_.style.fill = this.getValue() as string;
      }
    } else if (this.sourceBlock_ instanceof BlockSvg) {
      this.sourceBlock_.pathObject.svgPath.setAttribute(
          'fill', this.getValue() as string);
      this.sourceBlock_.pathObject.svgPath.setAttribute('stroke', '#fff');
    }
  }

  /**
   * Ensure that the input value is a valid colour.
   *
   * @param opt_newValue The input value.
   * @returns A valid colour, or null if invalid.
   */
  protected override doClassValidation_(opt_newValue?: AnyDuringMigration):
      string|null {
    if (typeof opt_newValue !== 'string') {
      return null;
    }
    return colour.parse(opt_newValue);
  }

  /**
   * Update the value of this colour field, and update the displayed colour.
   *
   * @param newValue The value to be saved. The default validator guarantees
   *     that this is a colour in '#rrggbb' format.
   */
  protected override doValueUpdate_(newValue: AnyDuringMigration) {
    this.value_ = newValue;
    if (this.borderRect_) {
      this.borderRect_.style.fill = newValue as string;
    } else if (
        this.sourceBlock_ && this.sourceBlock_.rendered &&
        this.sourceBlock_ instanceof BlockSvg) {
      this.sourceBlock_.pathObject.svgPath.setAttribute(
          'fill', newValue as string);
      this.sourceBlock_.pathObject.svgPath.setAttribute('stroke', '#fff');
    }
  }

  /**
   * Get the text for this field.  Used when the block is collapsed.
   *
   * @returns Text representing the value of this field.
   */
  override getText(): string {
    let colour = this.value_ as string;
    // Try to use #rgb format if possible, rather than #rrggbb.
    if (/^#(.)\1(.)\2(.)\3$/.test(colour)) {
      colour = '#' + colour[1] + colour[3] + colour[5];
    }
    return colour;
  }

  /**
   * Set a custom colour grid for this field.
   *
   * @param colours Array of colours for this block, or null to use default
   *     (FieldColour.COLOURS).
   * @param opt_titles Optional array of colour tooltips, or null to use default
   *     (FieldColour.TITLES).
   * @returns Returns itself (for method chaining).
   */
  setColours(colours: string[], opt_titles?: string[]): FieldColour {
    this.colours_ = colours;
    if (opt_titles) {
      this.titles_ = opt_titles;
    }
    return this;
  }

  /**
   * Set a custom grid size for this field.
   *
   * @param columns Number of columns for this block, or 0 to use default
   *     (FieldColour.COLUMNS).
   * @returns Returns itself (for method chaining).
   */
  setColumns(columns: number): FieldColour {
    this.columns_ = columns;
    return this;
  }

  /** Create and show the colour field's editor. */
  protected override showEditor_() {
    this.dropdownCreate_();
    // AnyDuringMigration because:  Argument of type 'Element | null' is not
    // assignable to parameter of type 'Node'.
    dropDownDiv.getContentDiv().appendChild(this.picker_ as AnyDuringMigration);

    dropDownDiv.showPositionedByField(this, this.dropdownDispose_.bind(this));

    // Focus so we can start receiving keyboard events.
    // AnyDuringMigration because:  Property 'focus' does not exist on type
    // 'Element'.
    (this.picker_ as AnyDuringMigration)!.focus({preventScroll: true});
  }

  /**
   * Handle a click on a colour cell.
   *
   * @param e Mouse event.
   */
  private onClick_(e: MouseEvent) {
    const cell = e.target as Element;
    const colour = cell && cell.getAttribute('data-colour');
    if (colour !== null) {
      this.setValue(colour);
      dropDownDiv.hideIfOwner(this);
    }
  }

  /**
   * Handle a key down event. Navigate around the grid with the
   * arrow keys. Enter selects the highlighted colour.
   *
   * @param e Keyboard event.
   */
  private onKeyDown_(e: KeyboardEvent) {
    let handled = false;
    if (e.keyCode === KeyCodes.UP) {
      this.moveHighlightBy_(0, -1);
      handled = true;
    } else if (e.keyCode === KeyCodes.DOWN) {
      this.moveHighlightBy_(0, 1);
      handled = true;
    } else if (e.keyCode === KeyCodes.LEFT) {
      this.moveHighlightBy_(-1, 0);
      handled = true;
    } else if (e.keyCode === KeyCodes.RIGHT) {
      this.moveHighlightBy_(1, 0);
      handled = true;
    } else if (e.keyCode === KeyCodes.ENTER) {
      // Select the highlighted colour.
      const highlighted = this.getHighlighted_();
      if (highlighted) {
        const colour = highlighted && highlighted.getAttribute('data-colour');
        if (colour !== null) {
          this.setValue(colour);
        }
      }
      dropDownDiv.hideWithoutAnimation();
      handled = true;
    }
    if (handled) {
      e.stopPropagation();
    }
  }

  /**
   * Move the currently highlighted position by dx and dy.
   *
   * @param dx Change of x
   * @param dy Change of y
   */
  private moveHighlightBy_(dx: number, dy: number) {
    if (!this.highlightedIndex_) {
      return;
    }

    const colours = this.colours_ || FieldColour.COLOURS;
    const columns = this.columns_ || FieldColour.COLUMNS;

    // Get the current x and y coordinates
    let x = this.highlightedIndex_ % columns;
    let y = Math.floor(this.highlightedIndex_ / columns);

    // Add the offset
    x += dx;
    y += dy;

    if (dx < 0) {
      // Move left one grid cell, even in RTL.
      // Loop back to the end of the previous row if we have room.
      if (x < 0 && y > 0) {
        x = columns - 1;
        y--;
      } else if (x < 0) {
        x = 0;
      }
    } else if (dx > 0) {
      // Move right one grid cell, even in RTL.
      // Loop to the start of the next row, if there's room.
      if (x > columns - 1 && y < Math.floor(colours.length / columns) - 1) {
        x = 0;
        y++;
      } else if (x > columns - 1) {
        x--;
      }
    } else if (dy < 0) {
      // Move up one grid cell, stop at the top.
      if (y < 0) {
        y = 0;
      }
    } else if (dy > 0) {
      // Move down one grid cell, stop at the bottom.
      if (y > Math.floor(colours.length / columns) - 1) {
        y = Math.floor(colours.length / columns) - 1;
      }
    }

    // Move the highlight to the new coordinates.
    const cell = this.picker_!.childNodes[y].childNodes[x] as Element;
    const index = y * columns + x;
    this.setHighlightedCell_(cell, index);
  }

  /**
   * Handle a mouse move event. Highlight the hovered colour.
   *
   * @param e Mouse event.
   */
  private onMouseMove_(e: MouseEvent) {
    const cell = e.target as Element;
    const index = cell && Number(cell.getAttribute('data-index'));
    if (index !== null && index !== this.highlightedIndex_) {
      this.setHighlightedCell_(cell, index);
    }
  }

  /** Handle a mouse enter event. Focus the picker. */
  private onMouseEnter_() {
    // AnyDuringMigration because:  Property 'focus' does not exist on type
    // 'Element'.
    (this.picker_ as AnyDuringMigration)!.focus({preventScroll: true});
  }

  /**
   * Handle a mouse leave event. Blur the picker and unhighlight
   * the currently highlighted colour.
   */
  private onMouseLeave_() {
    // AnyDuringMigration because:  Property 'blur' does not exist on type
    // 'Element'.
    (this.picker_ as AnyDuringMigration)!.blur();
    const highlighted = this.getHighlighted_();
    if (highlighted) {
      dom.removeClass(highlighted, 'blocklyColourHighlighted');
    }
  }

  /**
   * Returns the currently highlighted item (if any).
   *
   * @returns Highlighted item (null if none).
   */
  private getHighlighted_(): HTMLElement|null {
    if (!this.highlightedIndex_) {
      return null;
    }

    const columns = this.columns_ || FieldColour.COLUMNS;
    const x = this.highlightedIndex_ % columns;
    const y = Math.floor(this.highlightedIndex_ / columns);
    const row = this.picker_!.childNodes[y];
    if (!row) {
      return null;
    }
    const col = row.childNodes[x] as HTMLElement;
    return col;
  }

  /**
   * Update the currently highlighted cell.
   *
   * @param cell the new cell to highlight
   * @param index the index of the new cell
   */
  private setHighlightedCell_(cell: Element, index: number) {
    // Unhighlight the current item.
    const highlighted = this.getHighlighted_();
    if (highlighted) {
      dom.removeClass(highlighted, 'blocklyColourHighlighted');
    }
    // Highlight new item.
    dom.addClass(cell, 'blocklyColourHighlighted');
    // Set new highlighted index.
    this.highlightedIndex_ = index;

    // Update accessibility roles.
    // AnyDuringMigration because:  Argument of type 'string | null' is not
    // assignable to parameter of type 'string | number | boolean | string[]'.
    aria.setState(
        this.picker_ as Element, aria.State.ACTIVEDESCENDANT,
        cell.getAttribute('id') as AnyDuringMigration);
  }

  /** Create a colour picker dropdown editor. */
  private dropdownCreate_() {
    const columns = this.columns_ || FieldColour.COLUMNS;
    const colours = this.colours_ || FieldColour.COLOURS;
    const titles = this.titles_ || FieldColour.TITLES;
    const selectedColour = this.getValue();
    // Create the palette.
    const table = (document.createElement('table'));
    table.className = 'blocklyColourTable';
    table.tabIndex = 0;
    table.dir = 'ltr';
    aria.setRole(table, aria.Role.GRID);
    aria.setState(table, aria.State.EXPANDED, true);
    aria.setState(
        table, aria.State.ROWCOUNT, Math.floor(colours.length / columns));
    aria.setState(table, aria.State.COLCOUNT, columns);
    let row: Element;
    for (let i = 0; i < colours.length; i++) {
      if (i % columns === 0) {
        row = document.createElement('tr');
        aria.setRole(row, aria.Role.ROW);
        table.appendChild(row);
      }
      const cell = (document.createElement('td'));
      row!.appendChild(cell);
      // This becomes the value, if clicked.
      cell.setAttribute('data-colour', colours[i]);
      cell.title = titles[i] || colours[i];
      cell.id = idGenerator.getNextUniqueId();
      // AnyDuringMigration because:  Argument of type 'number' is not
      // assignable to parameter of type 'string'.
      cell.setAttribute('data-index', i as AnyDuringMigration);
      aria.setRole(cell, aria.Role.GRIDCELL);
      aria.setState(cell, aria.State.LABEL, colours[i]);
      aria.setState(cell, aria.State.SELECTED, colours[i] === selectedColour);
      cell.style.backgroundColor = colours[i];
      if (colours[i] === selectedColour) {
        cell.className = 'blocklyColourSelected';
        this.highlightedIndex_ = i;
      }
    }

    // Configure event handler on the table to listen for any event in a cell.
    this.onClickWrapper_ = browserEvents.conditionalBind(
        table, 'click', this, this.onClick_, true);
    this.onMouseMoveWrapper_ = browserEvents.conditionalBind(
        table, 'mousemove', this, this.onMouseMove_, true);
    this.onMouseEnterWrapper_ = browserEvents.conditionalBind(
        table, 'mouseenter', this, this.onMouseEnter_, true);
    this.onMouseLeaveWrapper_ = browserEvents.conditionalBind(
        table, 'mouseleave', this, this.onMouseLeave_, true);
    this.onKeyDownWrapper_ =
        browserEvents.conditionalBind(table, 'keydown', this, this.onKeyDown_);

    this.picker_ = table;
  }

  /** Disposes of events and DOM-references belonging to the colour editor. */
  private dropdownDispose_() {
    if (this.onClickWrapper_) {
      browserEvents.unbind(this.onClickWrapper_);
      this.onClickWrapper_ = null;
    }
    if (this.onMouseMoveWrapper_) {
      browserEvents.unbind(this.onMouseMoveWrapper_);
      this.onMouseMoveWrapper_ = null;
    }
    if (this.onMouseEnterWrapper_) {
      browserEvents.unbind(this.onMouseEnterWrapper_);
      this.onMouseEnterWrapper_ = null;
    }
    if (this.onMouseLeaveWrapper_) {
      browserEvents.unbind(this.onMouseLeaveWrapper_);
      this.onMouseLeaveWrapper_ = null;
    }
    if (this.onKeyDownWrapper_) {
      browserEvents.unbind(this.onKeyDownWrapper_);
      this.onKeyDownWrapper_ = null;
    }
    this.picker_ = null;
    this.highlightedIndex_ = null;
  }

  /**
   * Construct a FieldColour from a JSON arg object.
   *
   * @param options A JSON object with options (colour).
   * @returns The new field instance.
   * @nocollapse
   * @internal
   */
  static fromJson(options: FieldColourFromJsonConfig): FieldColour {
    // `this` might be a subclass of FieldColour if that class doesn't override
    // the static fromJson method.
    return new this(options['colour'], undefined, options);
  }
}

/** The default value for this field. */
// AnyDuringMigration because:  Property 'DEFAULT_VALUE' is protected and only
// accessible within class 'FieldColour' and its subclasses.
(FieldColour.prototype as AnyDuringMigration).DEFAULT_VALUE =
    FieldColour.COLOURS[0];

/** CSS for colour picker.  See css.js for use. */
Css.register(`
.blocklyColourTable {
  border-collapse: collapse;
  display: block;
  outline: none;
  padding: 1px;
}

.blocklyColourTable>tr>td {
  border: .5px solid #888;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  height: 20px;
  padding: 0;
  width: 20px;
}

.blocklyColourTable>tr>td.blocklyColourHighlighted {
  border-color: #eee;
  box-shadow: 2px 2px 7px 2px rgba(0,0,0,.3);
  position: relative;
}

.blocklyColourSelected, .blocklyColourSelected:hover {
  border-color: #eee !important;
  outline: 1px solid #333;
  position: relative;
}
`);

fieldRegistry.register('field_colour', FieldColour);

/**
 * Config options for the colour field.
 */
export interface FieldColourConfig extends FieldConfig {
  colourOptions?: string[];
  colourTitles?: string[];
  columns?: number;
}

/**
 * fromJson config options for the colour field.
 */
export interface FieldColourFromJsonConfig extends FieldColourConfig {
  colour?: string;
}
