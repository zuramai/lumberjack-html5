class Lumberjack {
    constructor(props) {
        this.canvas = props.el;
        this.canvas.width = props.maxWidth;
        this.canvas.height = window.innerHeight;
        this.background = '#d3f7ff';
        this.ctx = props.el.getContext('2d');
        this.cutSound = props.cutSound
        this.tree = null;
        this.person = null;
    }
    init() {
        this.person = new Person(this.canvas);
        this.tree = new Tree(this.canvas, this.canvas.width/2,this.canvas.height-300);
        this.drawBackground()
    }
    drawBackground() {

        // Draw sky
        this.ctx.fillStyle = this.background;
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        
        // Draw floating land
        let land = new Image();
        land.src = "images/land.png";
        this.ctx.drawImage(land,0,this.canvas.height-300,this.canvas.width,350)
    }
    draw() {
        this.drawBackground();
        this.tree.draw();
        this.person.draw();
    }
    update() {

    }
    render() {
        this.draw();
        requestAnimationFrame(() => this.render())
    }
}