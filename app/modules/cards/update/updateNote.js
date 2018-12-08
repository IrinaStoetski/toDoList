const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) =>{
    app.get('/notess/:id', async (req, res) =>{
        let query = {_id: ObjectId(req.params.id)};

        let result = null;
        try{
            result = await db.collection('testNotes').findOne(query);
        } catch (err) {
            console.log(err);
        }
        let showData = {
            id: query._id,
            title: result.title,
            description: result.description
        }
        res.render('updateNote', {id:showData.id, title: showData.title, description: showData.description});
        res.send('ok');
    })

    app.post('/notess/:id',  async (req, res)=>{
        let query = {_id: ObjectId(req.params.id)};
        let newData = {
            title: req.body.title,
            description: req.body.description
        }
        let result = null;

        try{
            result = await db.collection('to-do-list').updateOne(query, {$set: newData}, {upsert: true});

        } catch (err) {
            console.log(err);
        }
        res.send('update note');
    })
}