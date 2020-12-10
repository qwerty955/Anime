document.documentElement.style.setProperty("--x",window.innerWidth-60+"px")
let las=0;
let r = 1;
        let t = document.createTextNode("\u00D7");
        //document.getElementById("y").append(t);
        document.getElementById("m").onclick=function () {
            if (r==1){
                document.getElementById("l").style.left="-60px";
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
    for (let i =0;i<e.data.length;i++){
            let cr = document.createElement("div");
            let cr_b2 = document.createElement("div");
            let cr_b = document.createElement("div");
            let img = document.createElement("img");
            let h5 = document.createElement("h5");
            let p = document.createElement("p");
            let a = document.createElement("a");
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            ul.className="list-group list-group-flush";
            img.setAttribute("src",e.data[i].attributes.posterImage.original);
            img.className="card-img-top";
            cr_b.className="card-body";
            h5.className="card-title";
            p.className="card-text";
            if (e.data[i].attributes.titles.en==undefined){
                h5.innerHTML=e?.data[i]?.attributes?.titles?.en_jp;
            }else{
                h5.innerHTML=e?.data[i]?.attributes?.titles?.en;
            }
            li.className="list-group-item";
            li2.className="list-group-item";
            li3.className="list-group-item";
            li4.className="list-group-item";
            li.innerHTML="Age Rating: "+e.data[i].attributes?.ageRatingGuide+";";
            li2.innerHTML="duced from "+e.data[i].attributes?.startDate+" to "+e.data[i].attributes?.endDate+";";
            li3.innerHTML="status: "+e.data[i].attributes?.status+";";
            li4.innerHTML="episodes: "+e.data[i].attributes?.episodeCount+";";
            a.className="card-link";
            cr_b2.className="card-body";
            p.innerHTML=e?.data[i]?.attributes?.description;
            cr.className="card";
            cr.setAttribute("data-descr","Age Rating: "+e.data[i].attributes.ageRatingGuide+";")
            cr.setAttribute("data-dascr","duced from "+e.data[i].attributes.startDate+" to "+e.data[i].attributes.endDate)
            cr.setAttribute("data-status","status: "+e.data[i].attributes.status)
            a.innerHTML='Watch for Kitsu.io';
            a.setAttribute("target","_blank")
            a.setAttribute("href","https://kitsu.io/anime/"+e.data[i].attributes.slug)
            ul.appendChild(li)
            ul.appendChild(li2)
            ul.appendChild(li3)
            ul.appendChild(li4)
            cr_b2.append(a)
            cr.append(img);
            cr_b.append(h5);
            cr_b.appendChild(p);
            cr.appendChild(cr_b);
            cr.appendChild(ul)
            cr.appendChild(cr_b2)
            document.getElementById("con").appendChild(cr);
            las=las+20;
    }
})
document.getElementById("fa").addEventListener("click",()=>{
    fetch("https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D="+(las-1))
.then(function (e){
    return e.json();
})
.then(function (e){
    for (let i =0;i<e.data.length;i++){
        let cr = document.createElement("div");
        let cr_b2 = document.createElement("div");
        let cr_b = document.createElement("div");
        let img = document.createElement("img");
        let h5 = document.createElement("h5");
        let p = document.createElement("p");
        let a = document.createElement("a");
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li");
        ul.className="list-group list-group-flush";
        img.setAttribute("src",e.data[i].attributes.posterImage.original);
        img.className="card-img-top";
        cr_b.className="card-body";
        h5.className="card-title";
        p.className="card-text";
        if (e.data[i].attributes.titles.en==undefined){
            h5.innerHTML=e?.data[i]?.attributes?.titles?.en_jp;
        }else{
            h5.innerHTML=e?.data[i]?.attributes?.titles?.en;
        }
        li.className="list-group-item";
        li2.className="list-group-item";
        li3.className="list-group-item";
        li4.className="list-group-item";
        li.innerHTML="Age Rating: "+e.data[i].attributes?.ageRatingGuide+";";
        li2.innerHTML="duced from "+e.data[i].attributes?.startDate+" to "+e.data[i].attributes?.endDate+";";
        li3.innerHTML="status: "+e.data[i].attributes?.status+";";
        li4.innerHTML="episodes: "+e.data[i].attributes?.episodeCount+";";
        a.className="card-link";
        cr_b2.className="card-body";
        p.innerHTML=e?.data[i]?.attributes?.description;
        cr.className="card";
        cr.setAttribute("data-descr","Age Rating: "+e.data[i].attributes.ageRatingGuide+";")
        cr.setAttribute("data-dascr","duced from "+e.data[i].attributes.startDate+" to "+e.data[i].attributes.endDate)
        cr.setAttribute("data-status","status: "+e.data[i].attributes.status)
        a.innerHTML='Watch for Kitsu.io';
        a.setAttribute("target","_blank")
        a.setAttribute("href","https://kitsu.io/anime/"+e.data[i].attributes.slug)
        ul.appendChild(li)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        cr_b2.append(a)
        cr.append(img);
        cr_b.append(h5);
        cr_b.appendChild(p);
        cr.appendChild(cr_b);
        cr.appendChild(ul)
        cr.appendChild(cr_b2)
        document.getElementById("con").appendChild(cr);
        las=las+20;
    }
})
})
let tt = "";
function c (e){
    tt="&"+e;
}
//fetch("https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop&include=categories,mediaRelationships.destination&filter[categories]=G")
function searching (st,w) {
    w=tt;
    fetch("https://kitsu.io/api/edge/anime?filter[text]="+st+"&include=categories,mediaRelationships.destination"+tt+"&page[limit]=20")
    .then(function (e){
        return e.json();
    })
    .then(function (e){
            let pr = new Promise((res,rej)=>{
                let q = document.querySelectorAll("#con2 > .card")
            console.log(q);
            if (q.length!=0){
                for (let i =0;i<e.data.length;i++){
                    q[i].style.display="none";
                }
            }
            res()
            })
            .then(()=>{
            for (let i =0;i<e.data.length;i++){
            let cr = document.createElement("div");
            let cr_b2 = document.createElement("div");
            let cr_b = document.createElement("div");
            let img = document.createElement("img");
            let h5 = document.createElement("h5");
            let p = document.createElement("p");
            let a = document.createElement("a");
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            ul.className="list-group list-group-flush";
            img.setAttribute("src",e.data[i].attributes?.posterImage?.original);
            img.className="card-img-top";
            cr_b.className="card-body";
            h5.className="card-title";
            p.className="card-text";
            if (e.data[i].attributes.titles.en==undefined){
            h5.innerHTML=e?.data[i]?.attributes?.titles?.en_jp;
            }else{
            h5.innerHTML=e?.data[i]?.attributes?.titles?.en;
            }
            li.className="list-group-item";
            li2.className="list-group-item";
            li3.className="list-group-item";
            li4.className="list-group-item";
            li.innerHTML="Age Rating: "+e.data[i].attributes?.ageRatingGuide+";";
            li2.innerHTML="duced from "+e.data[i].attributes?.startDate+" to "+e.data[i].attributes?.endDate+";";
            li3.innerHTML="status: "+e.data[i].attributes?.status+";";
            li4.innerHTML="episodes: "+e.data[i].attributes?.episodeCount+";";
            a.className="card-link";
            cr_b2.className="card-body";
            p.innerHTML=e?.data[i]?.attributes?.description;
            cr.className="card";
            cr.setAttribute("data-descr","Age Rating: "+e.data[i].attributes?.ageRatingGuide+";");
            cr.setAttribute("data-dascr","duced from "+e.data[i].attributes?.startDate+" to "+e.data[i].attributes?.endDate);
            cr.setAttribute("data-status","status: "+e.data[i].attributes?.status);
            a.innerHTML='Watch for Kitsu.io';
            a.setAttribute("target","_blank");
            a.setAttribute("href","https://kitsu.io/anime/"+e.data[i].attributes?.slug);
            ul.appendChild(li);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            cr_b2.append(a);
            cr.append(img);
            cr_b.append(h5);
            cr_b.appendChild(p);
            cr.appendChild(cr_b);
            cr.appendChild(ul);
            cr.appendChild(cr_b2);
            document.getElementById("con2").appendChild(cr);
            las=las+20;
            }})
        }
    )
}
