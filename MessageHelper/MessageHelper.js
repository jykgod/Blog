/**
 * Created by Administrator on 2016/2/4.
 */
function MessageHelper()
{
    if ( this.Instance == null )
    {
        this.Instance = this;
    }
    return this.Instance;
}
MessageHelper.prototype.Instance = null;
MessageHelper.prototype.postMessageToServer = function (url, name, header, value,username,password) {
    $.ajax({
        cache: false,
        async: false,
        ContentType: "application/x-www-form-urlencoded; charset=utf-8",
        //url: url,
        url: "127.0.0.1:10200",
        type: "POST",
        traditional: true,
        data: value,
        username: username,
        password: password,
        error: function () {
            console.log("Error!MessageName:" + name + "Value:" + value);
        },
        success: function (data) {
            switch (name) {
                case "MSG_RQL_LOGIN":
                    this.msg_rlt_login(data);
                    break;
                case "MSG_RQL_REGISTER":
                    this.msg_rlt_register(data);
                    break;
                case "MSG_RQL_SET_MOTTO":
                    this.msg_rlt_set_motto(data);
                    break;
                case "MSG_RQL_GET_MOTTO":
                    this.msg_rlt_get_motto(data);
                    break;
                case "MSG_RQL_MARK":
                    this.msg_rlt_mark(data);
                    break;
                case "MSG_RQL_CANCEL_MARK":
                    this.msg_rlt_cancel_mark(data);
                    break;
                case "MSG_RQL_MARKED":
                    this.msg_rlt_marked(data);
                    break;
                case "MSG_RQL_MARK_LIST":
                    this.msg_rlt_mark_list(data);
                    break;
                case "MSG_RQL_ADD_DOCUMENT":
                    this.msg_rlt_add_document(data);
                    break;
                case "MSG_RQL_GET_DOCUMENT":
                    this.msg_rlt_get_document(data);
                    break;
                case "MSG_RQL_GET_DOCUMENT_LIST":
                    this.msg_rlt_get_document_list(data);
                    break;
                case "MSG_RQL_GET_DOCUMENT_LIST_BY_TYPE":
                    this.msg_rlt_get_document_list_by_type(data);
                    break;
                case "MSG_RQL_GET_DOCUMENT_LIST_SIZE":
                    this.msg_rlt_get_document_list_size(data);
                    break;
                case "MSG_RQL_GET_DOCUMENT_LIST_BY_TYPE_SIZE":
                    this.msg_rlt_get_document_list_by_type_size(data);
                    break;
                case "MSG_RQL_ADD_DOCUMENT_READER":
                    this.msg_rlt_add_document_reader(data);
                    break;
                case "MSG_RQL_REPLAY_ONE_DOCUMENT":
                    this.msg_rlt_replay_one_document(data);
                    break;
                case "MSG_RQL_GET_MESSAGE_LIST":
                    this.msg_rlt_get_message_list(data);
                    break;
                case "MSG_RQL_GET_MESSAGE":
                    this.msg_rlt_get_message(data);
                    break;
                case "MSG_RQL_MARK_MESSAGE_AS_READ":
                    this.msg_rlt_mark_message_as_read(data);
                    break;
                case "MSG_RQL_SEND_MESSAGE":
                    this.msg_rlt_send_message(data);
                    break;
                case "MSG_RQL_READ_ALL_MESSAGE":
                    this.msg_rlt_read_all_message(data);
                    break;
                case "MSG_RQL_REMOVE_MESSAGE":
                    this.msg_rlt_remove_message(data);
                    break;
                case "MSG_RQL_REMOVE_ALL_MESSAGE":
                    this.msg_rlt_remove_all_message(data);
                    break;
                case "MSG_RQL_CHECK_UPLOAD_IMAGE_ACCESS":
                    this.msg_rlt_check_upload_image_access(data);
                    break;
                case "MSG_RQL_UPLOAD_IMAGE":
                    this.msg_rlt_upload_image(data);
                    break;
                case "MSG_RQL_GET_IMAGE":
                    this.msg_rlt_get_image(data);
                    break;
            }
        }
    });
}
MessageHelper.prototype.msg_rlt_login = function (data) {

}
MessageHelper.prototype.msg_rlt_register = function (data) {
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
