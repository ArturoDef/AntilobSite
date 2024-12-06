
let raceListTable = null;
let resultsTable = document.getElementById('resultsBody');
let totalPoints= 0;
let totalDistance = 0;
let points  = 0;
createStyles();
fetch('/antilob/api/memberResults/'+memberId,{})
    .then((res) => {
        return res.json();
    })
    .then(res => {
        totalDistance = 0;
        totalPoints = 0;
        res.forEach(result => {
            points = result.points.toFixed(3);
            tr=createLine(result);
            resultsTable.appendChild(tr);
            totalDistance =  totalDistance +parseFloat(result.race.distance);
            totalPoints += parseFloat(points.valueOf());
        });
        createTotals();
    });



function createTotals() {
    tr = document.createElement("tr");
    newTD("Total",tr,"total")
    newTD(" ",tr,"total")
    newTD(totalDistance.toFixed(2),tr,"total")
    newTD(totalPoints.toFixed(3),tr,"total")
    resultsTable.appendChild(tr);
}


function createLine(result){

    tr = document.createElement("tr");

    newTD(result.race.name,tr,"tdLeftAlign");
//    newTD(result.race.location,tr);
    newTD(result.race.location,tr,"tdLeftAlign");
    newTD(result.race.distance,tr,"tdCenterAlign");
    newTD(points,tr);
    return tr;
}

function createRaceHeader() {

    tr = document.createElement("tr");
    tr.innerHTML="<th>Nom</th><th>Place</th><th>Temps</th>";

    return tr;
}

function newTD(value,tr, className){
    td = document.createElement("td");
    if(!(className === undefined)) {
        td.className = className;
    }
    td.innerHTML=value;
    tr.appendChild(td);
}

function createStyles(){
    tdStyle="text-align:left";
    createStyle(tdStyle,"tdLeftAlign");
    tdStyle="text-align:center";
    createStyle(tdStyle,"tdCenterAlign");
    tdStyle="text-align:left;border-top: 1px solid black"
    createStyle(tdStyle,"total");
}
function createStyle(tdStyle,className){
    newStyle = document.createElement("style");
    newStyle.type = 'text/css';
    newStyle.textContent="td."+className+"{ " +tdStyle +"}";
    document.head.appendChild(newStyle);
}

function createDatailsTag(memberId) {
    atag="<a href=\"page.php?page=resultatscoureur&amp;coureurId="+memberId+"37\">"+
        "<div style=\"display:inline-block;\"><img src=\"/antilob/images/loupe.png\" style=\"height:1em; display=inline-block;\" /></div></a>";
    return atag;
}


