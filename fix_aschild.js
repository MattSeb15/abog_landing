const fs = require('fs');
let code = fs.readFileSync('C:/Users/Most/.gemini/antigravity/abog_landing/src/app/page.tsx', 'utf8');

code = code.replace(
  '<SheetTrigger asChild className="md:hidden">',
  '<SheetTrigger render={<Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/5"><Menu className="w-6 h-6" /></Button>} className="md:hidden">'
);
code = code.replace(
  '            <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/5">\n              <Menu className="w-6 h-6" />\n            </Button>\n',
  ''
);

code = code.replace(
  '<SheetTrigger asChild>',
  '<SheetTrigger render={<Button variant="outline" className="w-full border-gold text-navy hover:bg-gold hover:text-navy">Ver detalles</Button>}>'
);
code = code.replace(
  '                        <Button variant="outline" className="w-full border-gold text-navy hover:bg-gold hover:text-navy">\n                          Ver detalles\n                        </Button>\n',
  ''
);

fs.writeFileSync('C:/Users/Most/.gemini/antigravity/abog_landing/src/app/page.tsx', code, 'utf8');
console.log('Fixed asChild');
