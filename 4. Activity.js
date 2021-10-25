const name = "Danilunchas";
const lastName = "PD";
const country = "Argentina";
const description = "awesome";
const age = 30;

const mergingWithAPlus =
  "Hola, soy " +
  name +
  " " +
  lastName +
  ", tengo " +
  age +
  " años y vivo en " +
  country +
  ". Me considero " +
  description +
  " y estudio en NUCBA para romperla mañana como programadora.";
console.log(mergingWithAPlus);

const mergingWithBackTicks = `Hola, soy ${name} ${lastName}, tengo ${age} años y vivo en ${country}. Me considero ${description} y estudio en NUCBA para romperla mañana como programadora.`;
console.log(mergingWithBackTicks);

const part1 = "Hola, soy Danilunchas, tengo 30 años y vivo en Argentina.";
const part2 =
  "Me considero awesome y estudio en NUCBA para romperla mañana como programadora.";
const mergingWithConcat = part1.concat(part2);
console.log(mergingWithConcat);
