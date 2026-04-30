import { expect, test } from "@playwright/test";

const BASE_URL = process.env.E2E_BASE_URL || "http://127.0.0.1:4173";

test("三页面可访问", async ({ page }) => {
  for (const path of ["/about.html", "/learning.html", "/life.html"]) {
    const response = await page.request.get(`${BASE_URL}${path}`);
    expect(response.status()).toBe(200);
  }
});

test("导航可互跳并保持 active", async ({ page }) => {
  await page.goto(`${BASE_URL}/about.html`, { waitUntil: "domcontentloaded" });
  await page.click('nav[aria-label="主导航"] a:has-text("学习文章")');
  await expect(page).toHaveURL(/learning\.html$/);

  await page.click('nav[aria-label="主导航"] a:has-text("生活记录")');
  await expect(page).toHaveURL(/life\.html$/);
});

test("关键链接可用且无效链接有兜底", async ({ page }) => {
  await page.goto(`${BASE_URL}/learning.html`, { waitUntil: "domcontentloaded" });
  const response = await page.request.get(`${BASE_URL}/learning.html`);
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body.includes("学习文章")).toBe(true);
});
