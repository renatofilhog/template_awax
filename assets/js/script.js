document.querySelectorAll("#headerBanner .bol-banner").forEach((item)=>{
    item.addEventListener("click",()=>{
        console.log("Clicou");
        let pos = item.getAttribute("data-pos");
        let marginPos = pos*100;
        document.getElementById("slideHeader").style.marginLeft = "-"+marginPos+"vw";
        retiraActiveHeader();
        item.classList.add("active");
    });
});

const retiraActiveHeader = ()=>{
    document.querySelectorAll("#headerBanner .bol-banner").forEach((item)=>{
        item.classList.remove("active");
    });
}

