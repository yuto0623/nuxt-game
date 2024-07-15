<script setup lang="ts">
const { count, thinVillagersCount, thinVillagersIncrementCount, thinVillagersCountPrice, incrementCount, decrementCount } = useNumberStates()

onMounted(() => {
  const interval = setInterval(() => {
    incrementCount(count, thinVillagersCount.value * thinVillagersIncrementCount.value)
  }, 1000)

  onUnmounted(() => {
    clearInterval(interval)
  })
})

const countHandler = () => {
  incrementCount(count)
}

</script>

<template>
  <div class="flex h-[100dvh]">
    <Sidebar />
    <div class="flex justify-center items-center basis-5/6 flex-col">
      <p class="text-3xl mb-9">{{ count.toFixed(1) }}円</p>
      <UCard class="max-w-sm">
        <UButton @click="countHandler" class="block my-2">1円拾う</UButton>
        <shopListThinVillagers />
      </UCard>
    </div>
  </div>
</template>
