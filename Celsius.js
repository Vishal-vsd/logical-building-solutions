function celsiusToFahrenheit(temp){
    if(!Number.isFinite(temp)){
        throw new Error("temp must be a number")
    }
    const fahrenheit = (temp * 9/5) + 32;

    console.log(Math.round((fahrenheit).toFixed(1)))
}

celsiusToFahrenheit(27)