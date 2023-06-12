<script setup>
import { computed } from 'vue'
import { containerMaxW } from '@/config.js';
import BaseLevel from '@/Components/BaseLevel.vue'
import JustboilLogo from '@/Components/JustboilLogo.vue'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="py-2 px-6 w-full text-center sticky bottom-0">
      <div class="text-center">
          <b>&copy;{{ year }}<a href="https://otomotives.com" target="_blank"> Oscar</a></b>
      </div>
  </footer>
</template>
