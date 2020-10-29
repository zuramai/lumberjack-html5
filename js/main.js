const canvas = document.getElementById('canvas');
let btnLeft = document.getElementById('move-left');
let btnRight = document.getElementById('move-right');
console.log(window.innerHeight)
const game = new Lumberjack({
    el: canvas,
    maxWidth: 600,
    maxHeight: window.innerHeight - 150,
    btnLeft, btnRight
});
game.init()
game.render();