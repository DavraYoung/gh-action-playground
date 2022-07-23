// If your system has different domain, add mapping here
const domains = {
  ad: "example.ad",
  wt: "example.wt",
};
const systems = process.env.DEPLOY_SYSTEMS?.split(",") || [];

console.log(
  JSON.stringify(
    systems.map((system) => {
      const domain = domains[system] || `example-${system}.com`;
      return { name: system, domain };
    })
  )
);
