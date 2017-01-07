safari.self.addEventListener('message', handleMessage, false);
safari.self.tab.dispatchMessage('getSetting', 'tar_lang');
function handleMessage(msg){
    if(msg.name === 'returnSetting'){
        var setting = msg.message;
    }
}

$(document).ready(function() {
    $('select').niceSelect();
});

$("#target").submit(function(event) {
    var lang_selected = $("input:first").val();
    if (lang_selected) {
        alert("" + lang_selected + " have saved as target language");
        safari.extension.settings.tar_lang = lang_selected;
    }
    event.preventDefault();
});

$("select").change(function() {
    var lang_selected = $(this).val();
    if (lang_selected) {
        alert("select changed " + lang_selected);
        safari.extension.settings.tar_lang = lang_selected;
    }
})
