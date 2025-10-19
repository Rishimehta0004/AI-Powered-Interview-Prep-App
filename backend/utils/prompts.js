const questionAnswerPrompt = (role,experience,topicsToFocus,numberOfQuestions) =>(`
    You are an AI trained to geneerate technical interview questions and answers for a given role and experience.

    Task:
    -Role: ${role}
    -Candidate Experience: ${experience} years
    -Focus Topics: ${topicsToFocus}
    -Write ${numberOfQuestions} interview questions for the given role and experience.
    -For each question, generate a detailed but beginner-friendly answer.
    -If the answer needs a code example, add a small code snippet.
    -Keep formatting very clean and easy to understand.
    -Return a pure JSON array like:
    [
        {
            "question": "Question here?",
            "answer": "Answer here."
        },
        ...
    ]
    Important: Do NOT add any extra text. Only return valid JSON.
    `)

    const conceptExplainPrompt = (concept) =>(`
        You are an AI trained to generate detailed explanations for a given concept.

        Task:

        -Explain the following interview question and its concept in depth as if you're teaching a beginner developer.
        -Question: "${question}"
        -After the explanation, provide a short and clear title that summarizes the concept for the article or page header.
        -If the explanation includes a code example, add a small code snippet.
        -Keep formatting very clean and easy to understand.
        -Return a pure JSON object like:
        {
            "title": "Title here?",
            "explanation": "Explanation here."
        }
        Important: Do NOT add any extra text. Only return valid JSON.
        `)

        module.exports = {questionAnswerPrompt, conceptExplainPrompt};