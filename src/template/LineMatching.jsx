import React, { useState } from "react";
import "./LineMatching.css"; // סטיילינג לקומפוננטה

const LineMatching = () => {

  const checkAnswers = () => {
    console.log("i love my life");
    console.log(document.getElementById("que1").selected);
    for(let i=1;i<6;i++) {
      console.log(document.getElementById(que1).selected);
        if(document.getElementById(`que${i}`).selected==true) {
            document.getElementById(`format${i}`).style.color="green";
        } else {
            document.getElementById(`format${i}`).style.color="red";
        }
    }
   document.getElementById("check").style.display = "none";
   document.getElementById("countinue").style.display = "block";
};

  return (
    <div className="line-matching-container">
       <div className="select" id="ques1">
       <label>
      דרישת אמצעית נבצע דרך ה:
      <select name="selectedFruit" id="format1">
        <option selected disabled>לחץ לבחירה</option>
        <option value="false">מחלקת תיאום</option>
        <option value="true" >מרשל</option>
        <option value="false">קצין אג"ם</option>
        <option value="false">חמל ביה"ס</option>
        <option value="false">מפלג הדרכה/מפקד ביה"ס</option>
      </select>
    </label>
    </div><br />
    <div className="select" id="ques2">
    <label>
      תיאום שטחים נבצע דרך ה:
      <select name="selectedFruit" id="format2">
        <option selected disabled>לחץ לבחירה</option>
        <option value="true">מחלקת תיאום</option>
        <option value="false" >מרשל</option>
        <option value="false">קצין אג"ם</option>
        <option value="false">חמל ביה"ס</option>
        <option value="false">מפלג הדרכה/מפקד ביה"ס</option>
      </select>
    </label>
    </div><br />
    <div className="select" id="ques3">
    <label>
    גרף ביה"ס נבצע בעזרת:
      <select name="selectedFruit" id="format3">
        <option selected disabled>לחץ לבחירה</option>
        <option value="false">מחלקת תיאום</option>
        <option value="false" >מרשל</option>
        <option value="true">קצין אג"ם</option>
        <option value="false">חמל ביה"ס</option>
        <option value="false">מפלג הדרכה/מפקד ביה"ס</option>
      </select>
    </label>
    </div><br />
    <div className="select" id="ques4">
    <label>
זימון מילואים נבצע בעזרת:
      <select name="selectedFruit" id="format4">
        <option selected disabled>לחץ לבחירה</option>
        <option value="false">מחלקת תיאום</option>
        <option value="false" >מרשל</option>
        <option value="false">קצין אג"ם</option>
        <option value="true">חמל ביה"ס</option>
        <option value="false">מפלג הדרכה/מפקד ביה"ס</option>
      </select>
    </label>
    </div><br />
    <div className="select" id="ques5">
    <label>
       הצגת אישור תוכניות נבצע בעזרת:
      <select name="selectedFruit" id="format5">
        <option selected disabled>לחץ לבחירה</option>
        <option value="false">מחלקת תיאום</option>
        <option value="false" >מרשל</option>
        <option value="false">קצין אג"ם</option>
        <option value="false">חמל ביה"ס</option>
        <option value="true">מפלג הדרכה/מפקד ביה"ס</option>
      </select>
    </label>
    </div><br />
    <button id = "check" onClick={() => checkAnswers()}>בדיקה</button>
    {/* <button id = "countinue" onClick={() => nextQuestion}>המשך</button> */}
    </div>
  );
};

export default LineMatching;
