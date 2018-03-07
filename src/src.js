const fs = require('fs');


function newProject() {
    fs.mkdir('../test', (err, res) => {
        if (err) return console.log(err);
        fs.writeFile('../test/index.js', 'Hello', 'utf8', (err, res) => {
            if (err) return console.log(err);
            fs.mkdir('../test/spec', (err, res) => {
                if (err) return console.log(err);
                fs.writeFile('../test/spec/index.spec.js', 'Spec', 'utf8', (err, res) => {

                })
            })
        })
    });
}
newProject();