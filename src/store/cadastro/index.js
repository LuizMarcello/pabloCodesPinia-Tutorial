import {
  defineStore
} from "pinia";
import staaate from "./state";
import getttters from "./getters"
import accctions from "./actions"

/* Primeiro "store" */
export const usuarioStorrre = defineStore("usuario-cadastro", {
  /* Propriedades reativas */
  /* Retorna uma função contento os "states" */
  /* É reativo */
  /* Estes "states" são atualizados pelas "actions" */
  /* "staaate" exportado no /store/cadastro/state.js */
  state: staaate,
  /* ou assim:(no javascript) */
  ///staaate,

  /* "getters" é parecido com as "propriedades computadas": */
  /* São para cálculos rápidos */
  /* São armazenados em cache */
  /* É reativo */
  /* "getttters" exportado no /store/cadastro/getters.js */
  getters: getttters,

  /* Ação, métodos, funções. */
  /* As "actions" são funções que atualizam os "states" */
  /* De dentro das "actions", temos acesso aos "states" e aos "getters" */
  /* Quando for fazer uma requisição para o backend/api,
     é sempre feito na "actions" */
  /* As "actions" podem ser síncronas, ou assíncronas*/
  /* "accctions" exportado no /store/cadastro/actions.js */
  actions: accctions,
});


/* Segundo "store" */
export const loginStorrre = defineStore("login", {
  /* Propriedades reativas */
  /* Retorna uma função contento os "states" */
  /* É reativo */
  /* Estes "states" são atualizados pelas "actions" */
  state: () => {
    return {
      nome: 'Luiz Marcello'
    }
  }

  /* "getters" é parecido com as "propriedades computadas": */
  /* São para cálculos rápidos */
  /* São armazenados em cache */
  /* É reativo */

  /* Ação, métodos, funções. */
  /* As "actions" são funções que atualizam os "states" */
  /* De dentro das "actions", temos acesso aos "states" e aos "getters" */
  /* Quando for fazer uma requisição para o backend/api,
     é sempre feito na "actions" */
  /* As "actions" podem ser síncronas, ou assíncronas*/

});