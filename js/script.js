const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    /*parse the data captured in the res variable using the .json(). Hint: Don’t forget to use the await keyword*/
    const images = await res.json();
    selectRandomImage(images);
};

const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    /*console.log(randomIndex);*/
    const randomImage = images[randomIndex];
    /***why isn't it randomIndex(images?***/
   // console.log(randomImage);
    displayImage(randomImage);
};

/***Display the Image***/
const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

//Add a Click Event
button.addEventListener("click", function () {
    getImage();
});