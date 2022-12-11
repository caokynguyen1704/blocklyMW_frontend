var numFunc=0
  function String2Params(str){
    for (value in Param2String ){
      if (Param2String[value]==str){
        return value
      }
      
    }
    return "null"
  }
function eventBlock(block){
	var dropdown_event_key = block.getFieldValue('event_key');
    var statements_event_function = Blockly.Lua.statementToCode(block, 'event_function');
    // TODO: Assemble Lua into code variable.
    numFunc=numFunc+1
    var namefunc=dropdown_event_key.replaceAll(".", "")+""+Date.now()+numFunc
    var createVariable=""
	if (dropdown_event_key==""){
		alert("Event is empty!!!")
		return ""
	}
    if (EventData[dropdown_event_key].length>0){
      var i=0
      while (block.getFieldValue('VAR'+i)!=undefined){
        var variable_name =Blockly.Lua.nameDB_.getName(block.getFieldValue('VAR'+i), Blockly.Variables.CATEGORY_NAME);
        createVariable=createVariable+""+"\tlocal "+variable_name+"=__p."+String2Params(variable_name.replaceAll('_E2_9C_85',"").replaceAll("_"," "))+"\n"
        i++
      }
    }
    
    var code_function =  'function '+namefunc+'(__p)\n' +createVariable+statements_event_function+'\nend\n';
    var code = 'ScriptSupportEvent:registerEvent([=['+dropdown_event_key+']=],'+namefunc+')\n';
    return code_function+code;
  }
  Blockly.Lua['event_player'] = function(block) {
    return eventBlock(block)
  };

  Blockly.Lua['event_world'] = function(block) {
    return eventBlock(block)
  };


  Blockly.Lua['event_creature'] = function(block) {
    return eventBlock(block)
  };

  Blockly.Lua['event_block'] = function(block) {
    return eventBlock(block)
  };

  Blockly.Lua['event_item'] = function(block) {
    return eventBlock(block)
  };

  Blockly.Lua['event_logic'] = function(block) {
    return eventBlock(block)
  };