# tlds2

tlds2 is an npm module that provides a comprehensive list of top-level domains (TLDs) from [ICANN](https://www.icann.org/resources/pages/tlds-2012-02-25-en). It also includes subdomain and registrar identification for better domain control and parsing.

To access the complete TLD and registrar list, visit [this link](https://raw.githubusercontent.com/mykiimike/node-tlds2/master/data/tld-list.txt).

## Installation

```sh
npm install tlds2
```

## Usage

```js
const tlds = require('tlds2');

console.log(tlds.top);
//=> ['aaa', 'aarp', 'abarth', 'abb', 'abbott', 'abbvie', 'abc', ...]
```

### Getting the Complete List

You can obtain the detailed list of registrars that make up the ICANN domains. This allows you to identify domains like `*.co.uk` when the ICANN list only includes `*.uk`.

```js
const tlds = require('tlds2');

console.log(tlds.list);
//=> ['aaa', 'aarp', 'abarth', 'abb', 'abbott', 'abbvie', 'abc', ...]
```

Feel free to explore the full capabilities of the `tlds2` module to enhance your domain management and parsing functionalities.

## Some APIs

### check(domain)

Combines the usage of `checkDomain()` and `checkTLD()` to perform comprehensive domain validation.

#### Parameters

- `domain` (string): The domain name to check.

#### Returns

An object with the following properties:

- `error` (string|null): Error message if the domain is invalid, `null` if valid.
- `punycode` (boolean): Indicates whether the domain contains punycode encoding.
- `org` (string|null): The organization/domain part of the fully qualified domain name (FQDN) returned by `checkTLD()`.
- `tld` (string): The top-level domain (TLD) labels in reverse order, joined by a dot ('.') returned by `checkTLD()`.
- `subDomain` (string): The subdomain labels in reverse order, joined by a dot ('.') returned by `checkTLD().

#### Example

```javascript
const {check} = require("./tlds2")

const result = check('example.com');
console.log(result);
// Output: { error: null, punycode: false, org: "example", tld: "com", subDomain: "" }
```

In the example above, the `check()` function is used to validate the domain name "example.com". The result object contains information about any errors, punycode encoding, organization/domain, TLD labels, and subdomain labels returned by `checkTLD()`.

### checkTLD(fqdn)

Checks the top-level domain (TLD) and subdomain of a fully qualified domain name (FQDN).

#### Parameters
- `fqdn` (string): The fully qualified domain name to check.

#### Returns
An object with the following properties:
- `error` (string | null): Error message if the TLD/subdomain is invalid, `null` if valid.
- `punycode` (boolean): Indicates whether the TLD/subdomain contains punycode encoding.
- `validTLD` (boolean): Indicates whether a valid TLD is present.
- `org` (string | null): Organization/domain part of the FQDN.
- `tld` (string): TLD labels in reverse order, joined with periods.
- `subDomain` (string): Subdomain labels in reverse order, joined with periods.

#### Example
```javascript
const {checkTLD} = require("./tlds2")
const fqdn = "sub.domain.example.com";
const result = checkTLD(fqdn);
console.log(result);
```

Output:
```javascript
{
    error: null,
    punycode: false,
    validTLD: true,
    org: "example",
    tld: "com",
    subDomain: "sub.domain"
}
```

## checkDomain(domain)

Checks a domain name for validity.

### Parameters

- `domain` (string): The domain name to check.

### Returns

An object with the following properties:

- `error` (string | null): An error message if the domain is invalid, or `null` if the domain is valid.
- `punycode` (boolean): Indicates whether the domain contains punycode encoding.
- `info` (string | undefined): Additional information about the error, if any.

### Example

```javascript
const {checkDomain} = require("./tlds2")

const domainInfo = checkDomain('example.com');
console.log(domainInfo);
// Output: { error: null, punycode: false }

const invalidDomain = checkDomain('-invalid.domain');
console.log(invalidDomain);
// Output: { error: 'Invalid domain', punycode: false, info: 'Invalid label encoding' }
```



