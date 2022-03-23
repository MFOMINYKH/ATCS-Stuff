const btn = document.getElementById('popUpButton');
const btn2 = document.getElementById('nonPopUpButton')
const popUp = document.getElementById('popUp');
let timeSecond = -100;
let opacityLevel = 100;


btn.addEventListener('click', function(e){
    popUp.style.backgroundColor='#FFF5C8';
    popUp.style.borderColor='#FFF5C8';
    popUp.style.color='#694E00';
    timeSecond = 1000;
    opactiyLevel = 100;
    console.log(timeSecond)

});

btn2.addEventListener('click', function(e){
    window.open("https://bleacherreport.com/articles/141807-lakers-best-nba-franchise-ever#:~:text=The%20Lakers%20hold%20records%20for,(5%20tied%20with%20Spurs).", "_blank")
});

//timer stuff

const countDown = setInterval (()=>{
    timeSecond--;
    if(timeSecond === 0){
        popUp.style.backgroundColor='transparent';        
        popUp.style.borderColor='transparent';
        popUp.style.color='transparent';
    }
    if(timeSecond <= 300){       
        
        opactiyLevel--;
    }
    popUp.style.opacity=`${opactiyLevel}%`;
},10)