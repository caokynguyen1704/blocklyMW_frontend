var Param2String={
    "eventobjid":"Owner",
    "toobjid":"Target",
    "hour":"Hour",
    "second":"Second",
    "timerid":"Timer",
    "timername":"Name of timer",
    "buffid":"Buff",
    "bufflvl":"Level of buff",
    "itemid":"Item",
    "itemnum":"Number of items",
    "areaid":"Area",
    "hurtlv":"Damage",
    "x":"x",
    "y":"y",
    "z":"z",
    "content":"Content of text",
    "vkey":"Key used",
    "playermotion":"Motion state",
    
}
var EventData = {
    "Game.AnyPlayer.Defeat": ["eventobjid", "toobjid"],
    "Game.AnyPlayer.EnterGame": ["eventobjid", "toobjid"],
    "Game.AnyPlayer.LeaveGame": ["eventobjid", "toobjid"],
    "Game.AnyPlayer.ReadStage": [],
    "Game.AnyPlayer.Victory": ["eventobjid", "toobjid"],
    "Game.End": [],
    "Game.Hour": ["hour"],
    "Game.Load": [],
    "Game.Run": [],
    "Game.RunTime": ["second"],
    "Game.Start": [],
    "Game.TimeOver": [],
    "minitimer.change": ["timerid", "timername"],
    "Player.AddBuff": ["eventobjid", "buffid", "bufflvl"],
    "Player.AddItem": ["eventobjid", "toobjid", "itemid", "itemnum"],
    "Player.AreaIn": ["eventobjid", "areaid"],
    "Player.AreaOut": ["eventobjid", "areaid"],
    "Player.Attack": ["eventobjid", "toobjid"],
    "Player.AttackHit": ["eventobjid", "toobjid"],
    "Player.BackPackChange": ["eventobjid", "toobjid", "itemid", "itemnum"],
    "Player.BeHurt": ["eventobjid", "toobjid", "hurtlv"],
    "Player.ChangeAttr": ["eventobjid", "playerattr"],
    "Player.ClickActor": ["eventobjid", "toobjid"],
    "Player.ClickBlock": ["eventobjid", "blockid", "x", "y", "z"],
    "Player.Collide": ["eventobjid", "toobjid"],
    "Player.ConsumeItem": ["eventobjid", "toobjid", "itemid", "itemnum"],
    "Player.DamageActor": ["eventobjid", "toobjid", "hurtlv"],
    "Player.DefeatActor": ["eventobjid", "toobjid"],
    "Player.Die": ["eventobjid", "toobjid"],
    "Player.DiscardItem": ["eventobjid", "toobjid", "itemid", "itemnum"],
    "Player.DismountActor": ["eventobjid", "toobjid"],
    "Player.EquipChange": ["eventobjid", "toobjid", "itemid", "itemnum"],
    "Player.EquipOff": ["eventobjid", "toobjid", "itemid", "itemnum"],
    "Player.EquipOn": ["eventobjid", "toobjid", "itemid", "itemnum"],
    "Player.Init": ["eventobjid", "toobjid"],
    "Player.InputContent": ["eventobjid", "content"],
    "Player.InputKeyDown": ["eventobjid", "vkey"],
    "Player.InputKeyOnPress": ["eventobjid", "vkey"],
    "Player.InputKeyUp": ["eventobjid", "vkey"],
    "Player.JoinTeam": ["eventobjid", "toobjid"],
    "Player.LevelModelUpgrade": ["eventobjid", "toobjid"],
    "Player.MotionStateChange": ["eventobjid", "playermotion"],
    "Player.MountActor": ["eventobjid", "toobjid"],
    "Player.MoveOneBlockSize": ["eventobjid", "toobjid"],
    "Player.NewInputContent": ["eventobjid", "content"],
    "Player.PickUpItem": ["eventobjid", "toobjid", "itemid", "itemnum"],
    "Player.PlayAction": ["eventobjid", "act"],
    "Player.RemoveBuff": ["eventobjid", "buffid", "bufflvl"],
    "Player.Revive": ["eventobjid", "toobjid"],
    "Player.SelectShortcut": ["eventobjid", "toobjid", "itemid", "itemnum"],
    "Player.ShortcutChange": ["eventobjid", "toobjid", "itemid", "itemnum"],
    "Player.UseItem": ["eventobjid", "toobjid", "itemid", "itemnum"],
}

function changeValueInDownForm(event) {
    if (event) {
       
        if (event.type == Blockly.Events.BLOCK_CHANGE && event.oldValue != event.newValue &&event.name=="event_key") {
            
            var block = Code.workspace.getBlockById(event.blockId);
            var event_name = block.getFieldValue('event_key')
            if (event.oldValue!=""){
                for (i = 0; i < EventData[event.oldValue].length; i++) {
                    block.removeInput('index'+i)
                }
            }
            if ( EventData[event_name].length>0){
                for (i = 0; i < EventData[event_name].length; i++) {
                    block.appendDummyInput()
                        .appendField(new Blockly.FieldLabelSerializable(Param2String[EventData[event_name][i]]), "var"+i)
                        .appendField(new Blockly.FieldVariable("✅"+EventData[event_name][i]), "var"+i+"_val")
                }
            }
            

            // Code.workspace.removeChangeListener(onFirstComment);-- xoá sự kiện
       
     
        }
    }
}

Code.workspace.addChangeListener(changeValueInDownForm);