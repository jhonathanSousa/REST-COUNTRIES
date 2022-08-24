// SELECT FILTER
const filter = document.querySelector('#filter');

filter.addEventListener('change', () => {
  // API FILTER
  const endpointFilter = `https://restcountries.com/v2/region/${filter.value}`;

  const loadFilter = async () => {
    try {
        const response = await fetch(endpointFilter);
        countries = await response.json();
        displayNations(countries);
    } catch (err) {
        console.error(err);
    }
};

  loadFilter();

});





