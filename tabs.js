function openTab(tabName) {
    let i;
    let tabContent;
    tabContent = document.getElementsByClassName("container__tab");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";
}

let homeLinkEl = document.getElementById("HomeLink");
let afnLinkEl = document.getElementById("AfnLink");
let lexLinkEl = document.getElementById("LexLink");

homeLinkEl.addEventListener("click", function(){openTab("Home")}, false);
afnLinkEl.addEventListener("click", function(){openTab("Afn")}, false);
lexLinkEl.addEventListener("click", function(){openTab("Lex")}, false);