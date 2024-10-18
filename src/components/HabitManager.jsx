
import { useContext, useState, useEffect } from "react";
import { HabitsContext } from "../context/HabitsContext";

const HabitManager = () => {
  const { habits, setHabits } = useContext(HabitsContext);
  const [habitName, setHabitName] = useState("");
  const [goal, setGoal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [editingHabitId, setEditingHabitId] = useState(null);
  const [notification, setNotification] = useState("");


  useEffect(() => {
    if (editingHabitId) {
      const habitToEdit = habits.find(habit => habit.id === editingHabitId);
      if (habitToEdit) {
        setHabitName(habitToEdit.name);
        setGoal(habitToEdit.goal);
        setStartDate(habitToEdit.startDate);
        setFrequency(habitToEdit.frequency);
      }
    }
  }, [editingHabitId, habits]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingHabitId) {
      const updatedHabits = habits.map(habit =>
        habit.id === editingHabitId
          ? { ...habit, name: habitName, goal, startDate, frequency }
          : habit
      );
      setHabits(updatedHabits);
      setNotification("Habit updated successfully!");
    } else {
      const newHabit = {
        id: Date.now(),
        name: habitName,
        goal,
        startDate,
        frequency,
        completed: false,
      };
      setHabits([...habits, newHabit]);
      setNotification("Habit added successfully!");
    }

    resetForm();
  };


  const resetForm = () => {
    setHabitName("");
    setGoal("");
    setStartDate("");
    setFrequency("daily");
    setEditingHabitId(null);
  };


  const handleDelete = (id) => {
    const updatedHabits = habits.filter(habit => habit.id !== id);
    setHabits(updatedHabits);
    setNotification("Habit deleted successfully!");
  };

  return (
    <div className="habit-manager p-4 border rounded shadow-sm mt-5">
      <h2 className="text-2xl font-bold mb-4 text-black text-center">Manage Your Habits</h2>

    
      {notification && <div className="alert alert-success">{notification}</div>}

      <div className="row">
        <div className="col-lg-6 border p-3 mx-auto mb-4">
        <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            className="form-control"
            placeholder="Habit Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="form-control"
            placeholder="Goal"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="form-select"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <button type="submit" className="btn btn-dark">
          {editingHabitId ? "Update Habit" : "Add Habit"}
        </button>
        <button type="button" onClick={resetForm} className="btn btn-dark ms-2">
          Cancel
        </button>
      </form>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-black">Your Habits</h3>
      <div className="row">
        {habits.map((habit) => (
          <div className="col-md-4 mb-3" key={habit.id}>
            <div className={`card ${editingHabitId === habit.id ? 'bg-secondary text-black' : 'bg-white'}`}>
              <div className="card-body">
                <h5 className="card-title">{habit.name}</h5>
                <p className="card-text">
                  <strong>Goal:</strong> {habit.goal}<br />
                  <strong>Start:</strong> {habit.startDate}<br />
                  <strong>Frequency:</strong> {habit.frequency}
                </p>
                <div className="float-end">
                  <button className="btn btn-dark btn-sm" onClick={() => setEditingHabitId(habit.id)}>
                    Edit
                  </button>
                  <button className="btn btn-dark btn-sm ms-2" onClick={() => handleDelete(habit.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitManager;
