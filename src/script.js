let arrNames = [];
let txtDisplayName = document.getElementById("txtDisplayName");
let txtName1 = document.getElementById("txtName1");
let found = 0;
let txtSearch1 = document.getElementById("txtSearch1");
let text = "";
let submitName = () => {
  arrNames.push(txtName1.value);
  txtDisplayName = arrNames.toString();
};

let showList = () => {
  document.getElementById("p1").innerHTML = arrNames.join("<br>").toString();
  document.getElementById("sort_button").classList.remove("invisible");
};

let searchList = () => {
  for (let j = 0; j < arrNames.length; j++) {
    if (txtSearch1.value == arrNames[j]) found += 1;
  }
  text = `name was found ${found} ${found === 1 ? "time" : "times"} `;
  document.getElementById("p2").innerHTML = text;
  found = 0;
  //console.log(text);
};
