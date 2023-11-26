require('dotenv').config();
const {writeFileSync, mkdirSync} = require('fs');

const targetPath = './src/environments/environtment.ts';



const envFileContent = `
  export const environment = {
    mapbox_key: "${ process.env['MAPBOX_KEY']}",
    otra: "Propiedad",
  };
`;


mkdirSync('./src/environments',{recursive:true});
writeFileSync(targetPath,envFileContent);
