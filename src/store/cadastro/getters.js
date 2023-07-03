const getttters = {
  /* totalFavoritos: (state) => {
      return state.listaFavoritos.length
    } */
  /* Ou no modo mais simples: */
  totalFavoritos: (state) => state.listaFavoritos.length,

  isFaaavorito: (state) => (id) =>
    state.listaFavoritos.some((x) => x.id === id),
}

export default {
  ...getttters
};