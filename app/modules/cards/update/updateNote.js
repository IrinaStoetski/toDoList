const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) =>{
    app.get('/notes/:id', async (req, res) =>{
        const query = {_id: ObjectId(req.params.id)};

        let result = null;
        try {
            result = await db.collection('to-do-list').findOne(query);
        } catch (err) {
            console.log(err);
        }
        const showData = {
            id: query._id,
            titleNote: result.titleNote,
            description: result.description,
        };
        res.render('updateNote', {id: showData.id, titleNote: showData.titleNote, description: showData.description});
        // res.send('ok');
    });

    app.put('/notes/:id', async (req, res)=>{
        const query = {_id: ObjectId(req.params.id)};
        const newData = {
            titleNote: req.body.titleNote,
            description: req.body.description,
        };
        let result = null;

        try {
            result = await db.collection('to-do-list').updateOne(query, {$set: newData}, {upsert: true});
        } catch (err) {
            console.log(err);
        }
        res.redirect("/");

         });
};
