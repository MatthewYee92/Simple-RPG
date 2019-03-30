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

    update(dt) {
        this.children.forEach((child, index)=> {
            child.update(dt);
        });
    }

    draw(ctx, offset) {
        this.children.forEach((child, index)=> {
            child.draw(ctx, offset.add(this.position));
        });
    }
}