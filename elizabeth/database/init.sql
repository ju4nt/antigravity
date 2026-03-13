-- ============================================================
-- Elizabeth ERP-IA — Inicialización base de datos MySQL 8
-- Modelo Estrella para contact center omnicanal
-- ============================================================

CREATE DATABASE IF NOT EXISTS elizabeth_erp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE elizabeth_erp;

-- ─── DIMENSIONES ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS dim_clientes (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    documento       VARCHAR(20)  NOT NULL UNIQUE,
    nombre          VARCHAR(120) NOT NULL,
    email           VARCHAR(120),
    phone_id        VARCHAR(30),
    social_handles  JSON,
    segmento        VARCHAR(30) DEFAULT 'normal',
    creado_en       DATETIME    DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_phone (phone_id),
    INDEX idx_doc   (documento)
);

CREATE TABLE IF NOT EXISTS dim_agentes (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    nombre      VARCHAR(120) NOT NULL,
    documento   VARCHAR(20)  NOT NULL UNIQUE,
    rol         VARCHAR(20)  DEFAULT 'agente',
    extension   VARCHAR(10),
    activo      TINYINT(1)   DEFAULT 1
);

CREATE TABLE IF NOT EXISTS dim_canales (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    tipo         VARCHAR(30) NOT NULL,
    credenciales JSON,
    activo       TINYINT(1)  DEFAULT 1
);

CREATE TABLE IF NOT EXISTS dim_tipificaciones (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    categoria    VARCHAR(60) NOT NULL,
    subcategoria VARCHAR(60),
    accion_auto  VARCHAR(120)
);

-- ─── TABLA DE HECHOS ────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS fact_interacciones (
    id               INT AUTO_INCREMENT PRIMARY KEY,
    fk_cliente       INT,
    fk_agente        INT,
    fk_canal         INT,
    fk_tipificacion  INT,
    transcripcion_ia TEXT,
    resumen_ia       TEXT,
    sentimiento      VARCHAR(20),
    ruta_multimedia  VARCHAR(255),
    duracion_seg     INT DEFAULT 0,
    timestamp        DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_cliente)      REFERENCES dim_clientes(id),
    FOREIGN KEY (fk_agente)       REFERENCES dim_agentes(id),
    FOREIGN KEY (fk_canal)        REFERENCES dim_canales(id),
    FOREIGN KEY (fk_tipificacion) REFERENCES dim_tipificaciones(id),
    INDEX idx_cliente   (fk_cliente),
    INDEX idx_agente    (fk_agente),
    INDEX idx_timestamp (timestamp)
);

-- ─── DATOS INICIALES ────────────────────────────────────────────────────────

INSERT IGNORE INTO dim_canales (tipo) VALUES
    ('voz'), ('whatsapp'), ('instagram'), ('facebook'), ('tiktok');

INSERT IGNORE INTO dim_tipificaciones (categoria, subcategoria, accion_auto) VALUES
    ('Venta',   'Interesado',  NULL),
    ('Venta',   'Cierre',      'enviar_email_cierre'),
    ('Soporte', 'Consulta',    NULL),
    ('Soporte', 'Escalado',    'crear_ticket'),
    ('Reclamo', 'Facturación', 'alertar_supervisor'),
    ('Reclamo', 'Servicio',    'alertar_supervisor');

INSERT IGNORE INTO dim_agentes (nombre, documento, rol, extension) VALUES
    ('Administrador', '000000', 'admin', '100'),
    ('Agente Demo',   '111111', 'agente', '101');

INSERT IGNORE INTO dim_clientes (documento, nombre, phone_id, segmento) VALUES
    ('1033710316', 'Juan Tavera', '573001234567', 'vip');
