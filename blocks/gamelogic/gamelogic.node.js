modules.define(
    'gamelogic',
    ['takedamage'],
    function(provide, takeDamage) {

        function logTemplate(name, damage, hp) {
            return 'Персонажу «' + name + '» нанеcли урон в размере ' + damage + '. Жизней осталось ' + hp;
        }

        function printBattleLog(damage, character) {
            var name = character.name;
            var newHp = character.hp;
            var message = logTemplate(name, damage, newHp);
            console.log(message);
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
                var damagePlayerToEnemy = takeDamage(player, enemy);
                var damageEnemyToPlayer = takeDamage(enemy, player);
                printBattleLog(damagePlayerToEnemy, enemy);
                printBattleLog(damageEnemyToPlayer, player);

                round++;
            }
            while (( player.hp <= 0 || enemy.hp <= 0) ? printWinner(player, enemy) : true);
        }

        provide(gameLogic);
    });
