//var cvs = document.getElementById("bgCanvas");
//var cvs2 = document.getElementById("bgCanvas2");
//var obj = new BaseObject();
//obj.create(cvs);
//obj.x = 0;
//obj.y = 0;
//obj.w = 1750;
//obj.h = 900;
//obj.setLevel(1);
//obj.color = "#444444";
//obj.draw = function()
//{
//    var ctx=obj.getCanvas().canvas.getContext("2d");
//    ctx.fillStyle=obj.color;
//    ctx.fillRect(0,0,1600,900);
//    obj.setChange(false);
//};
//var panel = new Panel(cvs);
//panel.addObject(obj);
//var dragpanel = new DragPanel(cvs2);
//var button = new Button();
//button.setLevel(2);
//button.color = "#CC0000";
//dragpanel.addObject(button);
//button = new Button();
//button.setLevel(2);
//button.color = "#CC0000";
//dragpanel.addObject(button);
//button = new Button();
//button.setLevel(2);
//button.color = "#CC0000";
//button.text = "coc";
//dragpanel.addObject(button);
//button = new Button();
//button.setLevel(2);
//button.color = "#CC0000";
//dragpanel.addObject(button);
//button = new Button();
//button.setLevel(2);
//button.color = "#CC0000";
//dragpanel.addObject(button);
//button = new Button();
//button.setLevel(2);
//button.color = "#CC0000";
//dragpanel.addObject(button);
//dragpanel.setType(dragpanel.mVertical);
//panelManager.addPanel(panel);
//dragpanel.reSort(10);
//panelManager.addPanel(dragpanel);
//setInterval("panelManager.draw()",40);
//function SuperType()
//{
//    this.x = 5;
//}
//SuperType.prototype.create = function(x)
//{
//    this.x = x;
//}
//
//function SubType()
//{
//    SuperType.call(this);
//}
//for(var i in SuperType.prototype)
//{
//    SubType.prototype[i] = SuperType.prototype[i];
//}
//SubType.prototype.create = function()
//{
//    SuperType.prototype.create.call(this,10);
//}
//
//var sub = new SubType();
//sub.create();
//alert(sub.x);
