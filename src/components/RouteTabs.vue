<template>
  <TabGroup @change="changeIndex">
    <TabList class="flex">
      <Tab
        v-for="menu in props.routeList"
        as="template" 
        :key="menu.path"
        v-slot="{ selected }"
      >
        <button
          :class="[
            'w-full py-4 text-sm font-medium leading-5 text-blue-700',
            selected
              ? ' bg-green-700 text-green-100'
              : 'text-blue-100 hover:bg-green-700/[0.12] hover:text-white bg-slate-500',
          ]"
        >
          {{ menu.name }}
        </button>
      </Tab>
    </TabList>

    <TabPanels class="mt-2">
      <template
        v-for="menu in props.routeList"
        :key="menu.path"
      >
        <slot :name="menu.name"/>
      </template>
    </TabPanels>


  </TabGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps<{
  routeList: {
    path?: string,
    name: string,
  }[]
}>()


const currentRoute = ref(props.routeList[0])
router.push({ name: currentRoute.value.name })

function changeIndex(index: number) {
  currentRoute.value = props.routeList[index]
  router.push({ name: currentRoute.value.name })
}

</script>