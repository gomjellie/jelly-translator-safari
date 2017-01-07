var isCommands = function (cmd) {
    if (cmd == 'help' ||
        cmd == 'option' ||
        cmd == "who made this?" ||
        cmd == "reset" ||
        cmd == "donate" ||
        cmd == "manual" ||
        cmd.includes(">>")) {

        return true;
    }
    return false;
}

var handleCommand = function (cmd) {
    if (cmd == 'help') {
        document.querySelector('#result').innerText = "command list:\n[help, option, who made this?, reset, donate]";
        return true;
    } else if (cmd == 'option') {
        openNewTab(safari.extension.baseURI + 'option.html');
    } else if (cmd == 'who made this?') {
        openNewTab("https://gomjellie.github.io");
    } else if (cmd == "reset") {
        tar_lang = 'ko';
        document.querySelector('#result').innerText = "tar_lang: ko";
    } else if (cmd == "donate") {
        document.querySelector('#result').innerText = "개발자에게 커피한잔의 여유를....\n우리은행 1002-887-373373 오인규";
    } else if (cmd == "manual") {
        openNewTab("https://gomjellie.github.io/jelly-translator");
    } else if (cmd.includes(">>")){
    	tar_lang = cmd.split(">>")[1].replace(/ /g, "");
    	document.querySelector('#result').innerText = "tar_lang = " + tar_lang;
    }
}

//팝업 페이지의 #src 입력된 값이 변경 되었을때
if (document.querySelector("#usr_input")) {
    document.querySelector('#usr_input').addEventListener('input', function() {
        var src = document.querySelector('#usr_input').value;
        if (isCommands(src)) {
            handleCommand(src);
        } else {
        	translate(src);
        }
        //document.querySelector('#result').innerText = //"command list:\n[help, option, who made this?, reset, donate]";
    });
}

var openNewTab = function (url) {
    var newTab = safari.application.activeBrowserWindow.openTab(); // Open a new tab
    newTab.url = url;
}