# String Tools

Functions to transform or extract data using string prototyping.

---
## Installation

Can you spare a few kilobytes to import this into your project?
Setting up the library is super easy, just include or import the script on your page to start using it!

Straight on page
```html
<script type="text/javascript" src="./path/to/string-tools.js"></script>
```

Via javascript import
```javascript
import './path/to/string-tools';
```

---
## Sample Data

For the examples below to work, we need some data to work with.
This data sample is used to show typical string manipulation.

```javascript
const sampleString  = 'The quick brown fox jumped over the lazy dog.';
const shortString   = 'Knowledge is power!';
const longString    = 'How vexingly quick daft zebras jump! Pack my box with 5 dozen liquor jugs.';
const htmlString    = '<div class="text-center">The five boxing wizards <em>jump quickly</em>.</div>';
const pluralString  = 'Package';
const numberString  = '$2,000.92';
const mixedString   = 'A-B-C, 123, Do re mi.';
const newlineString = `Jackdaws love my
big sphinx
of quartz.`;
```

--- 
## Methods

### String.randomString(length = 8, includeSpecialCharacters = true, specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '`', '~', '-', '_', '+', '='])

Parameters: `Number` `Boolean` Returns: `String`

This will generate a string of random cased letters, numbers and special characters.
```
['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '`', '~', '-', '_', '+', '=']
```

**Example:**

```javascript
String.randomString();
String.randomString(12);
String.randomString(30, true, ['!','$']);
```

--- 
## Prototypes

### camelCase()

Returns: `String`

Formats a string in camel case (It is commonly used in web URLs, programming and computer naming conventions).

**Example:**

```javascript
sampleString.camelCase();
```

---
### capitalize(startLowerCase = false)

Parameters: `Boolean` Returns: `String`

This will capitalize the first letter in a string.

**Example:**

```javascript
sampleString.capitalize();
```

---
### decodeHtmlEntities()

Returns: `String`

Convert HTML entities to their corresponding characters.

**Example:**

```javascript
sampleString.decodeHtmlEntities();
```

---
### decodeSpecialCharacters()

Returns: `String`

Convert special HTML entities back to characters.

**Example:**

```javascript
sampleString.decodeSpecialCharacters();
```

---
### decodeUri()

Returns: `String`

Decodes an encoded URI.

**Example:**

```javascript
sampleString.decodeUri();
```

---
### encodeHtmlEntities()

Returns: `String`

Convert all applicable characters to HTML entities.

**Example:**

```javascript
sampleString.encodeHtmlEntities();
```

---
### encodeSpecialCharacters()

Returns: `String`

Convert special characters to HTML entities.

**Example:**

```javascript
sampleString.encodeSpecialCharacters();
```

---
### encodeUri()

Returns: `String`

Encodes a URI by replacing each instance of certain characters representing the UTF-8 encoding of the character.

**Example:**

```javascript
sampleString.encodeUri();
```

---
### headingCase(startLowerCase = false, ignoredWords = ['a', 'and', 'as', 'at', 'but', 'by', 'etc', 'for', 'if', 'in', 'into', 'is', 'nor', 'of', 'on', 'onto', 'or', 'so', 'the', 'to'])

Parameters: `Boolean`, `Array` Returns: `String`

This will return a string with a proper title case format.
You can control which words that should not have a case change.

**Example:**

```javascript
sampleString.headingCase();
```

---
### if(condition, callback)

Parameters: `Boolean`, `Function` Returns: `String`

A conditional function to modify the text under a certain condition.

**Example:**

```javascript
sampleString.if(1 === 2, text => text.pascalCase());
```

---
### ifElse(condition, ifCallback, elseCallback)

Parameters: `Boolean`, `Function`, `Function` Returns: `String`

A conditional function to modify the text under a certain condition.

**Example:**

```javascript
sampleString.ifElse(1 === 2, text => text.upperCase(), text => text.lowerCase());
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
### mixWords(separator = ' ')

Parameters: `String` Returns: `String`

This will randomly shuffle all the words in a string.

**Example:**

```javascript
sampleString.mixWords();
```

---
### nl2br(useXHtml = true)

Parameters: `Boolean` Returns: `String`

This is similar to the php function `nl2br` and will replace all new lines with an html line break.
The `xHTML` flag will control the element instantiation.
Setting the flag to `true` (or by not defining the flag) will return `<br />`.
Setting the flag to `false` will return `<br>`.

**Example:**

```javascript
newlineString.nl2br();
newlineString.nl2br(false);
```

---
### onlyLetters(whiteList = [])

Parameters: `Array` Returns: `String`

This will remove any character that is not a letter.

**Example:**

```javascript
mixedString.onlyLetters();
mixedString.onlyLetters(['?', '.', '!']);
```

---
### onlyNumbers(whiteList = [])

Parameters: `Array` Returns: `String`

This will remove any character that is not a number.

**Example:**

```javascript
mixedString.onlyNumbers();
mixedString.onlyNumbers(['.']);
```

---
### pascalCase()

Returns: `String`

This formats a string in pascal case.

**Example:**

```javascript
sampleString.pascalCase();
```

---
### pluralize(interval, postfix = 's', removeLastCharacter = false, pluralInterval = 1)

Parameters: `Number`, `String`, `Number` Returns: `String`

This will add a plural character based off the numeric interval. `pluralInterval` is the integer of when the postfix is applied.

**Example:**

```javascript
sampleString.pluralize(2);
```

---
### randomCase()

Returns: `String`

Randomizes the case for each letter in a string.

**Example:**

```javascript
sampleString.randomCase();
```

---
### showWhitespaceCharacters()

Returns: `String`

Shows all spaces, tabs, and newlines with a character.
Only spaces will be replaced with a character.
Spaces = '◦', Tabs = '⇥', Newlines = '⏎'

**Example:**

```javascript
sampleString.showWhitespaceCharacters();
```

---
### shuffle()

Returns: `String`

This will randomly shuffle characters in a string.

**Example:**

```javascript
sampleString.shuffle();
```

---
### shuffleWords(separator = ' ')

Parameters: `String` Returns: `String`

This will randomly shuffle all the characters bound from each word.

**Example:**

```javascript
sampleString.shuffleWords();
```

---
### stripTags()

Returns: `String`

This is similar to the php function `strip_tags()` and will remove all html elements, while keeping the inner text.

**Example:**

```javascript
htmlString.stripTags();
```

---
### toBytes()

Returns: `Number`

Converts the string into a filesize. This method is not chainable for strings.

**Example:**

```javascript
numberString.toBytes();
```

---
### toNumber()

Returns: `Number`

Converts the string into a number using `parseFloat`. This method is not chainable for strings.

**Example:**

```javascript
numberString.toNumber();
```

---
### truncateCharacters(characterLength, clamp = '')

Parameters: `Number`, `String` Returns: `String`

This will only display a certain amount of characters before the postfix.

**Example:**

```javascript
longString.truncateCharacters(10);
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
### uriSlug(delimiter = '-')

Parameters: `String` Returns: `String`

Creates a uri formatted string that consists of only numbers and letters separated by a delimiter.

**Example:**

```javascript
shortString.uriSlug();
```

---
### wordCount()

Returns: `Number`

This will count the number of words that are separated by a space.
This method is not chainable for strings.

**Example:**

```javascript
longString.wordCount();
```

---
### words(wordMap = null)

Parameters: `Function` Returns: `Array`

This will result in an array of the words in a given string.

**Example:**

```javascript
longString.words();
longString.words(text => text.upperCase());
```
