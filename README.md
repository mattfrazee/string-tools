# String Tools

Functions to transform or extract data using string prototyping.

## Installation

Can you spare < 2kb to import this into your project? Setting up the library is super easy, just include the script on your page or import script and start using it!

Straight on page
```html
<script type="text/javascript" src="./path/to/string-tools.min.js"></script>
```

Via javascript import
```javascript
import './path/to/string-tools';
```

## Sample Data

For the examples to work, we need some data to work with. This data sample is used to show typical string manipulation.

```javascript
const sampleString  = 'The quick brown fox jumped over the lazy dog.';
const shortString   = 'Knowledge is power!';
const longString    = 'How vexingly quick daft zebras jump! Pack my box with five dozen liquor jugs.';
const htmlString    = '<div class="text-center">The five boxing wizards <em>jump quickly</em>.</div>';
const newlineString = `Jackdaws love my
big sphinx
of quartz.`;
const pluralString  = 'Package';
```

## Usage

It's pretty simple. Just use it the same way you would normal string prototypes.

---

### camelCase()

Returns: `String`

The formats a string in camel case.

**Example:**

```javascript
sampleString.camelCase();
```

---

### headingCase(ignoredWords = ['the', 'a', 'for', 'to', 'in', 'an', 'or', 'so'])

Parameters: `Array` Returns: `String`

This will return a string with a proper title case format.

**Example:**

```javascript
sampleString.headingCase();
```

---

### lowerCase()

Returns: `String`

An alias of toLowerCase().

**Example:**

```javascript
sampleString.lowerCase();
```

---

### nl2br(useXHtml = true)

Parameters: `Boolean` Returns: `String`

This is similar to the php function `nl2br` and will replace all new lines with an html line break.

**Example:**

```javascript
newlineString.nl2br();
```

---

### pascalCase()

Returns: `String`

The formats a string in pascal case.

**Example:**

```javascript
sampleString.pascalCase();
```

---

### pluralize(count, postfix = 's', countTrigger = 1)

Parameters: `Number`, `String`, `Number` Returns: `String`

This will add a plural character based off the numeric interval.

**Example:**

```javascript
pluralString.pluralize(2);
```

---

### stripTags()

Returns: `String`

This is similar to the php function `strip_tags()` and will remove all html elements, whilest keeping the inner text.

**Example:**

```javascript
htmlString.stripTags();
```

---

### truncateCharacters(characterLength, clamp = '')

Parameters: `Number`, `String` Returns: `String`

This will only display a certain amount of characters before the postfix.

**Example:**

```javascript
longString.truncateCharacters(20, '...');
```

---

### truncateWords(wordLength, clamp = '')

Parameters: `Number`, `String` Returns: `String`

This will only display a certain amount of words before the postfix.

**Example:**

```javascript
longString.truncateWords(5, '...to be continued.');
```

---

### upperCase()

Returns: `String`

An alias of toUpperCase().

**Example:**

```javascript
sampleString.upperCase();
```

---

### urlSlug(delimiter = '-')

Parameters: `String` Returns: `String`

Create a url formatted string that consists of only numbers and letters separated by a delimiter.

**Example:**

```javascript
shortString.urlSlug();
```

---

### wordCount()

Returns: `Number`

This will count the number of words that are separated by a space.

**Example:**

```javascript
longString.wordCount();
```

---

### words()

Returns: `Array`

This will result in an array of the words in a given string.

**Example:**

```javascript
longString.words();
```
