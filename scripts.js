let state = true;
document.queryCelector('#example-1 button').addEventListiner('click', function(){
    state = !state;
    document.queryCelector('#example-1 h1').innerText = state ? "On" : "Off";
});
