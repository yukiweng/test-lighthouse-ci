module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run dev",
      url: ["http://localhost:3000"],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 1 }],
        "categories:accessibility": ["error", { minScore: 1 }],
      },
    },
  },
};