<template>
  <div class="card border-left-primary mx-0 mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Battery {{ index }}
        </h6>
      </div>
        <div class="card-body">
          <p>Voltage: {{ valuesData.value }}V</p>
          <p>Temperature: {{ valuesData.temperature }} Celcius</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      valuesData: this.values,
    };
  },
  name: 'BatteryFirst',
  props: {
     values:{
       required: true,
    },
    index: {
      required: true,
    },
  },
  watch: {
    values(newV) {
      this.valuesData = newV;
    },
  },
};
</script>

<style>

</style>