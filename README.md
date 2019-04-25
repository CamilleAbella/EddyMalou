
# Eddy Malou

## *Ector-based ChatBot machine learning AI*

Install with `npm i eddymalou-chatbot`

# How to use this ?

## Require

```js
const Eddy = require('eddymalou-chatbot')
```

## Constructor

Syntaxe : `new Eddy( data )`

```js
const chatBot = new Eddy({

	// Name of chatBot (optional)
	name : "Eddy Malou",

	// Name of bot master (optional)
	owner : "Ghom",

	// Pre-configured lexicon (optional)
	lexique : [
		"Hello world !",
		"How are you ?"
	]
})
```

## Methods

### Setters

- set **data** = *data* / *like the constructor*
- set **name** = *name* / *set the name of chatBot*
- set **owner** = *owner* / *set the owner name of chatBot*
- set **lexic** = *lexic* / *set the lexicon of chatBot*
- set **input** = *entry* / *add entry to lexicon of chatBot*

### Getters

- get **data** *get a stringable object from current Eddy instance*
- get **name** *get the current name of chatBot*
- get **owner** *get the current owner name of chatBot*
- get **lexic** *get the current lexicon of chatBot*
- get **output** *get sentence generation from lexicon*

### Others

- **remove**( *entry* ) *remove all correspondance of this entry*
- **removeAll**( *entry* ) *remove all occurances of this entry*
- **reset**() *completly reset lexicon of chatBot*
- **fusion**( *eddy* ) *add to this instance of Eddy the lexicon of the other instance*

### Externs

- static get **quote** *get a Eddy Malou random sentence*
- static get **all** *get an Array of all Eddy instances*
- static get **ector** *get Ector class*

# Enjoy

![Mais oui c'est clair](https://media1.tenor.com/images/72633f9c12ef5004d873d9cc6556ae4d/tenor.gif?itemid=5034006)