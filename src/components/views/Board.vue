<template>
  <section>
    <h3><span>Mis Paneles</span> <i class="arrow"></i> {{ name }}</h3>
    <span v-if="fetchingData">Cargando Datos...</span>
    <input
      type="text"
      placeholder="Añade una lista"
      v-model="listName"
      @keyup.enter="add()"
    />
    <div class="container">
        <column
        v-for="(list, index) in boardLists"
        :key="index"
        :listId="list.id"
        :name="list.name">
        </column>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Column from '@/components/Column'

export default {
  name: 'board-view',
  components: { Column },
  props: {
    id: String,
    name: String
  },
  data () {
    return {
      listName: ''
      /** , boardList: [
        {id: '1', name: 'Todo'},
        {id: '2', name: 'Doing'}
      ]
      */
    }
  },
  computed: {
    ...mapState([
      'fetchingData'
    ]),
    ...mapGetters([
      'getListsByBoard'
    ]),
    boardLists () {
      return this.getListsByBoard(this.id)
    }
  },
  methods: {
    ...mapActions([
      'fetchLists',
      'addColumn'
    ]),
    add () {
      /** this.boardList.push({ name: this.listName }) */
      this.addColumn({ board: this.id, name: this.listName })
      this.listName = ''
    }
  },
  created () {
    this.fetchLists({board: this.id})
  }
}
</script>

<style scoped>
section {
  text-align: left;
}

h3 {
  color: #37474f;
  text-align: left;
  margin: 1.5rem;
}

h3 span {
  color: #546e7a;
}

.arrow:after {
  content: "\27A4";
  content: "\25BA";
}

input {
  box-sizing: border-box;
  background-color: #546e7a;
  border: 2px solid #546e7a;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;
}

input:focus,
input:active {
  background-color: white;
  color: #546e7a;
}

input::placeholder {
  color: white;
}
</style>
