
import { useContext } from "react";
import { HabitsContext } from "../context/HabitsContext";

const HabitTracker = () => {
  const { habits, markHabitComplete } = useContext(HabitsContext);

  return (
    <div className="habit-tracker p-4">
      <h2 className="text-2xl font-bold mb-4 text-black">Track Your Habits</h2>
      <div className="row">
        {habits.map((habit) => (
          <div className="col-md-4 mb-3" key={habit.id}>
            <div className={`card shadow ${habit.completed ? 'bg-success text-white' : 'bg-light text-dark'}`}>
              <div className="card-body">
                <h4 className="card-title">{habit.name}</h4>
                <p className="card-text">
                  <strong>Status:</strong> {habit.completed ? "Completed" : "Incomplete"}
                </p>
                {!habit.completed && (
                  <button 
                    onClick={() => markHabitComplete(habit.id)} 
                    className="btn btn-primary"
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitTracker;
