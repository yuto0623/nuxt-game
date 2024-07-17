<script setup lang="ts">
const { count, shopList, incrementCount, decrementCount } = useNumberStates()

const villagersCountHandler = () => {
  if (count.value < shopList.thinVillagers.price.value) {
    return;
  }
  incrementCount(shopList.thinVillagers.count)
  decrementCount(count, shopList.thinVillagers.price.value)
}
</script>

<template>
  <UButton @click="villagersCountHandler" class="block w-full" :disabled="count < shopList.thinVillagers.price.value">
    やせ細った村人を一人雇う<br />{{
      shopList.thinVillagers.price.value }}円(毎秒{{ shopList.thinVillagers.incrementCount }}円)</UButton>
</template>
