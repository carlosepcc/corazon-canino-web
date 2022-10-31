<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar size="xl">
            <img :src="s.logo" />
          </q-avatar>
          <span class="title q-ml-md">Corazón Canino</span>
        </q-toolbar-title>

        <CustomTabs class="gt-sm" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition
          ><keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>

    <q-footer class="lt-md">
      <CustomTabs />
    </q-footer>
  </q-layout>
</template>
<script setup lang="ts">
import CustomTabs from 'src/components/TabsCustom.vue';
import s from 'src/composables/useState';
</script>

<style>
:root {
  --radius: 6px;
}

.title {
  font-variant: small-caps;
  font-weight: 900;
  color: #fffb;
}
body {
  background: #fefefe;
}
</style>
