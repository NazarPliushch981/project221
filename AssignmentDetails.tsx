import { Assignment } from "../assignments";

interface Props {
  assignment: Assignment | null;
  loading: boolean;
}

export default function AssignmentDetails({ assignment, loading }: Props) {
  if (loading) {
    return <div style={{ background: "#fff3cd", padding: "10px" }}>Завантаження</div>;
  }

  if (!assignment) {
    return <div style={{ color: "gray" }}>Натисни на картку зліва</div>;
  }

  return (
    <div style={{ border: "2px dashed blue", padding: "15px", background: "#e2e3e5" }}>
      <h3>Деталі завдання</h3>
      <p><b>Курс:</b> {assignment.courseName}</p>
      <p><b>Модуль:</b> {assignment.moduleName}</p>
      <p><b>Опис:</b> {assignment.description}</p>
      <p><b>Видано:</b> {assignment.issueDate}</p>
      <p><b>Дедлайн:</b> {assignment.deadline}</p>
      <p><b>Статус:</b> <span style={{ color: assignment.status === "Здано" ? "green" : "red" }}>{assignment.status}</span></p>
    </div>
  );
}
