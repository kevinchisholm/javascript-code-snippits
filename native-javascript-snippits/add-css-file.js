(function(){
    //create a unique number
    var uniqueNum = new Date().getTime(),
        //create the URL
        cssURL = 'style.css?ver=' + uniqueNum,
        //create the link element
        cssElement = document.createElement('link');

    //set the attributes on the link element
    cssElement.setAttribute('rel','stylesheet');
    cssElement.setAttribute('type','text/css');
    cssElement.setAttribute('href', cssURL);

    //inject the link element
    document.getElementsByTagName("head")[0].appendChild(cssElement);
})();