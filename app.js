const result = document.querySelector(".result span");

const getResult = document.querySelector(".getResult");
const toastMessage = document.querySelector('.toast .message')
const toast = document.querySelector('.toast')


function mainCode (e) {
   const antyA = Number(document.querySelector(".antyA input").value);
   const antyB = Number(document.querySelector(".antyB input").value);
   const antyD = Number(document.querySelector(".antyD input").value);
   const neg = "Negative";
   const pos = "Positive";
   if (antyA === 1 && antyB === 0 && antyD === 1) {
     result.innerText = `A ${pos}`;
   } else if (antyA === 1 && antyB === 0 && antyD === 0) {
     return (result.innerText = `a ${neg}`);
   } else if (antyA === 0 && antyB === 1 && antyD === 1) {
     return (result.innerText = `b ${pos}`);
   } else if (antyA === 0 && antyB === 1 && antyB === 0) {
     return (result.innerText = `b ${neg}`);
   } else if (antyA === 1 && antyB === 1 && antyD === 1) {
     return (result.innerText = `ab ${pos}`);
   } else if (antyA === 1 && antyB === 1 && antyD === 0) {
     return (result.innerText = `ab ${neg}`);
   } else if (antyA === 0 && antyB === 0 && antyD === 1) {
     return (result.innerText = `o ${pos}`);
   } else if (antyA === 0 && antyB === 0 && antyD === 0) {
     return (result.innerText = `o ${neg}`);
   } else {
      toast.style.top = '10px';
     toastMessage.innerText = 'Your input value is wrong'
     setTimeout(()=>{
      toast.style.top = '-100px';
      location.reload()
     },2000)
   }
 }
getResult.addEventListener("click",mainCode);


// toast message design

