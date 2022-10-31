import { ref } from 'vue';

export const animalStore = ref({
  animals: [
    {
      img: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/313289193_139525348833225_649793092657178900_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=GQYlQdxGFzcAX9PHVkk&_nc_ht=scontent-bog1-1.xx&oh=00_AfCxnW5UTwSPCoYHYHe_Ti86aXnqfGsJbMmkzoicJpTSRg&oe=6363D71A',
      names: ['Lady'],
      health: {
        state: 1,
        diseases: [
          'Retención de líquido',
          'Enfermedad de la garrapata',
          'Sarna',
        ],
      },
    },
    {
      img: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/313441477_140248448760915_4024878272859783083_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Y6ERxycV8vkAX9eM6dv&_nc_ht=scontent-bog1-1.xx&oh=00_AfBWfBVhVX8NpDXcThlwMdqp91_FkPsp6pDeJdXF-vQmDQ&oe=6365932E',
      names: ['Sofi'],
      health: { state: 2, diseases: ['Hongo cutáneo'] },
    },

    {
      names: ['Lía'],
      health: { state: 5 },
      img: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/313193070_139124948873265_8238463665551459753_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=efMjfwhTPogAX_cKQx4&tn=0mN2lAi91TDb6Qti&_nc_ht=scontent-bog1-1.xx&oh=00_AfA-_bPclfgQ0Z6uWn1PUF3wbXwdx0PdPOBCP7Tt_8U9xg&oe=63643339',
    },

    { names: ['Rocko'], health: { state: 5 } },

    { names: ['Espagueti'], health: { state: 5 } },
  ],
});
