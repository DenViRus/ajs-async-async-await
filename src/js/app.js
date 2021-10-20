// TODO: write your code here
import { GameSavingLoader } from "./GameSavingLoader.js";
import { read } from "./reader.js";

export { GameSavingLoader, read };

(async () => {
  try {
    const gameSaving = await GameSavingLoader.load();
    return gameSaving;
  } catch (error) {
    return "Error!";
  }
})();
