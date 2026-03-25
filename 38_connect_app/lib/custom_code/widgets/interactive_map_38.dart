import 'package:flutter/material.dart';

class InteractiveMap38 extends StatefulWidget {
  const InteractiveMap38({
    Key? key,
    this.width,
    this.height,
    required this.locales,
  }) : super(key: key);

  final double? width;
  final double? height;
  final List<dynamic> locales;

  @override
  _InteractiveMap38State createState() => _InteractiveMap38State();
}

class _InteractiveMap38State extends State<InteractiveMap38> {
  
  Color _getPinColor(DateTime lastUpdated) {
    final difference = DateTime.now().difference(lastUpdated).inHours;

    if (difference < 12) return Colors.green; // Fresh
    if (difference <= 24) return Colors.orangeAccent; // Warning
    return Colors.grey; // Stale (Invisibilidad)
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: widget.width ?? double.infinity,
      height: widget.height ?? 400,
      child: InteractiveViewer(
        maxScale: 4.0,
        minScale: 1.0,
        child: Stack(
          children: [
            // Fondo Indoor SVG o PNG del centro comercial
            // Requiere: agregar assets/images/mapa_38_indoor.png al pubspec.yaml
            Image.asset(
               'assets/images/mapa_38_indoor.png', 
               fit: BoxFit.contain,
               width: double.infinity,
               height: double.infinity,
               errorBuilder: (ctx, _, __) => const Center(child: Text("Falta agregar el asset mapa_38_indoor.png")),
            ),
            
            // Capa de Pines Dinámicos
            ...widget.locales.map((local) {
              final x = (local['offset_x'] as num).toDouble();
              final y = (local['offset_y'] as num).toDouble();
              // Parsear Datetime desde Timestamp de Firestore
              final lastUpdated = (local['last_updated'] != null) 
                  ? DateTime.parse(local['last_updated'].toString()) 
                  : DateTime.now().subtract(const Duration(days: 2));
              
              return Positioned(
                left: x,
                top: y,
                child: GestureDetector(
                  onTap: () {
                     // Acción local: ej. llamar a un modal inferior o bottom sheet
                  },
                  child: Icon(
                    Icons.location_on,
                    color: _getPinColor(lastUpdated),
                    size: 32,
                    shadows: const [Shadow(color: Colors.black45, blurRadius: 4)],
                  ),
                ),
              );
            }).toList(),
          ],
        ),
      ),
    );
  }
}
