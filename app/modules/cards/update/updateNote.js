// const fs = require('fs');
// const path = require('path');
// const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) =>{
    app.get('/notess', (req, res) =>{
        res.render('update-card');
    })

    app.post('/notess',  async (req, res)=>{
        let query = {_id: ObjectId(req.body.id)};
        let newData = {
            title: req.body.title,
            description: req.body.description
        }
        let result = null;

        try{
            // result = await db.collection('testNotes').findOne(query);
            result = await db.collection('to-do-list').updateOne(query, {$set: newData}, {upsert: true});

        } catch (err) {
            console.log(err);
        }
        res.send(result);
    })


}