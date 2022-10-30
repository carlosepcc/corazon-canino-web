<template>
  <q-page class="column" padding>
    <div class="row justify-evenly">
      <section>
        <span class="text-h7">CONTACTO</span>
        <div class="column align-start q-mt-lg q-mb-xl">
          <q-item v-for="contact in contacts" v-bind:key="contact.phone" class="contact-item" clickable v-ripple
            :href="`https://wa.me/${contact.phone}`" target="_blank">
            <q-item-section side>
              <q-avatar size="xl" class="text-weight-bolder text-uppercase" color="primary" text-color="white">
                <img v-if="contact.img" :src="contact.img" :alt="contact.name" />
                <span v-else v-html="contact.name[0]"></span>

                <q-badge rounded v-if="contact.cargo" :title="contact.cargo" floating color="transparent"
                  class="text-weight-bold">
                  {{ contact.cargo }}</q-badge>
              </q-avatar>
            </q-item-section>
            <q-item-section title="Contactar a través de WhatsApp">
              <q-item-label>
                {{ contact.name }}</q-item-label>
              <q-item-label caption>{{ contact.phone ?? contact.link ?? '' }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn-group push>
                <q-btn round v-if="contact.phone" push icon="call" :href="`tel:${contact.phone}`" title="Llamar" />
                <q-btn round v-if="contact.phone" push icon="sms" :href="`sms:${contact.phone}`" title="Enviar SMS" />

                <q-btn round v-if="contact.email" push icon="email" :href="`mailto:${contact.email}`"
                  :title="`Enviar email a ${contact.email}`" />
                <q-btn round v-if="contact.fb" push icon="facebook" :href="`https://www.facebook.com/${contact.fb}`"
                  title="Contactar a través de Facebook" />
                <q-btn round v-if="contact.phone" push icon="maps_ugc" :href="`https://wa.me/${contact.phone}`"
                  title="Contactar a través de WhatsApp" />
              </q-btn-group>

            </q-item-section>
          </q-item>
        </div>
      </section>
      <section>
        <span class="text-h7">ORGANIZACIONES QUE APOYAN</span>
        <div class="column align-start q-mt-lg q-mb-xl">
          <q-item class="contact-item" v-for="org in orgs" v-bind:key="org.link" :title="org.description" clickable
            v-ripple :href="`https://${org.link}`" target="_blank">
            <q-item-section side>
              <q-avatar rounded size="xl" class="text-weight-bolder text-uppercase" color="primary" text-color="white">
                <img v-if="org.logo" :src="org.logo" :alt="org.name[0]" />
                <span v-else v-html="org.name[0]"></span>

                <!-- <q-badge rounded :title="org.country" floating color="transparent" class="text-weight-bold">{{ org.country
            }}
            </q-badge> -->
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ org.name }}</q-item-label>
              <q-item-label caption>{{ org.description.slice(0, 60) }}..</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </section>
      <section>
        <span class="text-h7">SITIOS DE INTERÉS</span>
        <div class="column align-start q-mt-lg q-mb-xl">
          <q-item class="contact-item" v-for="o in other" v-bind:key="o.link" clickable v-ripple
            :href="`https://${o.link}`" :title="o.link" target="_blank">
            <q-item-section side>
              <q-avatar rounded size="xl" class="text-weight-bolder text-uppercase" color="primary" text-color="white">
                <img v-if="o.img" :src="o.img" :alt="o.name[0]" />
                <span v-else v-html="o.name[0]"></span>

                <!-- <q-badge :title="o.country" rounded floating color="transparent" class="text-weight-bold">{{ o.country }}
            </q-badge> -->
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ o.name }}</q-item-label>
              <q-item-label caption>{{ o.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </section>
      <img class="img-building" src="/img/buildings-toon.svg">
    </div>
    <span class="exclamation">
      <div class="plate" @click="(e) => refillPlate(e)">
      </div>
      <img src="img/dog.svg" ref="pup" @mouseenter="pupBark" />
      <img src="img/dog.svg" ref="dog" @mouseenter="dogBark.play" />
    </span>

  </q-page>
</template>
<script setup lang="ts">
import s from 'src/composables/useState'
import { ref } from 'vue';
const contacts = [
  {
    fb: 'dayana.bolanosbanzo',
    email: 'dayanabb@estudiantes.uci.cu',
    img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-1/300669749_1762409884118720_3567962365987802077_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2oJKDTfJGXcAX8a6Ccj&_nc_oc=AQnCYFTgE3SxsfEOTEXhhaectvTc5Y0VMm6dRa5NSXiGSTczw2UZHAxTVbuphmoQ1z0&_nc_ht=scontent-mia3-2.xx&oh=00_AfBIhsDYiBbZfhA_kWeq1F7EjCOwpGD2Fkxc-lcd7stfqA&oe=63629BEA',
    cargo: 'F',
    name: 'Dayana Bolaños Banzo',
    phone: '5353054361',
  },
  /*
    img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-1/100927188_717586952330021_1562532823389175808_n.jpg?stp=c0.11.320.320a_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ohdQxuzwi-QAX_ZjjEq&_nc_ht=scontent-mia3-2.xx&oh=00_AfB5yW1Db45LM-z3Y3LCvyIXpD6n3tUGzwpzBEF9u2LESw&oe=6381FEB5',
    cargo: 'C',
    name: 'Samira de las Mercedes',
    wa: '5352662875',
    t: '5352662875',
  },
  {
    img: s.value.logo,
    cargo: '',
    name: 'Corazón Canino en Facebook',
    link: s.value.fb,
    description: s.value.description
  },*/
]
const orgs = [
  {
    logo: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/92986553_2931440110281538_5829683669207351296_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=G_pHtQhJiT8AX8ccDlC&_nc_ht=scontent-mia3-1.xx&oh=00_AfALE54UaHE5Kyv0z7ZqMcMHXee8yP4E6RZKceIhhM_tDA&oe=6383B0BD',
    country: 'cu',
    name: 'Cubanos en Defensa de los Animales',
    link: 'facebook.com/CeDACuba',
    description: 'Proyecto voluntario radicado en La Habana que dirige su trabajo a la disminución de animales sin hogar, a promover la tenencia responsable y la protección animal.'
  },
  {
    logo: 'https://pbs.twimg.com/profile_images/1410795631698923521/2TsMj7ff_400x400.jpg',
    country: 'cu',
    name: 'Protección Animal SOS-Pasos',
    link: 'twitter.com/pasos_cuba',
    description: 'Grupo de jóvenes cubanos que luchan por el bienestar animal en Cuba. Teniendo como premisa rescatar, curar, esterilizar y dar en adopción responsable.',
  },
  {
    logo: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-1/305833555_489576096508741_7660125567385151631_n.jpg?stp=c23.0.200.200a_dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=c6021c&_nc_ohc=G37lqB3FDWEAX8LgiPq&_nc_ht=scontent-bog1-1.xx&oh=00_AfA1lNNMLvuSt5wKAMJO3zvZlMWdC6GK_jbMs3bKYSh4ww&oe=6363F78A',
    country: 'cu',
    name: 'Equipo de Protección Animal',
    link: 'www.facebook.com/profile.php?id=100063690655399&lst=100015031837495%3A100063690655399%3A1667144373&eav=AfYO-nZG8a8KDUMTCKa5a0zBC2jnBGJLvjhYydII90uDE1w9ObG1hvs8_kiDUlAfpr8&paipv=0',
    description: 'Protegemos la vida!!! Todos contamos. ...te atreverías, con nosotros, a hacer la diferencia?',
  },
]
const other = [
  {
    img: s.value.logo,
    country: 'cu',
    name: `${s.value.name} en Facebook`,
    link: s.value.fb,
    description: s.value.description
  },
  {
    img: 'https://elrefugiocubaorg.files.wordpress.com/2020/07/cropped-cabecera5.jpg',
    country: 'cu',
    name: 'El Refugio',
    link: 'www.elrefugiocuba.org',
    description: 'Revista de protección animal en Cuba',
  },
  {
    img: 'https://i0.wp.com/bacuba.org/wp-content/uploads/2021/11/20211114_190314.jpg?fit=192%2C192&ssl=1',
    country: 'cu',
    name: 'Bienestar Animal en Cuba',
    link: 'www.bacuba.org',
    description: 'Red de voluntarios sin ánimo de lucro e independiente',
  },
  {
    img: '',
    country: 'org',
    name: 'Cuban Animal Rescue',
    link: 'www.cubananimalrescue.org',
    description: 'Sitio oficial de Cuban Animal Rescue',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/1561427543990980609/efXQuZ8Y_400x400.jpg',//'https://eva.uci.cu/theme/trema/pix/frontpage/UCI_logon.png',
    country: 'cu',
    name: 'Universidad de las Ciencias Informáticas',
    link: 'www.uci.cu',
    description: 'Sitio oficial de la UCI',
  },
]

const dogBark = new Audio('/audio/dog_barking-6296.ogg')
const littleDogBark = new Audio('https://bigsoundbank.com/UPLOAD/ogg/0682.ogg')
const fillAudio = new Audio('https://bigsoundbank.com/UPLOAD/ogg/1331.ogg')
const grownBark = new Audio('https://bigsoundbank.com/UPLOAD/ogg/2354.ogg')
const pup = ref()
const dog = ref()
function pupBark(): void {
  console.log('barking')
  if (count.value < 1.9) {
    littleDogBark.play()
  } else {
    grownBark.play()
  }

}
//ANIMATIONS
const count = ref(1)
const refillPlate = (event: MouseEvent) => {
  let plate = document.querySelector('.plate')
  let target = event.target as HTMLDivElement
  target.classList.add('full')
  fillAudio.play()
  setTimeout(() => {
    plate?.classList.remove('full')
    dogBark.play()
    count.value += 0.1
    pup.value.style.transform = `scale(${count.value < 2 ? count.value : 2})`

  }, 3000)

}
</script>
<style scoped>
a {
  text-decoration: none;
  color: var(--q-primary);
}

a:hover {
  color: var(--q-accent);
}



.q-page {
  overflow-inline: hidden;
}

.q-badge {
  backdrop-filter: blur(5px);
  background: #0002 !important
}

section>div.column {
  width: 100%;
}

.contact-item {
  width: 100%;
  max-width: 600px;
  border: 1px solid #0001;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 8px;
  background: #0000;
  backdrop-filter: blur(24px);
}

section:first-child .q-item {
  border-radius: 40px 4px 4px 40px;
}
</style>
<style scoped>
/* ANIMATIONS AND TRANSITIONS */
/*DOGS*/

.exclamation * {
  transition: .4s;
}

.plate:hover {
  transform: scale(1.1);
}

.plate:active {
  transform: translateY(-2px) rotate(-0.03turn);
}

.exclamation {
  background: linear-gradient(#0001, white);
  padding: 16px 32px 0;
  margin: 12rem auto 0;
  width: 90%;
  min-width: fit-content;
  display: block;
  text-align: center;
  border-radius: 64px 64px 0 0;
  font-weight: 700;
  font-size: large;
  color: var(--whiteglass1);
  position: relative;
}

.exclamation img:nth-child(2) {
  position: absolute;
  top: -31px;
  left: 64px;
}

.exclamation img:nth-child(3) {
  position: absolute;
  top: -40px;
  right: 80px;
  transform: scale(-2, 2);
}

.exclamation .plate {
  background: #444;
  border-radius: 0 0 8px 8px;
  position: absolute;
  top: -12px;
  height: 12px;
  right: 45%;
  width: 32px;
}

.plate.full:before {
  position: absolute;
  bottom: 7px;
  content: "🍗";
}

.plate.full:after {
  position: absolute;
  bottom: 7px;
  left: 0;
  transform: scaleX(-1);
  content: "🍖";
}

.exclamation>img:nth-child(2):hover {
  left: 26px;

  transform: skew(3deg, -8deg);
}

/*The dogs gets closer to the plate when you hover it*/
.plate:hover+img {
  left: 38%;
}

.plate:hover+img+img {
  right: 30%;
}

/*The dogs stay even closer to the plate while it's full*/
.plate.full+img {
  left: 44%;
}

.plate.full+img+img {
  right: 38%;
  top: -36px;
}

.exclamation>img:nth-child(3):hover {
  right: 14px;
  transform: scale(-2, 2);

}

.img-building {
  filter: blur(6px);
  z-index: -1;
  height: 400px;
  max-width: 98%;
  position: relative;
  bottom: -230px;
  margin-top: -400px;
}
</style>
