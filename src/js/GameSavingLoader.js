import { read } from "./reader.js";
import { json } from "./parser.js";

export class GameSavingLoader {
  static async load() {
    class GameSaving {
      constructor(data) {
        this.id = data.id;
        this.created = data.created;
        this.userInfo = data.userInfo;
      }
    }
    const readed = await read();
    const parsed = await json(readed);
    const data = JSON.parse(parsed);

    return new GameSaving(data);
  }
}
