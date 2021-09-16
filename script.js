const switcher = document.getElementById('switcher');
const switchBtn = document.getElementById("btn");
const display = document.getElementById('display');

switcher.addEventListener('click', () => {
  if(document.body.className === "theme-theme1"){
    document.body.className = "theme-theme2";
    switchBtn.style.alignSelf = "center";
  }
  else if(document.body.className === "theme-theme2"){
    document.body.className = "theme-theme3";
    switchBtn.style.alignSelf = "flex-end";
  }
  else{
    document.body.className = "theme-theme1";
    switchBtn.style.alignSelf = "flex-start";
  }
});


function output(bool, id){

  if(bool){
    display.innerText = display.innerText.toString() + id.toString();
  }else{
    if(display.innerText === ""){
      alert("Output display is empty!");
      return;
    }else if(id === "delete"){
      display.innerText = display.innerText.slice(0, display.innerText.length - 1);
    }else if(id === "reset"){
      display.innerText = "";
    }else if(id === "equal"){
      display.innerText = eval(display.innerText);
    }
  }
}
