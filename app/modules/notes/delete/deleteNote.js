const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) =>{
    app.delete('/notes/:id', async (req, res) => {
        console.log('delete work')
        const query = {_id: ObjectId(req.params.id)};
        console.log(query);
         
        let result = null;
        try {
            result = await db.collection('to-do-list').deleteOne(query);
            res.redirect("/");
        } catch (err) {
            console.log(err);
        }
 
    });
};
