const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    /*parse the data captured in the res variable using the .json(). Hint: Don’t forget to use the await keyword*/
    const images = await res.json();
    console.log(images);
};

getImage();