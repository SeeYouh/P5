function randomNumber() {
    return Math.random()*10;
}

function gramArticle() {
    if (numberArticle <= 1) {
        `${price} article`
    } else {
        `${price} articles`
    }
}
/* function() {
    "0" === this.value && (this.value = "1"), f("button[data-quantity]", this.form).attr("data-quantity", this.value)
  }
 */

addButton.addEventListener('click', () => {
     let numberArticle = inputArticle.value;
     let price = priceArticle * numberArticle;
     
     totalArticle.innerText = gramArticle;
     priceTotal.innerText = `${price}€`;
 })

 console.log(addButton);