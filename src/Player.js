import { GameObject } from "./engine/GameObject";

export class Player extends GameObject {
    constructor(canvas) {
        super();
        this.img = new Image();
        this.img.src = "res/img/L1.png"

        this.canvas = canvas

        this.dirx = 1;
        this.diry = 1;
    }

    update(dt) {
        this.position.x += 100 * dt;

        super.update(dt)
    }

    draw(ctx, offset) {
        super.draw(ctx, offset);
        
        ctx.drawImage(this.img, this.position.x + offset.x, this.position.y + this.offset.y, this.img.height, this.img.width)
    }
}