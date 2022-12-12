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
