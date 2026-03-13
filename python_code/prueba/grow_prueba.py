from openai import OpenAI

client = OpenAI(
    api_key="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",
    base_url="https://api.groq.com/openai/v1",
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[
        {"role": "user", "content": "Hola, ¿cómo estás?"}
    ]
)

print(response.choices[0].message.content)