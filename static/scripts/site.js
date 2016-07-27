require.config({
    baseUrl: 'SITEURL/static'.replace('SITEURL', siteUrl),
    shim : {
        bootstrap: {deps:['jquery']},
        //tablesorter: {deps: ['jquery']},
        //stickykit: {deps: ['jquery']},
        //kinetic: {deps: ['jquery']},
        //sexyTables: {deps: ['kinetic']},
        censusForm: {deps: ['bootstrap']}
    },
    paths: {
        app: 'static/scripts/site/main',
        //domReady: 'bower_components/domReady/domReady',
        jquery: 'bower_components/jquery/dist/jquery.min',
        //tablesorter: 'vendor/jquery.tablesorter.min',
        //stickykit: 'vendor/jquery.sticky-kit.min',
        bootstrap: 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min',
        //chroma: 'vendor/chroma.min',
        //lodash: 'vendor/lodash.compat.min',
        //table: 'scripts/site/table',
        //place: 'scripts/site/place',
        //ui: 'scripts/site/ui',
        //kinetic: 'vendor/jquery.kinetic.min',
        //sexyTables: 'vendor/sexytables-1.0.min',
        censusForm: 'static/scripts/form'
    }
});

requirejs(['app']);
