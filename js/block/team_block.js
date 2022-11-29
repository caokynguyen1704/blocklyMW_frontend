Blockly.Blocks['team_getnum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Number Of Current Player Team");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20)
 this.setTooltip("The Number Of Current Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getnumteam");
  }
};
Blockly.Blocks['team_getplayernum'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get")
          .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"],["Green","3"],["Yellow","4"],["Orange","5"],["Purple","6"]]), "TEAMID")
          // .appendField(new Blockly.FieldTextInput("Team ID"), "TEAMID")
          .appendField("Team Number Of")
          .appendField(new Blockly.FieldDropdown([["Dead","0"], ["Alive","1"], ["All","2"]]), "ALIVE")
          .appendField("Player");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20)
   this.setTooltip("Obtain The Number Of Players In Designate Team");
   this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamplayernum");
    }
  };
Blockly.Blocks['team_getplayers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"],["Green","3"],["Yellow","4"],["Orange","5"],["Purple","6"]]), "TEAMID")
        .appendField("Team")
        // .appendField(new Blockly.FieldTextInput("Team ID"), "TEAMID")
        .appendField(new Blockly.FieldDropdown([["Dead","0"], ["Alive","1"], ["All","2"]]), "ALIVE")
        .appendField("Players");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Get The Designate Player Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamplayers");
  }
};
Blockly.Blocks['team_randomplayer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"],["Green","3"],["Yellow","4"],["Orange","5"],["Purple","6"]]), "TEAMID")
        // .appendField(new Blockly.FieldTextInput("Team ID"), "TEAMID")
        .appendField("Team Random")
        .appendField(new Blockly.FieldDropdown([["Dead","0"], ["Alive","1"], ["All","2"]]), "ALIVE")
        .appendField("Player");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Get Random Player UID In Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#randomteamplayer");
  }
};
Blockly.Blocks['team_getcreatures'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
        .appendField("Team Creatures");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Obtain Creature In Designate Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamcreatures");
  }
};
Blockly.Blocks['team_setscore'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
        .appendField("Team With")
        .appendField(new Blockly.FieldTextInput("Score"), "SCORE")
        .appendField("Score");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Set Score Of Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#setteamscore");
  }
};
Blockly.Blocks['team_getscore'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
        .appendField("Team Score");
    this.setColour(20);
 this.setTooltip("Get The Team Score");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamscore");
  }
};
Blockly.Blocks['team_addscore'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
        .appendField("Team With")
        .appendField(new Blockly.FieldTextInput("Score"), "SCORE")
        .appendField("Score");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Increase The Team Score");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#addteamscore");
  }
};
Blockly.Blocks['team_setresult'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        .appendField("Team")
        .appendField(new Blockly.FieldDropdown([["Wins","1"], ["Loses","2"]]), "RESULT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Set Result Of Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#setteamresults");
  }
};
Blockly.Blocks['team_getresult'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
        .appendField("Team Result");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Get The Current Win/Los Of Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamresults");
  }
};
Blockly.Blocks['team_setdietimes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
        .appendField("Team With")
        .appendField(new Blockly.FieldTextInput("Die Times"), "DIETIME")
        .appendField("Die Times");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Set Number Of Team Deaths");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#setteamdietimes");
  }
};
Blockly.Blocks['team_getdietimes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
        .appendField("Team Die Times");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Get The Total Deaths Of Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#getteamdietimes");
  }
};
Blockly.Blocks['team_adddietimes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
        .appendField("Team With")
        .appendField(new Blockly.FieldTextInput("Die Times"), "DIETIME")
        .appendField("Die Times");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Increase The Total Deaths Of Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#addteamdietimes");
  }
};
Blockly.Blocks['team_changeplayer'] = {
  init: function() {
    this.appendValueInput("PLAYERID")
        .setCheck(null)
        .appendField("Change");
    this.appendDummyInput()
        .appendField("'s Team To")
        .appendField(new Blockly.FieldDropdown([["White","0"], ["Red","1"], ["Blue","2"], ["Green","3"], ["Yellow","4"], ["Orange","5"], ["Purple","6"]]), "TEAMID")
        .appendField("Team");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Change Player's Team");
 this.setHelpUrl("https://developers.miniworldgame.com/wiki/team.html#changeplayerteam");
  }
};