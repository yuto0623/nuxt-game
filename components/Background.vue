<script setup lang="ts">
const { clickCount, count, timeSpeed, shopList, incrementCount, decrementCount } = useNumberStates()

function getRandomNumber() {
  return Math.floor(Math.random() * 101);
}
</script>



<template>
  <NuxtImg src="/shopList/thinVillagers.png" height="40" v-for="i in shopList.thinVillagers.count.value"
    class="absolute -z-10" :key="i" :style="{ left: `${getRandomNumber()}%`, top: `${getRandomNumber()}%` }" />

</template>
