//padlet bot here
var raw = "this is a message /shrug";
var counr = (raw.match(/\//g) || []).length;
if (counr !== 0) {
  for (let u = 1; u <= counr; u++) {
    raw.replace("/shrug", "kanmoji here");
  }
}
