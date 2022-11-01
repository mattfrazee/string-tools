<script setup>
import {computed, onMounted} from "vue";
import CodeBlock from './CodeBlock.vue';

const props = defineProps({
  data: String,
  description: String,
  method: String,
  example: String,
  returnType: String,
  params: Array,
  value: {},
})

const paramText = computed(() => {
  let text = '';
  if (props.params) {
    props.params.forEach((param, id) => {
      text += id > 0 ? ', ' : '';
      if (param.default === undefined) {
        text += param.name;
      } else {
        text += `${param.name} = ${param.default === '' ? '""' : (param.type.name === 'String' ? '"'+param.default+'"' : param.default)}`;
      }
    });
  }
  return text;
});
</script>

<template>
  <div :id="method" class="output-container block pt-10 mx-auto md:w-3/4">
    <h2 class="font-mono mb-2 text-xl md:text-2xl italic">{{ method }}(<span class="text-base md:text-xl text-slate-400">{{ paramText }}</span>)</h2>
    <p class="mb-2" v-if="!!params">Parameters:
      <span class="inline-block" v-for="(param, id) in params">
        <span class="ml-1 mr-2" v-if="id > 0">,</span>
        <span class="px-2 py-1 rounded bg-slate-800 inline-block font-mono text-sm text-slate-400">
          {{ param.type.name }}
          <span class="text-white">
            {{ param.name }}
          </span>
        </span>
      </span>
    </p>
    <p class="mb-2">Returns:
      <span class="px-2 py-1 rounded font-mono text-sm bg-slate-800 inline-block">
        {{ returnType ?? value.constructor.name }}
      </span>
    </p>
    <p class="mb-10 text-lg">{{ description }}</p>
    <CodeBlock v-if="data" class="mb-4">
      <p class="comment">// String</p>
      <code class="block whitespace-pre-line">const example = `{{ data }}`;</code>
    </CodeBlock>
    <CodeBlock v-if="example" class="mb-4">
      <p class="comment">// Usage</p>
      <code class="block whitespace-pre-line">{{ example }}</code>
    </CodeBlock>
    <CodeBlock>
      <p class="comment">// Output</p>
      <code class="whitespace-pre-line">{{ value }}</code>
    </CodeBlock>
  </div>
</template>
<style>
.comment {
  @apply text-slate-400
}
</style>