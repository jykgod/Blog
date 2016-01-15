function Button(){
    this.mChanged = true;
    this.mVisible = true;
    this.mPointerOn = false;
    this.mTransparent = false;
    this.mLevel = 0;
    this.mCanvas;
    this.x = 0;
    this.y = 0;
    this.w = 50;
    this.h = 50;
    this.text = "button";
    this.color = "#FFFFFF";
    this.textColor = "#000000";
    this.shadow_margins = 5;
    this.showShadow = true;
    this.isPressDown = false;
    this.image = null;
    this.alpha = 0.7;
}
Button.prototype = new BaseObject();
Button.prototype.draw = function(){
    var ctx=this.getCanvas().canvas.getContext("2d");
    if(this.mTransparent) ctx.alpha= this.alpha;
    /*-----------------------clear the rect---------------------------*/
      if (this.showShadow) {
           if(this.isPressDown == false){
               ctx.clearRect(this.x, this.y, this.w, this.h);
               ctx.clearRect(this.x + this.shadow_margins, this.y + this.h, this.w, this.shadow_margins);
               ctx.clearRect(this.x + this.w, this.y + this.shadow_margins, this.shadow_margins, this.h - this.shadow_margins);
           }
           else
               ctx.clearRect(this.x + this.shadow_margins, this.y + this.shadow_margins, this.w, this.h);
      }
      else
           ctx.clearRect(this.x, this.y, this.w, this.h);
    /*----------------------draw the shadow--------------------------*/
    if(this.showShadow && !this.isPressDown) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x + this.shadow_margins, this.y + this.shadow_margins, this.w, this.h);
    }
    /*----------------------draw the button--------------------------*/
    if(this.isImageBackGround == false){
        ctx.fillStyle = this.color;
        if( !this.isPressDown )
            ctx.fillRect(this.x,this.y,this.w,this.h);
        else
            ctx.fillRect(this.x+ this.shadow_margins,this.y+ this.shadow_margins, this.w,this.h);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.textColor;
        if( !this.isPressDown )
             ctx.fillText(this.text,this.x+this.w/2,this.y+this.h/2);
        else
             ctx.fillText(this.text,this.x+this.w/2+this.shadow_margins/2,this.y+this.h/2+ this.shadow_margins/2);
    }else{
       this.drawImage();
    }
    this.setChange(false);
}
Button.prototype.clickResponse = function(){

}
Button.prototype.onClick = function(x,y){
}
Button.prototype.onMouseDown = function(x,y){
    if(this.mPointerOn) {
        var ctx=this.getCanvas().canvas.getContext("2d");
        ctx.clearRect(this.x, this.y, this.w, this.h);
        this.isPressDown = true;
    }
    this.setChange(true);
}
Button.prototype.onMouseUp = function(x,y) {
    if (this.isPressDown) {
        if(this.mPointerOn) this.clickResponse();
        this.isPressDown = false;
        this.setChange(true);
    }
}