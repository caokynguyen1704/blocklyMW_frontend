'use strict';
const plusImage =
	'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC' +
	'9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT' +
	'ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz' +
	'FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW' +
	'MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS' +
	'44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==';
const minusImage =
	'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw' +
	'MC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPS' +
	'JNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAw' +
	'IDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K';
const switchImage = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMzIiCiAgIGhlaWdodD0iMzIiCiAgIHZpZXdCb3g9IjAgMCA4LjQ2NjY2NjYgOC40NjY2NjY2IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc1IgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8ZwogICAgICAgaWQ9InBhdGgyMzkiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjkyOTY2OTI4LDAsMCwwLjkyOTY2OTI4LDAuMjk3NzM3OTcsMC4yOTc3Mzc5NikiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuMDIxNTEzMDM7c3Ryb2tlLWRhc2hhcnJheTpub25lIj4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDowLjAyMTUxMzAzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIgogICAgICAgICBkPSJNIDQuMjMzMzMzMywwLjI2NDU4MzMzIFYgMC43OTM3NSBDIDUuNzA3MTg5OSwwLjc3MzQxOTUgNi42NjU3NDMsMS44MDA5MjM3IDYuNjY1NzQzLDEuODAwOTIzNyBjIDAsMCAxLjAyNzUwNDEsMC44ODgzOTQ3IDEuMDA3MTczNywyLjQzMjQwOTYgQyA3LjY1MjYxNTksNS43NzUwNTMyIDYuNjY4NjY4OSw2LjY2MzEwNyA2LjY2NTc0Myw2LjY2NTc0MyBMIDYuNDc4MTU3Niw2LjQ3ODE1NzYgNi4yOTEwODg5LDcuMzEzMjQ4NyA3LjIwODAyMTQsNy4yMDgwMjE0IDYuNjgwMjEyNCw2LjY4MDIxMjQgNy4wMTYxMzk2LDcuMDE2MTM5NiBjIDAsMCAxLjE2MjQ4NTUsLTAuOTg4NzI5NCAxLjE4NTk0MzcsLTIuNzgyODA2MyAwLjAyMzQ1OCwtMS43OTQwNzY5IC0xLjE2MjIwMjksLTIuODA2NTQ3IC0xLjE2MjIwMjksLTIuODA2NTQ3IDAsMCAtMS4wNTczNzIzLC0xLjE4NTY2MTIxIC0yLjgwNjU0NzEsLTEuMTYyMjAyOTcgeiIKICAgICAgICAgaWQ9InBhdGgxMjYwIiAvPgogICAgICA8cGF0aAogICAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4wMjE1MTMwMztzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgICAgIGQ9Ik0gNC4yMjg1MTU2LC0wLjAzNTE1NjI1IDMuOTMzNTkzOCwtMC4wMzEyNSBWIDAuMjYzNjcxODggMS4wOTc2NTYyIEwgNC4yMzgyODEyLDEuMDkzNzUgQyA1LjU3MDk1MTksMS4wNzUzNjcgNi40NDcyNjU2LDIuMDA1ODU5NCA2LjQ0NzI2NTYsMi4wMDU4NTk0IGwgMC4wMDk3NywwLjAxMTcxOSAwLjAxMTcxOSwwLjAwOTc3IGMgMCwwIDAuOTIyODU1MywwLjc5MTczMzcgMC45MDQyOTY5LDIuMjAxMTcxOCBDIDcuMzU4MTg1NSw1LjM1NzUyNDEgNi44NTc5MDU3LDUuOTcyNDgyIDYuNjM4Njc2NSw2LjIxNDg0ODMgTCA2LjMwNDY4NzUsNS44ODA4NTk0IDUuOTA2MjUsNy42NjAxNTYyIDcuODU5Mzc1LDcuNDM1NTQ2OSA3LjQxNjAxNTYsNi45OTIxODc1IEMgNy43MDM1Mjk2LDYuNzA0NTEyNyA4LjQ4MDg2NDQsNS44NDkxOTA4IDguNTAxOTUzMSw0LjIzNjMyODEgOC41MjY5NzAxLDIuMzIzMDE5MiA3LjI2MzE0MDIsMS4yMjczNzQ3IDcuMjQ0MTQwNiwxLjIxMDkzNzUgYyAtMC4wMjc0LC0wLjAzMDQyMyAtMS4xNTIxMzMsLTEuMjcxMDg1MSAtMy4wMTU2MjUsLTEuMjQ2MDkzNzUgeiBtIDIuNjMyODEyNSwxLjYwOTM3NDk1IDAuMDIzNDM3LDAuMDIxNDg0IGMgMCwwIC0wLjAxNTM4OCwtMC4wMTE0NjQgLTAuMDE1NjI1LC0wLjAxMTcxOSAtMS4wODZlLTQsLTkuNWUtNSAtMC4wMDc4MSwtMC4wMDk3NyAtMC4wMDc4MSwtMC4wMDk3NyB6IgogICAgICAgICBpZD0icGF0aDEyNjIiIC8+CiAgICA8L2c+CiAgICA8ZwogICAgICAgaWQ9InBhdGgyMzktMiIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuOTI5NjY5MjgsMCwwLDAuOTI5NjY5MjgsMC4yOTc3Mzc5NywwLjI5NzczNzk2KSIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4wMjE1MTMwMztzdHJva2UtZGFzaGFycmF5Om5vbmUiPgogICAgICA8cGF0aAogICAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMDIxNTEzMDM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgICAgIGQ9Ik0gNC4yMzMzMzMzLDguMjAyMDgzMyBWIDcuNjcyOTE2NiBDIDIuNzU5NDc2Nyw3LjY5MzI0NzYgMS44MDA5MjM2LDYuNjY1NzQyOSAxLjgwMDkyMzYsNi42NjU3NDI5IGMgMCwwIC0xLjAyNzUwMzk0LC0wLjg4ODM5NDcgLTEuMDA3MTczNTQsLTIuNDMyNDA5NiBDIDAuODE0MDUwODYsMi42OTE2MTM0IDEuNzk3OTk3NywxLjgwMzU1OTYgMS44MDA5MjM2LDEuODAwOTIzNiBMIDEuOTg4NTA5LDEuOTg4NTA5IDIuMTc1NTc3NywxLjE1MzQxOCAxLjI1ODY0NTMsMS4yNTg2NDUzIDEuNzg2NDU0MiwxLjc4NjQ1NDIgMS40NTA1MjcsMS40NTA1MjcgYyAwLDAgLTEuMTYyNDg1MzQsMC45ODg3Mjk0IC0xLjE4NTk0MzU0LDIuNzgyODA2MyAtMC4wMjM0NTgsMS43OTQwNzY5IDEuMTYyMjAyNzQsMi44MDY1NDcgMS4xNjIyMDI3NCwyLjgwNjU0NyAwLDAgMS4wNTczNzIzLDEuMTg1NjYxMiAyLjgwNjU0NzEsMS4xNjIyMDMgeiIKICAgICAgICAgaWQ9InBhdGgxMjU0IiAvPgogICAgICA8cGF0aAogICAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4wMjE1MTMwMztzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgICAgIGQ9Ik0gMi41NjA1NDY5LDAuODA2NjQwNjMgMC42MDc0MjE4NywxLjAzMTI1IDEuMDUwNzgxMiwxLjQ3NDYwOTQgQyAwLjc2MzI2NzM2LDEuNzYyMjg0MiAtMC4wMTQwNjc0OSwyLjYxNTY1MyAtMC4wMzUxNTYyNSw0LjIyODUxNTYgLTAuMDYwMTczNzQsNi4xNDE4NjMxIDEuMjAzNzA2Nyw3LjIzOTQ2NTggMS4yMjI2NTYyLDcuMjU1ODU5NCBjIDAuMDI3NCwwLjAzMDQyMyAxLjE1MjEzMzEsMS4yNzEwODUgMy4wMTU2MjUsMS4yNDYwOTM3IGwgMC4yOTQ5MjE5LC0wLjAwMzkxIFYgOC4yMDExNzE5IDcuMzY5MTQwNiBsIC0wLjMwNDY4NzUsMC4wMDM5MSBDIDIuODk1ODQ1MSw3LjM5MTQzMDMgMi4wMTk1MzEyLDYuNDYwOTM3NSAyLjAxOTUzMTMsNi40NjA5Mzc1IGwgLTAuMDA5NzcsLTAuMDExNzE5IC0wLjAxMTcxOSwtMC4wMDk3NyBjIDAsMCAtMC45MjI4NTUzLC0wLjc5MzY4NjggLTAuOTA0Mjk2OSwtMi4yMDMxMjUgMC4wMTQ4NTEsLTEuMTI3ODE2OSAwLjUxMjYzNTMsLTEuNzQxMTc3MiAwLjczMjQyMTksLTEuOTg0Mzc1IGwgMC4zMzU5NDIxLDAuMzMzOTg5IHogTSAxLjU4MjAzMTIsNi44NzEwOTM3IGMgMCwwIDAuMDE1Mzg4LDAuMDExNDY0IDAuMDE1NjI1LDAuMDExNzE5IDEuMDg2ZS00LDkuNDllLTUgMC4wMDc4MSwwLjAwOTc3IDAuMDA3ODEsMC4wMDk3NyB6IgogICAgICAgICBpZD0icGF0aDEyNTYiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K';

function createPlusField(args = undefined) {
	const plus = new Blockly.FieldImage(plusImage, 15, 15, undefined, (plusField) => {
		const block = plusField.getSourceBlock();

		if (block.isInFlyout) {
			return;
		}

		Blockly.Events.setGroup(true);
		const oldExtraState = getExtraBlockState(block);
		block.plus(plusField.args_);
		const newExtraState = getExtraBlockState(block);

		if (oldExtraState != newExtraState) {
			Blockly.Events.fire(new Blockly.Events.BlockChange(
				block, 'mutation', null, oldExtraState, newExtraState));
		}
		Blockly.Events.setGroup(false);
	});
	plus.args_ = args;
	return plus;
}

function createMinusField(args = undefined) {
	const minus = new Blockly.FieldImage(minusImage, 15, 15, undefined, (minusField) => {
		const block = minusField.getSourceBlock();

		if (block.isInFlyout) {
			return;
		}

		Blockly.Events.setGroup(true);
		const oldExtraState = getExtraBlockState(block);
		block.minus(minusField.args_);
		const newExtraState = getExtraBlockState(block);

		if (oldExtraState != newExtraState) {
			Blockly.Events.fire(new Blockly.Events.BlockChange(
				block, 'mutation', null, oldExtraState, newExtraState));
		}
		Blockly.Events.setGroup(false);
	});
	minus.args_ = args;
	return minus;
}

function createSwitchField(args = undefined) {
	const switch_ = new Blockly.FieldImage(switchImage, 15, 15, undefined, (switchField) => {
		const block = switchField.getSourceBlock();

		if (block.isInFlyout) {
			return;
		}

		Blockly.Events.setGroup(true);
		const oldExtraState = getExtraBlockState(block);
		block.switch(switchField.args_);
		const newExtraState = getExtraBlockState(block);

		if (oldExtraState != newExtraState) {
			Blockly.Events.fire(new Blockly.Events.BlockChange(
				block, 'mutation', null, oldExtraState, newExtraState));
		}
		Blockly.Events.setGroup(false);
	});
	switch_.args_ = args;
	return switch_;
}

function getExtraBlockState(block) {
	if (block.saveExtraState) {
		const state = block.saveExtraState();
		return state ? JSON.stringify(state) : '';
	}
	return '';
}

/**
 * @type Blockly.Block
 */
Blockly.Blocks['n-logic_if'] = {
	elseIfCount: 0,
	hasElse: false,
	init: function () {
		this.appendDummyInput()
			.appendField(createPlusField("_elseif"), "ADD_ELSEIF")
		this.appendValueInput("CONDITION0")
			.appendField("if");
		this.appendStatementInput("BODY0")
			.appendField("then");
		this.appendDummyInput("ADD_ELSE")
			.appendField("else")
			.appendField(createPlusField("_else"), "ADD_ELSE")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(225);
		this.setTooltip("Execute body is condition is true.");
		this.setHelpUrl("");
	},

	saveExtraState: function () {
		if (!this.elseifCount && !this.hasElse) {
			return null;
		}
		return {
			elseIfCount: this.elseIfCount ? this.elseIfCount : 0,
			hasElse: this.hasElse ? this.hasElse : false,
		}
	},

	loadExtraState: function (state) {
		const elseIfCount = state.elseIfCount;
		this.hasElse = state.hasElse;
		if (this.hasElse && !this.getInput("ELSE")) {
			this.updateShape_(elseIfCount, true);
		}
		this.updateShape_(elseIfCount, false)
	},

	updateShape_: function (elseifCount, doElse) {
		while (this.elseIfCount < elseifCount) {
			this.addElseIf();
		}
		while (this.elseIfCount > elseifCount) {
			this.removeElseIf();
		}
		if (doElse && !this.getInput("ELSE")) {
			this.addElse();
		} else if (!doElse && this.getInput("ELSE")) {
			this.removeElse();
		}
	},

	addElseIf: function () {
		this.elseIfCount++;
		this.appendValueInput("CONDITION" + this.elseIfCount)
			.appendField("else if")
			.appendField(createMinusField(this.elseIfCount), 'MINUS' + this.elseIfCount)
		this.appendStatementInput("BODY" + this.elseIfCount)
			.appendField("then")

		if (this.getInput("ADD_ELSE")) {
			this.moveInputBefore('ADD_ELSE', null);
		}

		if (this.getInput("ELSE")) {
			this.moveInputBefore("ELSE", null);
			this.moveInputBefore("_MINUS_ELSE", null);
		}
	},

	removeElseIf: function (index = undefined) {
		if (index !== undefined && index != this.elseIfCount) {
			const elseIfIndex = 1 + index * 2;
			const inputs = this.inputList;
			let connection = inputs[elseIfIndex].connection; // If connection.
			if (connection.isConnected()) {
				connection.disconnect();
			}
			connection = inputs[elseIfIndex + 1].connection; // Do connection.
			if (connection.isConnected()) {
				connection.disconnect();
			}
			this.bumpNeighbours();
			for (let i = elseIfIndex + 2, input;
				(input = this.inputList[i]); i++) {
				if (input.name == 'ELSE' || 'ADD_ELSE') {
					break; // Should be last, so break.
				}
				const targetConnection = input.connection.targetConnection;
				if (targetConnection) {
					this.inputList[i - 2].connection.connect(targetConnection);
				}
			}
		}

		this.removeInput("CONDITION" + this.elseIfCount);
		this.removeInput("BODY" + this.elseIfCount);

		this.elseIfCount--;
	},

	addElse: function () {
		this.removeInput("ADD_ELSE");
		this.appendStatementInput("ELSE")
			.appendField("else")
		this.appendDummyInput("_MINUS_ELSE")
			.appendField(createMinusField("_else"), "MINUS_ELSE");
		this.hasElse = true;
	},

	removeElse: function () {
		this.removeInput("ELSE")
		this.removeInput("_MINUS_ELSE")
		this.appendDummyInput("ADD_ELSE")
			.appendField("else")
			.appendField(createPlusField("_else"));
		this.hasElse = false
	},

	plus: function (arg) {
		if (arg === '_else') {
			this.addElse();
		} else {
			this.addElseIf();
		}
	},

	minus: function (arg) {
		if (arg === '_else') {
			this.removeElse();
		} else {
			if (this.elseIfCount == 0) {
				return;
			}
			this.removeElseIf(arg);
		}
	}
};

Blockly.Blocks['n-logic_boolean'] = {
	value: "true",

	init: function () {
		this.appendDummyInput("BOOL")
			.appendField("true", "VALUE")
			.appendField(createSwitchField(), "SWITCH")
		this.setOutput(true, "Boolean");
		this.setColour(270);
		this.setTooltip("Boolean. Represents either true or false.");
		this.setHelpUrl("");
	},

	saveExtraState: function () {
		return {
			value: this.value,
		}
	},

	loadExtraState: function (state) {
		this.value = state.value;
		this.updateShape_(this.value)
	},

	updateShape_: function (value) {
		const input = this.getInput("BOOL");
		input.removeField("VALUE");
		input.removeField("SWITCH");
		let validated_value = value;
		if (!(validated_value === "true" || validated_value === "false")) {
			validated_value = "false";
			this.value = "false";
		}
		input.appendField(validated_value, "VALUE");
		input.appendField(createSwitchField(), "SWITCH")
	},

	switch: function () {
		const input = this.getInput("BOOL");
		input.removeField("VALUE");
		if (this.value === "true") {
			input.insertFieldAt(0, "false", "VALUE");
			this.value = "false";
		} else if (this.value === "false") {
			input.insertFieldAt(0, "true", "VALUE");
			this.value = "true";
		} else {
			input.insertFieldAt(0, "false", "VALUE");
			this.value = "false"
		}
	},

	getValue() {
		return this.value;
	}
}

Blockly.Blocks['n-logic_compare'] = {
	init: function () {
		this.appendValueInput("LEFT");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				['=', 'EQ'],
				['\u2260', 'NEQ'],
				['\u200F<', 'LT'],
				['\u200F\u2264', 'LTE'],
				['\u200F>', 'GT'],
				['\u200F\u2265', 'GTE'],
			]), "OP")
		this.appendValueInput("RIGHT");
		this.setOutput(true, "Boolean");
		this.setColour(270);
		this.setTooltip("Compare two values and output the result.");
		this.setHelpUrl("");
	}
}

Blockly.Blocks['n-logic_operation'] = {
	init: function () {
		this.appendValueInput("LEFT");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				['and', 'AND'],
				['or', 'OR'],
			]), "OP")
		this.appendValueInput("RIGHT");
		this.setOutput(true, "Boolean");
		this.setColour(270);
		this.setTooltip("Logical operations");
		this.setHelpUrl("");
	}
}

Blockly.Blocks['n-logic_invert'] = {
	init: function () {
		this.appendValueInput("BOOL")
			.appendField("not");
		this.setInputsInline(true);
		this.setOutput(true, "Boolean");
		this.setColour(270);
		this.setTooltip("Invert the result.");
		this.setHelpUrl("");
	}
}

Blockly.Blocks['n-logic_nil'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("nil")
		this.setInputsInline(true);
		this.setOutput(true, "Boolean");
		this.setColour(270);
		this.setTooltip("Nothing.");
		this.setHelpUrl("");
	}
}

Blockly.Blocks['n-logic_ternary'] = {
	init: function () {
		this.appendValueInput("COND");
		this.appendValueInput("RETURN")
			.appendField("?");
		this.appendValueInput("DEFAULT")
			.appendField(":");
		this.setInputsInline(true);
		this.setOutput(true, "Boolean");
		this.setColour(270);
		this.setTooltip("If the first input is true, return the second input, otherwise return the third(default) input.");
		this.setHelpUrl("");
	}
}