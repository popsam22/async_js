// async && await to chain promises together

const getQuiz = async () => {
  const resource = await fetch(
    "https://opentdb.com/api.php?amount=10&category=19&difficulty=dium&type=multiple"
  );
  if (resource.status !== 200) {
    throw new Error("check api endpoint");
  }

  const data = await resource.json();
  return data;
};

console.log("first");
console.log("second");
//this code is non-blocking
getQuiz()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

console.log("third");
console.log("fourth");
