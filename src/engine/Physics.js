import { GameObject } from './GameObject.js'

export class Collider extends GameObject {
    constructor(vecSize) {
        super();
        this.size = vecSize.clone();
        
    }

    update(dt) {
        super.update(dt);
    }

    draw(ctx, offset) {
        super.draw(ctx, offset);

        ctx.strokeStyle = '#ff0000';
        ctx.strokeRect(this.position.x+offset.x,this.position.y+offset.y, this.size.x,this.size.y);
    }
}