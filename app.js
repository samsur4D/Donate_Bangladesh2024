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
            //  console.log(typeof(donateMain));
            //  alert("Donated Succesfully")
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Donation Has Been completed Successfully",
                showConfirmButton: false,
                timer: 1500
              });
                 
            // donateInitial innertext এর ভিতর ডেফাউল্ট ভাবে  ০ আছে। এটাকে parseInt করে নাম্বার 
            // করে তার সাথে নতুন নাম্বার যোগ করে donateInitial innertext এর ভিতর রাখা হয়েছে। 
            // পরবর্তীতে donatemain এর ভিতর donnateInitial innertext কে আবার রেখে parseINT করে দেয়া হয়েছে। 

            const totalAmount = document.querySelector(".totalAmount");
            totalAmount.innerText = parseInt(totalAmount.innerText) - number ;
            const newToatl = parseInt(totalAmount.innerText);
            // console.log(newToatl);
            // 
            
            const noakhaliCardName = document.getElementById('firstDonationName');
            const noakhali = noakhaliCardName.innerText;
            console.log(noakhali);

            const yourDonation = inputValue[0].value;
            const yourSelectedCamping = document.getElementById("firstDonationName");
            const selectedCamping = yourSelectedCamping.innerText;

            const historySection = document.getElementById("historySection");
            historySection.insertAdjacentHTML("afterbegin",`<div class="px-20 py-6 mt-3 bg-[#F9F7F3] h-32 w-[1000px]  border border-gray-200 container rounded-xl">
              <p class="text-xl font-bold text-black">${yourDonation} Taka is donated in ${selectedCamping}</p>
              <p class="mt-2 text-md font-semi-bold">Thank you, you have helped us.  This little help of your little humanity bears the identity of the great humanity.</p>
        </div>`)
        inputValue[0].value = "";
            
        } else{
            
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Inter a Valid Donation Amount ",
                footer: '<a href="#">Something went wrong!</a>'
              });
               inputValue[0].value = ""
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
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Donation Has Been completed Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      const totalAmount = document.querySelector(".totalAmount");
            totalAmount.innerText = parseInt(totalAmount.innerText) - number ;
            const newToatl = parseInt(totalAmount.innerText);
            console.log(newToatl);
            const yourDonation = inputValue[1].value;
            const yourSelectedCamping = document.getElementById("secondDonationName");
            const selectedCamping = yourSelectedCamping.innerText;

            const historySection = document.getElementById("historySection");
            historySection.insertAdjacentHTML("afterbegin",`<div class="px-20 py-6 mt-3 bg-[#F9F7F3] h-32 w-[1000px]  border border-gray-200 container rounded-xl">
              <p class="text-xl font-bold text-black">${yourDonation} Taka is donated in ${selectedCamping}</p>
              <p class="mt-2 text-md font-semi-bold">Thank you, you have helped us.  This little help of your little humanity bears the identity of the great humanity.</p>
        </div>`)
            inputValue[1].value = "";

} else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Inter a Valid Donation Amount ",
        footer: '<a href="#">Something went wrong!</a>'
      });
       inputValue[1].value = ""
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
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Donation Has Been completed Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      const totalAmount = document.querySelector(".totalAmount");
            totalAmount.innerText = parseInt(totalAmount.innerText) - number ;
            const newToatl = parseInt(totalAmount.innerText);
            console.log(newToatl);
            const yourDonation = inputValue[2].value;
            const yourSelectedCamping = document.getElementById("thirdDonationName");
            const selectedCamping = yourSelectedCamping.innerText;

            const historySection = document.getElementById("historySection");
            historySection.insertAdjacentHTML("afterbegin",`<div class="px-20 py-6 mt-3 bg-[#F9F7F3] h-32 w-[1000px]  border border-gray-200 container rounded-xl">
              <p class="text-xl font-bold text-black">${yourDonation} Taka is donated in ${selectedCamping}</p>
              <p class="mt-2 text-md font-semi-bold">Thank you, you have helped us.  This little help of your little humanity bears the identity of the great humanity.</p>
        </div>`)
            inputValue[2].value = "";

            const firstDonationName = document.getElementById("firstDonationName");
            const firstName = firstDonationName.innerText;
            console.log(firstName);
} else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Inter a Valid Donation Amount ",
        footer: '<a href="#">Something went wrong!</a>'
      });
       inputValue[2].value = ""
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
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Donation Has Been completed Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      const totalAmount = document.querySelector(".totalAmount");
            totalAmount.innerText = parseInt(totalAmount.innerText) - number ;
            const newToatl = parseInt(totalAmount.innerText);
            console.log(newToatl);
            const yourDonation = inputValue[3].value;
            const yourSelectedCamping = document.getElementById("fourthDonationName");
            const selectedCamping = yourSelectedCamping.innerText;

            const historySection = document.getElementById("historySection");
            historySection.insertAdjacentHTML("afterbegin",`<div class="px-20 py-6 mt-3 bg-[#F9F7F3] h-32 w-[1000px]  border border-gray-200 container rounded-xl">
              <p class="text-xl font-bold text-black">${yourDonation} Taka is donated in ${selectedCamping}</p>
              <p class="mt-2 text-md font-semi-bold">Thank you, you have helped us.  This little help of your little humanity bears the identity of the great humanity.</p>
        </div>`)
            inputValue[3].value = "";
} else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Inter a Valid Donation Amount ",
        footer: '<a href="#">Something went wrong!</a>'
      });
       inputValue[3].value = ""
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
