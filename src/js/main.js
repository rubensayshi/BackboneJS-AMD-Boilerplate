(function() {
    "use strict";
    
    var libsPath = '../../libs/js/'; //libsPath relative to 'basePath'
    
    require.config({
        paths : {
            jquery           : libsPath + 'jquery',
            jqueryLoader     : libsPath + 'jquery-loader',
            underscore       : libsPath + 'underscore',
            underscoreLoader : libsPath + 'underscore-loader',
            backbone         : libsPath + 'backbone',
            backboneLoader   : libsPath + 'backbone-loader'
        },
        baseUrl : 'src/js',
        urlArgs : "bust=" + (new Date()).getTime()
    });
    
    require(['application'],
        function(App) {
            App.initialize();
        }
    );
})();
