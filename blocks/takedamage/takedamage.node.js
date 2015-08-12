/*
    Модуль вычисляет колличество реального урона в зависимости от
    защиты обораняющегося и атаки атакующего.

    В расчете участвует результат подбрасывания кубика.
*/
modules.define(
    'takedamage',
    ['rolldice'],
    function(provide, rollDice) {
        // Вычисляем колличество сторон кубика в зависимости от уровня
        function calcSides(lvl) {
            return ( lvl > 5 ) ? 4 : 6;
        }

        function realDamage(base, sides) {

            var rdi = rollDice(sides); // бросаем кубик
            var halfSides = sides / 2; // Половина сторон
            var results;

            // Наносим критический урон если выпало самое большое значение кубика
            if( rdi <= halfSides ) results = parseInt(base / 2);
            if( rdi > halfSides ) results = base;
            if( rdi === sides ) results = parseInt(base * 2);

            return results;

        }

        /*
            att : Атака нападающего
            def : Защита обороняющегося
        */
        function calcBaseDamage(att, def) {
            var results = att - def;
            return (results <= 0) ? 0 : results;
        }

        function takeDamage(from, to) {
            var rd = realDamage(
                calcBaseDamage(from.att, to.def),
                calcSides(from.lvl)
            );
            // Изменяем колличесво жизней обороняющегося
            to.hp = (to.hp - rd >= 0) ? to.hp - rd : 0;
            return rd;
        }
        provide(takeDamage);
    });
