const { awscdk } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Rob Whelan",
  authorAddress: "rob@bigcloudcountry.com",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  name: "data-cdk",
  repositoryUrl: "https://github.com/big-cloud-country/data-cdk-constructs",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();