<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-item>
            <q-item-section side>
              <q-item clickable v-ripple to="/">
                <q-avatar>
                  <img :src="s.logo" style="color:#fff" />
                </q-avatar>
              </q-item>
            </q-item-section>
            <q-item-section>
              <span class="title">Corazón Canino</span>
            </q-item-section>
          </q-item>
        </q-toolbar-title>

        <CustomTabs class="gt-xs" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <transition>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </transition>
    </q-page-container>

    <q-footer class="lt-sm">
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
  --radius: 6px
}

.title {
  font-variant: small-caps;
  font-weight: 900;
  color: #fffb;
}
</style>
