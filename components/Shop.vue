<script setup lang="ts">
const { count, incrementCount, decrementCount } = useNumberStates()
import type { shopState } from '~/composables/useNumberStates';

const { shop } = defineProps<{ shop: shopState }>();

const villagersCountHandler = () => {
  if (count.value < shop.price.value) {
    return;
  }
  incrementCount(shop.count)
  decrementCount(count, shop.price.value)
}
</script>

<template>
  <UButton @click="villagersCountHandler" class="flex w-full justify-between items-center py-4"
    :disabled="count < shop.price.value">
    {{ shop.name }}を一人雇う<br />{{
      shop.price.value }}円(毎秒{{ shop.incrementCount }}円)
    <template #leading>
      <UAvatar :src="`shopList/${shop.key}.png`" size="sm" imgClass="object-contain" />
    </template>
  </UButton>
</template>
