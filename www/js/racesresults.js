
let raceListTable = null;
fetch('/antilob/api/raceList',{})
    .then((res) => {
        return res.json();
    })
    .then(res => {

        var raceListTable = document.getElementById('raceListBody');

        res.forEach(race => {
            tr=createLine(race);
            raceListTable.appendChild(tr);
        });
    });

    function createLine(race){

        tr = document.createElement("tr");

        newTD(race.location,tr);
        if(race.mainRaceId  == 0)
            newTD(race.date,tr);
        else
            newTD("&nbsp",tr);
        linkDistance="/antilob/raceresult/"+race.id;
        aTag="<a href='"+linkDistance+"'>"+race.distance+"</a>";
        newTD(aTag,tr);
        newTD(race.challenge.shortname,tr);
        newTD(race.nbrclub,tr);

        return tr;
    }

    function createRaceHeader() {

        tr = document.createElement("tr");
        tr.innerHTML="<th>Nom</th><th>Place</th><th>Temps</th>";

        return tr;
    }

    function newTD(value,tr){
        td = document.createElement("td");
        td.innerHTML=value;
        tr.appendChild(td);
    }
