function buildPrompt(nl) {
  return `You are an expert assistant that converts a natural language request into two query artifacts: 1) a valid SQL query string, and 2) a MongoDB find expression.\n\nReturn ONLY valid JSON with keys: \"sql\" (string) and \"mongo\" (string or object).\nDo NOT include any commentary or markdown.\n\nNatural language: "${nl}"\n\nExample JSON output:\n{\n  "sql": "SELECT * FROM employees WHERE join_date > '2022-01-01';",\n  "mongo": "db.employees.find({ join_date: { $gt: ISODate('2022-01-01') } })"\n}\n`;
}

module.exports = { buildPrompt };
