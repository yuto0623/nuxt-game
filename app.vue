<script setup lang="ts">
const { clickCount, count, timeSpeed, shopList, incrementCount, decrementCount } = useNumberStates()

onMounted(() => {
  const interval = setInterval(() => {
    incrementCount(count, shopList.thinVillagers.count.value * shopList.thinVillagers.incrementCount.value)
  }, timeSpeed.value)

  onUnmounted(() => {
    clearInterval(interval)
  })
})

const countHandler = () => {
  incrementCount(count)
  incrementCount(clickCount)

}

</script>

<template>
  <div class="flex h-[100dvh]">
    <div class="flex justify-center items-center basis-5/6 h-[100dvh] flex-col relative">
      <Background />
      <p class="text-3xl mb-9">{{ count.toFixed(1) }}</p>
      <UCard class="max-w-sm">
        <UButton @click="countHandler" class="block my-2">1円拾う</UButton>
      </UCard>
    </div>
    <Sidebar />
  </div>
</template>
