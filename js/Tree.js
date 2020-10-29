class Tree {
    constructor(canvas, startX, startY) {
        this.canvas = canvas;
        this.startX = startX;
        this.startY = startY;
        this.ctx = canvas.getContext('2d')
        this.width = 100;
        this.height = 150;
        this.trees = [];
        this.treesPossibility = [0,"left","right"]
        this.trunkColor = "brown";
        this.stoneColor = 'grey';
        this.stemWidth = 100;
        this.stemHeight = 30;
        this.starterTree = 5;
    }
    init() {
        for(let i = 1; i <= this.starterTree; i++) {
            let newTrunk = 0;
            let color = i%2?'#a17438':'#cc8e35';
            newTrunk = this.treesPossibility[randomNumber(2)];
            this.trees.push({
                value:newTrunk,
                color
            });
        }
    }
    createNewTrunk() {
        let color = this.trees[this.trees.length-1].color=='#a17438'?'#cc8e35':'#a17438';
        let newTrunk = this.treesPossibility[randomNumber(3)];
        this.trees.push({
            value:newTrunk,
            color
        });
    }
    draw() {
        let x = this.canvas.width/2 - this.width/2;
        this.trees.forEach((tree,index) => {
            this.ctx.fillStyle = tree.color;
            this.ctx.fillRect(x, this.startY - (index * this.height), this.width,this.height);

            if(tree.value == 'left') {
                this.ctx.roundRect(x-this.stemWidth, this.startY - (index * this.height) + this.height/2, this.stemWidth,this.stemHeight, {upperLeft:10, lowerLeft:10}, true,false)
            }
            if(tree.value == 'right') {
                this.ctx.roundRect(x+this.width, this.startY - (index * this.height) + this.height/2, this.stemWidth,this.stemHeight, {upperRight:10, lowerRight:10}, true,false)
            }
        })
        this.ctx.fillStyle = this.stoneColor;
        this.ctx.roundRect(x-10, this.startY+this.height-10, 50, 30, {upperLeft:10,upperRight:10,lowerLeft:10,lowerRight:10}, true, false);
        this.ctx.fillStyle = '#95a5a6';
        this.ctx.roundRect(x+20, this.startY+this.height-10, 80, 30, {upperLeft:10,upperRight:10,lowerLeft:10,lowerRight:10}, true, false);


    }
}