var tar_lang;
var settings = { "aaa": "bbb" };
var setLang = function(tar_lang) {
    safari.self.tab.dispatchMessage("save", tar_lang);
}

var set_page = function(isPageChecked) {
    safari.self.tab.dispatchMessage("save_page", isPageChecked);
}

var set_selection = function(isSelectionChecked) {
    safari.self.tab.dispatchMessage("save_selection", isSelectionChecked);
}

var fetch_apply_settings = function() {
    safari.self.tab.dispatchMessage("load-settings", "trash_value");
}

var fetch_lang = function() {
    safari.self.tab.dispatchMessage("load", 'trash_value');
}

var getSettings = function(event) {
    if (event.name === "get_lang") {
        tar_lang = event.message;
        return tar_lang;
    } else if (event.name === "get_settings") {
        settings = event.message;
        var isSelectionChecked = false;
        var isPageChecked = false;
        if (settings) {
            isSelectionChecked = settings.selection;
            isPageChecked = settings.page;
        }
        $('#cmn-toggle-selection-translate').prop('checked', isSelectionChecked);
        $('#cmn-toggle-page-translate').prop('checked', isPageChecked);
    }
}

safari.self.addEventListener("message", getSettings, false);

// setLang("ja");
// fetch_lang();