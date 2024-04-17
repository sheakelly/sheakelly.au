/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sheakelly.au",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("Web", {
      domain:
        $app.stage === "production"
          ? { domainName: "sheakelly.au", redirects: ["www.sheakelly.au"] }
          : undefined,
    });
  },
});
