// SELECT UL
const cardNations = document.querySelector('#cardNations');
// SELECT SEARCH
const searchCountries = document.querySelector('#search');
// API URL
const endpoint = `https://restcountries.com/v2/all`;
let countries = [];

// SEARCH COUNTRIES
searchCountries.addEventListener('keyup', (e) => {
    const searchNation = e.target.value.toLowerCase();

    const filteredCountries = countries.filter((nation) => {
        return (
            nation.name.toLowerCase().includes(searchNation) ||
            nation.region.toLowerCase().includes(searchNation)
        );
    });

    displayNations(filteredCountries);
});

// API
const loadNations = async () => {
    try {
        const response = await fetch(endpoint);
        countries = await response.json();
        displayNations(countries);
    } catch (err) {
        console.error(err);
    }
};

// SHOW COUNTRIES
const displayNations = (date) => {
  const htmlCard = date
      .map((nation) => {
        return `
        <li>
          <img src="${nation.flags.png}" alt="">
            <div>
            <h2>${nation.name}</h2>
            <p><span>Population:</span> ${nation.population}</p>
            <p><span>Region:</span> ${nation.region}</p>
            <p><span>Capital:</span> ${nation.capital}</p>
          </div>
        </li>
      `;
    }).join('');
    
  cardNations.innerHTML = htmlCard;
};

loadNations();

