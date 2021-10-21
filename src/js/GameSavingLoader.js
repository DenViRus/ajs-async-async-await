import { read } from "./reader.js";
import { json } from "./parser.js";
import { GameSaving } from "./GameSaving.js";

export class GameSavingLoader {
  static async load() {
    const readed = await read();
    const parsed = await json(readed);
    const data = JSON.parse(parsed);

    return new GameSaving(data);
  }
}
