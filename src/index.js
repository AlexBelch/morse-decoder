const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const res = expr.match(/.{10}/g).map((element) => {
    if (element === "**********") {
      return " ";
    }

    return element
      .match(/.{2}/g)
      .filter((item) => item !== "00")
      .map((item) => {
        if (item === "11") {
          return "-";
        }
        if (item === "10") {
          return ".";
        }
        return "*";
      })
      .join("");
  });

  return res
    .map((item) => {
      if (item === " ") return " ";
      return MORSE_TABLE[item];
    })
    .join("");
}

module.exports = {
  decode,
};
