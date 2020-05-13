import fruits from "./fruits";
import { choice, remove } from "./helpers";

const fruit = choice(fruits);

const logs = [
  `I’d like one ${fruit}, please.`,
  `Here you go: ${fruit}`,
  "Delicious! May I have another?",
  `I’m sorry, we’re all out. We have ${fruits.length} left`,
];

const randomPrhases = () => {
  for (let i = 0; i < fruits.length; i++) {
    console.log(choice(logs));
    remove(fruit, fruits)
  }
}

export default randomPrhases;