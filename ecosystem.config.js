module.exports = {
  apps: [
    {
      name: "backend",
      script: "npm",
      args: "run start:backend",
    },
    {
      name: "frontend",
      script: "npm",
      args: "run start:frontend",
    },
  ],
};
