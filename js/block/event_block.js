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

Blockly.Blocks["helperobjid"] = {
    init: function () {
        this.appendDummyInput().appendField("Helper");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"helperobjid"
};  
Blockly.Blocks["act"] = {
    init: function () {
        this.appendDummyInput().appendField("Action");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"act"
};  
Blockly.Blocks["actorattr"] = {
    init: function () {
        this.appendDummyInput().appendField("Creature atributes");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
    name:"actorattr"
};
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

function addMutator(block){
	block.mutationToDom= function () {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    block.domToMutation= function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_(true);
    },
    block.decompose= function (workspace) {
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
    block.compose= function (containerBlock) {
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
    block.updateShape_= function (isMove) {
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
}

Blockly.Blocks['event_player'] = {
    init: function () {
		addMutator(this);
        this.appendStatementInput("event_function")
            .setCheck(null)
            .appendField("When")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["--Player Event--", ""],
                    ["Player is defeated\t", "Game.AnyPlayer.Defeat"],
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
        this.setColour(250);
        this.setTooltip("Event Block");
        this.setHelpUrl("Help Url");
        //this.setMutator(new Blockly.Mutator(EventData[event.newValue]));
    },
	
};



Blockly.Blocks['event_world'] = {
    init: function () {
		addMutator(this);
        this.appendStatementInput("event_function")
            .setCheck(null)
            .appendField("When")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["--World Event--", ""],
                    ["Change of weather","Weather.Changed"],
                    ["Container has item output", "Backpack.ItemTakeOut"],
                    ["Container has item input", "Backpack.ItemPutIn"],
                    ["Change of backpack bar","Backpack.ItemChange"]

                ]), "event_key");
        this.setColour(270);
        this.setTooltip("Event Block");
        this.setHelpUrl("Help Url");
        //this.setMutator(new Blockly.Mutator(EventData[event.newValue]));
    },
};



Blockly.Blocks['event_creature'] = {
    init: function () {
		addMutator(this);
        this.appendStatementInput("event_function")
            .setCheck(null)
            .appendField("When")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["--Creature Event--", ""],
                    ["Creature get status effect\t", "Actor.AddBuff"],
                    ["Creature enters area\t", "Actor.AreaIn"],
                    ["Creature leaves area\t", "Actor.AreaOut"],
                    ["Creature attacking\t", "Actor.Attack"],
                    ["Creature attack hits\t", "Actor.AttackHit"],
                    ["Creature greeted\t", "Actor.BeGreetedBy"],
                    ["Creature take damage\t", "Actor.BeHurt"],
                    ["Creature defeat other player/creature\t", "Actor.Beat"],
                    ["Creature change of attribute\t", "Actor.ChangeAttr"],

                    ["Creature change motion state\t", "Actor.ChangeMotion"],
                    ["Creature collide with other player/creature\t", "Actor.Collide"],
                    ["Creature is created\t", "Actor.Create"],
                    ["Creature deals damage to other\t", "Actor.Damage"],
                    ["Creature die\t", "Actor.Die"],
                    ["Creature interact with the players\t", "Actor.InteractEvent"],
                    ["Creature take damage\t", "Actor.NewBeHurt"],

                    ["Creature smashed by projectile\t", "Actor.Projectile.Hit"],
                    ["Creature lose status effect\t", "Actor.RemoveBuff"],
                    ["Creature send a distress message\t", "Actor.ReqHelp"],

                    ["Creature Village Totem binding point change\t", "Actor.VillageBindPosChange"],
                    ["Creature Villages Work binding point change\t", "Actor.VillagerFlagChange"]

                ]), "event_key");
        this.setColour(290);
        this.setTooltip("Event Block");
        this.setHelpUrl("Help Url");
    },
};

Blockly.Blocks['event_block'] = {
    init: function () {
		addMutator(this);
        this.appendStatementInput("event_function")
            .setCheck(null)
            .appendField("When")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["--Block Event--", ""],
                    ["Block is created\t", "Block.Add"],
                    ["Block is destoryed\t", "Block.DestroyBy"],
                    ["Start mining block\t", "Block.Dig.Begin"],
                    ["Cancel mining block\t", "Block.Dig.Cancel"],
                    ["Complete mining block\t", "Block.Dig.End"],
                    ["Block being fertilized\t", "Block.Fertilize"],
                    ["Block being placed\t", "Block.PlaceBy"],
                    ["Block being removed\t", "Block.Remove"],
                    ["Block being triggered\t", "Block.Trigger"]
                ]), "event_key");
        this.setColour(310);
        this.setTooltip("Event Block");
        this.setHelpUrl("Help Url");
    },
};

Blockly.Blocks['event_item'] = {
    init: function () {
		addMutator(this);
        this.appendStatementInput("event_function")
            .setCheck(null)
            .appendField("When")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["--Item Event--", ""],
                    ["Drop item enters area\t", "DropItem.AreaIn"],
                    ["Drop item leaves area\t", "DropItem.AreaOut"],
                    ["Item disappear\t", "Block.Dig.Begin"],
                    ["Item is picked up\t", "Item.Pickup"],
                    ["Projectile enters area\t", "Missile.AreaIn"],
                    ["Projectile leaves area\t", "Missile.AreaOut"],
                    ["Projectile is created\t", "Missile.Create"],
                ]), "event_key");
        this.setColour(330);
        this.setTooltip("Event Block");
        this.setHelpUrl("Help Url");
    },
};

Blockly.Blocks['event_logic'] = {
    init: function () {
		addMutator(this);
        this.appendStatementInput("event_function")
            .setCheck(null)
            .appendField("When")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["--Logic Event--", ""],
                    ["Game over\t", "Game.End"],
                    ["World time is [Hour]\t", "Game.Hour"],
                    ["Start game\t", "Game.Load"],
                    ["Game is running\t", "Game.Run"],
                    ["World time is [second] second\t", "Game.RunTime"],
                    ["Game start\t", "Game.Start"],
                    ["Game timeout\t", "Game.TimeOver"],
					["Any change of Timer\t", "minitimer.change"],
                ]), "event_key");
        this.setColour(220);
        this.setTooltip("Event Block");
        this.setHelpUrl("Help Url");
    },
};