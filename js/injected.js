var tar_lang;

var setLang = function (tar_lang) {
    safari.self.tab.dispatchMessage("save", tar_lang);
}

var fetch_lang = function () {
    safari.self.tab.dispatchMessage("load", 'trash_value');
}

var getLang = function (event) {
    if (theMessageEvent.name === "get_lang") {
        tar_lang = event.message;
        alert(tar_lang);
        return tar_lang;
    }
}

safari.self.addEventListener("message", getLang, false);

// setLang("ja");
// fetch_lang();
