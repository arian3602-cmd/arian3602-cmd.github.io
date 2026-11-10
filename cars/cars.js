
 //define the actions of the Car object, method
function printCar()
{
    document.write("Brand: " + this.brand + "<br>");
    document.write("Model: " + this.model + "<br>");
    document.write("Year: " + this.year + "<br>");
    document.write("Color: " + this.color + "<br>");
    document.write("Price: $" + this.price + "<br><br>");
}

//define an object using constructor function
function Car(brand, model, year, color, price)
{
    //list of attributes for this object
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;

    //assign method to the car object
    this.printCar = printCar;
}

//create car objects
var car1 = new Car("Ford", "F-150", 2026, "Black", 32000);
var car2 = new Car("Chevrolet", "Silverado", 2025, "White", 40000);
var car3 = new Car("Toyota", "Camry", 2024, "Blue", 28000);
var car4 = new Car("Honda", "Civic", 2023, "Red", 25000);
var car5 = new Car("Dodge", "Charger", 2022, "Gray", 35000);

//create an array of 5 car objects
var carArray = [car1, car2, car3, car4, car5];

//display the car information using a loop
for (var counter = 0; counter < carArray.length; counter++)
{
    carArray[counter].printCar();
}
