let canvas = document.getElementById('id-canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
let x_pos;
let y_pos;
let rectNumber = [];
let random_count_generated = Math.floor(Math.random() * 800) + 700;
let maxw = 115;
let maxh = 115;
let moved = 0;
let code = 0;
let generated_color;

let touched_blue, touched_yellow, touched_red, touched_green, touched_black;


let colorsList = ['blue','red','green','yellow','black'];


window.addEventListener('mousemove',
(event) => {
  x_pos = event.x;
  y_pos = event.y;
  moved = moved + 1; 
 })

  window.addEventListener('resize',
    (event) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  })


    class Rectangle {
            constructor(x,y,dx,dy,width,height) {
              this.x = x;
              this.y = y;
              this.dx = dx;
              this.dy = dy;
              this.width = width;
              this.height = height;
              this.minw = width;
              this.minh = height;
              
              this.color =  colorsList[Math.floor(Math.random() * colorsList.length)];
            
            }

            draw = () => {
              c.fillStyle = this.color;
              c.fillRect(this.x,this.y,this.width,this.height);
              c.font = "20px Arial";
              c.strokeText("mousemove event count: "+moved, 10, 50);
              c.strokeText("Last generated code: "+code+'('+generated_color+')', 10, 100);
            
            }

            update = () => {
              if(this.x + this.width  > innerWidth || this.x  < 0){
                this.dx = -this.dx;
            }
              if(this.y + this.height > innerHeight || this.y  < 0){
               this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy; 

            if(x_pos  - (this.x + (this.width / 2)) < 60 && x_pos - (this.x + (this.width / 2)) > - 40 &&
              y_pos - (this.y +(this.height / 2)) < 60 && (y_pos - (this.y +(this.height / 2)) > - 40 )) {

                  if ( this.width < maxw && this.height < maxh) {
                        this.width += 2;
                        this.height += 2; }

                  }

                 else if (this.width > this.minw && this.height > this.minh ) {
                        this.width -= 1.5;
                        this.height -= 1.5;

                  }
               
                this.draw();
            }
    }

    
    for (let i = 0; i < random_count_generated; i++) {
      
      let dx = (Math.random() - 0.5);
      let dy = (Math.random() - 0.5);
      let  rect_width = (Math.random() * 8) + 1;
      let  rect_height = rect_width;
      var x = Math.random() * (innerWidth - rect_width);
      var y = Math.random() * (innerHeight - rect_height);

      let new_rect = new Rectangle (x,y,dx,dy,rect_width,rect_height);
      rectNumber.push(new_rect);
    
    }
    
    function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0,0,innerWidth,innerHeight);

            for(let i = 0; i < rectNumber.length; i++)
            {
           
            rectNumber[i].update();     
            }       
            
            
}

if(rectNumber[rectNumber.length -1].color === 'blue'){
  code = Math.floor(Math.random() * 200) +50; 
  generated_color = 'blue';
}
else if(rectNumber[rectNumber.length -1].color === 'red'){
  code = Math.floor(Math.random() * 400) +200; 
  generated_color = 'red';
}
else if(rectNumber[rectNumber.length -1].color === 'green'){
  code = Math.floor(Math.random() * 800) +600;
  generated_color = 'green';
}
else if(rectNumber[rectNumber.length -1].color === 'yellow'){
  code = Math.floor(Math.random() * (-50)) -200; 
  generated_color = 'yellow';
}
else if(rectNumber[rectNumber.length -1].color === 'black'){
  code = Math.floor(Math.random() * (-400)) -600; 
  generated_color = 'black';
}

animate();


// This is RGBA  changing every frame , unused for now

    /*var red_rnd = Math.round(Math.random() * 256);
    var green_rnd = Math.round(Math.random() * 256);
    var blue_rnd = Math.round(Math.random() * 256);
    var alpha = Math.random() * (1 - 0.5) + 0.5;
    var color = 'rgba('+ red_rnd + ','+ green_rnd +','+ blue_rnd+','+ alpha +')';*/
