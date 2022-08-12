const path = require("path")
const wget = require("wget-improved")
const unzipper = require("unzipper")
const fs = require("fs")
const config = require(process.cwd() + "/config.json")
const { startServer } = require("./server")
const settingsGenerator = require("./settingsGenerator")
const { exit } = require("./util")

module.exports = async cb => {
    var link
    if (process.platform === "win32") {
        link = `http://kanrs.jinpots.space:4001/danser-latest-windows.zip`
    } else {
        link = `http://kanrs.jinpots.space:4001/danser-latest-linux.zip`
    }
    const output = path.resolve("files/danser/danser.zip")
    let download = wget.download(link, output)
    download.on("error", err => {
        console.log(err)
    })
    download.on("start", fileSize => {
        console.log(`Downloading danser at ${link}: ${fileSize} bytes to download...`)
    })
    download.on("end", () => {
        try {
            fs.createReadStream(output)
                .pipe(
                    unzipper.Extract({
                        path: `files/danser`
                    })
                )
                .on("close", () => {
                    console.log(`Finished downloading danser.`)
                    if (config.id) {
                        startServer()
                    } else {
                        settingsGenerator("new")
                    }
                    if (process.platform === "linux") {
                        fs.chmodSync("files/danser/danser", "755")
                    }
                    if (cb) {
                        cb()
                    }
                })
        } catch (err) {
            console.log("An error occured while unpacking Danser: " + err)
            exit()
        }
    })
}
