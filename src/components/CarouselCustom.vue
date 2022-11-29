<template>
  <q-carousel
    v-model="slide"
    draggable="false"
    transition-prev="jump-right"
    transition-next="jump-left"
    swipeable
    autoplay
    v-model:fullscreen="fullscreen"
    infinite
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
      @click="fullscreen = !fullscreen"
      style="width: 90vw"
      v-for="s in slides"
      v-bind:key="s.img"
      :name="s.name"
      class="column no-wrap flex-center"
    >
      <!-- :img-src="s.img" -->
      <div style="width: 100%; height: 100%" class="column flex-center">
        <img :src="s.img" style="max-width: 100%; max-height: 100%" />
      </div>
    </q-carousel-slide>
    <template v-slot:control>
      <q-carousel-control position="bottom-right" :offset="[18, 18]">
        <q-btn
          push
          round
          dense
          color="white"
          text-color="primary"
          :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="fullscreen = !fullscreen"
        />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import s from 'src/composables/useState';
const fullscreen = ref(false);
const slides = ref([
  {
    name: 'rifa-2',
    img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/316426542_148649127920847_6036870328486674587_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WtgCwXqTtZcAX84JbOA&_nc_ht=scontent-mia3-2.xx&oh=00_AfBJXyXtr3Gq8L60kI7bvc2kp7Wzm6lEXjoWvOvSF0q3Vw&oe=638AFDCB',
  },
]);
const slide = ref(slides.value[0].name);
</script>
