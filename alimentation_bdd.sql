-- ============================================
-- TROUVE TON ARTISAN - DONNÉES DE TEST
-- Script d'alimentation de la base de données
-- Données issues du fichier data.xlsx
-- MySQL / MariaDB
-- ============================================

USE trouve_ton_artisan;

-- ============================================
-- INSERTION : CATEGORIES (4)
-- ============================================

INSERT INTO categorie (nom_categorie) VALUES
('Bâtiment'),
('Services'),
('Fabrication'),
('Alimentation');

-- ============================================
-- INSERTION : SPECIALITES
-- ============================================

-- Spécialités Bâtiment (id_categorie = 1)
INSERT INTO specialite (nom_specialite, id_categorie) VALUES
('Menuisier', 1),
('Électricien', 1),
('Plombier', 1),
('Chauffagiste', 1);

-- Spécialités Services (id_categorie = 2)
INSERT INTO specialite (nom_specialite, id_categorie) VALUES
('Coiffeur', 2),
('Toiletteur', 2),
('Fleuriste', 2),
('Webdesign', 2);

-- Spécialités Fabrication (id_categorie = 3)
INSERT INTO specialite (nom_specialite, id_categorie) VALUES
('Bijoutier', 3),
('Couturier', 3),
('Ferronnier', 3);

-- Spécialités Alimentation (id_categorie = 4)
INSERT INTO specialite (nom_specialite, id_categorie) VALUES
('Boucher', 4),
('Boulanger', 4),
('Chocolatier', 4),
('Traiteur', 4);

-- ============================================
-- INSERTION : ARTISANS (16 artisans)
-- Note : Les notes sont converties sur 10
-- (note Excel × 2 = note en base)
-- ============================================

-- ALIMENTATION (4 artisans)
-- ============================================

INSERT INTO artisan (id_artisan, nom, note, localisation, a_propos, site_web,top_artisan, id_specialite) VALUES
-- Boucherie Dumont (4.5 → 9/10)
(
    UUID(),
    'Boucherie Dumont',
    9,
    'Lyon',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
    NULL,
    FALSE,
    12
),

-- Au pain chaud (4.8 → 10/10)
(
    UUID(),
    'Au pain chaud',
    10,
    'Montélimar',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    NULL,
    TRUE,
    13
),

-- Chocolaterie Labbé (4.9 → 10/10)
(
    UUID(),
    'Chocolaterie Labbé',
    10,
    'Lyon',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'https://chocolaterie-labbe.fr',
    TRUE,
    14
),

-- Traiteur Truchon (4.1 → 8/10)
(
    UUID(),
    'Traiteur Truchon',
    8,
    'Lyon',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'https://truchon-traiteur.fr',
    FALSE,
    15
);

-- BÂTIMENT (4 artisans)
-- ============================================

INSERT INTO artisan (id_artisan, nom, note, localisation, a_propos, site_web,top_artisan, id_specialite) VALUES
-- Orville Salmons (5.0 → 10/10)
(
    UUID(),
    'Orville Salmons',
    10,
    'Évian',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    NULL,
    TRUE,
    4
),

-- Mont Blanc Électricité (4.5 → 9/10)
(
    UUID(),
    'Mont Blanc Électricité',
    9,
    'Chamonix',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'https://mont-blanc-electricite.com',
    FALSE,
    2
),

-- Boutot & fils (4.7 → 9/10)
(
    UUID(),
    'Boutot & fils',
    9,
    'Bourg-en-Bresse',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'https://boutot-menuiserie.com',
    FALSE,
    1
),

-- Vallis Bellemare (4.0 → 8/10)
(
    UUID(),
    'Vallis Bellemare',
    8,
    'Vienne',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'https://plomberie-bellemare.com',
    FALSE,
    3
);

-- FABRICATION (3 artisans)
-- ============================================

INSERT INTO artisan (id_artisan, nom, note, localisation, a_propos, site_web,top_artisan, id_specialite) VALUES
-- Claude Quinn (4.2 → 8/10)
(
    UUID(),
    'Claude Quinn',
    8,
    'Aix-les-bains',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    NULL,
    FALSE,
    9
),

-- Amitee Lécuyer (4.5 → 9/10)
(
    UUID(),
    'Amitee Lécuyer',
    9,
    'Annecy',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'https://lecuyer-couture.com',
    FALSE,
    10
),

-- Ernest Carignan (5.0 → 10/10)
(
    UUID(),
    'Ernest Carignan',
    10,
    'Le Puy-en-Velay',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    NULL,
    FALSE,
    11
);

-- SERVICES (5 artisans)
-- ============================================

INSERT INTO artisan (id_artisan, nom, note, localisation, a_propos, site_web,top_artisan, id_specialite) VALUES
-- Royden Charbonneau (3.8 → 8/10)
(
    UUID(),
    'Royden Charbonneau',
    8,
    'Saint-Priest',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    NULL,
    FALSE,
    5
),

-- Leola Dennis (3.8 → 8/10)
(
    UUID(),
    'Leola Dennis',
    8,
    'Chambéry',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'https://coiffure-leola-chambery.fr',
    FALSE,
    5
),

-- C'est sup'hair (4.1 → 8/10)
(
    UUID(),
    'C\'est sup\'hair',
    8,
    'Romans-sur-Isère',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'https://sup-hair.fr',
    FALSE,
    5
),

-- Le monde des fleurs (4.6 → 9/10)
(
    UUID(),
    'Le monde des fleurs',
    9,
    'Annonay',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'https://le-monde-des-fleurs-annonay.fr',
    FALSE,
    7
),

-- Valérie Laderoute (4.5 → 9/10)
(
    UUID(),
    'Valérie Laderoute',
    9,
    'Valence',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    NULL,
    FALSE,
    6
),

-- CM graphisme (4.4 → 9/10)
(
    UUID(),
    'CM graphisme',
    9,
    'Valence',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'https://cm-graphisme.com',
    FALSE,
    8
);

-- ============================================
-- FIN DU SCRIPT
-- ============================================