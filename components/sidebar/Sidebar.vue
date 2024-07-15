<script setup lang="ts">
const { count, thinVillagersCount, thinVillagersIncrementCount, incrementCount } = useNumberStates()

</script>

<template>
  <UCard class="basis-1/6 min-w-[255px]">
    <Save />
    <p>村人の数: {{ thinVillagersCount }}(毎秒:{{ (thinVillagersCount * thinVillagersIncrementCount).toFixed(1) }})</p>
  </UCard>
</template>
毎秒
