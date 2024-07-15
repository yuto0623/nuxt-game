<script setup lang="ts">
const { count, villagersCount, villagersIncrementCount, villagersCountPrice, incrementCount, decrementCount } = useNumberStates()

const villagersCountHandler = () => {
  if (count.value < villagersCountPrice.value) {
    return;
  }
  incrementCount(villagersCount)
  decrementCount(count, villagersCountPrice.value)
}
</script>

<template>
  <UButton @click="villagersCountHandler" class="block" :disabled="count < villagersCountPrice">普通の村人を一人雇う：{{
    villagersCountPrice }}円(毎秒{{ villagersIncrementCount }}円)</UButton>
</template>
