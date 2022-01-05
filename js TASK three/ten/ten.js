//---------------------10-TEN------------------------------
function enter() {
  let userInput = document.getElementById("age").value;
  let need = Math.abs(userInput - 18);
  const cheakEligibleTOVote =
    userInput >= 18
      ? "You are Eligible to vote"
      : `You are wait ${need} year to Eligible for vote`;

  document.getElementById("print").innerHTML = cheakEligibleTOVote;
}
