import DocsManager from "./DocsManager";

const blacklisted = new Set(["docs"]);

export default new DocsManager({
    id: "memer",
    name: "Main",
    global: "Memer",
    repo: "Yash094/memer-api",
    defaultTag: "main",
    docsBranch: "docs",
    branchFilter: (branch) => !blacklisted.has(branch) && !branch.startsWith("dependabot/")
});
