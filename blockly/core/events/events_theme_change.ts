/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Events fired as a result of a theme update.
 *
 * @class
 */
import * as goog from '../../closure/goog/goog.js';
goog.declareModuleId('Blockly.Events.ThemeChange');

import * as registry from '../registry.js';
import {AbstractEventJson} from './events_abstract.js';
import {UiBase} from './events_ui_base.js';
import * as eventUtils from './utils.js';


/**
 * Class for a theme change event.
 *
 * @alias Blockly.Events.ThemeChange
 */
export class ThemeChange extends UiBase {
  themeName?: string;
  override type = eventUtils.THEME_CHANGE;

  /**
   * @param opt_themeName The theme name. Undefined for a blank event.
   * @param opt_workspaceId The workspace identifier for this event.
   *    event. Undefined for a blank event.
   */
  constructor(opt_themeName?: string, opt_workspaceId?: string) {
    super(opt_workspaceId);

    /** The theme name. */
    this.themeName = opt_themeName;
  }

  /**
   * Encode the event as JSON.
   *
   * @returns JSON representation.
   */
  override toJson(): ThemeChangeJson {
    const json = super.toJson() as ThemeChangeJson;
    if (!this.themeName) {
      throw new Error(
          'The theme name is undefined. Either pass a theme name to ' +
          'the constructor, or call fromJson');
    }
    json['themeName'] = this.themeName;
    return json;
  }

  /**
   * Decode the JSON event.
   *
   * @param json JSON representation.
   */
  override fromJson(json: ThemeChangeJson) {
    super.fromJson(json);
    this.themeName = json['themeName'];
  }
}

export interface ThemeChangeJson extends AbstractEventJson {
  themeName: string;
}

registry.register(registry.Type.EVENT, eventUtils.THEME_CHANGE, ThemeChange);
