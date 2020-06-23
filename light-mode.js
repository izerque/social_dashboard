let toggle= document.querySelector('#toggle_switch');
let body=document.getElementsByTagName('body');
let switcher=document.getElementsByClassName('.switcher');

toggle.addEventListener( 'click' , function(event){
    toggle.classList.toggle('light_mode');
    body.classList.toggle('lighter');
    switcher.classList.toggle('day');
});