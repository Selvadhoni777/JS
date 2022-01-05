function enter() {
  var mark = document.getElementById("mark").value;

  switch (true) {
    case mark > 90:
      document.getElementById("print").innerHTML = `Your Grade is "A"`;
      break;
    case mark > 80:
      document.getElementById("print").innerHTML = `Your Grade is "B"`;
      break;
    case mark > 70:
      document.getElementById("print").innerHTML = `Your Grade is "C"`;
      break;
    case mark > 60:
      document.getElementById("print").innerHTML = `Your Grade is "D"`;
      break;
    case mark > 50:
      document.getElementById("print").innerHTML = `Your Grade is "E"`;
      break;
    default:
      document.getElementById("print").innerHTML = `You are"FAIL"`;
      break;
  }
}
