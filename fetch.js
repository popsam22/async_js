//using fetch to make http request and chaining promises together using then and catch

fetch('./todos.json')
  .then((res) => {
    console.log("resolved", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

  // "https://jsonplaceholder.typicode.com/todos"