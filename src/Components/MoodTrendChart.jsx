import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
    <ResponsiveContainer width="80%" height={300} margin="10px" padding="10px">
      <BarChart data={chartDataArray}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" fontSize="12px" />
        <YAxis />
        <Tooltip />
        <Bar type="monotone" dataKey="happy" fill="#FFC107" name="Happy" />
        <Bar type="monotone" dataKey="sad" fill="#2196F3" name="Sad" />
        <Bar type="monotone" dataKey="neutral" fill="grey" name="Neutral" />
        <Bar type="monotone" dataKey="angry" fill="#b81414" name="Angry" />
        <Bar type="monotone" dataKey="relaxed" fill="#6dc36d" name="Relaxed" />
      </BarChart>
    </ResponsiveContainer>
  );
}
MoodTrendChart.propTypes = {
  sentimentData: PropTypes.array.isRequired,
};


export default MoodTrendChart;
