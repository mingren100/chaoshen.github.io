let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hui-logo.png'){
        myImage.setAttribute('src', 'images/cheng-logo.png');
    } else {
        myImage.setAttribute('src', 'images/hui-logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }