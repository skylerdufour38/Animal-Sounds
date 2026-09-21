# Create an App on App Store

A GitHub Pages + GitHub Codespaces-ready web app for creating and previewing an App Store Package archive entry.

## App Information

- App Name: Animal Sounds
- Bundle ID: com.smartbabyapps.animalsounds
- Version: 2.0
- Platform: iOS
- Minimum OS: 3.1
- IPA File: Animal Sounds 2.0.ipa
- File Size: 19.8 MB
- App Bundle Path: Payload/Animal Sounds.app
- Archive Type: App Store Package

## Features

- Create an App form
- App Name field
- Bundle ID field
- Version field
- Platform selector
- Minimum OS field
- IPA file field
- File Size field
- App Bundle Path field
- Archive Type selector
- App Information preview
- Create button
- Responsive design
- GitHub Pages compatible
- GitHub Codespaces compatible

## Run locally

Open `index.html` in a browser, or serve the folder with a static server:

```bash
cd create-app-on-app-store
python3 -m http.server 8000
```

Then visit http://localhost:8000

## GitHub Pages deployment

This app is static and compatible with GitHub Pages. A workflow is included in `.github/workflows/pages.yml`.
