

const openaiApiKey = import.meta.env.VITE_REACT_APP_OPENAI_API_KEY;
const generateSummary = async (message) => {

  
    const res=await fetch("https://api.openai.com/v1/chat/completions", 
    {method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openaiApiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: message },
      ],
      // max_tokens: 10,
      // temperature: 0.9,
    })
})
return await res.json()
}

export default generateSummary