const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//const encodedUrl = argv.direccion;

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp)
        clima.getClima(resp.lat, resp.lng)
            .then(res => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            });
            
            
        }).catch(error => {
            console.log(error)
        });
        
        */

const getInfo = async(direccion) => {
    try {
        let place = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(place.lat, place.lng);
        return `El clima de ${ direccion } es de ${ temperatura }`;
    } catch (error) {
        return `No se pudo determinar la temperatura de ${ direccion }`
    }



}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp)
    })
    .catch(error => {
        console.log(error)
    });