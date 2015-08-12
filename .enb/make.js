var techs = {
        provide : require('enb/techs/file-provider'),
        bem : require('enb-bem-techs'),
        nodejs : require('enb-diverse-js/techs/node-js'),
        ym : require('enb-modules/techs/prepend-modules'),
        borschik : require('enb-borschik/techs/borschik')
    };

module.exports = function(config) {

    config.nodes(['bundles/*'], function(nodeConfig) {

        // Configure Levels
        nodeConfig.addTech([techs.bem.levels, { levels : [
            { path : 'blocks', check : true }
        ] }]);

        // NodeJs
        nodeConfig.addTechs([
            [techs.nodejs, { target : '?.pre.node.js' }],
            [techs.ym, { target : '?.node.js', source : '?.pre.node.js' }]
        ]);

        nodeConfig.addTargets([
            '?.node.js'
        ]);
    });

    /**
     * COMMON CONFIG
     */
    config.nodes(['bundles/*'], function(nodeConfig) {
        // Start file
        nodeConfig.addTech([techs.provide, { target : '?.bemdecl.js' }]);
        // Base techs
        nodeConfig.addTechs([
            [techs.bem.deps],
            [techs.bem.files]
        ]);
    });

    config.mode('development', function() {
        config.nodes(['bundles/*'], function(nodeConfig) {
            nodeConfig.addTechs([
                [techs.borschik, { source : '?.js', target : '_?.js', freeze : true, minify : false }]
            ]);
        });
    });

    config.mode('production', function() {
        config.nodes(['bundles/*'], function(nodeConfig) {
            nodeConfig.addTechs([
                [techs.borschik, { source : '?.js', target : '_?.js', freeze : true, minify : true }]
            ]);
        });
    });
};
