const tldHash = require("../data/tld-hash");

/**
 * Checks the top-level domain (TLD) and subdomain of a fully qualified domain name (FQDN).
 * @param {string} fqdn - The fully qualified domain name to check.
 * @returns {object} - Returns an object with the following properties: 'error', 'org', 'tld', and 'subDomain'.
 */
function checkTLD(fqdn) {
    const ret = {
        error: null,    // Error message if the TLD/subdomain is invalid, null if valid.
        validTLD: false,    // Indicates whether a valid TLD is present.
        org: null,    // Organization/domain part of the FQDN.
        tld: [],    // Array of TLD labels in reverse order.
        subDomain: []    // Array of subdomain labels in reverse order.
    };

    if (typeof fqdn !== 'string') {
        ret.error = 'Invalid FQDN';
        ret.info  = 'FQDN must be a string';
        return;
    }
    else if (fqdn.length === 0) {
        ret.error = 'Invalid FQDN';
        ret.info  = 'FQDN length equal zero';
        return;
    }
    
    const labels = fqdn.split(".");
    var cursor = tldHash;

    for (var label of labels.reverse()) {
        label = label.toLowerCase();
        const key = label.toUpperCase();

        if (ret.org) {
            ret.subDomain.push(label);
            continue;
        }

        if (cursor[key]) {
            ret.tld.push(label);
        } else {
            ret.org = label;
        }

        cursor = cursor[key];
    }

    ret.tld = ret.tld.reverse().join(".");
    ret.subDomain = ret.subDomain.reverse().join(".");

    if (ret.tld.length > 0) {
        ret.validTLD = true;
    }

    return ret;
}

module.exports = checkTLD;
