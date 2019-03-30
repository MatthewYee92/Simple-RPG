import { GameObject } from "./GameObject";
import { Collider } from "./Physics";
import { Vec } from "./Math";

export class Imp extends GameObject {
    constructor(canvas) {
        super();
        this.img = new Image();
        this.img.src = "res/img/imp.png"

        this.canvas = canvas

        this.dirx = 1;
        this.diry = 1;

        this.frame = 0
        this.counter = 0;

        this.collider = new Collider(new Vec(128,64));
        this.collider.position.y = 256 - 64;
        this.collider.position.x = 64 
        this.addChild(this.collider);
    }

    update(engine, dt) {

        this.counter += dt;
        if ((this.counter) > 1 / 8) {
            this.frame++;
            if (this.frame >= 8) {
                this.frame = 0;
            }
            this.counter = 0
        }

        if(engine.isKeyDown(68)) {
            this.position.x += 500 * dt;
        }
        if(engine.isKeyDown(65)) {
            this.position.x -= 500 * dt;
        }
        if(engine.isKeyDown(87)) {
            this.position.y -= 500 * dt;
        }
        if(engine.isKeyDown(83)) {
            this.position.y += 500 * dt;
        }

        super.update(engine, dt)
    }

    draw(ctx, offset) {
        super.draw(ctx, offset);
        //ctx.drawImage(this.img, this.position.x + offset.x, this.position.y + offset.y, this.img.height, this.img.width)
        ctx.drawImage(this.img,
            this.frame * 32, 1 * 32, 32, 32,
            this.position.x + offset.x, this.position.y + offset.y, 256, 256)
    }
}