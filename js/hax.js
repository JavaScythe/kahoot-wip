function log(a) {
  console.log(a);
}
/*
TODO:
API Bridge for Kahoot API
Executor script for answers
*/
var aws = {};
async function main(id) {
  var json;
  var link = "https://api.gradyn.com/kahoot/" + id;
  json = await fetch(link);
  json = await json.json();
  var qs = json["questions"];
  for (let q in qs) {
    var cs = qs[q]["choices"];
    for (let c in cs) {
      if (cs[c]["correct"] === true) {
        aws[q] = c;
      }
    }
  }
}
main("4f5b0897-e66f-4ba9-b060-370bc0906c5f");
