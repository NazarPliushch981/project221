export interface Assignment {
  id: number;
  courseName: string;
  moduleName: string;
  description: string;
  issueDate: string;
  deadline: string;
  status: "Здано" | "Не здано";
}

export const assignmentsList: Assignment[] = [
  {
    id: 1,
    courseName: "React базовий",
    moduleName: "Модуль 1: Компоненти",
    description: "Треба створити компонент та вивести його",
    issueDate: "2026-05-22",
    deadline: "2025-06-30",
    status: "Здано",
  },
  {
    id: 2,
    courseName: "JavaScript Advanced",
    moduleName: "Асинхронність",
    description: "Розібратися з промісами та зробити запит.",
    issueDate: "2026-06-12",
    deadline: "2026-06-31",
    status: "Не здано",
  },
  {
    id: 3,
    courseName: "HTML & CSS",
    moduleName: "Flexbox",
    description: "Зверстати картку.",
    issueDate: "2026-06-08",
    deadline: "2026-06-15",
    status: "Не здано",
  },
];
