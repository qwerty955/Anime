document.documentElement.style.setProperty("--x",window.innerWidth-50+"px")
let r = 1;
        let t = document.createTextNode("\u00D7");
        //document.getElementById("y").append(t);
        document.getElementById("m").onclick=function () {
            if (r==1){
                document.getElementById("l").style.left="-100px";
                r=2;
            }else if (r==2){
                document.getElementById("l").style.left="-320px";
                r=1;
            }
        }
fetch("https://kitsu.io/api/edge/anime?page[limit]=20")
.then(function (e){
    return e.json();
})
.then(function (e){
    console.log(e);
    /*for (let i =0;i<e.data.length;i++){
        console.log(i);
        let cr = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src",e.data[i].attributes.posterImage.original)
        cr.append(img)
        document.getElementById("con").appendChild(cr)
    }*/
})
//fetch("https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop&include=categories,mediaRelationships.destination&filter[categories]=G")

/*fetch("https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop&include=categories,mediaRelationships.destination&filter[categories]=G")
.then(function (e){
    return e.json();
})
.then(function (e){
    console.log(e);
})*/