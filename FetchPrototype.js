//Node OpenAI package
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey:"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",
});

//Sends a fetch request
const getResponse = async () => {
    const response = await openai.chat.completions.create ({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                //Input we are sending in
                content: 'Tell me three great things about hackathons',
            },
        ],
        temperature: 0,
        max_tokens: 500,
        top_p: .1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });
    console.log(response.choices[0].message);
};

getResponse();