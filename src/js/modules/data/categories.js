import { Category } from '../classes/category';

export const categories = {
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
