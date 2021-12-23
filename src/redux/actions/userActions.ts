import { createCustomAction } from "typesafe-actions";

const CHANGE_MODE = "CHANGE_MODE";

export const changeMode = createCustomAction(CHANGE_MODE, () => ({}));
