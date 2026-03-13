from google import genai

client = genai.Client(api_key="AIzaSyC5NVclkAmUnziS0na286tOOnfCP2WguIc") # Tu llave de Google

# Usamos el modelo más estable del free tier
response = client.models.generate_content(
    model="gemini-2.0-flash", 
    contents="Hola Gemini, confirma conexión."
)
print(f"Gemini dice: {response.text}")