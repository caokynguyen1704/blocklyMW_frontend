var numFunc=0
Blockly.Lua['event_player'] = function(block) {
    var dropdown_event_key = block.getFieldValue('event_key');
    var statements_event_function = Blockly.Lua.statementToCode(block, 'event_function');
    // TODO: Assemble Lua into code variable.
    numFunc=numFunc+1
    var namefunc=dropdown_event_key.replaceAll(".", "")+""+Date.now()+numFunc
    var code_function =  'function '+namefunc+'(__p)\n' + statements_event_function+'\nend\n';
    var code = 'ScriptSupportEvent:registerEvent([=['+dropdown_event_key+']=],'+namefunc+')\n';
    return code_function+code;
  };

  Blockly.Lua['event_player_main'] = function(block) {
    var dropdown_event_key = block.getFieldValue('event_key');
    var statements_event_function = Blockly.Lua.statementToCode(block, 'event_function');
    // TODO: Assemble Lua into code variable.
    numFunc=numFunc+1
    var namefunc=dropdown_event_key.replaceAll(".", "")+""+Date.now()+numFunc
    var code_function =  'function '+namefunc+'(__p)\n' + statements_event_function+'\nend\n';
    var code = 'ScriptSupportEvent:registerEvent([=['+dropdown_event_key+']=],'+namefunc+')\n';
    return code_function+code;
  };
  Blockly.Lua['eventobjid'] = function(block) {
    // TODO: Assemble Lua into code variable.
    var code = '__p["eventobjid"] or 0';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
  };

  Blockly.Lua['toobjid'] = function(block) {
    // TODO: Assemble Lua into code variable.
    var code = '__p["toobjid"] or 0';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
  };