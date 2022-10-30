<template>
  <q-page class="column items-center justify-evenly" padding>
    <q-img src="icons/imagotipo.webp" width="256px" style="margin-bottom: -50px;" />
    <q-card bordered flat class="index-card">
      <q-card-section>
        Corazón Canino es un proyecto conjunto con organizaciones de bienestar animal que busca
        <strong>desparasitar</strong>, <strong>esterilizar</strong> y <strong>vacunar</strong> a los perros que están
        dentro de los terrenos de la
        <strong><a href="https://www.uci.cu" target="_blank"
            title="Sitio web oficial de la Universidad de las Ciencias Informáticas">Universidad de las Ciencias
            Informáticas</a></strong>
        y, cuando sea posible, procurarles un
        <strong>hogar permanente</strong> fuera de esta.
      </q-card-section>
    </q-card>
    <q-card bordered flat class="index-card">
      <q-card-section class="text-h7 q-mb-xs">META</q-card-section>
      <q-card-section>
        La no existencia, para <strong>finales del 2022</strong>, de perros sin
        <strong>esterilizar</strong> y <strong>desparasitar</strong> dentro de la <a class="quiet-anchor"
          href="https://www.uci.cu" target="_blank"
          title="Sitio web oficial de la Universidad de las Ciencias Informáticas">
          Universidad de las Ciencias Informáticas</a>
      </q-card-section>
    </q-card>
    <q-card bordered flat class="index-card">
      <q-card-section class="text-h7">OBJETIVOS</q-card-section>
      <q-card-section>
        <ul>
          <li>Censar</li>
          <li>Alimentar</li>
          <li>Desparasitar</li>
          <li>Esterilizar</li>
          <li>Vacunar</li>
          <li>Encontrar hogares permanentes</li>
        </ul>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
import s from 'src/composables/useState'
</script>
<style scoped>
.index-card {
  width: 100%;
  max-width: 600px;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: var(--q-accent);
}


.q-card {
  margin-top: 32px;
}

ul {
  text-align: start;
}
</style>
