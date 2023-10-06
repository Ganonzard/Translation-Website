function changeHeader(){
    var checkbox = document.getElementById("langCheck");
    const topbar = Array.from(document.getElementsByClassName("TB"));
    var language = checkbox.checked ? "cn" : "en";

    topbar[0].innerHTML = data[language].TB0;
    topbar[1].innerHTML = data[language].TB1;
    topbar[2].innerHTML = data[language].TB2;
}

const data = {
    "en": {
        "TB0": "Home",
        "TB1": "About",
        "TB2": "Contact"
    },

    "cn":{
        "TB0": "主页",
        "TB1": "关于",
        "TB2": "接触"
    }
}