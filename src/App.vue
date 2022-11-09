<script setup>
import Output from './components/Output.vue'
import {ref} from "vue";
import './js/string-tools';

const sampleText = ref('The quick brown fox jumped over the lazy dog.');
const longString    = 'How vexingly quick daft zebras jump! Pack my box with 5 dozen liquor jugs.';
const newlineText = ref('The quick brown \nfox jumped over \nthe lazy dog.');
const htmlText = ref('<div class="text-center">The five boxing wizards <em>jump quickly</em>.</div>');
const pluralText = ref('Box');
const toNumberText = ref('$2,000.92');
const numbersAndLetters = ref('A-B-C, 123, Do re mi.');
</script>

<template>
  <div class="grid grid-cols-1 items-center justify-center h-full">
    <div class="pt-20 pb-10 px-8 md:px-0">
      <h1 class="logo">
        String <span class="text-slate-400">Prototypes</span>
      </h1>
      <p class="text-slate-400 text-xs -mt-1 md:w-3/4 mx-auto">By: Matt Frazee</p>

      <div class="mx-auto md:w-3/4 my-20">
        <label class="sample-text-label">Sample Text</label>
        <input
            class="sample-text-input"
            v-model="sampleText">
        <label class="sample-text-label">Plural Text</label>
        <input
            class="sample-text-input"
            v-model="pluralText">
        <label class="sample-text-label">HTML Text</label>
        <textarea
            rows="2"
            class="sample-text-input"
            v-model="htmlText"></textarea>
        <label class="sample-text-label">Multiline Text</label>
        <textarea
            rows="3"
            class="sample-text-input"
            v-model="newlineText"></textarea>
      </div>

      <div class="divide-y divide-slate-500 space-y-10 my-10">

        <Output method="camelCase"
                description="Capitalizes the first letter in a string of text."
                example="example.camelCase();"
                :data="sampleText"
                :value="sampleText.camelCase()"/>

        <Output method="capitalize"
                description="Capitalizes the first letter in a string of text."
                example="example.capitalize();"
                :data="sampleText"
                :params="[
                    {name:'startLowerCase', type:Boolean, default: false}
                ]"
                :value="sampleText.capitalize()"/>

        <Output method="headingCase"
                description="This will return a string with a proper title case format. You can control which words that should not have a case change."
                example="example.headingCase();
                example.headingCase(true, []);"
                :data="sampleText"
                :params="[
                    {name:'startLowerCase', type:Boolean, default: false},
                    {name:'ignoredWords', type:Array, default: '[\''+['a', 'and', 'as', 'at', 'but', 'by', 'etc', 'for', 'if', 'in', 'into', 'is', 'nor', 'of', 'on', 'onto', 'or', 'so', 'the', 'to'].join('\', \'')+'\']'}
                ]"
                :value="sampleText.headingCase()+'\n'+sampleText.headingCase(true, [])"/>

        <Output method="if"
                description="A conditional function to modify the text under a certain condition."
                example="example.if(1 === 2, text => text.pascalCase());
                example.if(1 === 1, text => text.upperCase());"
                :data="sampleText"
                :params="[
                    {name:'condition', type:Boolean},
                    {name:'callback', type:(function(){}).constructor}
                ]"
                :value="sampleText.if(1 === 2, text => text.pascalCase())+'\n'+sampleText.if(1 === 1, text => text.upperCase())"/>

        <Output method="ifElse"
                description="A conditional function to modify the text under a certain condition."
                example="example.ifElse(1 === 1, text => text.pascalCase(), text => text.randomCase());
                example.ifElse(1 === 2, text => text.pascalCase(), text => text.randomCase());"
                :data="sampleText"
                :params="[
                    {name:'condition', type:Boolean},
                    {name:'ifCallback', type:(()=>{}).constructor},
                    {name:'elseCallback', type:(()=>{}).constructor}
                ]"
                :value="sampleText.ifElse(1 === 1, text => text.pascalCase(), text => text.randomCase())+'\n'+sampleText.ifElse(1 === 2, text => text.pascalCase(), text => text.randomCase())"/>

        <Output method="lowerCase"
                description="An alias of toLowerCase()."
                example="example.lowerCase();"
                :data="sampleText"
                :value="sampleText.lowerCase()"/>

        <Output method="mixWords"
                description="This will randomly shuffle all the words in a string."
                example="example.mixWords();"
                :params="[
                    {name:'separator', type:String, default: ' '}
                ]"
                :data="sampleText"
                :value="sampleText.mixWords()"/>

        <Output method="nl2br"
                description="This is similar to the php function `nl2br` and will replace all new lines with an html line break."
                example="example.nl2br();
                example.nl2br(false);"
                :data="newlineText"
                :params="[
                    {name:'useXHtml', default:'true', type:Boolean}
                ]"
                :value="newlineText.nl2br()+'\n'+newlineText.nl2br(false)"/>

        <Output method="onlyLetters"
                description="This will remove any character that is not a letter."
                example="example.onlyLetters();
                example.onlyLetters([' ', '-']);"
                :data="numbersAndLetters"
                :params="[
                    {name:'whiteList', default: '[]', type:Array}
                ]"
                :value="numbersAndLetters.onlyLetters() + '\n' + numbersAndLetters.onlyLetters([' ', '-'])"/>

        <Output method="onlyNumbers"
                description="This will remove any character that is not a number."
                example="example.onlyNumbers();
                example.onlyNumbers(['.']);"
                :data="numbersAndLetters"
                :params="[
                    {name:'whiteList', default: '[]', type:Array}
                ]"
                :value="numbersAndLetters.onlyNumbers()+'\n'+numbersAndLetters.onlyNumbers(['.'])"/>

        <Output method="pascalCase"
                description="Formats a string in pascal case."
                example="example.pascalCase();"
                :data="sampleText"
                :value="sampleText.pascalCase()"/>

        <Output method="pluralize"
                description="This will add a plural character based off the numeric interval."
                example="example.pluralize(1, 'es');
                example.pluralize(4, 'es');
                'Grape'.pluralize(4);
                'Bunny'.pluralize(2, 'ies', true);"
                :data="pluralText"
                :params="[
                    {name:'interval', type:Number},
                    {name:'postfix', default:'s', type:String},
                    {name:'removeLastCharacter', default:'false', type:Boolean},
                    {name:'pluralInterval', default:'1', type:Number}
                ]"
                :value="
                pluralText.pluralize(1, 'es') + '\n' +
                pluralText.pluralize(4, 'es') + '\n' +
                'Grape'.pluralize(4) + '\n' +
                'Bunny'.pluralize(2, 'ies', true)"/>

        <Output method="randomCase"
                description="This will randomly change the case of each character."
                example="example.randomCase();"
                :data="sampleText"
                :value="sampleText.randomCase()"/>

        <Output method="String.randomString"
                description="This will randomly generate a string with letters and numbers."
                example="String.randomString(10);"
                :params="[
                    {name:'length', type:Number, default: '8'},
                ]"
                :value="String.randomString(10)"/>

        <Output method="shuffle"
                description="This will randomly shuffle characters in a string."
                example="example.shuffle();"
                :data="sampleText"
                :value="sampleText.shuffle()"/>

        <Output method="shuffleWords"
                description="This will randomly shuffle all the characters bound from each word."
                example="example.shuffleWords();"
                :params="[
                    {name:'separator', type:String, default: ' '}
                ]"
                :data="sampleText"
                :value="sampleText.shuffleWords()"/>

        <Output method="stripTags"
                description="This is similar to the php function `strip_tags()` and will remove all html elements, while keeping the inner text."
                example="example.stripTags();"
                :data="htmlText"
                :value="htmlText.stripTags()"/>

        <Output method="toBytes"
                description="Converts the string into a filesize."
                example="example.toBytes();"
                :data="sampleText"
                :value="sampleText.toBytes()"/>

        <Output method="toNumber"
                description="Converts the string into a number using `parseFloat`."
                example="example.toNumber();"
                :data="toNumberText"
                :value="toNumberText.toNumber()"/>

        <Output method="truncateCharacters"
                description="This will only display a certain amount of characters before the postfix."
                example="example.truncateCharacters(18, '...');
                example.truncateCharacters(10, '...', false);"
                :data="sampleText"
                :params="[
                    {name:'characterLength', type: Number},
                    {name:'clamp', default:'', type: String},
                    {name:'ignoreWhitespace', default:'true', type: Boolean}
                ]"
                :value="sampleText.truncateCharacters(18, '...')+'\n'+sampleText.truncateCharacters(10, '...', false)"/>

        <Output method="truncateWords"
                description="This will only display a certain amount of words before the postfix."
                example="example.truncateWords(5, '...')"
                :data="sampleText"
                :params="[
                    {name:'wordLength', type: Number},
                    {name:'clamp', default:'', type: String}
                ]"
                :value="sampleText.truncateWords(5, '...')"/>

        <Output method="upperCase"
                description="An alias of toUpperCase()."
                example="example.upperCase();"
                :data="sampleText"
                :value="sampleText.upperCase()"/>

        <Output method="uriSlug"
                description="Create a url formatted string that consists of only numbers and letters separated by a delimiter."
                example="example.uriSlug();
                example.uriSlug('_');"
                :data="sampleText"
                :params="[
                    {name:'delimiter', default:'-', type: String}
                 ]"
                :value="`${sampleText.uriSlug()}
                ${sampleText.uriSlug('_')}`"/>

        <Output method="wordCount"
                description="The number of words that are separated by a space."
                example="example.wordCount();
                example.wordCount('a', word => word.onlyLetters())"
                :data="sampleText"
                return-type="Number"
                :params="[
                    {name:'separator', default:' ', type: String},
                    {name:'wordMap', type: (function(){}).constructor}
                ]"
                :value='`${sampleText.wordCount()}
                ${sampleText.wordCount("a", word => word.onlyLetters())}`'/>

        <Output
            method="words"
            description="This will result in an array of the words in a given string."
            example="example.words();
            example.words(undefined, word => word.onlyLetters().upperCase())"
            :data="longString"
            return-type="Array"
            :params="[
                {name:'separator', default:' ', type: String},
                {name:'wordMap', type: (function(){}).constructor}
            ]"
            :value='`["${longString.words().join("\", \"")}"]
            ["${longString.words(undefined, word => word.onlyLetters().upperCase()).join("\", \"")}"]`'/>
      </div>

    </div>
  </div>
  <!--  <HelloWorld msg="Vite + Vue" />-->
</template>
