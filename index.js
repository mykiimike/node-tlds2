const list = require("./data/tld-list")
const hash = require("./data/tld-hash")
const top = require("./data/tld-top")

const check = require("./src/check")
const checkDomain = require("./src/checkDomain")
const extractDomain = require("./src/extractDomain")

module.exports = {
    list,
    hash,
    top,
    check,
    checkDomain,
    extractDomain
}