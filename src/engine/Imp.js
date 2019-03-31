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

        this.isMovingRight = false
        this.isMovingLeft = false
        this.isFacingLeft = true
        this.isFacingRight = false

        this.frame = 0
        this.counter = 0;

        this.collider = new Collider(new Vec(128,64));
        this.collider.position.y = 256 - 64;
        this.collider.position.x = 64 
        this.addChild(this.collider);
    }

    update(engine, dt) {

        // unit collision
        

        // gravity


        // user input
        if(engine.isKeyDown(68)) {
            this.isFacingLeft = false;
            this.isFacingRight = true;
            this.isMovingLeft = false;
            this.isMovingRight = true;
            this.numFrames = 8;
            this.position.x += 500 * dt;
        }
        else if(engine.isKeyDown(65)) {
            this.isFacingRight = false;
            this.isFacingLeft = true;
            this.isMovingRight = false;
            this.isMovingLeft = true;
            this.numFrames = 8;
            this.position.x -= 500 * dt;
        }
        else {
            // case when sprite was moving and stopped on last frame, out of bounds
            // for stationary sprite
            if (this.frame == 7) {
                this.frame = 0;
            }
            this.isMovingRight = false;
            this.isMovingLeft = false;
            this.numFrames = 7;
        }

        this.counter += dt;
        if ((this.counter) > 1 / 8) {
            this.frame++;
            if (this.frame >= this.numFrames) {
                this.frame = 0;
            }
            this.counter = 0
        }
        console.log(this.numFrames)


        // if(engine.isKeyDown(87)) {
        //     this.position.y -= 500 * dt;
        // }
        // if(engine.isKeyDown(83)) {
        //     this.position.y += 500 * dt;
        // }

        super.update(engine, dt)
    }

    draw(ctx, offset) {
        super.draw(ctx, offset);
        let spriteRow = 0;
        if (this.isFacingRight) {
            if (this.isMovingRight) {
                spriteRow = 1;
                }
            else {
                spriteRow = 0;
            }
        }
        else if (this.isFacingLeft) {
            if (this.isMovingLeft) {
                spriteRow = 7;
            }
            else {
                spriteRow = 6;
            }
        }
        ctx.drawImage(this.img,
            this.frame * 32, spriteRow * 32, 32, 32,
            this.position.x + offset.x, this.position.y + offset.y, 256, 256)
    }
}