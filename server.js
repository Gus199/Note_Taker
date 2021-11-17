// imports

const express =require('express');

const fs =require('fs');

const ejs =require('ejs')

const path = require('path');

const PORT = process.env.PORT || 3000;

const app =express();

// // Set views:
// app.set('views', './public');
// app.use('view engine', 'ejs');

// Set build in midlware:

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

// 


// Routes:

app.use('', (req, res)=>{
res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

// API
// get

app.get('/api/notes', function(req, res) {
    fs.readFile(NOTES_DATABASE, (err, data) => {
      const currentNotes = handleReadNotes(err, data);
      res.json(currentNotes);
    });
  });




app.listen(PORT, ()=>console.info(`Listening to the Port ${PORT}`));
