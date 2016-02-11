/**
 * Created by Administrator on 2016/2/4.
 */
//以下的单例模式写法也许存在一些问题，以后再做修改
function MessageHelper()
{
    if ( this.Instance == null )
    {
        this.Instance = this;
    }
    return this.Instance;
}
MessageHelper.prototype.Instance = null;
MessageHelper.prototype.postMessageToServer = function (url, name, value,username,password) {
    var temp = this;
    $.ajax({
        dataType: 'json',
        url: url,
        type: "POST",
        data: value,
        beforeSend:function(XML){
            if(username != undefined) {
                XML.setRequestHeader('username', username);
                XML.setRequestHeader('password', password);
            }
        },
        error: function (data) {
            console.log("Error!MessageName:" + name + ";Value:" + value+";return:"+data.return);
        },
        success: function (data) {
            switch (name) {
                case "MSG_RQL_LOGIN":
                    temp.msg_rlt_login(data,username,password);
                    break;
                case "MSG_RQL_REGISTER":
                    temp.msg_rlt_register(data);
                    break;
                case "MSG_RQL_SET_MOTTO":
                    temp.msg_rlt_set_motto(data);
                    break;
                case "MSG_RQL_GET_MOTTO":
                    temp.msg_rlt_get_motto(data);
                    break;
                case "MSG_RQL_MARK":
                    temp.msg_rlt_mark(data);
                    break;
                case "MSG_RQL_CANCEL_MARK":
                    temp.msg_rlt_cancel_mark(data);
                    break;
                case "MSG_RQL_MARKED":
                    temp.msg_rlt_marked(data);
                    break;
                case "MSG_RQL_MARK_LIST":
                    temp.msg_rlt_mark_list(data);
                    break;
                case "MSG_RQL_ADD_DOCUMENT":
                    temp.msg_rlt_add_document(data);
                    break;
                case "MSG_RQL_GET_DOCUMENT":
                    temp.msg_rlt_get_document(data);
                    break;
                case "MSG_RQL_GET_DOCUMENT_LIST":
                    temp.msg_rlt_get_document_list(data);
                    break;
                case "MSG_RQL_GET_DOCUMENT_LIST_BY_TYPE":
                    temp.msg_rlt_get_document_list_by_type(data);
                    break;
                case "MSG_RQL_GET_DOCUMENT_LIST_SIZE":
                    temp.msg_rlt_get_document_list_size(data);
                    break;
                case "MSG_RQL_GET_DOCUMENT_LIST_BY_TYPE_SIZE":
                    temp.msg_rlt_get_document_list_by_type_size(data);
                    break;
                case "MSG_RQL_ADD_DOCUMENT_READER":
                    temp.msg_rlt_add_document_reader(data);
                    break;
                case "MSG_RQL_REPLAY_ONE_DOCUMENT":
                    temp.msg_rlt_replay_one_document(data);
                    break;
                case "MSG_RQL_GET_MESSAGE_LIST":
                    temp.msg_rlt_get_message_list(data);
                    break;
                case "MSG_RQL_GET_MESSAGE":
                    temp.msg_rlt_get_message(data);
                    break;
                case "MSG_RQL_MARK_MESSAGE_AS_READ":
                    temp.msg_rlt_mark_message_as_read(data);
                    break;
                case "MSG_RQL_SEND_MESSAGE":
                    temp.msg_rlt_send_message(data);
                    break;
                case "MSG_RQL_READ_ALL_MESSAGE":
                    temp.msg_rlt_read_all_message(data);
                    break;
                case "MSG_RQL_REMOVE_MESSAGE":
                    temp.msg_rlt_remove_message(data);
                    break;
                case "MSG_RQL_REMOVE_ALL_MESSAGE":
                    temp.msg_rlt_remove_all_message(data);
                    break;
                case "MSG_RQL_CHECK_UPLOAD_IMAGE_ACCESS":
                    temp.msg_rlt_check_upload_image_access(data);
                    break;
                case "MSG_RQL_UPLOAD_IMAGE":
                    temp.msg_rlt_upload_image(data);
                    break;
                case "MSG_RQL_GET_IMAGE":
                    temp.msg_rlt_get_image(data);
                    break;
            }
        }
    });
}
MessageHelper.prototype.msg_rlt_login = function (data,username,password) {
    var logicHelper = LogicHelper.prototype.getInstance();
    if(data != null && data.return == 200) {
        logicHelper.setLocalUser(username,password);
        console.log("success:" + username+";pssword:"+password);
    }else
    {
        logicHelper.logout();
        alert("您输入的账号或者密码有误,\n请重新输入");
    }
}
MessageHelper.prototype.msg_rlt_register = function (data) {
    if(data != null && data.return == 200)
    {
        alert("注册成功!");
    }
    else
    {
        alert("注册失败!");
    }
    console.log("success" + data);
}
MessageHelper.prototype.msg_rlt_set_motto = function (data) {
}
MessageHelper.prototype.msg_rlt_get_motto = function (data) {
}
MessageHelper.prototype.msg_rlt_mark = function (data) {
}
MessageHelper.prototype.msg_rlt_cancel_mark = function (data) {
}
MessageHelper.prototype.msg_rlt_marked = function (data) {
}
MessageHelper.prototype.msg_rlt_mark_list = function (data) {
}
MessageHelper.prototype.msg_rlt_add_document = function (data) {
}
MessageHelper.prototype.msg_rlt_get_document = function (data) {
}
MessageHelper.prototype.msg_rlt_get_document_list = function (data) {
}
MessageHelper.prototype.msg_rlt_get_document_list_by_type = function (data) {
}
MessageHelper.prototype.msg_rlt_get_document_list_size = function (data) {
}
MessageHelper.prototype.msg_rlt_get_document_list_by_type_size = function (data) {
}
MessageHelper.prototype.msg_rlt_add_document_reader = function (data) {
}
MessageHelper.prototype.msg_rlt_replay_one_document = function (data) {
}
MessageHelper.prototype.msg_rlt_get_message_list = function (data) {
}
MessageHelper.prototype.msg_rlt_get_message = function (data) {
}
MessageHelper.prototype.msg_rlt_mark_message_as_read = function (data) {
}
MessageHelper.prototype.msg_rlt_send_message = function (data) {
}
MessageHelper.prototype.msg_rlt_read_all_message = function (data) {
}
MessageHelper.prototype.msg_rlt_remove_message = function (data) {
}
MessageHelper.prototype.msg_rlt_remove_all_message = function (data) {
}
MessageHelper.prototype.msg_rlt_check_upload_image_access = function (data) {
}
MessageHelper.prototype.msg_rlt_upload_image = function (data) {
}
MessageHelper.prototype.msg_rlt_get_image = function (data) {
}
