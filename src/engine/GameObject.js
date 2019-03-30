import { Vec } from "./Math";

export class GameObject {
    constructor() {
        this.position = new Vec();

        this.children = [];

    }

    addChild(child) {
        if (child instanceof GameObject) {
            child.parent = this;
            this.children.push(child);
        }
    }

    update(engine, dt) {
        this.children.forEach((child, index)=> {
            child.update(engine, dt);
        });
    }

    draw(ctx, offset) {
        let localOffset = offset.clone().add(this.position);
        this.children.forEach((child, index)=> {
            child.draw(ctx, localOffset);
        });
    }
}