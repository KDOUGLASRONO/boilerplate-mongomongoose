require('dotenv').config();
const mongoose = require("mongoose");

const schema = mongoose;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


//defining a schema;
const personSchema = new schema({
  "name": String,
  "age": Number,
  "favorite_food": [String]
})

//model
let Person = mongoose.model('Person',personSchema);

//instance of a mode;
let Douglas = new Person({
  name:"Douglas",
  age:32,
  favorite_food:["mursik","ugali","skuma"]
})

const createAndSavePerson = (done) => {
  let eric = new Person({
    name:'ERIC KOECH',
    age:23,
    favorite_food:["drinks",'yoghurt']
  })
  eric.save(function(err,done){
    if(err) console.error(err);
    done(null, data);
  })
  done(null /*, data*/);
};

var arrayOfPeople = [
  {name:'Douglas',age:32,favorite_food:["sushi"]},
  {name:"pyomdo",age:30,favorite_food:["githeri"]},
  {name:"anto",age:32,favorite_food:["whiskey"]}
]
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,(err,people)=>{
    if(err) console.error(err);
    done(null,people);
  });
};

//find people by name
const findPeopleByName = (John, done) => {
  Person.find({name:John}, (err,found)=>{
    if(err) console.error(err);
    done(null, found);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
