const fs = require('fs');
const path = require('path');
const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) =>{
    app.get('/notes/:id', (req, res) =>{
        res.render('update-card');
    })

    app.post('/api/notes/:id', async (req, res)=>{
        let query = {_id: ObjectId(req.params.id)};
        let newData = {
            title: req.params.title,
            description: req.params.description
        }
        let result = null;

        try{
            // result = await db.collection('testNotes').findOne(query);
            result = await db.collection('testNotes').updateOne(query, {$set: newData}, {upsert: true});

        } catch (err) {
            console.log(err);
        }
        // let query = {_id: ObjectId(req.body.id)}; // ищем продукт, который хочем изменить
        // let query = {_id: ObjectId(req.params.id)};
        //
        // let newData = { // новые параметры объекту
        //     title: req.body.title,
        //     description: req.body.description
        // };
        //
        // let result = null;
        //
        // try{
        //     result = await db.collection('testNotes').updateOne(query, {$set: newData}, {upsert: true});
        // } catch (err) {
        //     console.log(err);
        // }
        //
        res.send(result);
    })


}