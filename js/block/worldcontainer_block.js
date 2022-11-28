Blockly.Blocks['worldcontainer_addfurnace'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("Add furnace at x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Add furnace at position.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_removefurnace'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Remove furnace at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Remove furnace at position.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_checkfurnace'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("At x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
			.appendField("is furnace?")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Check at position if there is a furnace. Return 0 if true.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_getfurnaceheatpercent'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Furnace heat % at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Return the fuel percentage of furnace at position.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_getfurnacemeltpercent'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Furnace melting % at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Return the melting percentage of furnace at position.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_addstoragebox'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Place chest at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Add storage box at position.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_removestoragebox'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Remove chest at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Remove storage box at position.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_checkstorage'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("At x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
			.appendField("is chest?")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Check at position if there is a storagebox. Return 0 if true.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_clearstoragebox'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Empty chest at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Remove all items of storage box at position.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_checkstorageemptygrid_item'] = {
	init: function () {
		this.appendValueInput("AXIS_X")
			.appendField("Chest at x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendValueInput("ITEM_ID")
			.appendField("has item")
		this.appendDummyInput()
			.appendField("?")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Check storage box at position if it has an item. Return 0 if true.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_checkstorageemptygrid_empty'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Chest at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
			.appendField("has free slot?");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Check storage box at position if it has an empty slot. Return 0 if true.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_setstorageitem'] = {
	init: function () {
		this.appendValueInput("OFFSET")
			.appendField("Set slot")
		this.appendDummyInput()
			.appendField("of chest at");
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendValueInput("ITEM_ID")
			.appendField("item");
		this.appendValueInput("COUNT")
			.appendField("count");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Set a slot in a storage box as item. 0 is the first slot");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_getstorageitem'] = {
	init: function () {
		this.appendValueInput("OFFSET")
			.appendField("Item at slot")
		this.appendDummyInput()
			.appendField("of chest at");
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Get item ID and count of slot in a storage box. 0 is the first slot");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_addstorageitem'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Add to chest at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendValueInput("ITEM_ID")
			.appendField("item");
		this.appendValueInput("COUNT")
			.appendField("count");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Add items to a storage box. Return the number of item added successfully");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_removestorageitembyid'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Remove from chest at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendValueInput("ITEM_ID")
			.appendField("item");
		this.appendValueInput("COUNT")
			.appendField("count");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Remove items from a storage box with item id.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_removestorageitembyindex'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Remove from chest at")
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendValueInput("OFFSEt")
			.appendField("items in slot");
		this.appendValueInput("COUNT")
			.appendField("count");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Remove items from a storage box at slot.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};

Blockly.Blocks['worldcontainer_clearcontainer'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Clear chest at");
		this.appendValueInput("AXIS_X")
			.appendField("x:")
		this.appendValueInput("AXIS_Y")
			.appendField("y:")
		this.appendValueInput("AXIS_Z")
			.appendField("z:")
		this.appendDummyInput()
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Remove all items from a storage box.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};