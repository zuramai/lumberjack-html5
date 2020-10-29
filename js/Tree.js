class Tree {
    constructor(canvas, startX, startY) {
        this.canvas = canvas;
        this.startX = startX;
        this.startY = startY;
        this.ctx = canvas.getContext('2d')
        this.width = 100;
        this.height = 100;
        this.trees = [0,"left","right"];
        this.trunkColor = "brown";
        this.stoneColor = 'grey';
    }
    draw() {
        let x = this.canvas.width/2 - this.width/2;
        this.trees.forEach((tree,index) => {
            this.ctx.fillStyle = '#a17438';
            this.ctx.fillRect(x, this.startY - (index * this.height), this.width,this.height)
        })
        this.ctx.fillStyle = this.stoneColor;
        this.ctx.roundRect(x-10, this.startY+this.height-10, 50, 30, {upperLeft:10,upperRight:10,lowerLeft:10,lowerRight:10}, true, false);
        this.ctx.fillStyle = '#95a5a6';
        this.ctx.roundRect(x+20, this.startY+this.height-10, 80, 30, {upperLeft:10,upperRight:10,lowerLeft:10,lowerRight:10}, true, false);
    }
}