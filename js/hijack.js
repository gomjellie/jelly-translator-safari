var tar_lang = "ko";
safari.extension.settings.tar_lang = "ko";
var handleMessage = function(event) {
    if (event.name == 'load') {
        var ret = safari.extension.settings.tar_lang;
        event.target.page.dispatchMessage("get_lang", ret);
    } else if (event.name == 'save') {
        safari.extension.settings.tar_lang = event.message;
        alert("hijacked " + event.message);
    }
}

safari.application.addEventListener("message", handleMessage, false);