// Scooter constructor function
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Driver constructor function
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // PickupLocation constructor function
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
// create a new Scooter object
const myScooter = new Scooter(2022, "red", "Model A");

// create a new Driver object
const myDriver = new Driver("John Doe", 30, 5);

// create a new PickupLocation object
const myLocation = new PickupLocation("123 Main St", "New York");
  