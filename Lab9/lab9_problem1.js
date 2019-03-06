window.onload = function(){

  function mouseOver(x){
    var span = document.createElement("span");
    var img  = document.createElement("img");
    var attr1 = document.createAttribute("class");
    var attr2 = document.createAttribute("src");
    var node = x.relatedTarget.parentNode.getElementsByClassName("Painting")[0]
    var paths = node.getAttribute("src").split("/");
    node.setAttribute("src", [ paths[0], paths[1], paths[3] ].join("/"));
    attr1.value = "big_img";
    attr2.value = [ paths[0], paths[1], paths[3] ].join("/");
    span.setAttributeNode(attr1);
    img.setAttributeNode(attr2);
    span.appendChild(img);
    //document.getElementsByClassName("big_img_cont")[0].appendChild(span);
  }

  function mouseOut(x) {
    var node = x.relatedTarget.parentNode.getElementsByClassName("Painting")[0]
    var paths = node.getAttribute("src").split("/");
    node.setAttribute("src", [ paths[0], paths[1], "thumbs", paths[2] ].join("/"));
    //y = document.getElementsByClassName("big_img");
    //document.getElementsByClassName("big_img_cont")[0].removeChild(y[0]);
  }

  var images = document.querySelectorAll("img");
  var elements = document.getElementsByClassName("Painting");
  for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("mouseover", mouseOver );
      elements[i].addEventListener("mouseout", mouseOut);
  }
}
