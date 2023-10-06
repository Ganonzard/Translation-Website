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
        1 : "Affordable",
        2 : "With our competitive prices, you can expect cheap translation services without compromising on quality or speed.",
        3 : "Experienced",
        4 : "Having been in the field for more than 30 years, doing various kinds of documents, you can expect professionalism and accuracy.",
        5 : "Speedy",
        6 : "As our name suggests, we pride ourselves on our speed. Expect translations to be completed as quickly as a few days."
    },
    
    "cn":{
        1 : "便宜",
        2 : "凭借我们具有竞争力的价格，您可以在不影响质量或速度的情况下获得廉价的翻译服务。",
        3 : "有经验",
        4 : "我们在该领域工作了 30 多年，处理过各种文件，您可以期待我们工作的专业性和准确性。",
        5 : "快速",
        6 : "正如我们的名字所暗示的，我们为我们的速度感到自豪。预计翻译最快几天内就能完成。"
    }

}