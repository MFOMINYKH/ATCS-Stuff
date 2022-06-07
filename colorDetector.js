
// const timeH = document.querySelector('h1');
// let timeSecond = 10;

// displayTime(timeSecond)

// const countDown = setInterval (()=>{
//     timeSecond--;
//     displayTime(timeSecond);
//     if(timeSecond <= 0 || timeSecond<1){
//         endTime();
//         clearInterval(countDown)
//     }
// },1000)


// const colorSheet = document.getElementById("")

function getPixel(x, y) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("colorImage")
    ctx.drawImage(img, 0, 0);
    return (ctx.getImageData(x, y, 1, 1).data);
  }
  
  console.log(getPixel(780, 200));