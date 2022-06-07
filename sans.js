
const messageButton = document.getElementById('messageButton');
const scrollThing = document.getElementById('scrollMessage');
const messageBox1 = document.getElementById('messageBox1');
const messageBox2 = document.getElementById('messageBox2');
const messageBox3 = document.getElementById('messageBox3');
const messageBox4 = document.getElementById('messageBox4');
const messageBox5 = document.getElementById('messageBox5');

//quotes conversation between sans and nicecreamguy
let firstQuote = false;
let secondQuote = false;
let thirdQuote = false;
let fourthQuote = false;
let messageOpen = false;

// messageButton.addEventListener('click', function(e){
//     if(scrollThing.style.display === "none")
//         document.getElementById('scrollMessage').style.display = "block";
//     else
//     document.getElementById('scrollMessage').style.display = "none";
// });

imgObj = document.getElementById('sansPlayer');
var moveX = 0, moveY = 0; //This is where sans will begin
// const speed = 10; //how often moveX and MoveY will be counted by
const speed = 15;
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
        moveY = moveY + speed;
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
        
        
        
        //Keeps moving right at the start
        pos.innerHTML = "X: " + moveX + "Y: " + moveY; //X and Y position Value

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

        
        // player.style.backgroundImage="url(BackWalkingSans1.png)";
        // }
    }

    else if(key === "ArrowDown" && moveY > 0 && !messageOpen) // down arrow key
    {
        let backRotateWalk = 1;
        let rightRotateWalk = 1;
        let leftRotateWalk = 1;
        moveY = moveY - speed;

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

        player.style.bottom = moveY + "px";
        pos.innerHTML = "X: " + moveX + "Y: " + moveY; 
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
    }

    else if(key === "ArrowLeft" && moveX > 0 && !messageOpen) // left arrow key
    {
        let forwardRotateWalk = 1;
        let backRotateWalk = 1;
        let rightRotateWalk = 1;

        moveX = moveX - speed;
        player.style.left = moveX + "px";
        pos.innerHTML = "X: " + moveX + "Y: " + moveY; 
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
    }

    else if(key === "ArrowRight" && moveX < view_W && !messageOpen) // right arrow key
    {
        let forwardRotateWalk = 1;
        let backRotateWalk = 1;
        let leftRotateWalk = 1;
        moveX = moveX + speed;
        player.style.left = moveX + "px";
        pos.innerHTML = "X: " + moveX + "Y: " + moveY; 
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
    }

    //Movement controls end here and action controls begin here

    //open message board and close
    else if(key === "e" && moveY > 580 && moveX > 180 && moveX < 270) {
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
    else if(key === "e" && moveY > 420 && moveY < 540 && moveX > 705 && moveX < 855) {
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
    else if(key === "e" && moveY > 570 && moveX > 0 && moveX < 165) {
        if(messageBox2.style.display === "none" && firstQuote === false)
        {
        messageBox2.style.display = "block";
        vineBoomSound.play();
        messageOpen=true;
        firstQuote = true;
        
        }

        else if(messageBox3.style.display === "none" && secondQuote === false)
        {
        messageBox3.style.display = "block";
        vineBoomSound.play();
        messageOpen=true;
        secondQuote = true;
        messageBox2.style.display = "none";
        
        }

        else if(messageBox4.style.display === "none" && thirdQuote === false)
        {
        messageBox4.style.display = "block";
        vineBoomSound.play();
        messageOpen=true;
        thirdQuote = true;
        messageBox3.style.display = "none";
        
        }

        else if(messageBox5.style.display === "none" && fourthQuote === false)
        {
        messageBox5.style.display = "block";
        vineBoomSound.play();
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

        }
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

