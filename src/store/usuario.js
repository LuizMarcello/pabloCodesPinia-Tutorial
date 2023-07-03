import {
  defineStore
} from "pinia";

export const usuarioStorrre = defineStore("usuario", {
  /* Propriedades reativas */
  /* Retorna uma função contento os "states" */
  /* É reativo */
  state: () => {
    /* Estes "states" são atualizados pelas "actions" */
    return {
      listaPessoas: [],
      listaFavoritos: [],
    };
  },

  /* "getters" é parecido com as "propriedades computadas": */
  /* São para cálculos rápidos */
  /* São armazenados em cache */
  /* É reativo */
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
  /* Quando for fazer uma requisição para o backend/api,
     é sempre feito na "actions" */
  /* As "actions" podem ser síncronas, ou assíncronas*/
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

    async buscaUsuarios(endpoint) {
      const request = await fetch('https://reqres.in/api/' + endpoint)
      const {
        data
      } = await request.json();
      this.listaPessoas = data;
    }
  },
});