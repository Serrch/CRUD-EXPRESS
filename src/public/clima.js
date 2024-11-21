let navClima = document.getElementById('setClima');

// Función para obtener la API key desde el servidor
async function getApiKey() {
    try {
        const res = await fetch('/api-key'); // Ruta en el servidor
        if (res.ok) {
            const data = await res.json();
            return data.apiKey; 
        } else {
            console.error('Error al obtener la API key');
            return null;
        }
    } catch (error) {
        console.error('Error al conectarse al servidor:', error);
        return null;
    }
}

// Función para obtener los datos del clima
async function dataCiudad(nombre, apiKey) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=${apiKey}`;
    try {
        const res = await fetch(apiURL);

        if (res.ok) {
            const data = await res.json();
            const nombre = data.name;
            const temperatura = (data.main.temp - 273.15).toFixed(2);
           

            return { nombre, temperatura }; 
        } else {
            console.log(`No se encontró la ciudad ${nombre}`);
            return null;
        }
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
        return null;
    }
}

async function setCiudad() {
    const apiKey = await getApiKey(); // Obtener la API key desde el servidor
    if (!apiKey) {
        console.error('No se pudo obtener la API key');
        return;
    }

    const data = await dataCiudad('Hermosillo', apiKey);
    if (data) {
        navClima.innerHTML = `Temperatura de hoy:<strong> ${data.temperatura}° </strong>`;
    } else {
        navClima.innerHTML = 'No se pudo obtener la temperatura.';
    }
}

setCiudad();
