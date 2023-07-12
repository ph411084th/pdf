const puppeteer = require("puppeteer");
const fs = require("fs");

async function savePDF(url, outputPath) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({ format: "A4" });

    fs.writeFileSync(outputPath, pdfBuffer);

    console.log(`Pobjeda ${outputPath}`);

    await browser.close();
  } catch (error) {
    console.error("Error:", error);
  }
}


const url = "https://google.com";
const outputPath = "Pobjeda";

savePDF(url, outputPath);