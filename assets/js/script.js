document.querySelectorAll("#headerBanner .bol-banner").forEach((item)=>{
    item.addEventListener("click",()=>{
        let pos = item.getAttribute("data-pos");
        let marginPos = pos*100;
        document.getElementById("slideHeader").style.marginLeft = "-"+marginPos+"vw";
        retiraActive(1);
        item.classList.add("active");
    });
});

document.querySelectorAll("#ourteamBanner .bol-banner").forEach((item)=>{
    item.addEventListener("click",()=>{
        let pos = item.getAttribute("data-pos");
        let marginPos = pos*100;
        document.getElementById("slideOurteam").style.marginLeft = "-"+marginPos+"vw";
        retiraActive(2);
        item.classList.add("active");
    });
});

document.querySelectorAll("#clientsBanner .bol-banner").forEach((item)=>{
    item.addEventListener("click",()=>{
        let pos = item.getAttribute("data-pos");
        let marginPos = pos*100;
        document.getElementById("bannerClients").style.marginLeft = "-"+marginPos+"vw";
        retiraActive(3);
        item.classList.add("active");
    });
});

document.querySelectorAll("#premiumBanner .bol-banner").forEach((item)=>{
    item.addEventListener("click",()=>{
        let pos = item.getAttribute("data-pos");
        let marginPos = pos*100;
        document.getElementById("slidePremium").style.marginLeft = "-"+marginPos+"vw";
        retiraActive(4);
        item.classList.add("active");
    });
});

const retiraActive = (setor)=>{
    /**
     * 1= header
     * 2= ourTeam
     * 3= clients
     * 4= premium features
     */
    switch(setor) {
        case 1:
            document.querySelectorAll("#headerBanner .bol-banner").forEach((item)=>{
                item.classList.remove("active");
            });
        break;
        case 2:
            document.querySelectorAll("#ourteamBanner .bol-banner").forEach((item)=>{
                item.classList.remove("active");
            });
        break;
        case 3:
            document.querySelectorAll("#clientsBanner .bol-banner").forEach((item)=>{
                item.classList.remove("active");
            });
        break;
        case 4:
            document.querySelectorAll("#premiumBanner .bol-banner").forEach((item)=>{
                item.classList.remove("active");
            });
        break;
    }
    
}