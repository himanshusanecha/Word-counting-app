var button = document.querySelector("a");
button.addEventListener("mouseover",function(){
    button.style.background = "blue";
})
button.addEventListener("mouseover",function(){
    button.style.background = "blue";
})
button.addEventListener("mouseout",function(){
    button.style.background = "white";
})
button.addEventListener("click",function(){
    console.log("hiii");
    var x = document.querySelector("input").value;
    var res = document.querySelector("#result");
    var i;
    var p=0;
    for(i=0;i<x.length;i++)
    {
        if(x[i]==' ')
        p++;
    }
    p++;
    res.textContent = `Total number of words are ` + p;
})
