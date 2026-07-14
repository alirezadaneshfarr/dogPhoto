const btn = document.getElementById("btn");
const imageBox = document.getElementById("imageBox");

let currentImage = "";

async function getDog() {
  if (currentImage === "") {
    imageBox.innerHTML = '<div class="message">Loading...</div>';
  }
  try {
    const response = await fetch("https://dog.ceo/dog-api/");

    if (!response.ok) {
      throw new Error("Request Failed");
    }

    const data = await response.json();

    currentImage = data.message;

    imageBox.innerHTML = `<img src="${currentImage}" alt="dog">`;
  } catch (error) {
    if (currentImage === "") {
      imageBox.innerHTML = '<div class="message">Error loading image!</div>';
    } else {
      alert("Error loading new image!");
    }
  }
}

btn.addEventListener("click", getDog);

// https://publicapis.io/random-dog-animals-api
