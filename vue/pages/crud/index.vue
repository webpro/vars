<template>
  <div>
    <input placeholder="filter prefix" v-model="prefix" />

    <select :value="i" size="5" @change="select">
      <option v-for="(person, i) in filteredPeople" :value="i" :key="i">{{ person.last }}, {{ person.first }}</option>
    </select>

    <label>
      <input v-model="first" placeholder="first" />
    </label>
    <label>
      <input v-model="last" placeholder="last" />
    </label>

    <div class="buttons">
      <button @click="create" :disabled="!first || !last">create</button>
      <button @click="update" :disabled="!first || !last || !selected">update</button>
      <button @click="remove" :disabled="!selected">delete</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CRUD',
    components: {},

    head() {
      return {
        title: 'CRUD'
      };
    },

    data: () => {
      return {
        people: [
          {
            first: 'Hans',
            last: 'Emil'
          },
          {
            first: 'Max',
            last: 'Mustermann'
          },
          {
            first: 'Roman',
            last: 'Tisch'
          }
        ],
        i: 0,
        prefix: '',
        first: '',
        last: ''
      };
    },

    computed: {
      filteredPeople: function() {
        const { prefix, people } = this;
        return prefix
          ? people.filter(person => {
              const name = `${person.last}, ${person.first}`;
              return name.toLowerCase().startsWith(prefix.toLowerCase());
            })
          : people;
      },
      selected: function() {
        return this.filteredPeople[this.i];
      }
    },

    watch: {
      i: function() {
        this.first = this.selected ? this.selected.first : '';
        this.last = this.selected ? this.selected.last : '';
      },
      prefix: function() {
        this.first = this.selected ? this.selected.first : '';
        this.last = this.selected ? this.selected.last : '';
      }
    },

    methods: {
      select: function(event) {
        this.i = Number(event.target.value);
      },
      create: function() {
        this.people.push({ first: this.first, last: this.last });
        this.i = this.people.length - 1;
      },
      update: function(person) {
        this.people[this.i] = { first: this.first, last: this.last };
        this.people = [...this.people];
      },
      remove: function() {
        const index = this.people.indexOf(this.selected);
        this.people.splice(index, 1);
        this.i = Math.min(this.i, this.filteredPeople.length - 1);
      }
    }
  };
</script>

<style lang="stylus" scoped>
  * {
    font-family: inherit;
    font-size: inherit;
  }

  input {
    display: block;
    margin: 0 0 0.5em 0;
  }

  select {
    float: left;
    margin: 0 1em 1em 0;
    width: 14em;
  }

  .buttons {
    clear: both;
  }
</style>
