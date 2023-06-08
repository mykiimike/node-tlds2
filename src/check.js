const checkDomain = require("../src/checkDomain");
const checkTLD = require("../src/checkTLD");

/**
 * Combines the usage of checkDomain() and checkTLD() to perform comprehensive domain validation.
 * @param {string} domain - The domain name to check.
 * @returns {object} - Returns an object with 'error', 'punycode', and additional properties from checkDomain() and checkTLD().
 */
function check(domain) {
    const ret = { error: null, punycode: false };

    // Check the domain using checkDomain()
    const cd = checkDomain(domain);
    if (cd.error)
        return { ...ret, ...cd };

    // translate punycode
    ret.punycode = cd.punycode;

    // Check the top-level domain (TLD) and subdomain using checkTLD()
    const ct = checkTLD(domain);

    return { ...ret, ...ct };
}

module.exports = check;
