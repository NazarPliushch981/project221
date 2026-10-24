import { useState } from "react";
import { assignmentsList, Assignment } from "./assignments";
import AssignmentDetails from "./components/AssignmentDetails";

export default function App() {
  const [selectedTask, setSelectedTask] = useState<Assignment | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleCardClick = (task: Assignment) => {
    setIsLoading(true);
    setSelectedTask(null);

    setTimeout(() => {
      setSelectedTask(task);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Список завдань</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <h3>Картки</h3>
          {assignmentsList.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              style={{
                border: "1px solid black",
                padding: "10px",
                marginBottom: "10px",
                cursor: "pointer",
                background: "#f8f9fa"
              }}
            >
              <h4 style={{ margin: 0 }}>{item.courseName}</h4>
              <p style={{ margin: "5px 0 0 0", fontSize: "14px" }}>Дата видачі: {item.issueDate}</p>
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <AssignmentDetails assignment={selectedTask} loading={isLoading} />
        </div>
      </div>
    </div>
  );
}
