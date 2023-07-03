<template>
  <h1>Lista de favoritos</h1>
  <div class="lista">
    <div v-for="item in listaFavoritos" :key="item.id">
      <div class="card">
        <div class="imagem-container">
          <img :src="item.avatar" alt="imagem avatar" />
        </div>
        <span>{{ item.first_name + " " + item.last_name }}</span>
        <a class="favorito" @click="removeFavorito(item.id)">
          <span>X</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { usuarioStorrre, loginStorrre } from "../store/cadastro";
import { storeToRefs } from "pinia";
export default {
  components: {},
  setup() {
    /* Inicializando */
    const store = usuarioStorrre();
    const login = loginStorrre();

    console.log(login.nome);

    /* Propriedade computada */
    //const listaFavoritos = computed(() => store.listaFavoritos);

    const { listaFavoritos } = storeToRefs(store);

    onMounted(() => {});

    /* function removeFavorito(idUsuario) {
      listaFavoritos.value = listaFavoritos.value.filter(
        (x) => x.id !== idUsuario
      );
    } */

    /* Estes retornos, são para serem usados neste componente */
    return {
      listaFavoritos,
      removeFavorito: store.removeUsuario
    };
  }
};
</script>

<style scoped>
.favorito span {
  font-size: 25px;
  color: #f04f47;
  text-align: center;
}
</style>
