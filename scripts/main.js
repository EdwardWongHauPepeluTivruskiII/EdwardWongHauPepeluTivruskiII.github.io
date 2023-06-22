let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/DSC02196.jpg') {
      myImage.setAttribute('src', 'images/SZR04224.jpg');
    } else {
      myImage.setAttribute('src', 'images/DSC02196.jpg');
    }
}
