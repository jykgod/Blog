function Canvas(canvas){
    this.canvas  = canvas;
    if(canvas == null) return ;
    var bbox = canvas.getBoundingClientRect();
    this.x = bbox.left * (canvas.width / bbox.width);
    this.y = bbox.top * (canvas.height / bbox.height);
    this.w = canvas.width;
    this.h = canvas.height;
}
