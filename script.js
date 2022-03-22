const btn = document.getElementById('popUpButton');
const btn2 = document.getElementById('nonPopUpButton')
const popUp = document.getElementById('popUp');


btn.addEventListener('click', function(e){
    popUp.style.backgroundColor='#FFF5C8';
    popUp.style.borderColor='#FFF5C8';
    popUp.style.color='#694E00';

});

btn2.addEventListener('click', function(e){
    window.open("https://bleacherreport.com/articles/141807-lakers-best-nba-franchise-ever#:~:text=The%20Lakers%20hold%20records%20for,(5%20tied%20with%20Spurs).", "_blank")
});