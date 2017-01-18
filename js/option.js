//$('#sel').niceSelect();

jQuery(document).ready(function($) {
    fetch_apply_settings();
});

$("#cmn-toggle-selection-translate").change(function() {
    if ($(this).is(':checked')) {
        set_page(true);
    } else {
        set_page(false);
    }
});

$("#cmn-toggle-page-translate").change(function() {
    if ($(this).is(':checked')) {
        set_selection(true);
    } else {
        set_selection(false);
    }
});

$("#saveBtn").click(function() {
    alert("saveBtn clicked");
});

$("#resetBtn").click(function() {
    alert("resetBtn clicked");
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
        setLang(lang_selected);
        //alert("select changed " + lang_selected);
        //safari.extension.settings.tar_lang = lang_selected;
    }
});