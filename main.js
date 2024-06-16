
let items=document.getElementById("items");
let navebar=document.getElementById("navebar");
let menubtn=document.getElementById("menubtn");
let headername=document.getElementById("headername");
let navebarclass=navebar.className;
let itemsclass=items.className;
let menubtnclass=menubtn.className;
let headernameclass=headername.className;
let cross=document.getElementById("cross");

let isnavbaropen=false;

function closenavebar(){
    isnavbaropen=false;
    navebar.className=navebarclass;
    items.className=itemsclass;
    menubtn.className=menubtnclass;
    headername.className=headernameclass;
}
document.addEventListener("click",(e)=>{
    if(e.target.id=="menubtn"){
        isnavbaropen=true;
        console.log(e.target.id);
        e.target.className+=" hidden";
        headername.className+=" hidden";
        navebar.className="fixed flex flex-col w-32 px-5 h-full  justify-start py-5 items-center shadow-lg bg-black"
        items.className="flex gap-7 font-medium flex-col visible text-white lg:visible"
    }else if(e.target.id=="cross"){
        closenavebar();
    }else if(isnavbaropen){
        
        closenavebar();
    }


    //projects

    if(e.target.id=="section"){
        console.log(e.target.id);
      
    }
    console.log(e.target.id);

})
console.log("d");