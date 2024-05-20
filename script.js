function changeText() {
  let elementH2 = document.getElementById("myHeading");
  elementH2.innerHTML = "Hello JavaScript InnerHTML!";
}

function greeting() {
    let elementH2 = document.getElementById("myHeading1");
    elementH2.innerHTML = "Alright, mate?";
  }

function addBgColorLeft() {
  document.getElementById("left").classList.toggle("bg-green-400");
};

function changeBtnColor() {
  document.getElementById("btn").classList.toggle("bg-pink-400");
};

function addBgColorRight() {
  document.getElementById("right").classList.toggle("bg-blue-400");
};

function changeBtnColor2() {
  document.getElementById("btn2").classList.toggle("bg-yellow-200");
};