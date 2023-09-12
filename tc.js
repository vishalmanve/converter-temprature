function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const kelvinOutput = document.getElementById("kelvin");
    
    if (celsiusInput.value === "") {
    alert("Please enter a valid temperature in Celsius.");
    return;
    }
    
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
    
    fahrenheitOutput.textContent = fahrenheit.toFixed(2);
    kelvinOutput.textContent = kelvin.toFixed(2);
    }