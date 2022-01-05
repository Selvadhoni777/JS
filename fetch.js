// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((Response) => Response.json())
//   .then((json) => {
//     console.log(json);

//     var table = document.getElementById("table");

//     for (i = 0; i < json.length; i++) {
//       var row = table.insertRow(i);
//       var cell0 = row.insertCell(0);
//       var cell1 = row.insertCell(1);
//       var cell2 = row.insertCell(2);
//       cell0.innerHTML = json[i].id;
//       cell1.innerHTML = json[i].completed;
//       cell2.innerHTML = json[i].title;
//     }
//   });
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((getData) => {
    console.log(getData);
  });

var tbl = document.createElement("table");

var row = document.createElement("tr");
