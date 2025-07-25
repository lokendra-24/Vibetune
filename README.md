# 🎵 Vibetune – Emotion-Based Hindi Song Recommender

Vibetune is an intelligent, emotion-aware music recommendation system that detects your facial expressions in real time and suggests the most suitable Hindi songs for your current mood. Built using DeepFace, FastAPI, and React, it blends computer vision with personalized entertainment.

![Vibetune Screenshot 1](first_page.png)
![Vibetune Screenshot 2](second_page.png)


---

## 💡 Features

- 🎭 **Real-Time Emotion Detection** using webcam and DeepFace
- 🎧 **Hindi Song Recommendations** based on mood (happy, sad, angry, etc.)
- 📷 **Automatic Webcam Capture**
- ⚡ FastAPI backend for processing and prediction
- 🎨 Clean and modern React + Tailwind frontend

---

## 🛠️ Tech Stack

| Layer         | Tech Used                         |
|---------------|-----------------------------------|
| **Frontend**  | React, Tailwind CSS               |
| **Backend**   | FastAPI, DeepFace (FER)           |
| **Model**     | Facial Expression Recognition     |
| **Other**     | CSV-based recommendation logic    |

---


---

## 🖥️ How It Works

1. Opens your webcam and takes a snapshot.
2. Detects emotion using DeepFace.
3. Matches emotion to Hindi songs from `songs.csv`.
4. Displays recommendations with a clean, responsive UI.

---

## 📸 Sample Output

| Detected Emotion | Song Suggestions                    |
|------------------|-------------------------------------|
| Happy            | "Ladki Beautiful", "Kar Gayi Chull" |
| Sad              | "Channa Mereya", "Tujhe Bhula Diya" |
| Angry            | "Zinda", "Bhaag DK Bose"            |

*(Songs are only for demonstration – based on `songs.csv`)*

---

## 🔧 Installation & Run (Local)

### Backend (FastAPI)
```bash
cd backend
python -m venv .venv
source .venv/bin/activate    # or .\.venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload

### Frontend (React+Tailwind css)

cd vibetune-frontend
npm install
npm start



