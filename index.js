const cargo = document.getElementById("g1");
const nivel = document.getElementById("g2");
const conocimientos = document.getElementById("g3");
const herramientas = document.getElementById("g4");
const recursos = document.getElementById("g5");
const comunicacion = document.getElementById("g6");
const evaluaciones = document.getElementById("g7");
const formacion = document.getElementById("g8");
const adaptacion = document.getElementById("g9");

const percentageFormatter = (value, context) => {
  const datapoints = context.chart.data.datasets[0].data;
  function totalSum(total, datapoint) {
    return total + datapoint;
  }
  const totalPercentage = datapoints.reduce(totalSum, 0);
  const percentage = parseInt((value / totalPercentage) * 100);
  return `${percentage}%`;
};

const type = "pie";
const options = {
  scales: {},
  plugins: {
    legend: {
      position: "bottom",
    },
    datalabels: {
      formatter: percentageFormatter,
    },
  },
};
const plugins = [ChartDataLabels];

//

const data1 = {
  labels: ["Docente", "Estudiante", "Otros"],
  datasets: [
    {
      data: [5, 19, 1],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const config1 = {
  type: type,
  data: data1,
  options: options,
  plugins: plugins,
};

const chart1 = new Chart(cargo, config1);

//

const educaciones = [
  "Educación Inicial",
  "Educación Primaria",
  "Educación Secundaria",
  "Otro Nivel Especifico",
];

const data2 = {
  labels: educaciones,
  datasets: [
    {
      data: [0, 2, 8, 15],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const config2 = {
  type: type,
  data: data2,
  options: options,
  plugins: plugins,
};

const chart2 = new Chart(nivel, config2);

//

const data3 = {
  labels: ["Si", "No", "Más o menos"],
  datasets: [
    {
      data: [24, 0, 1],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const config3 = {
  type: type,
  data: data3,
  options: options,
  plugins: plugins,
};

const chart3 = new Chart(conocimientos, config3);

//

const data4 = {
  labels: ["Si", "No", "Más o menos"],
  datasets: [
    {
      data: [15, 3, 7],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const config4 = {
  type: type,
  data: data4,
  options: options,
  plugins: plugins,
};

const chart4 = new Chart(herramientas, config4);

//

const data5 = {
  labels: ["Si", "No", "En ocasiones"],
  datasets: [
    {
      data: [15, 3, 7],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const config5 = {
  type: type,
  data: data5,
  options: options,
  plugins: plugins,
};

const chart5 = new Chart(recursos, config5);

//

const data6 = {
  labels:  ["Si", "No", "En proceso de mejora"],
  datasets: [
    {
      data: [8, 9, 8],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const config6 = {
  type: type,
  data: data6,
  options: options,
  plugins: plugins,
};

const chart6 = new Chart(comunicacion, config6);

//

const data7 = {
  labels:  ["Si", "No", "Ocasionalmente"],
  datasets: [
    {
      data: [10 ,6, 9],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const config7 = {
  type: type,
  data: data7,
  options: options,
  plugins: plugins,
};

const chart7 = new Chart(evaluaciones, config7);

//

const data8 = {
  labels:  ["Si", "No", "Necesitaría formación"],
  datasets: [
    {
      data: [8, 11, 6],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const config8 = {
  type: type,
  data: data8,
  options: options,
  plugins: plugins,
};

const chart8 = new Chart(formacion, config8);

//

const data9 = {
  labels:  ["Si", "No", "Necesito formación adicional"],
  datasets: [
    {
      data: [20, 1, 4],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const config9 = {
  type: type,
  data: data9,
  options: options,
  plugins: plugins,
};

const chart9 = new Chart(adaptacion, config9);