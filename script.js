// Array to store image file paths
const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

function showImage(imageIndex) {
    // Get the image element
    const displayedImage = document.getElementById("displayed-image");

    // Update the image source
    displayedImage.src = images[imageIndex - 1];

    // Get all buttons and remove the selected class
    const buttons = document.querySelectorAll(".image-button");
    buttons.forEach(button => button.classList.remove("selected"));

    // Add the selected class to the clicked button
    document.getElementById(`button${imageIndex}`).classList.add("selected");
}
