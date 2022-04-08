const categoriesMock = require("../mock/categories.json");
const questionsMock = require("../mock/questions.json");
const Category = require("../models/Category");
const Question = require("../models/Question");

module.exports = async () => {
  const categories = await Category.find();
  if (categories.length !== categoriesMock.length) {
    await createInitialEntity(Category, categoriesMock);
  }

  const questions = await Question.find();
  if (questions.length !== questionsMock.length) {
    await createInitialEntity(Question, questionsMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
