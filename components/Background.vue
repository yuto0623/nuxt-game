<script setup lang="ts">
import { ref, watch } from 'vue';
const { clickCount, count, timeSpeed, shopList, incrementCount, decrementCount } = useNumberStates();

const positions = ref<{ left: number, top: number }[]>([]);

function getRandomNumber() {
  return Math.floor(Math.random() * (90 - 10 + 1)) + 10;
}

watch(() => shopList.thinVillagers.count.value, (newValue) => {
  // 増えた分だけ新しい位置を追加
  while (positions.value.length < newValue) {
    positions.value.push({
      left: getRandomNumber(),
      top: getRandomNumber()
    });
  }
});
</script>

<template>
  <NuxtImg src="/shopList/thinVillagers.png" height="40" v-for="(position, index) in positions" class="absolute -z-10"
    :key="index" :style="{ left: `${position.left}%`, top: `${position.top}%` }" />
</template>
