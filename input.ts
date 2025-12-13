
function getInfo() {
    const userNameInput = document.querySelector("#username") as HTMLInputElement
    let userName:string = userNameInput?.value
    console.log("userNameInput", userNameInput.value)
    const emailInput = document.querySelector("#email") as HTMLInputElement
    console.log("emailnput", emailInput.value)
    let email:string = emailInput?.value

    const ageInput = document.querySelector("#age") as HTMLInputElement
    console.log("ageInput", ageInput.value)
    let age:string = ageInput?.value

}