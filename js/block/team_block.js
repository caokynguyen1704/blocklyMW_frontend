Blockly.Blocks['team_getnum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Number Of Current Player Team");
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(20)
 this.setTooltip("The Number Of Current Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getnumteam");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_getplayernum'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get")
          // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"],["Green","3"],["Yellow","4"],["Orange","5"],["Purple","6"]]), "TEAMID")
      this.appendValueInput('TEAMID')
      this.appendDummyInput()
          .appendField("Team Number Of")
          .appendField(new Blockly.FieldDropdown([["Dead","0"], ["Alive","1"], ["All","2"]]), "ALIVE")
          .appendField("Player");
      this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
      this.setColour(20)
   this.setTooltip("Obtain The Number Of Players In Designate Team");
   this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamplayernum");
   Blockly.Extensions.apply('connection_switch', this, false);;
    }
  };
Blockly.Blocks['team_getplayers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"],["Green","3"],["Yellow","4"],["Orange","5"],["Purple","6"]]), "TEAMID")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team")
        .appendField(new Blockly.FieldDropdown([["Dead","0"], ["Alive","1"], ["All","2"]]), "ALIVE")
        .appendField("Players");
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Get The Designate Player Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamplayers");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_randomplayer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"],["Green","3"],["Yellow","4"],["Orange","5"],["Purple","6"]]), "TEAMID")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team Random")
        .appendField(new Blockly.FieldDropdown([["Dead","0"], ["Alive","1"], ["All","2"]]), "ALIVE")
        .appendField("Player");
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Get Random Player UID In Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#randomteamplayer");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_getcreatures'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team Creatures");
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Obtain Creature In Designate Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamcreatures");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_setscore'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team With")
    this.appendValueInput('SCORE')
    this.appendDummyInput()
        .appendField("Score");
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Set Score Of Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#setteamscore");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_getscore'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
        .appendField("Team Score");
    this.setInputsInline(true);
    this.setColour(20);
    this.setTooltip("Get The Team Score");
    this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamscore");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_addscore'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add")
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team With")
    this.appendValueInput('SCORE')
    this.appendDummyInput()
        .appendField("Score");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Increase The Team Score");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#addteamscore");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_setresult'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team")
        .appendField(new Blockly.FieldDropdown([["Wins","1"], ["Loses","2"]]), "RESULT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Set Result Of Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#setteamresults");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_getresult'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team Result");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Get The Current Win/Los Of Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamresults");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_setdietimes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team With")
    this.appendValueInput('DIETIME')
    this.appendDummyInput()
        .appendField("Die Times");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Set Number Of Team Deaths");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#setteamdietimes");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_getdietimes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team Die Times");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Get The Total Deaths Of Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamdietimes");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_adddietimes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add")
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team With")
    this.appendValueInput('DIETIME')
    this.appendDummyInput()
        .appendField("Die Times");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Increase The Total Deaths Of Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#addteamdietimes");
 Blockly.Extensions.apply('connection_switch', this, false);;
  }
};
Blockly.Blocks['team_changeplayer'] = {
  init: function() {
    this.appendValueInput("PLAYERID")
        .setCheck(null)
        .appendField("Change");
    this.appendDummyInput()
        .appendField("'s Team To")
        // .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
    this.appendValueInput('TEAMID')
    this.appendDummyInput()
        .appendField("Team");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Change Player's Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#changeplayerteam");
 Blockly.Extensions.apply('connection_switch', this, false);
  }
};