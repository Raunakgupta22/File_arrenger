//// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip


import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\Dell\\Desktop\\Sigma web devlopment\\video93(sol)"

let files = await fs.readdir(basepath)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]

    if (ext != "js" && ext != "json" && item.split(".").length > 1) {

        if (fsn.existsSync(path.join(basepath, ext))) {
            //Move this file to this directory 
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
            console.log("Runnining for", item)
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}