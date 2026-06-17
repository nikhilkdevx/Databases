let delbtns = document.querySelectorAll(".delete");

delbtns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let result = confirm("Delete this message ? ");
        if(!result){
            e.preventDefault();
        }
    });
});