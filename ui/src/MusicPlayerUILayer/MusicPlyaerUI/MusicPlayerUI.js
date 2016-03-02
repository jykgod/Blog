/**
 * Created by jiangyuke on 2016/2/24.
 */
function MusicPlayerUI(manager, canvas) {
    UIBase.prototype.call(this, manager, canvas, "MusicPlayerUI");
    this.SongList = null;
    this.Picture = null;
    this.PlayBtn = null;
    this.LyricLabel = null;
    this.MusicList = null;
    this.Background = null;
}

for (var i in UIBase.prototype) {
    MusicPlayerUI.prototype[i] = UIBase.prototype[i];
}

MusicPlayerUI.prototype.Start = function () {
    UIBase.prototype.Start.call(this);
    this.SongList = new DragPanel();
    this.SongList.create(this.mCanvas);

    this.Picture = new Texture();
    this.Picture.create(this.mCanvas, "url");

    this.PlayBtn = new UIButton();
    this.PlayBtn.createWithTexture(this.mCanvas, "url");

    this.LyricLabel = new Label();
    this.LyricLabel.create(this.mCanvas, "", "14px ËÎÌו");

    this.Background = new Texture();
    this.Background.create(this.mCanvas,"url");

    this.MusicList = new List(null);
    var messageHelper = new MessageHelper();
    messageHelper.postMessageToServer("/getDocumentListByAuthor", MG_TYPE.MSG_RQL_GET_DOCUMENT_LIST, {
        author: encodeURIComponent("jykMusic"),
        page: "1"
    });
}