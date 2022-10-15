// String functions
// By: Matt Frazee

String.prototype.camelCase = function () {
    return this.lowerCase().onlyLetters([' ']).replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.lowerCase() : word.upperCase();
    }).replace(/\s+/g, '');
}
String.prototype.capitalize = function (startLowerCase = false) {
    return this.charAt(0).upperCase() + this.slice(1).if(startLowerCase, (string) => string.lowerCase());
    // return this.charAt(0).upperCase() + this.slice(1).lowerCase();
}
String.prototype.headingCase = function (startLowerCase = false, ignoredWords = ['a', 'and', 'as', 'at', 'but', 'by', 'etc', 'for', 'if', 'in', 'into', 'is', 'nor', 'of', 'on', 'onto', 'or', 'so', 'the', 'to']) {
    return this.words().map((word, id) => ignoredWords.includes(word) && id !== 0 ? word : word.capitalize(startLowerCase)).join(' ');
}
String.prototype.if = function (condition, callback) {
    return condition && typeof callback === 'function' ? callback(this) : this;
}
String.prototype.lowerCase = function () {
    return this.toLowerCase();
}
String.prototype.nl2br = function (useXHtml = true) {
    return !!this ? this.replaceAll('\n', (useXHtml ? '<br />' : '<br>')) : '';
}
String.prototype.onlyLetters = function (whiteList = []) {
    const re = new RegExp(`[^a-z${whiteList.join('')}]`, 'gi');
    return this.replaceAll(re,'');
}
String.prototype.onlyNumbers = function (whiteList = []) {
    const re = new RegExp(`[^0-9${whiteList.join('')}]`, 'g');
    return this.replaceAll(re,'');
}
String.prototype.pascalCase = function () {
    return this.charAt(0).upperCase() + this.camelCase().slice(1);
}
String.prototype.pluralize = function (count, postfix = 's', countTrigger = 1) {
    return count === countTrigger ? `${this}` : `${this}${postfix}`;
}
String.prototype.shuffle = function () {
    let shuffle = [...this];
    const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
    shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );
    return shuffle.join('');
}
String.prototype.stripTags = function () {
    const div = document.createElement('div');
    div.innerHTML = this;
    return div.textContent || div.innerText || '';
}
String.prototype.toBytes = function () {
    return new Blob([this]).size;
}
String.prototype.toNumber = function () {
    return parseFloat(this.onlyNumbers(['.']));
}
String.prototype.truncateCharacters = function (characterLength, clamp = '', ignoreWhitespace = true) {
    return this.slice(0, characterLength).if(ignoreWhitespace, (str) => str.trim()) + (characterLength < this.length ? clamp : '');
}
String.prototype.truncateWords = function (wordLength, clamp = '') {
    return this.words().slice(0, wordLength).join(' ') + (wordLength < this.wordCount() ? clamp : '');
}
String.prototype.upperCase = function () {
    return this.toUpperCase();
}
String.prototype.urlSlug = function (delimiter = '-') {
    return !!this ? this.toLowerCase()
        .replaceAll(/[^a-z0-9-\s]+/g, '')
        .trim()
        .replaceAll(/\s+/g, delimiter) : '';
}
String.prototype.wordCount = function () {
    return this.words().length;
}
String.prototype.words = function () {
    return this.split(' ').filter(item => !!item);
}