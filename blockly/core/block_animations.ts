/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Methods animating a block on connection and disconnection.
 *
 * @namespace Blockly.blockAnimations
 */
import * as goog from '../closure/goog/goog.js';
goog.declareModuleId('Blockly.blockAnimations');

import type {BlockSvg} from './block_svg.js';
import * as dom from './utils/dom.js';
import {Svg} from './utils/svg.js';


/** A bounding box for a cloned block. */
interface CloneRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** PID of disconnect UI animation.  There can only be one at a time. */
let disconnectPid: ReturnType<typeof setTimeout>|null = null;

/** SVG group of wobbling block.  There can only be one at a time. */
let disconnectGroup: SVGElement|null = null;


/**
 * Play some UI effects (sound, animation) when disposing of a block.
 *
 * @param block The block being disposed of.
 * @alias Blockly.blockAnimations.disposeUiEffect
 * @internal
 */
export function disposeUiEffect(block: BlockSvg) {
  const workspace = block.workspace;
  const svgGroup = block.getSvgRoot();
  workspace.getAudioManager().play('delete');

  const xy = workspace.getSvgXY(svgGroup);
  // Deeply clone the current block.
  const clone: SVGGElement = svgGroup.cloneNode(true) as SVGGElement;
  clone.setAttribute('transform', 'translate(' + xy.x + ',' + xy.y + ')');
  workspace.getParentSvg().appendChild(clone);
  const cloneRect =
      {'x': xy.x, 'y': xy.y, 'width': block.width, 'height': block.height};
  disposeUiStep(clone, cloneRect, workspace.RTL, new Date(), workspace.scale);
}
/**
 * Animate a cloned block and eventually dispose of it.
 * This is a class method, not an instance method since the original block has
 * been destroyed and is no longer accessible.
 *
 * @param clone SVG element to animate and dispose of.
 * @param rect Starting rect of the clone.
 * @param rtl True if RTL, false if LTR.
 * @param start Date of animation's start.
 * @param workspaceScale Scale of workspace.
 */
function disposeUiStep(
    clone: Element, rect: CloneRect, rtl: boolean, start: Date,
    workspaceScale: number) {
  const ms = new Date().getTime() - start.getTime();
  const percent = ms / 150;
  if (percent > 1) {
    dom.removeNode(clone);
  } else {
    const x =
        rect.x + (rtl ? -1 : 1) * rect.width * workspaceScale / 2 * percent;
    const y = rect.y + rect.height * workspaceScale * percent;
    const scale = (1 - percent) * workspaceScale;
    clone.setAttribute(
        'transform',
        'translate(' + x + ',' + y + ')' +
            ' scale(' + scale + ')');
    setTimeout(disposeUiStep, 10, clone, rect, rtl, start, workspaceScale);
  }
}

/**
 * Play some UI effects (sound, ripple) after a connection has been established.
 *
 * @param block The block being connected.
 * @alias Blockly.blockAnimations.connectionUiEffect
 * @internal
 */
export function connectionUiEffect(block: BlockSvg) {
  const workspace = block.workspace;
  const scale = workspace.scale;
  workspace.getAudioManager().play('click');
  if (scale < 1) {
    return;  // Too small to care about visual effects.
  }
  // Determine the absolute coordinates of the inferior block.
  const xy = workspace.getSvgXY(block.getSvgRoot());
  // Offset the coordinates based on the two connection types, fix scale.
  if (block.outputConnection) {
    xy.x += (block.RTL ? 3 : -3) * scale;
    xy.y += 13 * scale;
  } else if (block.previousConnection) {
    xy.x += (block.RTL ? -23 : 23) * scale;
    xy.y += 3 * scale;
  }
  const ripple = dom.createSvgElement(
      Svg.CIRCLE, {
        'cx': xy.x,
        'cy': xy.y,
        'r': 0,
        'fill': 'none',
        'stroke': '#888',
        'stroke-width': 10,
      },
      workspace.getParentSvg());
  // Start the animation.
  connectionUiStep(ripple, new Date(), scale);
}

/**
 * Expand a ripple around a connection.
 *
 * @param ripple Element to animate.
 * @param start Date of animation's start.
 * @param scale Scale of workspace.
 */
function connectionUiStep(ripple: SVGElement, start: Date, scale: number) {
  const ms = new Date().getTime() - start.getTime();
  const percent = ms / 150;
  if (percent > 1) {
    dom.removeNode(ripple);
  } else {
    ripple.setAttribute('r', (percent * 25 * scale).toString());
    ripple.style.opacity = (1 - percent).toString();
    disconnectPid = setTimeout(connectionUiStep, 10, ripple, start, scale);
  }
}

/**
 * Play some UI effects (sound, animation) when disconnecting a block.
 *
 * @param block The block being disconnected.
 * @alias Blockly.blockAnimations.disconnectUiEffect
 * @internal
 */
export function disconnectUiEffect(block: BlockSvg) {
  disconnectUiStop();
  block.workspace.getAudioManager().play('disconnect');
  if (block.workspace.scale < 1) {
    return;  // Too small to care about visual effects.
  }
  // Horizontal distance for bottom of block to wiggle.
  const DISPLACEMENT = 10;
  // Scale magnitude of skew to height of block.
  const height = block.getHeightWidth().height;
  let magnitude = Math.atan(DISPLACEMENT / height) / Math.PI * 180;
  if (!block.RTL) {
    magnitude *= -1;
  }
  // Start the animation.
  disconnectGroup = block.getSvgRoot();
  disconnectUiStep(disconnectGroup, magnitude, new Date());
}

/**
 * Animate a brief wiggle of a disconnected block.
 *
 * @param group SVG element to animate.
 * @param magnitude Maximum degrees skew (reversed for RTL).
 * @param start Date of animation's start.
 */
function disconnectUiStep(group: SVGElement, magnitude: number, start: Date) {
  const DURATION = 200;  // Milliseconds.
  const WIGGLES = 3;     // Half oscillations.

  const ms = new Date().getTime() - start.getTime();
  const percent = ms / DURATION;

  let skew = '';
  if (percent <= 1) {
    const val = Math.round(
        Math.sin(percent * Math.PI * WIGGLES) * (1 - percent) * magnitude);
    skew = `skewX(${val})`;
    disconnectPid = setTimeout(disconnectUiStep, 10, group, magnitude, start);
  }
  (group as AnyDuringMigration).skew_ = skew;
  group.setAttribute(
      'transform',
      (group as AnyDuringMigration).translate_ +
          (group as AnyDuringMigration).skew_);
}

/**
 * Stop the disconnect UI animation immediately.
 *
 * @alias Blockly.blockAnimations.disconnectUiStop
 * @internal
 */
export function disconnectUiStop() {
  if (disconnectGroup) {
    if (disconnectPid) {
      clearTimeout(disconnectPid);
    }
    const group = disconnectGroup;
    (group as AnyDuringMigration).skew_ = '';
    group.setAttribute('transform', (group as AnyDuringMigration).translate_);
    disconnectGroup = null;
  }
}
