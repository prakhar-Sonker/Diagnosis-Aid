"use client";
import React, { useState } from "react";

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showMonths, setShowMonths] = useState(false); // NEW

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const daysArray = [
    ...Array(firstDay).fill(""),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  const times = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM",
    "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
    "08:00 PM", "09:00 PM"
  ];

  const allMonths = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="text-white w-full max-w-[660px] bg-[#202023] border border-[#434344] rounded-[20px] p-8">

      {/* ------------------ TEXT HEADERS ------------------ */}
      <p className="text-[16px] uppercase font-medium tracking-[0] leading-none opacity-60">
        Book an appointment
      </p>

      <h2 className="text-[32px] font-bold capitalize mt-3 leading-none">
        Select Date & Time
      </h2>

      {/* ------------------ MONTH HEADER WITH DROPDOWN ------------------ */}
      <div className="relative mt-6 mb-6">

        {/* Month + Year + SVG */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setShowMonths((prev) => !prev)}
        >
          <h2 className="text-[20px] font-bold uppercase leading-none tracking-[0]">
            {currentMonth.toLocaleString("default", { month: "short" })} {year}
          </h2>

          {/* SVG ICON */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* ------------ MONTH DROPDOWN ------------ */}
        {showMonths && (
          <div className="absolute left-0 mt-3 w-40 bg-[#2A2A2E] border border-[#4A4A4A] rounded-lg shadow-lg z-10">

            {allMonths
              .filter((_, i) => i >= today.getMonth()) // ⭐ only current & future months
              .map((m, i) => {
                const actualIndex = today.getMonth() + i;

                return (
                  <div
                    key={actualIndex}
                    className="px-4 py-2 hover:bg-[#3A3A3A] cursor-pointer"
                    onClick={() => {
                      setCurrentMonth(new Date(year, actualIndex, 1));
                      setShowMonths(false);
                      setSelectedDate(null);
                    }}
                  >
                    <p className="text-white">{m} {year}</p>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {/* ------------------ DAYS LABEL ------------------ */}
      <div className="grid grid-cols-7 text-center text-sm opacity-60 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <p key={d}>{d}</p>
        ))}
      </div>

      {/* ------------------ CALENDAR GRID ------------------ */}
      <div className="grid grid-cols-7 gap-3 text-center">
        {daysArray.map((day, i) => {
          const isPast =
            day &&
            new Date(year, month, day) <
              new Date(today.getFullYear(), today.getMonth(), today.getDate());

          return (
            <div
              key={i}
              onClick={() => !isPast && day && setSelectedDate(day)}
              className={`
                h-10 flex items-center justify-center rounded-md cursor-pointer
                ${day && "hover:bg-[#3A3A3A]"}
                ${
                  selectedDate === day
                    ? "bg-white text-black font-bold"
                    : isPast
                    ? "opacity-30"
                    : "text-white"
                }
              `}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* ------------------ SELECT TIME ------------------ */}
      <h3 className="text-[14px] uppercase opacity-70 mt-8 font-medium">
        Select Time
      </h3>

      <div className="grid grid-cols-5 gap-3 mt-3">
        {times.map((t, index) => (
          <button
            key={index}
            onClick={() => setSelectedTime(t)}
            className={`
              py-2 rounded-md border border-[#343434] text-sm leading-none
              ${
                selectedTime === t
                  ? "bg-white text-black font-bold"
                  : "bg-[#2A2A2E] text-white opacity-90"
              }
            `}
          >
            {t}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Calendar;
