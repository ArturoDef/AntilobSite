
fetch('http://localhost:9001/api/eventList')
    .then(res => res.json())
    .then(res => {
        var eventListNode = document.getElementById('event-list');
        eventListNode.innerHTML = "";

        var eventListDiv = document.getElementById("eventList");
        var table = document.createElement("table");
        eventListDiv.appendChild("table");
        table.setAttribute("border","1");
        eventListNode.appendChild(table);

        res.forEach(event => {

            var tr = document.createElement("tr");
            table.appendChild(tr);

            var td = document.createElement("td");
            var text = document.createTextNode(`${event.number}`);
            td.appendChild(text);
            tr.appendChild(td);
        });

    });


function showDetail(invoiceNumber){
    fetch("../invoiceAPI/"+invoiceNumber)
    .then(res => res.json())
    .then(res => {
        var invoiceDetailNode = document.getElementById('invoice-detail');
        invoiceDetailNode.innerHTML = "";

        var p = document.createElement("p");
        var text = document.createTextNode(`Number: ${res.number}`);
        p.appendChild(text);
        invoiceDetailNode.appendChild(p);

        p = document.createElement("p");
        text = document.createTextNode(`Customer name: ${res.customer.name}`);
        p.appendChild(text);
        invoiceDetailNode.appendChild(p);

        p = document.createElement("p");
        text = document.createTextNode(`Order number: ${res.orderNumber}`);
        p.appendChild(text);
        invoiceDetailNode.appendChild(p);

    });
}
