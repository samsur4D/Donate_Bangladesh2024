// function donateAmount(){
// const inputValue = document.getElementById("doanteInput").value;
// console.log(inputValue);
// }
function donateAmount(){
const inputValue = document.getElementById("doanteInput").value;
console.log(inputValue);
}



function donateNow(){
    showElementById("cardSection")  ;
    hideElementById("historySection")
}

function history(){
    showElementById("historySection");
    hideElementById("cardSection");
}
