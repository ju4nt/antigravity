from google import genai

# Tu API Key
api_key_google = "AIzaSyDWNKUoCO72pFV1Unn4jskwecSnbcPknRY"
client = genai.Client(api_key=api_key_google)

print("--- LISTANDO MODELOS DISPONIBLES PARA TU CUENTA ---")
try:
    # Listamos todos los modelos disponibles
    for model in client.models.list():
        # Filtramos solo los que pueden generar contenido (Chat)
        if 'generateContent' in model.supported_methods:
            print(f"✅ ID exacto: {model.name}")
except Exception as e:
    print(f"Error al listar: {e}")