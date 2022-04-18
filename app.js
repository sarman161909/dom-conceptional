const allbtn=document.getElementsByClassName('button-text')

for(const button of allbtn){
    button.addEventListener("click", function(e){
    if(e.target.id == 'prime'){
        document.getElementById("title").style.color='red';
    }
    else{
        document.getElementById("title").style.color='green';
    }
        
    })
}