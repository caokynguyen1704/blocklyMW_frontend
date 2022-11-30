function loadJS(folder,list_file){

    list_file.forEach(createScriptTag);

    function createScriptTag(value) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `./js/${folder}/${value}`;    
        document.head.appendChild(script);  
    }
}

Blockly.Extensions.register('connection_switch', function () {
	this.updateState = function () {
		if (this.doInline_) {
			if (this.previousConnection && this.previousConnection.isConnected()) {
				this.previousConnection.disconnect();
			}
			if (this.nextConnection && this.nextConnection.isConnected()) {
				this.nextConnection.disconnect();
			}
			this.setInputsInline(true);
			this.setPreviousStatement(false, null);
			this.setNextStatement(false, null);
			this.setOutput(true, null);
		} else {
			if (this.outputConnection && this.outputConnection.isConnected()) {
				this.outputConnection.disconnect();
			}
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setOutput(false, null);
		}
	}

	this.validate = function (newValue) {
		let source = this.getSourceBlock()
		source.doInline_ = newValue == 'TRUE';
		source.updateState();
		return newValue;
	}

	this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE", this.validate), "__GENERATE_AS_INLINE")
	this.getField("__GENERATE_AS_INLINE").setCheckCharacter('𝒊')
})

block_list=[
    "worldcontainer_block.js",
    "worldcontainer_code.js",
    "block_block.js",
    "block_code.js",
    "team_block.js",
    "team_code.js"
]

block_demo_list=[
    "api_block_code.js",
    "api_block.js",
    "chat_block_code.js",
    "chat_block.js",
    "event_block_code.js",
    "event_block.js",
    "player_block_code.js",
    "player_block.js",
]

loadJS("block",block_list)
loadJS("block_demo",block_demo_list)

