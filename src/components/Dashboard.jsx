
import { useContext } from "react";
import { HabitsContext } from "../context/HabitsContext";
import NotificationPanel from "./NotificationPanel";

const Dashboard = () => {
  const { habits, removeHabit } = useContext(HabitsContext); 

  const handleDelete = (id) => {
    removeHabit(id); 
  };

  return (
    <div className="dashboard p-4">
      <h2 className="text-2xl font-bold mb-4 text-black">Your Dashboard</h2>
      <NotificationPanel />
      
      <h2 className="text-xl font-semibold mb-4 text-black mt-3">Daily Habits</h2>
      
      <div className="row">
        {habits.map((habit) => (
          <div key={habit.id} className="col-lg-4 px-1 mb-4  p-1" style={{border: '2px outset #000'}}>
            <div className="card habit bg-white shadow-md rounded-lg p-4 border border-gray-200">
              <h4 className="text-lg font-bold mb-2">{habit.name}</h4>
              <p className="text-gray-700">Goal: {habit.goal}</p>
              <p className="text-gray-700">Streak: {habit.streak || 0}</p>
              <p className={`text-sm font-medium ${habit.completed ? "text-green-600" : "text-red-600"}`}>
                {habit.completed ? "Completed" : "Not Completed"}
              </p>
             
              <button
                className="mt-4 bg-red-500 text-black py-1 px-3 rounded hover:bg-red-600 bg-dark"
                onClick={() => handleDelete(habit.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
