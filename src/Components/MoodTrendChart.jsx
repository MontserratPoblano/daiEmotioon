// import { BarChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import PropTypes from "prop-types";

// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import PropTypes from "prop-types";

// function MoodTrendChart({ sentimentData }) {
//   // Define los puntajes correspondientes a cada estado de ánimo
//   const moodScores = {
//     happy: 5,
//     sad: 0,
//     neutral: 3,
//     angry: 1,
//     relaxed: 4,
//   };

//   // Transforma los datos en un formato adecuado para el gráfico
//   const chartData = sentimentData.map((sentimentDoc) => ({
//     date: sentimentDoc.timestamp.toDate().toISOString().split("T")[0],
//     mood: sentimentDoc.mood,
//     score: moodScores[sentimentDoc.mood], // Agrega el puntaje correspondiente
//   }));

//   // Agrupa los datos por fecha
//   const groupedData = chartData.reduce((result, entry) => {
//     const date = entry.date;
//     if (!result[date]) {
//       result[date] = {
//         date,
//         happy: 0,
//         sad: 0,
//         neutral: 0,
//         angry: 0,
//         relaxed: 0,
//         totalScore: 0, // Inicializa el puntaje total
//       };
//     }
//     result[date][entry.mood]++;
//     result[date].totalScore += entry.score; // Suma el puntaje al total
//     return result;
//   }, {});

//   // Convierte los datos agrupados en un array
//   const chartDataArray = Object.values(groupedData);

//   return (
//     <ResponsiveContainer width="60%" height={300}>
//       <BarChart data={chartDataArray}>
//         <CartesianGrid strokeDasharray="3 3 3 " />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Bar dataKey="totalScore" fill="#8884d8" name="Total Score" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// }

// MoodTrendChart.propTypes = {
//   sentimentData: PropTypes.array.isRequired,
// };

// export default MoodTrendChart;



import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

function MoodTrendChart({ sentimentData }) {
  
  const chartDataArray = sentimentData.map((entry) => ({
    date: entry.timestamp.toDate().toISOString().split("T")[0],
    happy: entry.mood === "happy" ? 5 : 0, 
    sad: entry.mood === "sad" ? 1 : 0, 
    neutral: entry.mood === "neutral" ? 4 : 0, 
    angry: entry.mood === "angry" ? 2 : 0, 
    relaxed: entry.mood === "relaxed" ? 3 : 0,
  }));

  return (
    <ResponsiveContainer width="80%" height={200} margin="10px" padding="10px">
      <BarChart data={chartDataArray}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" fontSize="12px" />
        <YAxis  />
        <Tooltip />
        <Bar type="monotone" dataKey="happy" fill="#FFC107" name="Happy" />
        <Bar type="monotone" dataKey="sad"   fill="#2196F3" name="Sad" />
        <Bar type="monotone" dataKey="neutral"  fill="grey" name="Neutral" />
        <Bar type="monotone" dataKey="angry"   fill="#b81414" name="Angry" />
        <Bar type="monotone" dataKey="relaxed" fill="#6dc36d" name="Relaxed" />
      </BarChart>
    </ResponsiveContainer>
  );
}
MoodTrendChart.propTypes = {
  sentimentData: PropTypes.array.isRequired,
};

// export default MoodTrendChart;

export default MoodTrendChart;

