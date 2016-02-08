(function ($) {
    /**
    * @desc AJAX GET
    */
    $.ajax({
        type: 'GET',
        url : fullUrl,
        success : function (jsonData) {
            //handle success
        },
        error : function (error) {
            //handle error
        }
    });

    /**
    * @desc AJAX POST
    */
    $.ajax({
        type: 'POST',
        url : fullUrl,
        data: {},
        success : function (jsonData) {
            //handle success
        },
        error : function (error) {
            //handle error
        }
    });

})(window.jQuery);