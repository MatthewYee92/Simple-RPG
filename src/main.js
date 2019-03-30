//import { createContext } from "vm";
import { Engine } from "./engine/Engine";
import { Imp } from "./engine/Imp";
import { GameObject } from "./engine/GameObject";
import { Vec } from "./engine/Math";

let engine = new Engine();
engine.start();

let imp = new Imp(engine.canvas)
imp.position = new Vec(25,25);
engine.rootNode.addChild(imp);

engine.userUpdate = function(dt) {
    
}

engine.userDraw = function(ctx) {

}