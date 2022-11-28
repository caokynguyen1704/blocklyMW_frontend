Blockly.Lua['block_issolidblock'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:isSolidBlock(${axis_x}, ${axis_y}, ${axis_z})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_isliquidblock'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:isLiquidBlock(${axis_x}, ${axis_y}, ${axis_z})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_isairblock'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:isAirBlock(${axis_x}, ${axis_y}, ${axis_z})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_getblockid'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:getBlockID(${axis_x}, ${axis_y}, ${axis_z})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_setblockall'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let block_id = Blockly.Lua.valueToCode(block, 'BLOCK_ID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let block_data = Blockly.Lua.valueToCode(block, 'BLOCK_DATA', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:setBlockAll(${axis_x}, ${axis_y}, ${axis_z}, ${block_id}, ${block_data})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_getblockdata'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:getBlockData(${axis_x}, ${axis_y}, ${axis_z})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_placeblock'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let facing = Blockly.Lua.valueToCode(block, 'FACING', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let color = Blockly.Lua.valueToCode(block, 'COLORED', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:placeBlock(${axis_x}, ${axis_y}, ${axis_z}, ${facing}, ${color})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_replaceblock'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let facing = Blockly.Lua.valueToCode(block, 'FACING', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let color = Blockly.Lua.valueToCode(block, 'COLORED', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:replaceBlock(${axis_x}, ${axis_y}, ${axis_z}, ${facing}, ${color})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_destroyblock'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let drop = Blockly.Lua.valueToCode(block, 'DROPITEM', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:destroyBlock(${axis_x}, ${axis_y}, ${axis_z}, ${drop})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_setblocksettingattstate'] = function (block) {
	let attribute = Blockly.Lua.valueToCode(block, 'ATTR', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let switch_ = Blockly.Lua.valueToCode(block, 'SWITCH', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let block_id = Blockly.Lua.valueToCode(block, 'BLOCK_ID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:setBlockSettingAttState(${block_id}, ${attribute}, ${switch_})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_getblocksettingattstate'] = function (block) {
	let attribute = Blockly.Lua.valueToCode(block, 'ATTR', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let block_id = Blockly.Lua.valueToCode(block, 'BLOCK_ID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:setBlockSettingAttState(${block_id}, ${attribute})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_getblockswitchstatus'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:getBlockSwitchStatus(${axis_x}, ${axis_y}, ${axis_z})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_setblockswitchstatus'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let state = Blockly.Lua.valueToCode(block, 'STATE', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:setBlockSwitchStatus(${axis_x}, ${axis_y}, ${axis_z}, ${state})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_setblockswitchstatus'] = function (block) {
	let block_id = Blockly.Lua.valueToCode(block, 'BLOCK_ID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let facing = Blockly.Lua.valueToCode(block, 'FACING', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:getBlockDataByDir(${block_id}, ${facing})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

Blockly.Lua['block_getblockpowerstatus'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `Block:getBlockPowerStatus(${axis_x}, ${axis_y}, ${axis_z})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};