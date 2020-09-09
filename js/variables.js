                        //APi

let urlCameras = "http://localhost:3000/api/cameras";
let urlGames = "http://localhost:3000/api/teddies";
let urlFurniture = "http://localhost:3000/api/furniture";

let listProduits = [urlCameras, urlGames, urlFurniture];
console.log(listProduits);

                    //LISTE ARTICLES

const listCamera = document.getElementById('article-produit');
const titleArticle = document.getElementsByClassName("title");
const summarryArticle = document.getElementsByClassName("summary");
const priceArticle = document.getElementsByClassName("price");
const url = listProduits[0];

const inputArticle = document.querySelector('#number-article');

                    //NOMBRE ARTICLES

const priceTotal = document.querySelector("#prix-total");
const addButton = document.querySelector("#add-button");
const totalArticle = document.querySelector("#total-article");

let prodPrice = Math.abs(urlCameras.price / 100).toFixed(2);


