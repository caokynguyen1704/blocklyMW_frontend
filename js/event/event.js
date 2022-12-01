
function changeValueInDownForm(event) {
    if (event) {
        if (event.type == Blockly.Events.BLOCK_CHANGE && event.oldValue != event.newValue &&event.name=="event_key") {
            var block = Code.workspace.getBlockById(event.blockId);
            var i=0;
            block.itemCount_=i;
            block.connection_=[]
            while (block.getInput('ADD' + i)) {
                block.removeInput('ADD' + i);
                i++;
            }
            // if (event.oldValue!=""){
            //     for (i = 0; i < EventData[event.oldValue].length; i++) {
            //         block.removeInput('index'+i)
            //     }
            // }
            // block.updateShape_();
            // Code.workspace.removeChangeListener(onFirstComment);-- xoá sự kiện
            block.setMutator(new Blockly.Mutator(EventData[event.newValue]));
        }
    }
    if (event.type =="selected") {
        var block = Code.workspace.getBlockById(event.newElementId);
        if (block.type="event_player"){
            if (typeof(block.connection_)=="undefined"){
                GlobalData_Event=[]
            }else{
                GlobalData_Event=block.connection_
            }
            
        }else{
            GlobalData_Event=[]
        }
    }
    if (event.type =="create") {
        GlobalData_Event=[]
        var block = Code.workspace.getBlockById(event.blockId);
        if (block.type="event_player"){
            var i=0;
            block.itemCount_=i;
            block.connection_=[]
            while (block.getInput('ADD' + i)) {
                block.removeInput('ADD' + i);
                i++;
            }
        }
    }
}


Code.workspace.addChangeListener(changeValueInDownForm);