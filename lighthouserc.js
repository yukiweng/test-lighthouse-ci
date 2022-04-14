module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run dev",
      url: ["http://localhost:3000"],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.8 }],
      },
    },
  },
};
