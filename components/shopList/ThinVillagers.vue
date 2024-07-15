<script setup lang="ts">
const { count, thinVillagersCount, thinVillagersIncrementCount, thinVillagersCountPrice, incrementCount, decrementCount } = useNumberStates()

const villagersCountHandler = () => {
  if (count.value < thinVillagersCountPrice.value) {
    return;
  }
  incrementCount(thinVillagersCount)
  decrementCount(count, thinVillagersCountPrice.value)
}
</script>

<template>
  <UButton @click="villagersCountHandler" class="block" :disabled="count < thinVillagersCountPrice">やせ細った村人を一人雇う：{{
    thinVillagersCountPrice }}円(毎秒{{ thinVillagersIncrementCount }}円)</UButton>
</template>
