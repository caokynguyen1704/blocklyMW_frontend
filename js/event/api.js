Code.workspace.addChangeListener(function (event) {
	if (Current != "set_variable_api") {
		return;
	}
	if ((event.type != Blockly.Events['VAR_RENAME'])) {
		return;
	}

	// This may not be the correct name for this function.
	if ((event.type == Blockly.Events['VAR_RENAME'])) {
		if ("🍀" + event.oldName != event.newName) {
			var newName = "🍀" + event.newName
			Code.workspace.renameVariableById(event.varId, newName);
		}
	} else {

	}



}
)