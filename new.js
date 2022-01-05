// const game = {
//   title: "softball",
//   palyers: 9,
//   ground: "grass",
//   points: 0.0,
// };

// function info(ground, points) {
//   console.log(
//     `${this.title} is a game with ${this.palyers} and it plays in ${ground} the scroed counted by this ${points} value `
//   );
// }
// info.call(game, "grass", "0.00");

// info.apply(game, ["grass", "0.00"]);

// const gameInfo = info.bind(game, "grass", "0.00");
// gameInfo();

const book = {
  title: "rich dad poor dad",
  author: "Selva",
};

// let info = () => {
//   console.log(`${this.title} was written by ${this.author} in ${this.year}`);
// };
function info(year) {
  console.log(
    `${this.title} was written by ${this.author} and was realeased in  ${year}`
  );
}

info.apply(book, [1990]);

const bookinfo = info.bind(book, 1990);
bookinfo();
