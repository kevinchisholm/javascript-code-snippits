var uniqueNum = new Date().getTime();
var cssURL = 'style.css?ver=' + uniqueNum;
var cssElement=document.createElement('link')
cssElement.setAttribute('rel','stylesheet')
cssElement.setAttribute('type','text/css')
cssElement.setAttribute('href', cssURL);
document.getElementsByTagName("head")[0].appendChild(cssElement);