Blockly.Lua['set_variable_api'] = function(block) {
    var statements_name = Blockly.Lua.statementToCode(block, 'NAME');
	var text_name_variable =Blockly.Lua.nameDB_.getName(block.getFieldValue('name_variable'), Blockly.Variables.CATEGORY_NAME);
    // TODO: Assemble Lua into code variable.
	if (block.childBlocks_[0]==undefined){
		alert("Missing block!!!")
		return;
	}
    //var code = 'local '+text_name_variable+'={\n'+statements_name+'}';
	var dataTb=block.childBlocks_[0].params
	if (dataTb==undefined){
		dataTb={[1] : "ErorCode.OK"}
	}
	var toStr1=""
	var toStr2=""
	for (k in dataTb){
		toStr1=toStr1+`${text_name_variable}[arr[k]]=v`
		toStr2=`{[${k}]='${dataTb[k]}'}`
	}
	var code=`
	local ${text_name_variable}={}
	for k,v in pairs({${statements_name}})do
		local arr=${toStr2}
		if arr[k]==nil then
			break
		end
		if arr[k]== "ErorCode.OK" then
			if v==0 then
				v=true
			else
				v=false
			end
		end
		${toStr1}
	end`
    return code;
  };


  Blockly.Lua['get_errorcode'] = function(block) {
    var text_name_variable = block.getFieldValue('name_variable');
    // TODO: Assemble Lua into code variable.
    
    var code = text_name_variable+'["ErrorCode"]==0';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
  };
  
  Blockly.Lua['get_data'] = function(block) {
    var text_name_variable = block.getFieldValue('name_variable');
    // TODO: Assemble Lua into code variable.
    var code = text_name_variable+'["data"]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
  };