export class Engine {
    constructor() {
        document.body.style.margin = '0px';
        document.body.style.overflow = 'hidden';

        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');

        document.body.append(this.canvas);
    }

    start() {
        this.lastTime = new Date().getTime();

        window.requestAnimationFrame(this.loop.bind(this))
    }

    loop() {
        let time = new Date().getTime();
        let dt = (time-this.lastTime)/1000;
        console.log(dt);

        // update
        if (this.userUpdate) {
            this.userUpdate();
        }
        // draw
        if (this.userDraw) {
            this.userDraw(this.ctx);
        }

        this.lastTime = time;
        window.requestAnimationFrame(this.loop.bind(this))

    }
}