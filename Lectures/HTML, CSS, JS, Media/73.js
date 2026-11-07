console.log("Exercise 13");


function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    const img_container = document.createElement("div");
    img_container.setAttribute("class", "img")
    document.querySelector(".container").appendChild(img_container);


    let thum = document.createElement("img");
    thum.src = `${thumbnail}`;
    document.querySelector(".img").append(thum);
    document.querySelector(".img").style.width = "170px";
    thum.style.borderRadius = "8px";
    thum.style.position = "absolute";


    let dur = document.createElement("div");
    dur.innerHTML = `${duration}`;
    dur.style.position = "relative";
    dur.style.backgroundColor = "black";
    dur.style.width = "38px";
    dur.style.display= "flex";
    dur.style.justifyContent= "center";
    dur.style.fontWeight= "550";
    dur.style.borderRadius = "3px"
    dur.style.fontSize = "12px"
    dur.style.zIndex = "10";
    dur.style.color = "white";
    dur.style.top = "76px";
    dur.style.left = "127px";
    document.querySelector(".img").appendChild(dur);



    let vidTitle = document.createElement("div");
    vidTitle.setAttribute("class", "Vidinfo");
    let tit = document.createElement("span");
    tit.innerHTML = `${title}`;
    
    tit.style.fontWeight = "550";
    vidTitle.style.color = "white";
    document.querySelector(".container").appendChild(vidTitle);
    document.querySelector(".Vidinfo").appendChild(tit);



    let smalin = document.createElement("ul");
    smalin.setAttribute("class","Smallinfo") 
    let chana = document.createElement("li");
    chana.innerHTML = `${cName}`;
    chana.style.fontSize = "13px"
    chana.style.listStyleType = "none";
    smalin.style.position= "relative";
    smalin.style.right = "40px";
    smalin.style.display = "flex";


    
    smalin.style.gap = "17px";
    smalin.style.margin ="19px 0px 0px 0px";
    document.querySelector(".Vidinfo").append(smalin);
    document.querySelector(".Smallinfo").append(chana);





    let view = document.createElement("li");
    view.style.fontSize = "13px";
    document.querySelector(".Smallinfo").append(view);
    if (views > 1000000) {
        views = views / 1000000;
        view.innerHTML = views + "m";
    } else if (views > 1000) {
        views = views / 1000;
        view.innerHTML = views + "k";
    } else {
        view.innerHTML = views;
    }


    let mo = document.createElement("li");
    document.querySelector(".Smallinfo").append(mo);
    mo.innerHTML = `${monthsOld}` + " months ago"; 
    mo.style.fontSize = "13px";
   
   
    // if(monthsOld>30){
    //     mo.innerHTML = monthsOld/30 +" months ago";
    // }else if(monthsOld>7){
    // mo.innerHTML = monthsOld/7 + " weeks ago";
    // }else{
    //     mo.innerHTML= monthsOld + " days ago";
    // }
}

