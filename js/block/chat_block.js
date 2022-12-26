Blockly.Blocks['worldcontainer_addfurnace'] = {
	init: function () {
		this.appendValueInput("CONTENT")
			.appendField("Send system messeger with content")
		this.appendValueInput("PLAYER")
			.appendField("to player")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("Add furnace at position.");
		this.setHelpUrl("");
		Blockly.utils.extensions.apply('connection_switch', this, false);
	}
};
