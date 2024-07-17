<script setup lang="ts">
import { ref, watch } from 'vue';
const { clickCount, count, timeSpeed, shopList, incrementCount, decrementCount } = useNumberStates();

const positions = ref<{ left: number, top: number, src: string }[]>([]);

function getRandomNumber() {
  return Math.floor(Math.random() * (90 - 10 + 1)) + 10;
}

// 共通の位置追加ロジック
function addPositions(newValue: number, src: string) {
  while (positions.value.length < newValue) {
    positions.value.push({
      left: getRandomNumber(),
      top: getRandomNumber(),
      src
    });
  }
}

// thinVillagers のカウントを監視
watch(() => shopList.thinVillagers.count.value, (newValue) => {
  addPositions(newValue, '/shopList/thinVillagers.png');
});

// villagers のカウントを監視
watch(() => shopList.villagers.count.value, (newValue) => {
  addPositions(newValue, '/shopList/villagers.png');
});
</script>

<template>
  <NuxtImg :src="position.src" height="40" v-for="(position, index) in positions" class="absolute -z-10" :key="index"
    :style="{ left: `${position.left}%`, top: `${position.top}%` }" />
</template>
