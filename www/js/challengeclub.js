
let raceListTable = null;
createStyles();
fetch('/antilob/api/challengeclub',{})
    .then((res) => {
        return res.json();
    })
    .then(res => {

        var chclListTable = document.getElementById('challengeclubBody');

        res.forEach(chcl => {
            tr=createLine(chcl);
            chclListTable.appendChild(tr);
        });
    });

    function createLine(chcl){

        tr = document.createElement("tr");

        newTD(chcl.lastname,tr);
        newTD(chcl.firstname,tr);
        newTD(chcl.nbRace,tr, "nbrace");
        newTD(chcl.distance,tr);
        newTD("<span style=\"font-weight:bold\">" +chcl.sumpoints+"</span>",tr);
        details = createDatailsTag(chcl.id);
        newTD(details,tr);

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
        tdStyle="text-align:center";
        createStyle(tdStyle,"nbrace");
    }
    function createStyle(tdStyle,className){
        newStyle = document.createElement("style");
        newStyle.type = 'text/css';
        newStyle.textContent="td."+className+"{ " +tdStyle +"}";
        document.head.appendChild(newStyle);
    }

function createDatailsTag(memberId) {
    atag="<a href=\"/antilob/memberResults/"+memberId+"\">"+
        "<div style=\"display:inline-block;\"><img src=\"/antilob/images/loupe.png\" style=\"height:1em; display=inline-block;\" /></div></a>";
    return atag;
}