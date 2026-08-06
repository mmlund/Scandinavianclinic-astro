const fs = require('fs');
const content = fs.readFileSync('src/lib/schemas.ts', 'utf8');

const minimalBusinessNode = "const minimalBusiness = {\n" +
"  \"@type\": \"MedicalBusiness\",\n" +
"  \"@id\": BUSINESS_ID,\n" +
"  name: \"Scandinavian Clinic\",\n" +
"  url: \"https://scandinavianclinic.com\",\n" +
"  telephone: \"+1-604-926-4883\",\n" +
"  address: baseAddress,\n" +
"};";

let newContent = content.replace(
  'const businessRef = { "@id": BUSINESS_ID };',
  minimalBusinessNode + '\n\nconst businessRef = { "@id": BUSINESS_ID };'
);

newContent = newContent.replace(/^    businessRef,$/gm, '    minimalBusiness,');

fs.writeFileSync('src/lib/schemas.ts', newContent);
