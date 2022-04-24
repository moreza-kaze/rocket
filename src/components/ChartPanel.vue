<template>
  <canvas id="chartpanel"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
import { onMounted, onUpdated } from "@vue/runtime-core";

export default {
  props: ["withDiscountInvoiceNumbers", "NoDiscountInvoiceNumbers"],
  setup(props) {
    if (props.withDiscountInvoiceNumbers == null) {
      onUpdated(() => {
        makechart(
          props.withDiscountInvoiceNumbers,
          props.NoDiscountInvoiceNumbers
        );
      });
    } else {
      onMounted(() => {
        makechart(
          props.withDiscountInvoiceNumbers,
          props.NoDiscountInvoiceNumbers
        );
      });
    }

    function makechart(x, y) {
      const mych = document.getElementById("chartpanel");
      mych.getContext("2d");
      const myChart = new Chart(mych, {
        type: "doughnut",
        data: {
          labels: ["با تخفیف", "بدون تخفیف"],
          datasets: [
            {
              label: "# of Votes",
              data: [x, y],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
          },
        },
      });
      return {
        mych,
        myChart,
      };
    }
  },
};
</script>

<style>
canvas {
  height: 100% !important;
  width: 100% !important;
}
</style>
