

// return the string
function nameReturn(): string {
    return "jawad"
}


// if function not return any thing 
function returnNothing(): void {
    console.log("jawad is here")
}


//  if we are use the if else then need to return more than one value
function returnMultipleValues(): string | number | boolean {
    let name = "jawad"
    let age = 20
    if (name === "jawad") {
        return name
    } else if (age > 18)
        return age
    else
        return false
}