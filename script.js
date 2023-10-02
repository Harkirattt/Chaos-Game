let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.height = 600;
canvas.width = 1000;

ctx.strokeStyle = "black";



function lerp( a, b, alpha ) {
    return a + alpha * ( b - a );
}

window.addEventListener('keydown',(e)=>{
    e.preventDefault();
    if(e.key==" "){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        let points = [];

        for(let i = 0 ; i < 4; i++){
            var x = Math.floor(1000*Math.random());
            var y = Math.floor(600*Math.random());
            points.push({x,y});
        }
        for(let i=0;i<points.length;i++){
            if(i==3){
                ctx.strokeStyle= "red";
            }
            ctx.beginPath();
            ctx.arc(points[i].x,points[i].y,2,0,2 * Math.PI);
            ctx.stroke();
        }
        let i =0;
        
        while(i<=5000){
            var chosenPoint = Math.floor(3*Math.random()) + 1;
            switch (chosenPoint){
                case 1:
                    ctx.strokeStyle = 'red';
                    break;
                case 2:
                    ctx.strokeStyle = 'blue';
                    break;
                case 3:
                    ctx.strokeStyle = 'yellow';
                    break;
            }
            var chosenX = points[chosenPoint-1].x;
            var chosenY = points[chosenPoint-1].y;
            var newPointX = lerp(points[3].x,chosenX,0.5);
            var newPointY = lerp(points[3].y,chosenY,0.5);
            ctx.beginPath();
            ctx.arc(newPointX,newPointY,2,0,2*Math.PI);
            ctx.stroke();
            points[3].x = newPointX;
            points[3].y = newPointY;
        
            i++;
        }
    }
})