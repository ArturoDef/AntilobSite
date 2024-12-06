
fetch('/antilob/api/lastResultList',{})
    .then((res) => {
        return res.json();
    })
    .then(res => {

        var resultListDiv = document.getElementById('lastresult-list');
        resultListDiv.innerHTML = "";

        var currentRaceId="a";
        res.forEach(result => {
            var raceId=result.id.split("_")[0];
            var runnerId=result.id.split("_")[1];
            console.log("raceId="+raceId);
            console.log("currentRaceId="+currentRaceId);
            if(currentRaceId!=raceId){
                h3 = document.createElement("H3");
                h3.innerHTML = result.raceName+" : "+result.location+" "+result.distance+" km ("+result.nbrParticipants+" participants)";
                h3.style.textDecoration =" underline";
                resultListDiv.appendChild(h3);
                table=  document.createElement("table");
                resultListDiv.appendChild(table);
                tr=createRaceHeader(result);
                table.appendChild(tr);
                tr = createResultRow(result);
                table.appendChild(tr);
                currentRaceId = raceId;
            }
            else {
                tr = createResultRow(result);
                table.appendChild(tr);
                currentRaceId = raceId;
            }

/*
        var table = document.createElement("table");
        resultListDiv.appendChild(table);

            var tr = document.createElement("tr");
            table.appendChild(tr);

            var td = document.createElement("td");
            var text = document.createTextNode(`${event.text}`);
            td.appendChild(text);
            tr.appendChild(td);*/
        });

    });

    function createResultRow(result){

        tr = document.createElement("tr");

        td = document.createElement("td");
        td.innerHTML=result.runnerLastname+" "+result.runnerFirstname;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML=result.place;
        tr.appendChild(td);


        td = document.createElement("td");
        td.innerHTML=result.time;
        tr.appendChild(td);


        return tr;
    }

    function createRaceHeader() {

        tr = document.createElement("tr");
        tr.innerHTML="<th>Nom</th><th>Place</th><th>Temps</th>";

        return tr;
    }
