
// // // var primaryWorkspace = Blockly.inject('primaryDiv',
// // // {media: 'https://unpkg.com/blockly/media/',
// // //  toolbox: toolbox});



//   function onFirstComment(event) {
//     if (event.type == Blockly.Events.BLOCK_CHANGE &&
//         event.element == 'comment' &&
//         !event.oldValue && event.newValue) {
//       alert('Congratulations on creating your first comment!')
//       Code.workspace.removeChangeListener(onFirstComment);
//     }
//   }
//   Code.workspace.addChangeListener(onFirstComment);



//   Blockly.Blocks['block_type'] = {
//     init: function() {
//       // Example validation upon block change:
//       this.setOnChange(function(changeEvent) {
//         if (this.getInput('NUM').connection.targetBlock()) {
//           this.setWarningText(null);
//         } else {
//           this.setWarningText('Must have an input block.');
//         }
//       });
//     }
//   }