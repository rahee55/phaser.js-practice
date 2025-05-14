import { Scene } from "phaser";

class mainScene extends Scene{
    constructor(){
        super({
            key: "mainScene"
        });

        let player = null;
    }
    preload(){
        this.load.image("u1" , "/game-boy.png");
        this.load.image("u2", "/game-boy2.png");
        this.load.spritesheet("ninja", "/2d-game-frame.png", {
            frameWidth:648/5,
            frameHeight:385/2
        })
        // this.load.spritesheet("boys", "/2d-game-frame2.png", {
        //     frameWidth:591,
        //     frameHeight:422
        // })
    }
    create(){
        // console.log("Create");

        // let user = this.add.rectangle(200,200,350,150,"0x000000",1);
        // user.isStroked = true;
        // user.strokeColor = "0xffffff",
        // user.lineWidth = 3

        // let user = this.add.graphics({
        //     lineStyle:{
        //         width: 3,
        //         color: 0xfffff,
        //         alpha: 1
        //     },
        //     fillStyle:{
        //         color: 0x0dddddd,
        //         alpha:1
        //     }
        // });
        // user.line
        // user.fillRoundedRect(10,10, 300, 200);
        // user.strokeRoundedRect(10,10, 300, 200);
        // user.fillCircle(100,100, 100, 100);

        // user.fillTriangle(100,200,300,200,400,600);
        // user.strokeTriangle(200,200,300,100,400,600);

        // user.moveTo(300,350);
        // user.lineTo(550,550);
        // user.lineTo(400,550);
        // user.closePath()
        // user.fillPath();
        // user.strokePath();

        // setInterval( () => {
        //     for (let i= 0; i< 100; i++){
        //         user.x += 0.2
        //     }
        // }, 1000);
        this.player = this.add.image(250,150,"u1");
        this.player.setScale(0.3);
        this.player.depth=3;

        let player2 = this.add.image(450, 150, "u2");
        player2.setScale(0.3);
        player2.depth=2;
        player2.setFlipX(true);
        // player2.setTint(0xff0000);

        this.input.on("pointerdown", (e)=>{
            // this.add.circle(e.downX, e.downY, 10, 0xffffff)
        })
        this.input.keyboard.on("keyup", (e)=>{
            if(e.key === "ArrowLeft"){
                player2.x -= 10
            }
            if(e.key === "ArrowRight"){
                player2.x += 10
            }
            if(e.key === "ArrowRight"){
                this.player.x += 10
            }
        })
        this.add.tween({
            targets: [player2],
            scale: 0.2,
            duration: 3000,
            x: 5,
            repeat: -1,
            alpha: 0.6,
            yoyo: true,
            onYoyo:()=>{
                player2.setFlipX(false);
            },
            onRepeat: () => {
                player2.setFlipX(true)
            }
        });


        // let boy = this.add.sprite(300,350, "boys")

        let Nhathori = this.add.sprite(200, 460, "ninja");
        this.anims.create({
            key: "ninja",
            frames: this.anims.generateFrameNumbers("ninja",{
                start: 0,
                end: 9
            }),
            frameRate: 15,
            repeat: -1
        })
        Nhathori.play("ninja")
    }
    update(){
        // console.log("Update");
    }
}

export {mainScene}