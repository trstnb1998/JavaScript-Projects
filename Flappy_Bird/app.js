let config = {
    renderer: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300},
            debugv: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload() {

}

function create() {

}

function update() {
    
}