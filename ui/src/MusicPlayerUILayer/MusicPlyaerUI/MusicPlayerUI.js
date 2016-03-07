/**
 * Created by jiangyuke on 2016/2/24.
 */
function MusicPlayerUI(manager, canvas) {
    UIBase.call(this, manager, canvas, "MusicPlayerUI");
    this.SongList = null;
    this.Picture = null;
    this.PlayBtn = null;
    this.LyricLabel = null;
    this.MusicDataList = null;
    this.Background = null;
    this.audio = null;
    this.backBtn = null;

    this.addMusic = function( id , title )
    {
        var music = new Music(id,title ,'ui/asset/music/' + title + '.mp3','ui/asset/texture/' + title + '.png');
        this.MusicList.add( music );
        var temp = this;
        var btn = new UIButton();
        btn = new UIButton();
        //var str = title;
        //if(str.length > 10) str = str.substr(0,10) + "...";
        btn.createWithColorRect(this.mCanvas,"#dddddd",title,"bold 14px ËÎÌו");
        btn.setShadowMargin(5);
        btn.label.mColor = "#333333";
        btn.colorRect.mAlpha = 0.8;
        btn.setSize(250,50);
        btn.setPosition(0,0);
        btn.onClick = function()
        {
            var messageHelper = new MessageHelper();
            messageHelper.postMessageToServer("/getDocument", MG_TYPE.MSG_RQL_GET_DOCUMENT, {id: music.ID});
        }
        this.SongList.addComponent(btn);
    }
    this.ChangeToMusicWithTitle = function( title , lyric )
    {
        var audio = this.audio;
        var picture = this.Picture;
        console.log("change to music with title:"+title.toString());
        console.log("music lyric:"+lyric.toString());
        var temp = this;
        this.MusicList.Ergodic(null , function(_null,now)
        {
            if(title == now.Title)
            {
                console.log("find the music");
                audio.src = now.MusicUrl;
                picture.src = now.PictureUrl;
                temp.LyricLabel.mText = lyric;
                picture.loadTexture();
                var uiManager = UIManager.prototype.getInstance();
                var bgUI = uiManager.getUIByName("BackGroundUI");
                bgUI.setTexture( now.PictureUrl );
                return false;
            }
        });
    }
}

for (var i in UIBase.prototype) {
    MusicPlayerUI.prototype[i] = UIBase.prototype[i];
}

MusicPlayerUI.prototype.onResize = function()
{
    this.mCanvas.setPosition(0,0,window.innerWidth,window.innerHeight,100);
    this.Background.setSize(window.innerWidth,window.innerHeight);
}

MusicPlayerUI.prototype.start = function () {
    UIBase.prototype.start.call(this);
    var temp = this;
    this.SongList = new DragPanel();
    this.SongList.create(this.mCanvas);

    var SongListNode = new BaseObject();
    SongListNode.create(this.mCanvas);
    SongListNode.addComponent(this.SongList);
    SongListNode.setPosition(0,100);

    this.Picture = new Texture();
    this.Picture.create(this.mCanvas,"");
    this.Picture.setPosition(260,100);
    this.Picture.setSize(window.innerWidth - 260,window.innerHeight - 100);

    //this.PlayBtn = new UIButton();
    //this.PlayBtn.createWithTexture(this.mCanvas, "url");

    this.backBtn = new UIButton();
    this.backBtn.createWithColorRect(this.mCanvas,"#FFCC00","Back","bold 14px ËÎÌו");
    this.backBtn.setShadowMargin(5);
    this.backBtn.label.mColor = "#333333";
    this.backBtn.colorRect.mAlpha = 0.8;
    this.backBtn.setSize(100,50);
    this.backBtn.setPosition(0,0);
    this.backBtn.onClick = function()
    {
        temp.setVisible(false);
    }

    this.LyricLabel = new MarkDownFormatLabel();
    this.LyricLabel.create(this.mCanvas, "");
    this.LyricLabel.setLevel(20);
    this.LyricLabel.setPosition( 260 , 110 );
    this.LyricLabel.setSize(window.innerWidth - 260,window.innerHeight - 100);

    this.Background = new ColorRect();
    this.Background.create(this.mCanvas,"#000000");
    this.Background.mAlpha = 0.8;
    this.Background.setSize(window.innerWidth,window.innerHeight);
    this.Background.setLevel(-100);

    this.MusicList = new List(null);

    this.audio = new Audio();
    var messageHelper = new MessageHelper();
    messageHelper.postMessageToServer("/getDocumentListByAuthor", MG_TYPE.MSG_RQL_GET_DOCUMENT_LIST, {
        author: encodeURIComponent("jykMusic"),
        page: "1"
    });

    this.baseNode.addComponent(this.Picture);
    this.baseNode.addComponent(this.Background);
    this.baseNode.addComponent(SongListNode);
    this.baseNode.addComponent(this.backBtn);
}

MusicPlayerUI.prototype.setVisible = function(show)
{
    UIBase.prototype.setVisible.call(this,show);
    this.mCanvas.setVisible(show);
}