class Platform{
    constructor(x, y, w, h, minVal1, minVal2, val2){
        this.collider = createSprite(x - minVal1, y, val2, h)
        this.collider.visible = false

        this.collider2 = createSprite(x, y - minVal2, w, val2)
        this.collider2.visible = false

        this.sprite = createSprite(x, y, w, h)
        this.sprite.visible = false

        tgroup.add(this.sprite)
        collidergroup.add(this.collider2)
        
    }
}