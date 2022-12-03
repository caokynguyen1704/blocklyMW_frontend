Blockly.Lua['backpack_getbackpackbaridrange'] = function (block) {
  var value_id = Blockly.Lua.valueToCode(block, 'id', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['backpack_'] = function (block) {
  // TODO: Assemble Lua into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Lua['backpack_setgriditem'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_gridid = Blockly.Lua.valueToCode(
    block,
    'gridid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_itemid = Blockly.Lua.valueToCode(
    block,
    'itemid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_num = Blockly.Lua.valueToCode(
    block,
    'num',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_durability = Blockly.Lua.valueToCode(
    block,
    'durability',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['backpack_removegriditem'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_gridid = Blockly.Lua.valueToCode(
    block,
    'gridid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_num = Blockly.Lua.valueToCode(
    block,
    'num',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['backpack_removegriditembyitemid'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_itemid = Blockly.Lua.valueToCode(
    block,
    'itemid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_num = Blockly.Lua.valueToCode(
    block,
    'num',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['backpack_clearpack'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...\n';
  return code;
};

Blockly.Lua['backpack_clearallpack'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['backpack_movegriditem'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_gridsrc = Blockly.Lua.valueToCode(
    block,
    'gridsrc',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_griddst = Blockly.Lua.valueToCode(
    block,
    'griddst',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_num = Blockly.Lua.valueToCode(
    block,
    'num',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['backpack_swapgriditem'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_gridsrc = Blockly.Lua.valueToCode(
    block,
    'gridsrc',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_griddst = Blockly.Lua.valueToCode(
    block,
    'griddst',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['backpack_enoughspaceforitem'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_itemid = Blockly.Lua.valueToCode(
    block,
    'itemid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_num = Blockly.Lua.valueToCode(
    block,
    'num',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['backpack_calcspacenumforitem'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_itemid = Blockly.Lua.valueToCode(
    block,
    'itemid',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['backpack_getbackpackbarvalidlist'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_bartype = Blockly.Lua.valueToCode(
    block,
    'bartype',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['backpack_getbackpackbaritemlist'] = function (block) {
  var value_playerid = Blockly.Lua.valueToCode(
    block,
    'playerid',
    Blockly.Lua.ORDER_ATOMIC
  );
  var value_bartype = Blockly.Lua.valueToCode(
    block,
    'bartype',
    Blockly.Lua.ORDER_ATOMIC
  );
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};
