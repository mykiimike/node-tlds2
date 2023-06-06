const list = require("./data/tld-list")
const hash = require("./data/tld-hash")
const top = require("./data/tld-top")

const checkDomain = require("./src/checkDomain")
const extractDomain = require("./src/extractDomain")

module.exports = {
    list,
    hash,
    top,
    checkDomain,
    extractDomain
}