class Player {
    constructor (game) {
        this.game = game; 
        this.width = 100; 
        this.height = 100; 
        this.x = this.game.width * 0.5 - this.height ;
        this.y = this.game.height - this.height;
        this.speed = 5;
    }

    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height)
    }
    // runs 60 times every second
    update() {
        this.x += this.speed;
    }   
}


class Enemy {

}


class Projectile {

}

class Game {
    constructor(canvas) {
        this.canvas = canvas; 
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(this);
    }

    render(context) {
        this.player.draw(context);
        this.player.update();
        console.log(this.player.width, this.player.height);
    }
}


window.addEventListener('load', function() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    let game = new Game(canvas);
    

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render(ctx);
        requestAnimationFrame(animate);
    }
    animate();
})