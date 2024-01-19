module.exports = function (plop) {
  const currentWorkingDirectory = process.cwd();

  plop.setGenerator("c", {
    description: "Create a new React TypeScript component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name in kebab-case:",
      },
    ],
    actions: [
      {
        type: "add",
        path:
          currentWorkingDirectory +
          "/{{kebabCase name}}/{{kebabCase name}}.module.scss",
        templateFile: "plop-templates/component.module.scss.hbs",
      },
      {
        type: "add",
        path:
          currentWorkingDirectory + "/{{kebabCase name}}/{{kebabCase name}}.js",
        templateFile: "plop-templates/component.js.hbs",
      },
    ],
  });

  plop.setGenerator("s", {
    description: "Create a new Service js file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Service name in kebab-case:",
      },
    ],
    actions: [
      {
        type: "add",
        path: currentWorkingDirectory + "/{{kebabCase name}}.service.js",
        templateFile: "plop-templates/service.service.js.hbs",
      },
    ],
  });
};
