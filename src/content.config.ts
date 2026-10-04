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
    tier: z.number().min(1).max(4).default(2),
    related_topics: z.array(z.string()).default([]),
    source_url: z.string().optional(),
    // Phase 2 (Part 9/10)
    source_type: z.enum(['clinical-guideline','diagnostic-classification','systematic-review','meta-analysis','rct','cohort-study','cross-sectional','neuroimaging','clinical-study','qualitative','case-report','expert-commentary','community-report']).optional(),
    evidence_strength: z.enum(['strong','moderate','limited','mixed','uncertain']).default('uncertain'),
    research_question: z.string().optional(),
    relevant_claims: z.array(z.string()).default([]),
    relevant_questions: z.array(z.string()).default([]),
    relevant_patterns: z.array(z.string()).default([]),
    relevant_experiences: z.array(z.string()).default([]),
    notes: z.string().optional(),
    last_verified: z.string(),
  }),
});

// Phase 2 (Part 8): Claims — 可对照证据评估的陈述
const claims = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/claims' }),
  schema: z.object({
    claim_id: z.string(),
    title: z.string(),
    content_type: z.literal('claim'),
    claim: z.string(),
    claim_type: z.enum(['medical','psychological','neurological','behavioral','social','other']).default('psychological'),
    status: z.enum(['supported','partially-supported','mixed','limited','not-established','contradicted','unknown']).default('unknown'),
    summary: z.string(),
    evidence_strength: z.enum(['strong','moderate','limited','mixed','uncertain']).default('uncertain'),
    supporting_research: z.array(z.string()).default([]),
    contradicting_or_limiting_research: z.array(z.string()).default([]),
    community_reports: z.string().optional(),
    related_topics: z.array(z.string()).default([]),
    related_questions: z.array(z.string()).default([]),
    related_patterns: z.array(z.string()).default([]),
    current_interpretation: z.string(),
    uncertainties: z.array(z.string()).default([]),
    last_reviewed: z.string(),
  }),
});

// Phase 2 (Part 11): Controversies — 结构化争议
const controversies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/controversies' }),
  schema: z.object({
    controversy_id: z.string(),
    title: z.string(),
    content_type: z.literal('controversy'),
    question: z.string(),
    why_controversial: z.string(),
    position_a: z.string(),
    evidence_a: z.array(z.string()).default([]),
    limitations_a: z.array(z.string()).default([]),
    position_b: z.string(),
    evidence_b: z.array(z.string()).default([]),
    limitations_b: z.array(z.string()).default([]),
    well_established: z.array(z.string()).default([]),
    remains_uncertain: z.array(z.string()).default([]),
    community_experience: z.string().optional(),
    current_assessment: z.string(),
    related_claims: z.array(z.string()).default([]),
    related_topics: z.array(z.string()).default([]),
    related_research: z.array(z.string()).default([]),
    last_reviewed: z.string(),
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

export const collections = { research, topics, claims, controversies };
