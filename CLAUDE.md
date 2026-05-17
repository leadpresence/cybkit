# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

### Development
- `npm start` — Start the Expo development server
- `npm run ios` — Start on iOS simulator
- `npm run android` — Start on Android emulator  
- `npm run web` — Start web version
- `npm run lint` — Run ESLint checks

### Resetting
- `npm run reset-project` — Reset to blank project state (moves starter code to app-example/)

## Project Overview

**CybKit** is a React Native app built with Expo 55.0.0 that tracks meal nutrition and enables meal purchases. The app uses file-based routing with expo-router and local storage for persistence.

### Key Technologies
- **Framework**: Expo v55.0.0 with typed routes and React Compiler experiments enabled
- **Language**: TypeScript (strict mode)
- **State Management**: Zustand
- **Storage**: React Native AsyncStorage
- **Routing**: expo-router (file-based with route groups)
- **Navigation**: React Navigation (bottom tabs)
- **Icons**: Expo Symbols & Ionicons

### Important: Expo Version
Always read the exact versioned docs at https://docs.expo.dev/versions/v55.0.0/ before writing code. Expo APIs and packages in v55 differ from other versions.

## Architecture

### Routing Structure
Routes are organized using expo-router's file-based system with route groups:
- `src/app/(auth)/` — Authentication screens (login)
- `src/app/(tabs)/` — Main tabbed interface with three tabs:
  - `index` — Home screen with macro tracking
  - `purchase_meal` — Purchase meal functionality
  - `meals` — View all meals list
- `src/app/_layout.tsx` — Root layout with Stack navigation between auth and tabs

### Directory Structure
- `src/app/` — Route definitions and screens (expo-router)
- `src/components/` — Reusable UI components (cards, buttons, lists, headers)
- `src/styles/` — Global styles, color palette, and theme
- `src/storage/` — AsyncStorage abstraction layer for data persistence (meals)
- `src/utils/` — Utility functions (notifications, helpers)

### Data Layer
Meal data is persisted to AsyncStorage via the `src/storage/meals.ts` module. The module exports async functions:
- `getMeals()` — Fetch all meals
- `addMeal(meal)` — Add new meal and return with ID and timestamp
- `deleteMeal(id)` — Remove meal by ID
- `clearAllMeals()` — Wipe all meals

The `Meal` type includes: id, name, calories, protein, carbs, fat, and createdAt.

### Styling
Global color palette and styles are centralized in `src/styles/global.tsx`:
- **Colors**: background, header, surface, primary, text, textSecondary, alert
- **Styles**: container, input, title, button, header layouts
- Dark theme by default (auto-detection enabled in app.json)

Path aliases are configured (tsconfig.json):
- `@/*` → `./src/*`
- `@/assets/*` → `./assets/*`

## Development Notes

### Creating Routes
Use expo-router conventions: files and folders in `src/app/` automatically become routes. Route groups (e.g., `(tabs)`, `(auth)`) allow logical grouping without affecting URL paths.

### Adding Components
Place reusable UI components in `src/components/`. Components should use the global color palette from `src/styles/global.tsx` for consistency.

### Persisting Data
Use the storage abstraction in `src/storage/meals.ts` for async operations. Add new storage modules for other data types following the same pattern.

### Type Safety
TypeScript strict mode is enabled. All external data (from AsyncStorage, user input, API responses) must be properly typed.

### Testing
No testing framework is currently set up. Follow Expo's guide on unit testing with Jest if adding tests: https://docs.expo.dev/develop/unit-testing/
