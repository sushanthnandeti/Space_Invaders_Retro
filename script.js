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
        // horizontal movement 
        if (this.game.keys.indexOf('ArrowLeft') > -1) this.x -= this.speed;
        if (this.game.keys.indexOf('ArrowRight') > -1) this.x += this.speed;

        // horizontal movement 

        if (this.x < 0) this.x = 0;
        else if(this.x > this.game.width - this.width) this.x = this.game.width - this.width;
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
        this.keys = [];
        
        // event listeners 
        // we use to the callback arrow functions as they carry the context and also able to bind with the class variables
        window.addEventListener('keydown', e => {
            if (this.keys.indexOf(e.key) === -1) this.keys.push(e.key)
    });
        window.addEventListener('keyup', e => {
            const index = this.keys.indexOf(e.key)
            if (index > -1) this.keys.splice(index, 1)
    });
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