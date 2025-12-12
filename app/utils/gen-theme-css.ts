interface ColorItem {
  name: string;
  title: string;
  primary: string;
}

export function generateColorCSS(colors: ColorItem[]) {
  const lines: string[] = [];

  lines.push(`:root {`);

  for (const item of colors) {
    lines.push(`  /* ${item.title} */`);
    lines.push(`  --${item.name}: ${item.primary};`);
    lines.push("");
  }

  lines.push(`}`);

  return lines.join("\n");
}
