<template>
  <q-tabs align="justify" :inline-label="$q.screen.gt.xs" :dense="props.mobileMode" narrow-indicator>
    <!-- <q-route-tab to="/" label="Inicio" /> -->
    <q-route-tab to="/" label="Inicio" icon="pets" />
    <q-route-tab to="/about" label="Acerca" icon="info" />
    <q-route-tab to="/contact" label="Contacto" icon="chat" />
  </q-tabs>
</template>
<script setup lang="ts">
import s from 'src/composables/useState'
import { useQuasar } from 'quasar';
const $q = useQuasar()
const props = defineProps({ mobileMode: { type: Boolean, default: s.value.isOnMobile } })

</script>
