import { randomUUID } from "node:crypto";
import { getNowDate } from "./utils/get-now-date.js";
import { DataBase } from "./database.js";
import { DATABASE_TABLES } from "./constants.js";

const database = new DataBase();

export async function listTaskController({ search }) {
  return database.select({
    table: DATABASE_TABLES.TASKS,
    search: search ? { title: search, description: search } : null,
  });
}

export async function createTaskController({ title, description }) {
  const createTask = {
    id: randomUUID(),
    title,
    description,
    completed_at: null,
    created_at: getNowDate(),
    updated_at: getNowDate(),
  };

  return database.insert({ table: DATABASE_TABLES.TASKS, data: createTask });
}

export async function updateTaskController({ id, title, description }) {
  const task = database.getTaskById({ table: DATABASE_TABLES.TASKS, id });

  if (!task) throw new Error("Task not found");

  const updateTask = {
    title: title || task.title,
    description: description || task.description,
    updated_at: getNowDate(),
  };

  return database.update({
    table: DATABASE_TABLES.TASKS,
    id,
    data: updateTask,
  });
}

export async function completedTaskController({ id }) {
  const task = database.getTaskById({ table: DATABASE_TABLES.TASKS, id });

  if (!task) throw new Error("Task not found");

  return database.update({
    table: DATABASE_TABLES.TASKS,
    id,
    data: { completed_at: getNowDate() },
  });
}

export async function removeTaskController({ id }) {
  const task = database.getTaskById({ table: DATABASE_TABLES.TASKS, id });

  if (!task) throw new Error("Task not found");

  return database.delete({ table: DATABASE_TABLES.TASKS, id });
}
