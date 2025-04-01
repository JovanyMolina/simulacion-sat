import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: false  });
const page = await browser.newPage();

/* await page.goto('http://localhost:3000/');  */
await page.goto('https://login.mat.sat.gob.mx/nidp/app/login?id=contr-dual-eFirma-totp&sid=0&option=credential&sid=0&target=https%3A%2F%2Flogin.mat.sat.gob.mx%2Fnidp%2Foauth%2Fnam%2Fauthz%3Fclient_id%3D2a6c0477-b3fb-415e-9786-ab2a28549278%26redirect_uri%3Dhttps%3A%2F%2Fconvolcon.clouda.sat.gob.mx%2Foauth%26response_type%3Dcode%26scope%3Dopenid%2Bcontrolesvolumetricos%26code_challenge%3DpI1HgyrOqeiO_9zcCjbUoekuLmeLPkUA-ITUrScsSyw%26code_challenge_method%3DS256%26response_mode%3Dform_post%26nonce%3D638790695777006087.M2IzYTZlOWUtNzU0Ni00OWE1LWI1NzctZmZmZTVkYzUwY2ZkZDQ5NjU3ZWEtNzRiMS00NGQ5LThjMDctOTNhZmVjNzFiMWUy%26acr_values%3Daws%2Fprod%2Fcontrib%2FeFirma%26state%3DCfDJ8DuzZoZvlXdAq-shCk4NaPlle6MRjXweZt6LzYd4aZlYrabd3jQp8iLhis2Aus6vRsqumwzZ9lwq-03aI1cKvrU2o4AGViuCoqbnBfsVncNPsZdgRWhvkiRbLlYXOzCUj3mOwtvEBCyvfaDZNBfoxzl-RA-juLWZsN3eUIkENhBNnQF9jX6g5C5FNftiKNdDUJzmjytz5xTUKSk3LQp-BWosc5m_XuFftSQvQ_c7GnIJTy9qVQ8gBJTB8-XqP64aZN_snCoWkNHB2LG1YBJ_BcVO9QKmYNipKJTMnXsj6DUHMcXsYT-orBVA-rKkfskvNk5POImcPUNaZWvORpXZ37NCx7J48xjruqLe8295tV-QuGb_bOW6IXeXMc_veZzb5Q%26x-client-SKU%3DID_NETSTANDARD2_0%26x-client-ver%3D6.10.0.0');
await page.setViewport({width: 1080, height: 1024});

/* await page.locator('#certificate'). *//* 
const certificado = await page.$('#btnCertificate');
await certificado.uploadFile('C:\\Users\\jovan\\OneDrive\\Escritorio\\Actividad\\Certificado.cer'); */