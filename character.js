modules.define(
    'character',
    function(provide) {
        provide({
            create : function (name, lvl) {
                return {
                    name : name,
                    lvl : (lvl <= 10) ? lvl : 10,
                    att : this.calcAttack(lvl),
                    def : this.calcDefense(lvl),
                    hp : this.calcHealsPoint(lvl)
                };
            },

            calcAttack : function (lvl) {
                return lvl * 6;
            },

            calcDefense : function (lvl) {
                return parseInt(lvl * 1.4);
            },

            calcHealsPoint : function (lvl) {
                return lvl * 20;
            }
        });
    });