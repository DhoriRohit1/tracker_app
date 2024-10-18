// src/context/HabitsContext.jsx
import { createContext, useState, useEffect } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState(() => {
    // Load habits from localStorage if available, otherwise return an empty array
    const savedHabits = localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  const removeHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  useEffect(() => {
    // Save habits to localStorage whenever they change
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // Function to mark a habit as complete
  const markHabitComplete = (id) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: true } : habit
    );
    setHabits(updatedHabits);
  };

  return (
    <HabitsContext.Provider value={{ habits, setHabits, removeHabit, markHabitComplete }}>
      {children}
    </HabitsContext.Provider>
  );
};
  