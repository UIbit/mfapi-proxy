const fs = require('fs');
const pdfParse = require('pdf-parse');

async function extractPDFText() {
  try {
    const dataBuffer = fs.readFileSync('bse-starmfv2-api_DRAFT Release_V0.9.20.pdf');
    const data = await pdfParse(dataBuffer);
    
    console.log('PDF Text extracted successfully!');
    console.log('Total pages:', data.numpages);
    console.log('Text length:', data.text.length);
    console.log('\n--- First 2000 characters ---');
    console.log(data.text.substring(0, 2000));
    
    // Look for API patterns
    const apiPatterns = [
      /API\s*[0-9]+/gi,
      /Endpoint\s*[0-9]+/gi,
      /\/[a-zA-Z0-9\/-]+/g,
      /POST\s+\/[a-zA-Z0-9\/-]+/gi,
      /GET\s+\/[a-zA-Z0-9\/-]+/gi
    ];
    
    console.log('\n--- API Patterns Found ---');
    apiPatterns.forEach((pattern, index) => {
      const matches = data.text.match(pattern);
      if (matches) {
        console.log(`Pattern ${index + 1}:`, matches.length, 'matches');
        console.log('Sample matches:', matches.slice(0, 5));
      }
    });
    
  } catch (error) {
    console.error('Error extracting PDF text:', error);
  }
}

extractPDFText(); 