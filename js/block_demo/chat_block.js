Blockly.Blocks['chat_sys'] = {
	init: function () {
		this.appendValueInput("chat_content")
			.setCheck(null)
			.appendField("Gửi chat hệ thống với nội dung");
		this.appendValueInput("uid")
			.setCheck("Number")
			.appendField("tới người chơi");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, "Number");
		this.setColour(230);
		this.setTooltip(`
		Data:
			ErrorCode.OK: Is this block running
		`);
		this.setHelpUrl("");
		
	},
	params : {
		[1] : "ErorCode.OK",
	}

};