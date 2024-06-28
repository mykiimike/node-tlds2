

const data = [
    { "domain": "example.com", "error": false },
    { "domain": "a.b-b.ccc.com", "error": false },
    { "domain": "-.bb.ccc.com", "error": true },
    { "domain": "domain", "error": false },
    { "domain": "", "error": true },
    { "domain": ".com", "error": true },
    { "domain": "domain.", "error": true },
    { "domain": "example..com", "error": true },
    { "domain": "-domain.com", "error": true },
    { "domain": "123.com", "error": false },
    { "domain": "[123.45.67.89]", "error": true },
    { "domain": "example.co.uk", "error": false },
    { "domain": "example.com.", "error": true },
    { "domain": "domain+.com", "error": true },
    { "domain": "xn--w4r85el8fhu5dnra.ch", "error": false },
    { "domain": "xn--w4r85el8fhu5dnra.ch", "error": true },
    { "domain": "xn--w4r85el8fhu5dnra.ch", "error": true },
    { "domain": "xn--bcher-kva.xn--bouch-fsa.example.com", "error": false },
    { "domain": "example.com0.0.0.0", "error": true },
    { "domain": "", "error": true },
]

const check = require("../src/checkDomain")

describe('Testing checkDomain() function', function () {
    for (let test of data) {
        var description = `Should success ${test.domain}`
        if (test.error)
            description = `Should fail ${test.domain}`
        it(description, async () => {
            const ret = check(test.domain)
            const errorCode = ret.error
            if (ret.error === true && errorCode !== true)
                throw Error(`${ret.error}: ${ret.info}`)
            else if (ret.error !== true && errorCode === true)
                throw Error("Test should failed")
            else if (ret.error === true && errorCode === true)
                return
        })
    }
})
