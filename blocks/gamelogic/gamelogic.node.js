modules.define(
    'gamelogic',
    ['takedamage'],
    function(provide, takeDamage) {

        function printBattleLog(damage, character) {
            console.log(
                'Персонажу «%s» нанеcли урон в размере %d. Жизней осталось %d',
                character.name, damage, character.hp
            );
        }

        function printWinner(player, enemy) {
            if (player.hp <= 0 && enemy.hp <= 0) {
                console.info('Бой окончен, умерли оба противника');
            } else {
                if (player.hp <= 0) console.info(enemy.name + ' победил.');
                if (enemy.hp <= 0) console.info(player.name + ' победил.');
            }
        }

        function gameLogic(config) {
            var player = config.player;
            var enemy = config.enemy;
            var round = 1;

            do {
                console.warn('Раунд ' + round + ':');
                printBattleLog(takeDamage(player, enemy), enemy);
                printBattleLog(takeDamage(enemy, player), player);

                round++;
            }
            while (( player.hp <= 0 || enemy.hp <= 0) ? printWinner(player, enemy) : true);
        }

        provide(gameLogic);
    });
