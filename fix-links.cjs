const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src/components');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('react-router-dom')) {
    content = content.replace(/import\s+\{[^}]*\}\s+from\s+["']react-router-dom["'];?\n?/g, '');
    content = content.replace(/<Link\s+to=/g, '<a href=');
    content = content.replace(/<\/Link>/g, '</a>');
    content = content.replace(/<Link\b/g, '<a');
    fs.writeFileSync(f, content);
    console.log('Updated', f);
  }
});
