const openaiApiKey = import.meta.env.VITE_REACT_APP_OPENAI_API_KEY;

const analyzeSentiment = (diaryEntry) => {
  return fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openaiApiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Analyze the sentiment of the following text: "${diaryEntry}". Sentiment:`,
      max_tokens: 3,
      temperature: 0,
    }),
  })
  .then((response) => response.json())
  .then((responseData) => {
    console.log(responseData);
    if (
      responseData.choices &&
      responseData.choices[0] &&
      responseData.choices[0].text
    ) {
      const sentimentScore = responseData.choices[0].text.trim();
      return sentimentScore;
    } else {
      console.error("Invalid response from OpenAI:", responseData);
      return null;
    }
  })
  .catch((error) => {
    console.error("Error analyzing sentiment:", error);
    return null;
  });
};

export default analyzeSentiment;
