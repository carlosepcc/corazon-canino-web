<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-item>
            <q-item-section side>
              <q-item clickable v-ripple to="/">
                <q-avatar class="q-mr-md" size="xl" rounded>
                  <img :src="s.logo" />
                </q-avatar>
              </q-item>
            </q-item-section>
            <q-item-section>
              <b>Corazón Canino</b>
            </q-item-section>
          </q-item>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <!-- <q-route-tab to="/" label="Inicio" /> -->
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/about" label="Acerca del proyecto" />
        <q-route-tab to="/contact" label="Contacto" />
      </q-tabs>
    </q-header>

    <q-page-container>

      <transition>
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import s from 'src/composables/useState';
</script>
