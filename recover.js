const fs = require('fs');

const logPath = 'C:/Users/Most/.gemini/antigravity/brain/e0a254ed-160a-4c48-a0c2-fb6c7ac5dc5f/.system_generated/logs/transcript.jsonl';
const target = 'C:/Users/Most/.gemini/antigravity/abog_landing/src/app/page.tsx';

try {
  const content = fs.readFileSync(logPath, 'utf8');
  const lines = content.split('\n');
  for (const line of lines) {
    if (!line) continue;
    try {
      const obj = JSON.parse(line);
      if (obj.type === 'VIEW_FILE' && obj.content && obj.content.includes('function Faq')) {
         console.log('Found the big file excerpt!');
         let code = obj.content;
         code = code.split('leading space.\\n')[1];
         if (!code) code = obj.content.split('leading space.\n')[1];
         code = code.split('\nThe above content does NOT show')[0];
         code = code.split('\\nThe above content does NOT show')[0];
         
         // remove line numbers
         code = code.replace(/^\d+: /gm, '');
         code = code.replace(/\\n/g, '\n');
         
         // Fix any trailing broken things
         code += '\n\nexport default function Home() {\n  return (\n    <main className="min-h-screen bg-navy text-white">\n      <Navbar />\n      <Hero />\n      <About />\n      <Services />\n      <Stats />\n      <Testimonials />\n      <Faq />\n      <CTA />\n      <Footer />\n    </main>\n  );\n}\n';
         
         fs.writeFileSync(target, code, 'utf8');
         console.log('Written to page.tsx!');
         break;
      }
    } catch(e) {}
  }
} catch(err) {
  console.error(err);
}
