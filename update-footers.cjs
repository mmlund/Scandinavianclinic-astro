const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/pages/conditions/headache-treatment-north-vancouver.astro',
  'src/pages/conditions/hip-pain-treatment-north-vancouver.astro',
  'src/pages/conditions/neck-pain-and-whiplash-treatment-north-vancouver.astro',
  'src/pages/conditions/tennis-elbow-treatment-north-vancouver.astro'
];

filesToUpdate.forEach(relativePath => {
  const file = path.join(__dirname, relativePath);
  let content = fs.readFileSync(file, 'utf8');

  // Replace inline footer
  const footerStartStr = '<footer class="bg-muted py-12 mt-12 border-t border-border">';
  const footerEndStr = '</footer>';
  
  const startIndex = content.indexOf(footerStartStr);
  if (startIndex !== -1) {
    const endIndex = content.indexOf(footerEndStr, startIndex) + footerEndStr.length;
    content = content.substring(0, startIndex) + '<Footer client:idle />' + content.substring(endIndex);
  }

  // Add import if not present
  if (!content.includes("import { Footer }")) {
    // Find the end of imports in frontmatter (last import statement before '---')
    // Alternatively, just inject it right after the first line '---'
    content = content.replace(/^---\r?\n/m, "---\nimport { Footer } from '@/components/Footer';\n");
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
});
