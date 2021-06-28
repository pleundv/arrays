// while loop: Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
// Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
const myColors = ['yellow', 'blue', 'red', 'orange'];

let i = 0
while (i < myColors.length) {
    console.log(myColors[i]);
    i++;

}
// for loop 

for (let i = 0; i < myColors.length; i++) {
    console.log(myColors[i]);
}

// nieuwe manier array methods voorbeeld
//const array1 = ['a', 'b', 'c'];
//array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"



myColors.forEach(element => console.log(element));

// objects en dan loops 
const myColors1 = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
};

for (x in myColors1) {
    console.log(myColors1[x]);
}
