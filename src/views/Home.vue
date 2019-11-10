<template>
  <div class="container padding">
    <button class="btn btn-primary" @click="refresh">Refresh data</button>
    <Cards class="pt-2" :batteries="batteriesData" />

    <div class="card border-left-primary mt-2">
      <div class="card-body text-center">
        <span>Current consumed by load is {{ current }} A</span>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-body text-center">
        <span>Page reloads every 10 seconds</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cards from "@/components/Cards.vue";

export default {
  beforeDestroy() {
    clearInterval(this.timer);
  },
  components: {
    Cards
  },
  created() {
    this.fetchBatteryData();
    setInterval(
      function() {
        this.fetchBatteryData();
      }.bind(this),
      10000
    );
    // this.testUp();
    //this.timer = setInterval(this.fetchBatteryOne(), 1000);
  },
  computed: {
    current() {
      if (this.batteries) {
        return this.batteries.current[0];
      }
      return 0;
    }
  },
  data() {
    return {
      batteries: null,
      batteriesData: this.batteries
    };
  },
  methods: {
    fetchBatteryData() {
      axios
        .get("https://odney-264fb.firebaseio.com/batteries.json")
        .then(response => {
          if (response.data == null) {
            this.fetchBatteryData();
            return;
          }
          const object = response.data;
          for (var key of Object.keys(object)) {
            // eslint-disable-next-line
            console.log(object[key]);
            this.batteries = object[key];
          }
          //    const key = Object.keys(response.data);
          //  const battery = response.data;

          // = battery.key;

          // eslint-disable-next-line
          // console.error(this.batteries);
        })
        .catch(e => {
          // eslint-disable-next-line
          console.error(e);
        });
    },
    refresh() {
      this.fetchBatteryData();
    }
  },
  watch: {
    batteries(v) {
      this.batteriesData = v;
    }
  },
  name: "home"
};
</script>
