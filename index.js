const list = require("./data/tld-list")
const hash = require("./data/tld-hash")
const top = require("./data/tld-top")

// pour le momeent les informations meta sont vide
// mais on prepare l'emplacement
const meta = {}
for(var item of list) meta[item] = item

const check = require("./src/check")
const checkDomain = require("./src/checkDomain")
const checkTLD = require("./src/checkTLD")

module.exports = {
    list,
    hash,
    top,
    meta,
    check,
    checkDomain,
    checkTLD
}