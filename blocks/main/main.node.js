modules.require(
['character', 'gamelogic'],
function(Character, Game) {

    var player = Character.create('Добрыня Никитич', 5);
    var enemy = Character.create('Змей Горыныч', 6);

    var config = {
        player : player,
        enemy : enemy
    };

    console.info(
        'Бой персонажей %s [%d уровня] и %s [%d уровня]',
        player.name, player.lvl, enemy.name, enemy.lvl
    );

    console.log(Game(config));

});
