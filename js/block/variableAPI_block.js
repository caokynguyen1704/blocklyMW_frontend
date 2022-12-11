Blockly.Blocks['set_variable_api'] = {
	init: function () {
		this.appendStatementInput("NAME")
			.setCheck(null)
			.appendField("Get data with name ")
			.appendField(new Blockly.FieldVariable('🍀Give me name'), "name_variable")
			.appendField("and run ");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};


Blockly.Blocks['get_errorcode'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("chạy thành công")
			.appendField(new Blockly.FieldTextInput("name"), "name_variable");
		this.setOutput(true, null);
		this.setColour(330);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['get_data'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("dữ liệu của")
			.appendField(new Blockly.FieldTextInput("name"), "name_variable");
		this.setOutput(true, null);
		this.setColour(90);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['call_data'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("get data of")
			.appendField(new Blockly.FieldVariable("🍀Give me name"), "variable_name")
			.appendField("with type")
			.appendField(new Blockly.FieldDropdown(
				[
					["ErrorCode", "Error.Code"],
					["Owner", "eventobjid"], 
					["Target", "toobjid"], 
					["Hour", "hour"], 
					["Second", "ticks"], 
					["Timer", "timerid"], 
					["Name of timer", "timername"], 
					["Buff", "buffid"], 
					["Level of buff", "bufflvl"],
					 ["Item", "itemid"], 
					 ["Number of items", "itemnum"],
					  ["Area", "areaid"],
					   ["Damage", "hurtlv"], 
					   ["Block", "blockid"], ["x", "x"], ["y", "y"], ["z", "z"], ["Content of text", "content"], ["Key used", "vkey"], ["Motion state", "playermotion"], ["Player attributes", "playerattr"], ["Creature atributes", "actorattr"], ["Action", "act"], ["Helper", "helperobjid"]
				]), "type");
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};



