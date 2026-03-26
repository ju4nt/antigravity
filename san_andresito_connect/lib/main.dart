import 'package:flutter/material.dart';

// Notificador Global de Tema (Dark/Light)
final ValueNotifier<ThemeMode> themeNotifier = ValueNotifier(ThemeMode.dark);

void main() {
  runApp(const SanAndresitoApp());
}

class SanAndresitoApp extends StatelessWidget {
  const SanAndresitoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<ThemeMode>(
      valueListenable: themeNotifier,
      builder: (_, ThemeMode currentMode, __) {
        return MaterialApp(
          title: 'San Andresito Connect',
          debugShowCheckedModeBanner: false,
          themeMode: currentMode,
          theme: ThemeData.light(useMaterial3: true).copyWith(
            primaryColor: Colors.green,
            scaffoldBackgroundColor: const Color(0xFFF1F5F9),
            appBarTheme: const AppBarTheme(backgroundColor: Colors.white, foregroundColor: Colors.black, elevation: 1),
            cardColor: Colors.white,
          ),
          darkTheme: ThemeData.dark(useMaterial3: true).copyWith(
            primaryColor: const Color(0xFF00FF00),
            scaffoldBackgroundColor: const Color(0xFF0F172A),
            appBarTheme: const AppBarTheme(backgroundColor: Color(0xFF1E293B), foregroundColor: Colors.white, elevation: 0),
            cardColor: const Color(0xFF1E293B),
          ),
          home: const LoginPage(),
        );
      },
    );
  }
}

// ==========================================
// 1. PANTALLA DE LOGIN (SELECCIÓN DE ROL)
// ==========================================
class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        actions: [
          IconButton(
            icon: Icon(isDark ? Icons.light_mode : Icons.dark_mode, color: isDark ? Colors.amberAccent : Colors.indigo),
            onPressed: () => themeNotifier.value = isDark ? ThemeMode.light : ThemeMode.dark,
          )
        ],
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 30),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.storefront, size: 80, color: isDark ? Colors.greenAccent : Colors.blueAccent),
              const SizedBox(height: 20),
              Text('San Andresito Connect', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold, color: isDark ? Colors.white : Colors.black87)),
              const SizedBox(height: 10),
              const Text('Selecciona tu Perfil de Ingreso', style: TextStyle(fontSize: 14, color: Colors.grey)),
              const SizedBox(height: 50),
              
              // BOTÓN COMPRADOR (VITRINEAR)
              SizedBox(
                width: double.infinity,
                height: 70,
                child: ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: isDark ? const Color(0xFF1E293B) : Colors.white,
                    foregroundColor: isDark ? Colors.white : Colors.black,
                    side: BorderSide(color: isDark ? Colors.grey.shade700 : Colors.grey.shade300),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                  ),
                  icon: const Icon(Icons.shopping_bag_outlined, size: 30, color: Colors.orangeAccent),
                  label: const Text('Entrar como Comprador\n(Quiero vitrinear locales)', textAlign: TextAlign.center, style: TextStyle(fontSize: 16)),
                  onPressed: () {
                    Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const BuyerHome()));
                  },
                ),
              ),
              const SizedBox(height: 20),
              
              // BOTÓN VENDEDOR (TIENDA)
              SizedBox(
                width: double.infinity,
                height: 70,
                child: ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: isDark ? const Color(0xFF1E293B) : Colors.white,
                    foregroundColor: isDark ? Colors.white : Colors.black,
                    side: BorderSide(color: isDark ? Colors.grey.shade700 : Colors.grey.shade300),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                  ),
                  icon: const Icon(Icons.store, size: 30, color: Colors.greenAccent),
                  label: const Text('Entrar como Vendedor\n(Actualizar mi inventario)', textAlign: TextAlign.center, style: TextStyle(fontSize: 16)),
                  onPressed: () {
                    Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const VendorDashboard()));
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ==========================================
// 2A. VISTA DEL COMPRADOR (VITRINEAR)
// ==========================================
class BuyerHome extends StatelessWidget {
  const BuyerHome({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final List<Map<String, dynamic>> localesDemo = [
      {"name": "Local 314 - Puerto Libre", "tech": "Celulares y Apple", "status": "Inventario Fresco", "color": Colors.green},
      {"name": "Distribuciones PC", "tech": "Gaming y Ensamble", "status": "Actualizado ayer", "color": Colors.orangeAccent},
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Locales Cercanos'),
        actions: [
          IconButton(icon: const Icon(Icons.exit_to_app), onPressed: () => Navigator.pushReplacement(context, MaterialPageRoute(builder: (c) => const LoginPage())))
        ],
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: localesDemo.length,
        itemBuilder: (context, index) {
          final local = localesDemo[index];
          return GestureDetector(
            onTap: () {
              // Navegar al catálogo del local
              Navigator.push(context, MaterialPageRoute(builder: (context) => BuyerStoreDetail(storeName: local['name'])));
            },
            child: Card(
              color: Theme.of(context).cardColor,
              margin: const EdgeInsets.only(bottom: 12),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              child: ListTile(
                leading: CircleAvatar(backgroundColor: local['color'].withOpacity(0.2), child: Icon(Icons.storefront, color: local['color'])),
                title: Text(local['name'], style: TextStyle(color: isDark ? Colors.white : Colors.black87, fontWeight: FontWeight.bold)),
                subtitle: Text("Catálogo: ${local['tech']} \n${local['status']}", style: TextStyle(color: local['color'])),
                trailing: const Icon(Icons.arrow_forward_ios, size: 16, color: Colors.grey),
              ),
            ),
          );
        },
      ),
    );
  }
}

// 2A.1 DETALLE DEL LOCAL (EL CLIENTE VE LAS FOTOS)
class BuyerStoreDetail extends StatelessWidget {
  final String storeName;
  const BuyerStoreDetail({super.key, required this.storeName});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(storeName)),
      body: GridView.builder(
        padding: const EdgeInsets.all(16),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, crossAxisSpacing: 10, mainAxisSpacing: 10),
        itemCount: 4,
        itemBuilder: (context, index) {
          return Container(
            decoration: BoxDecoration(color: Theme.of(context).cardColor, borderRadius: BorderRadius.circular(12)),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Icon(Icons.image, size: 50, color: Colors.grey),
                const SizedBox(height: 10),
                Text('Catálogo ${index + 1}', style: const TextStyle(fontWeight: FontWeight.bold)),
                const Text('\$1.200.000', style: TextStyle(color: Colors.green)),
              ],
            ),
          );
        },
      ),
    );
  }
}

// ==========================================
// 2B. VISTA DEL VENDEDOR (SUBIR FOTOS A TELEGRAM)
// ==========================================
class VendorDashboard extends StatelessWidget {
  const VendorDashboard({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mi Local (Admin)'),
        backgroundColor: Colors.blueAccent.withOpacity(0.2),
        actions: [
          IconButton(icon: const Icon(Icons.exit_to_app), onPressed: () => Navigator.pushReplacement(context, MaterialPageRoute(builder: (c) => const LoginPage())))
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            const CircleAvatar(radius: 40, backgroundColor: Colors.blueAccent, child: Icon(Icons.store, size: 40, color: Colors.white)),
            const SizedBox(height: 15),
            Text('Local 314 - Puerto Libre', style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: isDark ? Colors.white : Colors.black87)),
            const SizedBox(height: 30),
            
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(color: Theme.of(context).cardColor, borderRadius: BorderRadius.circular(15)),
              child: Column(
                children: [
                  Icon(Icons.camera_alt, size: 50, color: isDark ? Colors.greenAccent : Colors.blue),
                  const SizedBox(height: 15),
                  Text('Actualizar Vitrina (Telegram)', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: isDark ? Colors.white : Colors.black87)),
                  const SizedBox(height: 10),
                  const Text('Toma fotos a tus productos nuevos. Los clientes los verán al instante.', textAlign: TextAlign.center, style: TextStyle(color: Colors.grey)),
                  const SizedBox(height: 20),
                  SizedBox(
                    width: double.infinity, height: 50,
                    child: ElevatedButton.icon(
                      style: ElevatedButton.styleFrom(backgroundColor: Colors.blueAccent, foregroundColor: Colors.white),
                      icon: const Icon(Icons.camera),
                      label: const Text('SUBIR FOTO DE PRODUCTO'),
                      onPressed: () {
                        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Subiendo foto a la nube de Telegram... ☁️')));
                      },
                    ),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
