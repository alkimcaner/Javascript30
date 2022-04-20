const searchInput = document.querySelector("#searchInput");
const results = document.querySelector(".results");
const cities = [];

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
fetch(endpoint)
    .then(res=>res.json())
    .then(data=>{
        cities.push(...data);
    });

searchInput.addEventListener("keyup", function() {
    results.innerHTML = "";
    let filtered = cities.filter(e=>{
        return e.city.toLowerCase().includes(this.value.toLowerCase()) || e.state.toLowerCase().includes(this.value.toLowerCase());
    }).slice(0, 30);

    filtered.forEach(element => {
        const place = document.createElement('li');
        results.appendChild(place);
        place.textContent = `${element.city}, ${element.state}`;
        
        const population = document.createElement('p');
        place.appendChild(population);
        population.textContent = element.population;
    });
});