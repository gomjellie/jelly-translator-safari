var tar_lang = "ko";
//safari.extension.settings.tar_lang = "ko";

var handleMessage = function(event) {
    if (event.name == 'load') {
        var ret = safari.extension.settings.tar_lang;
        event.target.page.dispatchMessage("get_lang", ret);
    } else if (event.name == 'save') {
        safari.extension.settings.tar_lang = event.message;
    } else if (event.name == 'save_page') {
        safari.extension.settings.page_translate = event.message;
    } else if (event.name == 'save_selection') {
        safari.extension.settings.selection_translate = event.message;
    } else if (event.name == 'load-settings') {
        var mySettings = {
            tar_lang: safari.extension.settings.tar_lang,
            page: safari.extension.settings.page_translate,
            selection: safari.extension.settings.selection_translate
        };
        event.target.page.dispatchMessage("get_settings", mySettings);
    }
}

safari.application.addEventListener("message", handleMessage, false);