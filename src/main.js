//import { createContext } from "vm";
import { Engine } from "./engine/Engine";
import { Player } from "./Player";
import { GameObject } from "./engine/GameObject";
import { Vec } from "./engine/Math";

let engine = new Engine();
engine.start();

let root = new GameObject();

// engine.canvas.onclick = function(evt) {
//     let tempPlayer = new Player(engine.canvas);
//     tempPlayer.x = evt.clientX;
//     tempPlayer.y = evt.clientY;
//     root.addChild(tempPlayer);
// }

let player = new Player(engine.canvas)
player.position.y = 100;
root.addChild(player);

let player2 = new Player(engine.canvas);
player.addChild(player2);

console.log(root);


engine.userUpdate = function(dt) {
    root.update(dt);
}

// let offset = new Vec();
engine.userDraw = function(ctx) {
    root.draw(ctx, new Vec());
}