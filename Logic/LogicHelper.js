/**
 * Created by Administrator on 2016/2/6.
 */
function LogicHelper()
{
    if ( this.Instance == null )
    {
        this.Instance = this;
    }
    return this.Instance;
}

LogicHelper.prototype.Instance = null;

LogicHelper.prototype.localUser = null;

LogicHelper.prototype.setLocalUser = function(username,password)
{
    this.localUser = new UserObject(username,password);
}

LogicHelper.prototype.getIfLogin = function()
{
    return (this.localUser != null);
}

LogicHelper.prototype.logout = function()
{
    this.localUser = null;
}

LogicHelper.prototype.getLocalUser = function()
{
    return this.localUser;
}