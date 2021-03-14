class lvl1{
    constructor(){
        this.storylineBool = true
        this.storylinePart = 0

        this.w = displayWidth
        this.h = displayHeight

        this.touchGround = true

        this.p1 = new Platform(50, 600, 100, 30, 57, 7, 20)

        this.storyp1 = loadImage("Images/Speeches/Speech1.png")
        this.storyp2 = loadImage("Images/Speeches/Speech2.png")
        this.storyp3 = loadImage("Images/Speeches/Speech3.png")
        this.storyp4 = loadImage("Images/Speeches/Speech4.png")
        this.storyp5 = loadImage("Images/Speeches/Speech5.png")
        this.storyp6 = loadImage("Images/Speeches/Speech6.png")
        this.storyp7 = loadImage("Images/Speeches/Speech7.png")


        this.ground = createSprite(this.w * 0.5, this.h - this.h / 20, this.w, this.h / 10)
        this.ground.visible = false

        this.groundCollider = createSprite(this.w * 0.5, this.h - this.h / 20 - 3, this.w, this.h / 10)
        this.groundCollider.visible = false

        collidergroup.add(this.groundCollider)
        tgroup.add(this.ground)

        this.storylineBg = createSprite(this.w / 2, this.h / 2, this.w, this.h)
        this.storylineBg.visible = false

        this.storyline = createSprite(this.w / 2 - this.w / 15  , this.h / 4 + this.h / 25, this.w, this.h / 2)
        this.storyline.scale = 0.8

        this.continueStory = true
    }


    play(){
        image(bg, 0, 0, 2779, this.h)
        if(this.storylineBool){

            if(keyIsDown(32) && this.continueStory){
                this.storylinePart += 1
                this.continueStory = false
            }

            if(keyWentUp(32)){
                this.continueStory = true
            }
    
            if(this.storylinePart == 0){
                this.storyline.addImage(this.storyp1)
            }else if(this.storylinePart == 1){
                this.storyline.addImage(this.storyp2)
            }else if(this.storylinePart == 2){
                this.storyline.addImage(this.storyp3)
            }else if(this.storylinePart == 3){
                this.storyline.addImage(this.storyp4)
            }else if(this.storylinePart == 4){
                this.storyline.addImage(this.storyp5)
            }else if(this.storylinePart == 5){
                this.storyline.addImage(this.storyp6)
            }else if(this.storylinePart == 6){
                this.storyline.addImage(this.storyp7)
            }else if(this.storylinePart > 7){
                this.storyline.destroy()
                this.storylineBool = false
            }

        }else{
            if(collidergroup.isTouching(player)){
                this.touchGround = true
              }
    
              
             if(keyDown("LEFT_ARROW")){
               player.x -= 4
               player.changeAnimation("run", panimation)
               player.mirrorX(-1)
             }else if(keyDown("RIGHT_ARROW")){
               player.x += 4
                player.changeAnimation("run", panimation)
                player.mirrorX(1)
             }else if(keyDown("UP_ARROW") && this.touchGround && player.isTouching(tgroup) == false){
               player.velocityY = -12
               this.touchGround = false
               player.changeAnimation("jump", pjump)
             }else{
               player.changeAnimation("idle", pidle)
             }
            
             if(this.touchGround != true){
               player.changeAnimation("jump", pjump)
             }
            
             player.velocityY = player.velocityY + 0.8
            
        }
    }

    storylineF = function(){
        

    }
}