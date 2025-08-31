<script setup lang="ts">
import { onMounted, ref, useSlots } from "vue";
import { NoiserText } from "../Noiser";

const textRef = ref("");
const slots = useSlots();

onMounted(() => {
  // Get slot content as string
  const slotContent =
    typeof slots.default === "function"
      ? slots
          .default()
          .map((v) => v.children)
          .join("")
      : "";
  NoiserText.start(slotContent, (text) => (textRef.value = text));
});
</script>

<template>
  {{ textRef }}
</template>
