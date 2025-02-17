const inputValue = document.getElementsByClassName("doanteInput");
                    //    একসাথে ৪ টা ইনপুট ট্যাগ সিলেক্ট করে নিয়েছি 

function donateforNoakhali(){
    // console.log(inputValue);   ৪টা ইনপুট ট্যাগ কে পাওয়া যাবে। 
const noakhaliFlood = inputValue[0].value;

const reserveButton = document.getElementById("reserveButton");
const reserveButtonValue = parseInt(reserveButton.innerText);
// console.log(typeof(reserveButtonValue));
if(reserveButtonValue <= 0){
    Swal.fire({
      title: "Sorry, We are unable to accept your donation",
      width: 600,
      padding: "3em",
      color: "#333", // Dark gray for better readability
      background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
      backdrop: `
        rgba(0, 0, 0, 0.3) 
        blur(10px)
      `
    });
      inputValue[0].value = "";
    return
}else if(reserveButtonValue - parseInt(noakhaliFlood) < 0){
    Swal.fire({
      title: "Please check our reserve & Donate a Valid amount",
      width: 600,
      padding: "3em",
      color: "#333", // Dark gray for better readability
      background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
      backdrop: `
        rgba(0, 0, 0, 0.3) 
        blur(10px)
      `
    });
    inputValue[0].value = "";
    return
}

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
            const currentDateTime = new Date().toLocaleString();

            const historySection = document.getElementById("historySection");
            historySection.insertAdjacentHTML("afterbegin",`<div class="container mx-auto px-4 sm:px-10 md:px-20 py-6 mt-3 bg-[#F9F7F3] h-auto w-full md:w-[90%] lg:w-[1000px] border border-gray-200 rounded-xl">
    <p class="text-lg sm:text-xl font-bold text-black text-center md:text-left">
        ${yourDonation} Taka is donated in ${selectedCamping}
    </p>
    <p class="mt-2 text-xs sm:text-sm text-gray-500 text-center md:text-left">
        Donated on: ${currentDateTime}
    </p>
    <p class="mt-2 text-sm sm:text-md font-semibold text-center md:text-left">
        Thank you, you have helped us. This little help of your little humanity bears the identity of the great humanity.
    </p>
</div>
`)
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
// -----------------
const reserveButton = document.getElementById("reserveButton");
const reserveButtonValue = parseInt(reserveButton.innerText);
console.log(typeof(reserveButtonValue));
if(reserveButtonValue <= 0){
  Swal.fire({
    title: "Sorry, We are unable to accept your donation",
    width: 600,
    padding: "3em",
    color: "#333", // Dark gray for better readability
    background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
    backdrop: `
      rgba(0, 0, 0, 0.3) 
      blur(10px)
    `
  });
      inputValue[1].value = "";
    return
}else if(reserveButtonValue - parseInt(feniFlood) < 0){
  Swal.fire({
    title: "Please check our reserve & Donate a Valid amount",
    width: 600,
    padding: "3em",
    color: "#333", // Dark gray for better readability
    background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
    backdrop: `
      rgba(0, 0, 0, 0.3) 
      blur(10px)
    `
  });
    inputValue[1].value = "";
    return
}

// -----------------
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
            const currentDateTime = new Date().toLocaleString();


            const historySection = document.getElementById("historySection");
            historySection.insertAdjacentHTML("afterbegin",`<div class="container mx-auto px-4 sm:px-10 md:px-20 py-6 mt-3 bg-[#F9F7F3] h-auto w-full md:w-[90%] lg:w-[1000px] border border-gray-200 rounded-xl">
    <p class="text-lg sm:text-xl font-bold text-black text-center md:text-left">
        ${yourDonation} Taka is donated in ${selectedCamping}
    </p>
    <p class="mt-2 text-xs sm:text-sm text-gray-500 text-center md:text-left">
        Donated on: ${currentDateTime}
    </p>
    <p class="mt-2 text-sm sm:text-md font-semibold text-center md:text-left">
        Thank you, you have helped us. This little help of your little humanity bears the identity of the great humanity.
    </p>
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
const reserveButton = document.getElementById("reserveButton");
const reserveButtonValue = parseInt(reserveButton.innerText);
console.log(typeof(reserveButtonValue));
if(reserveButtonValue <= 0){
    Swal.fire({
        title: "Sorry , We are unable to accept your donation",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
      inputValue[2].value = "";
    return
}else if(reserveButtonValue - parseInt(quotaMovement) < 0){
    Swal.fire({
        title: "Please check our reserve & Donate a Valid amount",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
    inputValue[2].value = "";
    return
}
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
            const currentDateTime = new Date().toLocaleString();


            const historySection = document.getElementById("historySection");
            historySection.insertAdjacentHTML("afterbegin",`<div class="container mx-auto px-4 sm:px-10 md:px-20 py-6 mt-3 bg-[#F9F7F3] h-auto w-full md:w-[90%] lg:w-[1000px] border border-gray-200 rounded-xl">
    <p class="text-lg sm:text-xl font-bold text-black text-center md:text-left">
        ${yourDonation} Taka is donated in ${selectedCamping}
    </p>
    <p class="mt-2 text-xs sm:text-sm text-gray-500 text-center md:text-left">
        Donated on: ${currentDateTime}
    </p>
    <p class="mt-2 text-sm sm:text-md font-semibold text-center md:text-left">
        Thank you, you have helped us. This little help of your little humanity bears the identity of the great humanity.
    </p>
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
const reserveButton = document.getElementById("reserveButton");
const reserveButtonValue = parseInt(reserveButton.innerText);
console.log(typeof(reserveButtonValue));
if(reserveButtonValue <= 0){
  Swal.fire({
    title: "Sorry, We are unable to accept your donation",
    width: 600,
    padding: "3em",
    color: "#333", // Dark gray for better readability
    background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
    backdrop: `
      rgba(0, 0, 0, 0.3) 
      blur(10px)
    `
  });
      inputValue[3].value = "";
    return
}else if(reserveButtonValue - parseInt(gazaSituation) < 0){
  Swal.fire({
    title: "Please check our reserve & Donate a Valid amount",
    width: 600,
    padding: "3em",
    color: "#333", // Dark gray for better readability
    background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
    backdrop: `
      rgba(0, 0, 0, 0.3) 
      blur(10px)
    `
  });
    inputValue[3].value = "";
    return
}


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
            const currentDateTime = new Date().toLocaleString();

            const historySection = document.getElementById("historySection");
            historySection.insertAdjacentHTML("afterbegin",`<div class="container mx-auto px-4 sm:px-10 md:px-20 py-6 mt-3 bg-[#F9F7F3] h-auto w-full md:w-[90%] lg:w-[1000px] border border-gray-200 rounded-xl">
    <p class="text-lg sm:text-xl font-bold text-black text-center md:text-left">
        ${yourDonation} Taka is donated in ${selectedCamping}
    </p>
    <p class="mt-2 text-xs sm:text-sm text-gray-500 text-center md:text-left">
        Donated on: ${currentDateTime}
    </p>
    <p class="mt-2 text-sm sm:text-md font-semibold text-center md:text-left">
        Thank you, you have helped us. This little help of your little humanity bears the identity of the great humanity.
    </p>
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
    showElementById("cardSection");
    showElementById("sixImages")
    hideElementById("historySection");
    const donateNowButton = document.getElementById("donateNowButton");
    donateNowButton.classList.add("bg-green-400");
    const historyButton = document.getElementById("historyButton");
    historyButton.classList.remove("bg-green-400")   
}

function history(){
    showElementById("historySection");
    hideElementById("cardSection");
    hideElementById("sixImages")
    const historyButton = document.getElementById("historyButton");
    historyButton.classList.add("bg-green-400");
    const donateNowButton = document.getElementById("donateNowButton");
    donateNowButton.classList.remove("bg-green-400");
}

function blogButton(){
  hideElementById("doubleButton")
}
