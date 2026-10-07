const cards = ["A", "2", "3", "4", "5"];
function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));

    [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
  }

  return cards;
}
const result = shuffle(cards);
console.log(result);
