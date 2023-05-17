import { Category, Card } from './classes';

const cards = {
    action_a: new Category('Actions (set A)', 'action_a', '../assets/cards/actions_a/img/hug.jpg', [
        new Card('cry', '../assets/cards/actions_a/img/cry.jpg', 'плакать', '../assets/Card/actions(a)/audio/cry.mp3'),
        new Card('dance', '../assets/cards/actions_a/img/dance.jpg', 'танцевать', '../assets/Card/actions_a/audio/dance.mp3'),
        new Card('dive', '../assets/cards/actions_a/img/dive.jpg', 'нырять', '../assets/Card/actions_a/audio/dive.mp3'),
        new Card('draw', '../assets/cards/actions_a/img/draw.jpg', 'рисовать', '../assets/Card/actions_a/audio/draw.mp3'),
        new Card('fish', '../assets/cards/actions_a/img/fish.jpg', 'ловить рыбу', '../assets/Card/actions_a/audio/fish.mp3'),
        new Card('fly', '../assets/cards/actions_a/img/fly.jpg', 'летать', '../assets/Card/actions_a/audio/fly.mp3'),
        new Card('hug', '../assets/cards/actions_a/img/hug.jpg', 'обнимать', '../assets/Card/actions_a/audio/hug.mp3'),
        new Card('jump', '../assets/cards/actions_a/img/jump.jpg', 'прыгать', '../assets/Card/actions_a/audio/jump.mp3')
    ]),

    action_b: new Category('Actions (set B)', 'action_b', '../assets/cards/actions_b/img/skip.jpg', [
        new Card('open', '../assets/cards/actions_b/img/open.jpg', 'открывать', '../assets/Card/actions_b/audio/open.mp3'),
        new Card('play', '../assets/cards/actions_b/img/play.jpg', 'играть', '../assets/Card/actions_b/audio/play.mp3'),
        new Card('point', '../assets/cards/actions_b/img/point.jpg', 'указывать', '../assets/Card/actions_b/audio/point.mp3'),
        new Card('ride', '../assets/cards/actions_b/img/ride.jpg', 'ездить', '../assets/Card/actions_b/audio/ride.mp3'),
        new Card('run', '../assets/cards/actions_b/img/run.jpg', 'бегать', '../assets/Card/actions_b/audio/run.mp3'),
        new Card('sing', '../assets/cards/actions_b/img/sing.jpg', 'петь', '../assets/Card/actions_b/audio/sing.mp3'),
        new Card('skip', '../assets/cards/actions_b/img/skip.jpg', 'пропускать, прыгать', '../assets/Card/actions_b/audio/skip.mp3'),
        new Card('swim', '../assets/cards/actions_b/img/swim.jpg', 'плавать', '../assets/Card/actions_b/audio/swim.mp3')
    ]),

    animals_a: new Category('Animals (set A)', 'animals_a', '../assets/cards/animals_a/img/rabbit.jpg', [
        new Card('cat', '../assets/cards/animals_a/img/cat.jpg', 'кот', '../assets/Card/animals_a/audio/cat.mp3'),
        new Card('chick', '../assets/cards/animals_a/img/chick.jpg', 'цыплёнок', '../assets/Card/animals_a/audio/chick.mp3'),
        new Card('chicken', '../assets/cards/animals_a/img/chicken.jpg', 'курица', '../assets/Card/animals_a/audio/chicken.mp3'),
        new Card('dog', '../assets/cards/animals_a/img/dog.jpg', 'собака', '../assets/Card/animals_a/audio/dog.mp3'),
        new Card('horse', '../assets/cards/animals_a/img/horse.jpg', 'лошадь', '../assets/Card/animals_a/audio/horse.mp3'),
        new Card('pig', '../assets/cards/animals_a/img/pig.jpg', 'свинья', '../assets/Card/animals_a/audio/pig.mp3'),
        new Card('rabbit', '../assets/cards/animals_a/img/rabbit.jpg', 'кролик', '../assets/Card/animals_a/audio/rabbit.mp3'),
        new Card('sheep', '../assets/cards/animals_a/img/sheep.jpg', 'овца', '../assets/Card/animals_a/audio/sheep.mp3')
    ]),

    animals_b: new Category('Animals (set B)', 'animals_b', '../assets/cards/animals_b/img/turtle.jpg', [
        new Card('bird', '../assets/cards/animals_b/img/bird.jpg', 'птица', '../assets/Card/animals_b/audio/bird.mp3'),
        new Card('fish', '../assets/cards/animals_b/img/fish.jpg', 'рыба', '../assets/Card/animals_b/audio/fish.mp3'),
        new Card('frog', '../assets/cards/animals_b/img/frog.jpg', 'жаба', '../assets/Card/animals_b/audio/frog.mp3'),
        new Card('giraffe', '../assets/cards/animals_b/img/giraffe.jpg', 'жирафа', '../assets/Card/animals_b/audio/giraffe.mp3'),
        new Card('lion', '../assets/cards/animals_b/img/lion.jpg', 'лев', '../assets/Card/animals_b/audio/lion.mp3'),
        new Card('mouse', '../assets/cards/animals_b/img/mouse.jpg', 'мышь', '../assets/Card/animals_b/audio/mouse.mp3'),
        new Card('turtle', '../assets/cards/animals_b/img/turtle.jpg', 'черепаха', '../assets/Card/animals_b/audio/turtle.mp3'),
        new Card('dolphin', '../assets/cards/animals_b/img/dolphin.jpg', 'дельфин', '../assets/Card/animals_b/audio/dolphin.mp3')
    ]),
    clothes: new Category('Clothes', 'clothes', '../assets/cards/clothes/img/coat.jpg', [
        new Card('skirt', '../assets/cards/clothes/img/skirt.jpg', 'юбка', '../assets/Card/clothes/audio/skirt.mp3'),
        new Card('pants', '../assets/cards/clothes/img/pants.jpg', 'брюки', '../assets/Card/clothes/audio/pants.mp3'),
        new Card('blouse', '../assets/cards/clothes/img/blouse.jpg', 'блузка', '../assets/Card/clothes/audio/blouse.mp3'),
        new Card('dress', '../assets/cards/clothes/img/dress.jpg', 'платье', '../assets/Card/clothes/audio/dress.mp3'),
        new Card('boot', '../assets/cards/clothes/img/boot.jpg', 'ботинок', '../assets/Card/clothes/audio/boot.mp3'),
        new Card('shirt', '../assets/cards/clothes/img/shirt.jpg', 'рубашка', '../assets/Card/clothes/audio/shirt.mp3'),
        new Card('coat', '../assets/cards/clothes/img/coat.jpg', 'пальто', '../assets/Card/clothes/audio/coat.mp3'),
        new Card('shoe', '../assets/cards/clothes/img/shoe.jpg', 'туфли', '../assets/Card/clothes/audio/shoe.mp3')
    ]),
    emotions: new Category('Emotions', 'emotions', '../assets/cards/emotions/img/smile.jpg', [
        new Card('sad', '../assets/cards/emotions/img/sad.jpg', 'грустный', '../assets/Card/emotions/audio/sad.mp3'),
        new Card('angry', '../assets/cards/emotions/img/angry.jpg', 'сердитый', '../assets/Card/emotions/audio/sad.mp3'),
        new Card('happy', '../assets/cards/emotions/img/happy.jpg', 'счастливый', '../assets/Card/emotions/audio/happy.mp3'),
        new Card('tired', '../assets/cards/emotions/img/tired.jpg', 'уставший', '../assets/Card/emotions/audio/tired.mp3'),
        new Card('surprised', '../assets/cards/emotions/img/surprised.jpg', 'удивлённый', '../assets/Card/emotions/audio/surprised.mp3'),
        new Card('scared', '../assets/cards/emotions/img/scared.jpg', 'испуганный', '../assets/Card/emotions/audio/scared.mp3'),
        new Card('smile', '../assets/cards/emotions/img/smile.jpg', 'улыбка', '../assets/Card/emotions/audio/smile.mp3'),
        new Card('laugh', '../assets/cards/emotions/img/laugh.jpg', 'смех', '../assets/Card/emotions/audio/laugh.mp3')
    ]),
    toys: new Category('Toys', 'toys', '../assets/cards/toys/img/teddy-bear.jpg', [
        new Card('ball', '../assets/cards/toys/img/ball.jpg', 'мяч', '../assets/Card/toys/audio/ball.mp3'),
        new Card('boat', '../assets/cards/toys/img/boat.jpg', 'лодка', '../assets/Card/toys/audio/boat.mp3'),
        new Card('car', '../assets/cards/toys/img/car.jpg', 'машина', '../assets/Card/toys/audio/car.mp3'),
        new Card('doll', '../assets/cards/toys/img/doll.jpg', 'кукла', '../assets/Card/toys/audio/doll.mp3'),
        new Card('drum', '../assets/cards/toys/img/drum.jpg', 'барабан', '../assets/Card/toys/audio/drum.mp3'),
        new Card('pyramid', '../assets/cards/toys/img/pyramid.jpg', 'пирамида', '../assets/Card/toys/audio/pyramid.mp3'),
        new Card('teddy bear', '../assets/cards/toys/img/teddy-bear.jpg', 'плюшевый мишка', '../assets/Card/toys/audio/teddy-bear.mp3'),
        new Card('truck', '../assets/cards/toys/img/truck.jpg', 'грузовик', '../assets/Card/toys/audio/truck.mp3')
    ]),
    weather: new Category('Weather', 'weather', '../assets/cards/weather/img/thunder.jpg', [
        new Card('cloud', '../assets/cards/weather/img/cloud.jpg', 'облако', '../assets/Card/weather/audio/cloud.mp3'),
        new Card('rain', '../assets/cards/weather/img/rain.jpg', 'дождь', '../assets/Card/weather/audio/rain.mp3'),
        new Card('rainbow', '../assets/cards/weather/img/rainbow.jpg', 'радуга', '../assets/Card/weather/audio/rainbow.mp3'),
        new Card('snow', '../assets/cards/weather/img/snow.jpg', 'снег', '../assets/Card/weather/audio/snow.mp3'),
        new Card('storm', '../assets/cards/weather/img/storm.jpg', 'шторм', '../assets/Card/weather/audio/storm.mp3'),
        new Card('sun', '../assets/cards/weather/img/sun.jpg', 'солнце', '../assets/Card/weather/audio/sun.mp3'),
        new Card('thunder', '../assets/cards/weather/img/thunder.jpg', 'молния', '../assets/Card/weather/audio/thunder.mp3'),
        new Card('tornado', '../assets/cards/weather/img/tornado.jpg', 'торнадо', '../assets/Card/weather/audio/tornado.mp3')
    ])
}

export default cards;
