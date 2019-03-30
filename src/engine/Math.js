export class Vec {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        if (other instanceof Vec) {
            this.x += other.x;
            this.y += other.y;
        }

        return this;
    }
}