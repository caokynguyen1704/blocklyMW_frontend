Blockly.Blocks['set_variable_api'] = {
    init: function() {
      this.appendStatementInput("NAME")
          .setCheck(null)
          .appendField("Đặt")
          .appendField(new Blockly.FieldTextInput("name"), "name_variable");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['get_errorcode'] = {
    init: function() {
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
    init: function() {
      this.appendDummyInput()
          .appendField("dữ liệu của")
          .appendField(new Blockly.FieldTextInput("name"), "name_variable");
      this.setOutput(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };