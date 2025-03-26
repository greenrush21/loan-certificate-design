const fs = require('fs');
const sharp = require('sharp');

// Convert SVG to PNG
sharp('sertifikat-pinjaman.svg')
  .png()
  .toFile('sertifikat-pinjaman.png')
  .then(info => { console.log('Conversion complete:', info); })
  .catch(err => { console.error('Error:', err); });