// String functions
// By: Matt Frazee

// Prototypes
String.prototype.camelCase = function () {
    return this.lowerCase().onlyLetters([' ']).replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.lowerCase() : word.upperCase();
    }).replace(/\s+/g, '');
}
String.prototype.capitalize = function (startLowerCase = false) {
    return this.charAt(0).upperCase() + this.slice(1).if(startLowerCase, (string) => string.lowerCase());
    // return this.charAt(0).upperCase() + this.slice(1).lowerCase();
}
String.prototype.decodeHtmlEntities = function () {
    let ele = document.createElement('div');
    ele.innerHTML = this;
    const res = ele.innerText;
    ele.remove();
    return res;
}
String.prototype.decodeSpecialCharacters = function () {
    return this.replace(/(&#(\d+);)/g, (match, capture, charCode) => String.fromCharCode(charCode));
}
String.prototype.decodeUri = function () {
    return window.decodeURI(this);
}
String.prototype.encodeHtmlEntities = function () {
    let ele = document.createElement('div');
    ele.innerText = this;
    const res = ele.innerHTML;
    ele.remove();
    return res;
}
String.prototype.encodeSpecialCharacters = function () {
    return this.replace(/[\u0080-\u024F]/g, (v) => '&#'+v.charCodeAt()+';');
}
String.prototype.encodeUri = function () {
    return window.encodeURI(this);
}
String.prototype.headingCase = function (startLowerCase = false, ignoredWords = ['a', 'and', 'as', 'at', 'but', 'by', 'etc', 'for', 'if', 'in', 'into', 'is', 'nor', 'of', 'on', 'onto', 'or', 'so', 'the', 'to']) {
    return this.words().map((word, id) => ignoredWords.includes(word) && id !== 0 ? word : word.capitalize(startLowerCase)).join(' ');
}
String.prototype.if = function (condition, callback) {
    return condition && typeof callback === 'function' ? callback(this) : this;
}
String.prototype.ifElse = function (condition, ifCallback, elseCallback) {
    if (condition) {
        return typeof ifCallback === 'function' ? ifCallback(this) : this;
    } else {
        return typeof elseCallback === 'function' ? elseCallback(this) : this;
    }
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
String.prototype.pluralize = function (interval, postfix = 's', removeLastCharacter = false, pluralInterval = 1) {
    const text = this.if(removeLastCharacter, text => interval === pluralInterval ? text : text.slice(0, -1));
    return interval === pluralInterval ? `${text}` : `${text}${postfix}`;
}
String.prototype.randomCase = function () {
    return this.split('').map((char) =>
        Math.round(Math.random()) ? char.upperCase() : char.lowerCase()
    ).join('');
}
String.prototype.shuffle = function (shuffleEachWord = true) {
    const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
    if (shuffleEachWord) {
        const words = this.words();
        words.forEach((word, wordId) => {
            let shuffle = [...word];
            shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );
            words[wordId] = shuffle.join('');
        });
        return words.join(' ');
    }
    else {
        let shuffle = [...this];
        shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );
        return shuffle.join('');
    }
}
String.prototype.shuffleString = function () {
    return this.shuffle(false);
}
String.prototype.shuffleLettersInWord = function () {
    return this.shuffle(true);
}
String.prototype.shuffleWords = function () {
    const arr = this.words();
    // const arr = [...this];
    let currentIndex = arr.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    // return arr.join('');
    return arr.join(' ');
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
String.prototype.uriSlug = function (delimiter = '-') {
    return !!this ? this.toLowerCase()
        .replaceAll(/[^a-z0-9-\s]+/g, '')
        .trim()
        .replaceAll(/\s+/g, delimiter) : '';
}
String.prototype.wordCount = function (separator = ' ', wordMap) {
    return this.words(separator, wordMap).length;
}
String.prototype.words = function (separator = ' ', wordMap) {
    return this
        .split(separator)
        .map(word => typeof wordMap === 'function' ? wordMap(word) : word)
        .filter(word => !!word);
}

// Methods
String.randomString = function (length = 8, randomCase = true) {
    return [...Array(length)].map(() => Math.random().toString(36)[2]).join('').if(randomCase, string => string.randomCase())
}