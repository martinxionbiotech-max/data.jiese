import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Research Records — 科学证据层
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    research_id: z.string(),
    title: z.string(),
    content_type: z.literal('research'),
    authors: z.string().optional(),
    year: z.number().optional(),
    journal: z.string().optional(),
    doi: z.string().optional(),
    pmid: z.string().optional(),
    research_type: z.string().optional(),
    main_question: z.string().optional(),
    clinical_relevance: z.string().optional(),
    relevance_to_ppu: z.string().optional(),
    population: z.string().optional(),
    sample_size: z.string().optional(),
    method: z.string().optional(),
    main_findings: z.array(z.string()).default([]),
    limitations: z.array(z.string()).default([]),
    evidence_strength: z.enum(['high', 'medium', 'low', 'uncertain']).default('medium'),
    tier: z.number().min(1).max(4).default(2),
    related_topics: z.array(z.string()).default([]),
    source_url: z.string().optional(),
    last_verified: z.string(),
  }),
});

// Knowledge topics (psychology/neuroscience/etc.)
const topics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/topics' }),
  schema: z.object({
    topic_id: z.string(),
    title: z.string(),
    category: z.enum(['psychology', 'neuroscience', 'psychiatry', 'behavior', 'sexual-health', 'treatment', 'assessment', 'definitions']),
    concept: z.string(),
    research_summary: z.string().optional(),
    community_observation: z.string().optional(),
    practical_implications: z.array(z.string()).default([]),
    limitations: z.array(z.string()).default([]),
    what_we_know: z.array(z.string()).default([]),
    what_we_dont_know: z.array(z.string()).default([]),
    what_is_debated: z.array(z.string()).default([]),
    related_research: z.array(z.string()).default([]),
    last_verified: z.string(),
  }),
});

export const collections = { research, topics };
