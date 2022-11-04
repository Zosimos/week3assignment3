function calculator(){
    console.log("Calculating ...");
    //your code should be here
    let num1 = prompt("First Number");
    let num2 = prompt("Second Number")
    console.log(num1);
    console.log(num2);
    let mult = (num1 * num2);
    let divi = (num1 / num2);
    let minus = (num1 - num2);
    let add = Number(num1) + Number(num2);
    console.log(mult, divi, minus, add);
    document.write(`
        <p class="display"> Addition: ${add} </p>
        <p class="display"> Subtraction: ${minus} </p>
        <p class="display"> Multiplication: ${mult} </p>
        <p class="display"> Division: ${divi} </p>
        `)
}