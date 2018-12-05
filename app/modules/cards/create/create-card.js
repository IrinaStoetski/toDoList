// const express = require('express');
// const fs = require('fs');
// // const path = require('path');
// const app = express();

// app.set('views', './views');
// app.set('view engine', 'pug');

module.exports = (app, db) => {
    app.get('/notes', (req, res) => {
            res.render('test');
        }
    )}
    // app.route('/notes')
    //     .get((req, res) => {
    //         res.render('create-card', {});
    //         }
    //     )
    //
    //     .post(async (req, res) => {
    //         let notes = {
    //             title: req.body.title,
    //             description: req.body.title
    //         };
    //
    //         let result = null;
    //
    //         try {
    //             result = await db.collection('testNotes').insertOne(notes);
    //         } catch (err) {
    //             console.log(err)
    //         }
    //
    //         res.end('ok');
    //     })
