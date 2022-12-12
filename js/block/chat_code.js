Blockly.Lua['worldcontainer_addfurnace'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:addFurnace(${axis_x}, ${axis_y}, ${axis_z})`;
	return block.getField("__GENERATE_AS_INLINE").getValueBoolean() ? [code, Blockly.Lua.ORDER_ATOMIC] : code + '\n';
};

