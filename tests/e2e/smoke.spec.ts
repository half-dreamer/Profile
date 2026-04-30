import { expect, test } from "@playwright/test";

const BASE_URL = process.env.E2E_BASE_URL || "http://127.0.0.1:5173";

test("三页面可访问", async ({ page }) => {
  for (const path of ["/about.html", "/learning.html", "/life.html"]) {
    const response = await page.request.get(`${BASE_URL}${path}`);
    expect(response.status()).toBe(200);
  }
});

test("导航可互跳并保持 active", async ({ page }) => {
  await page.goto(`${BASE_URL}/about.html`, { waitUntil: "domcontentloaded" });
  await page.click('a.nav-link:has-text("学习文章")');
  await expect(page).toHaveURL(/learning\.html$/);
  await expect(page.locator("a.nav-link.active")).toContainText("学习文章");

  await page.click('a.nav-link:has-text("生活记录")');
  await expect(page).toHaveURL(/life\.html$/);
  await expect(page.locator("a.nav-link.active")).toContainText("生活记录");
});

test("关键链接可用且无效链接有兜底", async ({ page }) => {
  await page.goto(`${BASE_URL}/learning.html`, { waitUntil: "domcontentloaded" });
  const zhihuLink = page.locator(".learning-actions a.article-link").first();
  await expect(zhihuLink).toHaveAttribute("href", /https:\/\/www\.zhihu\.com\/people\//);

  const articleLink = page.locator(".article-card a.article-link").first();
  await expect(articleLink).toHaveAttribute("href", /https:\/\/zhuanlan\.zhihu\.com\/p\//);

  const invalidFallback = page.locator(".article-card .article-link.is-disabled").first();
  await expect(invalidFallback).toContainText("链接暂不可用");
});
