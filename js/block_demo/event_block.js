
Blockly.Blocks['event_player'] = {
    init: function () {
        this.appendStatementInput("event_function")
            .setCheck(null)
            .appendField("Khi")
            .appendField(new Blockly.FieldDropdown(
                [
                    // ["Any player is defeated", "Game.AnyPlayer.Defeat"], 
                    // ["Any player enters game\t", "Game.AnyPlayer.EnterGame"], 
                    // ["Any player leaves game\t", "Game.AnyPlayer.LeaveGame"], 
                    // ["Any player loads game", "Game.AnyPlayer.ReadStage"], 
                    // ["Any player wins\t", "Game.AnyPlayer.Victory"]
                    ["bất kỳ người chơi bị hạ gục", "Game.AnyPlayer.Defeat"], 
                    ["bất kỳ người chơi vào trò chơi\t", "Game.AnyPlayer.EnterGame"], 
                    ["bất kỳ người chơi rời trò chơi\t", "Game.AnyPlayer.LeaveGame"], 
                    ["bất kỳ người chơi tải trò chơi", "Game.AnyPlayer.ReadStage"], 
                    ["bất kỳ người chơi chiến thắng\t", "Game.AnyPlayer.Victory"]
                ]
                ), "event_key");
        this.setColour(270);
        this.setTooltip("Event Block");
        this.setHelpUrl("Help Url");
    }
};


Blockly.Blocks['event_player_main'] = {
    init: function () {
        this.appendStatementInput("event_function")
            .setCheck(null)
            .appendField("Khi")
            .appendField(new Blockly.FieldDropdown(
                [
                    // ["Player get status effect", "Player.AddBuff"],
                    // ["Player add new item\t", "Player.AddItem"],
                    // ["Player enters area\t", "Player.AreaIn"],
                    // ["Player leaves area\t", "Player.AreaOut"],
                    // ["Player attacking\t", "Player.Attack"],
                    // ["Player attack hits\t", "Player.AttackHit"],
                    // ["Player change of backpack bar\t", "Player.BackPackChange"],
                    // ["Player take damage\t", "Player.BeHurt"],
                    // ["Player change of attribute\t", "Player.ChangeAttr"],
                    // ["Player click on creation\t", "Player.ClickActor"],
                    // ["Player click on block\t", "Player.ClickBlock"],
                    // ["Player collide with other player\t", "Player.Collide"],
                    // ["Player consume item\t", "Player.ConsumeItem"],
                    // ["Player deals damage to other player\t", "Player.DamageActor"]
                    ["người chơi nhận hiệu ứng", "Player.AddBuff"],
                    ["người chơi nhận vật phẩm\t", "Player.AddItem"],
                    ["người chơi vào khu vực\t", "Player.AreaIn"],
                    ["người chơi rời khu vực\t", "Player.AreaOut"],
                    ["người chơi tấn công\t", "Player.Attack"],
                    // ["Player attack hits\t", "Player.AttackHit"],
                    ["người chơi thay đổi thanh balo\t", "Player.BackPackChange"],
                    ["người chơi nhận tổn thương\t", "Player.BeHurt"],
                    ["người chơi thay đổi thuộc tính\t", "Player.ChangeAttr"],
                    ["người chơi nhấn vào sinh vật\t", "Player.ClickActor"],
                    ["người chơi nhấn vào khối\t", "Player.ClickBlock"],
                    ["người chơi va chạm với người chơi khác\t", "Player.Collide"],
                    ["người chơi tiêu tốn vật phẩm\t", "Player.ConsumeItem"],
                    ["người chơi gây sát thương tới người chơi khác\t", "Player.DamageActor"],
                    ["người chơi di chuyển 1 ô\t", "Player.MoveOneBlockSize"]
                ]), "event_key");
        this.setColour(270);
        this.setTooltip("Event Block");
        this.setHelpUrl("Help Url");
    }
};

Blockly.Blocks['eventobjid'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Chủ thể của sự kiện");
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("Player");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['toobjid'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Đối tượng của sự kiện");
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("Player");
   this.setHelpUrl("");
    }
  };