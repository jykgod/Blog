/**
 * Created by jiangyuke on 2016/2/24.
 */
function MusicPlayerUI(manager, canvas) {
    UIBase.prototype.call(this, manager, canvas);
    this.SongList = null;
    this.Picture = null;
    this.PlayBtn = null;
    this.LyricLabel = null
}

for (var i in UIBase.prototype) {
    MusicPlayerUI.prototype[i] = UIBase.prototype[i];
}

MusicPlayerUI.prototype.Start = function () {
    UIBase.prototype.Start.call(this);
}