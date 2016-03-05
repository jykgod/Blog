/**
 * Created by jiangyuke on 2016/2/29.
 */
function Music(title, lyric, musicUrl, pictureUrl) {
    this.ID = Music.prototype.top ++;
    this.Title = title;
    this.Lyric = lyric;
    this.MusicUrl = musicUrl;
    this.PictureUrl = pictureUrl;
}

Music.prototype.top = 0;