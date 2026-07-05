let btn = document.querySelector(".btn");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item= document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";

    let dlt= document.createElement("button");
    dlt.innerText = "Delete";
    dlt.classList.add("dltbtn");
    item.appendChild(dlt);


});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem =event.target.parentElement;
        listItem.remove();
    }
})