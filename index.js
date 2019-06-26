module.exports = () => ({
  presets: [
    require("@babel/preset-env"),
    require("@babel/preset-react"),
  ],
  "plugins": [
    /*
    These plugins teach Babel to recognize EcmaScript language features that have reached "stage 2" in the process of approval for inclusion in the official EcmaScript specification (called the "TC39 process"). There are 5 stages in the process, starting at 0 (basically a brand new proposal) going up to 4 (finished and ready for inclusion). Read more about it here: http://2ality.com/2015/11/tc39-process.html. Using new language features before they're officially part of EcmaScript is fun, but it also carries a risk: sometimes proposed features can change substantially (or be rejected entirely) before finally being included in the language, so if you jump on the bandwagon too early, you risk having your code be dependent on defunct/nonstandard syntax! "Stage 2" is a fairly safe place to start - after stage 2, the feature is well on its way to official inclusion and only minor changes are expected.
    */
    require("@babel/plugin-syntax-dynamic-import"),
    require("@babel/plugin-syntax-import-meta"),
    require("@babel/plugin-proposal-class-properties"),
    require("@babel/plugin-proposal-json-strings"),
    [
      require("@babel/plugin-proposal-decorators"),
      {
        "legacy": true
      }
    ],
    require("@babel/plugin-proposal-function-sent"),
    require("@babel/plugin-proposal-export-namespace-from"),
    require("@babel/plugin-proposal-numeric-separator"),
    require("@babel/plugin-proposal-throw-expressions")
  ],
});
