
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
    },
};
