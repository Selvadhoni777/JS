fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((getData) => {
    console.log(getData);

    var tbl = document.createElement("table");
    document.body.appendChild(tbl);
    var row = document.createElement("tr");
    tbl.appendChild(row);

    // ---------------->GET TABLE HEADER

    var getHead = Object.keys(Object.assign({}, ...getData));
    for (let i = 0; i < getHead.length; i++) {
      var head = document.createElement("th");
      row.appendChild(head);
      head.append(getHead[i]);
    }
    // ---------------------->GET TABLE DATA
    for (a = 0; a < getData.length; a++) {
      var dataRow = document.createElement("tr");
      tbl.appendChild(dataRow);
      var dat = Object.values(getData[a]);
      dat.forEach((d) => {
        var data = document.createElement("td");
        dataRow.appendChild(data);
        data.append(d);
      });
    }
  });
