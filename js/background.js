const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);
document.body.style = `background-image:url(imgs/${chosenImage}); background-size:cover;`;