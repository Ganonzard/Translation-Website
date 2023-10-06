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
        1 : "About Us,",
        2 : "Hi, I am Tan Cheng Siong, owner of Speedy Translation Services. Speedy Translation Services is a sole-proprietorship that specializes in translating documents from mandarin to english and vice-versa. As a former court-translator working in the State Court with 30-years of translating experience, I have worked on a variety of documents such as, but not limited to, driving license, death certificate, ARCA buisness profile, household transcript, divorce certificate and more.",
        3 : "Services:",
        4 : "Graduation<br>Certificate",
        5 : "Marriage<br>Certificate",
        6 : "Immunization<br>Certificate",
        7 : "Household<br>Transcript",
        8 : "Death<br>Certificate",
        9 : "Divorce<br>Certificate",
        10 : "Skill<br>Certificate",
        11 : "Birth<br>Certificate", 
        12 : "Nominal<br>Certificate",
        13 : "Business<br>Profile",
        14 : "Driving<br>License", 
        15 : "Identity<br>Card", 
        16 : "Other<br>Documents"
    },
    
    "cn":{
        1 : "关于我们,",
        2 : "大家好，我是陈正祥，快速翻译服务(Speedy Translation Services) 的老板。快速翻译服务是一家独资企业，专门从事普通话和英语之间的文件翻译。作为一名前法庭翻译，拥有 30 年的翻译经验凭借翻译经验，我曾处理过各种文件，例如但不限于驾驶执照、死亡证明、ARCA 商业简介、家庭成绩单、离婚证明等等。<br><br>",
        3 : "服务：",
        4 : "毕业证书",
        5 : "结婚证",
        6 : "免疫证明",
        7 : "家庭记录",
        8 : "死亡证明",
        9 : "离婚证",
        10 : "技能证书",
        11 : "出生证明", 
        12 : "名义证书",
        13 : "业务简介",
        14 : "驾驶执照", 
        15 : "身份证", 
        16 : "其他文件"

    }

}