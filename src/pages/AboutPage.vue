<template>
  <q-page class="column items-center justify-evenly q-pb-xl" padding>
    <q-img
      src="icons/imagotipo.svg"
      width="256px"
      style="margin-bottom: -50px; filter: invert()"
    />
    <q-card bordered flat class="index-card">
      <q-card-section>
        Corazón Canino es un proyecto conjunto con organizaciones de bienestar
        animal que busca
        <strong>desparasitar</strong>, <strong>esterilizar</strong> y
        <strong>vacunar</strong> a los perros que están dentro de los terrenos
        de la
        <strong
          ><a
            href="https://www.uci.cu"
            target="_blank"
            title="Sitio web oficial de la Universidad de las Ciencias Informáticas"
            >Universidad de las Ciencias Informáticas</a
          ></strong
        >
        y, cuando sea posible, procurarles un
        <strong>hogar permanente</strong> fuera de esta.
      </q-card-section>
    </q-card>
    <q-card bordered flat class="index-card">
      <q-card-section class="text-h7 q-mb-xs">META</q-card-section>
      <q-card-section>
        La no existencia, para <strong>finales del 2022</strong>, de perros sin
        <strong>esterilizar</strong> y <strong>desparasitar</strong> dentro de
        la
        <a
          class="quiet-anchor"
          href="https://www.uci.cu"
          target="_blank"
          title="Sitio web oficial de la Universidad de las Ciencias Informáticas"
        >
          Universidad de las Ciencias Informáticas</a
        >
      </q-card-section>
    </q-card>
    <q-card bordered flat class="index-card">
      <q-card-section class="text-h7">OBJETIVOS</q-card-section>
      <q-card-section class="q-px-xl">
        <q-chat-message
          :avatar="index % 2 > 0 ? '/icons/imagotipo.webp' : '/img/dog.svg'"
          v-for="(o, index) in objetivos"
          v-bind:key="o"
          :text="[o]"
          :sent="index % 2 > 0"
          text-color="white"
          :bg-color="index % 2 > 0 ? 'primary' : 'accent'"
        />
        <!-- <q-chat-message
          text-color="white"
          avatar="/img/dog.svg"
          bg-color="accent"
        >
          <q-spinner-dots size="2rem"
        /></q-chat-message> -->
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
import s from 'src/composables/useState';
const objetivos = [
  'Alimentar 🍗',
  'Censar',
  'Desparasitar',
  'Esterilizar',
  'Vacunar',
  '🏠 Encontrar hogares permanentes!',
];
</script>
<style scoped lang="sass">
.index-card,.q-img,.q-chat-message
  transition: .5s
.q-img
  transition: 1s
.index-card
  width: 100%
  max-width: 600px

.index-card:hover
   transform: scale(1.1)
.q-img:hover
  transform: scale(1.05) rotate(-3deg)

a
  text-decoration: none
  color: inherit


a:hover
  color: var(--q-accent)


.q-card
  margin-top: 32px


ul
  text-align: start
</style>
