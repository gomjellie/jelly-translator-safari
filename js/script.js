
//팝업 페이지의 #src 입력된 값이 변경 되었을때
if (document.querySelector("#src")) {
    document.querySelector('#src').addEventListener('input', function() {
        var src = document.querySelector('#src').value;
        document.querySelector('#result').innerText = src;//"command list:\n[help, option, who made this?, reset, donate]";
    });
}
