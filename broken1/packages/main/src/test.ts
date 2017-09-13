import { join } from "path";
import * as debug from "debug";

const pack = require(join(__dirname, "..", "package.json"));

const log = debug(pack.name);

// String Enums not working.
enum Test {
  FOO = "FOO",
  BAR = "BAR",
}

log(Test.FOO);
