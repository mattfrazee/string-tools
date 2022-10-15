<script setup>
defineProps({
  code: String
})
</script>
<template>
  <div class="block mx-auto rounded-lg p-4 container bg-slate-500 font-mono">
    <slot></slot>
  </div>
</template>