function changeBody(){
    var checkbox = document.getElementById("langCheck");
    const body = Array.from(document.getElementsByClassName("text"));
    var language = checkbox.checked ? "cn" : "en";
    var index = 1;
    body.forEach(element => {
        console.log(element, text[language][index]);
        element.innerHTML = text[language][index];
        index++;
    });

}

const text = {
    "en": {
        1 : "Get a Quotation Today!",
        2 : "Whatsapp QR:",
        3 : "Alternatively, email us at:",
    },
    
    "cn":{
        1 : "立即获取报价！",
        2 : "Whatsapp 二维码:",
        3 : "或者，请发送电子邮件至：",
    }

}