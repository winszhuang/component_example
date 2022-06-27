<template>
  <RouteTabs
    :route-list="BetsMenuList"
  >
    <template #>
        
    </template>  
  </RouteTabs>
</template>

<script setup lang="ts">
import RouteTabs from '../../components/RouteTabs.vue'
import { BetsMenuList } from '../../constants/menuKey'
import { useRouter } from 'vue-router';

</script>