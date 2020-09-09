
    class Cameras {
    constructor(image, title, summary, price) {
        this.image = image;
        this.title = title;
        this.summary = summary;
        this.price = price;
    }
}

let listCameras = new Cameras (`${camera.imageUrl}`,`${camera.name}`, `${camera.description}`, `${camera.price}`);

let test2 = new Cameras ("image1", "titre1", "description1", '100.00€');

console.log(listCameras);
console.log(test2);