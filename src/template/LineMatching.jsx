// import React, { useEffect, useState } from "react";
// import "./LineMatching.css"; // סטיילינג לקומפוננטה
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Swal from "sweetalert2";
// import { Typography } from "@mui/material";

// const LineMatching = () => {
//   const [question1, setQuestion1] = React.useState("");
//   const [question2, setQuestion2] = React.useState("");
//   const [question3, setQuestion3] = React.useState("");
//   const [question4, setQuestion4] = React.useState("");
//   const [question5, setQuestion5] = React.useState("");
//   const [showAnswer, setShowAnswer] = React.useState({
//     question1: false,
//     question2: false,
//     question3: false,
//     question4: false,
//     question5: false,
//   });
//   const [isClicked, setIsClicked] = React.useState(false);

//   useEffect(() => {
//     console.log(showAnswer);
//   }, [showAnswer]);

//   const checkAnswers = () => {
//     setIsClicked(true);
//     console.log("hilo");
//     if (question1 === data.marshal) {
//       setShowAnswer((prev) => ({ ...prev, question1: true }));
//     }
//     if (question2 === data.tium) {
//       setShowAnswer((prev) => ({ ...prev, question2: true }));
//     }
//     if (question3 === data.agam) {
//       setShowAnswer((prev) => ({ ...prev, question3: true }));
//     }
//     if (question4 === data.hamal) {
//       setShowAnswer((prev) => ({ ...prev, question4: true }));
//     }
//     if (question5 === data.adracha) {
//       setShowAnswer((prev) => ({ ...prev, question5: true }));
//     }
//    // console.log(showAnswer.question1,showAnswer.question2,showAnswer.question3,showAnswer.question4,showAnswer.question5)
//     // console.log(question1,question2,question3,question4,question5);
//     if (showAnswer.question1 && showAnswer.question2 && showAnswer.question3 && showAnswer.question4 && showAnswer.question5) {
//       console.log("hilo2");
//       Swal.fire({
//         title: "כל הכבוד",
//         text: "סיימת את הלומדה! אתם לגמרי יכולים להיות גאים בעצמכם",
//         icon: "success",
//         heightAuto: false,
//       });
//     }
//   };
//   const data = {
//     marshal: "מרשל",
//     tium: "מחלקת תיאום",
//     agam: 'קצין אג"ם',
//     hamal: 'חמל ביה"ס',
//     adracha: 'מפל"ג הדרכה/מפקד ביה"ס',
//   };
//   return (
//     <Box
//       gap={2}
//       display={"flex"}
//       justifyContent={"center"}
//       alignItems={"center"}
//       flexDirection={"column"}
//     >
//       <Typography color="#152a49" fontSize={"5vmin"} fontFamily={"abraham"}>
//         אנא בחרו עבור כל משימה את מי שתצטרכו על מנת לבצע אותה
//       </Typography>
//       <Box key="que1" sx={{ minWidth: 350 }}>
//         <FormControl fullWidth>
//           <InputLabel>דרישת אמצעים</InputLabel>
//           <Select
//             variant="filled"
//             value={question1}
//             label="Age"
//             onChange={(event) => setQuestion1(event.target.value)}
//           >
//             <MenuItem className="rt" value={data.marshal}>
//               {data.marshal}
//             </MenuItem>
//             <MenuItem className="rt" value={data.tium}>
//               {data.tium}
//             </MenuItem>
//             <MenuItem className="rt" value={data.agam}>
//               {data.agam}
//             </MenuItem>
//             <MenuItem className="rt" value={data.hamal}>
//               {data.hamal}
//             </MenuItem>
//             <MenuItem className="rt" value={data.adracha}>
//               {data.adracha}
//             </MenuItem>
//           </Select>
//         </FormControl>
//         {isClicked &&
//           (showAnswer.question1 ? (
//             <div className="feedback-answer">תשובה נכונה</div>
//           ) : (
//             <div className="feedback-answer-error">
//               תשובה שגויה אנא נסו שנית
//             </div>
//           ))}
//       </Box>

//       <Box key="que2" sx={{ minWidth: 350 }}>
//         <FormControl fullWidth>
//           <InputLabel>תיאום שטחים</InputLabel>
//           <Select
//             variant="filled"
//             value={question2}
//             label="Age"
//             onChange={(event) => setQuestion2(event.target.value)}
//           >
//             <MenuItem className="rt" value={data.marshal}>
//               {data.marshal}
//             </MenuItem>
//             <MenuItem className="rt" value={data.tium}>
//               {data.tium}
//             </MenuItem>
//             <MenuItem className="rt" value={data.agam}>
//               {data.agam}
//             </MenuItem>
//             <MenuItem className="rt" value={data.hamal}>
//               {data.hamal}
//             </MenuItem>
//             <MenuItem className="rt" value={data.adracha}>
//               {data.adracha}
//             </MenuItem>
//           </Select>
//         </FormControl>
//         {isClicked &&
//           (showAnswer.question2 ? (
//             <div className="feedback-answer">תשובה נכונה</div>
//           ) : (
//             <div className="feedback-answer-error">
//               תשובה שגויה אנא נסו שנית
//             </div>
//           ))}
//       </Box>

//       <Box key="que3" sx={{ minWidth: 350 }}>
//         <FormControl fullWidth>
//           <InputLabel>גרף ביה"ס</InputLabel>
//           <Select
//             variant="filled"
//             value={question3}
//             label="Age"
//             onChange={(event) => setQuestion3(event.target.value)}
//           >
//             <MenuItem className="rt" value={data.marshal}>
//               {data.marshal}
//             </MenuItem>
//             <MenuItem className="rt" value={data.tium}>
//               {data.tium}
//             </MenuItem>
//             <MenuItem className="rt" value={data.agam}>
//               {data.agam}
//             </MenuItem>
//             <MenuItem className="rt" value={data.hamal}>
//               {data.hamal}
//             </MenuItem>
//             <MenuItem className="rt" value={data.adracha}>
//               {data.adracha}
//             </MenuItem>
//           </Select>
//         </FormControl>
//         {isClicked &&
//           (showAnswer.question3 ? (
//             <div className="feedback-answer">תשובה נכונה</div>
//           ) : (
//             <div className="feedback-answer-error">
//               תשובה שגויה אנא נסו שנית
//             </div>
//           ))}
//       </Box>

//       <Box key="que4" sx={{ minWidth: 350 }}>
//         <FormControl fullWidth>
//           <InputLabel>זימון מילואים</InputLabel>
//           <Select
//             variant="filled"
//             value={question4}
//             label="Age"
//             onChange={(event) => setQuestion4(event.target.value)}
//           >
//             <MenuItem className="rt" value={data.marshal}>
//               {data.marshal}
//             </MenuItem>
//             <MenuItem className="rt" value={data.tium}>
//               {data.tium}
//             </MenuItem>
//             <MenuItem className="rt" value={data.agam}>
//               {data.agam}
//             </MenuItem>
//             <MenuItem className="rt" value={data.hamal}>
//               {data.hamal}
//             </MenuItem>
//             <MenuItem className="rt" value={data.adracha}>
//               {data.adracha}
//             </MenuItem>
//           </Select>
//         </FormControl>
//         {isClicked &&
//           (showAnswer.question4 ? (
//             <div className="feedback-answer">תשובה נכונה</div>
//           ) : (
//             <div className="feedback-answer-error">
//               תשובה שגויה אנא נסו שנית
//             </div>
//           ))}
//       </Box>

//       <Box key="que5" sx={{ minWidth: 350 }}>
//         <FormControl fullWidth>
//           <InputLabel>הצגת אישור תוכניות</InputLabel>
//           <Select
//             variant="filled"
//             value={question5}
//             label="Age"
//             onChange={(event) => setQuestion5(event.target.value)}
//           >
//             <MenuItem className="rt" value={data.marshal}>
//               {data.marshal}
//             </MenuItem>
//             <MenuItem className="rt" value={data.tium}>
//               {data.tium}
//             </MenuItem>
//             <MenuItem className="rt" value={data.agam}>
//               {data.agam}
//             </MenuItem>
//             <MenuItem className="rt" value={data.hamal}>
//               {data.hamal}
//             </MenuItem>
//             <MenuItem className="rt" value={data.adracha}>
//               {data.adracha}
//             </MenuItem>
//           </Select>
//         </FormControl>
//         {isClicked &&
//           (showAnswer.question5 ? (
//             <div className="feedback-answer">תשובה נכונה</div>
//           ) : (
//             <div className="feedback-answer-error">
//               תשובה שגויה אנא נסו שנית
//             </div>
//           ))}
//       </Box>

//       <br />
//       <button id="checkBtn" onClick={checkAnswers}>
//         בדיקה
//       </button>
//     </Box>
//   );
// };

// export default LineMatching;
import React, { useEffect, useState } from "react";
import "./LineMatching.css"; // סטיילינג לקומפוננטה
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Swal from "sweetalert2";
import { Typography } from "@mui/material";

const LineMatching = () => {
  const [question1, setQuestion1] = React.useState("");
  const [question2, setQuestion2] = React.useState("");
  const [question3, setQuestion3] = React.useState("");
  const [question4, setQuestion4] = React.useState("");
  const [question5, setQuestion5] = React.useState("");
  const [showAnswer, setShowAnswer] = React.useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
  });
  const [isClicked, setIsClicked] = React.useState(false);

  useEffect(() => {
    // בודק אם כל התשובות נכונות
    if (
      showAnswer.question1 &&
      showAnswer.question2 &&
      showAnswer.question3 &&
      showAnswer.question4 &&
      showAnswer.question5
    ) {
      Swal.fire({
        title: "כל הכבוד",
        text: "סיימת את הלומדה! אתם לגמרי יכולים להיות גאים בעצמכם",
        icon: "success",
        heightAuto: false,
      });
    }
  }, [showAnswer]); // מאזין לשינויים ב-showAnswer

  const checkAnswers = () => {
    setIsClicked(true);
    if (question1 === data.marshal) {
      setShowAnswer((prev) => ({ ...prev, question1: true }));
    }
    if (question2 === data.tium) {
      setShowAnswer((prev) => ({ ...prev, question2: true }));
    }
    if (question3 === data.agam) {
      setShowAnswer((prev) => ({ ...prev, question3: true }));
    }
    if (question4 === data.hamal) {
      setShowAnswer((prev) => ({ ...prev, question4: true }));
    }
    if (question5 === data.adracha) {
      setShowAnswer((prev) => ({ ...prev, question5: true }));
    }
  };

  const data = {
    marshal: "מרשל",
    tium: "מחלקת תיאום",
    agam: "קצין אג'ם",
    hamal: "חמל ביה'ס",
    adracha: "מפל'ג הדרכה/מפקד ביהס"
  };
  const subjects = ["דרישת אמצעים", "תיאום שטחים", "גרף בית הספר", "זימון מילואים", "הצגת אישור תוכניות"];
  return (
    <Box gap={2} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
      <Typography color="#152a49" fontSize={"5vmin"} fontFamily={"abraham"}>
        אנא בחרו עבור כל משימה את מי שתצטרכו על מנת לבצע אותה
      </Typography>

      {/* כל אחת מהשאלות */}
      {[1,2,3,4,5].map((questionNum) => (
        <Box key={`que${questionNum}`} sx={{ minWidth: 350 }}>
          <FormControl fullWidth>
            <InputLabel>{`${subjects[questionNum-1]}`}</InputLabel>
            <Select
              variant="filled"
              value={eval(`question${questionNum}`)}
              label="בחר"
              onChange={(event) => eval(`setQuestion${questionNum}`)(event.target.value)}
            >
              {Object.values(data).map((option) => (
                <MenuItem className="rt" key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {isClicked && showAnswer[`question${questionNum}`] ? (
            <div className="feedback-answer">תשובה נכונה</div>
          ) : (
            isClicked && (
              <div className="feedback-answer-error">תשובה שגויה אנא נסו שנית</div>
            )
          )}
        </Box>
      ))}

      <br />
      <button id="checkBtn" onClick={checkAnswers}>
        בדיקה
      </button>
    </Box>
  );
};

export default LineMatching;
