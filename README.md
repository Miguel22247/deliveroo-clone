# Deliveroo Clone - React Native App

[![React Native](https://img.shields.io/badge/React%20Native-0.71.8-blue.svg?style=flat-square&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2048-black.svg?style=flat-square&logo=expo)](https://expo.dev/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC.svg?style=flat-square&logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-Nativewind-38B2AC.svg?style=flat-square&logo=tailwind-css)](https://www.nativewind.dev/)
[![Sanity](https://img.shields.io/badge/CMS-Sanity.io-f03e2f.svg?style=flat-square&logo=sanity)](https://www.sanity.io/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

A mobile application built with React Native and Expo that replicates core Deliveroo features. This app demonstrates modern React Native development practices using Nativewind (Tailwind CSS for React Native), Redux for state management, and Sanity.io for content management.

## Screenshots

<img width="1179" height="2556" alt="image" src="https://github.com/user-attachments/assets/57832d61-275c-412b-9c82-ea7f609b1f47" />

<img width="1179" height="2556" alt="image" src="https://github.com/user-attachments/assets/52399bbb-418f-4c30-98ac-599a6d24b211" />

<img width="1179" height="2556" alt="image" src="https://github.com/user-attachments/assets/34b1a8f0-67b1-4ed7-a4f9-101078aa9fea" />

<img width="1179" height="2556" alt="image" src="https://github.com/user-attachments/assets/80b1ac4c-1010-40e0-adfc-9df3bf692b8a" />

<img width="1179" height="2556" alt="image" src="https://github.com/user-attachments/assets/574c86e9-621e-418e-bce2-48fe7df0a791" />

## App Preview

### Home Screen

- Browse featured restaurants
- Search functionality
- Category filtering

### Restaurant Screen

- Menu items
- Restaurant details
- Dish customization

### Basket & Checkout

- Order summary
- Price calculation
- Delivery options

## Features

- 🏪 Browse restaurants and dishes
- 🛒 Add items to basket
- 🔄 Real-time price calculation
- 📱 Native animations
- 💳 Shopping basket management
- 🎨 Clean UI with Tailwind CSS styling
- 📊 CMS integration with Sanity.io

## Tech Stack

- React Native + Expo
- Redux + Redux Toolkit
- Nativewind (Tailwind CSS)
- React Navigation
- Sanity.io CMS
- React Native Animations

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or Yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Install project dependencies:

```bash
npm install
# or
yarn install
```

1. Install Tailwind development tools:

```bash
npm install --save-dev tailwindcss
# or
yarn add -D tailwindcss
```

1. Start the development server:

```bash
# Clear cache and start (recommended for first run)
npx expo start -c

# Regular start
npx expo start
```

1. Run on your preferred platform:

```bash
# iOS
npx expo run:ios

# Android
npx expo run:android
```

## Project Structure

```plaintext
deliveroo-clone/
├── App.jsx              # Entry point and navigation setup
├── components/          # Reusable UI components
│   ├── BasketIcon/     # Shopping basket icon with badge
│   ├── Categories/     # Restaurant categories
│   ├── DishRow/        # Individual dish display
│   └── FeaturedRow/    # Featured restaurants section
├── screens/            # App screens
│   ├── HomeScreen      # Main restaurant listing
│   ├── RestaurantScreen# Restaurant details and menu
│   ├── BasketScreen    # Shopping cart
│   └── DeliveryScreen # Delivery tracking
├── features/           # Redux slices
├── sanity/            # CMS configuration
└── store.js           # Redux store setup
```

## Configuration Files

- `babel.config.js` - Babel configuration with Nativewind plugin
- `tailwind.config.js` - Tailwind CSS configuration
- `metro.config.js` - Metro bundler settings
- `app.json` - Expo configuration

## Troubleshooting

### PostCSS/Metro Bundling Issues

If you encounter this error:

```plaintext
error: App.jsx: Use process(css).then(cb) to work with async plugins
```

Solutions:

1. Ensure `tailwindcss` is in devDependencies
2. Clear Metro cache: `npx expo start -c`
3. Check `metro.config.js` blocks the Sanity folder

### Sanity Studio Setup

The project uses Sanity.io as a headless CMS to manage restaurant and menu data. The Sanity Studio is a separate application that provides a content management interface.

#### Initial Setup

First, navigate to the Sanity directory:

```bash
cd sanity
```

Then install dependencies:

```bash
npm install
```

Finally, start the Sanity Studio development server:

```bash
npm run dev
```

The studio will be available at `http://localhost:3333`

#### Content Models

The Sanity Studio includes the following schema types:

- `restaurant` - Restaurant details and metadata
- `dish` - Menu items and prices
- `category` - Restaurant categories
- `featured` - Featured restaurant collections

#### Environment Variables

Create a `.env` file in the `sanity` directory:

```plaintext
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

#### Deployment

To deploy your Sanity Studio:

```bash
npm run deploy
```

This will build and deploy the studio to Sanity's hosted platform at `https://your-project.sanity.studio`

#### API Setup

First, install the Sanity client in the React Native app:

```bash
npm install @sanity/client @sanity/image-url
```

Then configure the client in `sanity.js`:

```javascript
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your_project_id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21'
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
