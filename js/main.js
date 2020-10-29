const canvas = document.getElementById('canvas');

const game = new Lumberjack({
    el: canvas,
    maxWidth: 600
});
game.init()
game.render();