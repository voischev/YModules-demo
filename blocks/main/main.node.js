modules.require(
['character', 'gamelogic'],
function(Character, Game) {

    var config = {
        player : Character.create('Добрыня Никитич', 5),
        enemy : Character.create('Змей Горыныч', 6)
    };

    console.info(
        'Бой персонажей %s [%d уровня] и %s [%d уровня]',
        config.player.name, config.player.lvl, config.enemy.name, config.enemy.lvl
    );

    console.log(Game(config));

});
