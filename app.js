// const allbtn=document.getElementsByClassName('button-text')

// for(const button of allbtn){
//     button.addEventListener("click", function(e){
//     if(e.target.id == 'prime'){
//         document.getElementById("title").style.color='red';
//     }
//     else{
//         document.getElementById("title").style.color='green';
//     }
        
//     })
// }

let count= 0;
function add(e){
    count++;
    control(count)

}
function minus(e){
    count--;
    control(count)
}

function control(id) {
    document.getElementById("count").innerText = count;
    
}