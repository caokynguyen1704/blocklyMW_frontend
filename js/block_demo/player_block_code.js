Blockly.Lua['name_player'] = function(block) {
    var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    var code = 'Player:getNickname('+value_name+')\n';
    return code;
  };