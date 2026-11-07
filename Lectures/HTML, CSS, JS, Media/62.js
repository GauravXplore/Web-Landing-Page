console.log("Exercise 10");
let fname, sname, aword;
let a = Math.random();
    if(a<0.33){
     fname ="Crazy";
      console.log("Your chosen name is",fname);
    }
    else if(a>=0.33&&a<0.66){
        fname ="Amazing";
         console.log("Your chosen name is",fname);
    }
    else{
        fname = "Fire";
        console.log("Your chosen name is",fname);
    }

let b = Math.random();

    if(b<0.33){
        sname = "Engine";
        console.log("Your Shop name is Engine");
    }
    else if(b>=0.33&&b<0.66){
        sname = "Foods";
        console.log("Your Shop name is Foods");
    }
    else{
        sname = "Garments";
        console.log("Your Shop name is Garments");
    }

    let c = Math.random();
    if(c<0.33){
       aword = "Bros";
        console.log("Your chosen another word is Bros");
    }
    else if(c>=0.33&&c<0.66){
        aword = "Limited";
        console.log("Your chosen another word is Limited");
    }
    else{
        aword = "Hub";
        console.log("Your chosen another word is Hub");  
    }

// bname = fname + " "+sname+" "+aword;
//     console.log("Your business name is:",bname);
console.log(`${fname} ${sname} ${aword}`);


