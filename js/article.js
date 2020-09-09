
/* 
Aller chercher information produit
Transformer information au format json
Intégrer images >>> titre >>> résumé >>>> quantité >>>> prix

*/
/*
class Article {
    constructor(img, title, summarry, price, add, url) {
        this.img = img;
        this.title = title;
        this.summarry = summarry;
        this.price = price;
        this.add = add;
        this.url = url;
    }
   

    get listProduits() {
        return this.getArticle();
    }

     getArticle() {
        return getCameras(this.url).then((cameras) => {
            cameras.forEach(camera => {

        //Fixe le calcul à 2 décimales après la virgule
        let prodPrice = Math.abs(camera.price / 100).toFixed(2);
        //Créer les différents articles de caméra
        listCamera.innerHTML += `<div class="items">
                                    <figure><img src="${camera.imageUrl}" alt="" /></figure>
                                    <h1 class="title"><a href="#">${camera.name}</a></h1>
                                    <div class="summary">${camera.description}</div>
                                    <div class="shopping">
                                        <div class="qty">

                                            <input type="button" 
                                                class="signe" 
                                                value="-">

                                            <input type="number" 
                                                name="quantity" 
                                                id="number-article" 
                                                class="number-article" 
                                                inputmode="numeric" 
                                                step="1" 
                                                min="0" 
                                                max="9999" 
                                                value="1">
                                                
                                            <input type="button" 
                                                class="signe" 
                                                value="+">

                                        </div>
                                        <button type="submit" id="add-button" class="btn">ajouter</button>
                                        <h2 class="price">${prodPrice}€</h2>
                                    </div>
                                </div>`
            })
        })
    }
}
 */
 let lienCameras = "http://localhost:3000/api/cameras";

fetch(lienCameras).then((response) => 
    response.json().then((data) => {
        for(const came of data) {
            const camer = new Camera(came);
            camer.camera();
    
        }
})
)



 
/* getCameras(urlCameras).then((cameras) => {
    cameras.forEach(camera => {

        //Fixe le calcul à 2 décimales après la virgule
        let prodPrice = Math.abs(camera.price / 100).toFixed(2);
        //Créer les différents articles de caméra
        listCamera.innerHTML += `<div class="items">
                                    <figure><img src="${camera.imageUrl}" alt="" /></figure>
                                    <h1 class="title"><a href="#">${camera.name}</a></h1>
                                    <div class="summary">${camera.description}</div>
                                    <div class="shopping">
                                        <div class="qty">

                                            <input type="button" 
                                                class="signe" 
                                                value="-">

                                            <input type="number" 
                                                name="quantity" 
                                                id="number-article" 
                                                class="number-article" 
                                                inputmode="numeric" 
                                                step="1" 
                                                min="0" 
                                                max="9999" 
                                                value="1">
                                                
                                            <input type="button" 
                                                class="signe" 
                                                value="+">

                                        </div>
                                        <label for="bouton-ajout" class="addbutton-label">Ajout de ${camera.name} au panier</label>
                                        <button name="bouton-ajout" type="submit" id="add-button" class="btn add"><p>ajouter</p></button>
                                        <h2 class="price">${prodPrice}€</h2>
                                    </div>
                                </div>`
      });
}); */

/* getProduit(urlGames).then((games) => {
    games.forEach(games => {

        //Fixe le calcul à 2 décimales après la virgule
        let gamePrice = Math.abs(games.price / 100).toFixed(2);
        //Créer les différents articles de caméra
        listGames.innerHTML += `<div class="items">
                                    <figure><img src="${games.imageUrl}" alt="" /></figure>
                                    <h1 class="title"><a href="#">${games.name}</a></h1>
                                    <div class="summary">${games.description}</div>
                                    <div class="shopping">
                                        <div class="qty">
                                        <input type="number" name="quantity" id="number-article" min="0" max="9999" value="1">
                                        </div>
                                        <div class="btn add"><p>ajouter</p></div>
                                        <h2 class="price">${gamePrice}€</h2>
                                    </div>
                                </div>`
      });
});

getProduit(urlFurniture).then((furnitures) => {
    furnitures.forEach(furniture => {

        //Fixe le calcul à 2 décimales après la virgule
        let FurnPrice = Math.abs(furniture.price / 100).toFixed(2);
        //Créer les différents articles de caméra
        listFurniture.innerHTML += `<div class="items">
                                    <figure><img src="${furniture.imageUrl}" alt="" /></figure>
                                    <h1 class="title"><a href="#">${furniture.name}</a></h1>
                                    <div class="summary">${furniture.description}</div>
                                    <div class="shopping">
                                        <div class="qty">
                                        <input type="number" name="quantity" id="number-article" class="number-article" min="1" max="9999" value="1">
                                        </div>
                                        <div class="btn add"><p>ajouter</p></div>
                                        <h2 class="price">${FurnPrice}€</h2>
                                    </div>
                                </div>`
      });
});
 */

/* getCamera(url).then((cameras) => {
    cameras.forEach(cameras => {

      //Fixe le calcul à 2 décimales après la virgule
      let camPrice = Math.abs(cameras.price / 100).toFixed(2);
      //Créer les différents articles de caméra
      listCamera.innerHTML += `<div class="items">
                                  <figure><img src="${cameras.imageUrl}" alt="" /></figure>
                                  <h1 class="title"><a href="#">${cameras.name}</a></h1>
                                  <div class="summary">${cameras.description}</div>
                                  <div class="shopping">
                                      <div class="qty">
                                      <button class="signe" onclick="${btnMoins}">-</button>
                                      <p id="number-article">${compteurClicks}</p>
                                      <button class="signe" onclick="${btnPlus}">+</button>                              
                                      </div>
                                      <div class="btn add"><p>ajouter</p></div>
                                      <h2 class="price">${camPrice}€</h2>
                                  </div>
                              </div>`
    });
});
 */

/* Compteur numérique */

/* let compteurClicks = document.querySelector(`${compteurClicks}`);
let clicks = 1;

function btnMoins() {   
    
    if (clicks < 1) {
        clicks = 1
    } else {
        clicks -= 1;
        clicks = compteurClicks;
        }
}

function btnPlus() {

    if (clicks < 1) {
        clicks = 1
    } else {
        clicks -= 1;
        clicks = compteurClicks;
        }
}


btnMoins();
btnPlus();
 */
/* let clicks = 1;
let compteurClicks = clicks

function btnPlus() {
    clicks += 1;
    clicks = compteurClicks;
}

function btnMoins() {

    if (clicks < 1) {
        clicks = 1
    } else {
        clicks -= 1;
        clicks = compteurClicks;
        }
}
 */

