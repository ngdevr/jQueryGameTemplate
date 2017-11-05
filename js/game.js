function startGame() {

}

function attachEvents() {
    $("#newbutton").click(function () { confirmNew(); this.blur(); });
    $("#audiobutton").click(function () { toggleSound(); this.blur(); });
}

function confirmNew(){
    $.confirm({
        theme: 'supervan',
        title: 'Confirm',
        content: 'Are you sure you want to start a new game?',
        buttons: {
            confirm: function () {
				openPage(3);
            },
            cancel: function () {
            }
        }
    });
}

function toggleSound() {
    var config = localStorageManager.getGameConfig();
    if (config && config.playSounds){
        config.playSounds = false;
        $('#audiobutton span').removeClass("glyphicon-volume-up");
        $('#audiobutton span').addClass("glyphicon-volume-off");        
    } else {
        config.playSounds = true;
        $('#audiobutton span').removeClass("glyphicon-volume-off");
        $('#audiobutton span').addClass("glyphicon-volume-up");        
    }
    localStorageManager.setGameConfig(config); 
}