<script setup lang="ts">
const { clickCount, count, shopList, incrementCount } = useNumberStates()

</script>

<template>
  <UCard class="basis-1/6 min-w-[255px] ">
    <template #header>
      <Save />
    </template>
    <div class="">
      <p>合計クリック回数： {{ clickCount }}</p>
      <p>やせ細った村人の数: {{ shopList.thinVillagers.count.value }}<br />(毎秒:{{ (shopList.thinVillagers.count.value *
        shopList.thinVillagers.incrementCount.value).toFixed(1)
        }}円)
      </p>
      <p>普通の村人の数: {{ shopList.villagers.count.value }}<br />(毎秒:{{ (shopList.villagers.count.value *
        shopList.villagers.incrementCount.value).toFixed(1) }}円)</p>
    </div>
    <template #footer>
      <div class="">
        <shopListThinVillagers />
        <ShopListVillagers />
      </div>
    </template>
  </UCard>
</template>
