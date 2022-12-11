
changeValueInDownForm = function (event) {
    if (event != undefined) {
        if (event.type == "selected") {
            var block = Code.workspace.getBlockById(event.newElementId);
			Current=block.type
            if (block != undefined) {
                if ((block.type == "event_item")||(block.type == "event_logic")||(block.type == "event_player")||(block.type == "event_world")||(block.type == "event_creature")||(block.type == "event_block")) {
                    if (typeof (block.connection_) == "undefined") {
                        GlobalData_Event = []
                    } else {
                        GlobalData_Event = block.connection_
                    }

                } else {
                    GlobalData_Event = []
                }
            }
        } else if (event.type == "create") {
            GlobalData_Event = []
            var block = Code.workspace.getBlockById(event.blockId);
            if (block != undefined) {
                if ((block.type == "event_item")||(block.type == "event_logic")||(block.type == "event_player")||(block.type == "event_world")||(block.type == "event_creature")||(block.type == "event_block")) {
                    var i = 0;
                    block.itemCount_ = i;
                    block.connection_ = []
                    while (block.getInput('ADD' + i)) {
                        block.removeInput('ADD' + i);
                        i++;
                    }
                }
            }
        } else if (event.type == Blockly.Events.BLOCK_CHANGE) {
            if (event.oldValue != event.newValue && event.name == "event_key") {
                var block = Code.workspace.getBlockById(event.blockId);
                var i = 0;
                block.itemCount_ = i;
                block.connection_ = []
                while (block.getInput('ADD' + i)) {
                    block.removeInput('ADD' + i);
                    i++;
                }
                block.setMutator(new Blockly.Mutator(EventData[event.newValue]));
            }
        }
    }
}

Code.workspace.addChangeListener(changeValueInDownForm);