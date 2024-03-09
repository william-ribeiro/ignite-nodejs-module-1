import fs from "node:fs";
import { parse } from "csv-parse";
import { createTaskController } from "../controllers.js";

const csvPath = new URL("../../tasks.csv", import.meta.url);
const csvStream = fs.createReadStream(csvPath);

export function parserCSV() {
  const parser = parse({
    delimiter: ",",
    from_line: 2,
  });

  csvStream
    .pipe(parser)
    .on("data", async (rows) => {
      await createTaskController({ title: rows[0], description: rows[1] });
    })
    .on("end", () => {
      console.log("fim");
    })
    .on("error", (error) => {
      console.log(error);
    });
}
