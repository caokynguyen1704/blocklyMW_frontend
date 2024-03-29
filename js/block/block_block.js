Blockly.Blocks['block_issolidblock'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("Block at x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
			.appendField("is solid?")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check at position if the block is solid. Return 0 if true.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_isliquidblock'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("Block at x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
			.appendField("is liquid?")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check at position if the block is liquid. Return 0 if true.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_isairblock'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("Block at x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
			.appendField("is air?")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check at position if the block is air. Return 0 if true.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_getblockid'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("Block ID at x:")
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
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_setblockall'] = {
	init: function () {
		this.appendValueInput("BLOCK_ID")
			.appendField("Set ID")
		this.appendValueInput("BLOCK_DATA")
			.appendField("data")
		this.appendValueInput("AXIS_X")
			.appendField("of block at x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Set block data at position. The data can be the color of sand block, the pitch of note block, etc");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_getblockdata'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("Block data at x:")
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
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_placeblock'] = {
	init: function () {
		this.appendValueInput("BLOCK_ID")
			.appendField("Place block")
		this.appendValueInput("AXIS_X")
			.appendField("at x:")
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
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_replaceblock'] = {
	init: function () {
		this.appendValueInput("BLOCK_ID")
			.appendField("Replace block")
		this.appendValueInput("AXIS_X")
			.appendField("at x:")
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
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_destroyblock'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("Destroy block at x:")
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
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_setblocksettingattstate'] = {
	init: function () {
		this.appendValueInput("ATTR")
			.appendField("Set attribute")
		this.appendValueInput("BLOCK_ID")
			.appendField("of block")
		this.appendValueInput("SWITCH")
			.appendField("to")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Set the atrribute of the block with the specified ID.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_getblocksettingattstate'] = {
	init: function () {
		this.appendValueInput("ATTR")
			.appendField("Attribute")
		this.appendValueInput("BLOCK_ID")
			.appendField("of block")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Get the atrribute value of the block with the specified ID.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_getblockswitchstatus'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("Block at x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
			.appendField("is activated?")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check if the block at the specified position is active.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_setblockswitchstatus'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Set block state at")
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
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_getblockdatabydir'] = {
	init: function () {
		this.appendValueInput("BLOCK_ID")
			.appendField("Data of block")
		this.appendValueInput("FACING")
			.appendField("facing")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Get the data of block with ID facing a certain direction. Facing direction: 0 West 1 East 2 South 3 North 4 Down 5 Up");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['block_getblockpowerstatus'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Block at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
			.appendField("has power?")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Check if the block at the specified position is active.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};