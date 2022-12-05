Blockly.Lua['n-logic_if'] = function (block) {
	let n = 0;
	let code = '';
	do {
		const condition = Blockly.Lua.valueToCode(block, "CONDITION" + n, Blockly.Lua.ORDER_NONE) || "false";
		let body = Blockly.Lua.statementToCode(block, 'BODY' + n) || '-- no code here.\n';
		body = Blockly.Lua.prefixLines(body, Blockly.Lua.INDENT);
		code += `${n > 0 ? 'else' : ''}if ${condition} then\n${body}`
		n++;
	} while (block.getInput("CONDITION" + n));

	if (block.getInput('ELSE')) {
		let body = Blockly.Lua.statementToCode(block, 'ELSE') || '-- no code here.\n';
		body = Blockly.Lua.prefixLines(body, Blockly.Lua.INDENT);
		code += 'else\n' + body;
	}

	return code + 'end\n';
}

Blockly.Lua['n-logic_boolean'] = function (block) {
	return [block.getValue("VALUE"), Blockly.Lua.ORDER_ATOMIC];
}

Blockly.Lua['n-logic_compare'] = function (block) {
	const OP = {
		'EQ': '==',
		'NEQ': '~=',
		'LT': '<',
		'LTE': '<=',
		'GT': '>',
		'GTE': '>='
	};
	let left = Blockly.Lua.valueToCode(block, 'LEFT', Blockly.Lua.ORDER_RELATIONAL) || '0';
	let operator = OP[block.getFieldValue('OP')];
	let right = Blockly.Lua.valueToCode(block, 'RIGHT', Blockly.Lua.ORDER_RELATIONAL) || '0';
	const code = `${left} ${operator} ${right}`;
	return [code, Blockly.Lua.ORDER_RELATIONAL];
}

Blockly.Lua['n-logic_operation'] = function (block) {
	const OP = {
		'AND': 'and',
		'OR': 'or',
	};
	let operator = OP[block.getFieldValue('OP')];
	const order = (operator === 'and') ? Blockly.Lua.ORDER_AND : Blockly.Lua.ORDER_OR;
	let left = Blockly.Lua.valueToCode(block, 'LEFT', order) || 'false';
	let right = Blockly.Lua.valueToCode(block, 'RIGHT', order) || 'false';
	const code = `${left} ${operator} ${right}`;
	return [code, order];
}

Blockly.Lua['n-logic_invert'] = function (block) {
	const argument = Blockly.Lua.valueToCode(block, 'BOOL', Blockly.Lua.ORDER_UNARY) || 'true';
	const code = 'not ' + argument;
	return [code, Blockly.Lua.ORDER_UNARY];
};

Blockly.Lua['n-logic_nil'] = function (block) {
	return ['nil', Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['n-logic_ternary'] = function (block) {
	const value_if = Blockly.Lua.valueToCode(block, 'COND', Blockly.Lua.ORDER_AND) || 'false';
	const value_then = Blockly.Lua.valueToCode(block, 'RETURN', Blockly.Lua.ORDER_AND) || 'nil';
	const value_else = Blockly.Lua.valueToCode(block, 'DEFAULT', Blockly.Lua.ORDER_OR) || 'nil';
	const code = value_if + ' and ' + value_then + ' or ' + value_else;
	return [code, Blockly.Lua.ORDER_OR];
}