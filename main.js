const menue = {
    courses: {
        appetizers: [], 
        mains: [], 
        desserts: []
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName, 
            price: dishPrice
        };
        return menue.courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
        const dishes = menue.courses[courseName]
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex]
    },
    generateRandomMeal() {
        const appetizer = menue.getRandomDishFromCourse('appetizers')
        const main = menue.getRandomDishFromCourse('mains')
        const dessert = menue.getRandomDishFromCourse('desserts')
        const totalPrice = appetizer.price + main.price + dessert.price; 

        return `Appetizer: ${appetizer.name} Main: ${main.name} Dessert: ${dessert.name} Total Price: ${totalPrice}`
    }
};

menue.addDishToCourse('appetizers', 'Tuna Crudo', 18)
menue.addDishToCourse('appetizers', 'Baby Gem Lettuces', 12.90)
menue.addDishToCourse('appetizers', 'Country Pate', 16)
//console.log(menue.courses.appetizers)
menue.addDishToCourse('mains', 'Sauteed Snapper', 27)
menue.addDishToCourse('mains', 'Roasted Chicken', 28)
menue.addDishToCourse('mains', 'Cast Iron Skirt Steak', 32)
//console.log(menue.courses.mains)
menue.addDishToCourse('desserts', 'Rice Pudding', 12)
menue.addDishToCourse('desserts', 'Chocolate Tarte', 12)
menue.addDishToCourse('desserts', 'Sticky Toffee Pudding', 12)
//console.log(menue.courses.desserts)
menue.generateRandomMeal()

console.log(menue.generateRandomMeal())

