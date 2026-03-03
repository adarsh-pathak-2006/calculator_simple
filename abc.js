const i=(x)=>{
   x.target.style.backgroundColor="#466276"
   x.target.style.borderColor="white" 
}
const o=(x)=>{
    x.target.style.backgroundColor="#7AAACE"
    x.target.style.borderColor="black"
}
let butt=document.querySelectorAll("button")
butt.forEach(butt=>{
butt.addEventListener("mouseover",i)
butt.addEventListener("mouseout",o)
})
let scr=document.querySelector("#screen")
let pl=document.querySelector("#plus")
let mi=document.querySelector("#minus")
let mu=document.querySelector("#multiply")
let ni=document.querySelector("#nine")
let ei=document.querySelector("#eight")
let se=document.querySelector("#seven")
let si=document.querySelector("#six")
let fi=document.querySelector("#five")
let fo=document.querySelector("#four")
let th=document.querySelector("#three")
let tw=document.querySelector("#two")
let on=document.querySelector("#one")
let dot=document.querySelector("#dot")
let ze=document.querySelector("#zero")
let ent=document.querySelector("#enter")
let cl=document.querySelector("#clr")
let bck=document.querySelector("#bcks")
let div=document.querySelector("#div")

pl.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"+"
})
mi.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"-"
})
mu.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"X"
})
ni.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"9"
})
ei.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"8"
})
se.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"7"
})
si.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"6"
})
fi.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"5"
})
fo.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"4"
})
th.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"3"
})
tw.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"2"
})
on.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"1"
})
dot.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"."
})
ze.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"0"
})
cl.addEventListener("click",()=>{
    scr.textContent=""
})
bck.addEventListener("click",()=>{
    scr.textContent=scr.textContent.slice(0,-1)
})
div.addEventListener("click",()=>{
    scr.textContent=scr.textContent+"/"
})
ent.addEventListener("click",()=>{
    let a=scr.textContent
    for(let i=0; i<a.length; i++){
        if (a[i]==="+" || a[i]==="-" || a[i]==="X" || a[i]==="/"){
            let op=a[i]
            let q=Number(a.slice(0,i))
            let w=Number(a.slice(i+1,a.length))
            if(op==="+"){
                scr.textContent=q+w
            }
            else if(op==="-"){
                scr.textContent=q-w
            }
            else if(op==="X"){
                scr.textContent=q*w
            }
            else if(op==="/"){
                scr.textContent=q/w
            }
            else{
                scr.textContent="#hoadmvpat"
            }
        }
    }
})