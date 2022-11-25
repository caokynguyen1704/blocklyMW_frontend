Blockly.Blocks['name_player'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("lấy tên của người chơi");
      this.setPreviousStatement(true, "Number");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };