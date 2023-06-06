const allowedAlphanum = [];
const allowedSpecial = [];

for (var i = 0; i < 256; i++) {
    allowedAlphanum[i] = false;
    allowedSpecial[i] = false;
}

for (var i = 65; i <= 90; i++) {
    allowedAlphanum[i] = true;
    allowedSpecial[i] = true;
}

for (var i = 97; i <= 122; i++) {
    allowedAlphanum[i] = true;
    allowedSpecial[i] = true;
}

for (var i = 48; i <= 57; i++) {
    allowedAlphanum[i] = true;
    allowedSpecial[i] = true;
}

allowedSpecial[45] = true;
allowedSpecial[95] = true;


/**
 * Checks if a string only contains allowed characters.
 * @param {string} str - The string to check.
 * @param {boolean[]} table - The table of allowed characters.
 * @returns {boolean} - Returns true if the string only contains allowed characters, false otherwise.
 */
function isIn(str, table) {
    for (var i = 0; i < str.length; i++) {
        var codeAscii = str.charCodeAt(i);
        if (!table[codeAscii]) {
            return false;
        }
    }
    return true;
}

/**
 * Checks if a string contains only allowed alphanumeric characters.
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string only contains allowed alphanumeric characters, false otherwise.
 */
function isAlphanum(str) {
    return isIn(str, allowedAlphanum);
}

/**
 * Checks if a string contains only allowed characters for a basic email username.
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string only contains allowed characters for a basic email username, false otherwise.
 */
function isEmailSpecial(str) {
    return isIn(str, allowedSpecial);
}

/**
 * Checks a domain name for validity.
 * @param {string} domain - The domain name to check.
 * @returns {object} - Returns an object with 'error' and 'punycode' properties.
 */
function checkDomain(domain) {
    const ret = { error: null, punycode: false }

    // check domain name
    const domainItems = domain.split(".")
    for (var item of domainItems) {
        if (item.length === 0) {
            ret.error = 'Invalid domain';
            ret.info = "Zero length label"
            return (ret);
        }

        if (item.length > 62) {
            ret.error = 'Invalid domain';
            ret.info = "Label length greater than 62";
            return (ret);
        }

        // first and last must be alphanum
        const first = isAlphanum(item[0])
        const middle = isEmailSpecial(item)
        const last = isAlphanum(item[item.length - 1])
        if (first === false || last === false || middle === false) {
            ret.error = 'Invalid domain';
            ret.info = "Invalid label encoding";
            return (ret);
        }

        // check punycode
        const punyCode = /(--)/
        if (item.match(punyCode))
            ret.punycode = true
    }


    return (ret)
}


module.exports = checkDomain