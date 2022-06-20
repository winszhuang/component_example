<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'

const props = defineProps<{isOpen: boolean}>()
const emit = defineEmits<{(e: 'update:isShow', isShow: boolean): void}>()

const isOpen = useVModel(props, 'isOpen', emit)

function setIsOpen(value) {
  isOpen.value = value
}
</script>

<template>
  <Dialog :open="isOpen" @close="setIsOpen">
    <!-- The backdrop, rendered as a fixed sibling to the panel container -->
    <div class="fixed inset-0 bg-black/20" aria-hidden="true" ></div>

    <!-- Full-screen container to center the panel -->
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <DialogPanel class="p-4 rounded-md shadow-md bg-slate-400">
        <DialogTitle class="text-2xl">Deactivate account</DialogTitle>
        <DialogDescription class="my-4">
          This will permanently deactivate your account
        </DialogDescription>
  
        <button
          class="px-6 py-2 mr-4 bg-red-300 rounded-md"
          @click="setIsOpen(false)">Deactivate</button>
        <button @click="setIsOpen(false)">Cancel</button>
      </DialogPanel>
    </div>
  </Dialog>
</template>