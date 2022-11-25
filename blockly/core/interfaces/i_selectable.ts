/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The interface for an object that is selectable.
 *
 * @namespace Blockly.ISelectable
 */
import * as goog from '../../closure/goog/goog.js';
goog.declareModuleId('Blockly.ISelectable');

import type {IDeletable} from './i_deletable.js';
import type {IMovable} from './i_movable.js';


/**
 * The interface for an object that is selectable.
 *
 * @alias Blockly.ISelectable
 */
export interface ISelectable extends IDeletable, IMovable {
  id: string;

  /** Select this.  Highlight it visually. */
  select(): void;

  /** Unselect this.  Unhighlight it visually. */
  unselect(): void;
}
