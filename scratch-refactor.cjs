const fs = require('fs');
const path = require('path');

const files = [
  'back-pain-treatment-north-vancouver.astro',
  'foot-and-ankle-pain-treatment-north-vancouver.astro',
  'headache-treatment-north-vancouver.astro',
  'hip-pain-treatment-north-vancouver.astro',
  'neck-pain-and-whiplash-treatment-north-vancouver.astro',
  'sciatica-treatment-north-vancouver.astro',
  'shoulder-pain-treatment-north-vancouver.astro',
  'tennis-elbow-treatment-north-vancouver.astro',
  'tennis-elbow-ver2.astro'
];

const basePath = 'src/pages/conditions';

for (const file of files) {
  const filePath = path.join(basePath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add import { Image } from 'astro:assets';
  if (!content.includes("import { Image }")) {
    content = content.replace(/---\r?\n/, "---\nimport { Image } from 'astro:assets';\n");
  }

  // 2. Find and modify imports
  const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+)\?url['"];/g;
  let match;
  const imageVars = new Set();
  
  let newContent = content;
  while ((match = importRegex.exec(content)) !== null) {
    const varName = match[1];
    const importPath = match[2];
    
    if (varName === 'logo' || importPath.endsWith('.mp4')) {
      continue;
    }
    imageVars.add(varName);
    
    const exactMatch = match[0];
    const replacement = `import ${varName} from '${importPath}';`;
    newContent = newContent.replace(exactMatch, replacement);
  }

  // 3. Replace <img ... /> with <Image ... />
  let isFirstImage = true;
  const imgTagRegex = /<img\s+([^>]+)>/g;
  
  newContent = newContent.replace(imgTagRegex, (fullMatch, attributesInner) => {
    const srcMatch = attributesInner.match(/src=\{([^}]+)\}/);
    if (!srcMatch) return fullMatch;
    
    const srcVar = srcMatch[1];
    if (!imageVars.has(srcVar)) return fullMatch;

    let cleanAttributes = attributesInner;
    if (cleanAttributes.endsWith('/')) {
      cleanAttributes = cleanAttributes.slice(0, -1).trim();
    }
    
    if (isFirstImage) {
      cleanAttributes += ' loading="eager" fetchpriority="high"';
      isFirstImage = false;
    }
    
    return `<Image ${cleanAttributes} />`;
  });

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Processed ${file}`);
}
