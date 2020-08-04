class Projectile {
    constructor(position, playerOffset, image) {
        this.width = 32;
        this.height = 16;
        this.speed = { x: 300, y: 15};
        this.position = position;
        this.playerOffset = playerOffset;
        this.image = image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
    update(deltaTime) {
        this.position.x -= this.speed.x / deltaTime;
        // slight downward drag to imitate gravity
        this.position.y += this.speed.y / deltaTime
    }
}