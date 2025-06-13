# 📅 React Todo List App

Projet d'apprentissage React + TypeScript + Vite

## 📈 Objectifs du projet
Construire une application Todo List moderne pour pratiquer :
- React 18 avec TypeScript 
- Gestion d'état avec useState 
- Effets de bord avec useEffect 
- Persistance des données en localStorage 
- Structure de projet modulaire (components)
- Gestion du routing simple (optionnel)
- Mise en place d'un workflow Git pro

## 🔧 Stack technique 
- React 18+ 
- TypeScript 
- Vite (outil de build rapide)
- TailwindCSS (facultatif, pour styliser rapidement)
- React Router (optionnel, pour routing)

## 📖 Fonctionnalités

### MVP (version de base)
- Ajouter une tâche 
- Supprimer une tâche 
- Marquer une tâche comme complétée 
- Filtrer les tâches (All / Active / Completed)
- Persister les tâches dans localStorage

### Bonus possibles 
- Animations CSS
- Recherche par mot-clé 
- Date de création de la tâche 
- Thème clair / sombre

## 🔄 Installation et démarrage local

### Clone du projet
```aiignore
git clone <url-du-repo>
cd my-todo-app
```

### Installation des dépendances

```aiignore
npm install
```

### Démarrage en mode dev

```aiignore
npm run dev
```
Accéder ensuite à http://localhost:5173

## 📁 Structure du projet
```aiignore
src/
├── components/          # Composants réutilisables (TodoItem, TodoList, TodoForm)
├── App.tsx              # Composant racine de l'application
├── main.tsx             # Point d'entrée de l'application
└── index.css            # Styles globaux (inclut TailwindCSS si utilisé)
```

