/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The interface for an AST node location SVG.
 *
 * @namespace Blockly.IASTNodeLocationSvg
 */
import * as goog from '../../closure/goog/goog.js';
goog.declareModuleId('Blockly.IASTNodeLocationSvg');

import type {IASTNodeLocation} from './i_ast_node_location.js';


/**
 * An AST node location SVG interface.
 *
 * @alias Blockly.IASTNodeLocationSvg
 */
export interface IASTNodeLocationSvg extends IASTNodeLocation {
  /**
   * Add the marker SVG to this node's SVG group.
   *
   * @param markerSvg The SVG root of the marker to be added to the SVG group.
   */
  setMarkerSvg(markerSvg: SVGElement|null): void;

  /**
   * Add the cursor SVG to this node's SVG group.
   *
   * @param cursorSvg The SVG root of the cursor to be added to the SVG group.
   */
  setCursorSvg(cursorSvg: SVGElement|null): void;
}
