# ![kodepos](logo.png)

## Installation

```cli
$ npm install --save kodepos
```

## Usage

```js
const kodepos = require('kodepos');

// Get all cities
kodepos.all();

// Get city from zip
kodepos.get(10330);
//=> Cikini

// Search city + zip
kodepos.search('cempaka');
//=> { '10510': 'Cempaka Putih Timur', '10520': 'Cempaka Putih Barat' }
```

## License

MIT © [Wahyu Kristianto](https://kristories.com)
