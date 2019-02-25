const ghpages = require('gh-pages');


ghpages.publish('out', {
    branch: 'master',
    repo: 'https://github.com/Josh-McFarlin/Josh-McFarlin.github.io.git',
    message: 'Auto-generated commit'
}, function(err) {
    if (err) {
        console.log("The following error occurred:");
        console.error(err);
    } else {
        console.log("The upload completed successfully!")
    }
});
