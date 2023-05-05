import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const daysInPrevMonth = daysInMonth(
    firstDayOfMonth.getMonth() - 1,
    firstDayOfMonth.getFullYear()
  );
  const daysInCurrMonth = daysInMonth(
    firstDayOfMonth.getMonth(),
    firstDayOfMonth.getFullYear()
  );

  const days = [];

  const handleDateClick = day => {
    setDate(new Date(date.getFullYear(), date.getMonth(), day));
  };

  for (let i = firstDayOfMonth.getDay(); i > 0; i--) {
    const day = daysInPrevMonth - i + 1;
    days.push(
      <div
        key={`prev-${day}`}
        className="day prev-month"
        onClick={() => handleDateClick(day)}
      >
        {day}
      </div>
    );
  }

  for (let i = 1; i <= daysInCurrMonth; i++) {
    const isCurrMonth = i === date.getDate();
    days.push(
      <div
        key={`curr-${i}`}
        className={`day curr-month ${isCurrMonth ? "selected" : ""}`}
        onClick={() => handleDateClick(i)}
      >
        {i}
      </div>
    );
  }

  const daysInNextMonth = 7 - (days.length % 7);
  for (let i = 1; i <= daysInNextMonth; i++) {
    days.push(
      <div
        key={`next-${i}`}
        className="day next-month"
        onClick={() => handleDateClick(i)}
      >
        {i}
      </div>
    );
  }

  const headerText = `${monthNames[firstDayOfMonth.getMonth()]} ${firstDayOfMonth.getFullYear()}`;

  return (
    <div className="calendar">
      <div className="header">
        <div
          className="prev-month"
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))}
        >
          &lt;
        </div>
        <div className="month">{headerText}</div>
        <div
          className="next-month"
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))}
        >
          &gt;
        </div>
      </div>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days">{days}</div>
    </div>
  );
};

export default Calendar;
