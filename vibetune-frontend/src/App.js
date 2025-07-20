import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";

const App = () => {
  const [emotion, setEmotion] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const webcamRef = useRef(null);

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    setLoading(true);
    const blob = await (await fetch(imageSrc)).blob();
    const file = new File([blob], "capture.jpg", { type: "image/jpeg" });

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setEmotion(data.emotion);
      setSongs(data.songs);
    } catch (error) {
      alert("Error detecting emotion");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold text-center mb-6 text-white drop-shadow-md">
          🎵 VibeTune
        </h1>
        <p className="text-center text-gray-300 mb-4">
          Detect your mood from camera and get song recommendations 🎧
        </p>

        <div className="flex flex-col items-center">
          <div className="rounded-lg overflow-hidden border-4 border-white/30 shadow-lg w-[280px] h-[210px]">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={280}
              height={210}
              className="rounded-lg object-cover"
            />
          </div>

          <button
            onClick={capture}
            className="mt-5 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
          >
            {loading ? "Detecting..." : "Detect Mood"}
          </button>
        </div>

        {emotion && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-pink-400 drop-shadow">
              Detected Emotion: {emotion}
            </h2>
            <h3 className="text-lg mt-4 text-white/90">Recommended Songs:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {songs.map((song, idx) => (
                <a
                  key={idx}
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-4 rounded-lg shadow hover:bg-white/20 transition border border-white/10"
                >
                  <h4 className="text-lg font-semibold text-white">
                    🎶 {song.title}
                  </h4>
                  <p className="text-sm text-gray-300">{song.artist}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
