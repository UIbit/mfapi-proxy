const fs = require('fs');
const pdfParse = require('pdf-parse');

async function countAPIs() {
  try {
    const dataBuffer = fs.readFileSync('bse-starmfv2-api_DRAFT Release_V0.9.20.pdf');
    const data = await pdfParse(dataBuffer);
    
    const text = data.text;
    
    // Look for API sections and endpoints
    const apiSections = text.match(/6\.2\.[0-9]+\s+[A-Za-z\s]+/g) || [];
    const postEndpoints = text.match(/POST\s+\/[a-zA-Z0-9\/-]+/gi) || [];
    const getEndpoints = text.match(/GET\s+\/[a-zA-Z0-9\/-]+/gi) || [];
    const putEndpoints = text.match(/PUT\s+\/[a-zA-Z0-9\/-]+/gi) || [];
    const deleteEndpoints = text.match(/DELETE\s+\/[a-zA-Z0-9\/-]+/gi) || [];
    
    console.log('=== BSE StARMF v2 API Analysis ===');
    console.log('Total pages:', data.numpages);
    console.log('Text length:', data.text.length);
    
    console.log('\n=== API Sections Found ===');
    console.log('API Sections:', apiSections.length);
    apiSections.forEach((section, index) => {
      console.log(`${index + 1}. ${section.trim()}`);
    });
    
    console.log('\n=== HTTP Endpoints Found ===');
    console.log('POST endpoints:', postEndpoints.length);
    console.log('GET endpoints:', getEndpoints.length);
    console.log('PUT endpoints:', putEndpoints.length);
    console.log('DELETE endpoints:', deleteEndpoints.length);
    
    const totalEndpoints = postEndpoints.length + getEndpoints.length + putEndpoints.length + deleteEndpoints.length;
    console.log('\nTotal HTTP endpoints:', totalEndpoints);
    
    // Show sample endpoints
    console.log('\n=== Sample POST Endpoints ===');
    postEndpoints.slice(0, 10).forEach(endpoint => {
      console.log(endpoint.trim());
    });
    
    console.log('\n=== Sample GET Endpoints ===');
    getEndpoints.slice(0, 10).forEach(endpoint => {
      console.log(endpoint.trim());
    });
    
  } catch (error) {
    console.error('Error analyzing PDF:', error);
  }
}

countAPIs(); 