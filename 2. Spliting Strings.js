const text = "This Is A Super, Super Sample Text.";

// Cutting strings:
console.log("Cutting strings with the slice method: ", text.slice(0, 10));

console.log("Cutting strings with the slice method: ", text.slice(5, 11));

console.log("Cutting strings with the slice method: ", text.slice(9));

// Cutting strings, backwards mode:
console.log(
  "Cutting strings with the slice method, backwards mode: ",
  text.slice(-7)
);

console.log(
  "Cutting strings with the slice method, backwards mode: ",
  text.slice(11, -7)
);

// Replacing words:
//First Occurrence:
console.log(
  "Replacing the first occurrence of the word: ",
  text.replace("A Super", "An Amazing")
);
//All occurrences:
console.log(
  "Replacing all the occurrences of the word: ",
  text.replace(/a super/gi, "An Amazing")
);
console.log(
  "Replacing all the occurrences of the word: ",
  text.replace(/xt/gi, "xtou")
);

//To Lower &/or Upper (Locale) Case:
console.log("To Lower Case: " + text.toLowerCase());

console.log(`To Upper Case: ${text.toUpperCase()}`);

console.log(`To Locale Upper Case: ${text.toLocaleUpperCase()}`);

// Transforming a "string" into an "array":
//Using a separator to create the array
console.log("Transforming a String into an Array: ", text.split(""));

console.log("Transforming a String into an Array: ", text.split(" "));

console.log("Transforming a String into an Array: ", text.split(","));
//Using a separator to create the array and getting a certain part of its content
console.log("Transforming a String into an Array :", text.split(",")[1]);

console.log("Transforming a String into an Array: ", text.split(",")[5]);
