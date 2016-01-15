var panelManager = new Object();
panelManager.panelArray = new Array();
panelManager.addPanel = function(panel){
    this.panelArray.push(panel);
}
panelManager.draw = function(){
    for (var i = 0 ; i < this.panelArray.length ; i ++){
        this.panelArray[i].draw();
    }
}