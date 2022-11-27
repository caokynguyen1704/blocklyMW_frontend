function appendConnectionSwitch(block) {
	block.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "__GENERATE_AS_INLINE")
	block.getField("__GENERATE_AS_INLINE").setCheckCharacter('𝒊')

	block.updateShape_ = function () {
		if (block.getFieldValue("__GENERATE_AS_INLINE") === 'TRUE') {
			if (block.previousConnection && block.previousConnection.isConnected()) {
				block.previousConnection.disconnect();
			}
			if (block.nextConnection && block.nextConnection.isConnected()) {
				block.nextConnection.disconnect();
			}
			block.setPreviousStatement(false, null);
			block.setNextStatement(false, null);
			block.setOutput(true, null);
		} else {
			if (block.outputConnection && block.outputConnection.isConnected()) {
				block.outputConnection.disconnect();
			}
			block.setPreviousStatement(true, null);
			block.setNextStatement(true, null);
			block.setOutput(false, null);
		}
	}

	block.onchange = function (event) {
		if (Blockly.Events.CLICK) {
			block.updateShape_()
		}
	}
}

Blockly.Blocks['block_issolidblock'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Check if block is solid at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check at position if the block is solid. Return 0 if true.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_isliquidblock'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Check if block is liquid at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check at position if the block is liquid. Return 0 if true.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_isairblock'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Check if block is air at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check at position if the block is air. Return 0 if true.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_getblockid'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Get ID of block at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Return the ID of the block at position.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_setblockall'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Set block at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendValueInput("BLOCK_ID")
			.appendField("as block")
		this.appendValueInput("BLOCK_DATA")
			.appendField("with data")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Set block data at position. The data can be the color of sand block, the pitch of note block, etc");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_getblockdata'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Get block data at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Get block data at position. The data can be the color of sand block, the pitch of note block, etc");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_placeblock'] = {
	init: function () {
		this.appendValueInput("BLOCK_ID")
			.appendField("Place block")
		this.appendDummyInput()
			.appendField("at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendValueInput("FACING")
			.appendField("facing")
		this.appendValueInput("COLOR")
			.appendField("colored")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Place block at position. Facing direction: 0 West 1 East 2 South 3 North 4 Down 5 Up.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_replaceblock'] = {
	init: function () {
		this.appendValueInput("BLOCK_ID")
			.appendField("Replace block")
		this.appendDummyInput()
			.appendField("at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendValueInput("FACING")
			.appendField("facing")
		this.appendValueInput("COLOR")
			.appendField("colored")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Replace block at position with another. Facing direction: 0 West 1 East 2 South 3 North 4 Down 5 Up.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_destroyblock'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Destroy block at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendValueInput("DROPITEM")
			.appendField("dropped")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Destroy block at position, specify whether to drop the item from the block.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_setblocksettingattstate'] = {
	init: function () {
		this.appendValueInput("ATTR")
			.appendField("Set attribute with ID")
		this.appendValueInput("SWITCH")
			.appendField("to")
		this.appendValueInput("BLOCK_ID")
			.appendField("for block with ID")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Set the atrribute of the block with the specified ID.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_getblocksettingattstate'] = {
	init: function () {
		this.appendValueInput("ATTR")
			.appendField("Get value of attribute with ID")
		this.appendValueInput("BLOCK_ID")
			.appendField("of block with ID")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Get the atrribute value of the block with the specified ID.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_getblockswitchstatus'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Check if block at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
			.appendField("is activated")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check if the block at the specified position is active.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_setblockswitchstatus'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Set state of block at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendValueInput("STATE")
			.appendField("to")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check if the block at the specified position is active.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_getblockdatabydir'] = {
	init: function () {
		this.appendValueInput("BLOCK_ID")
			.appendField("Get data of block with ID")
		this.appendValueInput("FACING")
			.appendField("facing")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Get the data of block with ID facing a certain direction. Facing direction: 0 West 1 East 2 South 3 North 4 Down 5 Up");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};

Blockly.Blocks['block_getblockpowerstatus'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Check if block at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
			.appendField("has power")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check if the block at the specified position is active.");
		this.setHelpUrl("");
		appendConnectionSwitch(this);
	}
};