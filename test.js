//var marked = require('marked');
//marked.setOptions({
//    renderer: new marked.Renderer(),
//    gfm: true,
//    tables: true,
//    breaks: false,
//    pedantic: false,
//    sanitize: true,
//    smartLists: true,
//    smartypants: false
//});
//var canvas = new Canvas();
//canvas.createWithFatherNameAndPosition("fatherDiv",0,0,1000,1000,-1);
//var texture = new Texture();
//texture.create(canvas,"../asset/texture/test1.jpg",null);
//texture.loadTexture();
//texture.fixSizeAsTextureSize();
//texture.mShadowMargin = 5;
//var texture2 = new Texture();
//texture2.create(canvas,"../asset/texture/test2.jpg",null);
//texture2.loadTexture();
//texture2.fixSizeAsTextureSize();
//texture2.mAlpha = 0.3;
//texture2.setLevel(-1);
//var colorRect = new ColorRect();
//colorRect.create(canvas,"#ff0000");
//colorRect.setLevel(100);
//colorRect.setPosition(10,10);
//colorRect.setSize(100 , 30);
//colorRect.setVisible(false);
//var label = new Label();
//label.create(canvas, "123");
//label.setLevel(0);
//label.setPosition(20, 20);
//var htmlLabel = new HtmlFormatLabel();
//htmlLabel.setSize(1000, 100);
//htmlLabel.create(canvas, "<h1>haha</h1><h2>hehe</h2>>");
//htmlLabel.setLevel(99);


//
//var markDownText = new BlogText();
//markDownText.createWithFatherNameAndPosition('fatherDiv',200,0,1000,1000,10);
//markDownText.setText("```javascript\nfunction a(){\n\tvar i = 0;\n}\n```");
//markDownText.setVisible(true);

var uiManager = UIManager.prototype.getInstance();
uiManager.create();

function onResize()
{
    uiManager.onResize();
}

var bgCanvas = new Canvas();
bgCanvas.createWithFatherNameAndPosition("fatherDiv",0,0,window.innerWidth,window.innerHeight,-100);
var backGroundUI = new BackGroundUI(uiManager,bgCanvas);
var mainCanvas = new Canvas();
mainCanvas.createWithFatherNameAndPosition("fatherDiv",0,0,window.innerWidth,window.innerHeight,0);
mainCanvas.setUpdateDeltaTime(60);
var mainMenu = new MainMenuUI(uiManager,mainCanvas);
var div = document.getElementById("fatherDiv");