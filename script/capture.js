import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Set `false` untuk melihat browser
  const page = await browser.newPage();

  // Navigasi ke halaman SvelteKit Anda
  const svelteAppUrl = 'http://localhost:5173/scanner'; // Ganti dengan URL proyek SvelteKit Anda
  await page.goto(svelteAppUrl);

  // Dengarkan log di halaman utama
  page.on('console', (msg) => {
    console.log(`[PAGE]: ${msg.text()}`);
  });

  // Tunggu hingga `iframe` dimuat
  const iframeSelector = 'iframe[src="https://skin-analyzer.vlcc.com/analysis"]';
  await page.waitForSelector(iframeSelector);
  const iframeHandle = await page.$(iframeSelector);
  const iframe = await iframeHandle.contentFrame(); // Dapatkan konten iframe

  if (iframe) {
    console.log('Iframe ditemukan dan dimuat.');

    // Dengarkan log dari `iframe`
    iframe.on('console', (msg) => {
      console.log(`[IFRAME]: ${msg.text()}`);
    });
  } else {
    console.log('Iframe tidak ditemukan atau gagal dimuat.');
  }

  // Tunggu untuk melihat hasilnya (atau lakukan tugas lain)
  await page.waitForTimeout(10000);

  await browser.close();
})();
