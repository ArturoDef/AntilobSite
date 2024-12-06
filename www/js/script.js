
fetch('/antilob/api/eventList',{})
    .then((res) => {
        return res.json();
    })
    .then(res => {

        var eventListDiv = document.getElementById('event-list');
        eventListDiv.innerHTML = "";

        var table = document.createElement("table");
        eventListDiv.appendChild(table);

        res.forEach(event => {

            var tr = document.createElement("tr");
            table.appendChild(tr);

            var td = document.createElement("td");
            var text = document.createTextNode(`${event.text}`);
            td.appendChild(text);
            tr.appendChild(td);
        });

    });





//,{ mode:  'no-cors' }


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
