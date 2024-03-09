import {
  completedTaskController,
  createTaskController,
  listTaskController,
  removeTaskController,
  updateTaskController,
} from "./controllers.js";
import { buildRoutePath } from "./utils/build-route-path.js";
import { parserCSV } from "./utils/import-task.js";

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: async (req, res) => {
      const { search } = req.query;

      try {
        const tasks = await listTaskController({ search });

        return res.end(JSON.stringify(tasks));
      } catch (error) {
        return res.writeHead(400).end(error?.message);
      }
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks/import"),
    handler: async (req, res) => {
      try {
        parserCSV();
        return res.writeHead(201).end();
      } catch (error) {
        return res.writeHead(400).end(error?.message);
      }
    },
  },

  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: async (req, res) => {
      const { title, description } = req.body || { title: "", description: "" };

      if (!title || !description) {
        return res.writeHead(400).end("Title and Description is required");
      }

      try {
        await createTaskController({ title, description });
        return res.writeHead(201).end();
      } catch (error) {
        return res.writeHead(400).end(error?.message);
      }
    },
  },

  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: async (req, res) => {
      const { title, description } = req.body || { title: "", description: "" };
      const { id } = req.params;

      try {
        await updateTaskController({ id, title, description });

        return res.end();
      } catch (error) {
        return res.writeHead(400).end(error?.message);
      }
    },
  },

  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: async (req, res) => {
      const { id } = req.params;

      try {
        await completedTaskController({ id });

        return res.end();
      } catch (error) {
        return res.writeHead(400).end(error?.message);
      }
    },
  },

  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: async (req, res) => {
      const { id } = req.params;

      try {
        await removeTaskController({ id });

        return res.writeHead(204).end();
      } catch (error) {
        return res.writeHead(400).end(error?.message);
      }
    },
  },
];
