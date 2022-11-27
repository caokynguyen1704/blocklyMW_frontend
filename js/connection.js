function loadJS(folder,list_file){

    list_file.forEach(createScriptTag);

    function createScriptTag(value) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `./js/${folder}/${value}`;    
        document.head.appendChild(script);  
    }
}

block_list=[
    "worldcontainer_block.js",
    "worldcontainer_code.js",
    "block_block.js",
    "block_code.js",
]

block_demo_list=[
    "api_block_code.js",
    "api_block.js",
    "chat_block_code.js",
    "chat_block.js",
    "event_block_code.js",
    "event_block.js",
    "player_block_code.js",
    "player_block.js"
]

loadJS("block",block_list)
loadJS("block_demo",block_demo_list)

