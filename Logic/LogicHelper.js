/**
 * Created by Administrator on 2016/2/6.
 */
function LogicHelper()
{
    this.localUser = new UserObject();
    this.localUserChangeEventList = new List(null);
    this.registerLocalUserChangeEvent = function(event)
    {
        this.localUserChangeEventList.add(event);
    }
    this.setLocalUser = function(username,password)
    {
        this.localUser.username = username;
        this.localUser.password = password;
        this.localUserDataChangeEvent();
    }
    this.setLocalUserMotto = function(motto)
    {
        this.localUser.motto = motto;
        this.localUserDataChangeEvent();
    }
    this.getIfLogin = function()
    {
        return (this.localUser != null);
    }
    this.logout = function()
    {
        this.localUser = null;
    }
    this.getLocalUser = function()
    {
        return this.localUser;
    }
    this.localUserDataChangeEvent = function()
    {
        this.localUserChangeEventList.Ergodic(null,function(_null,now){
            now();
        });

    }
}

LogicHelper.prototype.Instance = null;

LogicHelper.prototype.getInstance = function()
{
    if (this.Instance == null)
    {
        this.Instance = new LogicHelper();
    }
    return this.Instance;
}