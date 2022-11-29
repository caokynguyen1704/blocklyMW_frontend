// for (var name_param in Param2String) {
//     Blockly.Blocks[name_param.toString()] = {
//         init: function () {
//             this.appendDummyInput().appendField(Param2String[name_param]);
//             this.setPreviousStatement(true);
//             this.setNextStatement(true);
//         },
//         text:Param2String[name_param],
//     };
//     console.log(`
//     Blockly.Blocks["${name_param}"] = {
//         init: function () {
//             this.appendDummyInput().appendField("${Param2String[name_param]}");
//             this.setPreviousStatement(true);
//             this.setNextStatement(true);
//         },
//         name:"${name_param}"
//     };
//     `)
// }
  
Blockly.Blocks["eventobjid"] = {
    init: function () {
        this.appendDummyInput().appendField("Owner");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"eventobjid"
};


Blockly.Blocks["toobjid"] = {
    init: function () {
        this.appendDummyInput().appendField("Target");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"toobjid"
};


Blockly.Blocks["hour"] = {
    init: function () {
        this.appendDummyInput().appendField("Hour");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"hour"
};


Blockly.Blocks["second"] = {
    init: function () {
        this.appendDummyInput().appendField("Second");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"second"
};


Blockly.Blocks["timerid"] = {
    init: function () {
        this.appendDummyInput().appendField("Timer");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"timerid"
};


Blockly.Blocks["timername"] = {
    init: function () {
        this.appendDummyInput().appendField("Name of timer");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"timername"
};


Blockly.Blocks["buffid"] = {
    init: function () {
        this.appendDummyInput().appendField("Buff");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"buffid"
};


Blockly.Blocks["bufflvl"] = {
    init: function () {
        this.appendDummyInput().appendField("Level of buff");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"bufflvl"
};


Blockly.Blocks["itemid"] = {
    init: function () {
        this.appendDummyInput().appendField("Item");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"itemid"
};


Blockly.Blocks["itemnum"] = {
    init: function () {
        this.appendDummyInput().appendField("Number of items");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"itemnum"
};


Blockly.Blocks["areaid"] = {
    init: function () {
        this.appendDummyInput().appendField("Area");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"areaid"
};


Blockly.Blocks["hurtlv"] = {
    init: function () {
        this.appendDummyInput().appendField("Damage");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"hurtlv"
};


Blockly.Blocks["blockid"] = {
    init: function () {
        this.appendDummyInput().appendField("Block");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"blockid"
};


Blockly.Blocks["x"] = {
    init: function () {
        this.appendDummyInput().appendField("x");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"x"
};


Blockly.Blocks["y"] = {
    init: function () {
        this.appendDummyInput().appendField("y");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"y"
};


Blockly.Blocks["z"] = {
    init: function () {
        this.appendDummyInput().appendField("z");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"z"
};


Blockly.Blocks["content"] = {
    init: function () {
        this.appendDummyInput().appendField("Content of text");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"content"
};


Blockly.Blocks["vkey"] = {
    init: function () {
        this.appendDummyInput().appendField("Key used");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"vkey"
};


Blockly.Blocks["playermotion"] = {
    init: function () {
        this.appendDummyInput().appendField("Motion state");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"playermotion"
};


Blockly.Blocks["playerattr"] = {
    init: function () {
        this.appendDummyInput().appendField("Player attributes");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"playerattr"
};
Blockly.Blocks['variable_event'] = {
    init: function () {
        this.appendDummyInput().appendField('thing');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
Blockly.Blocks['event_container'] = {
    init: function () {
        this.appendDummyInput().appendField('Call event parameter');
        this.appendStatementInput('STACK');
    }
};



Blockly.Blocks['event_player'] = {
    init: function () {
        this.appendStatementInput("event_function")
            .setCheck(null)
            .appendField("When")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["Select", ""],
                    ["Player is defeated", "Game.AnyPlayer.Defeat"],
                    ["Player enters game\t", "Game.AnyPlayer.EnterGame"],
                    ["Player leaves game\t", "Game.AnyPlayer.LeaveGame"],
                    ["Player loads game", "Game.AnyPlayer.ReadStage"],
                    ["Player wins\t", "Game.AnyPlayer.Victory"],
                    ["Player get status effect", "Player.AddBuff"],
                    ["Player add new item\t", "Player.AddItem"],
                    ["Player enters area\t", "Player.AreaIn"],
                    ["Player leaves area\t", "Player.AreaOut"],
                    ["Player attacking\t", "Player.Attack"],
                    ["Player attack hits\t", "Player.AttackHit"],
                    ["Player change of backpack bar\t", "Player.BackPackChange"],
                    ["Player take damage\t", "Player.BeHurt"],
                    ["Player change of attribute\t", "Player.ChangeAttr"],
                    ["Player click on creation\t", "Player.ClickActor"],
                    ["Player click on block\t", "Player.ClickBlock"],
                    ["Player collide with other player\t", "Player.Collide"],
                    ["Player consume item\t", "Player.ConsumeItem"],
                    ["Player deals damage to other player\t", "Player.DamageActor"],
                    ["Player defeat object\t", "Player.DefeatActor"],
                    ["Player die\t", "Player.Die"],
                    ["Player discard item\t", "Player.DiscardItem"],
                    ["Player cancel riding mount\t", "Player.DismountActor"],

                    ["Player change of armor bar\t", "Player.EquipChange"],
                    ["Player unequip armor\t", "Player.EquipOff"],
                    ["Player equip armor\t", "Player.EquipOn"],
                    ["Player is restored\t", "Player.Init"],
                    ["Player changes in chat box\t", "Player.InputContent"],
                    ["Player button pressed\t", "Player.InputKeyDown"],
                    ["Player button being pressed\t", "Player.InputKeyOnPress"],
                    ["Player button released\t", "Player.InputKeyUp"],
                    ["Player join team\t", "Player.JoinTeam"],
                    ["Player level changes\t", "Player.LevelModelUpgrade"],
                    ["Player change motion state\t", "Player.MotionStateChange"],

                    ["Player ride mount/vehicles\t", "Player.MountActor"],
                    ["Player move one block\t", "Player.MoveOneBlockSize"],
                    ["Player enter text string\t", "Player.NewInputContent"],

                    ["Player pick up drop item\t", "Player.PickUpItem"],
                    ["Player change of expression\t", "Player.PlayAction"],
                    ["Player lose status effect\t", "Player.RemoveBuff"],
                    ["Player respawn\t", "Player.Revive"],
                    ["Player make selection on shortcut bar\t", "Player.SelectShortcut"],
                    ["Player change of shortcut bar\t", "Player.ShortcutChange"],
                    ["Player use item\t", "Player.UseItem"]
                ]), "event_key");
        this.setColour(270);
        this.setTooltip("Event Block");
        this.setHelpUrl("Help Url");
        //this.setMutator(new Blockly.Mutator(EventData[event.newValue]));
    },
    mutationToDom: function () {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_(true);
    },
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('event_container');
        containerBlock.initSvg();
         var connection = containerBlock.getInput('STACK').connection;
     
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock(this.connection_[i]);
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            this.connection_.push(itemBlock.type);
            connections.push(itemBlock.name);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
                
        }
        
        this.itemCount_ = connections.length;
        this.connection_=connections
        this.updateShape_(false);
    },
    updateShape_: function (isMove) {
            console.log("UP:"+GlobalData_Event)
            var connection=this.connection_
            if (isMove){
                connection=GlobalData_Event
            }
            for (var i = 0; i < connection.length; i++) {
                if (!this.getInput('ADD' + i)) {
                    this.appendDummyInput('ADD' + i)
                        .appendField('variable')
                        .appendField(new Blockly.FieldVariable('✅'+Param2String[connection[i]]), 'VAR' + i)  
                        .appendField('can be used');
                }
            }
            // Remove deleted inputs.
            while (this.getInput('ADD' + i)) {
                this.removeInput('ADD' + i);
                i++;
            }
        
    
    }
};

