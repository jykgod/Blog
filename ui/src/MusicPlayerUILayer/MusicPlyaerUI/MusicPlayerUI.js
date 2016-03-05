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

    this.addMusic = function( title , lyric )
    {
        this.MusicList.add(new Music(title,lyric,'ui/asset/music/' + title + '.mp3','ui/asset/texture/' + title + '.png'));
    }
    this.ChangeToMusicWithID = function( id )
    {
        var audio = this.audio;
        var picture = this.Picture;
        this.MusicList.Ergodic(null , function(_null,now)
        {
            if(id == now.id)
            {
                audio.src = now.MusicUrl;
                picture.src = now.PictureUrl;
                picture.loadTexture();
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
}

MusicPlayerUI.prototype.start = function () {
    UIBase.prototype.start.call(this);
    var temp = this;
    this.SongList = new DragPanel();
    this.SongList.create(this.mCanvas);

    this.Picture = new Texture();
    this.Picture.create(this.mCanvas,"");

    this.PlayBtn = new UIButton();
    this.PlayBtn.createWithTexture(this.mCanvas, "url");

    this.backBtn = new UIButton();
    this.backBtn.createWithColorRect(this.mCanvas,"#FFCC00","Back","bold 14px ËÎÌו");
    this.backBtn.setShadowMargin(5);
    this.backBtn.label.mColor = "#333333";
    this.backBtn.colorRect.mAlpha = 0.8;
    this.backBtn.setSize(100,50);
    this.backBtn.setPosition(200,0);
    this.backBtn.onClick = function()
    {
        temp.setVisible(false);
    }

    this.LyricLabel = new Label();
    this.LyricLabel.create(this.mCanvas, "", "14px ËÎÌו");

    this.Background = new Texture();
    this.Background.create(this.mCanvas,"url");

    this.MusicList = new List(null);

    this.audio = new Audio();
    var messageHelper = new MessageHelper();
    messageHelper.postMessageToServer("/getDocumentListByAuthor", MG_TYPE.MSG_RQL_GET_DOCUMENT_LIST, {
        author: encodeURIComponent("jykMusic"),
        page: "1"
    });

    this.baseNode.addComponent(this.Picture);
    this.baseNode.addComponent(this.Background);
    this.baseNode.addComponent(this.SongList);
    this.baseNode.addComponent(this.backBtn);
}

MusicPlayerUI.prototype.setVisible = function(show)
{
    UIBase.prototype.setVisible.call(this,show);
    this.mCanvas.setVisible(show);
}