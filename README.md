# 🎬 Manim Studio

A desktop IDE for [Manim](https://www.manim.community/) with:
- Monaco code editor with Python syntax highlighting
- Live animation preview & single frame preview
- Scene selector for multi-scene files
- Error highlighting mapped to editor lines
- AI assistant (Groq) with code context & Apply button
- File open/save with Ctrl+S
- Persistent chat history & settings

## Requirements
- Node.js 18+
- Python 3 + Manim (`pip install manim`)
- Groq API key (free at console.groq.com)

## Run from source
```bash
git clone https://github.com/Koragan/manim-studio
cd manim-studio
npm install
npm start
```

## Build AppImage
```bash
npm run build
```
