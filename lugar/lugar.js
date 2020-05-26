//crear el axios
const axios = require('axios');

/** 
 * Status code of petition 
 * --------------------------
 * Status:
 * 200 = OK
 * 404 = NO Found url
 * 500 = Error del servidor
 * 
 * 
 * **/


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        //timeout: 1000,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "ce89b99465msh7903fe15565a620p179b68jsnc8b2dbd5a8e5",
            "useQueryString": true
        }
    });



    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}





module.exports = {
    getLugarLatLng
}