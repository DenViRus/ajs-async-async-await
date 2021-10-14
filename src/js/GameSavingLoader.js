import { read } from "./reader.js";
import { json } from "./parser.js";

export class GameSavingLoader {
  static method(value) {
    this.method = value;
  }

  static async load() {
    try {
      return JSON.parse(await json(await this.method()));
    } catch (error) {
      return "Error!!";
    }
  }
}
