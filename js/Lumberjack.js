class Lumberjack {
    constructor(props) {
        this.canvas = props.el;
        this.canvas.width = window.innerWidth > props.maxWidth ? props.maxWidth : window.innerWidth;
        this.canvas.height = props.maxHeight;
        this.background = '#d3f7ff';
        this.ctx = props.el.getContext('2d');
        this.cutSound = props.cutSound
        this.tree = null;
        this.person = null;
        this.score = 0;
        this.btnLeft = props.btnLeft;
        this.btnRight = props.btnRight;
        this.highScore = localStorage.getItem('highScore')
        this.listener();
    }
    init() {
        this.person = new Person(this.canvas);
        this.tree = new Tree(this.canvas, this.canvas.width/2,this.canvas.height-350);
        this.drawBackground()
        this.tree.init();
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
    drawScore() {
        this.ctx.fillStyle = "#333";
        this.ctx.font = "24px Arial";
        this.ctx.fillText("Score", 30, 30);

        this.ctx.font = "32px Arial"
        this.ctx.fillText(this.score, 30, 70)
        
        this.ctx.font = "24px Arial";
        this.ctx.fillText("Highscore", 30, 120);

        this.ctx.font = "32px Arial"
        this.ctx.fillText(this.highScore, 30, 170)
    }
    draw() {
        this.drawBackground();
        this.tree.draw();
        this.person.draw();
        this.drawScore();
    }
    update() {

    }
    render() {
        this.draw();
        requestAnimationFrame(() => this.render())
    }
    move(direction) {
        this.person.characterPosition = direction
        this.tree.trees.shift();
        this.tree.createNewTrunk()
        
        let audio = new Audio;
        audio.src = "audio/cut.wav";
        audio.playbackRate = 2;
        audio.play();

        this.score++;
        console.log(this.tree.trees[0].value)
        if((this.tree.trees[0].value == 'left' && this.person.characterPosition == 'left') ||
            (this.tree.trees[0].value == 'right' && this.person.characterPosition == 'right')) {
                setTimeout(() => {
                    if(this.score > localStorage.getItem('highScore')) localStorage.setItem('highScore', this.score);
                    let highScore = localStorage.getItem('highScore') ? localStorage.getItem('highScore') : 0;
                    alert('You lose. Your Highscore: '+highScore);
                    window.location.reload()

                }, 100)
            }
    }
    listener() {
        let that = this;
        window.addEventListener('keypress', (e) => {
            if(e.key == 'a' || e.key == 'ArrowLeft') this.move('left');
            else if(e.key == 'd' || e.key == 'ArrowRight') this.move('right');
        })
        this.btnLeft.addEventListener('click', (e) => {
            that.move('left')
        })
        this.btnRight.addEventListener('click', (e) => {
            that.move('right')
        })
    }
}