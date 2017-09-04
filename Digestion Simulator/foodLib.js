var Fruit = ["None","Apple","Banana","Cantaloupe","Cherry","Grape","Grapefruit","Honeydew","Orange","Peach","Pear","Watermelon"];

var Vegetable = ["None","Broccoli","Cauliflower", "Tomato", "Lettuces", "Cucumber", "Celery", "Red pepper(sweet)" , "Green pepper(hot)", "Carrots", "Beets", "Parsnips", "Turnips", "Spinach", "Kale", "String beans", "Zucchini"];

var Starch = ["None", "Butternut squashes", "Chestnuts", "Corn", "Jerusalem artichokes", "Potatoes", "Sweet potatoes", "Yam"];

var AnimalProtein = ["None", "Egg yolk","The whole egg","Chicken(breast)","Chicken(drumstick)","Turkey","Beef","Lamb","Pork"];

var Seafood = ["None", "Salmon","Herring","Trout","Tuna","Cod","Flounder","Jelly fish(dried and salted)","Sea cucumber","Lobster","Scallop","Abalone","Kelp","Clam","Sardine(canned in oil)","Whelk","Mussel","Cockle","Butterfish"];

var Dairy = ["None", "Skimmed milk","Semi-skimmed milk","Whole milk","Cheese","Whole milk mozzarella cheese","Parmesan hard cheese"];

var Grain = ["None", "Brown rice","Millet","Buckwheat","Maize"];

var Bean = ["None", "Lentils","Chickpeas","Peas","Beans","Soybeans"];

var Nut = ["None", "Sunflower seeds","Sesame seeds","Pumpkin seeds","Almonds","Hazelnuts","Peanuts","Pecans","Filberts","Cashews"];

var Bread = ["None","Italian bread","Wheat bread","White wheat bread","Whole-wheat bread","Oatmeal bread"];

var stomachTime = {
	fruit : [0,40,25,30,40,30,30,30,30,40,40,20],
	vegetable : [0,45,45,35,35,35,35,35,35,50,50,50,50,40,40,45,45],
	starch : [0,60,60,60,60,60,60,60],
  animalProtein: [0,30,45,2*60,2*60,2.25*60,4*60,4*60,5*60],
  seafood: [0,52,52,52,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
  dairy: [0,1.5*60,1.75*60,2*60,1.5*60,2*60,4.5*60],
  grain: [0,1.5*60,1.5*60,1.5*60,1.5*60],
  bean: [0,1.5*60,1.5*60,1.5*60,1.5*60,2*60],
  nut: [0,2*60,2*60,2*60,2.75*60,2.75*60,2.75*60,2.75*60,2.75*60,2.75*60],
  bread: [0,1.5*60,1.5*60,1.5*60,1.5*60,1.5*60]
};

var fruitNut = new Map([
  ['Apple',     ['Fruit',.26,.17,13.81,52,85.56, 182, '']],
  ['Banana',    ['Fruit',1.09,.33,22.84,89,74.91, 118, '']],
  ['Cantaloupe',['Fruit',.84,.19,8.16,34,90.15, 552, '']],
  ['Cherry',    ['Fruit',1.06,.2,16.01,63,82.25, 154, 'cup']],
  ['Grape',     ['Fruit',.72,.16,18.10,69,80.54, 151, 'cup']],
  ['Grapefruit',['Fruit',.88,.1,9.09,37,89.58, 230, 'cup']],
  ['Honeydew',  ['Fruit',.54,.14,9.09,36,89.82, 1280, '']],
  ['Orange',    ['Fruit',.94,.12,11.75,47,86.75, 151, '']],
  ['Peach',     ['Fruit',.91,.25,9.54,39,88.87, 150, '']],
  ['Pear',      ['Fruit',.36,.14,15.23,57,83.96, 178, '']],
  ['Watermelon',['Fruit',.61,.15,7.55,30,91.45, 4518, '']]
]);

var vegetableNut = new Map([
  ['Broccoli',    ['Vegetable',2.82,.37,6.64,34,89.3, 91, 'cup']],
  ['Cauliflower', ['Vegetable',1.92,.28,4.97,25,92.07, 588, '']],
  ['Tomato',      ['Vegetable',.88,.2,3.89,18,94.52, 123, '']],
  ['Lettuces',    ['Vegetable',.9,.14,2.97,14,95.64, 360, '']],
  ['Cucumber',    ['Vegetable',.65,.11,3.63,15,95.23, 301, '']],
  ['Celery',      ['Vegetable',.69,.17,2.97,16,95.43, 40, '']],
  ['Red pepper(sweet)',  ['Vegetable',.99,.30,6.03,31,92.21, 119, '']],
  ['Green pepper(hot)',['Vegetable',2,.2,9.46,40,87.74, 45, '']],
  ['Carrots',     ['Vegetable',.93,.24,9.58,41,88.29, 61, '']],
  ['Beets',       ['Vegetable',1.61,.17,9.56,43,87.58, 82, '']],
  ['Parsnips',    ['Vegetable',1.2,.3,17.99,75,79.53, 133, 'cup']],
  ['Turnips',     ['Vegetable',.9,.1,6,43,28,91.87, 122, '']],
  ['Spinach',     ['Vegetable',2.86,.39,3.63,23,91.4, 30, 'cup']],
  ['Kale',        ['Vegetable',4.28,.93,8.75,49,84.04, 16, 'cup']],
  ['String beans',['Vegetable',1.83,.22,6.97,31,90.32, 240, 'cup']],
  ['Zucchini',    ['Vegetable',1.21,.32,3.11,17,94.79, 196, '']]
]);

var starchNut = new Map([
  ['Butternut squashes',  ['Starch',1,.1,11.69,45,86.41, 140, 'cup']],
  ['Chestnuts',           ['Starch',4.2,1.11,49.07,224,43.95, 1, 'g']],
  ['Corn',                ['Starch',3.27,1.35,18.74,86,76.05, 102, '']],
  ['Jerusalem artichokes',['Starch',2,.01,17.44,73,78.01, 150, 'cup']],
  ['Potatoes',            ['Starch',2.05,.09,17.49,77,79.25, 213, '']],
  ['Sweet potatoes',      ['Starch',2.49,.51,8.82,42,86.81, 35, 'cup']],
  ['Yam',                 ['Starch',1.53,.17,27.88,118,69.6, 150, 'cup']]
]);

var animalProteinNut = new Map([
  ['Egg yolk',          ['AnimalProtein',15.86,26.54,3.59,322,52.31, 17, '']],
  ['The whole egg',     ['AnimalProtein',12.56,9.51,.72,143,76.15, 50, '']],
  ['Chicken(breast)',   ['AnimalProtein',20.85,9.25,0,172,69.46, 21, 'slice']],
  ['Chicken(drumstick)',['AnimalProtein',18.08,9.2,.11,161,72.46, 21, 'slice']],
  ['Turkey',            ['AnimalProtein',22.64,1.93,.14,112,75.37, 16, 'slice']],
  ['Beef',              ['AnimalProtein',14.35,30,0,332,54.3, 13.8, 'slice']],
  ['Lamb',              ['AnimalProtein',16.88,21.59,0,267,60.7, 28.35, 'piece']],
  ['Pork',              ['AnimalProtein',17.43,18.87,0,245,62.47, 26, 'slice']]
]);

var seafoodNut = new Map([
  ['Salmon',        ['Seafood',19.84,6.34,0,142,68.5, 198, 'fillet']],
  ['Herring',       ['Seafood',17.96,9.04,0,158,72.05, 184, 'fillet']],
  ['Trout',         ['Seafood',20.48,3.46,0,119,71.87, 159, 'fillet']],
  ['Tuna',          ['Seafood',23.33,4.9,0,144,68.09, 198, 'fillet']],
  ['Cod',           ['Seafood',17.81,.67,0,82,81.22, 231, 'fillet']],
  ['Flounder',      ['Seafood',12.41,1.93,0,70,84.63, 163, 'fillet']],
  ['Jelly fish(dried and salted)', ['Seafood',5.5,1.4,0,36,68, 58, 'cup']],
  ['Sea cucumber',  ['Seafood',13,.4,0,56,80.7, 1, 'g']],
  ['Lobster',       ['Seafood',16.52,.75,0,77,80.95, 150, '']],
  ['Scallop',       ['Seafood',12.06,.49,3.18,69,82.53, 15, '']],
  ['Abalone',       ['Seafood',17.1,.76,6.01,105,74.56, 1, 'g']],
  ['Kelp',          ['Seafood',1.68,.56,9.57,43,81.58, 80, 'cup']],
  ['Clam',          ['Seafood',14.67,.96,3.57,86,78.98, 14.5, '']],
  ['Sardine(canned in oil)', ['Seafood',24.62,11.45,0,208,59.61, 92, 'can']],
  ['Whelk',         ['Seafood',23.84,.4,7.76,137,66, 1, 'g']],
  ['Mussel',        ['Seafood',11.9,2.24,3.69,86,80.58, 16, '']],
  ['Cockle',        ['Seafood',13.5,.7,4.7,79,78.8, 1, 'g']],
  ['Butterfish',    ['Seafood',17.28,8.02,0,146,74.13, 32, 'fillet']]
]);

var dairyNut = new Map([
  ['Skimmed milk',              ['Dairy',3.37,.08,4.96,34,90.84, 1, 'g']],
  ['Semi-skimmed milk',         ['Dairy',3.3,1.98,4.8,50,89.21, 1, 'g']],
  ['Whole milk',                ['Dairy',3.28,3.66,4.65,64,87.69, 1, 'g']],
  ['Cheese',                    ['Dairy',10.45,2.27,4.76,81,81.24, , '']],
  ['Whole milk mozzarella cheese', ['Dairy',22.17,22.35,2.19,300,50.01, 170, 'slice']],
  ['Parmesan hard cheese',         ['Dairy',35.75,25.83,3.22,392,209.16, 142, 'package']]
]);

var grainNut = new Map([
  ['Brown rice',  ['Grain',2.74,.97,25.58,123,70.27, 202, 'cup']],
  ['Millet',      ['Grain',3.51,1,23.67,119,71.41, 174, 'cup']],
  ['Buckwheat',   ['Grain',3.38,.62,19.94,92,75.63, 168, 'cup']],
  ['Maize',       ['Grain',7.8,3.4,83.3,371,3, 1, 'g']]
]);

var beanNut = new Map([
  ['Lentils',     ['Bean',8.96,.55,22.14,106,67.34, 77, 'cup']],
  ['Chickpeas',   ['Bean',20.47,6.04,62.95,378,7.68, 200, 'cup']],
  ['Peas',        ['Bean',2.8,.2,7.55,42,88.89, 63, 'cup']],
  ['Beans',       ['Bean',4.83,.58,4.72,33,89.3, 100, 'cup']],
  ['Soybeans',    ['Bean',12.35,6.4,11.05,141,68.6, 256, 'cup']]
]);

var nutNut = new Map([
  ['Sunflower seeds',['Nut',20.78,51.46,20,584,4.73, 140, 'cup']],
  ['Sesame seeds',   ['Nut',17.73,49.67,23.45,573,4.69, 144, 'cup']],
  ['Pumpkin seeds', ['Nut',30.23,49.05,10.71,559,5.23, 129, 'cup']],
  ['Almonds',       ['Nut',21.15,49.93,21.55,579,4.41, 143, 'cup']],
  ['Hazelnuts',     ['Nut',14.95,60.75,16.7,628,5.31, 135, 'cup']],
  ['Peanuts',       ['Nut',25.8,49.24,16.13,567,6.5, 137, 'cup']],
  ['Pecans',        ['Nut',9.17,71.97,13.86,691,3.52, 99, 'cup']],
  ['Filberts',      ['Nut',14.95,60.75,16.7,628,5.31, 135, 'cup']],
  ['Cashews',       ['Nut',18.22,43.85,30.19,553,5.2, 137, 'cup']]
]);

var breadNut = new Map([
  ['Italian bread',     ['Bread',8.8,3.5,50.1,271,35.7, 25, 'slice']],
  ['Wheat bread',       ['Bread',10.67,4.53,47.54,274,35.25, 29, 'slice']],
  ['White wheat bread', ['Bread',10.66,2.15,43.91,238,39.6, 28, 'slice']],
  ['Whole-wheat bread', ['Bread',12.45,3.5,42.71,252,39.01, 32, 'slice']],
  ['Oatmeal bread',     ['Bread',8.4,4.4,48.5,269,36.7, 27, 'slice']]
]);

var lib = creatFoodLib();

function loadData(){
  //fruits
  for(var i = 1; i<stomachTime.fruit.length ; i++)
    lib.addFood(getFood(Fruit[i],[stomachTime.fruit[i]],makeNutrientObj(fruitNut.get(Fruit[i])),'Solid'));
  //vegetables
  for(var j = 1; j<stomachTime.vegetable.length ; j++)
    lib.addFood(getFood(Vegetable[j],[stomachTime.vegetable[j]],makeNutrientObj(vegetableNut.get(Vegetable[j])),'Solid'));
  //starches
  for(var k = 1; k<stomachTime.starch.length ; k++){
    lib.addFood(getFood(Starch[k],[stomachTime.starch[k]],makeNutrientObj(starchNut.get(Starch[k])),'Solid'));
  }
  //animal protein food
  for(var l = 1; l<stomachTime.animalProtein.length ; l++){
    lib.addFood(getFood(AnimalProtein[l],[stomachTime.animalProtein[l]],makeNutrientObj(animalProteinNut.get(AnimalProtein[l])),'Solid'));
  }
  //seafoods
  for(var m = 1; m<stomachTime.seafood.length ; m++){
    lib.addFood(getFood(Seafood[m],[stomachTime.seafood[m]],makeNutrientObj(seafoodNut.get(Seafood[m])),'Solid'));
  }
  //dairy
  for(var n = 1; n<4 ; n++){
    lib.addFood(getFood(Dairy[n],[stomachTime.dairy[n]],makeNutrientObj(dairyNut.get(Dairy[n])),'Liquid'));
  }
  for(var n = 4; n<stomachTime.dairy.length ; n++){
    lib.addFood(getFood(Dairy[n],[stomachTime.dairy[n]],makeNutrientObj(dairyNut.get(Dairy[n])),'Solid'));
  }
  //grains
  for(var o = 1; o<stomachTime.grain.length ; o++){
    lib.addFood(getFood(Grain[o],[stomachTime.grain[o]],makeNutrientObj(grainNut.get(Grain[o])),'Solid'));
  }
  //beans
  for(var p = 1; p<stomachTime.bean.length ; p++){
    lib.addFood(getFood(Bean[p],[stomachTime.bean[p]],makeNutrientObj(beanNut.get(Bean[p])),'Solid'));
  }
  //nuts
  for(var q = 1; q<stomachTime.nut.length ; q++){
    lib.addFood(getFood(Nut[q],[stomachTime.nut[q]],makeNutrientObj(nutNut.get(Nut[q])),'Solid'));
  }

  for(var r = 1; r<stomachTime.bread.length ; r++){
    lib.addFood(getFood(Bread[r],[stomachTime.bread[r]],makeNutrientObj(breadNut.get(Bread[r])),'Solid'));
  }
}

function foodLib(props) {
    this.list = props.list||[];
}

foodLib.prototype.addFood = function (food) {
    this.list.push(food);
}

foodLib.prototype.searchFood = function(foodName){
  var aim = {};
  for(var n in this.list)
    if(this.list[n].name == foodName)
      aim = this.list[n];
  return aim;
}

function creatFoodLib(props) {
    return new foodLib(props||{});
}
