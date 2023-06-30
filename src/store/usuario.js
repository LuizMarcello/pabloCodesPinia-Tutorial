import { defineStore } from "pinia";

export const usuarioStorrre = defineStore("usuario", {
  /* Propriedades reativas */
  /* Retorna uma função contento os "states" */
  state: () => {
    /* Estes "states" são atualizados pelas "actions" */
    return {
      listaPessoas: [
        {
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 9,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
          id: 10,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
      ],

      listaFavoritos: [
        {
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 9,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        /* {
          id: 10,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        }, */
      ],
    };
  },

  /* "getters" é parecido com as "propriedades computadas": */
  /* São para cálculos rápidos */
  /* São armazenados em cache */
  getters: {
    /* totalFavoritos: (state) => {
      return state.listaFavoritos.length
    } */
    /* Ou no modo mais simples: */
    totalFavoritos: (state) => state.listaFavoritos.length,

    isFaaavorito: (state) => (id) =>
      state.listaFavoritos.some((x) => x.id === id),
  },

  /* Ação, métodos, funções. */
  /* As "actions" são funções que atualizam os "states" */
  /* De dentro das "actions", temos acesso aos "states" e aos "getters" */
  /* Quando for fazer uma requisição para o backend, é sempre feito na "actions" */
  actions: {
    adicionaUsuario(idUsuario) {
      const usuarioSelecionado = this.listaPessoas.find(
        (x) => x.id == idUsuario
      );
      this.listaFavoritos = [...this.listaFavoritos, usuarioSelecionado];
    },

    removeUsuario(idUsuario) {
      this.listaFavoritos = this.listaFavoritos.filter(
        (x) => x.id !== idUsuario
      );
    },
  },
});
