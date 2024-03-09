import fs from "node:fs/promises";

const databasePath = new URL("../db.json", import.meta.url);

export class DataBase {
  #database = {};

  constructor() {
    fs.readFile(databasePath, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => this.#persist());
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  getTaskById({ table, id }) {
    if (Array.isArray(this.#database[table])) {
      return this.#database[table].find((row) => row.id === id);
    } else {
      return;
    }
  }

  select({ table, search }) {
    let data = this.#database[table] ?? [];

    if (search) {
      data = data.filter((row) => {
        return Object.entries(search).some(([key, value]) => {
          return row[key].includes(value?.toLowerCase());
        });
      });
    }

    return data;
  }

  insert({ table, data }) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }
    this.#persist();
  }

  update({ table, id, data }) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      this.#database[table][rowIndex] = {
        id,
        ...this.#database[table][rowIndex],
        ...data,
      };
      this.#persist();
    }
  }

  delete({ table, id }) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }
  }
}
