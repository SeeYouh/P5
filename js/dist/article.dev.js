"use strict";

var listCamera = document.getElementById('article-produit');
var url = "http://localhost:3000/api/cameras";
var title = document.getElementsByClassName("title");
var summarry = document.getElementsByClassName("summary");
var price = document.getElementsByClassName("price");
var add = document.getElementsByClassName("add");
getCamera(url).then(function (cameras) {
  cameras.forEach(function (cameras) {
    //Fixe le calcul à 2 décimales après la virgule
    var camPrice = Math.abs(cameras.price / 100).toFixed(2); //Créer les différents articles de caméra

    listCamera.innerHTML += "<div class=\"items\">\n                                    <figure><img src=\"".concat(cameras.imageUrl, "\" alt=\"\" /></figure>\n                                    <h1 class=\"title\"><a href=\"#\">").concat(cameras.name, "</a></h1>\n                                    <div class=\"summary\">").concat(cameras.description, "</div>\n                                    <div class=\"shopping\">\n                                        <div class=\"qty\">\n                                        <button class=\"signe\" onclick=\"").concat(btnMoins, "\">-</button>\n                                        <p id=\"number-article\">").concat(compteurClicks, "</p>\n                                        <button class=\"signe\" onclick=\"").concat(btnPlus, "\">+</button>                              \n                                        </div>\n                                        <div class=\"btn add\"><p>ajouter</p></div>\n                                        <h2 class=\"price\">").concat(camPrice, "\u20AC</h2>\n                                    </div>\n                                </div>");
  });
});
/* Compteur numérique */

var clicks = 1;
var compteurClicks = clicks;

function btnPlus() {
  clicks += 1;
  clicks = compteurClicks;
}

function btnMoins() {
  if (clicks < 1) {
    clicks = 1;
  } else {
    clicks -= 1;
    clicks = compteurClicks;
  }
} //Récupère les informations de l'api


function getCamera(url) {
  var result;
  return regeneratorRuntime.async(function getCamera$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          result = _context.sent;
          return _context.abrupt("return", result.json());

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}