
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function draw(startX,startY,len,angle,branchWidth){
    ctx.lineWidth = branchWidth;
ctx.beginPath();
ctx.save();

ctx.translate(startX,startY);
ctx.rotate(angle * (Math.PI/180));
ctx.moveTo(0,0);
ctx.lineTo(0,-len);
    ctx.strokeStyle = "green";
ctx.stroke()

    if(len<10){
        ctx.restore()
        return;
    }

    draw(0,-len,len*0.8,-15,branchWidth*0.8);
    draw(0,-len,len*0.8,+15,branchWidth*0.8);

    ctx.restore();


}

draw(window.innerWidth/2,0,120,180,0.5);
