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

    <h7 id="organizaciones-apoyando">ORGANIZACIONES QUE APOYAN</h7>
    <div class="column alig-start">
      <q-item v-for="org in orgs" v-bind:key="org.link" clickable v-ripple :href="`https://${org.link}`"
        target="_blank">
        <q-item-section side>
          <q-avatar size="xl" class="text-weight-bolder text-uppercase" color="primary" text-color="white">
            <img v-if="org.logo" :src="org.logo" :alt="org.name[0]" />
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

    <a href="https://facebook.com/CorazonCanicoUCI" target="_blank">
      <q-icon name=facebook class="q-mr-md" />Corazón Canino en Facebook
    </a>
    <a href="https://elrefugiocuba.org" target="_blank" title="Revista de protección animal en Cuba">El Refugio</a>

    <a href="https://bacuba.org/donaciones" target="_blank">Bienestar Animal en Cuba</a>


    <a target="_blank" href="http://www.cubananimalrescue.org">Cuban Animal Rescue</a>

    <hr />
    <a target="_blank" href="https://www.uci.cu"
      title="Sitio web oficial de la Universidad de las Ciencias Informáticas">Universidad
      de
      las Ciencias Informáticas</a>

  </q-page>
</template>
<script setup lang="ts">
import s from 'src/composables/useState'
const contacts = [
  {
    img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-1/300669749_1762409884118720_3567962365987802077_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2oJKDTfJGXcAX8a6Ccj&_nc_oc=AQnCYFTgE3SxsfEOTEXhhaectvTc5Y0VMm6dRa5NSXiGSTczw2UZHAxTVbuphmoQ1z0&_nc_ht=scontent-mia3-2.xx&oh=00_AfBIhsDYiBbZfhA_kWeq1F7EjCOwpGD2Fkxc-lcd7stfqA&oe=63629BEA',
    cargo: 'F',
    name: 'Dayana Bolaños Banzo',
    wa: '5353054361',
    t: '5353054361',
  },
  {
    img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-1/100927188_717586952330021_1562532823389175808_n.jpg?stp=c0.11.320.320a_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ohdQxuzwi-QAX_ZjjEq&_nc_ht=scontent-mia3-2.xx&oh=00_AfB5yW1Db45LM-z3Y3LCvyIXpD6n3tUGzwpzBEF9u2LESw&oe=6381FEB5',
    cargo: 'C',
    name: 'Samira de las Mercedes',
    wa: '5352662875',
    t: '5352662875',
  },
]
const orgs = [
  {
    logo: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/92986553_2931440110281538_5829683669207351296_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=G_pHtQhJiT8AX8ccDlC&_nc_ht=scontent-mia3-1.xx&oh=00_AfALE54UaHE5Kyv0z7ZqMcMHXee8yP4E6RZKceIhhM_tDA&oe=6383B0BD',
    country: 'cu',
    name: 'Cubanos en Defensa de los Animales',
    link: 'facebook.com/CeDACuba',
  },
  {
    logo: 'https://pbs.twimg.com/profile_images/1410795631698923521/2TsMj7ff_400x400.jpg',
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

h7 {
  margin: 56px auto 24px auto;
}
</style>
