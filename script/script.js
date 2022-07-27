let keyAPI = `b1969e3ada45460f9f194947222507`;



function getLocation(){
    console.log(`getLocation() invoked`);
    let form = document.querySelector(`form.prompt`);
    return  form.city.value;
}

function fetchWeatherAPI() {

    function invokeLoader() {
        let main = document.querySelector(`div.main`);
        main.innerHTML = '';
        main.classList.add(`loader`);
    }

    async function getAPIData(cityName) {
        let url = `http://api.weatherapi.com/v1/current.json?key=${keyAPI}&q=${cityName}`;
        try {
            const response = await fetch(
                url, {
                    mode: `cors`,
                    method: `POST`,
                });
            return await response.json()
        } catch (err) {
            console.log(url);
            console.log(err);
        }
    }

    function writeToPage(val) {
        console.log(val);

    }

    function loadJSON() {
        let cityName = getLocation();
        invokeLoader();

        getAPIData(cityName).then(val => {
            writeToPage(val);
        })
    }

    loadJSON();


}
