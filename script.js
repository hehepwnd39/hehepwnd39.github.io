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


let colorsList = ['blue','red','green','yellow','black'];

window.addEventListener('mousemove',
    (event) => {
      x_pos = event.x;
      y_pos = event.y;

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
      
      let dx = (Math.random() - 0.4);
      let dy = (Math.random() - 0.4);
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

            for(let i = 0; i < rectNumber.length; i++){
            rectNumber[i].update();     
            }         
}

animate();


// This is RGBA  changing every frame , unused for now

    /*var red_rnd = Math.round(Math.random() * 256);
    var green_rnd = Math.round(Math.random() * 256);
    var blue_rnd = Math.round(Math.random() * 256);
    var alpha = Math.random() * (1 - 0.5) + 0.5;
    var color = 'rgba('+ red_rnd + ','+ green_rnd +','+ blue_rnd+','+ alpha +')';*/
