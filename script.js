let form = document.querySelector('#parking-form')


form.addEventListener('submit', function(event){
    event.preventDefault()

    validateName()
    validateCar()
    validateDate()
    validateDays()
    validateCc()
    validateCvv()
    validateExp()
})


function validateName(){
    let nameInput = document.querySelector('#name')
    let nameValue = nameInput.value
    let parentEl = nameInput.parentElement
    

    document.getElementsByTagName("label")[0].setAttribute("id","name-label")
    let nameLabel = document.querySelector("#name-label")
    

    if (nameValue){
        console.log("name input is valid")
        parentEl.classList.remove("input-invalid")
        nameLabel.textContent = "Name"
        parentEl.classList.add("input-valid")
    } else {
        console.log("name is invalid")
        parentEl.classList.remove("input-valid")
        nameLabel.textContent = "Name is required"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}
function validateCar(){
    let yearInput = document.querySelector('#car-year')
    let yearInfo = yearInput.value
    let parentEl = document.querySelector('#car-field')
    let makeInput = document.querySelector('#car-make')
    let makeInfo = makeInput.value
    let modelInfo = document.querySelector('#car-field')

    document.getElementsByTagName("label")[1].setAttribute("id","car-year")
    let carLabel = document.querySelector("#car-year")

    y = document.getElementById("car-year").value
    
    // let parentEl = car.parentElement

    if (isNaN(y) || y < 1900 || y > 2020 || makeInfo === "" || modelInfo === ""){
        console.log("car input is invalid")
        parentEl.classList.remove("input-valid")
        carLabel.textContent = "Car year"
        parentEl.classList.add("input-valid")
        formIsValid = false
    } else if (yearInfo !== "" && makeInfo !== "" && modelInfo !== ""){
        console.log("car is invalid")
        parentEl.classList.remove("input-valid")
        carLabel.textContent = "Car year is needed"
        parentEl.classList.add("input-invalid")
    }
}


function validateDate(){
    let dateInput = document.querySelector('#start-date')
    let dateInfo = dateInput.value
    let parentEl = dateInput.parentElement
    let currentDate = new Date();
    dateInfo = new Date (dateInfo);

    document.getElementsByTagName("label")[2].setAttribute("id","date-label")
    let dateLabel = document.querySelector("#date-label")

    if (dateInfo > currentDate){
        console.log("date input is valid")
        parentEl.classList.remove("input-invalid")
        dateLabel.textContent = "Date parking"
        parentEl.classList.add("input-valid")
    } else {
        console.log("date is invalid")
        parentEl.classList.remove("input-valid")
        dateLabel.textContent = "Start date is needed"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}
function validateDays(){
    let daysInput = document.querySelector('#days')
    let daysValue = daysInput.value
    let parentEl = daysInput.parentElement

    document.getElementsByTagName("label")[3].setAttribute("id","days")
    let nameLabel = document.querySelector("#days")

    if (daysValue > 0 && daysValue < 31){
        console.log("Day input is valid")
        parentEl.classList.remove("input-invalid")
        nameLabel.textContent = "Days"
        parentEl.classList.add("input-valid")
    } else {
        console.log("Day is invalid")
        parentEl.classList.remove("input-valid")
        nameLabel.textContent = "Number of days must be more than 1 and less than 30"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateCc(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

function validateCvv(){
    let cvvInput = document.querySelector('#cvv')
    let cvvValue = cvvInput.value
    let parentEl = cvvInput.parentElement

    document.getElementsByTagName("label")[5].setAttribute("id","cvv")
    let nameLabel = document.querySelector("#cvv")

    if (cvvValue.length === 3){
        console.log("cvv input is valid")
        parentEl.classList.remove("input-invalid")
        nameLabel.textContent = "CVV Information"
        parentEl.classList.add("input-valid")
    } else {
        console.log("cvv is invalid")
        parentEl.classList.remove("input-valid")
        nameLabel.textContent = "Security Code (CVV) Information is needed"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateExp(){
    let expInput = document.querySelector('#expiration')
    let expValue = expInput.value
    let parentEl = expInput.parentElement

    let today = new Date()
    let todayMonth = today.getMonth() +1
    let todayYear = today.getFullYear() % 100

    document.getElementsByTagName("label")[5].setAttribute("id","expiration")
    let nameLabel = document.querySelector("#expiration")

    if (expValue >= todayYear && monthValidate >= todayMonth){
        console.log("exp. input is valid")
        parentEl.classList.remove("input-invalid")
        nameLabel.textContent = "Expiration Information"
        parentEl.classList.add("input-valid")
    } else {
        console.log("exp. is invalid")
        parentEl.classList.remove("input-valid")
        nameLabel.textContent = "Expiration date  is required"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function totalCost(){
    if (
        nameInput.classList.contains("input-valid") === true &&
        carInput.classList.contains("input-valid") === true &&
        startDateInput.classList.contains("input-valid") === true &&
        daysInput.classList.contains("input-valid") === true &&
        ccInput.classList.contains("input-valid") === true &&
        cvvInput.classList.contains("input-valid") === true &&
        expInput.classList.contains("input-valid") === true
     ) { 
        let edate = new Date(document.querySelector("#start-date").valueAsNumber)
        let dow = edate.getDay()
        let price = 0
        for (let n = 0; n < document.querySelector("#days").value; n++){
            if (dow == 5 || dow == 6) price += 7
            else price += 5
            dow++
            if (dow > 6) dow = 0
        }
        document.querySelector("#total").textContent = "Total: $" + price + ".00"
}       else {document.querySelector("#total").textContent = ""}
}

// function validateCc(){
//     let CcInput = document.querySelector('#credit-card')
//     let CcValue = CcInput.value
//     let parentEl = CcInput.parentElement

//     document.getElementsByTagName("label")[4].setAttribute("id","credit-card")
//     let nameLabel = document.querySelector("#credit-card")

//     if (CcValue){
//         console.log("Credit Card input is valid")
//         parentEl.classList.remove("input-invalid")
//         nameLabel.textContent = "Credit Card Information"
//         parentEl.classList.add("input-valid")
//     } else {
//         console.log("Credit Card is invalid")
//         parentEl.classList.remove("input-valid")
//         nameLabel.textContent = "Credit Card information is required"
//         parentEl.classList.add("input-invalid")
//         formIsValid = false
//     }
// }


