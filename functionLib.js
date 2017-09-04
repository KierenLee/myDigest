
function getFood(name,time,nutrient,property) {
  var food = {};
  food.name = name||'Default name';
  food.time = time||[60];
  food.nutrient = nutrient||{};
  food.property = property||'Default property'
  return food;
}

function makeNutrientObj(Arr){
	var nutrient = {};
  nutrient.type = Arr[0]||'Default type';
	nutrient.protein = Arr[1]||0;
	nutrient.fat = Arr[2]||0;
	nutrient.carbs = Arr[3]||0;
	nutrient.calories = Arr[4]||0;
  nutrient.water = Arr[5]||0;
  nutrient.quantity = Arr[6]||0;
  nutrient.tip = Arr[7]||'';
	return nutrient;
}

function getProteinDigestibility(food){
  if(food.name == 'Potatoes'||food.name == 'Sweet potatoes')
    return .74;
  else if(food.name == 'Corn')
    return .66;
  else if(food.name == 'Brown rice')
    return .82;
  else{
    switch(food.type){
      case 'Dairy':
        return .975;
        break;
      case 'AnimalProtein':
        return .93;
        break;
      case 'Bread':
        return .79;
        break;
    }
  }
  return 1;
}

function getStandardRatio(name){
  var ratios = new Map([['Protein',0],['Carbs',0],['Fat',0]]);
  switch(name){
    case 'Bodybuilding':
      ratios.set('Protein',.3);
      ratios.set('Carbs',.5);
      ratios.set('Fat',.2);
      break;
    case 'Maintenance':
      ratios.set('Protein',.3);
      ratios.set('Carbs',.4);
      ratios.set('Fat',.3);
      break;
    case 'Fat Loss':
      ratios.set('Protein',.45);
      ratios.set('Carbs',.2);
      ratios.set('Fat',.35);
      break;
  }
  return ratios;
  }


function calculatePro(nutrient){
  var numbers = [nutrient.get('gotProtein'),point2_round(wholeNut.get('Fat')*.95),nutrient.get('Carbs')];
  var all = numbers[0]+numbers[1]+numbers[2];
  return [point2_round(numbers[0]/all),point2_round(numbers[1]/all),point2_round(numbers[2]/all)];
}

function changeView(order,position,speed){
  var xUnit,yUnit,zUnit;
  var aim = [];
  var near = [0,0,0];
  var far = [310,2679,6596];
  var spe = [];
  position.round ();

  if(order == 'near'){
    aim = near;
  }else if(order == 'far'){
    aim = far;
  }
  if(arguments.length == 2){
    spe = [90,90,90];
  }else{
    spe = speed;
  }
  xUnit = compareNum(position.x,aim[0]);
  yUnit = compareNum(position.y,aim[1]);
  zUnit = compareNum(position.z,aim[2]);
  if(Math.abs(position.x-aim[0])<1){
    xUnit = 0;
  }
  if(Math.abs(position.y-aim[1])<1){
    yUnit = 0;
  }
  if(Math.abs(position.z-aim[2])<1){
    zUnit = 0;
  }
  return [position.x-xUnit*spe[0],position.y-yUnit*spe[1],position.z-zUnit*spe[2]];
}

function getStep(order,position,speed){
  var xDv,yDv,zDv;
  var near = [0, 0, 0];
  var far = [310, 2679, 6596];
  var aim = [];
  position.round ();
  if(order == 'near'){
    aim = near;
  }else if(order == 'far'){
    aim = far;
  }
    xDv = Math.abs(position.x-aim[0]);
    yDv = Math.abs(position.y-aim[1]);
    zDv = Math.abs(position.z-aim[2]);
  if(Math.abs(position.x)<=1)
    xDv=0;
  if(Math.abs(position.y)<=1)
    yDv=0;
  if(Math.abs(position.z)<=1)
    zDv=0;

    return [xDv/speed,yDv/speed,zDv/speed];
}

function checkBased(factor,food){
    var result = 'none';
    switch(factor){
        case 'Glycemic load':
            if(food.nutrient.type=='Grain'||food.name.indexOf('Wheat')>-1||food.name.indexOf('wheat')>-1||food.name.indexOf('milk')>-1)
                result = 'diseases of insulin resistance';
            break;
        case 'Macronutrient composition':
            var nutrient = food;
            var ratios = calEnergyPro(nutrient);
            var analysisR = [analysis([.12,.18],ratios[0]),analysis([.25,.33],ratios[1]),analysis([.52,.63],ratios[2])];
            if(analysisR[0]+analysisR[1]+analysisR[2]==0){
                if(analysisR[0]!=0||analysisR[1]!=0||analysisR[2]!=0)
                    result = analysisR.indexOf(-1)+';'+analysisR.indexOf(1);
            }else if(analysisR[0]+analysisR[1]+analysisR[2]==-1){
                result = analysisR.indexOf(1)+':more';
            }else if(analysisR[0]+analysisR[1]+analysisR[2]==1){
                result = analysisR.indexOf(-1)+':less';
            }
            break;
        case 'Micro-nutrient density':
            if(food.nutrient.type=='Grain'||food.name.indexOf('Whole milk')>-1||food.nutrient.type=='Nut')
                result = 'deficiency diseases';
            break;
        case 'Acid-base balance':
            if(food.nutrient.type=='AnimalProtein'||food.nutrient.type=='Seafood'||food.nutrient.type=='Dairy'||food.nutrient.type=='Grain')
                result = 'net acid load';
            break;
        case 'Sodium-potassium ratio':
            if(food.nutrient.type!='Fruit'||food.nutrient.type!='Vegetable')
                result = 'the inversion of ratio';
            break;
        case 'Fiber content':
            if(food.nutrient.type!='Fruit'||food.nutrient.type!='Vegetable')
                result = 'low in fiber';
            break;
    }
    return result;
}

function calEnergyPro(nutrient,order) {
    var numbers = [nutrient[0]*4.7,nutrient[1]*9.44,nutrient[2]*3.94];
    var all = numbers[0]+numbers[1]+numbers[2];
    if(arguments.length == 1)
      return [point2_round(numbers[0]/all),point2_round(numbers[1]/all),point2_round(numbers[2]/all)];
    else if(order == "all")
      return numbers;
}

function analysis(range,ratio) {
    if(range[0]<=ratio&&range[1]>=ratio)
        return 0;
    else if(range[0]>ratio)
        return -1;
    else if(range[1]<ratio)
        return 1;
}

function count(){
  var n = 0
  return function(show){
    if(arguments.length==0)
      return ++n;
    else
      if(show=='show')
        return n;
      else if(show=='clean'){
        n = 0;
        return n; 
      }
  }
}

function getChart(arr){
  var doughnutData = [
        {
          value: point2_round(arr[0]*100),
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Protein(%)"
        },
        {
          value: point2_round(arr[1]*100),
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Fat(%)"
        },
        {
          value: point2_round(arr[2]*100),
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: "Carbs(%)"
        }
  ];
  return doughnutData;
}

function deleteChart(chart){
  for(var i = 0 ; i<3 ; i++)
    chart.removeData(0);
}

function space(num){
  var space = '';
  for(var i = 0 ; i<num ; i++)
    space = space + '&nbsp;'
  return space;
}

function getNumberBetween(num1,num2){
  return num1+Math.round((num2-num1)*Math.random());
}

function compareNum(num1,num2){
  if(num1>num2)
    return 1;
  else if(num1<num2)
    return -1;
  else
    return 0;
}

function sortNum(num1,num2,rest){
  var arr = [num1,num2,rest];
  var oldArr = arr.slice();
  arr.sort(function (a,b) {
      return a-b;
  });
  return [oldArr.indexOf(arr[0]),oldArr.indexOf(arr[1]),oldArr.indexOf(arr[2])];
}

function correctPoint(num){
  if(num<=0)
    num = '0.000';
  else if((num*1000)%1000==0)
    num = num+'.000';
  else if((num*1000)%100==0)
    num = num+'00';
  else if((num*1000)%10==0)
    num = num +'0';
  return num;
}

function point2_round(num){
  return Math.round(num*100)/100;
}

function point3_round(num){
  return Math.round(num*1000)/1000;
}