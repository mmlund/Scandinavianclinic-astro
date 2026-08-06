const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.astro')) results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

let updated = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (content.includes("import { Navigation } from '@/components/Navigation';")) {
    content = content.replace("import { Navigation } from '@/components/Navigation';", "import Navigation from '@/components/Navigation.astro';");
    changed = true;
  }
  if (content.includes('import { Navigation } from "@/components/Navigation";')) {
    content = content.replace('import { Navigation } from "@/components/Navigation";', "import Navigation from '@/components/Navigation.astro';");
    changed = true;
  }
  
  if (content.includes("<Navigation client:load />")) {
    content = content.replace(/<Navigation client:load \/>/g, "<Navigation />");
    changed = true;
  }
  if (content.includes("<Navigation client:load/>")) {
    content = content.replace(/<Navigation client:load\/>/g, "<Navigation />");
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    updated++;
    console.log(`Updated ${file}`);
  }
});
console.log(`Total files updated: ${updated}`);
