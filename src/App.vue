<script setup>
import Output from './components/Output.vue'
import {ref} from "vue";
import './js/string-tools';

const sampleText = ref('The quick brown fox jumped over the lazy dog.');
const newlineText = ref('The quick brown \nfox jumped over \nthe lazy dog.');
const htmlText = ref('<div class="text-center">The five boxing wizards <em>jump quickly</em>.</div>');
const pluralText = ref('Box');
const toNumberText = ref('$2,000.92');
const numbersAndLetters = ref('A-B-C, 123, Do re mi.');
</script>

<template>
  <div class="grid grid-cols-1 items-center justify-center h-full">
    <div class="pt-20 pb-10">
      <h1 style="font-family:'Bebas Neue'" class="text-6xl -font-thin md:w-3/4 mx-auto">
        String <span class="text-slate-400">Prototypes</span>
      </h1>
      <p class="text-slate-400 text-xs -mt-1 md:w-3/4 mx-auto">By: Matt Frazee</p>

      <div class="mx-auto md:w-3/4 my-20">
        <label class="mb-0 text-xs font-bold text-slate-400 uppercase tracking-widest">Sample Text</label>
        <input
            class="block mx-auto border-b-2 border-slate-400 py-3 text-xl text-lime-400 container bg-transparent font-mono mb-10"
            v-model="sampleText">
        <label class="mb-0 text-xs font-bold text-slate-400 uppercase tracking-widest">Plural Text</label>
        <input
            class="block mx-auto border-b-2 border-slate-400 py-3 text-xl text-lime-400 container bg-transparent font-mono mb-10"
            v-model="pluralText">
        <label class="mb-0 text-xs font-bold text-slate-400 uppercase tracking-widest">HTML Text</label>
        <textarea
            rows="2"
            class="block mx-auto border-b-2 border-slate-400 py-3 text-xl text-lime-400 container bg-transparent font-mono resize-none mb-10"
            v-model="htmlText"></textarea>
        <label class="mb-0 text-xs font-bold text-slate-400 uppercase tracking-widest">Multiline Text</label>
        <textarea
            rows="3"
            class="block mx-auto border-b-2 border-slate-400 py-3 text-xl text-lime-400 container bg-transparent font-mono resize-none mb-10"
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
                :params="[{name:'startLowerCase', type:Boolean, default: false}]"
                :value="sampleText.capitalize()"/>

        <Output method="headingCase"
                description="A conditional function to modify the text under a certain condition."
                example="example.headingCase();"
                :data="sampleText"
                :params="[
                    {
                      name:'startLowerCase',
                      type:Boolean,
                      default: false
                      },
                    {
                      name:'ignoredWords',
                      type:Array,
                      default: '[\''+['a', 'and', 'as', 'at', 'but', 'by', 'etc', 'for', 'if', 'in', 'into', 'is', 'nor', 'of', 'on', 'onto', 'or', 'so', 'the', 'to'].join('\', \'')+'\']'
                    }]"
                :value="sampleText.headingCase()+'\n'"/>

        <Output method="if"
                description="A conditional function to modify the text under a certain condition."
                example="example.if(1 === 2, text => text.pascalCase());
                example.if(1 === 1, text => text.upperCase());"
                :data="sampleText"
                :params="[{name:'condition', type:Boolean}, {name:'callback', type:(function(){}).constructor}]"
                :value="sampleText.if(1 === 2, text => text.pascalCase())+'\n'+sampleText.if(1 === 1, text => text.upperCase())"/>

        <Output method="lowerCase"
                description="An alias of toLowerCase()."
                example="example.lowerCase();"
                :data="sampleText"
                :value="sampleText.lowerCase()"/>

        <Output method="nl2br"
                description="This is similar to the php function `nl2br` and will replace all new lines with an html line break."
                example="example.nl2br();
                example.nl2br(false);"
                :data="newlineText"
                :params="[{name:'useXHtml', default:'true', type:Boolean}]"
                :value="newlineText.nl2br()+'\n'+newlineText.nl2br(false)"/>

        <Output method="pascalCase"
                description="Formats a string in pascal case."
                example="example.pascalCase();"
                :data="sampleText"
                :value="sampleText.pascalCase()"/>

        <Output method="onlyLetters"
                description="This will remove any character that is not a letter."
                example="example.onlyLetters();
                example.onlyLetters([' ', '-']);"
                :data="numbersAndLetters"
                :params="[{name:'whiteList', default: '[]', type:Array}]"
                :value="numbersAndLetters.onlyLetters()+'\n'+numbersAndLetters.onlyLetters([' ', '-'])"/>

        <Output method="onlyNumbers"
                description="This will remove any character that is not a number."
                example="example.onlyNumbers();
                example.onlyNumbers(['.']);"
                :data="numbersAndLetters"
                :params="[{name:'whiteList', default: '[]', type:Array}]"
                :value="numbersAndLetters.onlyNumbers()+'\n'+numbersAndLetters.onlyNumbers(['.'])"/>

        <Output method="pluralize"
                description="This will add a plural character based off the numeric interval."
                example="example.pluralize(1, 'es');
                example.pluralize(4, 'es');"
                :data="pluralText"
                :params="[{name:'count', type:Number}, {name:'postfix', default:'s', type:String}, {name:'countTrigger', default:'1', type:Number}]"
                :value="pluralText.pluralize(1, 'es')+'\n'+pluralText.pluralize(4, 'es')"/>

        <Output method="stripTags"
                description="This is similar to the php function `strip_tags()` and will remove all html elements, whilest keeping the inner text."
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
                :params="[{name:'characterLength', type: Number}, {name:'clamp', default:'', type: String}, {name:'ignoreWhitespace', default:'true', type: Boolean}]"
                :value="sampleText.truncateCharacters(18, '...')+'\n'+sampleText.truncateCharacters(10, '...', false)"/>

        <Output method="truncateWords"
                description="This will only display a certain amount of words before the postfix."
                example="sampleText.truncateWords(5, '...')"
                :data="sampleText"
                :params="[{name:'wordLength', type: Number}, {name:'clamp', default:'', type: String}]"
                :value="sampleText.truncateWords(5, '...')"/>

        <Output method="upperCase"
                description="An alias of toUpperCase()."
                example="sampleText.upperCase();"
                :data="sampleText"
                :value="sampleText.upperCase()"/>

        <Output method="urlSlug"
                description="Create a url formatted string that consists of only numbers and letters separated by a delimiter."
                example="sampleText.urlSlug();"
                :data="sampleText"
                :value="sampleText.urlSlug()"
                :params="[{name:'delimiter', default:'', type: String}]"/>

        <Output method="wordCount"
                description="The number of words that are separated by a space."
                example="sampleText.wordCount();"
                :data="sampleText"
                :value="sampleText.wordCount()"/>

        <Output
            method="words"
            description="This will result in an array of the words in a given string."
            example="sampleText.words();"
            :data="sampleText"
            :value='"[\""+sampleText.words().join("\", \"")+"\"]"'/>
      </div>

    </div>
  </div>
  <!--  <HelloWorld msg="Vite + Vue" />-->
</template>
