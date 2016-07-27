define(['table', 'place', 'ui', 'domReady', 'censusForm'], function(table, place, ui, domReady, censusForm) {
    domReady(function() {
        place.init();
        table.init();
        ui.init();
    });
});
