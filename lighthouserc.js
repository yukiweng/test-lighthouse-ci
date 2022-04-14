module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run dev",
      url: ["http://localhost:3000"],
      numberOfRuns: 1,
    },
    upload: {
      serverBaseUrl: "http://localhost:9001",
      token: "0eb8c7d6-277e-4711-9006-72158ade6ba9",
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.8 }],
      },
    },
  },
};
