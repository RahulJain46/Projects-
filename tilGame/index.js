var score=0;
function submitTileDimension() {
    reset()
    window.numberOfRows = document.getElementById("row").value;
    window.numberOfColumn = document.getElementById("column").value;
    var numberOfRows=window.numberOfRows;
    var numberOfColumn= window.numberOfColumn;
    var titleContainer  = document.getElementById("tile-container")
    var width = 700;
    var height = 700;
    var tileCounter = 0;
    window.widthOfTile = width/numberOfRows;
    window.heightOfTile = height/numberOfColumn;
     var widthOfTile  =window.widthOfTile;
   var heightOfTile= window.heightOfTile

    for(var i = 0; i<numberOfColumn;i++){
        for(var j = 0; j<numberOfRows;j++){
            tileCounter++;
   var divElement = document.createElement("div");
    divElement.setAttribute("class","singleTitle");
    divElement.setAttribute("id",tileCounter);
    var plusoneelement = document.createElement('div');
    var minusoneelement = document.createElement('div');
    plusoneelement.setAttribute('class','plus-one');
    minusoneelement.setAttribute('class','minus-one');
    plusoneelement.innerHTML = '+1';
    minusoneelement.innerHTML = '-1';
    divElement.appendChild(plusoneelement);
    divElement.appendChild(minusoneelement);
   divElement.setAttribute("style","width:"+ (widthOfTile-"2")+"px;height:"+(heightOfTile-"2")+"px");
  //  divElement.style.background = "green";
   // divElement.style.border = "2px solid";
   
    titleContainer.appendChild(divElement);
    divElement.onclick = tileclick;
    }
}
window.randonNumber = generateRandomNumber(numberOfRows,numberOfColumn)
hightLightTile(window.randonNumber);
}

function reset(){
    var titleContainer  = document.getElementById("tile-container");
    titleContainer.innerHTML='';
}

function generateRandomNumber(rows,column){
    var totalTiles = rows*column;
    return randomNumber= Math.floor((Math.random() *totalTiles) +1 ) 
}

function hightLightTile(randonNumber){
    var tile = document.getElementById(randonNumber)
     tile.classList.add("hightLight");
}

function tileclick(event){
    if(event.target.id==randomNumber){
       score++;
       chooseRandonTiles(window.randomNumber);
    }
    else{
        score--;
    }
    var divElement = document.getElementById("score");
    divElement.setAttribute("class","score");
    divElement.innerHTML = score;
}

function chooseRandonTiles(id){
    var remvhlt= document.getElementById(id);
    remvhlt.classList.remove("hightLight");
    var randomNumber= generateRandomNumber(window.numberOfRows, window.numberOfColumn)
    hightLightTile(randomNumber);
}

function initializeClock(){
  var clock= document.getElementById("timer-container");
  var deadline= new Date(Date.parse(new Date())+6*1000);
  return time= getTimeRemaining(deadline);



}
function getTimeRemaining(deadline){
    var totalTime = Date.parse(deadline) - Date.parse(new Date());
    var seconds = Math.floor((totalTime/1000) % 60);
    var minutes =  Math.floor((totalTime/1000/60) % 60);
    return{
        "seconds":seconds,
        "minutes":minutes
    }
}
