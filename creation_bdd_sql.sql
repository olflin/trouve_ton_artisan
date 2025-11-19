-- ============================================
-- TROUVE TON ARTISAN - BASE DE DONNÉES
-- Script de création des tables
-- MySQL / MariaDB
-- ============================================

-- Supprimer la base si elle existe
DROP DATABASE IF EXISTS trouve_ton_artisan;

-- Créer la base de données
CREATE DATABASE trouve_ton_artisan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Utiliser la base
USE trouve_ton_artisan;

-- ============================================
-- TABLE : CATEGORIE
-- ============================================
CREATE TABLE categorie (
    id_categorie INT AUTO_INCREMENT PRIMARY KEY,
    nom_categorie VARCHAR(100) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE : SPECIALITE
-- ============================================
CREATE TABLE specialite (
    id_specialite INT AUTO_INCREMENT PRIMARY KEY,
    nom_specialite VARCHAR(100) NOT NULL,
    id_categorie INT NOT NULL,
    -- Clé étrangère vers CATEGORIE
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Index pour optimiser les jointures
CREATE INDEX idx_categorie ON specialite(id_categorie);

-- ============================================
-- TABLE : ARTISAN
-- ============================================
CREATE TABLE artisan (
    id_artisan CHAR(36) PRIMARY KEY,
    
    -- Informations de base
    nom VARCHAR(100) NOT NULL,
    note INTEGER DEFAULT 0 CHECK (note >= 0 AND note <= 10),
    
    -- Localisation
    localisation VARCHAR(255),
    
    -- Description et contact
    a_propos TEXT,
    site_web VARCHAR(255),
    
    -- Média
    photo_url VARCHAR(255),
    
    -- Relation avec SPECIALITE
    id_specialite INT NOT NULL,
    
    -- Clé étrangère vers SPECIALITE
    FOREIGN KEY (id_specialite) REFERENCES specialite(id_specialite)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Index pour optimiser les recherches
CREATE INDEX idx_specialite ON artisan(id_specialite);
CREATE INDEX idx_note ON artisan(note DESC);
CREATE INDEX idx_localisation ON artisan(localisation);
CREATE INDEX idx_nom ON artisan(nom);

-- Index fulltext pour la recherche par nom
CREATE FULLTEXT INDEX idx_fulltext_nom ON artisan(nom);