import { ref } from 'vue';
import { Screen } from 'quasar';
const state = ref({
  name: 'Corazón Canino',
  site: 'corazoncanino.vercel.app',
  fb: 'facebook.com/CorazonCanicoUCI',
  // logo: 'https://i.ibb.co/823g349/corazoncaninologo-32.png',
  // logo: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/275991869_103594065617109_228020381243183883_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QnvI18noyB8AX9QIrlv&_nc_ht=scontent-mia3-1.xx&oh=00_AfDbOWdOtf6ClQljjTSHpIzB2wZnJMjbIMBCuWuIx8ngEA&oe=63618A4E',
  logo: 'icons/imagotipo.svg',
  description: 'Proyecto que actúa dentro de la UCI',
  isOnMobile: Screen.lt.md,
});
export default state;
