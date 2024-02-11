// The Forcast today is 293 kelvin (K)
const kelvin = 293

//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
let celsius = kelvin - 273
console.log(`The temperature is ${celsius} degrees Celsius.`)

//This is the conversion formula from celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32

//To get an integer number/ Not a decimal we used math.floor
fahrenheit = Math.floor(celsius * (9/5) + 32)
//We used interpolation to concatenate the variable fahrenheit into a string
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//Let's convert to Newton Scale
let Newton = celsius * (33/100)
Newton = Math.floor(celsius * (33/100))
console.log(`The Tempreture is ${Newton} degrees Newton.`)
