const fs = require("fs");

let command = process.argv[2]
let directory = "/tmp/mig33/inner.folder";

if (command === '-renameAll') {
    fs.readdir(directory, function (err, data) {
        if (err) {
            return err
        }
        data.forEach((file) => {
            let old_directory = directory + `/${file}`
            let type = `${file[file.length - 4]}${file[file.length - 3]}${file[file.length - 2]}${file[file.length - 1]}`;
            if (type === '.txt') {
                let name = getFileName(file)
                fs.rename(old_directory, `${directory}/${name}.dat`, function(err) {
                    if (err) {
                        return err
                    } else {
                        console.log(`renamed to ${name}.dat`)
                    }
                })
                
            }        
        })
    });
}

function getFileName(fullname) {
    let name = '';
    for (let i = 0; i < fullname.length; i++) {
        if (fullname[i] !== '.') {
            name += fullname[i]
        } else {
            break;
        }
    }
    return name;
}