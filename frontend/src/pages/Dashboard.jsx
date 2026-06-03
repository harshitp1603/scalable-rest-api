import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [tasks, setTasks] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");

      setTasks(res.data.tasks);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await api.get("/auth/profile");

      setUser(res.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createTask = async (e) => {
    e.preventDefault();

    try {
      await api.post("/tasks", form);

      setForm({
        title: "",
        description: "",
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, status) => {
    try {
      const nextStatus =
        status === "pending"
          ? "completed"
          : "pending";

      await api.put(`/tasks/${id}`, {
        status: nextStatus,
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

      {user && (
        <div className="user-card">
            <h3>User Information</h3>

            <p>
                <strong>Name:</strong> {user.name}
            </p>

            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <p>
                <strong>Role:</strong> {user.role}
            </p>
        </div>
        )}

      <hr />

      <h2>Create Task</h2>

      <form onSubmit={createTask}>
        <input
          name="title"
          value={form.title}
          placeholder="Task title"
          onChange={handleChange}
        />

        <br />
        <br />

        <textarea
          name="description"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Add Task
        </button>
      </form>

      <hr />

      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              Status:
              {" "}
              {task.status}
            </p>

            <button
              onClick={() =>
                updateTask(
                  task.id,
                  task.status
                )
              }
            >
              Toggle Status
            </button>

            {" "}

            <button
              onClick={() =>
                deleteTask(task.id)
              }
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;