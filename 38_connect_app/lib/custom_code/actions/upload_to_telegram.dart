import 'dart:convert';
import 'package:http/http.dart' as http;

Future<String?> uploadToTelegram(
  dynamic videoFile, // En Flutter puro sería un archivo, en FF es FFUploadedFile
  String botToken,
  String chatId,
) async {
  if (videoFile.bytes == null) return null;

  final uri = Uri.parse('https://api.telegram.org/bot$botToken/sendVideo');
  final request = http.MultipartRequest('POST', uri)
    ..fields['chat_id'] = chatId
    ..files.add(
      http.MultipartFile.fromBytes(
        'video',
        videoFile.bytes!,
        filename: videoFile.name ?? 'verificacion.mp4',
      ),
    );

  try {
    final response = await request.send();
    
    if (response.statusCode == 200) {
      final respStr = await response.stream.bytesToString();
      final jsonResp = json.decode(respStr);
      // Extrae el file_id único para llamarlo desde Firestore
      return jsonResp['result']['video']['file_id'];
    } else {
      // Manejar error de Telegram
      return null;
    }
  } catch (e) {
    return null;
  }
}
