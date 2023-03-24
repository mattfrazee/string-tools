// String Tools
// By: Matt Frazee

/**
 * String Prototypes
 */

/**
 * Converts the string to camel case format.
 * @returns {string}
 */
String.prototype.camelCase = function () {
    return this.lowerCase().onlyLetters([' ']).replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.lowerCase() : word.upperCase();
    }).replace(/\s+/g, '');
}

/**
 * Capitalizes the first letter in a string
 * @param startLowerCase Determines if all characters should start lower case.
 * @returns {string}
 */
String.prototype.capitalize = function (startLowerCase = false) {
    return this.charAt(0).upperCase() + this.slice(1).if(startLowerCase, (string) => string.lowerCase());
    // return this.charAt(0).upperCase() + this.slice(1).lowerCase();
}

/**
 * Convert HTML entities to their corresponding characters.
 * @returns {string}
 */
String.prototype.decodeHtmlEntities = function () {
    let ele = document.createElement('div');
    ele.innerHTML = this;
    const res = ele.innerText;
    ele.remove();
    return res;
}

/**
 * Convert special HTML entities back to characters.
 * @returns {string}
 */
String.prototype.decodeSpecialCharacters = function () {
    return this.replace(/(&#(\d+);)/g, (match, capture, charCode) => String.fromCharCode(charCode));
}

/**
 * Decodes an encoded URI.
 * @returns {string}
 */
String.prototype.decodeUri = function () {
    return window.decodeURI(this);
}

/**
 * Convert all applicable characters to HTML entities.
 * @returns {string}
 */
String.prototype.encodeHtmlEntities = function () {
    let ele = document.createElement('div');
    ele.innerText = this;
    const res = ele.innerHTML;
    ele.remove();
    return res;
}

/**
 * Convert special characters to HTML entities.
 * @returns {string}
 */
String.prototype.encodeSpecialCharacters = function () {
    return this.replace(/[\u0080-\u024F]/g, (v) => '&#'+v.charCodeAt()+';');
}

/**
 * Encodes a URI by replacing each instance of certain characters representing the UTF-8 encoding of the character.
 * @returns {string}
 */
String.prototype.encodeUri = function () {
    return window.encodeURI(this);
}

/**
 * This will return a string with a proper title case format.
 * You can control which words that should not have a case change.
 * @param startLowerCase
 * @param ignoredWords
 * @returns {string}
 */
String.prototype.headingCase = function (startLowerCase = false, ignoredWords = ['a', 'and', 'as', 'at', 'but', 'by', 'etc', 'for', 'if', 'in', 'into', 'is', 'nor', 'of', 'on', 'onto', 'or', 'so', 'the', 'to']) {
    return this.words().map((word, id) => ignoredWords.includes(word) && id !== 0 ? word : word.capitalize(startLowerCase)).join(' ');
}

/**
 * Transform a string if a condition is met.
 * @param condition The expression to evaluate the callback.
 * @param callback The function to execute upon a successful condition.
 * @returns {*|String}
 */
String.prototype.if = function (condition, callback) {
    return condition && typeof callback === 'function' ? callback(this) : this;
}

/**
 * Transform a string based off a condition.
 * @param condition The expression to evaluate the callbacks.
 * @param ifCallback {function} Called if the condition is true.
 * @param elseCallback {function} Called if the condition is false.
 * @returns {*|String}
 */
String.prototype.ifElse = function (condition, ifCallback, elseCallback) {
    if (condition) {
        return typeof ifCallback === 'function' ? ifCallback(this) : this;
    } else {
        return typeof elseCallback === 'function' ? elseCallback(this) : this;
    }
}

/**
 * Transforms the entire string to lower case.
 * @returns {string}
 */
String.prototype.lowerCase = function () {
    return this.toLowerCase();
}

/**
 * Mixes up the words in a string.
 * @returns {string}
 */
String.prototype.mixWords = function () {
    const arr = this.words();
    let currentIndex = arr.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr.join(' ');
}

/**
 * Replaces all newlines with an html line break
 * @param useXHtml
 * @returns {string}
 */
String.prototype.nl2br = function (useXHtml = true) {
    return !!this ? this.replaceAll('\n', (useXHtml ? '<br />' : '<br>')) : '';
}

/**
 * Allows only the characters specified in the regex
 * @param regex The pattern to whitelist
 * @param caseSensitive Determines whether the regex will ignore case.
 * @returns {string}
 */
String.prototype.only = function (regex = /./, caseSensitive = true) {
    const re = new RegExp(`[^${regex}]`, `g${!caseSensitive ? 'i' : ''}`);
    return this.replaceAll(re,'');
}

/**
 * Allows only the alphabet (A-Z)
 * @param whiteList Extra characters to allow
 * @returns {string}
 */
String.prototype.onlyLetters = function (whiteList = []) {
    const re = new RegExp(`[^a-z${whiteList.join('')}]`, 'gi');
    return this.replaceAll(re,'');
}

/**
 * Allows only digits (0-9)
 * @param whiteList Extra characters to allow
 * @returns {string}
 */
String.prototype.onlyNumbers = function (whiteList = []) {
    const re = new RegExp(`[^0-9${whiteList.join('')}]`, 'g');
    return this.replaceAll(re,'');
}

/**
 * Formats a string in pascal case.
 * Example: PascalCaseIsAwesome
 * @returns {string}
 */
String.prototype.pascalCase = function () {
    return this.camelCase().capitalize();
}

/**
 * Adds a plural character based off the numeric interval.
 * @param interval Numerical item count.
 * @param postfix The string to append, usually an S.
 * @param removeLastCharacter Removes the last character (Example: replacing a Y for IES).
 * @param pluralInterval Integer of when the postfix isn't applied, usually 1.
 * @returns {string}
 */
String.prototype.pluralize = function (interval, postfix = 's', removeLastCharacter = false, pluralInterval = 1) {
    const text = this.if(removeLastCharacter, text => interval === pluralInterval ? text : text.slice(0, -1));
    return interval === pluralInterval ? `${text}` : `${text}${postfix}`;
}

/**
 * Randomizes the case for all characters in a string.
 * @returns {string}
 */
String.prototype.randomCase = function () {
    return this.split('').map((char) =>
        Math.round(Math.random()) ? char.upperCase() : char.lowerCase()
    ).join('');
}

/**
 * Removes any extra outer and inner whitespaces with a defined value.
 * @param replaceValue The string to replace the whitespace.
 * @returns {string}
 */
String.prototype.removeWhitespace = function (replaceValue = '') {
    return this.replace(/\s+/g, replaceValue);
}

/**
 * Shows all spaces, tabs, and newlines with a character.
 * Only spaces will be replaced with a character.
 * Spaces = '◦', Tabs = '⇥', Newlines = '⏎'
 * @returns {string}
 */
String.prototype.showWhitespaceCharacters = function () {
    return this.replace(/ /g, '◦')
        .replace(/(\n)/g, `⏎$1`)
        .replace(/(\t)/g, `⇥$1`);
}

/**
 * Shuffles all characters in a string.
 * @returns {string}
 */
String.prototype.shuffle = function () {
    const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
    let shuffle = [...this];
    shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );
    return shuffle.join('');
}

/**
 * Shuffles all words and joins by a separator.
 * @param separator The string to join by.
 * @returns {string}
 */
String.prototype.shuffleWords = function (separator = ' ') {
    return this.words().map(word => word.shuffle()).join(separator);
}

/**
 * Strips HTML tags from a string.
 * @returns {string|string}
 */
String.prototype.stripTags = function () {
    const div = document.createElement('div');
    div.innerHTML = this;
    return div.textContent || div.innerText || '';
}

/**
 * Calculates the amount of bytes a string contains
 * @returns {number}
 */
String.prototype.toBytes = function () {
    return new Blob([this]).size;
}

/**
 * Transforms a string to a number.
 * @returns {number}
 */
String.prototype.toNumber = function () {
    return parseFloat(this.onlyNumbers(['.']));
}

/**
 * Removes outer whitespace and replaces inner whitespace with a defined value.
 * @param replaceValue The value to replace the whitespace with.
 * @returns {string}
 */
String.prototype.trimWhitespace = function (replaceValue = ' ') {
    return this
        .replace(/\s+/g, replaceValue)
        .trim();
}

/**
 * Displays a defined amount of characters before the postfix/clamp.
 * @param characterLength The amount of characters to display
 * @param clamp The characters after the truncated string.
 * @param trimWhitespace
 * @returns {string}
 */
String.prototype.truncateCharacters = function (characterLength, clamp = '', trimWhitespace = true) {
    return this.if(trimWhitespace, (str) => str.trimWhitespace()).slice(0, characterLength) + (characterLength < this.length ? clamp : '');
}

/**
 * Displays a defined amount of words before the postfix/clamp.
 * @param wordLength
 * @param clamp
 * @returns {string}
 */
String.prototype.truncateWords = function (wordLength, clamp = '') {
    return this.words().slice(0, wordLength).join(' ') + (wordLength < this.wordCount() ? clamp : '');
}

/**
 * Transforms the entire string to upper case.
 * @returns {string}
 */
String.prototype.upperCase = function () {
    return this.toUpperCase();
}

/**
 * Creates a URI formatted string that consists of only numbers and letters separated by a delimiter.
 * @param delimiter The character to join the words
 * @returns {string|string}
 */
String.prototype.uriSlug = function (delimiter = '-') {
    return !!this ? this.toLowerCase()
        .replaceAll(/[^a-z0-9-\s]+/g, '')
        .trim()
        .replaceAll(/\s+/g, delimiter) : '';
}

/**
 * The number of words in a string.
 * If a word map is required, use `example.words(wordMap).length` instead.
 * @returns {number}
 */
String.prototype.wordCount = function () {
    return this.words().length;
}

/**
 * Words that were separated by a space.
 * @param wordMap {function} A map function to transform each word.
 * @returns {array}
 */
String.prototype.words = function (wordMap = null) {
    return this
        .trim()
        .split(/ +/)
        .map((word, wordId) => typeof wordMap === 'function' ? wordMap(word, wordId) : word)
        .filter(word => !!word);
}

/**
 * String Methods
 */

/**
 * Generates a string of random cased letters, numbers and special characters.
 * @param length The length of the result.
 * @param includeSpecialCharacters Include special characters in result.
 * @param specialCharacters {array} Special characters to include in the result.
 * @returns {string}
 */
String.randomString = function (length = 8, includeSpecialCharacters = true, specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '`', '~', '-', '_', '+', '=']) {
    // Lower or higher this number to control the
    // odds that a special character will appear.
    const specialCharacterOdds = 7;
    return [...Array(length)].map(() => Math.random().toString(36)[2].randomCase()
        .if(includeSpecialCharacters && !Math.floor(Math.random() * specialCharacterOdds), (char) => char = specialCharacters[Math.floor(Math.random() * specialCharacters.length)])).join('');
}