let state = true;
document.querySelector('#example-1 button').addEventListener('click', function(){
    state = !state;
    document.querySelector('#example-1 h1').innerText = state ? "On" : "Off";
    
});

let counter = 0;
document.querySelector('#example-2 button').addEventListener('click', function(){
    counter++;
    document.querySelector('#example-2 h1').innerText = counter;
    
});

