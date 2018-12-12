const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) =>{
    app.get('/notes/:id', async (req, res) =>{
        const query = {_id: ObjectId(req.params.id)};
        // console.log(ObjectId(req.params.id))
        console.log(req.params.id)
        let result = null;
        try {
            result = await db.collection('to-do-list').findOne(query);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
        console.log(result)
        const showData = {
            id: query._id,
            title: result.title,
            description: result.description,
        };
        res.render('updateNote', {id: showData.id, title: showData.title, description: showData.description});
        // res.send('ok');
    });

    app.put('/notes/:id', async (req, res)=>{
        console.log('PUT work')
        const query = {_id: ObjectId(req.params.id)};
        const newData = {
            id: query._id,
            title: req.body.title,
            description: req.body.description,
        };
        let result = null;

        try {
            result = await db.collection('to-do-list').updateOne(query, {$set: newData}, {upsert: true});
        } catch (err) {
            console.log(err);
        }
        res.redirect("/");
        // res.send(console.log('ok'));
        // res.render('updateNote', {titleNote: newData.titleNote, description: newData.description});

    });
};
