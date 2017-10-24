// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F16

// Tracery by Kate Compton
// https://github.com/galaxykate/tracery

var grammar;

//

// Here is the grammar
var data = {
  "start": ["#[hero:#character#][group:#people#][herofirst:#firstname#][herolast:#lastname#]story#"],
  // "startheadline": ["#[hero:#character#][group:#people#][herofirst:#firstname#][herolast:#lastname#]headline#"],
  // "headline": ["#adj.capitalize# #hero# #verb# #adj# #group#"],
  "story": ["#adj.capitalize# #hero# #verb# #adj# #group#. Yesterday, local #hero#, #herofirst# #herolast#, made a group of #number# #group# #happy# when she saved the day with her #amazing# actions. This is the most recent in a string of #amazing# deeds by #herolast#, a well known #skills#. To thank her, the #group# are giving #herolast# a #big# #prize#."],
  "character": ["puppy", "grandmother", "toddler", "firefighter", "baby", "doctor"],
  "adj": ['amazing', 'jolly', 'nice', "friendly", 'happy', 'heroic', 'silly', 'joyful', 'excited'],
  "verb": ["rescues", "saves", "helps", "gives everything to", "donates to", "laughs with",
          "cooks dinner for"],
  "people": ['children', 'puppies', 'kittens', 'babies'],
  "firstname": ["Suzy", "Lucy", "Samantha", "Harriet", "Eliza", "Viola"],
  "lastname": ["Sunshine", "Smiles", "Heart", "Love", "Kind"],
  "number": ["7", "300", "26", "82", "3,000", "1,000,000"],
  "happy": ["elated", "joyous", "super duper happy", "smile from ear to ear", "do a happy dance",
            "jump for joy"],
  "amazing": ["incredible", "amazing", "unforgettable", "impressive"],
  "skills": ["Grammy award winner", "NBA MVP", "championship pie baker", "mountain climber",
            "professional bull rider", "Nobel Prize winner"],
  "big": ["enormous", "gigantic", "oversized", "humongous"],
  "prize": ["hug", "trophy", "pizza", "teddy bear", "cake"],

}

function setup() {
  noCanvas();
  // Make the grammar
  grammar = tracery.createGrammar(data);

  // A button to generate a new sentence
  var button = select('#generate');
  button.mousePressed(generate);

  // A button to clear everything
  var clear = select('#clear');
  clear.mousePressed(clearAll);
}

// Remove everything
function clearAll() {
  var elements = selectAll('.text');
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

function generate() {
  // var expansionheadline = grammar.flatten('#startheadline#');
  // var head = createP(expansionheadline);

  var expansion = grammar.flatten('#start#');
  var par = createP(expansion);

  // var r = floor(random(100, 255));
  // var g = floor(random(150, 255));
  // var b = floor(random(200, 255));
  // par.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  par.class('text');
  // head.class('header');
}
