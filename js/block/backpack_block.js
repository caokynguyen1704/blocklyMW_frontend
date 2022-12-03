Blockly.Blocks['backpack_getbackpackbaridrange'] = {
  init: function () {
    this.appendValueInput('id')
      .setCheck('Number')
      .appendField("Get the range of backpack bar's ID");
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_getbackpackbarsize'] = {
  init: function () {
    this.appendValueInput('bartype')
      .setCheck('Number')
      .appendField('Get the size of backpack bar');
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_setgriditem'] = {
  init: function () {
    this.appendDummyInput().appendField('Set the backpack');
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('playerid');
    this.appendValueInput('gridid').setCheck('Number').appendField('gridid');
    this.appendValueInput('itemid').setCheck('Number').appendField('itemid');
    this.appendValueInput('num').setCheck('Number').appendField('num');
    this.appendValueInput('durability')
      .setCheck('Number')
      .appendField('durability');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_removegriditem'] = {
  init: function () {
    this.appendDummyInput().appendField(
      " Remove items in backpack bar by grid's id"
    );
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('playerid');
    this.appendValueInput('gridid').setCheck('Number').appendField('gridid');
    this.appendValueInput('num').setCheck('Number').appendField('num');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_removegriditembyitemid'] = {
  init: function () {
    this.appendDummyInput().appendField(
      "Remove some items in backpack bar by item's id"
    );
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('playerid');
    this.appendValueInput('itemid').setCheck('Number').appendField('itemid');
    this.appendValueInput('num').setCheck('Number').appendField('num');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_clearpack'] = {
  init: function () {
    this.appendDummyInput().appendField('Clear all the backpack');
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('playerid');
    this.setInputsInline(true);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_clearallpack'] = {
  init: function () {
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('Clear all the backpack');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_movegriditem'] = {
  init: function () {
    this.appendDummyInput().appendField('Remove items in backpack');
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('playerid');
    this.appendValueInput('gridsrc').setCheck('Number').appendField('gridsrc');
    this.appendValueInput('griddst').setCheck('Number').appendField('griddst');
    this.appendValueInput('num').setCheck('Number').appendField('num');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_swapgriditem'] = {
  init: function () {
    this.appendDummyInput().appendField('Exchange item backpack');
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('playerid');
    this.appendValueInput('gridsrc').setCheck('Number').appendField('gridsrc');
    this.appendValueInput('griddst').setCheck('Number').appendField('griddst');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_enoughspaceforitem'] = {
  init: function () {
    this.appendDummyInput().appendField('If there is enough space in backpack');
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('playerid');
    this.appendValueInput('itemid').setCheck('Number').appendField('itemid');
    this.appendValueInput('num').setCheck('Number').appendField('num');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_calcspacenumforitem'] = {
  init: function () {
    this.appendDummyInput().appendField(
      'Calculate the total number of remaining items that the backpack'
    );
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('playerid');
    this.appendValueInput('itemid').setCheck('Number').appendField('itemid');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_getbackpackbarvalidlist'] = {
  init: function () {
    this.appendDummyInput().appendField(
      "Get valid list of items' ID which are already in backpack bar"
    );
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('playerid');
    this.appendValueInput('bartype').setCheck('Number').appendField('bartype');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backpack_getbackpackbaritemlist'] = {
  init: function () {
    this.appendDummyInput().appendField('Get items already in backpack bar');
    this.appendValueInput('playerid')
      .setCheck('Number')
      .appendField('playerid');
    this.appendValueInput('bartype').setCheck('Number').appendField('bartype');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
