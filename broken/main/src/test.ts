import * as debug from "debug";
import { join } from "path";

const log = debug(require(join(__dirname, "..", "package.json")).name);
