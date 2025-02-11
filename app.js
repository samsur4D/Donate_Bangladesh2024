const inputValue = document.getElementsByClassName("doanteInput");
                    //    একসাথে ৪ টা ইনপুট ট্যাগ সিলেক্ট করে নিয়েছি 

function donateforNoakhali(){
    // console.log(inputValue);   ৪টা ইনপুট ট্যাগ কে পাওয়া যাবে। 
const noakhaliFlood = inputValue[0].value;
// console.log(noakhaliFlood);   ইনপুট ট্যাগ এর নম্বর পাওয়া যাবে। (string value)
  
        //   validation
        const number = parseInt(noakhaliFlood);
        if(number > 0){
            const donateInital = document.querySelector('.noakhaliInitial');
            
             donateInital.innerText = parseInt(donateInital.innerText) + number ;
             const donateMain = parseInt(donateInital.innerText);
             console.log(typeof(donateMain));
            // donateInitial innertext এর ভিতর ডেফাউল্ট ভাবে  ০ আছে। এটাকে parseInt করে নাম্বার 
            // করে তার সাথে নতুন নাম্বার যোগ করে donateInitial innertext এর ভিতর রাখা হয়েছে। 
            // পরবর্তীতে donatemain এর ভিতর donnateInitial innertext কে আবার রেখে parseINT করে দেয়া হয়েছে। 
            
        } else{
            alert("Please Inter a Valid Donation Amount")
        }
}
// -------------------------
function donateforFeni(){

const feniFlood = inputValue[1].value;
console.log(feniFlood);
const number = parseInt(feniFlood);
if(number > 0){
    const donateInital = document.querySelector('.feniInitial');
    donateInital.innerText = parseInt(donateInital.innerText) + number ;
    const donateMain = parseInt(donateInital.innerText);
    console.log(donateMain);
} else{
    alert("Please Inter a Valid Donation Amount")
}
}

// Quota Movement
function donateforQuotaMovement(){
const quotaMovement = inputValue[2].value;
// console.log(quotaMovement);
const number = parseInt(quotaMovement);
if(number > 0){
    const donateInital = document.querySelector('.quotaInitial');
    donateInital.innerText = parseInt(donateInital.innerText) + number ;
    const donateMain = parseInt(donateInital.innerText);
    console.log(donateMain);
} else{
    alert("Please Inter a Valid Donation Amount")
}
}


// Gaza situation
function donateforGaza(){
const gazaSituation = inputValue[3].value;    // select the 3 no. index value (string value)

// validation
const number = parseInt(gazaSituation);
if(number > 0){
    const donateInital = document.querySelector(".gazaInitial");
    donateInital.innerText = parseInt(donateInital.innerText) + number ;
    const donateMain = parseInt(donateInital.innerText);
    console.log(donateMain);
} else{
    alert("Please Inter a Valid Donation Amount")
}
}



// _____________________________________________________
function donateNow(){
    showElementById("cardSection")  ;
    hideElementById("historySection")
}

function history(){
    showElementById("historySection");
    hideElementById("cardSection");
}
