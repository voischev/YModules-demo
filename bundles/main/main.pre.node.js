function dropRequireCache(requireFunc, filename) {
    var module = requireFunc.cache[filename];
    if (module) {
        if (module.parent) {
            if (module.parent.children) {
                var moduleIndex = module.parent.children.indexOf(module);
                if (moduleIndex !== -1) {
                    module.parent.children.splice(moduleIndex, 1);
                }
            }
            delete module.parent;
        }
        delete module.children;
        delete requireFunc.cache[filename];
    }
};
dropRequireCache(require, require.resolve("../../blocks/main/main.node.js"));
require("../../blocks/main/main.node.js")
dropRequireCache(require, require.resolve("../../blocks/character/character.node.js"));
require("../../blocks/character/character.node.js")
dropRequireCache(require, require.resolve("../../blocks/gamelogic/gamelogic.node.js"));
require("../../blocks/gamelogic/gamelogic.node.js")
dropRequireCache(require, require.resolve("../../blocks/takedamage/takedamage.node.js"));
require("../../blocks/takedamage/takedamage.node.js")
dropRequireCache(require, require.resolve("../../blocks/rolldice/rolldice.node.js"));
require("../../blocks/rolldice/rolldice.node.js")