const hr = document.querySelector(".hrs");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const dayDate = document.querySelector(".day-date");
const year = document.querySelector(".year");
const days = document.querySelector(".days");
const cID = document.querySelector(".c-id");
const cName = document.querySelector(".c-name");
const cPl = document.querySelector(".c-pl");
const cDl = document.querySelector(".c-dl");
const submit = document.querySelector(".submit");
const customerID = document.querySelector("#customer-id");
const customerName = document.querySelector("#customer-name");
const pickUpLocation = document.querySelector("#pick-up-location");
const dropOffLocation = document.querySelector("#drop-off-location");
const tableCustomerName = document.querySelectorAll("#customer-name p");
const slots = document.querySelectorAll(".slots .slot");

const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const daylist = ["Sunday ", "Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday "]

var date = new Date(); 

const loadDate = () => {
    date = new Date();
    hr.innerHTML = date.getHours() % 12 || 12;
    min.innerHTML = `${date.getMinutes()}`
    sec.innerHTML = date.getSeconds();
    day.innerHTML = daylist[date.getDay()];
    month.innerHTML = `, ${monthlist[date.getMonth()]}`;
    year.innerHTML = date.getFullYear();
}

for (i = date.getDay(); 7 > i; i++){
    days.innerHTML += `<p>${daylist[i]}</p>` 
}

for (j = 0; daylist.length - date.getDay() + 3 > j; j++) {
    days.innerHTML += `<p>${daylist[j]}</p>` 
}

setInterval(loadDate, 1000)

const makeDraggableEvent = () => {
    var customerNameEvent = "";
    var draged = false;

    for (i = 0; tableCustomerName.length > i; i++){
        tableCustomerName[i].setAttribute("draggable", true);
        tableCustomerName[i].ondragstart = (event) => {
            customerNameEvent = event.target.innerHTML;
        }
    }
    for (i = 0; slots.length > i; i++){
        slots[i].ondragover =  (event) => {
            if (draged === false){
                event.target.innerHTML += `<p>${customerNameEvent}</p>`;
                draged = true;
                setTimeout(() => {
                    draged = false;
                }, 2000)
            } 
        }
    }
}

makeDraggableEvent();

submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (cID.value === "" || cName.value === "" || cPl.value === "" || cDl.value === ""){
        alert("All Fields Are Required")
    } else {
        customerID.innerHTML += `<p>${cID.value}</p>`;
        customerName.innerHTML += `<p draggable='true'>${cName.value}</p>`;
        pickUpLocation.innerHTML += `<p>${cPl.value}</p>`;
        dropOffLocation.innerHTML += `<p>${cDl.value}</p>`;
        cID.value = "";
        cName.value = "";
        cPl.value = "";
        cDl.value = "";
        makeDraggableEvent();
    }
})
