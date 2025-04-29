📚 Projet : "REACT - Book Manager"

Une petite app qui permet :

    D’afficher une liste de livres

    D'ajouter un nouveau livre (titre + auteur)

    De supprimer un livre

    D’éditer un livre

    (optionnel) de stocker les données dans le localStorage pour les retrouver au reload

📦 Stack recommandée

    React (évidemment 😄)

    Vite pour créer le projet rapidement (npm create vite@latest)

    React Router pour la navigation (npm install react-router-dom)

    TailwindCSS si tu veux un peu de style rapide (npm install -D tailwindcss)

🛠️ Arborescence basique

/src
  /components
    BookList.tsx
    BookItem.tsx
    BookForm.tsx
  /pages
    Home.tsx
    AddBook.tsx
    EditBook.tsx
  /context
    BookContext.tsx
  App.tsx
  main.tsx

🚀 Étapes de dev

    Setup du projet (Vite + React + TS)

    Créer un BookContext pour stocker les livres

    Créer BookList → liste les livres

    Créer BookForm → formulaire d’ajout/édition

    Configurer React Router → Home (liste), Add, Edit

    Gérer le localStorage (useEffect pour persist la liste)

    Ajouter un peu de style

👉 Ce que tu vas apprendre concrètement

    Structurer ton app avec composants fonctionnels

    Gérer le state proprement (lifting + context)

    Naviguer entre pages avec Router

    Utiliser des hooks React (useState, useEffect, useContext)

    Manipuler les événements (onClick, onChange, etc.)

    Appeler une API (simulée via localStorage ou fetch)

