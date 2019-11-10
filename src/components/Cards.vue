<template>
  <div class="row">
    <template v-if="!!batteriesData">
    <div class="col-sm-6">
      <card
        :values="batteriesData.battery_1[0]"
        :index="1"
      />
    </div>
    <div class="col-sm-6">
      <card
        :values="batteriesData.battery_2[0]"
        :index="2"
      />
    </div><div class="col-sm-6">
      <card
        :values="batteriesData.battery_3[0]"
        :index="3"
      />
    </div>
    <div class="col-sm-6">
      <card
        :values="batteriesData.battery_4[0]"
        :index="4"
      />
    </div>
      </template>
      <div v-else class="text-center mt-3 ml-3">
        <span  class="text-center my-2">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </span>
      </div>
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
  components: {
    Card
  },
  data() {
    return {
      batteriesData: this.batteries,
    };
  },
  name: 'Cards',
  props: {
    batteries: {
      required: true,
    },
  },
  watch: {
    batteries(newV) {
      this.batteriesData = newV;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
