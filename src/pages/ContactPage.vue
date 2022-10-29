<template>
  <q-page class="column items-center justify-evenly" padding>
    <h7>CONTACTO</h7>
    <div class="column alig-start">
      <q-item v-for="contact in contacts" v-bind:key="contact.wa" clickable v-ripple
        :href="`https://wa.me/${contact.wa}`" target="_blank">
        <q-item-section side>
          <q-avatar size="xl" class="text-weight-bolder text-uppercase" color="primary" text-color="white">
            <img v-if="contact.img" :src="contact.img" :alt="contact.name" />
            <span v-else v-html="contact.name[0]"></span>

            <q-badge style="backdrop-filter: blur(5px); background: #9005 !important" :title="contact.cargo" floating
              color="transparent" class="text-weight-bold">{{ contact.cargo }}</q-badge>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ contact.name }}</q-item-label>
          <q-item-label caption>+{{ contact.wa }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <q-separator />
    <h7 id="organizaciones-apoyando">ORGANIZACIONES QUE APOYAN</h7>
    <div class="column alig-start">
      <q-item v-for="org in orgs" v-bind:key="org.link" clickable v-ripple :href="`https://${org.link}`"
        target="_blank">
        <q-item-section side>
          <q-avatar size="xl" class="text-weight-bolder text-uppercase" color="primary" text-color="white">
            <img v-if="org.logo" :src="org.logo" :alt="org.name" />
            <span v-else v-html="org.name[0]"></span>

            <q-badge style="backdrop-filter: blur(5px); background: #9005 !important" :title="org.country" floating
              color="transparent" class="text-weight-bold">{{ org.country }}</q-badge>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ org.name }}</q-item-label>
          <q-item-label caption>{{ org.link }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <h7 id="sitios-de-interes">SITIOS DE INTERÉS</h7>

    <a href="https://elrefugiocuba.org" title="Revista de protección animal en Cuba">El Refugio</a>

    <a href="https://bacuba.org/donaciones">Bienestar Animal en Cuba</a>


    <a href="http://www.cubananimalrescue.org">Cuban Animal Rescue</a>

    <hr />
    <a href="https://www.uci.cu" title="Sitio web oficial de la Universidad de las Ciencias Informáticas">Universidad
      de
      las Ciencias Informáticas</a>

  </q-page>
</template>
<script setup lang="ts">
import s from 'src/composables/useState'
const contacts = [
  {
    cargo: 'F',
    name: 'Dayana Bolaños Banzo',
    wa: '5353054361',
    t: '5353054361',
  },
  {
    cargo: 'C',
    name: 'Samira de las Mercedes',
    wa: '5352662875',
    t: '5352662875',
  }
]
const orgs = [
  {
    country: 'cu',
    name: 'Cubanos en Defensa de los Animales',
    link: 'facebook.com/CeDACuba',
  },
  {
    country: 'cu',
    name: 'Protección Animal SOS-Pasos',
    link: 'twitter.com/pasos_cuba',
  },
]
</script>
<style scoped>
a {
  text-decoration: none;
  color: var(--q-primary);
}

a:hover {
  color: var(--q-accent);
}
</style>
