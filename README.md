# Manim Studio (k's-manim-ide)

An interactive desktop IDE designed to write, edit, and instantly preview Python mathematics animations using the **Manim** library, complete with an integrated AI chat assistant.

## Features
- **Code Editor**: A built-in editor (powered by Monaco) to write your Manim Python scripts.
- **Instant Preview**: A dedicated preview panel to watch your generated mathematical animations without leaving the app.
- **AI Coding Assistant**: An integrated chat window powered by the **Groq API**. It understands the context of your script, allowing you to ask questions, fix bugs, or generate code animations seamlessly.

---

## Project Origins & Disclaimer 🚀
- **Built with AI**: This project was built utilizing AI assistance to help stitch the pieces together, design components, and debug layouts.
- **Learning Journey**: I am not an advanced programmer! This project was born out of a desire to learn software development, explore desktop applications, and understand how different tools interact. 
- Because I am learning, the codebase might have structural quirks, but it represents an open-source milestone in my programming journey. Contributions and friendly feedback are highly welcome!

---

## Tech Stack (Under the Hood) 🛠️
This project stands on the shoulders of giants. It utilizes open-source technologies to bridge web code with Python math processing:
* **Electron**: Allows the app to run as a native desktop application using web frontend technologies.
* **Node.js & npm**: Handles JavaScript package management (like managing the Monaco Editor text environment).
* **Manim**: The underlying Python engine responsible for compiling your math code into beautiful animations.
* **Groq API**: Powers the lightning-fast context-aware AI chatbot interface.

---

## Prerequisites
Before running or building this project, you will need to have the following installed on your machine:
1. **Node.js & npm**: [Download Node.js](https://nodejs.org/)
2. **Python 3**: [Download Python](https://www.python.org/)
3. **Manim & System Dependencies**: Follow the official [Manim Installation Guide](https://docs.manim.community/en/stable/installation.html) for your specific operating system (requires Python packages plus system tools like `ffmpeg` and `LaTeX`).

---

## Getting Started

### Installation
Clone this repository and install its dependencies:
```bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/Manim-Studio.git](https://github.com/YOUR_GITHUB_USERNAME/Manim-Studio.git)
cd Manim-Studio
npm install
