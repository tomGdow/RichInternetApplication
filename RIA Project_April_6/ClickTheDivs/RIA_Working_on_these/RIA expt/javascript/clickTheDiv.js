

for (var i=1;i<11;i++) {
var div = document.createElement("div");
div.setAttribute("id","d"+ i);
div.innerHTML = "<img src =\"./images/bonnie50.jpg\" alt = \"picture of cat\"/>";
document.getElementById('wrapper').appendChild(div);
}
