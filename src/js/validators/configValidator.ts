import { z, ZodError, type ZodTypeAny } from "zod";

const nonEmptyString = z.string().trim().min(1);

const articleSchema = z.object({
  title: nonEmptyString,
  summary: nonEmptyString,
  date: nonEmptyString,
  tags: z.array(nonEmptyString),
  url: nonEmptyString
});

const techStackGroupsSchema = z.record(nonEmptyString, z.array(nonEmptyString));

const lifeSchema = z.object({
  type: nonEmptyString,
  title: nonEmptyString,
  date: nonEmptyString,
  summary: nonEmptyString,
  cover: nonEmptyString.optional()
});

const timelineSchema = z.object({
  period: nonEmptyString,
  title: nonEmptyString,
  organization: nonEmptyString,
  description: nonEmptyString
});

const zhihuProfileUrlSchema = z
  .string()
  .trim()
  .min(1)
  .url()
  .refine((value) => /^https?:\/\//.test(value), {
    message: "zhihuProfileUrl must be http(s)"
  });

const siteConfigSchema = z.object({
  about: z.object({
    educationTitle: nonEmptyString,
    workTitle: nonEmptyString
  }),
  learning: z.object({
    zhihuButtonText: nonEmptyString,
    zhihuInvalidText: nonEmptyString,
    techStackTitle: nonEmptyString
  }),
  life: z.object({
    sectionLabel: nonEmptyString
  }),
  errors: z.object({
    invalidConfigMessage: nonEmptyString
  })
});

function formatZodError(prefix: string, error: ZodError): Error {
  const issue = error.issues[0];
  const path = issue?.path?.join(".") || "root";
  return new Error(`${prefix} invalid field: ${path}`);
}

function parseWithSchema(schema: ZodTypeAny, value: unknown, prefix: string): void {
  try {
    schema.parse(value);
  } catch (error) {
    if (error instanceof ZodError) {
      throw formatZodError(prefix, error);
    }
    throw error;
  }
}

export function validateArticleConfig(articles: unknown): void {
  parseWithSchema(z.array(articleSchema), articles, "article");
}

export function validateTechStackGroups(groups: unknown): void {
  parseWithSchema(techStackGroupsSchema, groups, "techStackGroups");
}

export function validateLifeConfig(posts: unknown): void {
  parseWithSchema(z.array(lifeSchema), posts, "life");
}

export function validateTimelineConfig(items: unknown): void {
  parseWithSchema(z.array(timelineSchema), items, "timeline");
}

export function validateSiteConfig(config: unknown): void {
  parseWithSchema(siteConfigSchema, config, "siteConfig");
}

export function validateZhihuProfileUrl(url: unknown): void {
  parseWithSchema(zhihuProfileUrlSchema, url, "zhihuProfileUrl");
}
