import Phaser from "phaser";
import { mainScene } from "./mainScene.js"


const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 550,
    backgroundColor: 0x000000 ,
    scene: [mainScene]
}

export  {config};