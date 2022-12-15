const { awscdk, javascript } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Rob Whelan',
  authorAddress: 'rob@bigcloudcountry.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  description: 'A construct library for AWS CDK',
  name: 'data-cdk-constructs',
  license: 'Apache-2.0',
  repositoryUrl: 'https://github.com/big-cloud-country/data-cdk-constructs',
  gitignore: ['.idea', '.vscode'],
  releaseBranches: 'main',
  releaseToNpm: true,
  releaseWorkflow: true,
  publishToPypi: {
    distName: 'data-cdk-constructs',
    module: 'data_cdk_constructs',
  },
  projectType: awscdk.AwsCdkConstructLibrary,
  packageManager: javascript.NodePackageManager.NPM,
  mergify: false,
  docgen: true,
  deps: ['aws-cdk-lib', 'constructs'],
  devDeps: [
    'aws-cdk-lib@2.1.0',
    'constructs@10.0.5',

  ],
  packageName: 'data-cdk-constructs', /* The "name" in package.json. */
});

project.projectBuild.testTask.exec("echo 'No tests yet'");

project.synth();