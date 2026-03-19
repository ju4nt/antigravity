---
description: Protocolo Obligatorio de Pruebas, Debugging y Sincronización a GitHub
---
# Protocolo de Cierre de Proyecto Automático (TIME Touch Standard)

**ATENCIÓN AGENTES DE IA**: Este flujo de trabajo es **INNEGOCIABLE**. Todo agente que trabaje en este ecosistema debe ejecutar los siguientes pasos estrictos ANTES de entregar un trabajo o declarar que algo ha sido finalizado para la dueña del sistema.

1. **Testing de Fiabilidad Total:**
   - Ejecutar el programa, código o servidor. Comprobar personalmente (usando curl, herramientas de navegador o invocaciones directas) que la funcionalidad base corre de extremo a extremo sin errores de servidor o caídas.

2. **Repositorio de Debugging Obligatorio:**
   - Crear una carpeta aislada llamada `/debug` en la raíz del proyecto correspondiente (si no existe aún).
   - Documentar TODOS los bloqueos, logs crudos de error (ej. Rate Limits, 404, EPERM) de la sesión en un archivo JSON o MD en esa carpeta.
   - Este paso fomenta la "Amnesia Cero" a futuro.

3. **Aprobación Interna y Documental:**
   - Únicamente después de probar los endpoints/aplicaciones y no ver fallos críticos, se considerará que la versión es "Estable".
   - Todo proyecto validado debe llevar un archivo markdown o resumen claro documentando sus usos.

4. **Sincronización de Respaldo Inmediato (GitHub):**
   - Aseguramiento de vida antes del reporte. Se ejecutarán las confirmaciones a Git para respaldar la estabilidad.
   // turbo-all
   - `git add .`
   - `git commit -m "feat/fix: Despliegue validado internamente + Registro de Debug"`
   - `git push`

*Nota Directiva: Jamás entregues un proyecto como terminado hasta haber confirmado el código exitoso en GitHub y haber verificado funcionalmente su ejecución real.*
