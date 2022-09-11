import { mkdir } from "fs/promises";
import path from "path";
import { exec } from "child_process";
import puppeteer from "puppeteer";

const __dirname = path.resolve();
const currentDate = new Date();
const dayOfMonth = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = `${currentDate.getFullYear()}`.slice(2);
const intededDirectory = path.join(__dirname, `${month}-${dayOfMonth}-${year}`);

try {
  const newDatedFolder = await mkdir(intededDirectory, { recursive: true });
  exec(
    "touch index.ts && tsc --lib 'ESNext, DOM' --init",
    { cwd: intededDirectory },
    (err, stdout, stderr) => {
      if (err) {
        console.error("no ts config command");
      }
    }
  );
} catch (err) {
  console.error(err);
} finally {
  console.info(`created directory ${intededDirectory}`);
}

// try {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://leetcode.com/problemset/all/?difficulty=EASY", {
//     waitUntil: "networkidle2",
//   });
//   const [randomBtn] = await page.$x("//span[contains(., 'Pick One')]");

//   if (true) {
//     // await randomBtn.click();

//     page.click(randomBtn);
//     console.log({ url: page.url() });
//     await page.screenshot({ path: "leet.png" });
//     await browser.close();
//   }

//   // console.log({ randomBtn });
// } catch (err) {
//   console.error(err);
// } finally {
// }
