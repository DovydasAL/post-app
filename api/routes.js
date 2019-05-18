const Post = require('./models/post');
const path = require('path');

module.exports = function(app) {
    /*
    ====================
    Backend Routes:
    API, Authentication
    ====================
    */

    app.get('/api/posts', function(req, res) {
        Post.find(function(err, posts) {
            if (err)
                res.send(err);

            res.json(posts);
        });
    });

    /*
    ====================
    Frontend Routes:
    Views
    ====================
    */

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../app/views/index.html'));
    });

};
