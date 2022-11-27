Blockly.Lua['worldcontainer_addfurnace'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:addFurnace(${axis_x}, ${axis_y}, ${axis_z})`;
	return code;
};

Blockly.Lua['worldcontainer_removefurnace'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:removeFurnace(${axis_x}, ${axis_y}, ${axis_z})`;
	return code;
};

Blockly.Lua['worldcontainer_checkfurnace'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:checkFurnace(${axis_x}, ${axis_y}, ${axis_z})`;
	return code;
};

Blockly.Lua['worldcontainer_getfurnaceheatpercent'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:getFurnaceHeatPercent(${axis_x}, ${axis_y}, ${axis_z})`;
	return code;
};

Blockly.Lua['worldcontainer_getfurnacemeltpercent'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:getFurnaceMeltPercent(${axis_x}, ${axis_y}, ${axis_z})`;
	return code;
};

Blockly.Lua['worldcontainer_addstoragebox'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:addStorageBox(${axis_x}, ${axis_y}, ${axis_z})`;
	return code;
};

Blockly.Lua['worldcontainer_removestoragebox'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:removeStorageBox(${axis_x}, ${axis_y}, ${axis_z})`;
	return code;
};

Blockly.Lua['worldcontainer_checkstorage'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:checkStorage(${axis_x}, ${axis_y}, ${axis_z})`;
	return code;
};

Blockly.Lua['worldcontainer_clearstoragebox'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:clearStorageBox(${axis_x}, ${axis_y}, ${axis_z})`;
	return code;
};

Blockly.Lua['worldcontainer_checkstorageemptygrid_item'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let item_id = block.getFieldValue('ITEM_ID')
	let code = `WorldContainer:checkStorageEmptyGrid(${axis_x}, ${axis_y}, ${axis_z}, ${item_id})`;
	return code;
};

Blockly.Lua['worldcontainer_checkstorageemptygrid_empty'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:checkStorageEmptyGrid(${axis_x}, ${axis_y}, ${axis_z}, 0)`;
	return code;
};

Blockly.Lua['worldcontainer_setstorageitem'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let offset = Blockly.Lua.valueToCode(block, 'OFFSET', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let item_id = Blockly.Lua.valueToCode(block, 'ITEM_ID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let count = Blockly.Lua.valueToCode(block, 'COUNT', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:setStorageItem(${axis_x}, ${axis_y}, ${axis_z}, ${offset}, ${item_id}, ${count})`;
	return code;
};

Blockly.Lua['worldcontainer_getstorageitem'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let offset = Blockly.Lua.valueToCode(block, 'OFFSET', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:getStorageItem(${axis_x}, ${axis_y}, ${axis_z}, ${offset})`;
	return code;
};

Blockly.Lua['worldcontainer_addstorageitem'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let item_id = Blockly.Lua.valueToCode(block, 'ITEM_ID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let count = Blockly.Lua.valueToCode(block, 'COUNT', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:addStorageItem(${axis_x}, ${axis_y}, ${axis_z}, ${item_id}, ${count})`;
	return code;
};

Blockly.Lua['worldcontainer_removestorageitembyid'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let item_id = Blockly.Lua.valueToCode(block, 'ITEM_ID', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let count = Blockly.Lua.valueToCode(block, 'COUNT', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:removeStorageItemByID(${axis_x}, ${axis_y}, ${axis_z}, ${item_id}, ${count})`;
	return code;
};

Blockly.Lua['worldcontainer_removestorageitembyindex'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let offset = Blockly.Lua.valueToCode(block, 'OFFSET', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let count = Blockly.Lua.valueToCode(block, 'COUNT', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:removeStorageItemByIndex(${axis_x}, ${axis_y}, ${axis_z}, ${offset}, ${count})`;
	return code;
};

Blockly.Lua['worldcontainer_clearcontainer'] = function (block) {
	let axis_x = Blockly.Lua.valueToCode(block, 'AXIS_X', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_y = Blockly.Lua.valueToCode(block, 'AXIS_Y', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let axis_z = Blockly.Lua.valueToCode(block, 'AXIS_Z', Blockly.Lua.ORDER_ATOMIC) || 'nil';
	let code = `WorldContainer:clearContainer(${axis_x}, ${axis_y}, ${axis_z})`;
	return code;
};