require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

// ==========================================
// 🤖 SAN ANDRESITO "CORREDOR" BOT
// ==========================================
// Este bot es la "app" que usa el personal de campo para confirmar
// stock y subir evidencia en video sin gastar almacenamiento de Firebase.

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// 1. Comando de Inicio
bot.start((ctx) => {
    ctx.reply('👋 Bienvenido, Corredor de San Andresito 38.\nEstoy listo para recibir confirmaciones de stock y evidencia en video de los locales.');
});

// 2. Simulador de Envío de Tarea desde la App Flutter
// (En la realidad, un webhook o Firebase Cloud Function envía esto al usuario)
bot.command('nuevaorden', (ctx) => {
    // Telegraf permite enviar botones interactivos bajo el mensaje
    ctx.reply(
        '🛒 **NUEVO PEDIDO #A3F9**\n📍 Local: 312 (Plaza Central)\n📦 Item: iPhone 15 Pro Max 256GB\n💰 Precio Base: $4,500,000\n\nVerifica disponibilidad y envía video de confirmación.',
        Markup.inlineKeyboard([
            Markup.button.callback('✅ Hay Stock', 'STOCK_DISPONIBLE'),
            Markup.button.callback('❌ Agotado', 'STOCK_AGOTADO')
        ])
    );
});

// 3. Manejo de Botones Interactivos
bot.action('STOCK_DISPONIBLE', (ctx) => {
    // Al hacer clic, le pedimos al corredor enviar el video "Freshness"
    ctx.reply('¡Genial! 🟢 Ahora graba un video corto (máx 10s) mostrando la caja sellada del producto para subirlo al sistema.');
    // TODO: Aquí llamarías a la base de datos de Firebase para actualizar `last_updated` a AHORA (Freshness = Verde).
    ctx.answerCbQuery(); // Cerramos la alerta del botón
});

bot.action('STOCK_AGOTADO', (ctx) => {
    ctx.reply('Entendido. 🔴 Bajando y regresando el local a estado "Gris" (Inactivo) en el mapa de FlutterFlow por falta de stock.');
    // TODO: Llamar a Firebase -> cambiar estado publico del producto/local.
    ctx.answerCbQuery();
});

// 4. Recepción y Orquestación del Video 
bot.on('video', async (ctx) => {
    // Cuando el corredor envía el video por Telegram
    const videoId = ctx.message.video.file_id;
    
    // Aquí es donde ahorramos miles de dólares en servidores Storage.
    // Solo tomamos este 'videoId' y lo guardamos en un documento de texto en Firebase.
    // Luego FlutterFlow lee ese documento, y mediante el Telegram Player, lo reproduce.
    ctx.reply(`✅ Video recibido y guardado en la nube de Telegram.\n\n🔗 ID de Archivo: ${videoId}\n\nActualizando base de datos central...`);
});

bot.launch().then(() => {
    console.log("🚀 Bot de San Andresito 38 inicializado y escuchando...");
});

// Manejo seguro de apagado
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
