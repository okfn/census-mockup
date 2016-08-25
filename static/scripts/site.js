require.config({
    baseUrl: 'SITEURL'.replace('SITEURL', siteUrl),
    shim : {
        bootstrap: {deps:['jquery']},
        tablesorter: {deps: ['jquery']},
        stickykit: {deps: ['jquery']},
        kinetic: {deps: ['jquery']},
        sexyTables: {deps: ['kinetic']},
        censusForm: {deps: ['bootstrap']},
        dotDotDot: {deps: ['jquery']},
        appList: {deps: ['dotDotDot']}
    },
    paths: {
        app: 'static/scripts/site/main',
        domReady: 'bower_components/domReady/domReady',
        jquery: 'bower_components/jquery/dist/jquery.min',
        tablesorter: 'bower_components/tablesorter/jquery.tablesorter.min',
        stickykit: 'bower_components/sticky-kit/jquery.sticky-kit.min',
        bootstrap: 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min',
        chroma: 'bower_components/chroma-js/chroma.min',
        lodash: 'bower_components/dist/lodash.compat.min',
        table: 'static/scripts/site/table',
        place: 'static/scripts/site/place',
        ui: 'static/scripts/site/ui',
        kinetic: 'static/scripts/vendor/jquery.kinetic.min',
        sexyTables: 'static/scripts/vendor/sexytables-1.0.min',
        censusForm: 'static/scripts/form',
        dotDotDot: 'bower_components/jQuery.dotdotdot/src/jquery.dotdotdot.min',
        appList: 'static/scripts/applist',
    }
});

requirejs(['app']);
