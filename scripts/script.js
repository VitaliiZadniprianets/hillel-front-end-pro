window.onload = function() {
  const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const body = document.querySelector('.body');

  const image = document.createElement('img');

  const changeImage = () => {
    const randomImage = getRandomImage();
    image.src = `./images/${randomImage}`;
  };

  changeImage(); 

  body.prepend(image);

  setInterval(changeImage, 2000); 
};