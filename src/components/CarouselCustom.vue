<template>
  <q-carousel
    v-model="slide"
    draggable="false"
    transition-prev="jump-right"
    transition-next="jump-left"
    swipeable
    autoplay
    control-type="flat"
    control-color="primary"
    animated
    thumbnails
    prev-icon=""
    next-icon=""
    :vertical="s.isOnMobile"
    navigation-icon="radio_button_unchecked"
    navigation
    padding
    arrows
    class="shadow-1 rounded-borders bg-white text-secondary"
  >
    <template v-slot:navigation-icon="{ active, onClick }">
      <q-btn
        v-if="active"
        size="lg"
        push
        icon="pets"
        text-color="primary"
        color="white"
        round
        dense
        @click="onClick"
      />
      <q-btn
        v-else
        size="sm"
        push
        icon="circle"
        text-color="primary"
        color="white"
        round
        dense
        @click="onClick"
      />
    </template>
    <q-carousel-slide
      style="width: 90vw"
      v-for="s in slides"
      v-bind:key="s.img"
      :name="s.name"
      class="column no-wrap flex-center"
      :img-src="s.img"
    >
      <div style="width: 100%; height: 100%" class="column flex-center">
        <img :src="s.img" style="max-width: 100%; max-height: 100%" />
      </div>
    </q-carousel-slide>
    <!-- </template> -->
  </q-carousel>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import s from 'src/composables/useState';
const slides = ref([
  {
    name: 'fb-banner',
    img: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/312512408_137975555654871_4652245299539498112_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=P2pRt2NNlAUAX9OQ62-&_nc_ht=scontent-bog1-1.xx&oh=00_AfBLdVHdOiX_J3U9uG41NWtfGQPuhFjd8zj529zWWyGE-w&oe=6363FE43',
  },
  {
    name: 'dibujando-22-11',
    img: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/308186027_129849393134154_4312724769784170120_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TDmu94Y2Oo4AX8Z-YPF&_nc_ht=scontent-bog1-1.xx&oh=00_AfADrONUAgelt6adtIyjZKi43Vv43V3TuRWO30SjjmRBxw&oe=636379D5',
  },
  {
    name: 'fotografia-22-11',
    img: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/308641939_129847723134321_4325042436397815896_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AvAyznpyEFoAX8q239i&_nc_oc=AQnyE-wohgm_vJXnJkHKXkyvwh1opIF1HqA6ESTQoAdQbiWe4ncimVFqKtpld96aVhU&_nc_ht=scontent-bog1-1.xx&oh=00_AfD7NvU22Srpl1fdgeF9_3zhoO_5wmkfyUvoc21Q2f7Zzg&oe=63643708',
  },
]);
const slide = ref(slides.value[0].name);
</script>
