import openai from "./chatgpt";

// docs : https://platform.openai.com/docs/api-reference/completions/create
const query = async (prompt: string, chatId: string, model: string) => {
  const res: any = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9, // higher = more random, lower = more focused
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0, // likelihood to repeat line verbatim
      presence_penalty: 0, // likelihood of new topics
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => `CloneGPT was unable to respond! (Error: ${err.message})`);

  return res;
};

export default query;
