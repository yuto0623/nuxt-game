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
  <UButton @click="villagersCountHandler" class="flex w-full justify-center items-center py-4"
    :disabled="count < shopList.thinVillagers.price.value">
    やせ細った村人を一人雇う<br />{{
      shopList.thinVillagers.price.value }}円(毎秒{{ shopList.thinVillagers.incrementCount }}円)
    <template #leading>
      <UAvatar src="shopList/thinVillagers.png" size="sm" imgClass="object-contain" />
    </template>
  </UButton>
</template>
