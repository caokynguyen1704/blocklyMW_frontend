Blockly.Lua['set_variable_api'] = function(block) {
    var text_name_variable = block.getFieldValue('name_variable');
    var statements_name = Blockly.Lua.statementToCode(block, 'NAME');
    // TODO: Assemble Lua into code variable.
    var code = 'local '+text_name_variable+'={}\n'+text_name_variable+'["ErrorCode"],'+text_name_variable+'["data"]='+statements_name;
    return code;
  };


  Blockly.Lua['get_errorcode'] = function(block) {
    var text_name_variable = block.getFieldValue('name_variable');
    // TODO: Assemble Lua into code variable.
    
    var code = text_name_variable+'["ErrorCode"]==0';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
  };
  
  Blockly.Lua['get_data'] = function(block) {
    var text_name_variable = block.getFieldValue('name_variable');
    // TODO: Assemble Lua into code variable.
    var code = text_name_variable+'["data"]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
  };