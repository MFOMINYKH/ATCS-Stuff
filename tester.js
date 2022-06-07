
const messageButton = document.getElementById('messageButton');
const scrollThing = document.getElementById('scrollMessage');
const scroll = document.getElementById('scroll');
const pathMap = document.getElementById('pathMap');
const myCanvas = document.getElementById('myCanvas');
const messageBox1 = document.getElementById('messageBox1');
const messageBox2 = document.getElementById('messageBox2');
const messageBox3 = document.getElementById('messageBox3');
const messageBox4 = document.getElementById('messageBox4');
const messageBox5 = document.getElementById('messageBox5');

const theBody = document.getElementById('theBody');
let backGroundX = 0;
let backGroundY = 0;
let scrollX = 550;
let scrollY = 600;



//quotes conversation between sans and nicecreamguy
let firstQuote = false;
let secondQuote = false;
let thirdQuote = false;
let fourthQuote = false;
let messageOpen = false;


function getPixel(x, y) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = pathMap;
    ctx.drawImage(img, 0, 0); //do not know why these numbers work the way they do, but they work L

    let width = 1520;
    let height = 1160;
    let count = 1;
    let scale = 1.45;

    let alphaVals = new Array(width/scale)
    for(let k = 0; k < width/scale; k++)
    {
        alphaVals[k] = new Array(height/scale);
    }

       for(let i = 0; i < width/scale; i++)
       {
        for(let j = 0; j < height/scale; j++)
        {
            let data = ctx.getImageData(j*scale, i*scale, 1, 1).data[3];
            if(data > 0)
                {

                    alphaVals[i][j] = 1;
                }
            else {
                alphaVals[i][j] = 0;
            }
        }
       }
       console.log(alphaVals);

    

//    return ctx.getImageData(j*10, i*10, 1, 1).data[3];

  }
  




// messageButton.addEventListener('click', function(e){
//     if(scrollThing.style.display === "none")
//         document.getElementById('scrollMessage').style.display = "block";
//     else
//     document.getElementById('scrollMessage').style.display = "none";
// });

imgObj = document.getElementById('sansPlayer');
var moveX = 0, moveY = 360; //This is where sans will begin
var totalX = 0; totalY = 360; //the coordinate in the game, not the page
// const speed = 10; //how often moveX and MoveY will be counted by
const speed =15;
var w = document.body.clientWidth; var h = document.body.clientHeight;
/* The clientWidth and clientHeight prop will give the viewable width of the element in pixels */
var view_W = w - 110; var view_H = h - 100;
let upMove = 0, downMove = 0, leftMove = 0, rightMove = 0; // basically a boolean value for whether the key is pressed... idk how to make a boolean and im too lazy to search it up

 
let backRotateWalk = 1;
let forwardRotateWalk = 1;
let rightRotateWalk = 1;
let leftRotateWalk = 1;





// //timer stuff
// let timeSecond = 0;

// const count = setInterval (()=>{
//     timeSecond += speed;
//     console.log(timeSecond);


    
//     if(rightMove === 1){
//         moveX = moveX + speed;
//         player.style.left = moveX + "px";
    
//     }
//     if(leftMove === 1){

//         moveX = moveX - speed;
//         player.style.left = moveX + "px";
        
//     }
    
// },1)






window.addEventListener("keydown", Control);
function Control()
{
    
        let key = event.key;
        console.log(key);
        let player = document.getElementById('player');

        let back1 = document.getElementById('back1');
        let back2 = document.getElementById('back2');
        let back3 = document.getElementById('back3');
        let back4 = document.getElementById('back4');

        let forward1 = document.getElementById('forward1');
        let forward2 = document.getElementById('forward2');
        let forward3 = document.getElementById('forward3');
        let forward4 = document.getElementById('forward4');

        let right1 = document.getElementById('right1');
        let right2 = document.getElementById('right2');
        let right3 = document.getElementById('right3');
        let right4 = document.getElementById('right4');

        let left1 = document.getElementById('left1');
        let left2 = document.getElementById('left2');
        let left3 = document.getElementById('left3');
        let left4 = document.getElementById('left4');

        let pos = document.getElementById('pos')
    

    if(key === "ArrowUp" && moveY < view_H && !messageOpen) // up arrow key
    {
        let forwardRotateWalk = 1;
        let rightRotateWalk = 1;
        let leftRotateWalk = 1;
        getPixel(moveX, totalY);

        if(moveY >= (view_H*0.75) && totalY <= (view_H*0.75)/*this is the total size of the image*/){
            totalY = totalY + speed;
            backGroundY += speed;
            scroll.style.bottom = `${scrollY-backGroundY}px`;
            theBody.style.backgroundPosition=`${backGroundX}px ${backGroundY}px`;
            pathMap.style.top=`${backGroundY}px`;
            pathMap.style.left=`${backGroundX}px`;
            myCanvas.style.top=`${backGroundY}px`;
            myCanvas.style.left=`${backGroundX}px`;
            pos.innerHTML = "X: " + totalX + "Y: " + totalY; //X and Y position Value
        }

        else{

            moveY = moveY + speed;
            totalY = totalY + speed;
            player.style.bottom = moveY + "px";
            player.style.left = moveX + "px";
            back1.style.bottom = moveY + "px";
            back1.style.left = moveX + "px"; 
            back2.style.bottom = moveY + "px";
            back2.style.left = moveX + "px";
            back3.style.bottom = moveY + "px";
            back3.style.left = moveX + "px";
            back4.style.bottom = moveY + "px";
            back4.style.left = moveX + "px";
            forward1.style.bottom = moveY + "px";
            forward1.style.left = moveX + "px"; 
            forward2.style.bottom = moveY + "px";
            forward2.style.left = moveX + "px";
            forward3.style.bottom = moveY + "px";
            forward3.style.left = moveX + "px";
            forward4.style.bottom = moveY + "px";
            forward4.style.left = moveX + "px";
            right1.style.bottom = moveY + "px";
            right1.style.left = moveX + "px"; 
            right2.style.bottom = moveY + "px";
            right2.style.left = moveX + "px";
            right3.style.bottom = moveY + "px";
            right3.style.left = moveX + "px";
            right4.style.bottom = moveY + "px";
            right4.style.left = moveX + "px";
            left1.style.bottom = moveY + "px";
            left1.style.left = moveX + "px"; 
            left2.style.bottom = moveY + "px";
            left2.style.left = moveX + "px";
            left3.style.bottom = moveY + "px";
            left3.style.left = moveX + "px";
            left4.style.bottom = moveY + "px";
            left4.style.left = moveX + "px";
        
        }
        
        
        //Keeps moving right at the start
        pos.innerHTML = "X: " + totalX + "Y: " + totalY; //X and Y position Value

        upMove = 1;

        if(backRotateWalk === 1){
            player.style.backgroundImage='none';
            player.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            
            back1.style.display="block";

        }
        if(backRotateWalk === 2){
            player.style.backgroundImage='none';
            player.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            back1.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            
            back2.style.display="block";
        }
        if(backRotateWalk === 3){
            player.style.backgroundImage='none';
            player.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            back2.style.display="none";
            back1.style.display="none";
            back4.style.display="none";
            
            back3.style.display="block";
        }
        if(backRotateWalk === 4){
            player.style.backgroundImage='none';
            player.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back1.style.display="none";
            
            back4.style.display="block";

            backRotateWalk = 1;
        }

        backRotateWalk++;
        //rgba.innerHTML = getPixel(moveX, moveY);

        
        // player.style.backgroundImage="url(BackWalkingSans1.png)";
        // }
    }

    else if(key === "ArrowDown" && moveY > 0 && !messageOpen) // down arrow key
    {
        
        let backRotateWalk = 1;
        let rightRotateWalk = 1;
        let leftRotateWalk = 1;
        console.log(view_H);
        getPixel(moveX, totalY);

        if(moveY <= (view_H*0.25) && totalY > ((view_H-((view_H*1.45)+(view_H*0.25))))/*this is the total size of the image*/){
            totalY = totalY - speed;
            backGroundY -= speed;
            scroll.style.bottom = `${scrollY-backGroundY}px`;
            theBody.style.backgroundPosition=`${backGroundX}px ${backGroundY}px`;
            pathMap.style.top=`${backGroundY}px`;
            pathMap.style.left=`${backGroundX}px`;
            myCanvas.style.top=`${backGroundY}px`;
            myCanvas.style.left=`${backGroundX}px`;
            pos.innerHTML = "X: " + totalX + "Y: " + totalY; //X and Y position Value
        }

        else{

            moveY = moveY - speed;
            totalY = totalY - speed;

            player.style.bottom = moveY + "px";
            player.style.left = moveX + "px";
            back1.style.bottom = moveY + "px";
            back1.style.left = moveX + "px"; 
            back2.style.bottom = moveY + "px";
            back2.style.left = moveX + "px";
            back3.style.bottom = moveY + "px";
            back3.style.left = moveX + "px";
            back4.style.bottom = moveY + "px";
            back4.style.left = moveX + "px";
            forward1.style.bottom = moveY + "px";
            forward1.style.left = moveX + "px"; 
            forward2.style.bottom = moveY + "px";
            forward2.style.left = moveX + "px";
            forward3.style.bottom = moveY + "px";
            forward3.style.left = moveX + "px";
            forward4.style.bottom = moveY + "px";
            forward4.style.left = moveX + "px";
            right1.style.bottom = moveY + "px";
            right1.style.left = moveX + "px"; 
            right2.style.bottom = moveY + "px";
            right2.style.left = moveX + "px";
            right3.style.bottom = moveY + "px";
            right3.style.left = moveX + "px";
            right4.style.bottom = moveY + "px";
            right4.style.left = moveX + "px";
            left1.style.bottom = moveY + "px";
            left1.style.left = moveX + "px"; 
            left2.style.bottom = moveY + "px";
            left2.style.left = moveX + "px";
            left3.style.bottom = moveY + "px";
            left3.style.left = moveX + "px";
            left4.style.bottom = moveY + "px";
            left4.style.left = moveX + "px";
        }

        player.style.bottom = moveY + "px";
        pos.innerHTML = "X: " + totalX + "Y: " + totalY; //X and Y position Value
        downMove = 1;

        if(forwardRotateWalk === 1){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            
            forward1.style.display="block";

        }
        if(forwardRotateWalk === 2){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            forward1.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            
            forward2.style.display="block";
        }
        if(forwardRotateWalk === 3){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            forward2.style.display="none";
            forward1.style.display="none";
            forward4.style.display="none";
            
            forward3.style.display="block";
        }
        if(forwardRotateWalk === 4){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward1.style.display="none";
            
            forward4.style.display="block";

            forwardRotateWalk = 1;
        }

        forwardRotateWalk++;
       // rgba.innerHTML = getPixel(moveX, moveY);
    }

    else if(key === "ArrowLeft" && moveX > 0 && !messageOpen) // left arrow key
    {
        let forwardRotateWalk = 1;
        let backRotateWalk = 1;
        let rightRotateWalk = 1;
        getPixel(moveX, totalY);
        if(moveX <= (view_W*0.25) && totalX > ( view_W*0.25/*this is the total size of the image*/)){
            totalX = totalX - speed;
            backGroundX += speed;
            scroll.style.left = `${scrollX+backGroundX}px`;
            theBody.style.backgroundPosition=`${backGroundX}px ${backGroundY}px`;
            pathMap.style.top=`${backGroundY}px`;
            pathMap.style.left=`${backGroundX}px`;
            myCanvas.style.top=`${backGroundY}px`;
            myCanvas.style.left=`${backGroundX}px`;
            pos.innerHTML = "X: " + totalX + "Y: " + totalY; //X and Y position Value
        }

        else{

        moveX = moveX - speed;
        totalX = totalX - speed;
        player.style.left = moveX + "px";
        pos.innerHTML = "X: " + totalX + "Y: " + totalY; //X and Y position Value
        leftMove = 1;

        player.style.bottom = moveY + "px";
        player.style.left = moveX + "px";
        back1.style.bottom = moveY + "px";
        back1.style.left = moveX + "px"; 
        back2.style.bottom = moveY + "px";
        back2.style.left = moveX + "px";
        back3.style.bottom = moveY + "px";
        back3.style.left = moveX + "px";
        back4.style.bottom = moveY + "px";
        back4.style.left = moveX + "px";
        forward1.style.bottom = moveY + "px";
        forward1.style.left = moveX + "px"; 
        forward2.style.bottom = moveY + "px";
        forward2.style.left = moveX + "px";
        forward3.style.bottom = moveY + "px";
        forward3.style.left = moveX + "px";
        forward4.style.bottom = moveY + "px";
        forward4.style.left = moveX + "px";
        right1.style.bottom = moveY + "px";
        right1.style.left = moveX + "px"; 
        right2.style.bottom = moveY + "px";
        right2.style.left = moveX + "px";
        right3.style.bottom = moveY + "px";
        right3.style.left = moveX + "px";
        right4.style.bottom = moveY + "px";
        right4.style.left = moveX + "px";
        left1.style.bottom = moveY + "px";
        left1.style.left = moveX + "px"; 
        left2.style.bottom = moveY + "px";
        left2.style.left = moveX + "px";
        left3.style.bottom = moveY + "px";
        left3.style.left = moveX + "px";
        left4.style.bottom = moveY + "px";
        left4.style.left = moveX + "px";
        }

        if(leftRotateWalk === 1){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            
            left1.style.display="block";

        }
        if(leftRotateWalk === 2){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            left1.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            
            left2.style.display="block";
        }
        if(leftRotateWalk === 3){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            left2.style.display="none";
            left1.style.display="none";
            left4.style.display="none";
            
            left3.style.display="block";
        }
        if(leftRotateWalk === 4){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            right1.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left1.style.display="none";
            
            left4.style.display="block";

            leftRotateWalk = 1;
        }

        leftRotateWalk++;
       // rgba.innerHTML = getPixel(moveX, moveY);
    }

    else if(key === "ArrowRight" && moveX < view_W && !messageOpen) // right arrow key
    {
        console.log(view_W*1.45);
        let forwardRotateWalk = 1;
        let backRotateWalk = 1;
        let leftRotateWalk = 1;
        getPixel(moveX, totalY);
        if(moveX >= (view_W*0.75) && totalX < ((view_W*1.45)-(view_W*0.25) /*this is the total size of the image*/)){
            totalX = totalX + speed;
            backGroundX -= speed;
            scroll.style.left = `${scrollX+backGroundX}px`;
            theBody.style.backgroundPosition=`${backGroundX}px ${backGroundY}px`;
            pathMap.style.top=`${backGroundY}px`;
            pathMap.style.left=`${backGroundX}px`;
            myCanvas.style.top=`${backGroundY}px`;
            myCanvas.style.left=`${backGroundX}px`;
            pos.innerHTML = "X: " + totalX + "Y: " + totalY; //X and Y position Value
        }
        else{
            moveX = moveX + speed;
            totalX = totalX + speed;
            player.style.left = moveX + "px";
            pos.innerHTML = "X: " + totalX + "Y: " + totalY; //X and Y position Value
            rightMove = 1;

            player.style.bottom = moveY + "px";
            player.style.left = moveX + "px";
            back1.style.bottom = moveY + "px";
            back1.style.left = moveX + "px"; 
            back2.style.bottom = moveY + "px";
            back2.style.left = moveX + "px";
            back3.style.bottom = moveY + "px";
            back3.style.left = moveX + "px";
            back4.style.bottom = moveY + "px";
            back4.style.left = moveX + "px";
            forward1.style.bottom = moveY + "px";
            forward1.style.left = moveX + "px"; 
            forward2.style.bottom = moveY + "px";
            forward2.style.left = moveX + "px";
            forward3.style.bottom = moveY + "px";
            forward3.style.left = moveX + "px";
            forward4.style.bottom = moveY + "px";
            forward4.style.left = moveX + "px";
            right1.style.bottom = moveY + "px";
            right1.style.left = moveX + "px"; 
            right2.style.bottom = moveY + "px";
            right2.style.left = moveX + "px";
            right3.style.bottom = moveY + "px";
            right3.style.left = moveX + "px";
            right4.style.bottom = moveY + "px";
            right4.style.left = moveX + "px";
            left1.style.bottom = moveY + "px";
            left1.style.left = moveX + "px"; 
            left2.style.bottom = moveY + "px";
            left2.style.left = moveX + "px";
            left3.style.bottom = moveY + "px";
            left3.style.left = moveX + "px";
            left4.style.bottom = moveY + "px";
            left4.style.left = moveX + "px";
        }

        if(rightRotateWalk === 1){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            
            right1.style.display="block";

        }
        if(rightRotateWalk === 2){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            right1.style.display="none";
            right3.style.display="none";
            right4.style.display="none";
            
            right2.style.display="block";
        }
        if(rightRotateWalk === 3){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            right2.style.display="none";
            right1.style.display="none";
            right4.style.display="none";
            
            right3.style.display="block";
        }
        if(rightRotateWalk === 4){
            player.style.backgroundImage='none';
            player.style.display="none";
            back1.style.display="none";
            back2.style.display="none";
            back3.style.display="none";
            back4.style.display="none";
            left1.style.display="none";
            left2.style.display="none";
            left3.style.display="none";
            left4.style.display="none";
            forward1.style.display="none";
            forward2.style.display="none";
            forward3.style.display="none";
            forward4.style.display="none";
            right2.style.display="none";
            right3.style.display="none";
            right1.style.display="none";
            
            right4.style.display="block";

            rightRotateWalk = 1;
        }

        rightRotateWalk++;
        //rgba.innerHTML = getPixel(moveX, moveY);
    }

    //Movement controls end here and action controls begin here

    //open scroll and close
    else if(key === "e" && moveY-backGroundY >= 540 && moveX -backGroundX> 480 && moveX-backGroundX < 600) {
        if(scrollThing.style.display === "none")
        {
        scrollThing.style.display = "block";
        papersound.play();
        messageOpen=true;
        }

        else{
            scrollThing.style.display = "none";
            messageOpen=false;

        }
    }


    //snow ball dialouge
    else if(key === "e" && moveY-backGroundY > 360 && moveY-backGroundY < 495 && moveX-backGroundX > 840 && moveX-backGroundX < 975) {
        if(messageBox1.style.display === "none")
        {
        messageBox1.style.display = "block";
        vineBoomSound.play();
        messageOpen=true;
        }
        

        else{
            messageBox1.style.display = "none";
            messageOpen=false;

        }
    }

    //nice cream guy dialouge
    else if(key === "e" && moveY-backGroundY >= 540 && moveX-backGroundX > 180 && moveX-backGroundX < 330) {
        if(messageBox2.style.display === "none" && firstQuote === false)
        {
        messageBox2.style.display = "block";
        messageOpen=true;
        firstQuote = true;

        theme.pause();
        talkingmusic.play();
        
        }

        else if(messageBox3.style.display === "none" && secondQuote === false)
        {
        messageBox3.style.display = "block";
        messageOpen=true;
        secondQuote = true;
        messageBox2.style.display = "none";
        
        }

        else if(messageBox4.style.display === "none" && thirdQuote === false)
        {
        messageBox4.style.display = "block";
        messageOpen=true;
        thirdQuote = true;
        messageBox3.style.display = "none";
        
        }

        else if(messageBox5.style.display === "none" && fourthQuote === false)
        {
        messageBox5.style.display = "block";
        messageOpen=true;
        fourthQuote = true;
        messageBox4.style.display = "none";
        
        }

        else{
            messageBox5.style.display = "none";
            messageOpen=false;
            firstQuote = false;
            secondQuote = false;
            thirdQuote = false;
            fourthQuote = false;
            talkingmusic.pause();
            theme.play();

        }
    }


    //map tester

    
    else if(key === "p")
    {
       //theme.play();
    //    console.log(getPixel(moveX, 1120-(view_H-moveY)));
    //    console.log("x: " + totalX/1.45 + "    y: " + (view_H-totalY) + "    bgx: " + backGroundX + "       bgy: " + backGroundY);
    //    rgba.innerHTML = getPixel(moveX, 1120-(view_H-moveY));
       getPixel(0, 0);
    //    let alphaVals = new Array(100).fill(new Array(100));

    //    for(let i = 0; i < 100; i++)
    //    {
    //     for(let j = 0; j < 100; j++)
    //     {
    //         if(getPixel(i, j)[3] > 0)
    //             {
    //                 alphaVals[i][j] = 1;
    //             }
    //         else {
    //             alphaVals[i][j] = 0;
    //         }
    //     }
    //    }
    //    console.log(alphaVals);

    }

    else if(key === "m")
    {
       theme.play();

    }

    else if(key === "v")
    {
        papersound.play();
    }





    else
    {
        /*stay at current position */
        player.style.left = moveX + "px";
        player.style.bottom = moveY + "px";
        upMove = 0;
        downMove = 0;
        leftMove = 0;
        rightMove = 0;

        
    }

      
}

