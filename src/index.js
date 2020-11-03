const Jasmin = {
  name: "Jasmin",
  job: "Awesome people person",
  past: "Astronaut",
  futureJob: "Who the hell knows"
};

const Dragos = {
  name: "Dragos",
  job: "Not a people person",
  past: "Astronaut",
  futureJob: "Head of fucking everytjing"
};

function printKeys(obj) {
  const printKey = (key) => console.log(`This is the key: ${key}`);

  Object.keys(obj).map(printKey);
}

function printValues(obj) {
  const printValue = (key) => console.log(obj[key]);

  Object.keys(obj).map(printValue);
}

printKeys(Jasmin);
printKeys(Dragos);
printValues(Jasmin);
printValues(Dragos);
console.log(Object.keys(Jasmin));

function funnyOne(callback) {
  // Here i am fetching some data
  callback();
}

funnyOne(() => console.log("Funny is running me"));

function MakeMuffin(flavour, size, isVegan, hasGanache, extraTopings) {
  this.flavour = flavour;
  this.size = size;
  this.isVegan = isVegan;
  this.hasGanache = hasGanache;
  this.extraTopings = extraTopings;
}

const veganMuffin = new MakeMuffin("chocolate", "small", true, false, []);
console.log(veganMuffin);

const chocolateMonster = new MakeMuffin("nougat", "big", false, true, [
  "doublechoc"
]);
console.log(chocolateMonster);
