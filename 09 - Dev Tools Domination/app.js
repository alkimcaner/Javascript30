const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("hi");

// Interpolated
console.log("hi %s", "👋");

// Styled
console.log("%c hi ", "background-color: red; font-size: 18px;");

// warning!
console.warn("warning");


// Error :|
console.error("Something went wrong");

// Info
console.info("some info");

// Testing
console.assert(3 === 1, "Wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("Hey");
console.count("Hi");
console.count("Hey");
console.count("Hi");
console.count("Hey");
console.count("Hi");
console.count("Hey");

// timing
console.time('fetching data');
fetch('https://api.github.com/users/fl4wn')
    .then(data => data.json())
    .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});

//table
console.table(dogs);