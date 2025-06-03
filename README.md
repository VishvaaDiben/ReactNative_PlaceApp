# 🌍 React Native Google Place Finder

A modern React Native app that lets users search for locations via Google Places Autocomplete, view them on a live map with animated markers, and manage their search history with a clean, responsive UI.

---

## 🚀 Features

- 🔍 **Google Places Autocomplete** with full place details
- 🗺️ **Google Maps integration** with pin, bounce animation, and 1km radius circle
- 🧾 **Search History** with Redux store: revisit or remove previous locations
- 🧠 **Mock Data Fallback** when API fails (ideal for testing or offline usage)
- 💬 **Toast messages** for better feedback
- 🎨 **UI built with Ant Design** and FontAwesome icons for clarity
- 📱 **Smooth user experience**: animated interactions, collapsible history, debounced searches

---

## 🧰 Tech Stack

| Tech                     | Purpose                             |
|--------------------------|-------------------------------------|
| React Native             | Core mobile app framework           |
| react-native-maps        | Google Maps rendering               |
| react-native-google-places-autocomplete | Place search input  |
| Redux                    | Global state management             |
| Lodash                   | Debounce utility                    |
| Ant Design Mobile        | UI components                       |
| FontAwesome              | Icons for map and data fields       |
| Expo                     | App bundling and development        |

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VishvaaDiben/ReactNative_PlaceApp.git
   cd ReactNative_PlaceApp

2. **Install dependencies:**
   ```bash
   npm install

3. **Add your Google API Key:** <br />
🔑 Google Maps API Key Setup
- To use this project, you need to obtain a Google Maps API key.
- Go to the Google Cloud Console:
👉 Google Maps APIs ( https://console.cloud.google.com/google/maps-apis)
- Click "Create Project" (if needed).
- Navigate to APIs & Services → Credentials.
- Click "Create API Key" and copy the key.
   ```bash
   export const config = {
   API_KEY: "YOUR_GOOGLE_API_KEY"
   };

4. **Run the app:**
    ```bash
    npx expo start
---

## 🧠 Features & Design Rationale

**🔍 Google Places Search**
- Provides a familiar search experience using Google’s autocomplete.
- Full details enabled to extract coordinates for map placement.

**🗺️ Map View with Animation**
- react-native-maps used to visualize the selected location.
- Marker includes a bounce animation using Animated API for better feedback.
- Circle radius (1km) gives users a spatial context.

**🧾 Redux-Backed Search History**
- Every selected place is stored in Redux.
- Allows users to revisit past searches and delete them selectively.
- UI toggles history visibility to keep the interface clean.

**⚠️ Smart API Fallback**
- When the Google API fails (e.g., rate limit, offline), a mock result is inserted.
- Prevents crashes and ensures continued app flow during development or demos.

**🧼 Clean UI/UX**
- Built with Ant Design for polished cards, text, and layout.
- FontAwesome icons used to visually represent location fields.
- Input box floats on top of map for accessibility without interrupting view.

---

## 📝 Roadmap
- Add unit/integration tests
- Improve marker bounce animation
- Add persistent storage for search history
- Enable dark mode support
- Add localization/multilingual support

---

## 📸 Screenshots <br />
![1000130594](https://github.com/user-attachments/assets/d43b72fe-0c35-4f9f-92d2-136f8933977e)

