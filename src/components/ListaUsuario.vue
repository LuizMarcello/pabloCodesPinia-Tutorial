<template>
  <h1>Lista de usuários</h1>

  <span v-for="(nome, i) in nomeSelecionados" :key="i">
    {{ nome }}{{ nomeSelecionados.length > 1 ? ", " : "" }}
  </span>
  <div class="lista">
    <div v-for="item in listaPessoas" :key="item.id">
      <Usuario
        @selecionado="adicionaFavorito($event)"
        @removeSelecionado="removeFavorito($event)"
        :usuario="item"
        :isFavoriiito="isFaaavorito(item.id)"
      />
      <!-- isFavoriiito: "Props" enviado deste componente para o filho "Usuario.vue". -->
      <!-- isFavvvorito: Variavel retornada no return {}, para usar neste componente -->
      <!-- isFaaavorito: Um "getter" no store "usuario.js" -->
    </div>
  </div>
</template>

<script>
import Usuario from "@/components/Usuario.vue";
import { computed, ref, onMounted } from "vue";
//import { usuarioStorrre } from "../store/usuario";
import { usuarioStorrre } from "../store/cadastro";
import { storeToRefs } from "pinia";
export default {
  components: {
    Usuario
  },
  setup() {
    /* Inicializando */
    const store = usuarioStorrre();
    const selecionados = ref([]);
    //const listaPessoas = ref([]);

    /* Fazendo desestruturação do store, mas usando a propriedade
       do pinia "storeToRefs()", para não perder a reatividade. */
    const { listaPessoas, isFaaavorito } = storeToRefs(store);

    const nomeSelecionados = computed(() => {
      return selecionados.value.map((x) => `${x.first_name} ${x.last_name}`);
    });

    /* function setUsuarioSelecionado(idUsuario) {
      store.adicionaUsuario(idUsuario);
    } */

    /* function removeUsuarioSelecionado(idUsuario) {
      store.removeUsuario(idUsuario);
    } */

    /* Arrow Function */
    onMounted(async () => {
      await store.buscaUsuarios("users?page=2");
      listaPessoas.value = store.listaPessoas;
    });

    /* Estes retornos, são para serem usados neste componente */
    return {
      listaPessoas,
      nomeSelecionados,
      isFaaavorito,
      adicionaFavorito: store.adicionaUsuario,
      removeFavorito: store.removeUsuario
    };
  }
};
</script>

<style>
h1 {
  text-align: center;
}

.lista {
  display: grid;
  margin: 0 20px;
  grid-template-columns: repeat(4, minmax(200px, 400px));
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
