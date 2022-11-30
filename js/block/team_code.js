Blockly.Lua['team_getnum'] = function(block) {
    var code = 'Team:getNumTeam()';
    return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
  };
Blockly.Lua['team_getplayernum'] = function(block) {
  var text_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var dropdown_alive = block.getFieldValue('ALIVE') || 'nil';
  var code = 'Team:getTeamPlayerNum('+text_teamid+','+dropdown_alive+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_getplayers'] = function(block) {
  var text_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var dropdown_alive = block.getFieldValue('ALIVE') || 'nil';
  var code = 'Team:getTeamPlayers('+text_teamid+','+dropdown_alive+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_randomplayer'] = function(block) {
  var text_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var dropdown_alive = block.getFieldValue('ALIVE') || 'nil';
  var code = 'Team:randomTeamPlayer('+text_teamid+','+dropdown_alive+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_getcreatures'] = function(block) {
  var dropdown_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var code = 'Team:getTeamCreatures('+dropdown_teamid+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_setscore'] = function(block) {
  var dropdown_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var text_score = block.getFieldValue('SCORE') || 'nil';
  var code = 'Team:setTeamScore('+dropdown_teamid+','+text_score+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_getscore'] = function(block) {
  var dropdown_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var code = 'Team:getTeamScore('+dropdown_teamid+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_addscore'] = function(block) {
  var dropdown_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var text_score = block.getFieldValue('SCORE') || 'nil';
  var code = 'Team:addScore('+dropdown_teamid+','+text_score+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_setresult'] = function(block) {
  var dropdown_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var dropdown_result = block.getFieldValue('RESULT') || 'nil';
  var code = 'Team:setTeamResults('+dropdown_teamid+','+dropdown_result+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_getresult'] = function(block) {
  var dropdown_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var code = 'Team:getTeamResults('+dropdown_teamid+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_setdietimes'] = function(block) {
  var dropdown_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var text_dietime = block.getFieldValue('DIETIME') || 'nil';
  var code = 'Team:setTeamDieTimes('+dropdown_teamid+','+text_dietime +')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_getdietimes'] = function(block) {
  var dropdown_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var code = 'Team:getTeamDieTimes('+dropdown_teamid+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_adddietimes'] = function(block) {
  var dropdown_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var text_dietime = block.getFieldValue('DIETIME') || 'nil';
  var code = 'Team:addTeamDieTimes('+dropdown_teamid+','+text_dietime+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};
Blockly.Lua['team_changeplayer'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'PLAYERID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var dropdown_teamid = Blockly.Lua.valueToCode(block, 'TEAMID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
  var code = 'Team:changePlayerTeam('+value_name+','+dropdown_teamid+')';
  return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n'
};