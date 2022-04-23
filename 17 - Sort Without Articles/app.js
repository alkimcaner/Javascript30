const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const articles = ["An ", "A ", "The "];

const sortedBands = bands.sort((a, b) => {
  articles.forEach((e) => {
    a = a.includes(e) ? a.slice(e.length) : a;
    b = b.includes(e) ? b.slice(e.length) : b;
  });
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

const list = document.querySelector("#bands");

sortedBands.forEach((e) => {
  const band = document.createElement("li");
  list.appendChild(band);

  band.textContent = e;
});
