import React, { useRef, useState } from "react";
import "./Excercise.css";

const Exercise = () => {
  // השאלות עם התשובות הנכונות
  const questions = [
    {
      question: "עד 3-4 שבועות שבועות לפני ביצוע האימון ,מה לא צריך לעשות",
      options: ["דקירת האימון בגרף","קריאת תחקירין וסיכומי סדרה", "תיאום שטחים", "זימון מילואים"],
      correctAnswer: "זימון מילואים",
    },
    {
      question: " עד שבועיים לפני ביצוע האימון צריך לבצע - דרישת מבצעים, כתיבת אישור תוכניות,ביצוע הכנת סגל ותיקוף החומר המקצועי.בחרו נכון או לא נכון",
      options: [ "לא נכון", "נכון"],
      correctAnswer: "נכון",
    },
    {
      question: "מה צריך לבצע עד שבוע לפני ביצוע האימון",
      options: [, "הנצגת אישור תוכניות", "זימון מילואים","כל התשובות נכונות"],
      correctAnswer: "כל התשובות נכונות",
    }
  ];

  // State לניהול התקדמות השאלות, התשובות וההודעות
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null); // תשובת המשתמש
  const [feedback, setFeedback] = useState(""); // פידבק
  const [answered, setAnswered] = useState(false); // האם התשובה נבחרה

  // פונקציה שמטפלת בתשובה שנבחרה
  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    setAnswered(true);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setFeedback("כל הכבוד! תשובה נכונה");
    } else {
      setFeedback(`תשובה לא נכונה. התשובה הנכונה היא: ${questions[currentQuestionIndex].correctAnswer}`);
    }
  };

  // פונקציה למעבר לשאלה הבאה
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer(null);
      setAnswered(false);
      setFeedback("");
    }
  };

  // הצגת הודעת סיום
  const handleFinish = () => {
    alert("כל הכבוד! סיימתם את התרגול");
  };

  // השאלה הנוכחית
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="exercise-container">
      {/* הצגת השאלה הנוכחית */}
      <div className="question-container">
        <h2 className="header">{currentQuestion.question}</h2>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => {
            const isSelected = userAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;
            const isWrong = isSelected && !isCorrect;

            return (
              <button
                key={index}
                className={`option-button ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
                onClick={() => handleAnswer(option)}
                disabled={answered}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* הצגת הודעת פידבק */}
        {feedback && <p className={`feedback ${feedback.includes("לא") ? "wrong-feedback" : "correct-feedback"}`}>{feedback}</p>}

        {/* כפתור למעבר לשאלה הבאה */}
        {answered && (
          <div>
            {currentQuestionIndex < questions.length - 1 ? (
              <button className="next-button" onClick={goToNextQuestion}>
                לשאלה הבאה
              </button>
            ) : (
              <button className="next-button" onClick={handleFinish}>
              !סיימתם את התרגול
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;



