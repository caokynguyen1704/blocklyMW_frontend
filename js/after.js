function loadBodyJS(folder,list_file){

    list_file.forEach(createScriptTag);

    function createScriptTag(value) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `./js/${folder}/${value}`;    
        document.body.appendChild(script);  
    }
}

event_list=[
    "event.js",
	'api.js',
	'popup.js'
]

   

$(window).load(function(){
    loadBodyJS("event",event_list)
});