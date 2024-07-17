<script setup lang="ts">
const { count, shopList, incrementCount, decrementCount } = useNumberStates()

const villagersCountHandler = () => {
  if (count.value < shopList.villagers.price.value) {
    return;
  }
  incrementCount(shopList.villagers.count)
  decrementCount(count, shopList.villagers.price.value)
}
</script>

<template>
  <UButton @click="villagersCountHandler" class="block w-full" :disabled="count < shopList.villagers.price.value">
    普通の村人を一人雇う<br />{{
      shopList.villagers.price.value }}円(毎秒{{ shopList.villagers.incrementCount }}円)</UButton>
</template>
