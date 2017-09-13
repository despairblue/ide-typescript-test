import * as dep from "dep";
import { join } from "path";

const log = dep(require(join(__dirname, "..", "package.json")).name);

log("hi");
