
  Blockly.Lua['chat_sys'] = function(block) {
    var value_chat_content = Blockly.Lua.valueToCode(block, 'chat_content', Blockly.Lua.ORDER_ATOMIC);
    var value_uid = Blockly.Lua.valueToCode(block, 'uid', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua in
    var code = 'Chat:sendSystemMsg('+value_chat_content+','+value_uid+')';
    return code;
  };