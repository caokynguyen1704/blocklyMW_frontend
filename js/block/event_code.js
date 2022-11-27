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