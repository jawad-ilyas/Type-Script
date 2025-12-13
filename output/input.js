"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo() {
    const userNameInput = document.querySelector("#username");
    let userName = userNameInput?.value;
    console.log("userNameInput", userNameInput.value);
    const emailInput = document.querySelector("#email");
    console.log("emailnput", emailInput.value);
    let email = emailInput?.value;
    const ageInput = document.querySelector("#age");
    console.log("ageInput", ageInput.value);
    let age = ageInput?.value;
}
//# sourceMappingURL=input.js.map