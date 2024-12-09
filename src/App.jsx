import "./App.css";
import React, { useState } from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import ParallaxScroll from "./template/ParallaxScroll";
import Excercise from "./template/Excercise";

export default function App() {
  const [showBook, setShowBook] = useState(false);

  return (
    <>
      {/* מציג את ParallaxScroll אם showBook הוא false */}
      {!showBook ? (
        <ParallaxScroll setShowBook={setShowBook} />
      ) : (
        // מציג את Exercise אם showBook הוא true
        <Excercise />
      )}
    </>
  );
}