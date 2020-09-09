


/* API cameras */

async function getCameras(urlCameras) {
    let resultCamera = await fetch(urlCameras);
    return resultCamera.json();
};


/* 
//API meubles

async function getMeubles(urlMeubles) {
    let resultMeubles = await fetch(urlMeubles);
    return resultMeubles.json();
};


//API jouets

async function getJouets(urlJouets) {
    let resultJouets = await fetch(urlJouets);
    return resultJouets.json();
};
 */

