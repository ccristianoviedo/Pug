const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("views", "./views");
app.set("view engine", "pug");

const datos= []

app.get('/', (req, res) => {
    res.render('datos', {datos});
})

app.get('/tabla', (req, res) => {
    res.render('tabla', {datos});
})

app.post('/personas', (req, res) => {
    datos.push(req.body)
    res.render('datos', {datos});
})

app.listen(8080, () => {
  console.log("Server up");
});