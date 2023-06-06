# tlds2

tlds2 is an npm module that provides a comprehensive list of top-level domains (TLDs) from [ICANN](https://www.icann.org/resources/pages/tlds-2012-02-25-en). It also includes subdomain and registrar identification for better domain control and parsing.

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