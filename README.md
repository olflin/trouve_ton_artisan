# Trouve ton artisan

Plateforme de mise en relation entre particuliers et artisans de la région Auvergne-Rhône-Alpes.

## Table des matières

1.  [Contexte du projet](#contexte-du-projet)
2.  [Prérequis](#prérequis)
3.  [Installation et lancement](#installation-et-lancement)
    *   [Base de données](#1-base-de-données)
    *   [Backend (API)](#2-backend-api)
    *   [Frontend (Application Web)](#3-frontend-application-web)
4.  [Structure du projet](#structure-du-projet)
5.  [Technologies utilisées](#technologies-utilisées)

---

## Contexte du projet

La région Auvergne-Rhône-Alpes a souhaité développer une plateforme web permettant de valoriser l'artisanat local (plus de 221 000 entreprises en 2021). 
L'objectif est d'offrir aux particuliers un outil simple et accessible (normes WCAG 2.1) pour :
*   Rechercher un artisan par catégorie (Bâtiment, Services, Fabrication, Alimentation).
*   Consulter les fiches détaillées des artisans (note, spécialité, localisation).
*   Contacter un artisan via un formulaire dédié.

Le projet a été conçu avec une approche **Mobile First** pour s'adapter à tous les écrans.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

*   **Node.js** (version 16 ou supérieure) et **npm**.
*   **MySQL** ou **MariaDB** (serveur de base de données).
*   **Git**.

---

## Installation et lancement

### 1. Base de données

1.  Ouvrez votre outil de gestion de base de données (phpMyAdmin, MySQL Workbench, DBeaver, etc.).
2.  Exécutez le script **`creation_bdd_sql.sql`** situé à la racine du projet. Ce script va créer la base de données `trouve_ton_artisan` et les tables nécessaires.
3.  Exécutez ensuite le script **`alimentation_bdd.sql`** pour insérer le jeu de données de test (catégories, spécialités, artisans).

#### Images artisans (`photo_url`)

Les photos d'artisans ne pointent pas vers un chemin local Windows, mais vers des URLs publiques servies par le frontend.

Les fichiers d'images sont placés dans le dossier `frontend/public/img`. Ils sont ensuite accessibles via des chemins relatifs à la racine du site. Quelques exemples de valeurs possibles pour la colonne `photo_url` de la table `artisan` :

- `/img/artisan1.png`
- `/img/artisan2.jpg`
- `/img/Logo.png`

En développement, ces chemins correspondent par exemple à `http://localhost:5173/img/artisan1.png`, et en production à `https://trouve-ton-artisan-alpha.vercel.app/img/artisan1.png`.

Sur la fiche artisan, le frontend utilise `photo_url` pour afficher l'image. Si ce champ est vide ou `NULL`, une image par défaut (`/favicon.png`) est automatiquement utilisée.

### 2. Backend (API)

L'API gère les données et communique avec la base de données MySQL.

1.  Ouvrez un terminal et placez-vous dans le dossier `backend` :
    ```bash
    cd backend
    ```
2.  Installez les dépendances :
    ```bash
    npm install
    ```
3.  Configurez la connexion à la base de données :
    *   Renommez le fichier `.env.example` en `.env` (s'il n'existe pas, créez-le).
    *   Modifiez les variables suivantes selon votre configuration MySQL locale :
        ```
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=votre_mot_de_passe
        DB_NAME=trouve_ton_artisan
        API_PORT=4000
        ```
4.  Lancez le serveur :
    ```bash
    npm run dev
    ```
    Le serveur démarrera sur `http://localhost:4000`.

### 3. Frontend (Application Web)

L'application React qui permet aux utilisateurs de naviguer sur le site.

1.  Ouvrez un **nouveau terminal** et placez-vous dans le dossier `frontend` :
    ```bash
    cd frontend
    ```
2.  Installez les dépendances :
    ```bash
    npm install
    ```
3.  Lancez l'application en mode développement :
    ```bash
    npm run dev
    ```
4.  Ouvrez votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`).

---

## Structure du projet

Le projet est organisé en deux dossiers principaux :

*   **`backend/`** : Contient l'API RESTful (Node.js/Express).
    *   `src/config/` : Configuration de la base de données (Sequelize).
    *   `src/models/` : Modèles de données (Artisan, Categorie, Specialite).
    *   `src/routes/` : Définition des routes de l'API.
    *   `src/app.js` : Point d'entrée du serveur.

*   **`frontend/`** : Contient l'interface utilisateur (React).
    *   `src/api/` : Configuration des appels API.
    *   `src/components/` : Composants réutilisables (Header, Footer, ArtisanCard...).
    *   `src/pages/` : Pages principales (Accueil, Recherche, Fiche Artisan...).
    *   `src/styles/` : Feuilles de style SASS/CSS.

---

## Technologies utilisées

*   **Maquettage :** Figma.
*   **Frontend :** ReactJS (Vite), Bootstrap 5, Sass.
*   **Backend :** Node.js, Express.js.
*   **Base de données :** MySQL, Sequelize (ORM).
*   **Sécurité :** Helmet, CORS, validation des données.
