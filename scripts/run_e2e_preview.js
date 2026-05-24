const { execSync } = require("child_process");

try {
  console.log("Running Playwright tests against http://localhost:3001");
  execSync("npx playwright test --reporter=list", {
    stdio: "inherit",
    env: { ...process.env, PLAYWRIGHT_BASE_URL: "http://localhost:3001" },
  });
} catch (e) {
  process.exit(e.status || 1);
}
