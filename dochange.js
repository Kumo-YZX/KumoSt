'use strict';

document.body.style.backgroundColor = '#FFFFEE';

// 增加行距, 不然塞不下
var layers = document.getElementsByClassName('layer2');

for (var layerIndex = 0; layerIndex < layers.length; layerIndex = layerIndex + 1) {
    layers[layerIndex].style.height = 360;
}

// 在文章下面增加应援信息
var articleList = document.getElementsByClassName('col-md-4');

for (var articleIndex = 0; articleIndex < articleList.length; articleIndex = articleIndex + 1) {
    // console.log(articleIndex);
    var text = document.createTextNode('守護者:fromnrttolax 應援人氣:998🔥🔥🔥');
    var divnode = document.createElement('div');
    divnode.appendChild(text);
    divnode.setAttribute('class', 'b-title');
    var anode = document.createElement('a');
    anode.appendChild(divnode);
    anode.setAttribute('href', 'https://test.smartsignature.io/user/207');
    articleList[articleIndex].children[0].appendChild(anode);
}
