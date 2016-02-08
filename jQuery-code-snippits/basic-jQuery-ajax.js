(function ($){
    var dependencies = [
        $.getScript('http://somedomain.com/someScript-1.js'),
        $.getScript('http://somedomain.com/someScript-2.js'),
        $.getScript('http://somedomain.com/someScript-3.js')
        //etc...
    ];

    /**
    * @desc When code depends on multiple async scripts
    */
    $.when.apply($, dependencies).done(function () {
        //do stuff that depends on someScript-1.js, someScript-2.js and someScript-3.js
    });
})(window.jQuery);