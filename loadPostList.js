const { readdir, readFile, writeFile } = require("fs/promises");
const { join } = require("path");

(async () => {
  const result = [];
  const files = await readdir(join(process.cwd(), "src", "assets", "posts"));
  for (const file of files) {
    const data = await readFile(
      join(process.cwd(), "src", "assets", "posts", file),
      "utf-8"
    );
    const [, frontMatter, ...content] = data.split("---");
    const frontMatterLines = frontMatter.split("\n");
    const title = frontMatterLines
      .find((line) => line.startsWith("title: "))
      .replace("title: ", "")
      .replace(/"/g, "");
    const date = new Date(
      frontMatterLines
        .find((line) => line.startsWith("date: "))
        .replace("date: ", "")
    );
    const tags = frontMatterLines
      .find((line) => line.startsWith("tags: "))
      .replace("tags: ", "")
      .slice(1, -1)
      .split(/,\s?/)
      .map((e) => e.trim());
    result.push({
      title,
      date,
      tags,
      content: content.join("---"),
      slug: file.replace(/\.md$/, ""),
    });
  }
  result.sort((a, b) => b.date - a.date);
  await writeFile(
    join(process.cwd(), "src", "assets", "posts.json"),
    JSON.stringify(result, null, 2),
    "utf8"
  );
})();
