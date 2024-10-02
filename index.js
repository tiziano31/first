


const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
	console.log('Test app listening at http://localhost:${port}')
});


const todos = [
  {
	id: "1",
	title: "Todo 1",
	desc: "This is my first Todo",
  	completed: true,
  },

  {
	id: "2",
	title: "Todo 2",
    desc: "This is my second Todo",
    completed: true,
  },

  {
	id: "3",
    title: "Todo 3",
    desc: "This is my third Todo",
    completed: true,
  },

  {
	id: "4",
    title: "Todo 4",
    desc: "This is my fourth Todo",
    completed: true,
  },

  {
	id: "5",
    title: "Todo 5",
    desc: "This is my fifth Todo",
    completed: true,
  },
];


app.get("/todos",(request,response) => {
	response.status(200).json(todos);
});

app.use(express.json());

app.get("/todos/:id", (request,response) => {
	response.status(200)
	response.json({data: todos.find((todo) => todo.id === request.params.id)});
});

app.post("/todos", (request,response) => {
	todos.push(request.body);
	response.status(201).json({msg: "Todo created successfully"});
});

app.put("/todos/:id", (request, response) => {
  const todo = todos.find((todo) => todo.id === request.params.id);
  if (todo) {
    const { title, desc, completed } = request.body;
    todo.title = title;
    todo.desc = desc;
    todo.completed = completed;
    response.status(200).json({ msg: "Todo updated successfully" });
    return;
  }
  response.status(404).json({ msg: "Todo not found" });
});

app.delete("/todos/:id", (request, response) => {
  const todoIndex = todos.findIndex((todo) => (todo.id === request.params.id));
  if (todoIndex!==-1) {
    todos.splice(todoIndex, 1);
    response.status(200).json({ msg: "Todo deleted successfully" });
  }else{
  response.status(404).json({msg: "Todo not found"})};
});