class Camera {
    constructor(data) {
        this.id = data.id; 
        this.description = data.description; 
        this.imageUrl = data.imageUrl;
        this.lenses = data.lenses;
        this.name = data.name; 
        this.price = data.price;
        this.prodPrice = Math.abs(this.price / 100).toFixed(2);
    }
    camera() {

        listCamera.innerHTML += `<div class="items">
                                    <figure><img src="${this.imageUrl}" alt="" /></figure>
                                    <h1 class="title"><a href="#">${this.name}</a></h1>
                                    <div class="summary">${this.description}</div>
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
                                        <h2 class="price">${this.prodPrice}€</h2>
                                    </div>
                                </div>`
        //console.log(this.imageUrl);
    }
}