import { GameObject } from "./GameObject";
import { Vec } from "./Math";

export class Engine {
    constructor() {
        document.body.style.margin = '0px';
        document.body.style.overflow = 'hidden';

        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');

        this.ctx.imageSmoothingEnabled = false;

        this.rootNode = new GameObject();

        document.body.append(this.canvas);

        this.downkeys = [];

        document.body.onkeydown = function(evt) {
            this.downkeys[evt.keyCode] = true;
        }.bind(this);

        document.body.onkeyup = function(evt) {
            this.downkeys[evt.keyCode] = false;
        }.bind(this);
    }

    start() {
        this.lastTime = new Date().getTime();

        window.requestAnimationFrame(this.loop.bind(this))
    }

    isKeyDown(code) {
        return this.downkeys[code];
    }

    loop() {
        let time = new Date().getTime();
        let dt = (time-this.lastTime)/1000;

        // update
        this.rootNode.update(this, dt);
        if (this.userUpdate) {
            this.userUpdate(dt);
        }
        // draw
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.rootNode.draw(this.ctx, new Vec());
        if (this.userDraw) {
            this.userDraw(this.ctx);
        }

        this.lastTime = time;
        window.requestAnimationFrame(this.loop.bind(this))

    }
}