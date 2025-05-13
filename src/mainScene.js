import { Scene } from "phaser";

class mainScene extends Scene{
    constructor(){
        super({
            key: "mainScene"
        });
    }
    preload(){
        console.log("Preload");
    }
    create(){
        console.log("Create");

        // let user = this.add.rectangle(200,200,350,150,"0x000000",1);
        // user.isStroked = true;
        // user.strokeColor = "0xffffff",
        // user.lineWidth = 3

        let user = this.add.graphics({
            lineStyle:{
                width: 3,
                color: 0xfffff,
                alpha: 1
            },
            fillStyle:{
                color: 0x0dddddd,
                alpha:1
            }
        });
        user.line
        // user.fillRoundedRect(10,10, 300, 200);
        // user.strokeRoundedRect(10,10, 300, 200);
        // user.fillCircle(100,100, 100, 100);

        // user.fillTriangle(100,200,300,200,400,600);
        // user.strokeTriangle(200,200,300,100,400,600);

        user.moveTo(300,350);
        user.lineTo(550,550);
        user.lineTo(400,550);
        user.closePath()
        user.fillPath();
        user.strokePath();

        // setInterval( () => {
        //     for (let i= 0; i< 100; i++){
        //         user.x += 0.2
        //     }
        // }, 1000);
    }
    update(){
        console.log("Update");
    }
}

export {mainScene}