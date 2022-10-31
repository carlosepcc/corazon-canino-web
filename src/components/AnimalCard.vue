<template>
  <q-card class="animal-card">
    <q-img v-if="props.img" width="100%" :src="props.img" />
    <div
      v-else
      class="text-h1 text-bold row justify-center bg-secondary q-pa-lg"
      style="color: #fff3; font-family: serif"
    >
      <span style="transform: rotate(-8deg)">{{ props.names[0][0] }}</span>
    </div>

    <q-card-section>
      <q-btn
        fab
        color="pink"
        :icon="icons[props.health.state - 1]"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">{{ props.names[0] }}</div>
        <div
          v-if="props.breed"
          class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
        >
          <q-icon name="pets" />
          {{ props.breed }}
        </div>
      </div>
      <q-rating
        :model-value="health.state"
        :max="5"
        size="32px"
        readonly
        color="pink"
        :icon-selected="health.state > 1 ? 'favorite' : 'heart_broken'"
        :icon="health.state > 2 ? 'favorite' : 'heart_broken'"
      />
    </q-card-section>

    <q-card-section
      class="q-pt-none"
      v-if="health.diseases?.length > 0 || health.description"
    >
      <div class="text-subtitle1">Estado</div>
      <div class="text-caption text-grey">
        <div v-for="d in props.health.diseases" v-bind:key="d">
          {{ d }}
        </div>
        {{ props.health.description }}
      </div>
    </q-card-section>

    <!-- <q-separator />

     <q-card-actions>
      <q-btn push color="positive" icon="volunteer_activism"> Donar </q-btn>
    </q-card-actions> -->
  </q-card>
</template>
<script setup>
const props = defineProps(['health', 'names', 'img', 'breed']);
const icons = [
  'heart_broken',
  'heart_broken',
  'favorite_border',
  'favorite',
  'shield',
];
</script>
<style lang="sass">
.animal-card
  .q-img,div.text-h1
    height: 150px
//   min-width: 250px
</style>
