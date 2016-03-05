/**
 * Created by jiangyuke on 2016/2/24.
 */
function MusicPlayerUI(manager, canvas) {
    UIBase.prototype.call(this, manager, canvas, "MusicPlayerUI");
    this.SongList = null;
    this.Picture = null;
    this.PlayBtn = null;
    this.LyricLabel = null;
    this.MusicDataList = null;
    this.Background = null;
    this.audio = null;

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

MusicPlayerUI.prototype.Start = function () {
    UIBase.prototype.Start.call(this);
    this.SongList = new DragPanel();
    this.SongList.create(this.mCanvas);

    this.Picture = new Texture();
    this.Picture.create(this.mCanvas,"");

    this.PlayBtn = new UIButton();
    this.PlayBtn.createWithTexture(this.mCanvas, "url");

    this.LyricLabel = new Label();
    this.LyricLabel.create(this.mCanvas, "", "14px ËÎÌו");

    this.Background = new Texture();
    this.Background.create(this.mCanvas,"url");
    this.Background.setRect(0, 0, 100, 100);

    this.MusicList = new List(null);

    this.audio = new Audio();
    var messageHelper = new MessageHelper();
    messageHelper.postMessageToServer("/getDocumentListByAuthor", MG_TYPE.MSG_RQL_GET_DOCUMENT_LIST, {
        author: encodeURIComponent("jykMusic"),
        page: "1"
    });
}