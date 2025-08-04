const fs = require('fs');
const pdfParse = require('pdf-parse');

// APIs from the PDF
const pdfAPIs = [
  'Login',
  'UCC',
  'Order', 
  'SxP',
  'NFT',
  'Payment Aggregator',
  'Scheme List',
  'NAV Master List',
  'Get Payment Details',
  'List Payment Details',
  'Mandate Register',
  'Mandate Fetch Details',
  'Mandate List Fetch',
  'Mandate Modify',
  'Mandate Cancel',
  'Mandate Link',
  'Mandate Delink',
  'Mandate Status Webhook',
  'Request Single Payment BSE PG',
  'Request Send Payment Info BSE PG',
  'Webhook BSE Payment Gateway'
];

// APIs we have implemented in our code (updated)
const implementedAPIs = [
  'Login',
  'UCC',
  'Order',
  'SxP', 
  'NFT',
  'Payment Gateway',
  'Payment Aggregator',
  'Scheme List',
  'NAV Master List',
  'Payment Details',
  'Mandate',
  'MIS',
  'Request Single Payment BSE PG',
  'Send Payment Info BSE PG'
];

async function compareAPIs() {
  try {
    const dataBuffer = fs.readFileSync('bse-starmfv2-api_DRAFT Release_V0.9.20.pdf');
    const data = await pdfParse(dataBuffer);
    
    console.log('=== API Implementation Comparison ===');
    console.log('\nPDF APIs (22 total):');
    pdfAPIs.forEach((api, index) => {
      console.log(`${index + 1}. ${api}`);
    });
    
    console.log('\nImplemented APIs in our code:');
    implementedAPIs.forEach((api, index) => {
      console.log(`${index + 1}. ${api}`);
    });
    
    // Check which PDF APIs we have implemented
    console.log('\n=== Implementation Status ===');
    const implemented = [];
    const missing = [];
    
    pdfAPIs.forEach(api => {
      const isImplemented = implementedAPIs.some(impl => 
        impl.toLowerCase().includes(api.toLowerCase()) ||
        api.toLowerCase().includes(impl.toLowerCase())
      );
      
      if (isImplemented) {
        implemented.push(api);
      } else {
        missing.push(api);
      }
    });
    
    console.log(`\n✅ Implemented (${implemented.length}):`);
    implemented.forEach(api => console.log(`  - ${api}`));
    
    console.log(`\n❌ Missing (${missing.length}):`);
    missing.forEach(api => console.log(`  - ${api}`));
    
    console.log(`\n📊 Summary:`);
    console.log(`  Total PDF APIs: ${pdfAPIs.length}`);
    console.log(`  Implemented: ${implemented.length}`);
    console.log(`  Missing: ${missing.length}`);
    console.log(`  Coverage: ${((implemented.length / pdfAPIs.length) * 100).toFixed(1)}%`);
    
  } catch (error) {
    console.error('Error comparing APIs:', error);
  }
}

compareAPIs(); 