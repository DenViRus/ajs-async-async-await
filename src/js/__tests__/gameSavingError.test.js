import { GameSavingLoader } from "../app.js";

test("check savingLoader", async () => {
  const received = await GameSavingLoader.load();
  const expected = "Error!!";

  expect(received).toEqual(expected);
});
