<script setup lang="ts">
const { count, thinVillagersCount, thinVillagersIncrementCount, villagersCount, villagersIncrementCount, incrementCount } = useNumberStates()

</script>

<template>
  <UCard class="basis-1/6 min-w-[255px]">
    <Save />
    <p>やせ細った村人の数: {{ thinVillagersCount }}(毎秒:{{ (thinVillagersCount * thinVillagersIncrementCount).toFixed(1) }}円)</p>
    <p>普通の村人の数: {{ villagersCount }}(毎秒:{{ (villagersCount * villagersIncrementCount).toFixed(1) }}円)</p>
  </UCard>
</template>
毎秒
