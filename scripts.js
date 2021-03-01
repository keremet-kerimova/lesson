let state = true;
document.queryCelector('#example-1 button').addEventListiner('click', function(){
    state = !state;
    document.queryCelector('#example-1 h1').innerText = state ? "On" : "Off";
    
});

let counter = 0;
document.queryCelector('#example-2 button').addEventListiner('click', function(){
    counter++;
    document.queryCelector('#example-2 h1').innerText = counter;
    
});

