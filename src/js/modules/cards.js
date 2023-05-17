import { Category, Card } from './classes';

const cards = {
    cry: new Card('cry', '../assets/cards/actions_a/img/cry.jpg', 'плакать', '../assets/cards/actions_a/audio/cry.mp3'),
    dance: new Card('dance', '../assets/cards/actions_a/img/dance.jpg', 'танцевать', '../assets/cards/actions_a/audio/dance.mp3'),
    dive: new Card('dive', '../assets/cards/actions_a/img/dive.jpg', 'нырять', '../assets/cards/actions_a/audio/dive.mp3'),
    draw: new Card('draw', '../assets/cards/actions_a/img/draw.jpg', 'рисовать', '../assets/cards/actions_a/audio/draw.mp3'),
    fish: new Card('fish', '../assets/cards/actions_a/img/fish.jpg', 'ловить рыбу', '../assets/cards/actions_a/audio/fish.mp3'),
    fly: new Card('fly', '../assets/cards/actions_a/img/fly.jpg', 'летать', '../assets/cards/actions_a/audio/fly.mp3'),
    hug: new Card('hug', '../assets/cards/actions_a/img/hug.jpg', 'обнимать', '../assets/cards/actions_a/audio/hug.mp3'),
    jump: new Card('jump', '../assets/cards/actions_a/img/jump.jpg', 'прыгать', '../assets/cards/actions_a/audio/jump.mp3'),
    open: new Card('open', '../assets/cards/actions_b/img/open.jpg', 'открывать', '../assets/cards/actions_b/audio/open.mp3'),
    play: new Card('play', '../assets/cards/actions_b/img/play.jpg', 'играть', '../assets/cards/actions_b/audio/play.mp3'),
    point: new Card('point', '../assets/cards/actions_b/img/point.jpg', 'указывать', '../assets/cards/actions_b/audio/point.mp3'),
    ride: new Card('ride', '../assets/cards/actions_b/img/ride.jpg', 'ездить', '../assets/cards/actions_b/audio/ride.mp3'),
    run: new Card('run', '../assets/cards/actions_b/img/run.jpg', 'бегать', '../assets/cards/actions_b/audio/run.mp3'),
    sing: new Card('sing', '../assets/cards/actions_b/img/sing.jpg', 'петь', '../assets/cards/actions_b/audio/sing.mp3'),
    skip: new Card('skip', '../assets/cards/actions_b/img/skip.jpg', 'пропускать, прыгать', '../assets/cards/actions_b/audio/skip.mp3'),
    swim: new Card('swim', '../assets/cards/actions_b/img/swim.jpg', 'плавать', '../assets/cards/actions_b/audio/swim.mp3'),
    cat: new Card('cat', '../assets/cards/animals_a/img/cat.jpg', 'кот', '../assets/cards/animals_a/audio/cat.mp3'),
    chick: new Card('chick', '../assets/cards/animals_a/img/chick.jpg', 'цыплёнок', '../assets/cards/animals_a/audio/chick.mp3'),
    chicken: new Card('chicken', '../assets/cards/animals_a/img/chicken.jpg', 'курица', '../assets/cards/animals_a/audio/chicken.mp3'),
    dog: new Card('dog', '../assets/cards/animals_a/img/dog.jpg', 'собака', '../assets/cards/animals_a/audio/dog.mp3'),
    horse: new Card('horse', '../assets/cards/animals_a/img/horse.jpg', 'лошадь', '../assets/cards/animals_a/audio/horse.mp3'),
    pig: new Card('pig', '../assets/cards/animals_a/img/pig.jpg', 'свинья', '../assets/cards/animals_a/audio/pig.mp3'),
    rabbit: new Card('rabbit', '../assets/cards/animals_a/img/rabbit.jpg', 'кролик', '../assets/cards/animals_a/audio/rabbit.mp3'),
    sheep: new Card('sheep', '../assets/cards/animals_a/img/sheep.jpg', 'овца', '../assets/cards/animals_a/audio/sheep.mp3'),
    bird: new Card('bird', '../assets/cards/animals_b/img/bird.jpg', 'птица', '../assets/cards/animals_b/audio/bird.mp3'),
    fish_2: new Card('fish', '../assets/cards/animals_b/img/fish.jpg', 'рыба', '../assets/cards/animals_b/audio/fish.mp3'),
    frog: new Card('frog', '../assets/cards/animals_b/img/frog.jpg', 'жаба', '../assets/cards/animals_b/audio/frog.mp3'),
    giraffe: new Card('giraffe', '../assets/cards/animals_b/img/giraffe.jpg', 'жираф', '../assets/cards/animals_b/audio/giraffe.mp3'),
    lion: new Card('lion', '../assets/cards/animals_b/img/lion.jpg', 'лев', '../assets/cards/animals_b/audio/lion.mp3'),
    mouse: new Card('mouse', '../assets/cards/animals_b/img/mouse.jpg', 'мышь', '../assets/cards/animals_b/audio/mouse.mp3'),
    turtle: new Card('turtle', '../assets/cards/animals_b/img/turtle.jpg', 'черепаха', '../assets/cards/animals_b/audio/turtle.mp3'),
    dolphin: new Card('dolphin', '../assets/cards/animals_b/img/dolphin.jpg', 'дельфин', '../assets/cards/animals_b/audio/dolphin.mp3'),
    skirt: new Card('skirt', '../assets/cards/clothes/img/skirt.jpg', 'юбка', '../assets/cards/clothes/audio/skirt.mp3'),
    pants: new Card('pants', '../assets/cards/clothes/img/pants.jpg', 'брюки', '../assets/cards/clothes/audio/pants.mp3'),
    blouse: new Card('blouse', '../assets/cards/clothes/img/blouse.jpg', 'блузка', '../assets/cards/clothes/audio/blouse.mp3'),
    dress: new Card('dress', '../assets/cards/clothes/img/dress.jpg', 'платье', '../assets/cards/clothes/audio/dress.mp3'),
    boot: new Card('boot', '../assets/cards/clothes/img/boot.jpg', 'ботинок', '../assets/cards/clothes/audio/boot.mp3'),
    shirt: new Card('shirt', '../assets/cards/clothes/img/shirt.jpg', 'рубашка', '../assets/cards/clothes/audio/shirt.mp3'),
    coat: new Card('coat', '../assets/cards/clothes/img/coat.jpg', 'пальто', '../assets/cards/clothes/audio/coat.mp3'),
    shoe: new Card('shoe', '../assets/cards/clothes/img/shoe.jpg', 'туфли', '../assets/cards/clothes/audio/shoe.mp3'),
    sad: new Card('sad', '../assets/cards/emotions/img/sad.jpg', 'грустный', '../assets/cards/emotions/audio/sad.mp3'),
    angry: new Card('angry', '../assets/cards/emotions/img/angry.jpg', 'сердитый', '../assets/cards/emotions/audio/angry.mp3'),
    happy: new Card('happy', '../assets/cards/emotions/img/happy.jpg', 'счастливый', '../assets/cards/emotions/audio/happy.mp3'),
    tired: new Card('tired', '../assets/cards/emotions/img/tired.jpg', 'уставший', '../assets/cards/emotions/audio/tired.mp3'),
    surprised: new Card('surprised', '../assets/cards/emotions/img/surprised.jpg', 'удивлённый', '../assets/cards/emotions/audio/surprised.mp3'),
    scared: new Card('scared', '../assets/cards/emotions/img/scared.jpg', 'испуганный', '../assets/cards/emotions/audio/scared.mp3'),
    smile: new Card('smile', '../assets/cards/emotions/img/smile.jpg', 'улыбка', '../assets/cards/emotions/audio/smile.mp3'),
    laugh: new Card('laugh', '../assets/cards/emotions/img/laugh.jpg', 'смех', '../assets/cards/emotions/audio/laugh.mp3'),
    ball: new Card('ball', '../assets/cards/toys/img/ball.jpg', 'мяч', '../assets/cards/toys/audio/ball.mp3'),
    boat: new Card('boat', '../assets/cards/toys/img/boat.jpg', 'лодка', '../assets/cards/toys/audio/boat.mp3'),
    car: new Card('car', '../assets/cards/toys/img/car.jpg', 'машина', '../assets/cards/toys/audio/car.mp3'),
    doll: new Card('doll', '../assets/cards/toys/img/doll.jpg', 'кукла', '../assets/cards/toys/audio/doll.mp3'),
    drum: new Card('drum', '../assets/cards/toys/img/drum.jpg', 'барабан', '../assets/cards/toys/audio/drum.mp3'),
    pyramid: new Card('pyramid', '../assets/cards/toys/img/pyramid.jpg', 'пирамида', '../assets/cards/toys/audio/pyramid.mp3'),
    teddy_bear: new Card('teddy bear', '../assets/cards/toys/img/teddy-bear.jpg', 'плюшевый мишка', '../assets/cards/toys/audio/teddy-bear.mp3'),
    truck: new Card('truck', '../assets/cards/toys/img/truck.jpg', 'грузовик', '../assets/cards/toys/audio/truck.mp3'),
    cloud: new Card('cloud', '../assets/cards/weather/img/cloud.jpg', 'облако', '../assets/cards/weather/audio/cloud.mp3'),
    rain: new Card('rain', '../assets/cards/weather/img/rain.jpg', 'дождь', '../assets/cards/weather/audio/rain.mp3'),
    rainbow: new Card('rainbow', '../assets/cards/weather/img/rainbow.jpg', 'радуга', '../assets/cards/weather/audio/rainbow.mp3'),
    snow: new Card('snow', '../assets/cards/weather/img/snow.jpg', 'снег', '../assets/cards/weather/audio/snow.mp3'),
    storm: new Card('storm', '../assets/cards/weather/img/storm.jpg', 'шторм', '../assets/cards/weather/audio/storm.mp3'),
    sun: new Card('sun', '../assets/cards/weather/img/sun.jpg', 'солнце', '../assets/cards/weather/audio/sun.mp3'),
    thunder: new Card('thunder', '../assets/cards/weather/img/thunder.jpg', 'молния', '../assets/cards/weather/audio/thunder.mp3'),
    tornado: new Card('tornado', '../assets/cards/weather/img/tornado.jpg', 'торнадо', '../assets/cards/weather/audio/tornado.mp3')
};

const categories = {
    action_a: new Category('Actions (set A)', 'action_a', '../assets/cards/actions_a/img/hug.jpg', [
        'cry', 'dance', 'dive', 'draw', 'fish', 'fly', 'hug', 'jump'
    ]),
    action_b: new Category('Actions (set B)', 'action_b', '../assets/cards/actions_b/img/skip.jpg', [
        'open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim']),
    animals_a: new Category('Animals (set A)', 'animals_a', '../assets/cards/animals_a/img/rabbit.jpg', [
        'cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep']),
    animals_b: new Category('Animals (set B)', 'animals_b', '../assets/cards/animals_b/img/turtle.jpg', [
        'bird', 'fish_2', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin']),
    clothes: new Category('Clothes', 'clothes', '../assets/cards/clothes/img/coat.jpg', [
        'skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe']),
    emotions: new Category('Emotions', 'emotions', '../assets/cards/emotions/img/smile.jpg', [
        'sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh']),
    toys: new Category('Toys', 'toys', '../assets/cards/toys/img/teddy-bear.jpg', [
        'ball', 'boat', 'car', 'doll', 'drum', 'pyramid', 'teddy_bear', 'truck']),
    weather: new Category('Weather', 'weather', '../assets/cards/weather/img/thunder.jpg', [
        'cloud', 'rain', 'rainbow', 'snow', 'storm', 'sun', 'thunder', 'tornado'])
}

export { categories, cards };
