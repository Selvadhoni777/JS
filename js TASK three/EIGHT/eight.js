var lastNum = Number(prompt("Enter the end Number of loop your choice"));
if (lastNum >= 0) {
  for (i = 0; i <= lastNum; i++) {
    if (i % 2 == 0) {
      document.write(`"${i} is Even"<br>`);
    } else {
      document.write(`"${i} is Odd"<br>`);
    }
  }
} else {
  alert("Enter Only Number Value");
}
