// Shared metadata for the data.jiese knowledge base.
// Category ordering + display metadata, evidence/tier labels.

export type CategoryKey =
  | 'psychology'
  | 'neuroscience'
  | 'psychiatry'
  | 'behavior'
  | 'sexual-health'
  | 'treatment'
  | 'assessment'
  | 'definitions';

export const CATEGORY_ORDER: CategoryKey[] = [
  'definitions',
  'psychology',
  'neuroscience',
  'psychiatry',
  'behavior',
  'sexual-health',
  'treatment',
  'assessment',
];

export const CATEGORY_META: Record<CategoryKey, { title: string; description: string }> = {
  'definitions': {
    title: 'Definitions',
    description:
      'Core terms and their clinical status. Includes terms used by communities (e.g. "flatline") that have no formal clinical definition.',
  },
  psychology: {
    title: 'Psychology',
    description:
      'Psychological concepts relevant to problematic pornography use: habit, craving, cue reactivity, emotion regulation, and relapse.',
  },
  neuroscience: {
    title: 'Neuroscience',
    description:
      'What brain-imaging and neuroscience research has — and has not — established about reward, dopamine, and cue reactivity.',
  },
  psychiatry: {
    title: 'Psychiatry',
    description:
      'Diagnostic classification: CSBD in the ICD-11, the behavioural-addiction debate, and impulse-control disorders.',
  },
  behavior: {
    title: 'Behavior',
    description:
      'Behaviour-level concepts: compulsive sexual behaviour, problematic pornography use, and the urge-versus-craving distinction.',
  },
  'sexual-health': {
    title: 'Sexual Health',
    description:
      'Sexual-health topics such as erectile dysfunction. Evidence is presented honestly, including where causality is not established.',
  },
  treatment: {
    title: 'Treatment',
    description:
      'What is known about treatment approaches, and when and how to seek professional help. No treatment promises.',
  },
  assessment: {
    title: 'Assessment',
    description:
      'The scientific limits of self-assessment and screening tools, and why this site does not offer a self-diagnosis tool.',
  },
};

// Phase 2 (Part 9): EVIDENCE STRENGTH — five levels
export const EVIDENCE_LABELS: Record<string, string> = {
  strong: 'Strong',
  moderate: 'Moderate',
  limited: 'Limited',
  mixed: 'Mixed',
  uncertain: 'Uncertain',
};
// Phase 2 (Part 9): SOURCE TYPE — separate from evidence strength
export const SOURCE_TYPE_LABELS: Record<string, string> = {

  'diagnostic-classification': 'Diagnostic classification',
  'systematic-review': 'Systematic review',
  'meta-analysis': 'Meta-analysis',
  'rct': 'Randomized controlled trial',
  'cohort-study': 'Cohort study',
  'cross-sectional': 'Cross-sectional study',
  'neuroimaging': 'Neuroimaging study',
  'clinical-study': 'Clinical study',
  'qualitative': 'Qualitative study',
  'case-report': 'Case report',
  'expert-commentary': 'Expert commentary',
  'community-report': 'Community report',
};

export const TIER_LABELS: Record<number, string> = {
  1: 'Tier 1 — Clinical guideline / international classification',
  2: 'Tier 2 — Peer-reviewed study / review',
  3: 'Tier 3 — Clinical reports / weaker evidence',
  4: 'Tier 4 — Community observation / anecdote',
};

export const TIER_SHORT: Record<number, string> = {
  1: 'Tier 1',
  2: 'Tier 2',
  3: 'Tier 3',
  4: 'Tier 4',
};

export const RESEARCH_TYPE_LABELS: Record<string, string> = {
  'systematic-review': 'Systematic review / meta-analysis',
  'cross-sectional': 'Cross-sectional study',
  'diagnostic-classification': 'Diagnostic classification',
  conceptual: 'Conceptual / review paper',
  'cohort': 'Cohort / longitudinal study',
  'qualitative': 'Qualitative study',
  'other': 'Other',
};
