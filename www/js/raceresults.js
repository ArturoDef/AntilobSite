let raceListTable = null;
var resultsTable = document.getElementById('resultsBody');
fetch('/antilob/api/raceResults/' + raceId, {})
    .then((res) => {
        return res.json();
    })
    .then(res => {
        res.forEach(result => {
            tr = createLine(result);
            resultsTable.appendChild(tr);
        });
    });

function createLine(result) {

    tr = document.createElement("tr");

    newTD(result.member.lastname, tr);
    newTD(result.member.firstname, tr);
    0
    newTD(result.place, tr);
    newTD(result.time, tr);
    points = Math.round(((result.race.nbrparticipants * nbrClub) / result.place) * result.race.distance) * .001;
    points = points.toFixed(3)
    newTD(points, tr);
    return tr;
}


function createRaceHeader() {

    tr = document.createElement("tr");
    tr.innerHTML = "<th>Nom</th><th>Place</th><th>Temps</th>";

    return tr;
}

function newTD(value, tr) {
    td = document.createElement("td");
    td.innerHTML = value;
    tr.appendChild(td);
}
