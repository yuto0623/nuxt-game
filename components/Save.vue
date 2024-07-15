<script setup lang="ts">
const { count, thinVillagersCount, thinVillagersCountPrice, incrementCount, decrementCount } = useNumberStates()
const { saveImport, saveExport } = useSave()

const ref_input = ref<HTMLInputElement>()

const btnclick = () => {
  ref_input.value?.click()
}

async function selectedFile() {
  if (!ref_input.value) {
    return
  }
  const files = ref_input.value.files;
  if (!files || files.length === 0) {
    return
  }
  const file = files[0];

  saveImport(file)
}

</script>

<template>
  <div>
    <UButton @click="saveExport">セーブ書き出し</UButton>
    <UButton @click="btnclick">セーブ読み込み</UButton>
    <input style="display: none" ref="ref_input" type="file" accept=".json" @change="selectedFile">
  </div>
</template>
