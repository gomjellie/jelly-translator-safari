safari.application.addEventListener("message", messageHandler, false);
safari.extension.settings.addEventListener("change", changeHandler, false);

function messageHandler(e) {
    if (e.name === "getSettings") {
        e.target.page.dispatchMessage("setSettings", {
        	tar_lang: safari.extension.settings.getItem('tar_lang')
        });
    }
}

function changeHandler(e) {
    console.log("settingsChanged: " + e.name + "; " + e.target);
}