
//팝업 페이지의 #src 입력된 값이 변경 되었을때
if (document.querySelector("#usr_input")) {
    document.querySelector('#usr_input').addEventListener('input', function() {
        var src = document.querySelector('#usr_input').value;

        translate(src);
        //document.querySelector('#result').innerText = //"command list:\n[help, option, who made this?, reset, donate]";
    });
}
