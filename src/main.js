//import { createContext } from "vm";
import { Engine } from "./engine/Engine";

let engine = new Engine();
engine.start();

engine.userDraw = function(ctx) {

    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    ctx.fillRect(
        Math.random() * engine.canvas.width, 
        Math.random() * engine.canvas.height,
        Math.random() * 64,
        Math.random() * 64)
}