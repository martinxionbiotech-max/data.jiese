// Evidence Matrix — 10 核心主题的证据矩阵（仅引用真实存在的集合 ID）
export interface MatrixTopic {
  topic_id: string;
  title: string;
  claim: string;
  claim_id: string;         // claims 集合
  research_ids: string[];   // research 集合（真实 ID）
  current_interpretation: string;
}
export const MATRIX_TOPICS: MatrixTopic[] = [
  {
    topic_id: "pornography-ed",
    title: "Pornography and erectile dysfunction",
    claim: "Pornography causes erectile dysfunction",
    claim_id: "pornography-causes-ed",
    research_ids: ["park-2016-pied", "landripet-2015", "prause-pfaus-2015"],
    current_interpretation: "Case reports describe improvements after stopping, but population studies found no association. Anxiety about 'porn-induced ED' may itself contribute to performance problems. Plausible, unproven, and confounded.",
  },
  {
    topic_id: "pornography-mental-health",
    claim: "Pornography use harms mental health",
    claim_id: "porn-use-always-addiction",
    research_ids: ["grubbs-2019-moral-incongruence", "bothe-2019-impulsivity", "grubbs-2019-self-reported-addiction"],
    current_interpretation: "Distress about use — not amount of use — is the strongest correlate of self-perceived problems. The distress is real; the causal path from use to disorder is not established.",
  },
  {
    topic_id: "pornography-anxiety",
    claim: "Pornography use causes anxiety",
    claim_id: "porn-use-always-addiction",
    research_ids: ["grubbs-2019-moral-incongruence", "brand-2016-ipace"],
    current_interpretation: "Anxiety co-occurs with problematic use, but causal direction is unresolved; moral incongruence research suggests much reported anxiety tracks beliefs about use rather than use itself.",
  },
  {
    topic_id: "pornography-depression",
    claim: "Pornography use causes depression",
    claim_id: "porn-use-always-addiction",
    research_ids: ["bothe-2019-impulsivity", "grubbs-2019-self-reported-addiction"],
    current_interpretation: "Correlational associations exist; whether use precedes depression, follows it, or shares underlying causes (e.g., loneliness, stress) is not established.",
  },
  {
    topic_id: "pornography-sleep",
    claim: "Pornography use harms sleep",
    claim_id: "porn-permanently-damages-brain",
    research_ids: ["brand-2016-ipace"],
    current_interpretation: "Late-night use patterns are reported in communities, but direct research on pornography use and sleep is scarce; screen use in bed confounds any specific effect.",
  },
  {
    topic_id: "pornography-withdrawal",
    claim: "Pornography withdrawal is a real clinical syndrome",
    claim_id: "porn-withdrawal-clinical-syndrome",
    research_ids: ["de-alarcon-2019-systematic-review"],
    current_interpretation: "People report discomfort after stopping; no established clinical withdrawal syndrome with defined symptoms and timeline exists in the literature.",
  },
  {
    topic_id: "dopamine-claims",
    claim: "Pornography depletes or damages dopamine",
    claim_id: "porn-permanently-damages-brain",
    research_ids: ["voon-2014-cue-reactivity", "gola-2017-fmri", "stark-2018-neuroscience-review", "steele-2013-sexual-desire", "prause-2015-lpp"],
    current_interpretation: "Reward-system involvement is supported; 'depletion' or 'damage' narratives are not. Neuroimaging findings are small, mixed, and cannot be translated into everyday brain-damage claims.",
  },
  {
    topic_id: "compulsive-sexual-behavior",
    claim: "Compulsive sexual behavior is a recognized clinical entity",
    claim_id: "porn-addiction-real-diagnosis",
    research_ids: ["csbd-icd11", "kraus-2018-csbd-icd11", "kraus-2016-should-csb-addiction", "dsm5-2013"],
    current_interpretation: "CSBD is an official ICD-11 diagnosis classified among impulse-control disorders. Its classification (not its existence) is what remains debated.",
  },
  {
    topic_id: "problematic-pornography-use",
    claim: "Problematic pornography use is defined by consequences, not amount",
    claim_id: "porn-use-always-addiction",
    research_ids: ["bothe-2018-ppcs", "grubbs-2019-moral-incongruence"],
    current_interpretation: "The PPU construct — distress, impaired control, life interference — is the field's standard; frequency alone is a weak predictor of problems.",
  },
  {
    topic_id: "behavioral-interventions",
    claim: "Self-help and habit-replacement approaches help recovery",
    claim_id: "blockers-prevent-relapse",
    research_ids: ["de-alarcon-2019-systematic-review", "walton-2017-hypersexuality"],
    current_interpretation: "Direct treatment trials for PPU are scarce; general behavior-change science (habit replacement, environment change) is plausible and widely used, but not yet validated in PPU-specific trials.",
  },
];
