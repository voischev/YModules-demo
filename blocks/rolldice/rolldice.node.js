/* global modules:false */

/**
 * @module rolldice
 */

modules.define(
    'rolldice',
    function(provide) {

provide(function(sides) {
    return Math.floor(Math.random() * sides) + 1;
});

});
