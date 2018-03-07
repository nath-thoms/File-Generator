const fs = require("fs");
const { exec } = require("child_process");

const packageJSON = {
  name: "File-Generator",
  version: "1.0.0",
  description: "",
  main: "index.js",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1'
  },
  repository: {
    type: "git",
    url: "git+https://github.com/"
  },
  keywords: [],
  author: "",
  license: "ISC",
  bugs: {
    url: "https://github.com/"
  },
  homepage: "https://github.com/"
};

const eslintrc = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    mocha: true,
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended"],
  plugins: [],
  rules: {
    "no-console": 0,
    "space-before-blocks": 1,
    "arrow-spacing": 1,
    "keyword-spacing": 1,
    "space-infix-ops": 1,
    "space-in-parens": 1,
    "spaced-comment": 1,
    semi: 1,
    "no-multiple-empty-lines": 1
  }
};

function newProject() {
  fs.mkdir("../test", (err, res) => {
    if (err) return console.log(err);
    fs.writeFile("../test/index.js", "// index.js", "utf8", (err, res) => {
      if (err) return console.log(err);
      fs.mkdir("../test/spec", (err, res) => {
        if (err) return console.log(err);
        fs.writeFile(
          "../test/spec/index.spec.js",
          "// index.spec.js",
          "utf8",
          (err, res) => {
            if (err) return console.log(err);
            fs.writeFile(
              "../test/package.json",
              JSON.stringify(packageJSON),
              "utf8",
              (err, res) => {
                if (err) return console.log(err);
                fs.writeFile(
                  "../test/README.md",
                  "// README.md",
                  "utf8",
                  (err, res) => {
                    if (err) return console.log(err);
                    fs.writeFile(
                      "../test/.eslintrc",
                      JSON.stringify(eslintrc),
                      "utf8",
                      (err, res) => {
                        if (err) return console.log(err);
                        fs.writeFile(
                          "../test/.gitignore",
                          "node_modules",
                          "utf8",
                          (err, res) => {
                            if (err) return console.log(err);
                            exec(
                              "git init | cd ../test | ls -a",
                              { cwd: "../test" },
                              (err, stdout, stderr) => {
                                if (err) return console.log(err);
                                console.log(stdout);
                                console.log(stderr);
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  });
}
newProject();
