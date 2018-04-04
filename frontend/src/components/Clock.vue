<template lang="html">
  <div class="">
    <el-card class="clock">
      <h2>Clock</h2>
      <p class="date">{{ date }}</p>
      <p class="time">{{ time }}</p>
    </el-card>

  </div>
</template>

<script>
export default {

  data(){
    return {
      date: '',
      time: '',
      week: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
      interval:''
    }
  },

  created(){
    this.updateTime();
    this.interval =  setInterval(this.updateTime, 1000);
  },

  destroyed() {
    //do something after destroying vue instance
    clearInterval(this.interval)
  },

  methods: {
    updateTime: function(){
      var cd = new Date();
      this.time = this.zeroPadding(cd.getHours(), 2) +':'+ this.zeroPadding(cd.getMinutes(), 2) +':'+ this.zeroPadding(cd.getSeconds(),2);

      this.date = this.zeroPadding(cd.getFullYear(),4) + '-'+ this.zeroPadding(cd.getMonth()+1, 2)+ '-'+ this.zeroPadding(cd.getDate(), 2)+ '-'+ this.week[cd.getDay()];
    },

    zeroPadding: function(num, digit){
      var zero = '';
      for(var i = 0; i < digit; i++){
        zero += '0';
      }
      return (zero+num).slice(-digit);
    }
  }
}
</script>

<style lang="scss">
  .clock {
    background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
    color: #ffffff;
    text-align: center;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
    height: 100%;
    border: 0;

    .time {
        letter-spacing: 0.05em;
        font-size: 80px;
        padding: 5px 0;
    }
    .date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }

    .el-card__body{
      padding: 0;
    }
  }
  .p{
    margin: 0;
    padding: 0;
  }
</style>
