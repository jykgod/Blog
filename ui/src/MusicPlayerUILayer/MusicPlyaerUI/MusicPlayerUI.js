/**
 * Created by jiangyuke on 2016/2/24.
 */
function MusicPlayerUI(manager, canvas) {
    UIBase.call(this, manager, canvas, "MusicPlayerUI");
    this.mMusicPanel = null;
    this.mPicture = null;
    this.mPlayBtn = null;
    this.mLyricLabel = null;
    this.mBackground = null;
    this.mAudio = null;
    this.mBackBtn = null;
    this.mPlayed = false;
    this.mMusicList = null;

    //播放序列
    this.mPlayList = null;
    this.mNowPlayedMusicListIndex = -1;
    this.mNotPlayNext = false;

    this.addMusic = function( id , title )
    {
        var music = new Music(id,title ,'ui/asset/music/' + title + '.mp3','ui/asset/texture/' + title + '.png');
        this.mMusicList.add( music );
        var playedMusicListIndex = this.mMusicList.count - 1;

        var temp = this;
        var btn = new UIButton();
        btn = new UIButton();
        this.mPlayList.push( playedMusicListIndex );

        //var str = title;
        //if(str.length > 10) str = str.substr(0,10) + "...";
        btn.createWithColorRect(this.mCanvas,"#dddddd",title,"bold 14px 宋体");
        btn.setShadowMargin(5);
        btn.label.mColor = "#333333";
        btn.colorRect.mAlpha = 0.8;
        btn.setSize(250,50);
        btn.setPosition(0,0);
        btn.onClick = function()
        {
            var messageHelper = new MessageHelper();
            messageHelper.postMessageToServer("/getDocument", MG_TYPE.MSG_RQL_GET_DOCUMENT, {id: music.ID});
            temp.mPlayed = true;
        }
        this.mMusicPanel.addComponent(btn);
    }
    this.ChangeToMusicWithTitle = function( title , lyric )
    {
        var audio = this.mAudio;
        console.log("change to music with title:"+title.toString());
        console.log("music lyric:"+lyric.toString());
        var temp = this;
        var playedMusicListIndex = 0;
        this.mMusicList.Ergodic(null , function(_null,now)
        {
            if(title == now.Title)
            {
                if(temp.mNowPlayedMusicListIndex == playedMusicListIndex)
                {
                    return false;
                }
                console.log("find the music");
                audio.src = now.MusicUrl;
                temp.mLyricLabel.mText = lyric;
                temp.mNowPlayedMusicListIndex = playedMusicListIndex;
                var uiManager = UIManager.prototype.getInstance();
                var bgUI = uiManager.getUIByName("BackGroundUI");
                bgUI.setTexture( now.PictureUrl );
                return false;
            }
            playedMusicListIndex ++;
        });
    }
    this.playMusic = function()
    {
        this.mPlayBtn.label.mText = "Pause";
        this.mAudio.play();
    }
    this.pauseMusic = function()
    {
        this.mPlayBtn.label.mText = "Play";
        this.mAudio.pause();
        this.mNowPlayedMusicListIndex = -1;
    }
}

for (var i in UIBase.prototype) {
    MusicPlayerUI.prototype[i] = UIBase.prototype[i];
}

MusicPlayerUI.prototype.onResize = function()
{
    this.mCanvas.setPosition(0,0,window.innerWidth,window.innerHeight,100);
    this.mBackground.setSize(window.innerWidth,window.innerHeight);
    this.mPicture.setSize(window.innerWidth ,window.innerHeight - 180);
    this.mLyricLabel.setSize(window.innerWidth - 50,window.innerHeight - 200);
    this.mMusicPanel.dragMaxRightFixX = window.innerWidth;
}

MusicPlayerUI.prototype.start = function () {
    UIBase.prototype.start.call(this);
    var temp = this;
    this.mMusicPanel = new DragPanel();
    this.mMusicPanel.create(this.mCanvas);
    this.mMusicPanel.setSize(1000000,50);
    this.mMusicPanel.mAxisXMove = true;
    this.mMusicPanel.dragMaxRightFixX = window.innerWidth;
    this.mMusicPanel.offsetX = 10;

    var SongListNode = new BaseObject();
    SongListNode.create(this.mCanvas);
    SongListNode.addComponent(this.mMusicPanel);
    SongListNode.setPosition(0,100);

    this.mPicture = new ColorRect();
    this.mPicture.create(this.mCanvas,"#eeeeee");
    this.mPicture.setPosition(0,180);
    this.mPicture.setSize(window.innerWidth,window.innerHeight - 180);
    this.mPicture.mAlpha = 0.8;

    this.mPlayBtn = new UIButton();
    this.mPlayBtn.createWithColorRect(this.mCanvas,"#FFCC00","Play","bold 14px 宋体");
    this.mPlayBtn.setShadowMargin(5);
    this.mPlayBtn.label.mColor = "#333333";
    this.mPlayBtn.colorRect.mAlpha = 0.8;
    this.mPlayBtn.setSize(100,50);
    this.mPlayBtn.setPosition(300,0);
    this.mPlayBtn.onClick = function()
    {
        temp.mPlayed = !temp.mPlayed;
        if(temp.mPlayed == false)
        {
            temp.pauseMusic();
        }else
        {
            temp.playMusic();
        }
    }

    this.mBackBtn = new UIButton();
    this.mBackBtn.createWithColorRect(this.mCanvas,"#FFCC00","Back","bold 14px 宋体");
    this.mBackBtn.setShadowMargin(5);
    this.mBackBtn.label.mColor = "#333333";
    this.mBackBtn.colorRect.mAlpha = 0.8;
    this.mBackBtn.setSize(100,50);
    this.mBackBtn.setPosition(0,0);
    this.mBackBtn.onClick = function()
    {
        temp.setVisible(false);
    }

    this.mLyricLabel = new MarkDownFormatLabel();
    this.mLyricLabel.create(this.mCanvas, "");
    this.mLyricLabel.setLevel(20);
    this.mLyricLabel.setPosition( 50 , 200 );
    this.mLyricLabel.setSize(window.innerWidth -50 ,window.innerHeight - 200);

    this.mBackground = new ColorRect();
    this.mBackground.create(this.mCanvas,"#000000");
    this.mBackground.mAlpha = 0.8;
    this.mBackground.setSize(window.innerWidth,window.innerHeight);
    this.mBackground.setLevel(-100);

    this.mMusicList = new List(null);

    this.mAudio = new Audio();
    var messageHelper = new MessageHelper();
    messageHelper.postMessageToServer("/getDocumentListByAuthor", MG_TYPE.MSG_RQL_GET_DOCUMENT_LIST, {
        author: encodeURIComponent("jykMusic"),
        page: "1"
    });

    this.baseNode.addComponent(this.mPicture);
    this.baseNode.addComponent(this.mBackground);
    this.baseNode.addComponent(SongListNode);
    this.baseNode.addComponent(this.mBackBtn);

    this.mPlayList = new Array();
}

MusicPlayerUI.prototype.update = function()
{
    if(this.mPlayed == true && this.mAudio.ended)
    {
        if(this.mNotPlayNext == true)
        {
            var index = 0;
            for(var i = 0;i < this.mPlayList.length; i++)
            {
                if (this.mPlayList[i] == this.mNowPlayedMusicListIndex)
                {
                    index = i;
                    break;
                }
            }
            index = this.mPlayList[(index + 1) % (this.mPlayList.length)];
            var music =this.mMusicList.getByIndex(index);
            //alert("len:"+this.mPlayList.length+"index:"+index+"id:"+music.ID);
            var messageHelper = new MessageHelper();
            messageHelper.postMessageToServer("/getDocument", MG_TYPE.MSG_RQL_GET_DOCUMENT, {id: music.ID});
            this.mNotPlayNext == false;
        }else
        {
            this.playMusic();
        }
    }else
    {
        this.mNotPlayNext = true;
    }
    if(this.mPlayed == true && this.mAudio.paused == true)
    {
        this.playMusic();
    }
    if(this.mPlayed == false && this.mAudio.paused == false)
    {
        this.pauseMusic();
    }
    this.mMusicPanel.updatePanelPosition();
}

MusicPlayerUI.prototype.setVisible = function(show)
{
    UIBase.prototype.setVisible.call(this,show);
    this.mCanvas.setVisible(show);
}