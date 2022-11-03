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
      <q-card-section class="text-h7 q-ma-xs q-pa-xs"
        >・ META ・</q-card-section
      >
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
      <q-card-section class="text-h7">・ OBJETIVOS ・</q-card-section>
      <q-card-section class="row justify-evenly q-gutter-md">
        <q-item
          class="text-dark text-bold"
          style="
            max-width: 24ch;
            min-width: 17ch;
            width: 100%;
            border: 1px solid #0001;
            border-radius: 20px;
          "
          v-for="i in objetivos"
          v-bind:key="i"
        >
          <q-item-section side>
            <q-icon color="dark" name="pets" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="row">{{ i }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
    <span class="text-h7" style="margin-top: 150px">・ BASE DE DATOS ・</span>
    <div class="row q-gutter-lg justify-evenly">
      <AnimalCard
        v-for="a in animalStore.animals"
        v-bind:key="a.names"
        v-bind="a"
      />
    </div>
  </q-page>
</template>
<script setup>
import AnimalCard from 'components/AnimalCard.vue';
import { animalStore } from 'src/stores/animalStore';

const objetivos = [
  'Alimentar',
  'Censar',
  'Desparasitar',
  'Esterilizar',
  'Vacunar',
  'Encontrar hogares permanentes',
];
</script>
<style scoped lang="sass">
.index-card,.q-img,.q-chat-message,.q-item,.animal-card
  transition: .4s
.q-img
  transition: 1s
.index-card
  width: 100%
  max-width: 600px



.index-card:hover,.index-card .q-item:hover,.animal-card:hover
   transform: scale(1.07)
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
