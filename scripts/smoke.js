const http = require("http");

const routes = ["/", "/probability", "/statistics", "/visualizations"];
const base = "http://localhost:3000";

(async () => {
  const results = [];
  for (const r of routes) {
    const url = base + r;
    try {
      const resp = await fetch(url);
      results.push({ route: r, ok: resp.ok });
    } catch (e) {
      results.push({ route: r, ok: false, err: String(e) });
    }
  }
  console.table(results);
  const allOk = results.every((r) => r.ok);
  process.exit(allOk ? 0 : 2);
})();
