const i18n = {
  "en": {
    "nav_dashboard": "Results",
    "nav_summary": "Key findings",
    "nav_claims": "What we can conclude",
    "nav_appendix": "Detailed evidence",
    "eyebrow": "Financial ML &middot; Quantum Kernel Benchmark &middot; Bitcoin Direction Forecasting",
    "hero_title": "Testing Quantum Machine Learning Under Rigorous Financial Validation",
    "hero_subtitle": "A leakage-safe study of Bitcoin direction forecasting at 1-, 7-, and 30-day horizons. QSVM is compared with two classical RBF-SVM baselines using nested rolling walk-forward validation, horizon-aware purging, post-hoc trading/risk analysis, and quantum-kernel diagnostics.",
    "hero_positioning": "The study starts from a neutral question: does a simulated quantum fidelity kernel add useful, task-relevant value beyond strong classical kernels? The design therefore keeps future information out of training, separates model selection from testing, and treats predictive, financial, and quantum-structural evidence as different questions.",
    "hero_chip_leakage": "Leakage-safe",
    "hero_chip_horizon": "Three forecast horizons",
    "hero_chip_trading": "Post-hoc trading/risk",
    "hero_chip_diagnostic": "Quantum diagnostics",
    "final_answer_label": "Bottom line",
    "final_answer_title": "<span class=\"answer-highlight-main\">QSVM’s clearest advantage appears at 1 day.</span><span class=\"answer-highlight-sub\">That advantage is confined to classification.</span>",
    "final_answer_text": "At the 1-day horizon, QSVM outperforms both classical baselines in classification and the result remains supported after the full statistical robustness checks. At 7 days, QSVM is competitive but not robustly superior; at 30 days, there is no QSVM classification advantage. The trading/risk analysis does not support QSVM trading superiority, and the richer quantum-kernel geometry does not establish quantum advantage. All quantum results come from exact statevector simulation, not physical hardware.",
    "kpi_folds_label": "Walk-forward folds",
    "kpi_folds_note": "27 matched out-of-sample test periods per horizon",
    "kpi_horizons_label": "Forecast horizons",
    "kpi_horizons_note": "1, 7, and 30 days ahead",
    "kpi_layers_label": "Evidence layers",
    "kpi_layers_note": "Classification, stability, trading/risk, and quantum-kernel diagnostics",
    "kpi_num": "2",
    "kpi_adv_label": "Classical baselines",
    "kpi_adv_note": "RBF_PCA provides the dimension-controlled comparison; RBF_FULL provides the full-feature comparison.",
    "summary_kicker": "Key findings",
    "summary_title": "The answer changes with the forecast horizon",
    "summary_desc": "There is no single winner across all horizons. The strongest result appears at 1 day, the 7-day evidence is mixed, and the 30-day result favors the dimension-controlled classical comparator descriptively.",
    "hx_kicker": "Interactive evidence view",
    "hx_title": "Follow the result horizon by horizon",
    "hx_intro": "Choose a forecast horizon, then move through the evidence one layer at a time—from classification to the final claim.",
    "hx_tab_1": "1 day",
    "hx_tab_7": "7 days",
    "hx_tab_30": "30 days",
    "hx_context_role": "Evidence path",
    "hx_classification_label": "Classification",
    "hx_statistics_label": "Statistical robustness",
    "hx_trading_label": "Trading / risk",
    "hx_verdict_label": "Supported interpretation",
    "summary_integrated_label": "Integrated takeaway",
    "sum1_title": "1 day · Robust QSVM classification advantage",
    "sum1_text": "QSVM reaches mean F1 = 0.4760, compared with 0.4400 for RBF_PCA and 0.4249 for RBF_FULL. The advantage over both baselines survives Holm-corrected paired tests and circular moving-block bootstrap checks.",
    "sum2_title": "7 days · Competitive, but not robustly superior",
    "sum2_text": "QSVM has the highest mean F1 at 0.4600, but the statistical picture is mixed. The comparison with RBF_FULL is not significant, while the result against RBF_PCA is not consistent across the paired tests and bootstrap block lengths.",
    "sum3_title": "30 days · No QSVM classification advantage",
    "sum3_text": "RBF_PCA has the strongest descriptive profile at this horizon, with mean F1 = 0.3977 versus 0.3832 for QSVM. Neither the paired tests nor the block-bootstrap analysis supports a QSVM advantage.",
    "sum4_title": "Better classification does not automatically mean better finance—or quantum advantage",
    "sum4_text": "At the central transaction cost of 0.0015 per side, every model has a negative total return and QSVM is never the best-Sharpe model. QSVM also has a much higher effective rank than RBF_PCA, but target alignment is small and horizon-dependent. The extra kernel richness is therefore structural evidence, not quantum advantage.",
    "dashboard_kicker": "Main results",
    "dashboard_title": "The interpretation changes as more evidence is added",
    "dashboard_desc": "A higher F1 score tells only part of the story. We also ask whether the difference is statistically robust, whether the same out-of-sample predictions remain meaningful after trading costs and risk, and whether the quantum kernel is better aligned with the prediction target.",
    "chart1_title": "Directional classification",
    "chart1_desc": "Mean macro F1 across 27 matched outer walk-forward test folds for each forecast horizon.",
    "chart1_sowhat": "<strong>What it means:</strong> QSVM leads descriptively at 1 and 7 days, but not at 30 days. After the full robustness checks, a QSVM superiority claim is supported only for the 1-day classification task.",
    "chart2_title": "Post-hoc trading/risk interpretation",
    "chart2_desc": "Sharpe ratio from the predefined out-of-sample trading/risk protocol at a transaction cost of 0.0015 per side.",
    "chart2_sowhat": "<strong>What it means:</strong> The financial layer tells a different story. RBF_FULL has the best central-cost Sharpe at 1 and 7 days, while RBF_PCA is best at 30 days. All central-cost total returns are negative, so the results do not support QSVM trading superiority.",
    "gap_title": "The 1-day classification gain does not carry over to trading performance",
    "gap_desc": "QSVM has a statistically robust 1-day classification advantage, yet the same clean out-of-sample predictions produce weaker risk-adjusted trading results under the fixed execution rule and transaction-cost assumptions.",
    "gap_sowhat": "<strong>Why this matters:</strong> This is the clearest example of why financial ML should not stop at a predictive metric. QSVM improves F1 at 1 day, but higher turnover and transaction costs weaken the financial interpretation of that signal.",
    "metric_f1": "Mean F1",
    "metric_sharpe": "Sharpe ratio",
    "metric_return": "Total return",
    "metric_turnover": "Turnover",
    "diag_title": "A richer quantum kernel is interesting—but it is not quantum advantage",
    "diag_desc": "On representative early, middle, and late folds (0, 13, and 26), using the same 1,024 observations for both kernels, QSVM has a substantially higher effective rank than RBF_PCA. The kernels are related but clearly not identical, while their target-alignment differences remain small and depend on the horizon.",
    "diag_sowhat": "<strong>What it means:</strong> QSVM creates a richer similarity geometry, but that geometry is not consistently better aligned with the direction target and does not produce consistent predictive or financial superiority. It therefore cannot be used as evidence of computational, hardware-level, or task-relevant quantum advantage.",
    "decision_kicker": "Research takeaway",
    "decision_title": "The strongest defensible result is the 1-day classification advantage",
    "decision_text": "Within the tested setting, QSVM is a meaningful simulation-based quantum-kernel benchmark and has a robust classification advantage at 1 day. The evidence does not support robust superiority at 7 days, any QSVM classification advantage at 30 days, QSVM trading superiority, or quantum advantage.",
    "claim_kicker": "Interpretation boundary",
    "claim_title": "What the study supports—and where the evidence stops",
    "claim_desc": "The conclusions are tied to the full set of evidence: classification, fold-level robustness, the fixed post-hoc trading/risk analysis, and simulation-based quantum-kernel diagnostics.",
    "claim_supported_title": "Supported by the study",
    "claim_qualified_title": "Supported with limits",
    "claim_not_title": "Not supported",
    "claim_supported_html": "<li>A robust QSVM classification advantage at the 1-day horizon.</li><li>QSVM remains competitive at 7 days, but without robust superiority.</li><li>RBF_PCA has the strongest descriptive classification-stability profile at 30 days.</li><li>QSVM produces a richer simulated kernel geometry than RBF_PCA.</li>",
    "claim_qualified_html": "<li>Classification strength is not the same as overall model superiority.</li><li>The trading/risk results are a fixed diagnostic of out-of-sample predictions, not a deployable trading strategy.</li><li>Higher effective rank shows richer geometry, not greater usefulness by itself.</li><li>The findings are specific to this dataset, feature set, forecast horizons, and validation protocol.</li>",
    "claim_not_html": "<li>General QSVM superiority.</li><li>QSVM trading superiority or proven investment profitability.</li><li>A QSVM classification advantage at 30 days.</li><li>Quantum computational speedup, an entanglement contribution, or physical-hardware quantum advantage.</li>",
    "appendix_kicker": "Detailed evidence",
    "appendix_title": "Detailed result tables",
    "appendix_desc": "These tables provide the numerical detail behind the charts and summary findings, including classification, trading/risk, and integrated evidence by forecast horizon.",
    "table_classification": "Classification and stability table",
    "table_trading": "Trading/risk table",
    "table_decision": "Integrated evidence table",
    "table_diagnostic": "Quantum-kernel diagnostics table",
    "table_verdict": "Final interpretation table",
    "axis_f1": "Mean F1",
    "axis_sharpe": "Sharpe ratio",
    "axis_rank": "Effective rank",
    "chart_hover_horizon": "Horizon",
    "chart_hover_f1": "Mean F1",
    "chart_hover_sharpe": "Sharpe ratio",
    "chart_hover_rank": "Effective rank",
    "diag_annotation": "Folds 0, 13, 26 · matched n = 1,024",
    "footer": "Bilingual research showcase · Graduate School of Applied Statistics, NIDA · Classical and quantum kernel benchmarking for Bitcoin direction forecasting",
    "nav_research": "Research question",
    "nav_dataset": "Data",
    "nav_method": "Method",
    "nav_quantum": "Quantum",
    "deep_dive_kicker": "Technical details",
    "deep_dive_title": "Explore the evaluation design",
    "deep_dive_intro": "Expand this section for the model roles, QSVM kernel construction, leakage controls, and the framework used to connect each evidence layer to its interpretation.",
    "rq_kicker": "Research question",
    "rq_title": "The question is not simply “which model wins?”",
    "rq_desc": "A single average score is not enough to judge a financial QML claim. The study asks whether QSVM adds task-relevant value, then checks that question through classification, stability across time, a fixed trading/risk interpretation, and quantum-kernel diagnostics.",
    "rq_main_label": "Main question",
    "rq_main_question": "Does QSVM provide task-relevant value beyond classical kernel baselines when Bitcoin direction is forecast under a leakage-safe, multi-horizon protocol?",
    "rq_card1_title": "Can it predict direction better?",
    "rq_card1_text": "Compare QSVM with RBF_PCA and RBF_FULL on 1-, 7-, and 30-day Bitcoin direction classification.",
    "rq_card2_title": "Does the result hold across time?",
    "rq_card2_text": "Check mean performance together with cross-fold dispersion and the worst-performing walk-forward period.",
    "rq_card3_title": "Does the signal still make sense financially?",
    "rq_card3_text": "Use only clean out-of-sample predictions, then examine transaction costs, turnover, Sharpe ratio, return, and drawdown under one fixed execution rule.",
    "rq_card4_title": "What does the quantum kernel actually add?",
    "rq_card4_text": "Compare the QSVM and RBF_PCA kernels through similarity, effective rank, and target alignment to distinguish structural difference from task-relevant advantage.",
    "rq_boundary_note": "Each evidence layer answers a different question. Predictive performance, statistical robustness, financial interpretation, and kernel structure are therefore evaluated separately before the findings are interpreted together.",
    "btc_kicker": "Why Bitcoin?",
    "btc_title": "A difficult real-world stress test for model evaluation",
    "btc_desc": "Bitcoin is used as a volatile financial time series—not as an investment recommendation. Its noise, non-stationarity, continuous trading, and mix of market, network, and macroeconomic signals make it a demanding setting for comparing classical and quantum kernels.",
    "btc_narrative": "Financial forecasting can be deceptive when evaluation is too simple. A model may look stronger on a classification metric but lose that advantage once different market periods, turnover, transaction costs, or drawdowns are considered. Bitcoin makes this tension easy to see because its behavior changes sharply over time and draws information from several domains. That makes it useful for testing whether an apparent QSVM advantage survives more than one kind of evidence.",
    "btc_boundary_note": "Bitcoin is the test environment in this study, not a recommended asset, a trading signal, or the basis of an investment claim.",
    "btc_card1_title": "High volatility",
    "btc_card1_text": "Large and rapid price moves make weak model assumptions easier to expose.",
    "btc_card2_title": "Non-stationarity",
    "btc_card2_text": "Patterns that work in one period may weaken or reverse as market conditions change.",
    "btc_card3_title": "Multiple information sources",
    "btc_card3_text": "The model sees market/technical, on-chain, and macroeconomic predictors rather than price information alone.",
    "btc_card4_title": "Prediction is not the same as financial usefulness",
    "btc_card4_text": "A classification gain may disappear once execution timing, turnover, costs, and drawdown are considered.",
    "btc_card5_title": "Strict validation is essential",
    "btc_card5_text": "Walk-forward testing, train-only preprocessing, and horizon-aware purging are used to reduce optimistic bias from future information.",
    "flow_classification": "Classification",
    "flow_stability": "Stability",
    "flow_trading": "Trading/risk",
    "flow_diagnostics": "Kernel diagnostics",
    "flow_boundary": "Final claim",
    "revisit_kicker": "Evidence logic",
    "revisit_title": "Revisit the evidence",
    "revisit_desc": "Follow the study's evidence logic from predictive performance to the final claim.",
    "revisit_aria": "Revisit the study evidence",
    "data_kicker": "Dataset",
    "data_title": "3,592 daily observations and 16 predictors across three information domains",
    "data_desc": "The final dataset spans 31 January 2016 to 30 November 2025 on a daily UTC calendar. The same 16 predictors are used for the 1-, 7-, and 30-day direction tasks.",
    "data_narrative": "Each horizon is a separate binary classification problem. Using information available at or before date t, the model predicts whether the Bitcoin close at t+h will be higher than the close at t. To reduce look-ahead risk, all four on-chain and five macroeconomic predictors are shifted back by exactly one day before modeling.",
    "data_asset_label": "Data",
    "data_asset_value": "Bitcoin daily data · 3,592 observations · UTC calendar",
    "data_period_label": "Coverage",
    "data_period_value": "31 January 2016 to 30 November 2025",
    "data_domains_label": "Predictors",
    "data_domains_value": "16 total: 7 market/technical + 4 on-chain + 5 macroeconomic",
    "data_horizons_label": "Forecast tasks",
    "data_horizons_value": "Direction at 1, 7, and 30 days ahead",
    "data_validation_label": "Out-of-sample design",
    "data_validation_value": "Nested rolling walk-forward · 27 outer folds per horizon",
    "data_leakage_label": "Timing controls",
    "data_leakage_value": "1-day exogenous lag + horizon-aware purging at outer and inner boundaries",
    "data_domain1_label": "Market / technical",
    "data_domain2_label": "On-chain",
    "data_domain3_label": "Macroeconomic",
    "data_lag_badge": "1-day exogenous lag",
    "data_folds_badge": "27 outer folds",
    "data_clarification_note": "A forecast horizon is the number of days ahead being predicted—not the historical input window. In the 7-day task, for example, information available at date t is used to predict whether the Bitcoin close at t+7 will be higher than the close at t.",
    "detail_feature_market": "7 predictors: log return, 30-day rolling volatility, ATR14, RSI14, MACD, the SMA7/SMA30 ratio, and trading volume.",
    "detail_feature_onchain": "4 predictors: active address count, transaction count, hash rate, and mean transaction fee in native units. Each is lagged by exactly one day before modeling.",
    "detail_feature_macro": "5 predictors: U.S. Dollar Index (DXY), gold price, S&P 500, VIX, and U.S. 10-year Treasury yield. Each is lagged by exactly one day before modeling.",
    "detail_horizon_1d": "Short horizon: use information available at date t to predict whether the Bitcoin close at t+1 will be higher than at t.",
    "detail_horizon_7d": "Medium horizon: use information available at date t to predict whether the Bitcoin close at t+7 will be higher than at t.",
    "detail_horizon_30d": "Longer horizon: use information available at date t to predict whether the Bitcoin close at t+30 will be higher than at t.",
    "detail_validation_lag": "Every on-chain and macroeconomic predictor is lagged by one day. Training observations are also removed whenever their h-step target would extend into the next validation or test period.",
    "detail_validation_folds": "Each horizon uses the same 27 outer test folds: a 3-year rolling candidate training window followed by a 3-month test window, advancing 3 months at a time. Model selection inside each outer fold uses three chronological inner validation splits, each 3 months long.",
    "timeline_context_dataset": "Daily UTC Bitcoin data",
    "timeline_context_period": "31 Jan 2016 – 30 Nov 2025",
    "timeline_context_folds": "27 rolling out-of-sample folds per horizon",
    "timeline_context_label": "Study coverage",
    "pipeline_kicker": "Evaluation pipeline",
    "pipeline_title": "Every step is designed to keep future information out of training",
    "pipeline_desc": "Chronological splitting alone is not enough for multi-horizon labels. The protocol also removes training observations whose future target endpoint would cross into the next validation or test period.",
    "pipeline_narrative_1": "The pipeline starts from one daily UTC dataset with 3,592 observations and 16 predictors. Separate binary direction labels are built for 1, 7, and 30 days ahead, and all on-chain and macroeconomic inputs are lagged by one day.",
    "pipeline_narrative_2": "Within each outer fold, horizon-aware purging is applied before any data-dependent fitting. Scaling and PCA are learned from training data only. Hyperparameter selection is carried out inside three chronological inner validation splits using the same purge rule, and the outer test fold stays untouched until the final prediction.",
    "pipeline_step1_title": "Daily UTC dataset",
    "pipeline_step1_text": "3,592 observations and 16 predictors covering 31 Jan 2016 to 30 Nov 2025.",
    "pipeline_step2_title": "Lag exogenous inputs",
    "pipeline_step2_text": "Shift every on-chain and macroeconomic predictor back by exactly one day.",
    "pipeline_step3_title": "Build each horizon separately",
    "pipeline_step3_text": "Create y = 1[Close(t+h) > Close(t)] independently for h = 1, 7, and 30 days.",
    "pipeline_step4_title": "Roll forward and purge target overlap",
    "pipeline_step4_text": "Use a 3-year candidate training window, a 3-month test window, and a 3-month step; remove any training row whose target reaches into the next evaluation period.",
    "pipeline_step5_title": "Fit preprocessing on training data only",
    "pipeline_step5_text": "Estimate standardization and, where needed, the fixed 8-component PCA using only the eligible training partition.",
    "pipeline_step6_title": "Select C inside the training fold",
    "pipeline_step6_text": "Choose C from {0.1, 1.0, 10.0} using three chronological 3-month inner validation splits with the same horizon-aware purge.",
    "pipeline_step7_title": "Predict the untouched test fold",
    "pipeline_step7_text": "Refit the selected pipeline on eligible outer-training data, then evaluate it once on the held-out outer test period.",
    "pipeline_step8_title": "Use OOS predictions only for evaluation",
    "pipeline_step8_text": "Store the out-of-sample predictions for classification and the fixed post-hoc trading/risk analysis. Quantum diagnostics are computed separately on predefined folds.",
    "pipeline_trust_note": "RBF_FULL and RBF_PCA use all eligible training observations. Because exact quantum-kernel construction is expensive, QSVM uses at most the 1,024 most recent eligible observations after purging. A separate matched-1,024 classical control checks whether that smaller training set alone explains the short-horizon result; it does not replace the primary classical baselines.",
    "roles_kicker": "Model roles",
    "roles_title": "Each baseline answers a different comparison question",
    "roles_desc": "QSVM is not treated as the expected winner. The classical baselines are chosen so that one controls for input dimensionality and the other represents a strong full-feature kernel model.",
    "roles_narrative_1": "QSVM stays within the SVM framework but changes how similarity is computed: a quantum-generated fidelity kernel replaces the classical RBF kernel. That makes kernel-based classical models the most direct reference points.",
    "roles_narrative_2": "RBF_PCA controls the representation dimension by using the same eight-component PCA input as QSVM. RBF_FULL keeps all 16 predictors and acts as the full-feature classical benchmark. Together, the two baselines help separate a quantum-kernel effect from a dimensionality or feature-set effect.",
    "role_qsvm_title": "QSVM · Quantum-kernel benchmark",
    "role_qsvm_text": "Uses the same eight-component train-fitted PCA representation as RBF_PCA, then computes a precomputed quantum fidelity kernel with exact statevector simulation. Each training partition is capped at the 1,024 most recent eligible observations.",
    "role_rbf_pca_title": "RBF_PCA · Dimension-controlled comparator",
    "role_rbf_pca_text": "Uses a classical RBF kernel on the same eight-component PCA representation as QSVM, making it the closest structural classical comparison.",
    "role_rbf_full_title": "RBF_FULL · Full-feature classical benchmark",
    "role_rbf_full_text": "Uses a classical RBF kernel on all 16 predictors and all eligible training observations.",
    "roles_interpretation_rule": "All three SVMs use class_weight = balanced and the same C grid {0.1, 1.0, 10.0}; the two RBF models use gamma = scale. The matched-1,024 classical analysis is a fairness check, not a replacement for the main full-eligible classical baselines.",
    "leak_kicker": "Leakage controls",
    "leak_title": "Protecting both the feature timeline and the future target boundary",
    "leak_desc": "The final protocol controls more than train/test order. It also prevents target overlap near every outer and inner boundary and keeps preprocessing, model selection, trading interpretation, and diagnostics from using the outer test period.",
    "leak_narrative_1": "The protocol is designed so that information flows forward in time. Data alignment, feature lagging, label construction, train/test splitting, preprocessing, PCA, model selection, and OOS prediction all follow this principle. Any transformation that learns from the data is fitted only inside the training fold. The test fold is used only after the model and transformations are fixed.",
    "leak_narrative": "For an observation dated t with forecast horizon h, the row is allowed into a training set only if the future price needed to form its label at t+h is fully realized before the next validation or test period begins. The same rule is applied at outer and inner boundaries. Only after this purge are scaling, PCA, kernel centering, and model fitting learned from the remaining training data.",
    "leak_control1_title": "Chronological walk-forward testing",
    "leak_control1_text": "27 outer folds per horizon, using a 3-year candidate training window, a 3-month test window, and a 3-month step.",
    "leak_control2_title": "One-day lag for exogenous data",
    "leak_control2_text": "All on-chain and macroeconomic predictors are shifted by exactly one day before they enter the models.",
    "leak_control3_title": "Outer horizon-aware purge",
    "leak_control3_text": "Remove any outer-training row whose h-step target would reach or cross the start of the outer test period.",
    "leak_control4_title": "Inner horizon-aware purge",
    "leak_control4_text": "Apply the same target-endpoint rule at every inner training–validation boundary during hyperparameter selection.",
    "leak_control5_title": "Train-only preprocessing and tuning",
    "leak_control5_text": "Fit scaling, the fixed eight-component PCA where applicable, and C selection using eligible training data only.",
    "leak_control6_title": "Untouched outer test fold",
    "leak_control6_text": "Use the outer test period only after preprocessing and model choices have been fixed.",
    "leak_control7_title": "QSVM cap and kernel centering",
    "leak_control7_text": "Apply the 1,024-observation QSVM cap only after purging, choose the most recent eligible rows, and derive centering statistics from the training kernel only.",
    "leak_control8_title": "Fixed post-hoc trading protocol",
    "leak_control8_text": "Use clean OOS predictions only; enter at Open(t+1), exit at Open(t+h+1), enforce one global non-overlapping sequence across folds, and evaluate predefined transaction-cost scenarios.",
    "leak_control9_title": "Diagnostics stay post-hoc",
    "leak_control9_text": "Kernel diagnostics use predefined folds 0, 13, and 26 with matched samples. They never influence preprocessing, tuning, or model selection.",
    "leak_trust_note": "The final checks found no target-overlap violations at outer or inner boundaries and no inner validation period crossing into the corresponding outer test period. Dates, labels, and return fields were also aligned across models before paired statistical comparisons.",
    "ladder_kicker": "How the evidence is read",
    "ladder_title": "Each layer answers a different question",
    "ladder_desc": "The study does not turn one chart into a broad superiority claim. It moves from prediction to robustness, then to financial interpretation and kernel diagnostics, before deciding what can safely be concluded.",
    "ladder_narrative_1": "A higher mean F1 can show stronger classification, but it cannot by itself prove financial usefulness. A richer quantum kernel can show a different representation, but it cannot by itself prove quantum advantage. Looking at dispersion and the worst fold also matters because an acceptable average can hide sharp failures in difficult market periods.",
    "ladder_narrative": "A higher mean F1 can show stronger classification, but it cannot by itself prove financial usefulness. A richer quantum kernel can show a different representation, but it cannot by itself prove quantum advantage. Looking at dispersion and the worst fold also matters because an acceptable average can hide sharp failures in difficult market periods.",
    "ladder1_title": "Classification",
    "ladder1_question": "Which model predicts direction better?",
    "ladder1_can": "Relative predictive performance",
    "ladder1_cannot": "Trading superiority or quantum advantage",
    "ladder2_title": "Stability across time",
    "ladder2_question": "How consistent is performance across folds, and how weak is the worst fold?",
    "ladder2_can": "Temporal consistency and downside stability",
    "ladder2_cannot": "Profitability, deployment readiness, or hardware advantage",
    "ladder3_title": "Trading/risk interpretation",
    "ladder3_question": "What happens when the same OOS predictions face execution timing, costs, turnover, and drawdown?",
    "ladder3_can": "Economic interpretation under the fixed protocol",
    "ladder3_cannot": "Live-trading readiness or investment advice",
    "ladder4_title": "Quantum-kernel diagnostics",
    "ladder4_question": "Is the QSVM kernel structurally different, and is that difference useful for the target?",
    "ladder4_can": "Evidence about representation geometry",
    "ladder4_cannot": "Quantum advantage on its own",
    "ladder5_title": "Final interpretation",
    "ladder5_question": "What remains true after all four layers are considered together?",
    "ladder5_can": "A bounded, horizon-specific conclusion",
    "ladder5_cannot": "Claims beyond the tested setting",
    "ladder_bridge_note": "The evidence is interpreted in sequence: first the observed performance, then its robustness, then its practical and structural meaning, and finally the claim that the combined evidence can support.",
    "ladder_question_label": "Question:",
    "ladder_can_label": "Can tell us:",
    "ladder_cannot_label": "Cannot establish:",
    "qsvm_kicker": "How the QSVM kernel is built",
    "qsvm_title": "From eight PCA features to quantum similarity",
    "qsvm_desc": "QSVM keeps the SVM classifier but replaces the classical RBF similarity with a precomputed fidelity kernel derived from eight-qubit RY angle encoding. The kernel is evaluated deterministically with a statevector simulator, not on physical quantum hardware.",
    "qsvm_narrative_1": "Inside each training partition, standardization and the fixed eight-component PCA are fitted from training data only. Each PCA component controls one RY rotation. A fixed nearest-neighbor CNOT chain is then applied, and the kernel value between two samples is the squared overlap of their encoded states.",
    "qsvm_narrative_2": "The CNOT chain is the same for every input and is applied after the data-dependent RY rotations. Because the same unitary acts on both states, it preserves their inner product and does not change the fidelity kernel. The observed QSVM result is therefore attributed to the tested angle-encoded fidelity representation—not to an entanglement contribution. The kernel is computed with PennyLane default.qubit exact statevectors.",
    "qsvm_loop_badge": "Auto-loop explainer",
    "qsvm_loop_title": "How one quantum-kernel similarity value is formed",
    "qsvm_loop_caption": "Two observations are mapped into quantum states, compared by fidelity, and converted into one kernel entry before the full matrix is passed to a classical SVM.",
    "qsvm_detail_summary": "View the detailed 8-step QSVM mechanism",
    "qsvm_card1_title": "What changes from a classical SVM?",
    "qsvm_card1_text": "The SVM learning framework remains; the similarity function is replaced by a quantum-generated fidelity kernel.",
    "qsvm_card2_title": "What is actually simulated?",
    "qsvm_card2_text": "PennyLane default.qubit computes exact statevectors and their fidelity kernel. No physical quantum processor is used.",
    "qsvm_card3_title": "What hardware effects are absent?",
    "qsvm_card3_text": "There is no finite-shot sampling, gate or measurement noise, decoherence, device calibration, or hardware execution latency.",
    "qsvm_card4_title": "What cannot be inferred from a richer kernel?",
    "qsvm_card4_text": "A different or higher-rank kernel does not automatically imply better prediction, better trading results, computational speedup, or quantum advantage.",
    "qsvm_card5_title": "What are the diagnostics for?",
    "qsvm_card5_text": "Effective rank, kernel correlation, and target alignment describe the learned similarity structure after the fact. They are not used to select models and cannot establish an advantage on their own.",
    "qsvm_diagnostic_bridge": "Across predefined folds 0, 13, and 26, using the same 1,024 observations for both kernels, QSVM effective rank is about 142.4–143.9 versus 36.0–36.2 for RBF_PCA. Pearson correlations are about 0.7065–0.7123 and Spearman correlations 0.5341–0.5490. Direction-alignment differences are small and become negative for QSVM at 30 days, so the richer geometry is not evidence of quantum advantage.",
    "qsvm_step1_title": "Input predictors",
    "qsvm_step1_text": "Market/technical features plus one-day-lagged on-chain and macroeconomic predictors.",
    "qsvm_step2_title": "Train-fitted PCA · 8 dimensions",
    "qsvm_step2_text": "Standardize and reduce to eight components using training data only. RBF_PCA uses this same representation.",
    "qsvm_step3_title": "RY angle encoding",
    "qsvm_step3_text": "Encode each PCA component with an RY rotation on the corresponding qubit.",
    "qsvm_step4_title": "Fixed CNOT chain",
    "qsvm_step4_text": "Apply the same nearest-neighbor CNOT chain after the data-dependent rotations; because it is common to both states, it does not change pairwise fidelity.",
    "qsvm_step5_title": "Squared state overlap",
    "qsvm_step5_text": "Define similarity as the squared overlap between the two encoded statevectors.",
    "qsvm_step6_title": "Leakage-safe kernel matrix",
    "qsvm_step6_text": "Build the kernel from at most the 1,024 most recent eligible training observations and derive centering statistics from the training kernel only.",
    "qsvm_step7_title": "SVM classifier",
    "qsvm_step7_text": "Pass the centered precomputed fidelity kernel to the SVM using the same restricted C grid as the classical models.",
    "qsvm_step8_title": "Out-of-sample direction prediction",
    "qsvm_step8_text": "Generate binary direction predictions for the untouched test fold at each horizon.",
    "dashboard_framing": "The headline result is deliberately narrow: QSVM has a robust classification advantage at 1 day, remains competitive without robust superiority at 7 days, and has no classification advantage at 30 days. The trading/risk and quantum-diagnostic layers narrow the interpretation further.",
    "classification_stat_note": "<span class=\"badge-focus gold evidence-badge\">Robust only at 1 day</span><br>At 1 day, QSVM remains significant against both RBF_FULL and RBF_PCA after Holm correction for both paired t-tests and Wilcoxon tests. The same advantage is supported by circular moving-block bootstrap checks at block lengths 2, 3, and 4. The 7-day evidence is mixed and not robust; at 30 days there is no QSVM advantage.",
    "gap_kicker": "Classification vs financial interpretation",
    "gap_classification_label": "Classification result",
    "gap_classification_text": "At 1 day, QSVM has mean F1 = 0.4760, compared with 0.4400 for RBF_PCA and 0.4249 for RBF_FULL, with robust statistical support over both baselines.",
    "gap_trading_label": "Trading/risk result",
    "gap_trading_text": "At the central cost of 0.0015 per side, QSVM has Sharpe = -0.5012, total return = -0.9685, and aggregate turnover = 1330. RBF_FULL has the least negative 1-day Sharpe at -0.3906.",
    "gap_interpretation": "The 1-day finding is therefore a classification result, not a trading claim. Under the fixed post-hoc protocol, better directional prediction does not translate into better risk-adjusted financial performance.",
    "diag_kicker": "Quantum-kernel diagnostics",
    "diag_interpretation": "The diagnostics confirm that QSVM creates a different and richer representation, but not a consistently more useful one. Higher effective rank is not accompanied by consistently better target alignment, classification, or economic performance.",
    "diag_kernel_label": "How similar are the two kernels?",
    "diag_kernel_pearson": "Pearson correlation: 0.7065 (1D), 0.7084 (7D), 0.7123 (30D)",
    "diag_kernel_spearman": "Spearman correlation: 0.5341 (1D), 0.5378 (7D), 0.5490 (30D)",
    "diag_rank_label": "How rich is the spectrum?",
    "diag_alignment_label": "How well does the kernel align with the target?",
    "diag_alignment_text": "Direction alignment (QSVM / RBF_PCA): 0.009073 / 0.006742 (1D), 0.025196 / 0.021750 (7D), and 0.071702 / 0.075119 (30D). The differences are +0.002331, +0.003446, and -0.003417. QSVM also has lower volatility-regime alignment than RBF_PCA at all three horizons.",
    "diag_rank_qsvm": "QSVM effective rank: 142.4 (1D), 143.2 (7D), 143.9 (30D)",
    "diag_rank_rbf": "RBF_PCA effective rank: 36.0 (1D), 36.0 (7D), 36.2 (30D)",
    "claim_boundary_text": "Taken together, the results support a robust 1-day QSVM classification advantage, qualified competitiveness at 7 days, and no QSVM classification advantage at 30 days. They do not support QSVM trading superiority or quantum advantage, and all quantum evidence is simulation-based.",
    "claim_card1_status": "Supported",
    "claim_card1_title": "Robust 1-day classification advantage",
    "claim_card1_text": "QSVM has the highest 1-day mean F1 (0.4760), and its advantage over both RBF_FULL and RBF_PCA survives Holm-corrected paired tests plus circular moving-block bootstrap checks at block lengths 2, 3, and 4.",
    "claim_card2_status": "Supported with limits",
    "claim_card2_title": "7-day competitiveness, not robust superiority",
    "claim_card2_text": "QSVM has the highest 7-day mean F1 (0.4600), but the statistical result is not consistent across both baselines, both paired tests, and all bootstrap block lengths. A robust superiority claim is therefore not supported.",
    "claim_card3_status": "Not supported",
    "claim_card3_title": "A 30-day QSVM classification advantage",
    "claim_card3_text": "RBF_PCA has the strongest descriptive classification-stability profile at 30 days, and neither the paired tests nor the block-bootstrap analysis supports a QSVM advantage.",
    "claim_card4_status": "Not supported",
    "claim_card4_title": "QSVM trading superiority",
    "claim_card4_text": "At the central transaction cost, QSVM is not the best-Sharpe model at any horizon and every model has a negative total return. This trading/risk layer is a predefined diagnostic, not an optimized or deployable strategy.",
    "claim_card5_status": "Not established",
    "claim_card5_title": "Quantum advantage or real-hardware evidence",
    "claim_card5_text": "QSVM has a higher effective rank, but that does not establish predictive, economic, or computational quantum advantage. The kernel is evaluated with exact statevector simulation, and the fixed post-RY CNOT chain does not change the fidelity kernel, so the result is not attributed to entanglement.",
    "claim_boundary_statement": "Final boundary: robust QSVM classification advantage at 1 day only; competitive but not robustly superior at 7 days; no QSVM classification advantage at 30 days; no QSVM trading superiority; and no established quantum advantage, computational speedup, entanglement contribution, or physical-hardware evidence.",
    "table_group1_title": "Classification and stability",
    "table_group1_intro": "Macro F1 results from the 27 matched outer walk-forward folds. The descriptive numbers are shown here, while any superiority claim is based on the paired tests and the temporal block-bootstrap checks.",
    "table_group1_note": "<span class=\"badge-focus gold evidence-badge\">Robust only at 1 day</span><br>The 1-day QSVM advantage is supported against both baselines by Holm-corrected paired t-tests and Wilcoxon tests and by circular moving-block bootstrap checks at block lengths 2, 3, and 4. The 7-day result is mixed and not robust; at 30 days there is no QSVM advantage.",
    "table_group2_title": "Trading/risk results",
    "table_group2_intro": "Post-hoc results at the central transaction cost of 0.0015 per side. The analysis uses clean OOS predictions, enters at Open(t+1), exits at Open(t+h+1), and enforces one global non-overlapping trade sequence across the full OOS period.",
    "table_group2_note": "Every model has a negative total return at the central cost. Turnover is the aggregate turnover over the evaluated OOS period. These numbers are an economic diagnostic of the predictions—not an optimized trading strategy or an investment claim.",
    "table_group3_title": "Integrated evidence and final interpretation",
    "table_group3_intro": "This table puts the predictive, statistical, financial, and quantum-diagnostic results side by side so the final conclusion can be read horizon by horizon without mixing the evidence layers.",
    "final_takeaway_kicker": "Final takeaway",
    "final_takeaway_title": "What the study actually shows",
    "final_takeaway_message": "<span class=\"final-message-line final-message-lead\">QSVM has a robust classification advantage only at the 1-day horizon.</span><span class=\"final-message-line\">At 7 days, QSVM remains competitive, but the superiority evidence is not robust across the full statistical checks. At 30 days, there is no QSVM classification advantage and RBF_PCA has the strongest descriptive profile.</span><span class=\"final-message-line\">The predefined post-hoc trading/risk analysis does not support QSVM trading superiority, and every model has a negative total return at the central transaction cost.</span><span class=\"final-message-line\">QSVM has a substantially higher effective rank than RBF_PCA, but target alignment is small and horizon-dependent. The richer geometry therefore does not establish quantum advantage.</span><span class=\"final-message-line final-message-boundary\">All quantum evidence comes from exact statevector simulation, not physical quantum hardware. The study does not claim computational speedup, hardware advantage, an entanglement contribution, or general QSVM superiority.</span>",
    "final_chip_leakage": "Leakage-safe",
    "final_chip_horizon": "Horizon-specific",
    "final_chip_trading": "Trading/risk separated",
    "final_chip_diagnostic": "Simulation-bounded",
    "final_takeaway_supporting": "",
    "final_takeaway_closing": ""
  },
  "th": {
    "nav_dashboard": "ผลลัพธ์",
    "nav_summary": "ข้อค้นพบหลัก",
    "nav_claims": "สรุปงานวิจัย",
    "nav_appendix": "ผลลัพธ์ฉบับละเอียด",
    "eyebrow": "Financial ML &middot; Quantum Kernel Benchmark &middot; การพยากรณ์ทิศทาง Bitcoin",
    "hero_title": "ทดสอบ Quantum Machine Learning ด้วยการประเมินข้อมูลการเงินที่เข้มงวด",
    "hero_subtitle": "งานวิจัยนี้พยากรณ์ทิศทาง Bitcoin ที่ระยะ 1, 7 และ 30 วัน โดยเปรียบเทียบ QSVM กับ RBF_PCA และ RBF_FULL ภายใต้ nested rolling walk-forward validation พร้อม horizon-aware purging การวิเคราะห์ trading/risk แบบ post-hoc และ quantum-kernel diagnostics",
    "hero_positioning": "จุดตั้งต้นของงานไม่ใช่สมมติฐานว่า quantum ต้องดีกว่า classical แต่เป็นคำถามว่า quantum fidelity kernel ที่คำนวณด้วย simulation ให้ประโยชน์ที่เกี่ยวข้องกับโจทย์จริงเพิ่มขึ้นหรือไม่ การทดลองจึงแยกข้อมูลอนาคตออกจากการฝึกโมเดล ควบคุมการเลือกโมเดล และแยกหลักฐานด้านการพยากรณ์ การเงิน และโครงสร้าง quantum kernel ออกจากกันอย่างชัดเจน",
    "hero_chip_leakage": "ควบคุม data leakage",
    "hero_chip_horizon": "3 ระยะพยากรณ์",
    "hero_chip_trading": "วิเคราะห์ trading/risk ภายหลัง",
    "hero_chip_diagnostic": "ตรวจโครงสร้าง quantum kernel",
    "final_answer_label": "คำตอบสั้นที่สุด",
    "final_answer_title": "<span class=\"answer-highlight-main\">จุดที่ QSVM เด่นชัดที่สุดอยู่ที่ระยะ 1 วัน</span><span class=\"answer-highlight-sub\">ข้อได้เปรียบนั้นเกิดขึ้นเฉพาะด้าน classification</span>",
    "final_answer_text": "ที่ระยะ 1 วัน QSVM ให้ผล classification ดีกว่า classical baselines ทั้งสอง และข้อได้เปรียบนี้ยังคงได้รับการสนับสนุนหลังการตรวจสอบความ robust ทางสถิติครบชุด ที่ 7 วัน QSVM ยังแข่งขันได้ แต่หลักฐานยังไม่ robust พอที่จะสรุปว่าเหนือกว่า ส่วนที่ 30 วันไม่มีหลักฐานว่า QSVM ได้เปรียบด้าน classification นอกจากนี้ trading/risk analysis ไม่สนับสนุน QSVM trading superiority และ quantum kernel ที่มีโครงสร้างหลากหลายกว่าก็ยังไม่ใช่หลักฐานของ quantum advantage ผล quantum ทั้งหมดมาจาก exact statevector simulation ไม่ใช่ quantum hardware จริง",
    "kpi_folds_label": "Walk-forward folds",
    "kpi_folds_note": "27 ช่วงทดสอบแบบ out-of-sample ต่อระยะพยากรณ์",
    "kpi_horizons_label": "ระยะพยากรณ์",
    "kpi_horizons_note": "ล่วงหน้า 1, 7 และ 30 วัน",
    "kpi_layers_label": "ด้านของหลักฐาน",
    "kpi_layers_note": "Classification, stability, trading/risk และ quantum-kernel diagnostics",
    "kpi_num": "2",
    "kpi_adv_label": "ตัวเปรียบเทียบแบบคลาสสิก",
    "kpi_adv_note": "RBF_PCA ใช้เปรียบเทียบภายใต้มิติเดียวกับ QSVM ส่วน RBF_FULL ใช้ชุดคุณลักษณะเต็ม",
    "summary_kicker": "ข้อค้นพบหลัก",
    "summary_title": "คำตอบเปลี่ยนไปตามระยะพยากรณ์ ไม่มีโมเดลเดียวชนะทุกช่วง",
    "summary_desc": "ผลที่แข็งแรงที่สุดอยู่ที่ระยะ 1 วัน ขณะที่ 7 วันให้หลักฐานที่ยังไม่สม่ำเสมอ และที่ 30 วัน RBF_PCA มีผลเชิงพรรณนาโดยรวมดีที่สุด",
    "hx_kicker": "มุมมองแบบโต้ตอบ",
    "hx_title": "ดูผลทีละระยะพยากรณ์ แล้วตามหลักฐานไปจนถึงข้อสรุป",
    "hx_intro": "เลือกระยะพยากรณ์ แล้วไล่ดูหลักฐานทีละชั้น ตั้งแต่ผล classification ไปจนถึงข้อสรุปสุดท้าย",
    "hx_tab_1": "1 วัน",
    "hx_tab_7": "7 วัน",
    "hx_tab_30": "30 วัน",
    "hx_context_role": "เส้นทางของหลักฐาน",
    "hx_classification_label": "ผล Classification",
    "hx_statistics_label": "ความ robust ทางสถิติ",
    "hx_trading_label": "Trading / Risk",
    "hx_verdict_label": "ข้อสรุปที่หลักฐานรองรับ",
    "summary_integrated_label": "ข้อสรุปรวม",
    "sum1_title": "1 วัน · QSVM ได้เปรียบด้าน classification อย่าง robust",
    "sum1_text": "QSVM ได้ mean F1 = 0.4760 เทียบกับ RBF_PCA = 0.4400 และ RBF_FULL = 0.4249 และข้อได้เปรียบเหนือทั้งสอง baseline ยังคงอยู่หลัง Holm-corrected paired tests และ circular moving-block bootstrap",
    "sum2_title": "7 วัน · แข่งขันได้ แต่ยังไม่ robustly superior",
    "sum2_text": "QSVM มี mean F1 สูงสุดที่ 0.4600 แต่ภาพทางสถิติยังไม่เป็นไปในทิศทางเดียวกัน การเทียบกับ RBF_FULL ไม่ significant ส่วนการเทียบกับ RBF_PCA ไม่ได้ให้ผลสม่ำเสมอเมื่อดูทั้ง paired tests และ bootstrap ในหลาย block lengths",
    "sum3_title": "30 วัน · ไม่มี QSVM classification advantage",
    "sum3_text": "RBF_PCA มีผลเชิงพรรณนาโดยรวมแข็งแรงที่สุด โดย mean F1 = 0.3977 เทียบกับ QSVM = 0.3832 และทั้ง paired tests กับ block-bootstrap analysis ไม่สนับสนุนข้อได้เปรียบของ QSVM",
    "sum4_title": "ผล classification ที่ดีขึ้น ไม่ได้แปลว่าดีกว่าด้านการเงินหรือเป็น quantum advantage",
    "sum4_text": "ที่ transaction cost กลาง 0.0015 ต่อ side ทุกโมเดลมี total return ติดลบ และ QSVM ไม่เคยเป็นโมเดลที่มี Sharpe ratio ดีที่สุดในทั้งสามระยะ แม้ QSVM จะมี effective rank สูงกว่า RBF_PCA มาก แต่ target alignment ต่างกันเพียงเล็กน้อยและเปลี่ยนไปตาม horizon ดังนั้นโครงสร้าง kernel ที่หลากหลายกว่าเป็นหลักฐานเชิงโครงสร้าง ไม่ใช่ quantum advantage",
    "dashboard_kicker": "ผลลัพธ์หลัก",
    "dashboard_title": "เมื่อเพิ่มหลักฐานแต่ละชั้น การตีความก็เปลี่ยนไป",
    "dashboard_desc": "ค่า F1 ที่สูงกว่าเป็นเพียงส่วนหนึ่งของเรื่อง งานนี้จึงตรวจต่อว่าความแตกต่างนั้น robust ทางสถิติหรือไม่ ผลทำนายชุดเดียวกันยังมีความหมายเมื่อคำนึงถึงต้นทุนและความเสี่ยงหรือไม่ และ quantum kernel align กับ target ได้ดีขึ้นจริงหรือเปล่า",
    "chart1_title": "ผลการจำแนกทิศทาง",
    "chart1_desc": "ค่า macro F1 เฉลี่ยจาก 27 matched outer walk-forward test folds ในแต่ละระยะพยากรณ์",
    "chart1_sowhat": "<strong>ความหมาย:</strong> QSVM นำเชิง descriptive ที่ 1 และ 7 วัน แต่ไม่ได้นำที่ 30 วัน เมื่อรวมการตรวจสอบความ robust ทั้งหมดแล้ว ข้อสรุปว่า QSVM เหนือกว่าสนับสนุนได้เฉพาะงาน classification ที่ระยะ 1 วัน",
    "chart2_title": "การตีความด้าน Trading/Risk",
    "chart2_desc": "Sharpe ratio จาก predefined post-hoc trading/risk protocol ที่ transaction cost = 0.0015 ต่อ side",
    "chart2_sowhat": "<strong>ความหมาย:</strong> เมื่อมองด้านการเงิน ภาพเปลี่ยนไป RBF_FULL มี Sharpe ratio ดีที่สุดที่ 1 และ 7 วัน ส่วน RBF_PCA ดีที่สุดที่ 30 วัน และ total return ของทุกโมเดลยังติดลบที่ central cost จึงไม่มีหลักฐานสนับสนุน QSVM trading superiority",
    "gap_title": "ข้อได้เปรียบด้าน classification ที่ 1 วัน ไม่ได้ส่งต่อไปเป็น trading superiority",
    "gap_desc": "แม้ QSVM จะมีข้อได้เปรียบด้าน classification ที่ 1 วันอย่าง robust แต่เมื่อนำ out-of-sample predictions ชุดเดียวกันไปตีความด้วย execution rule และ transaction cost ที่กำหนดไว้ล่วงหน้า ผลด้าน risk-adjusted trading กลับอ่อนกว่า",
    "gap_sowhat": "<strong>ทำไมจุดนี้สำคัญ:</strong> นี่คือภาพที่ชัดที่สุดว่าการประเมิน Financial ML ไม่ควรหยุดที่ predictive metric เพียงตัวเดียว QSVM ทำ F1 ได้ดีขึ้นที่ 1 วัน แต่ turnover ที่สูงและ transaction costs ทำให้ความหมายทางการเงินของสัญญาณอ่อนลง",
    "metric_f1": "Mean F1",
    "metric_sharpe": "Sharpe ratio",
    "metric_return": "Total return",
    "metric_turnover": "Turnover",
    "diag_title": "Quantum kernel มีโครงสร้างที่หลากหลายกว่า แต่ยังไม่ใช่ quantum advantage",
    "diag_desc": "บน representative folds 0, 13 และ 26 โดยใช้ observations ชุดเดียวกัน 1,024 ตัวสำหรับทั้งสอง kernels QSVM มี effective rank สูงกว่า RBF_PCA อย่างมาก ทั้งสอง kernels มีความสัมพันธ์กันแต่ไม่ได้เหมือนกัน และความแตกต่างด้าน target alignment ยังมีขนาดเล็กและเปลี่ยนไปตามระยะพยากรณ์",
    "diag_sowhat": "<strong>ความหมาย:</strong> QSVM สร้าง similarity geometry ที่หลากหลายกว่า แต่โครงสร้างนี้ไม่ได้ align กับ direction target ได้ดีกว่าอย่างสม่ำเสมอ และไม่ได้ทำให้ผลการพยากรณ์หรือผลทางการเงินเหนือกว่าอย่างสม่ำเสมอ จึงยังใช้เป็นหลักฐานของ task-relevant, computational หรือ hardware-level quantum advantage ไม่ได้",
    "decision_kicker": "ข้อสรุปจากงานวิจัย",
    "decision_title": "ข้อสรุปที่แข็งแรงที่สุดคือ QSVM ได้เปรียบด้าน classification ที่ 1 วัน",
    "decision_text": "ภายใต้เงื่อนไขที่ทดสอบ QSVM เป็น quantum-kernel benchmark ที่ประเมินด้วย simulation และมีความหมายเชิงวิจัย โดยมี robust classification advantage ที่ 1 วัน แต่หลักฐานยังไม่รองรับความเหนือกว่าแบบ robust ที่ 7 วัน, QSVM classification advantage ที่ 30 วัน, QSVM trading superiority หรือ quantum advantage",
    "claim_kicker": "ขอบเขตการตีความ",
    "claim_title": "งานนี้สรุปอะไรได้ และหลักฐานหยุดอยู่ตรงไหน",
    "claim_desc": "ข้อสรุปทุกข้อผูกกับหลักฐานครบทั้งสี่ด้าน ได้แก่ classification, ความ robust ระหว่าง folds, trading/risk analysis แบบกำหนดไว้ล่วงหน้า และ quantum-kernel diagnostics จาก simulation",
    "claim_supported_title": "หลักฐานรองรับ",
    "claim_qualified_title": "รองรับ แต่มีขอบเขต",
    "claim_not_title": "หลักฐานยังไม่รองรับ",
    "claim_supported_html": "<li>QSVM มี robust classification advantage ที่ระยะ 1 วัน</li><li>ที่ 7 วัน QSVM ยังแข่งขันได้ แต่หลักฐานยังไม่ robust พอที่จะสรุปว่าเหนือกว่า</li><li>ที่ 30 วัน RBF_PCA มีผลเชิงพรรณนาด้าน classification-stability แข็งแรงที่สุด</li><li>QSVM มี simulated kernel geometry ที่หลากหลายกว่า RBF_PCA</li>",
    "claim_qualified_html": "<li>ผล classification ที่ดีกว่า ไม่เท่ากับโมเดลเหนือกว่าโดยรวม</li><li>ผล trading/risk เป็นการวิเคราะห์ out-of-sample predictions ภายใต้กติกาที่กำหนดไว้ ไม่ใช่ trading strategy ที่พร้อมใช้งานจริง</li><li>Effective rank ที่สูงกว่าแสดงถึง geometry ที่หลากหลายกว่า แต่ไม่ได้แปลว่ามีประโยชน์กับ target มากกว่าโดยอัตโนมัติ</li><li>ผลทั้งหมดผูกกับ dataset, feature set, horizons และ validation protocol ที่ใช้ในงานนี้</li>",
    "claim_not_html": "<li>QSVM เหนือกว่า classical models โดยทั่วไป</li><li>QSVM trading superiority หรือหลักฐานว่าทำกำไรได้จริง</li><li>QSVM classification advantage ที่ระยะ 30 วัน</li><li>Quantum computational speedup, ผลจาก entanglement หรือ physical-hardware quantum advantage</li>",
    "appendix_kicker": "ผลลัพธ์ฉบับละเอียด",
    "appendix_title": "ตารางผลลัพธ์ฉบับละเอียด",
    "appendix_desc": "ตารางส่วนนี้แสดงรายละเอียดตัวเลขที่อยู่เบื้องหลังกราฟและข้อสรุปหลัก ทั้งผล classification, trading/risk และหลักฐานแบบบูรณาการในแต่ละระยะพยากรณ์",
    "table_classification": "ตาราง Classification และ Stability",
    "table_trading": "ตาราง Trading/Risk",
    "table_decision": "ตารางสรุปหลักฐานทั้งหมด",
    "table_diagnostic": "ตาราง Quantum-Kernel Diagnostics",
    "table_verdict": "ตารางขอบเขตข้อสรุป",
    "axis_f1": "ค่า F1 เฉลี่ย",
    "axis_sharpe": "Sharpe",
    "axis_rank": "Effective rank",
    "chart_hover_horizon": "ระยะพยากรณ์",
    "chart_hover_f1": "ค่า F1 เฉลี่ย",
    "chart_hover_sharpe": "Sharpe ratio",
    "chart_hover_rank": "Effective rank",
    "diag_annotation": "Folds 0, 13, 26 · matched n = 1,024",
    "footer": "Research showcase สองภาษา · Graduate School of Applied Statistics, NIDA · เปรียบเทียบ classical และ quantum kernels สำหรับการพยากรณ์ทิศทาง Bitcoin",
    "nav_research": "คำถามวิจัย",
    "nav_dataset": "ข้อมูล",
    "nav_method": "วิธีทดลอง",
    "nav_quantum": "Quantum",
    "deep_dive_kicker": "รายละเอียดเชิงเทคนิค",
    "deep_dive_title": "ดูรายละเอียดการออกแบบการทดลอง",
    "deep_dive_intro": "เปิดส่วนนี้เพื่อดูบทบาทของแต่ละโมเดล วิธีสร้าง QSVM kernel การควบคุม data leakage และกรอบที่ใช้เชื่อมหลักฐานแต่ละด้านเข้ากับการตีความผล",
    "rq_kicker": "คำถามวิจัย",
    "rq_title": "คำถามไม่ได้มีแค่ว่า “โมเดลไหนชนะ”",
    "rq_desc": "การประเมิน Financial QML จากค่าเฉลี่ยเพียงตัวเดียวอาจทำให้สรุปเกินจริง งานนี้จึงถามว่า QSVM ให้ประโยชน์ที่เกี่ยวข้องกับโจทย์จริงเพิ่มขึ้นหรือไม่ แล้วตรวจคำตอบผ่านผล classification ความเสถียรตามเวลา การตีความด้าน trading/risk และ quantum-kernel diagnostics",
    "rq_main_label": "คำถามหลัก",
    "rq_main_question": "เมื่อพยากรณ์ทิศทาง Bitcoin ด้วย protocol แบบ leakage-safe และหลายระยะ QSVM ให้ task-relevant value เพิ่มขึ้นเหนือ classical kernel baselines หรือไม่?",
    "rq_card1_title": "ทำนายทิศทางได้ดีกว่าหรือไม่?",
    "rq_card1_text": "เปรียบเทียบ QSVM กับ RBF_PCA และ RBF_FULL ในงานจำแนกทิศทาง Bitcoin ที่ระยะ 1, 7 และ 30 วัน",
    "rq_card2_title": "ผลลัพธ์คงเส้นคงวาตามเวลาหรือไม่?",
    "rq_card2_text": "ดูทั้งค่าเฉลี่ย ความกระจายของผลระหว่าง walk-forward folds และผลใน fold ที่แย่ที่สุด",
    "rq_card3_title": "เมื่อตีความด้านการเงิน ผลยังมีความหมายหรือไม่?",
    "rq_card3_text": "ใช้เฉพาะ clean out-of-sample predictions แล้วพิจารณา transaction costs, turnover, Sharpe ratio, return และ drawdown ภายใต้ execution rule เดียวกัน",
    "rq_card4_title": "Quantum kernel เพิ่มอะไรให้กับโจทย์นี้จริง?",
    "rq_card4_text": "เปรียบเทียบ QSVM กับ RBF_PCA ผ่าน kernel similarity, effective rank และ target alignment เพื่อแยกความแตกต่างเชิงโครงสร้างออกจาก task-relevant advantage",
    "rq_boundary_note": "หลักฐานแต่ละด้านตอบคำถามคนละเรื่อง งานจึงประเมินผลการพยากรณ์ ความ robust ทางสถิติ ความหมายด้านการเงิน และโครงสร้าง kernel แยกจากกัน ก่อนนำผลทั้งหมดมาตีความร่วมกัน",
    "btc_kicker": "ทำไมเลือก Bitcoin?",
    "btc_title": "สนามทดสอบที่ยากและสะท้อนปัญหาจริงของ Financial ML",
    "btc_desc": "Bitcoin ถูกใช้เป็น financial time series ที่มีความผันผวนสูง ไม่ใช่สินทรัพย์ที่งานนี้แนะนำให้ลงทุน ตลาดซื้อขายตลอดเวลา มี non-stationarity สูง และได้รับอิทธิพลจากทั้งข้อมูลตลาด กิจกรรมบน blockchain และปัจจัยมหภาค จึงเหมาะสำหรับทดสอบว่า classical และ quantum kernels รับมือกับโจทย์ที่เปลี่ยนไปตามเวลาได้อย่างไร",
    "btc_narrative": "งานพยากรณ์ทางการเงินอาจดูดีเกินจริงได้ง่าย หากประเมินเพียง metric เดียว โมเดลหนึ่งอาจได้คะแนน classification สูงกว่า แต่ความได้เปรียบนั้นอาจหายไปเมื่อมองหลายช่วงเวลา หรือเมื่อคำนึงถึง turnover, transaction costs และ drawdown Bitcoin ทำให้ช่องว่างนี้เห็นชัด เพราะพฤติกรรมตลาดเปลี่ยนเร็วและข้อมูลสำคัญมาจากหลายแหล่ง จึงเป็น stress test ที่เหมาะสำหรับดูว่า QSVM ยังมีข้อได้เปรียบอยู่หรือไม่เมื่อเพิ่มหลักฐานด้านอื่นเข้ามา",
    "btc_boundary_note": "Bitcoin ในงานนี้เป็นสภาพแวดล้อมสำหรับทดสอบโมเดล ไม่ใช่คำแนะนำการลงทุน ไม่ใช่ trading signal และไม่ใช่หลักฐานว่ากลยุทธ์ใดทำกำไรได้จริง",
    "btc_card1_title": "ความผันผวนสูง",
    "btc_card1_text": "การเปลี่ยนแปลงของราคาที่รวดเร็วช่วยเปิดให้เห็นจุดอ่อนของสมมติฐานหรือโมเดลได้ชัดขึ้น",
    "btc_card2_title": "รูปแบบเปลี่ยนตามเวลา",
    "btc_card2_text": "Pattern ที่ใช้ได้ในช่วงหนึ่งอาจอ่อนลงหรือกลับทิศเมื่อสภาวะตลาดเปลี่ยน",
    "btc_card3_title": "ข้อมูลมาจากหลายแหล่ง",
    "btc_card3_text": "ตัวแปรที่ใช้ครอบคลุม market/technical, on-chain และ macroeconomic information ไม่ได้พึ่งราคาย้อนหลังเพียงอย่างเดียว",
    "btc_card4_title": "ทำนายดี ไม่ได้แปลว่ามีประโยชน์ทางการเงิน",
    "btc_card4_text": "ข้อได้เปรียบด้าน classification อาจหายไปเมื่อคิด execution timing, turnover, transaction costs และ drawdown",
    "btc_card5_title": "ต้องใช้การประเมินที่เข้มงวด",
    "btc_card5_text": "Walk-forward testing, train-only preprocessing และ horizon-aware purging ช่วยลดความเสี่ยงที่ข้อมูลอนาคตจะทำให้ผลดูดีเกินจริง",
    "flow_classification": "Classification",
    "flow_stability": "Stability",
    "flow_trading": "Trading/Risk",
    "flow_diagnostics": "Kernel diagnostics",
    "flow_boundary": "ข้อสรุปสุดท้าย",
    "revisit_kicker": "ตรรกะของหลักฐาน",
    "revisit_title": "ย้อนดูหลักฐาน",
    "revisit_desc": "ย้อนตามตรรกะการประเมิน ตั้งแต่ผลการพยากรณ์ไปจนถึงขอบเขตของข้อสรุปสุดท้าย",
    "revisit_aria": "ย้อนดูหลักฐานของงานวิจัย",
    "data_kicker": "ชุดข้อมูล",
    "data_title": "ข้อมูลรายวัน 3,592 observations และ predictors 16 ตัวจาก 3 กลุ่มข้อมูล",
    "data_desc": "ชุดข้อมูลสุดท้ายครอบคลุมช่วง 31 มกราคม 2016 ถึง 30 พฤศจิกายน 2025 บนปฏิทินรายวันแบบ UTC และใช้ predictors 16 ตัวชุดเดียวกันกับงานพยากรณ์ระยะ 1, 7 และ 30 วัน",
    "data_narrative": "แต่ละระยะเป็น binary classification task แยกกัน โดยใช้ข้อมูลที่มี ณ หรือก่อนวัน t เพื่อทำนายว่าราคาปิด Bitcoin ที่ t+h จะสูงกว่าราคาปิดที่ t หรือไม่ เพื่อช่วยลด look-ahead risk ตัวแปร on-chain ทั้ง 4 ตัวและ macroeconomic ทั้ง 5 ตัวถูกเลื่อนย้อนหลัง 1 วันก่อนเข้าโมเดล",
    "data_asset_label": "ข้อมูลหลัก",
    "data_asset_value": "Bitcoin รายวัน · 3,592 observations · UTC calendar",
    "data_period_label": "ช่วงเวลา",
    "data_period_value": "31 มกราคม 2016 ถึง 30 พฤศจิกายน 2025",
    "data_domains_label": "Predictors",
    "data_domains_value": "รวม 16 ตัว: market/technical 7 + on-chain 4 + macroeconomic 5",
    "data_horizons_label": "โจทย์พยากรณ์",
    "data_horizons_value": "ทิศทางราคาในอีก 1, 7 และ 30 วัน",
    "data_validation_label": "การทดสอบแบบ OOS",
    "data_validation_value": "Nested rolling walk-forward · 27 outer folds ต่อ horizon",
    "data_leakage_label": "การควบคุมเวลา",
    "data_leakage_value": "Lag exogenous data 1 วัน + horizon-aware purging ที่ outer และ inner boundaries",
    "data_domain1_label": "Market / Technical",
    "data_domain2_label": "On-chain",
    "data_domain3_label": "Macroeconomic",
    "data_lag_badge": "Lag exogenous data 1 วัน",
    "data_folds_badge": "27 outer folds",
    "data_clarification_note": "Prediction horizon คือจำนวนวันข้างหน้าที่ต้องการทำนาย ไม่ใช่จำนวนวันย้อนหลังที่ป้อนให้โมเดล ตัวอย่างเช่น โจทย์ 7 วันใช้ข้อมูลที่มี ณ วัน t เพื่อทำนายว่าราคาปิด Bitcoin ที่ t+7 จะสูงกว่าราคาปิดที่ t หรือไม่",
    "detail_feature_market": "7 predictors ได้แก่ log return, 30-day rolling volatility, ATR14, RSI14, MACD, SMA7/SMA30 ratio และ trading volume",
    "detail_feature_onchain": "4 predictors ได้แก่ active address count, transaction count, hash rate และ mean transaction fee ในหน่วย native โดยทุกตัวถูก lag 1 วันก่อนเข้าโมเดล",
    "detail_feature_macro": "5 predictors ได้แก่ U.S. Dollar Index (DXY), gold price, S&P 500, VIX และ U.S. 10-year Treasury yield โดยทุกตัวถูก lag 1 วันก่อนเข้าโมเดล",
    "detail_horizon_1d": "ระยะสั้น: ใช้ข้อมูลที่มี ณ วัน t เพื่อทำนายว่าราคาปิด Bitcoin ที่ t+1 จะสูงกว่าที่ t หรือไม่",
    "detail_horizon_7d": "ระยะกลาง: ใช้ข้อมูลที่มี ณ วัน t เพื่อทำนายว่าราคาปิด Bitcoin ที่ t+7 จะสูงกว่าที่ t หรือไม่",
    "detail_horizon_30d": "ระยะยาวกว่า: ใช้ข้อมูลที่มี ณ วัน t เพื่อทำนายว่าราคาปิด Bitcoin ที่ t+30 จะสูงกว่าที่ t หรือไม่",
    "detail_validation_lag": "ตัวแปร on-chain และ macroeconomic ทุกตัวถูก lag 1 วัน และ training rows จะถูกตัดออกด้วยหาก h-step target ของ row นั้นลากข้ามเข้า validation หรือ test period ถัดไป",
    "detail_validation_folds": "แต่ละ horizon ใช้ outer test folds ชุดเดียวกัน 27 folds: candidate training window แบบ rolling 3 ปี ตามด้วย test window 3 เดือน และเลื่อนไปครั้งละ 3 เดือน ภายในแต่ละ outer fold ใช้ chronological inner validation 3 splits โดยแต่ละ split มี validation window 3 เดือน",
    "timeline_context_dataset": "ข้อมูล Bitcoin รายวันบน UTC calendar",
    "timeline_context_period": "31 ม.ค. 2016 – 30 พ.ย. 2025",
    "timeline_context_folds": "27 rolling OOS folds ต่อ horizon",
    "timeline_context_label": "ขอบเขตการศึกษา",
    "pipeline_kicker": "กระบวนการประเมิน",
    "pipeline_title": "ทุกขั้นตอนถูกออกแบบไม่ให้ข้อมูลอนาคตย้อนกลับไปช่วยการฝึกโมเดล",
    "pipeline_desc": "สำหรับ multi-horizon labels การแบ่งข้อมูลตามเวลาเพียงอย่างเดียวยังไม่พอ งานนี้จึงตัด training observations ที่ future target endpoint ข้ามเข้า validation หรือ test period ถัดไปออกด้วย",
    "pipeline_narrative_1": "Pipeline เริ่มจาก daily UTC dataset เดียว จำนวน 3,592 observations และ predictors 16 ตัว จากนั้นสร้าง binary direction labels แยกสำหรับอีก 1, 7 และ 30 วัน และ lag ตัวแปร on-chain กับ macroeconomic 1 วันก่อนเข้าโมเดล",
    "pipeline_narrative_2": "ในแต่ละ outer fold จะทำ horizon-aware purging ก่อนขั้นตอนที่ต้องเรียนรู้จากข้อมูล Standardization และ PCA fit จาก training data เท่านั้น ส่วนการเลือก hyperparameter ทำภายใน chronological inner validation 3 splits โดยใช้ purge rule เดียวกัน Outer test fold จะยังไม่ถูกใช้จนกว่าจะถึงการประเมินครั้งสุดท้าย",
    "pipeline_step1_title": "เตรียม Daily UTC Dataset",
    "pipeline_step1_text": "ข้อมูล 3,592 observations และ predictors 16 ตัว ช่วง 31 ม.ค. 2016 ถึง 30 พ.ย. 2025",
    "pipeline_step2_title": "Lag ข้อมูลภายนอก 1 วัน",
    "pipeline_step2_text": "เลื่อนตัวแปร on-chain และ macroeconomic ทุกตัวย้อนหลัง 1 วันตามกติกาที่กำหนด",
    "pipeline_step3_title": "สร้าง target แยกตาม horizon",
    "pipeline_step3_text": "สร้าง y = 1[Close(t+h) > Close(t)] แยกสำหรับ h = 1, 7 และ 30 วัน",
    "pipeline_step4_title": "Roll forward และ purge target overlap",
    "pipeline_step4_text": "ใช้ candidate training window 3 ปี, test window 3 เดือน และ step 3 เดือน แล้วตัด training rows ที่ target ลากเข้า period ถัดไปออก",
    "pipeline_step5_title": "Fit preprocessing จาก training data เท่านั้น",
    "pipeline_step5_text": "คำนวณ standardization และ fixed 8-component PCA เมื่อจำเป็น โดยใช้เฉพาะ eligible training partition",
    "pipeline_step6_title": "เลือก C ภายใน training fold",
    "pipeline_step6_text": "เลือก C จาก {0.1, 1.0, 10.0} ด้วย chronological inner validation 3 splits ขนาด 3 เดือน พร้อม horizon-aware purge แบบเดียวกัน",
    "pipeline_step7_title": "ทดสอบกับ outer fold ที่ยังไม่เคยถูกใช้",
    "pipeline_step7_text": "Refit pipeline ที่เลือกแล้วบน eligible outer-training data จากนั้นประเมินเพียงครั้งเดียวบน outer test period ที่กันไว้",
    "pipeline_step8_title": "ใช้ OOS predictions เฉพาะการประเมินผล",
    "pipeline_step8_text": "เก็บ out-of-sample predictions สำหรับ classification และ fixed post-hoc trading/risk analysis ส่วน quantum diagnostics คำนวณแยกบน predefined folds",
    "pipeline_trust_note": "RBF_FULL และ RBF_PCA ใช้ eligible training observations ทั้งหมด ส่วน QSVM มีข้อจำกัดด้านต้นทุนการสร้าง exact quantum kernel จึงใช้ได้สูงสุด 1,024 observations ล่าสุดที่ยัง eligible หลัง purging นอกจากนี้ยังมี matched-1,024 classical control แยกต่างหาก เพื่อตรวจว่าผลระยะสั้นสามารถอธิบายได้ด้วย training-size cap เพียงอย่างเดียวหรือไม่ โดย control นี้ไม่ได้มาแทน primary classical baselines",
    "roles_kicker": "บทบาทของโมเดล",
    "roles_title": "Baseline แต่ละตัวถูกเลือกมาเพื่อตอบคำถามเปรียบเทียบคนละแบบ",
    "roles_desc": "QSVM ไม่ได้ถูกตั้งให้เป็นผู้ชนะล่วงหน้า Classical baselines ถูกออกแบบให้ตัวหนึ่งควบคุมเรื่อง dimensionality และอีกตัวเป็น full-feature kernel benchmark ที่แข็งแรง",
    "roles_narrative_1": "QSVM ยังอยู่ในกรอบของ SVM แต่เปลี่ยนวิธีคำนวณ similarity จาก classical RBF kernel เป็น quantum-generated fidelity kernel ดังนั้น classical kernel models จึงเป็นตัวเปรียบเทียบที่ตรงที่สุด",
    "roles_narrative_2": "RBF_PCA ควบคุม dimensionality โดยใช้ PCA 8 components ชุดเดียวกับ QSVM ส่วน RBF_FULL ใช้ predictors ทั้ง 16 ตัวและทำหน้าที่เป็น full-feature classical benchmark การมี baseline สองแบบช่วยแยกได้ดีขึ้นว่าความแตกต่างที่เห็นมาจาก quantum kernel หรือจากข้อจำกัดด้าน representation และจำนวน features",
    "role_qsvm_title": "QSVM · Quantum-kernel benchmark",
    "role_qsvm_text": "ใช้ 8-component PCA representation ที่ fit จาก training data เหมือนกับ RBF_PCA แล้วคำนวณ precomputed quantum fidelity kernel ด้วย exact statevector simulation แต่ละ training partition ใช้ observations ล่าสุดที่ eligible ได้สูงสุด 1,024 ตัว",
    "role_rbf_pca_title": "RBF_PCA · Dimension-controlled comparator",
    "role_rbf_pca_text": "ใช้ classical RBF kernel บน PCA 8 components ชุดเดียวกับ QSVM จึงเป็น classical comparator ที่ใกล้เคียงเชิงโครงสร้างมากที่สุด",
    "role_rbf_full_title": "RBF_FULL · Full-feature classical benchmark",
    "role_rbf_full_text": "ใช้ classical RBF kernel กับ predictors ทั้ง 16 ตัวและ eligible training observations ทั้งหมด",
    "roles_interpretation_rule": "SVM ทั้งสามใช้ class_weight = balanced และ C grid เดียวกัน {0.1, 1.0, 10.0} ส่วน RBF models ใช้ gamma = scale สำหรับ matched-1,024 classical analysis มีไว้เป็น fairness check และไม่ได้แทน primary baselines ที่ใช้ eligible training data เต็มชุด",
    "leak_kicker": "การควบคุม Data Leakage",
    "leak_title": "ป้องกันทั้งข้อมูล feature ที่มาช้า และ target ที่ลากข้ามช่วงทดสอบ",
    "leak_desc": "Protocol ฉบับสุดท้ายไม่ได้ควบคุมแค่ลำดับ train/test แต่ยังป้องกัน target-overlap leakage ที่ outer และ inner boundaries พร้อมกัน และกัน preprocessing, model selection, trading interpretation รวมถึง diagnostics ออกจาก outer test period",
    "leak_narrative_1": "protocol นี้ถูกออกแบบให้ข้อมูลไหลไปข้างหน้าตามเวลา ตั้งแต่ data alignment, feature lagging, label construction, train/test splitting, preprocessing, PCA, model selection และ OOS prediction ทุกขั้นตอนที่เรียนรู้จากข้อมูลต้อง fit ภายใน training fold เท่านั้น ส่วน test fold จะถูกใช้หลังจากโมเดลและ transformations ถูกกำหนดเรียบร้อยแล้ว",
    "leak_narrative": "สำหรับ observation ที่วัน t และ horizon h จะนำ row นั้นเข้า training set ได้ก็ต่อเมื่อราคาที่ต้องใช้สร้าง label ณ t+h เกิดขึ้นครบก่อน validation หรือ test period ถัดไปเริ่ม กฎเดียวกันนี้ใช้ทั้ง outer และ inner boundaries หลังจาก purge แล้ว จึงค่อย fit scaling, PCA, kernel centering และโมเดลจาก training data ที่เหลือ",
    "leak_control1_title": "ทดสอบแบบ Chronological Walk-Forward",
    "leak_control1_text": "27 outer folds ต่อ horizon โดยใช้ candidate training window 3 ปี, test window 3 เดือน และเลื่อนไปครั้งละ 3 เดือน",
    "leak_control2_title": "Lag exogenous data 1 วัน",
    "leak_control2_text": "ตัวแปร on-chain และ macroeconomic ทุกตัวถูกเลื่อนย้อนหลัง 1 วันก่อนเข้าโมเดล",
    "leak_control3_title": "Outer Horizon-Aware Purge",
    "leak_control3_text": "ตัด outer-training rows ที่ h-step target ไปถึงหรือข้ามวันเริ่มของ outer test period",
    "leak_control4_title": "Inner Horizon-Aware Purge",
    "leak_control4_text": "ใช้กฎ target endpoint เดียวกันที่ทุก inner training–validation boundary ระหว่างการเลือก hyperparameter",
    "leak_control5_title": "Preprocessing และ tuning ใช้ training data เท่านั้น",
    "leak_control5_text": "Fit scaling, fixed PCA 8 components เมื่อจำเป็น และเลือก C จาก eligible training data เท่านั้น",
    "leak_control6_title": "กัน Outer Test Fold ไว้จนถึงขั้นสุดท้าย",
    "leak_control6_text": "Outer test period จะถูกใช้เมื่อ preprocessing และ model choices ถูกกำหนดเรียบร้อยแล้วเท่านั้น",
    "leak_control7_title": "QSVM Cap และ Kernel Centering",
    "leak_control7_text": "ใช้ cap 1,024 observations หลัง purging แล้วเท่านั้น เลือก observations ล่าสุดที่ยัง eligible และคำนวณ centering statistics จาก training kernel เท่านั้น",
    "leak_control8_title": "Trading Protocol ถูกกำหนดไว้ล่วงหน้า",
    "leak_control8_text": "ใช้เฉพาะ clean OOS predictions เข้า Open(t+1), ออก Open(t+h+1), ใช้ global non-overlapping sequence เดียวต่อเนื่องข้าม folds และประเมิน transaction-cost scenarios ที่กำหนดไว้ล่วงหน้า",
    "leak_control9_title": "Diagnostics ใช้เพื่ออธิบายผลภายหลังเท่านั้น",
    "leak_control9_text": "Kernel diagnostics ใช้ predefined folds 0, 13 และ 26 พร้อม matched samples และไม่ถูกนำไปใช้เลือก preprocessing, hyperparameter หรือ model",
    "leak_trust_note": "การตรวจสอบขั้นสุดท้ายไม่พบ target-overlap violations ที่ outer หรือ inner boundaries และไม่พบ inner validation period ที่ข้ามเข้า outer test period ที่เกี่ยวข้อง นอกจากนี้ dates, labels และ return fields ของ OOS predictions ยังถูกตรวจให้ตรงกันก่อนทำ paired statistical comparisons",
    "ladder_kicker": "วิธีอ่านหลักฐาน",
    "ladder_title": "หลักฐานแต่ละชั้นตอบคำถามคนละเรื่อง",
    "ladder_desc": "งานนี้ไม่ใช้กราฟเดียวตัดสินว่าโมเดลไหนเหนือกว่า แต่เริ่มจากผลการพยากรณ์ ตรวจความ robust ตามเวลา ต่อด้วยความหมายด้านการเงินและโครงสร้าง quantum kernel แล้วจึงกำหนดว่าควรสรุปได้ไกลแค่ไหน",
    "ladder_narrative_1": "Mean F1 ที่สูงกว่าสามารถบอกว่า classification ดีกว่า แต่ยังไม่พิสูจน์ financial usefulness ในทำนองเดียวกัน quantum kernel ที่มีโครงสร้างหลากหลายกว่าสามารถบอกได้ว่า representation แตกต่างออกไป แต่ยังไม่พิสูจน์ quantum advantage การดู dispersion และ worst fold ก็สำคัญ เพราะค่าเฉลี่ยที่ดูรับได้อาจซ่อนช่วงเวลาที่โมเดลล้มเหลวอย่างมากไว้",
    "ladder_narrative": "Mean F1 ที่สูงกว่าสามารถบอกว่า classification ดีกว่า แต่ยังไม่พิสูจน์ financial usefulness ในทำนองเดียวกัน quantum kernel ที่มีโครงสร้างหลากหลายกว่าสามารถบอกได้ว่า representation แตกต่างออกไป แต่ยังไม่พิสูจน์ quantum advantage การดู dispersion และ worst fold ก็สำคัญ เพราะค่าเฉลี่ยที่ดูรับได้อาจซ่อนช่วงเวลาที่โมเดลล้มเหลวอย่างมากไว้",
    "ladder1_title": "Classification",
    "ladder1_question": "โมเดลใดจำแนกทิศทางได้ดีกว่า?",
    "ladder1_can": "ความแตกต่างด้าน predictive performance",
    "ladder1_cannot": "Trading superiority หรือ quantum advantage",
    "ladder2_title": "Stability ตามเวลา",
    "ladder2_question": "ผลคงเส้นคงวาระหว่าง folds แค่ไหน และ fold ที่แย่ที่สุดอ่อนลงมากเพียงใด?",
    "ladder2_can": "ความสม่ำเสมอตามเวลาและ downside stability",
    "ladder2_cannot": "กำไรจริง ความพร้อมใช้งานจริง หรือ hardware advantage",
    "ladder3_title": "Trading/Risk",
    "ladder3_question": "เมื่อ OOS predictions ชุดเดิมเจอ execution timing, costs, turnover และ drawdown ผลเป็นอย่างไร?",
    "ladder3_can": "ความหมายทางการเงินภายใต้ protocol ที่กำหนดไว้",
    "ladder3_cannot": "ความพร้อมสำหรับ live trading หรือคำแนะนำการลงทุน",
    "ladder4_title": "Quantum-Kernel Diagnostics",
    "ladder4_question": "QSVM kernel ต่างจาก RBF_PCA อย่างไร และความต่างนั้นช่วย target จริงหรือไม่?",
    "ladder4_can": "หลักฐานเกี่ยวกับ representation geometry",
    "ladder4_cannot": "Quantum advantage ด้วยตัวมันเอง",
    "ladder5_title": "ข้อสรุปสุดท้าย",
    "ladder5_question": "เมื่อรวมหลักฐานทั้งสี่ด้านแล้ว ยังมีข้อสรุปใดที่ยืนอยู่ได้?",
    "ladder5_can": "ข้อสรุปที่จำกัดตาม horizon และหลักฐาน",
    "ladder5_cannot": "การขยายข้อสรุปเกินกว่าสิ่งที่ทดสอบ",
    "ladder_bridge_note": "การตีความเริ่มจากผลที่สังเกตได้ ตามด้วยความ robust ของผล ความหมายเชิงปฏิบัติและเชิงโครงสร้าง แล้วจึงสรุปเฉพาะข้ออ้างที่หลักฐานทั้งหมดรองรับร่วมกัน",
    "ladder_question_label": "คำถาม:",
    "ladder_can_label": "บอกเราได้ว่า:",
    "ladder_cannot_label": "ยังใช้พิสูจน์ไม่ได้ว่า:",
    "qsvm_kicker": "QSVM สร้าง Quantum Kernel อย่างไร",
    "qsvm_title": "จาก PCA 8 features ไปสู่ quantum similarity",
    "qsvm_desc": "QSVM ยังคงใช้ SVM classifier แต่เปลี่ยน classical RBF similarity เป็น precomputed fidelity kernel จาก 8-qubit RY angle encoding การคำนวณ kernel ทำแบบ deterministic ด้วย statevector simulator ไม่ได้รันบน physical quantum hardware",
    "qsvm_narrative_1": "ภายในแต่ละ training partition จะ fit standardization และ fixed PCA 8 components จาก training data เท่านั้น จากนั้น PCA component แต่ละตัวควบคุม RY rotation บน qubit หนึ่งตัว แล้วใช้ fixed nearest-neighbor CNOT chain ก่อนคำนวณ similarity เป็น squared overlap ระหว่าง encoded states",
    "qsvm_narrative_2": "CNOT chain ชุดนี้เหมือนกันสำหรับทุก input และถูกวางหลัง data-dependent RY rotations เมื่อ unitary เดียวกันถูกใช้กับทั้งสอง states ค่า inner product จึงไม่เปลี่ยน และ fidelity kernel ก็ไม่เปลี่ยนตามไปด้วย ดังนั้นผล QSVM ที่เห็นในงานนี้ไม่ควรถูกอธิบายว่าเกิดจาก entanglement contribution แต่เป็นผลของ angle-encoded fidelity representation ที่ทดสอบ Kernel คำนวณด้วย PennyLane default.qubit exact statevectors",
    "qsvm_loop_badge": "ภาพอธิบายแบบวนอัตโนมัติ",
    "qsvm_loop_title": "หนึ่งค่า Quantum Kernel ถูกสร้างขึ้นอย่างไร",
    "qsvm_loop_caption": "ข้อมูลสอง observation ถูก map เป็น quantum states แล้วเปรียบเทียบด้วย fidelity เพื่อสร้างหนึ่งค่าใน kernel matrix ก่อนส่งทั้ง matrix ให้ classical SVM.",
    "qsvm_detail_summary": "ดูรายละเอียดกลไก QSVM แบบ 8 ขั้นตอน",
    "qsvm_card1_title": "ต่างจาก Classical SVM ตรงไหน?",
    "qsvm_card1_text": "กรอบการเรียนรู้ของ SVM ยังเหมือนเดิม สิ่งที่เปลี่ยนคือ similarity function ซึ่งถูกแทนด้วย quantum-generated fidelity kernel",
    "qsvm_card2_title": "สิ่งที่ถูก Simulation คืออะไร?",
    "qsvm_card2_text": "PennyLane default.qubit คำนวณ exact statevectors และ fidelity kernel โดยไม่ได้ใช้ quantum processor จริง",
    "qsvm_card3_title": "อะไรที่ Simulation นี้ไม่ได้จำลอง?",
    "qsvm_card3_text": "ไม่มี finite-shot sampling, gate noise, measurement noise, decoherence, device calibration หรือ hardware execution latency",
    "qsvm_card4_title": "Kernel ที่มีโครงสร้างมากกว่า บอกอะไรไม่ได้บ้าง?",
    "qsvm_card4_text": "Kernel ที่แตกต่างหรือมี effective rank สูงกว่า ไม่ได้หมายความว่าจะทำนายดีกว่า เทรดดีกว่า มี computational speedup หรือมี quantum advantage โดยอัตโนมัติ",
    "qsvm_card5_title": "Diagnostics ใช้เพื่ออะไร?",
    "qsvm_card5_text": "Effective rank, kernel correlation และ target alignment ใช้อธิบายโครงสร้าง similarity ภายหลังการทดลอง ไม่ได้ใช้เลือกโมเดล และไม่สามารถพิสูจน์ advantage ได้เพียงลำพัง",
    "qsvm_diagnostic_bridge": "บน predefined folds 0, 13 และ 26 โดยใช้ observations ชุดเดียวกัน 1,024 ตัว QSVM มี effective rank ประมาณ 142.4–143.9 เทียบกับ 36.0–36.2 ของ RBF_PCA ค่า Pearson correlation อยู่ราว 0.7065–0.7123 และ Spearman 0.5341–0.5490 ขณะที่ direction-alignment differences มีขนาดเล็กและกลายเป็นลบสำหรับ QSVM ที่ 30 วัน ดังนั้น geometry ที่หลากหลายกว่ายังไม่ใช่หลักฐานของ quantum advantage",
    "qsvm_step1_title": "Input predictors",
    "qsvm_step1_text": "Market/technical features ร่วมกับ on-chain และ macroeconomic predictors ที่ lag 1 วันแล้ว",
    "qsvm_step2_title": "PCA ที่ fit จาก Training · 8 มิติ",
    "qsvm_step2_text": "Standardize และลดเหลือ 8 components โดยใช้ training data เท่านั้น และ RBF_PCA ใช้ representation ชุดเดียวกัน",
    "qsvm_step3_title": "RY Angle Encoding",
    "qsvm_step3_text": "นำ PCA component แต่ละตัวไปควบคุม RY rotation บน qubit ที่ตรงกัน",
    "qsvm_step4_title": "Fixed CNOT Chain",
    "qsvm_step4_text": "ใช้ nearest-neighbor CNOT chain ชุดเดียวกันหลัง data-dependent rotations ซึ่งไม่เปลี่ยน pairwise fidelity เพราะ unitary เดียวกันถูกใช้กับทั้งสอง states",
    "qsvm_step5_title": "Squared State Overlap",
    "qsvm_step5_text": "นิยาม similarity เป็น squared overlap ระหว่าง encoded statevectors สองตัว",
    "qsvm_step6_title": "Leakage-Safe Kernel Matrix",
    "qsvm_step6_text": "สร้าง kernel จาก eligible training observations ล่าสุดได้สูงสุด 1,024 ตัว และคำนวณ centering statistics จาก training kernel เท่านั้น",
    "qsvm_step7_title": "SVM Classifier",
    "qsvm_step7_text": "ส่ง centered precomputed fidelity kernel เข้า SVM โดยใช้ restricted C grid เดียวกับ classical models",
    "qsvm_step8_title": "Out-of-Sample Direction Prediction",
    "qsvm_step8_text": "สร้าง binary direction predictions สำหรับ untouched test fold แยกในแต่ละ horizon",
    "dashboard_framing": "Headline result ของงานตั้งใจให้แคบและชัด: QSVM มี robust classification advantage ที่ 1 วัน, ที่ 7 วันยังแข่งขันได้แต่หลักฐานยังไม่ robust พอที่จะสรุปว่าเหนือกว่า และที่ 30 วันไม่มี classification advantage ส่วน trading/risk และ quantum diagnostics ทำให้ขอบเขตการตีความแคบลงอีก",
    "classification_stat_note": "<span class=\"badge-focus gold evidence-badge\">Robust เฉพาะ 1 วัน</span><br>ที่ 1 วัน QSVM ยัง significant เหนือทั้ง RBF_FULL และ RBF_PCA หลัง Holm correction ทั้ง paired t-test และ Wilcoxon test และข้อได้เปรียบเดียวกันยังได้รับการสนับสนุนจาก circular moving-block bootstrap ที่ block lengths 2, 3 และ 4 ส่วนผล 7 วันยังไม่สอดคล้องกันพอที่จะสรุป robust superiority ขณะที่ 30 วันไม่มี QSVM advantage",
    "gap_kicker": "เมื่อ Classification กับผลทางการเงินให้คำตอบไม่เหมือนกัน",
    "gap_classification_label": "ผลด้าน Classification",
    "gap_classification_text": "ที่ 1 วัน QSVM มี mean F1 = 0.4760 เทียบกับ RBF_PCA = 0.4400 และ RBF_FULL = 0.4249 พร้อม robust statistical support เหนือ baseline ทั้งสอง",
    "gap_trading_label": "ผลด้าน Trading/Risk",
    "gap_trading_text": "ที่ central cost 0.0015 ต่อ side QSVM มี Sharpe = -0.5012, total return = -0.9685 และ aggregate turnover = 1330 ขณะที่ RBF_FULL มี Sharpe ที่ติดลบน้อยที่สุดในระยะ 1 วันที่ -0.3906",
    "gap_interpretation": "ดังนั้นผล 1 วันควรถูกมองเป็นข้อค้นพบด้าน classification ไม่ใช่ข้ออ้างด้านการซื้อขาย ภายใต้ fixed post-hoc protocol การทำนายทิศทางที่ดีกว่าไม่ได้แปลเป็น risk-adjusted financial performance ที่ดีกว่า",
    "diag_kicker": "Quantum-Kernel Diagnostics",
    "diag_interpretation": "Diagnostics ยืนยันว่า QSVM สร้าง representation ที่แตกต่างและมีโครงสร้างหลากหลายกว่า แต่ยังไม่ใช่ representation ที่มีประโยชน์กว่าอย่างสม่ำเสมอ เพราะ effective rank ที่สูงกว่าไม่ได้มาพร้อม target alignment, classification performance หรือ economic performance ที่ดีกว่าอย่างต่อเนื่อง",
    "diag_kernel_label": "สอง Kernels คล้ายกันแค่ไหน?",
    "diag_kernel_pearson": "Pearson correlation: 0.7065 (1D), 0.7084 (7D), 0.7123 (30D)",
    "diag_kernel_spearman": "Spearman correlation: 0.5341 (1D), 0.5378 (7D), 0.5490 (30D)",
    "diag_rank_label": "Spectrum มีความ rich แค่ไหน?",
    "diag_alignment_label": "Kernel Align กับ Target ได้ดีแค่ไหน?",
    "diag_alignment_text": "Direction alignment (QSVM / RBF_PCA) เท่ากับ 0.009073 / 0.006742 (1D), 0.025196 / 0.021750 (7D) และ 0.071702 / 0.075119 (30D) โดย differences คือ +0.002331, +0.003446 และ -0.003417 ตามลำดับ นอกจากนี้ volatility-regime alignment ของ QSVM ยังต่ำกว่า RBF_PCA ในทั้งสาม horizons",
    "diag_rank_qsvm": "QSVM effective rank: 142.4 (1D), 143.2 (7D), 143.9 (30D)",
    "diag_rank_rbf": "RBF_PCA effective rank: 36.0 (1D), 36.0 (7D), 36.2 (30D)",
    "claim_boundary_text": "เมื่อนำหลักฐานทั้งหมดมาพิจารณาร่วมกัน งานรองรับ robust QSVM classification advantage ที่ 1 วัน ที่ 7 วัน QSVM ยังแข่งขันได้แต่หลักฐานยังไม่ robust พอที่จะสรุปว่าเหนือกว่า และที่ 30 วันไม่มี QSVM classification advantage ผล trading/risk ไม่รองรับ QSVM trading superiority ขณะที่ kernel geometry ที่หลากหลายกว่าก็ยังไม่เพียงพอสำหรับสรุป quantum advantage โดยผล quantum ทั้งหมดมาจาก simulation",
    "claim_card1_status": "หลักฐานรองรับ",
    "claim_card1_title": "Robust 1-day classification advantage",
    "claim_card1_text": "QSVM มี 1-day mean F1 สูงสุดที่ 0.4760 และข้อได้เปรียบเหนือ RBF_FULL กับ RBF_PCA ยังคงอยู่หลัง Holm-corrected paired tests และ circular moving-block bootstrap ที่ block lengths 2, 3 และ 4",
    "claim_card2_status": "รองรับแบบมีขอบเขต",
    "claim_card2_title": "7-day competitiveness แต่ยังไม่ robust superiority",
    "claim_card2_text": "QSVM มี 7-day mean F1 สูงสุดที่ 0.4600 แต่ผลทางสถิติยังไม่สอดคล้องกันครบทั้งสอง baselines, paired tests ทั้งสองแบบ และ bootstrap ทุก block length จึงยังไม่ควรสรุป robust superiority",
    "claim_card3_status": "หลักฐานไม่รองรับ",
    "claim_card3_title": "QSVM classification advantage ที่ 30 วัน",
    "claim_card3_text": "RBF_PCA มี descriptive classification-stability profile แข็งแรงที่สุดที่ 30 วัน และทั้ง paired tests กับ block-bootstrap analysis ไม่สนับสนุน QSVM advantage",
    "claim_card4_status": "หลักฐานไม่รองรับ",
    "claim_card4_title": "QSVM trading superiority",
    "claim_card4_text": "ที่ central transaction cost QSVM ไม่ใช่ best-Sharpe model ใน horizon ใด และทุกโมเดลมี total return ติดลบ ส่วนการวิเคราะห์ trading/risk นี้ถูกกำหนดไว้ล่วงหน้าเพื่อใช้เป็น diagnostic เท่านั้น ไม่ใช่ optimized หรือ deployable strategy",
    "claim_card5_status": "ยังไม่สามารถสรุปได้",
    "claim_card5_title": "Quantum advantage หรือหลักฐานจาก Hardware จริง",
    "claim_card5_text": "QSVM มี effective rank สูงกว่า แต่ผลนี้ยังไม่เพียงพอที่จะสรุป predictive, economic หรือ computational quantum advantage เพราะ quantum kernel ถูกประเมินด้วย exact statevector simulation และ fixed post-RY CNOT chain ไม่ได้เปลี่ยน fidelity kernel ดังนั้นผลที่เห็นจึงไม่ควรถูกอธิบายว่าเกิดจาก entanglement contribution",
    "claim_boundary_statement": "ขอบเขตสุดท้ายของงาน: QSVM มี robust classification advantage เฉพาะที่ 1 วัน; ที่ 7 วันแข่งขันได้แต่ยังไม่ robustly superior; ที่ 30 วันไม่มี QSVM classification advantage; ไม่มี QSVM trading superiority; และยังไม่มีหลักฐานของ quantum advantage, computational speedup, entanglement contribution หรือผลจาก physical quantum hardware",
    "table_group1_title": "Classification และ Stability",
    "table_group1_intro": "ผล macro F1 จาก 27 matched outer walk-forward folds ตารางนี้แสดง descriptive results ส่วนข้อสรุปเรื่อง superiority จะอ้างอิง paired tests และ temporal block-bootstrap checks ร่วมกัน",
    "table_group1_note": "<span class=\"badge-focus gold evidence-badge\">Robust เฉพาะ 1 วัน</span><br>ข้อได้เปรียบของ QSVM ที่ 1 วันได้รับการสนับสนุนเหนือ baseline ทั้งสองจาก Holm-corrected paired t-tests, Wilcoxon tests และ circular moving-block bootstrap ที่ block lengths 2, 3 และ 4 ส่วนผล 7 วันยังไม่สอดคล้องกันพอที่จะสรุป robust superiority ขณะที่ 30 วันไม่มี QSVM advantage",
    "table_group2_title": "Trading/Risk",
    "table_group2_intro": "ผล post-hoc ที่ central transaction cost 0.0015 ต่อ side ใช้ clean OOS predictions เข้า position ที่ Open(t+1), ออกที่ Open(t+h+1) และใช้ global non-overlapping trade sequence เดียวต่อเนื่องตลอด OOS period",
    "table_group2_note": "ทุกโมเดลมี total return ติดลบที่ central cost Turnover ในตารางคือ aggregate turnover ตลอด OOS period ที่ประเมิน ตัวเลขเหล่านี้ใช้เป็น economic diagnostic ของ predictions เท่านั้น ไม่ใช่ optimized trading strategy หรือหลักฐานเชิงการลงทุน",
    "table_group3_title": "หลักฐานรวมและข้อสรุปสุดท้าย",
    "table_group3_intro": "ตารางนี้วางผลด้าน prediction, statistical robustness, financial interpretation และ quantum diagnostics ไว้ข้างกัน เพื่อให้เห็นข้อสรุปของแต่ละ horizon โดยไม่ปน evidence layers เข้าด้วยกัน",
    "final_takeaway_kicker": "ข้อสรุปสุดท้าย",
    "final_takeaway_title": "งานนี้แสดงให้เห็นอะไรจริง ๆ",
    "final_takeaway_message": "<span class=\"final-message-line final-message-lead\">QSVM มี robust classification advantage เฉพาะที่ระยะ 1 วัน</span><span class=\"final-message-line\">ที่ 7 วัน QSVM ยังแข่งขันได้ แต่หลักฐานเรื่องความเหนือกว่ายังไม่ robust เมื่อพิจารณาการตรวจสอบทางสถิติทั้งหมด ส่วนที่ 30 วันไม่มี QSVM classification advantage และ RBF_PCA มีผลเชิงพรรณนาโดยรวมแข็งแรงที่สุด</span><span class=\"final-message-line\">Predefined post-hoc trading/risk analysis ไม่สนับสนุน QSVM trading superiority และทุกโมเดลมี total return ติดลบที่ central transaction cost</span><span class=\"final-message-line\">QSVM มี effective rank สูงกว่า RBF_PCA อย่างมาก แต่ target alignment ต่างกันเพียงเล็กน้อยและขึ้นกับ horizon ดังนั้น kernel geometry ที่หลากหลายกว่ายังไม่เพียงพอสำหรับสรุป quantum advantage</span><span class=\"final-message-line final-message-boundary\">หลักฐาน quantum ทั้งหมดมาจาก exact statevector simulation ไม่ใช่ physical quantum hardware งานนี้ไม่ได้อ้าง computational speedup, hardware advantage, entanglement contribution หรือ general QSVM superiority</span>",
    "final_chip_leakage": "ควบคุม leakage",
    "final_chip_horizon": "สรุปแยกตาม horizon",
    "final_chip_trading": "แยก trading/risk ออกจาก prediction",
    "final_chip_diagnostic": "จำกัดที่ simulation evidence",
    "final_takeaway_supporting": "",
    "final_takeaway_closing": ""
  }
};

const tableHTML = {
  "en": {
    "group1": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Mean F1</th><th>Std F1</th><th>Worst F1</th><th>Interpretation</th></tr></thead>\n        <tbody><tr class=\"highlight-row\"><td>1-day</td><td>QSVM</td><td>0.4760</td><td>0.0448</td><td>0.3779</td><td><span class=\"badge-focus gold evidence-badge\">Robust 1D advantage</span><br>Strongest 1-day descriptive profile, with robust support over both classical baselines.</td></tr><tr><td>1-day</td><td>RBF_PCA</td><td>0.4400</td><td>0.0710</td><td>0.2705</td><td>Classical comparator using the same eight-dimensional PCA representation as QSVM.</td></tr><tr><td>1-day</td><td>RBF_FULL</td><td>0.4249</td><td>0.0686</td><td>0.2705</td><td>Classical benchmark using the full 16-predictor representation.</td></tr><tr class=\"highlight-row\"><td>7-day</td><td>QSVM</td><td>0.4600</td><td>0.0746</td><td>0.2796</td><td><span class=\"badge-focus gold evidence-badge\">Competitive, not robustly superior</span><br>Best descriptive profile, but the full statistical evidence does not support robust superiority.</td></tr><tr><td>7-day</td><td>RBF_PCA</td><td>0.4066</td><td>0.0961</td><td>0.2366</td><td>Lower mean F1 and a weaker worst-fold result.</td></tr><tr><td>7-day</td><td>RBF_FULL</td><td>0.4228</td><td>0.1029</td><td>0.2261</td><td>Lower mean F1 and the weakest worst-fold result at 7 days.</td></tr><tr><td>30-day</td><td>QSVM</td><td>0.3832</td><td>0.1460</td><td>0.0111</td><td><span class=\"badge-focus copper evidence-badge\">No QSVM advantage</span><br>Lower mean F1 and very weak worst-fold performance; no QSVM advantage is supported.</td></tr><tr class=\"highlight-row\"><td>30-day</td><td>RBF_PCA</td><td>0.3977</td><td>0.1440</td><td>0.1756</td><td><span class=\"badge-focus gold evidence-badge\">Strongest 30D descriptive profile</span></td></tr><tr><td>30-day</td><td>RBF_FULL</td><td>0.3855</td><td>0.1790</td><td>0.0111</td><td>Higher cross-fold dispersion and a very weak worst fold.</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "group2": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Trades</th><th>Total Return</th><th>Annualized Return</th><th>Sharpe</th><th>MDD</th><th>Turnover</th><th>Interpretation</th></tr></thead>\n        <tbody><tr><td>1-day</td><td>QSVM</td><td>2464</td><td>-0.9685</td><td>-0.4010</td><td>-0.5012</td><td>-0.9815</td><td>1330</td><td>Not the best Sharpe; also has the highest turnover at 1 day.</td></tr><tr><td>1-day</td><td>RBF_PCA</td><td>2464</td><td>-0.9537</td><td>-0.3659</td><td>-0.4117</td><td>-0.9678</td><td>744</td><td>Second-best Sharpe at 1 day.</td></tr><tr class=\"highlight-row\"><td>1-day</td><td>RBF_FULL</td><td>2464</td><td>-0.9509</td><td>-0.3603</td><td>-0.3906</td><td>-0.9790</td><td>780</td><td><span class=\"badge-focus gold evidence-badge\">Best 1D Sharpe</span></td></tr><tr><td>7-day</td><td>QSVM</td><td>352</td><td>-0.8741</td><td>-0.2645</td><td>-0.1694</td><td>-0.9198</td><td>262</td><td>Not the best Sharpe at 7 days.</td></tr><tr><td>7-day</td><td>RBF_PCA</td><td>352</td><td>-0.9705</td><td>-0.4068</td><td>-0.5014</td><td>-0.9736</td><td>136</td><td>Weakest Sharpe at 7 days.</td></tr><tr class=\"highlight-row\"><td>7-day</td><td>RBF_FULL</td><td>352</td><td>-0.8235</td><td>-0.2267</td><td>-0.0877</td><td>-0.8965</td><td>172</td><td><span class=\"badge-focus gold evidence-badge\">Best 7D Sharpe</span></td></tr><tr><td>30-day</td><td>QSVM</td><td>83</td><td>-0.9979</td><td>-0.5956</td><td>-0.8398</td><td>-0.9979</td><td>68</td><td>Weakest Sharpe at 30 days.</td></tr><tr class=\"highlight-row\"><td>30-day</td><td>RBF_PCA</td><td>83</td><td>-0.8423</td><td>-0.2374</td><td>0.0065</td><td>-0.9013</td><td>60</td><td><span class=\"badge-focus gold evidence-badge\">Best 30D Sharpe</span></td></tr><tr><td>30-day</td><td>RBF_FULL</td><td>83</td><td>-0.9081</td><td>-0.2954</td><td>-0.1160</td><td>-0.9578</td><td>56</td><td>Second-best Sharpe at 30 days.</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "group3": "\n    <div class=\"table-scroll table-fit-integrated\">\n      <table>\n        <colgroup><col class=\"col-horizon\"><col class=\"col-bestf1\"><col class=\"col-stat\"><col class=\"col-sharpe\"><col class=\"col-trading\"><col class=\"col-diagnostic\"><col class=\"col-supported\"></colgroup>\n        <thead><tr><th>Horizon</th><th>Best Mean F1</th><th>Statistical Evidence</th><th>Best Central-Cost Sharpe Model</th><th>Trading Interpretation</th><th>Quantum Diagnostic</th><th>Supported Interpretation</th></tr></thead>\n        <tbody><tr class=\"highlight-row\"><td>1-day</td><td>QSVM</td><td>Robust against both baselines</td><td>RBF_FULL</td><td>QSVM is not best at central cost</td><td>Richer geometry; only slightly higher direction alignment</td><td><span class=\"badge-focus gold evidence-badge\">Robust QSVM classification advantage only</span></td></tr><tr><td>7-day</td><td>QSVM</td><td>Mixed; not robust across bootstrap blocks</td><td>RBF_FULL</td><td>QSVM is not best at central cost</td><td>Richer geometry; only slightly higher direction alignment</td><td>Competitive, no robust superiority</td></tr><tr><td>30-day</td><td>RBF_PCA</td><td>No QSVM advantage</td><td>RBF_PCA</td><td>QSVM weakest central-cost Sharpe</td><td>Richer geometry; lower direction alignment</td><td>No QSVM classification advantage</td></tr></tbody>\n      </table>\n    </div>\n    "
  },
  "th": {
    "group1": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Mean F1</th><th>Std F1</th><th>Worst F1</th><th>Interpretation</th></tr></thead>\n        <tbody><tr class=\"highlight-row\"><td>1-day</td><td>QSVM</td><td>0.4760</td><td>0.0448</td><td>0.3779</td><td><span class=\"badge-focus gold evidence-badge\">Robust 1D advantage</span><br>มี descriptive profile แข็งแรงที่สุดที่ 1 วัน และข้อได้เปรียบเหนือ classical baselines ทั้งสองได้รับการสนับสนุนอย่าง robust</td></tr><tr><td>1-day</td><td>RBF_PCA</td><td>0.4400</td><td>0.0710</td><td>0.2705</td><td>Classical comparator ที่ใช้ PCA 8 มิติชุดเดียวกับ QSVM</td></tr><tr><td>1-day</td><td>RBF_FULL</td><td>0.4249</td><td>0.0686</td><td>0.2705</td><td>Classical benchmark ที่ใช้ predictors ครบทั้ง 16 ตัว</td></tr><tr class=\"highlight-row\"><td>7-day</td><td>QSVM</td><td>0.4600</td><td>0.0746</td><td>0.2796</td><td><span class=\"badge-focus gold evidence-badge\">แข่งขันได้ แต่ไม่ robustly superior</span><br>มี descriptive profile ดีที่สุด แต่หลักฐานทางสถิติทั้งหมด ยังไม่รองรับ robust superiority</td></tr><tr><td>7-day</td><td>RBF_PCA</td><td>0.4066</td><td>0.0961</td><td>0.2366</td><td>Mean F1 ต่ำกว่า และผลใน worst fold อ่อนกว่า QSVM</td></tr><tr><td>7-day</td><td>RBF_FULL</td><td>0.4228</td><td>0.1029</td><td>0.2261</td><td>Mean F1 ต่ำกว่า และมี worst-fold result อ่อนที่สุดที่ 7 วัน</td></tr><tr><td>30-day</td><td>QSVM</td><td>0.3832</td><td>0.1460</td><td>0.0111</td><td><span class=\"badge-focus copper evidence-badge\">ไม่มี QSVM advantage</span><br>Mean F1 ต่ำกว่า และ worst-fold performance อ่อนมาก จึงไม่มีหลักฐานรองรับ QSVM advantage</td></tr><tr class=\"highlight-row\"><td>30-day</td><td>RBF_PCA</td><td>0.3977</td><td>0.1440</td><td>0.1756</td><td><span class=\"badge-focus gold evidence-badge\">descriptive profile แข็งแรงที่สุดที่ 30 วัน</span></td></tr><tr><td>30-day</td><td>RBF_FULL</td><td>0.3855</td><td>0.1790</td><td>0.0111</td><td>Cross-fold dispersion สูงกว่า และ worst fold อ่อนมาก</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "group2": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Trades</th><th>Total Return</th><th>Annualized Return</th><th>Sharpe</th><th>MDD</th><th>Turnover</th><th>Interpretation</th></tr></thead>\n        <tbody><tr><td>1-day</td><td>QSVM</td><td>2464</td><td>-0.9685</td><td>-0.4010</td><td>-0.5012</td><td>-0.9815</td><td>1330</td><td>ไม่ใช่โมเดลที่มี Sharpe ดีที่สุดที่ 1 วัน และมี turnover สูงที่สุดที่ 1 วัน</td></tr><tr><td>1-day</td><td>RBF_PCA</td><td>2464</td><td>-0.9537</td><td>-0.3659</td><td>-0.4117</td><td>-0.9678</td><td>744</td><td>Sharpe ดีเป็นอันดับสองที่ 1 วัน</td></tr><tr class=\"highlight-row\"><td>1-day</td><td>RBF_FULL</td><td>2464</td><td>-0.9509</td><td>-0.3603</td><td>-0.3906</td><td>-0.9790</td><td>780</td><td><span class=\"badge-focus gold evidence-badge\">Best 1D Sharpe</span></td></tr><tr><td>7-day</td><td>QSVM</td><td>352</td><td>-0.8741</td><td>-0.2645</td><td>-0.1694</td><td>-0.9198</td><td>262</td><td>ไม่ใช่โมเดลที่มี Sharpe ดีที่สุด</td></tr><tr><td>7-day</td><td>RBF_PCA</td><td>352</td><td>-0.9705</td><td>-0.4068</td><td>-0.5014</td><td>-0.9736</td><td>136</td><td>Sharpe อ่อนที่สุดที่ 7 วัน</td></tr><tr class=\"highlight-row\"><td>7-day</td><td>RBF_FULL</td><td>352</td><td>-0.8235</td><td>-0.2267</td><td>-0.0877</td><td>-0.8965</td><td>172</td><td><span class=\"badge-focus gold evidence-badge\">Best 7D Sharpe</span></td></tr><tr><td>30-day</td><td>QSVM</td><td>83</td><td>-0.9979</td><td>-0.5956</td><td>-0.8398</td><td>-0.9979</td><td>68</td><td>Sharpe อ่อนที่สุดที่ 30 วัน</td></tr><tr class=\"highlight-row\"><td>30-day</td><td>RBF_PCA</td><td>83</td><td>-0.8423</td><td>-0.2374</td><td>0.0065</td><td>-0.9013</td><td>60</td><td><span class=\"badge-focus gold evidence-badge\">Best 30D Sharpe</span></td></tr><tr><td>30-day</td><td>RBF_FULL</td><td>83</td><td>-0.9081</td><td>-0.2954</td><td>-0.1160</td><td>-0.9578</td><td>56</td><td>Sharpe ดีเป็นอันดับสองที่ 30 วัน</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "group3": "\n    <div class=\"table-scroll table-fit-integrated\">\n      <table>\n        <colgroup><col class=\"col-horizon\"><col class=\"col-bestf1\"><col class=\"col-stat\"><col class=\"col-sharpe\"><col class=\"col-trading\"><col class=\"col-diagnostic\"><col class=\"col-supported\"></colgroup>\n        <thead><tr><th>Horizon</th><th>Best Mean F1</th><th>Statistical Evidence</th><th>Best Central-Cost Sharpe Model</th><th>Trading Interpretation</th><th>Quantum Diagnostic</th><th>Supported Interpretation</th></tr></thead>\n        <tbody><tr class=\"highlight-row\"><td>1-day</td><td>QSVM</td><td>Robust เหนือ baseline ทั้งสอง</td><td>RBF_FULL</td><td>QSVM ไม่ใช่โมเดลที่มี Sharpe ดีที่สุดที่ central cost</td><td>Kernel geometry richer แต่ direction alignment สูงกว่าเพียงเล็กน้อย</td><td><span class=\"badge-focus gold evidence-badge\">สนับสนุนเฉพาะ robust QSVM classification advantage</span></td></tr><tr><td>7-day</td><td>QSVM</td><td>หลักฐานยัง mixed และไม่ robust across bootstrap blocks</td><td>RBF_FULL</td><td>QSVM ไม่ใช่โมเดลที่มี Sharpe ดีที่สุดที่ central cost</td><td>Kernel geometry richer แต่ direction alignment สูงกว่าเพียงเล็กน้อย</td><td>แข่งขันได้ แต่ไม่มี robust superiority</td></tr><tr><td>30-day</td><td>RBF_PCA</td><td>ไม่มี QSVM advantage</td><td>RBF_PCA</td><td>QSVM มี central-cost Sharpe อ่อนที่สุด</td><td>Kernel geometry richer แต่ direction alignment ต่ำกว่า RBF_PCA</td><td>ไม่มี QSVM classification advantage</td></tr></tbody>\n      </table>\n    </div>\n    "
  }
};

const classificationData = [{"horizon": "1", "model": "QSVM", "mean_f1": 0.476, "std_f1": 0.0448, "worst_f1": 0.3779}, {"horizon": "1", "model": "RBF_PCA", "mean_f1": 0.44, "std_f1": 0.071, "worst_f1": 0.2705}, {"horizon": "1", "model": "RBF_FULL", "mean_f1": 0.4249, "std_f1": 0.0686, "worst_f1": 0.2705}, {"horizon": "7", "model": "QSVM", "mean_f1": 0.46, "std_f1": 0.0746, "worst_f1": 0.2796}, {"horizon": "7", "model": "RBF_FULL", "mean_f1": 0.4228, "std_f1": 0.1029, "worst_f1": 0.2261}, {"horizon": "7", "model": "RBF_PCA", "mean_f1": 0.4066, "std_f1": 0.0961, "worst_f1": 0.2366}, {"horizon": "30", "model": "RBF_PCA", "mean_f1": 0.3977, "std_f1": 0.144, "worst_f1": 0.1756}, {"horizon": "30", "model": "RBF_FULL", "mean_f1": 0.3855, "std_f1": 0.179, "worst_f1": 0.0111}, {"horizon": "30", "model": "QSVM", "mean_f1": 0.3832, "std_f1": 0.146, "worst_f1": 0.0111}];
const tradingData = [{"horizon": "1", "model": "QSVM", "trades": 2464, "total_return": -0.9685, "annualized_return": -0.401, "sharpe": -0.5012, "max_drawdown": -0.9815, "total_turnover": 1330}, {"horizon": "1", "model": "RBF_FULL", "trades": 2464, "total_return": -0.9509, "annualized_return": -0.3603, "sharpe": -0.3906, "max_drawdown": -0.979, "total_turnover": 780}, {"horizon": "1", "model": "RBF_PCA", "trades": 2464, "total_return": -0.9537, "annualized_return": -0.3659, "sharpe": -0.4117, "max_drawdown": -0.9678, "total_turnover": 744}, {"horizon": "7", "model": "QSVM", "trades": 352, "total_return": -0.8741, "annualized_return": -0.2645, "sharpe": -0.1694, "max_drawdown": -0.9198, "total_turnover": 262}, {"horizon": "7", "model": "RBF_FULL", "trades": 352, "total_return": -0.8235, "annualized_return": -0.2267, "sharpe": -0.0877, "max_drawdown": -0.8965, "total_turnover": 172}, {"horizon": "7", "model": "RBF_PCA", "trades": 352, "total_return": -0.9705, "annualized_return": -0.4068, "sharpe": -0.5014, "max_drawdown": -0.9736, "total_turnover": 136}, {"horizon": "30", "model": "QSVM", "trades": 83, "total_return": -0.9979, "annualized_return": -0.5956, "sharpe": -0.8398, "max_drawdown": -0.9979, "total_turnover": 68}, {"horizon": "30", "model": "RBF_FULL", "trades": 83, "total_return": -0.9081, "annualized_return": -0.2954, "sharpe": -0.116, "max_drawdown": -0.9578, "total_turnover": 56}, {"horizon": "30", "model": "RBF_PCA", "trades": 83, "total_return": -0.8423, "annualized_return": -0.2374, "sharpe": 0.0065, "max_drawdown": -0.9013, "total_turnover": 60}];
const diagnosticData = [{"horizon": "1", "model": "QSVM", "effective_rank": 142.4}, {"horizon": "1", "model": "RBF_PCA", "effective_rank": 36.0}, {"horizon": "7", "model": "QSVM", "effective_rank": 143.2}, {"horizon": "7", "model": "RBF_PCA", "effective_rank": 36.0}, {"horizon": "30", "model": "QSVM", "effective_rank": 143.9}, {"horizon": "30", "model": "RBF_PCA", "effective_rank": 36.2}];

const horizonExplorerData = {
  en: {
    "1": {
      horizonLabel: "1 day",
      claim: "QSVM wins the classification comparison—and the result is robust.",
      summary: "This is the only forecast horizon where a QSVM superiority claim survives the full statistical robustness checks.",
      classificationValue: "QSVM · Mean F1 0.4760",
      classificationNote: "RBF_PCA 0.4400 · RBF_FULL 0.4249",
      bars: [
        { model: "QSVM", value: 0.4760, display: "0.4760" },
        { model: "RBF_PCA", value: 0.4400, display: "0.4400" },
        { model: "RBF_FULL", value: 0.4249, display: "0.4249" }
      ],
      statValue: "Robust against both baselines",
      statNote: "Holm-corrected paired tests and circular moving-block bootstrap checks both support the 1-day QSVM classification advantage.",
      tradingValue: "Best Sharpe: RBF_FULL −0.3906",
      tradingNote: "QSVM Sharpe is −0.5012. At the central cost, total return is negative for every model.",
      verdictValue: "Classification advantage only",
      verdictNote: "The result supports QSVM classification superiority at 1 day, not QSVM trading superiority.",
      diagnostic: "Quantum diagnostic · richer geometry, not quantum advantage"
    },
    "7": {
      horizonLabel: "7 days",
      claim: "QSVM leads mean F1, but the evidence is not robust enough for superiority.",
      summary: "The descriptive result is favorable to QSVM, yet the statistical evidence does not remain consistent across tests and bootstrap block lengths.",
      classificationValue: "QSVM · Mean F1 0.4600",
      classificationNote: "RBF_FULL 0.4228 · RBF_PCA 0.4066",
      bars: [
        { model: "QSVM", value: 0.4600, display: "0.4600" },
        { model: "RBF_PCA", value: 0.4066, display: "0.4066" },
        { model: "RBF_FULL", value: 0.4228, display: "0.4228" }
      ],
      statValue: "Mixed; not robust",
      statNote: "QSVM versus RBF_FULL is not significant, while the evidence against RBF_PCA is not consistent across the paired tests and moving-block bootstrap checks.",
      tradingValue: "Best Sharpe: RBF_FULL −0.0877",
      tradingNote: "QSVM Sharpe is −0.1694. At the central cost, total return is negative for every model.",
      verdictValue: "Competitive, not robustly superior",
      verdictNote: "QSVM remains a meaningful competitor at 7 days, but the evidence does not support a robust superiority claim.",
      diagnostic: "Quantum diagnostic · richer geometry, only slightly higher direction alignment"
    },
    "30": {
      horizonLabel: "30 days",
      claim: "The classification lead shifts to RBF_PCA.",
      summary: "At the longest horizon, the dimension-controlled classical comparator has the strongest descriptive classification-stability profile.",
      classificationValue: "RBF_PCA · Mean F1 0.3977",
      classificationNote: "RBF_FULL 0.3855 · QSVM 0.3832",
      bars: [
        { model: "QSVM", value: 0.3832, display: "0.3832" },
        { model: "RBF_PCA", value: 0.3977, display: "0.3977" },
        { model: "RBF_FULL", value: 0.3855, display: "0.3855" }
      ],
      statValue: "No QSVM advantage",
      statNote: "Neither the paired tests nor the circular moving-block bootstrap analysis supports QSVM classification superiority at 30 days.",
      tradingValue: "Best Sharpe: RBF_PCA 0.0065",
      tradingNote: "QSVM Sharpe is −0.8398. Even the best Sharpe occurs alongside a negative total return at the central cost.",
      verdictValue: "No QSVM classification advantage",
      verdictNote: "The evidence does not support a QSVM classification advantage at 30 days, and it provides no basis for a broader superiority claim.",
      diagnostic: "Quantum diagnostic · richer geometry, but lower direction alignment than RBF_PCA"
    }
  },
  th: {
    "1": {
      horizonLabel: "1 วัน",
      claim: "QSVM ชนะด้าน classification และผลนี้ robust ทางสถิติ",
      summary: "นี่เป็นระยะพยากรณ์เดียวที่ข้อสรุปว่า QSVM เหนือกว่าในงาน classification ยังคงอยู่หลังการตรวจสอบความ robust ทางสถิติทั้งหมด",
      classificationValue: "QSVM · Mean F1 0.4760",
      classificationNote: "RBF_PCA 0.4400 · RBF_FULL 0.4249",
      bars: [
        { model: "QSVM", value: 0.4760, display: "0.4760" },
        { model: "RBF_PCA", value: 0.4400, display: "0.4400" },
        { model: "RBF_FULL", value: 0.4249, display: "0.4249" }
      ],
      statValue: "Robust เหนือ baseline ทั้งสอง",
      statNote: "ทั้ง Holm-corrected paired tests และ circular moving-block bootstrap สนับสนุนข้อได้เปรียบด้าน classification ของ QSVM ที่ระยะ 1 วัน",
      tradingValue: "Sharpe ดีที่สุด: RBF_FULL −0.3906",
      tradingNote: "QSVM มี Sharpe = −0.5012 และที่ central cost ทุกโมเดลยังมี total return ติดลบ",
      verdictValue: "ได้เปรียบเฉพาะด้าน classification",
      verdictNote: "ผลนี้รองรับ QSVM classification superiority ที่ 1 วัน แต่ไม่ได้รองรับ QSVM trading superiority",
      diagnostic: "Quantum diagnostic · geometry richer แต่ยังไม่ใช่ quantum advantage"
    },
    "7": {
      horizonLabel: "7 วัน",
      claim: "QSVM มี mean F1 สูงสุด แต่หลักฐานยังไม่ robust พอสำหรับข้อสรุปว่าเหนือกว่า",
      summary: "ผลเชิงพรรณนาเป็นบวกต่อ QSVM แต่หลักฐานทางสถิติยังไม่สม่ำเสมอเมื่อพิจารณาทั้ง paired tests และ bootstrap หลาย block lengths",
      classificationValue: "QSVM · Mean F1 0.4600",
      classificationNote: "RBF_FULL 0.4228 · RBF_PCA 0.4066",
      bars: [
        { model: "QSVM", value: 0.4600, display: "0.4600" },
        { model: "RBF_PCA", value: 0.4066, display: "0.4066" },
        { model: "RBF_FULL", value: 0.4228, display: "0.4228" }
      ],
      statValue: "หลักฐาน mixed; ยังไม่ robust",
      statNote: "การเทียบกับ RBF_FULL ไม่ significant ขณะที่หลักฐานเมื่อเทียบกับ RBF_PCA ไม่สม่ำเสมอเมื่อดูทั้ง paired tests และ moving-block bootstrap",
      tradingValue: "Sharpe ดีที่สุด: RBF_FULL −0.0877",
      tradingNote: "QSVM มี Sharpe = −0.1694 และที่ central cost ทุกโมเดลยังมี total return ติดลบ",
      verdictValue: "แข่งขันได้ แต่ยังไม่ robustly superior",
      verdictNote: "QSVM ยังเป็นคู่แข่งที่มีความหมายที่ 7 วัน แต่หลักฐานยังไม่รองรับข้อสรุปว่าเหนือกว่าอย่าง robust",
      diagnostic: "Quantum diagnostic · geometry richer และ direction alignment สูงกว่าเพียงเล็กน้อย"
    },
    "30": {
      horizonLabel: "30 วัน",
      claim: "ผู้นำด้าน classification เปลี่ยนเป็น RBF_PCA",
      summary: "ที่ระยะยาวที่สุด RBF_PCA ซึ่งเป็น classical comparator ที่ควบคุมมิติ มี descriptive classification-stability profile แข็งแรงที่สุด",
      classificationValue: "RBF_PCA · Mean F1 0.3977",
      classificationNote: "RBF_FULL 0.3855 · QSVM 0.3832",
      bars: [
        { model: "QSVM", value: 0.3832, display: "0.3832" },
        { model: "RBF_PCA", value: 0.3977, display: "0.3977" },
        { model: "RBF_FULL", value: 0.3855, display: "0.3855" }
      ],
      statValue: "ไม่มี QSVM advantage",
      statNote: "ทั้ง paired tests และ circular moving-block bootstrap ไม่สนับสนุน QSVM classification superiority ที่ระยะ 30 วัน",
      tradingValue: "Sharpe ดีที่สุด: RBF_PCA 0.0065",
      tradingNote: "QSVM มี Sharpe = −0.8398 และแม้โมเดลที่ Sharpe ดีที่สุดก็ยังมี total return ติดลบที่ central cost",
      verdictValue: "ไม่มี QSVM classification advantage",
      verdictNote: "หลักฐานไม่รองรับข้อได้เปรียบด้าน classification ของ QSVM ที่ 30 วัน และไม่รองรับข้อสรุปที่กว้างกว่านั้น",
      diagnostic: "Quantum diagnostic · geometry richer แต่ direction alignment ต่ำกว่า RBF_PCA"
    }
  }
};


const evidenceStepOrder = ['classification', 'stability', 'trading', 'diagnostics', 'claim'];
let activeEvidenceStep = 'classification';
let evidenceStepperTimer = null;

const diagnosticAlignmentData = {
  '1': { qsvm: 0.009073, rbfPca: 0.006742, diff: 0.002331 },
  '7': { qsvm: 0.025196, rbfPca: 0.021750, diff: 0.003446 },
  '30': { qsvm: 0.071702, rbfPca: 0.075119, diff: -0.003417 }
};

const evidenceStepperText = {
  en: {
    kicker: 'Evidence logic',
    progress: (index, total) => `Evidence layer ${index} of ${total}`,
    shortcut: 'Change the horizon above. Change the evidence layer here.',
    previous: 'Previous',
    next: 'Next',
    layerLabels: {
      classification: 'Directional classification',
      stability: 'Fold-level stability & robustness',
      trading: 'Post-hoc trading / risk',
      diagnostics: 'Quantum-kernel diagnostics',
      claim: 'Supported interpretation'
    },
    bestSharpe: 'Best Sharpe',
    stdF1: 'Std F1',
    worstF1: 'Worst F1',
    totalReturn: 'Total return',
    turnover: 'Turnover',
    effectiveRank: 'Effective rank',
    directionAlignment: 'Direction alignment',
    alignmentDifference: 'QSVM − RBF_PCA',
    simulationNote: 'Exact statevector simulation · no physical quantum hardware',
    diagnosticTitle: 'The quantum kernel is richer, but richer is not the same as better.',
    diagnosticNote: 'The effective-rank gap is large, while direction-target alignment differs only slightly and reverses at 30 days. These diagnostics describe representation geometry; they do not establish quantum advantage.',
    claimLabels: ['Classification', 'Robustness', 'Trading / risk', 'Quantum diagnostic']
  },
  th: {
    kicker: 'ตรรกะของหลักฐาน',
    progress: (index, total) => `หลักฐานชั้นที่ ${index} จาก ${total}`,
    shortcut: 'เปลี่ยนระยะพยากรณ์ด้านบน แล้วไล่ดูหลักฐานแต่ละชั้นตรงนี้',
    previous: 'ก่อนหน้า',
    next: 'ถัดไป',
    layerLabels: {
      classification: 'ผลการจำแนกทิศทาง',
      stability: 'ความเสถียรและความ robust ระหว่าง folds',
      trading: 'การตีความด้าน Trading / Risk',
      diagnostics: 'Quantum-kernel diagnostics',
      claim: 'ข้อสรุปที่หลักฐานรองรับ'
    },
    bestSharpe: 'Sharpe สูงสุด',
    stdF1: 'Std F1',
    worstF1: 'Worst F1',
    totalReturn: 'Total return',
    turnover: 'Turnover',
    effectiveRank: 'Effective rank',
    directionAlignment: 'Direction alignment',
    alignmentDifference: 'QSVM − RBF_PCA',
    simulationNote: 'Exact statevector simulation · ไม่ใช่ physical quantum hardware',
    diagnosticTitle: 'Quantum kernel มีโครงสร้างที่ richer แต่ richer ไม่ได้แปลว่าดีกว่า',
    diagnosticNote: 'ความต่างของ effective rank มีขนาดใหญ่ แต่ direction-target alignment ต่างกันเพียงเล็กน้อยและกลับทิศที่ 30 วัน ดังนั้น diagnostics เหล่านี้อธิบาย geometry ของ representation ไม่ได้พิสูจน์ quantum advantage',
    claimLabels: ['Classification', 'ความ robust', 'Trading / Risk', 'Quantum diagnostic']
  }
};

function getHorizonRows(source, horizon) {
  return models.map(model => source.find(row => row.horizon === horizon && row.model === model)).filter(Boolean);
}

function renderStepperClassification(data) {
  const leader = Math.max(...data.bars.map(item => item.value));
  return `<div class="stepper-bar-stack">${data.bars.map(item => {
    const width = Math.max(8, Math.min(100, (item.value / 0.5) * 100));
    const leaderClass = item.value === leader ? ' is-leader' : '';
    return `<div class="stepper-bar-row${leaderClass}">
      <div class="stepper-bar-meta"><span>${item.model}</span><strong>${item.display}</strong></div>
      <div class="stepper-bar-track"><span class="stepper-bar-fill model-${horizonExplorerModelClass(item.model)}" style="--bar-width:${width.toFixed(1)}%"></span></div>
    </div>`;
  }).join('')}</div>`;
}

function renderStepperStability(horizon) {
  const text = evidenceStepperText[currentLang];
  const rows = getHorizonRows(classificationData, horizon);
  return `<div class="stepper-metric-grid">${rows.map(row => `<div class="stepper-model-card model-${horizonExplorerModelClass(row.model)}">
    <div class="stepper-model-name"><span class="stepper-model-dot"></span>${row.model}</div>
    <div class="stepper-metric-pair"><span>${text.stdF1}</span><strong>${row.std_f1.toFixed(4)}</strong></div>
    <div class="stepper-metric-pair"><span>${text.worstF1}</span><strong>${row.worst_f1.toFixed(4)}</strong></div>
  </div>`).join('')}</div>`;
}

function renderStepperTrading(horizon) {
  const text = evidenceStepperText[currentLang];
  const rows = getHorizonRows(tradingData, horizon);
  const best = Math.max(...rows.map(row => row.sharpe));
  return `<div class="stepper-metric-grid">${rows.map(row => `<div class="stepper-model-card model-${horizonExplorerModelClass(row.model)}${row.sharpe === best ? ' is-best' : ''}">
    <div class="stepper-model-name"><span class="stepper-model-dot"></span>${row.model}${row.sharpe === best ? `<em>${text.bestSharpe}</em>` : ''}</div>
    <div class="stepper-metric-pair"><span>Sharpe</span><strong>${row.sharpe.toFixed(4)}</strong></div>
    <div class="stepper-metric-pair"><span>${text.totalReturn}</span><strong>${row.total_return.toFixed(4)}</strong></div>
    <div class="stepper-metric-pair"><span>${text.turnover}</span><strong>${row.total_turnover}</strong></div>
  </div>`).join('')}</div>`;
}

function renderStepperDiagnostics(horizon) {
  const text = evidenceStepperText[currentLang];
  const rows = diagnosticData.filter(row => row.horizon === horizon);
  const alignment = diagnosticAlignmentData[horizon];
  const maxRank = 150;
  return `<div class="stepper-diagnostic-layout">
    <div class="stepper-rank-bars">${rows.map(row => {
      const width = Math.max(8, Math.min(100, (row.effective_rank / maxRank) * 100));
      return `<div class="stepper-bar-row">
        <div class="stepper-bar-meta"><span>${row.model}</span><strong>${row.effective_rank.toFixed(1)}</strong></div>
        <div class="stepper-bar-track"><span class="stepper-bar-fill model-${horizonExplorerModelClass(row.model)}" style="--bar-width:${width.toFixed(1)}%"></span></div>
      </div>`;
    }).join('')}</div>
    <div class="stepper-alignment-card">
      <div class="stepper-alignment-label">${text.directionAlignment}</div>
      <div class="stepper-alignment-values"><span>QSVM <strong>${alignment.qsvm.toFixed(6)}</strong></span><span>RBF_PCA <strong>${alignment.rbfPca.toFixed(6)}</strong></span></div>
      <div class="stepper-alignment-diff"><span>${text.alignmentDifference}</span><strong>${alignment.diff >= 0 ? '+' : ''}${alignment.diff.toFixed(6)}</strong></div>
    </div>
    <div class="stepper-simulation-note">${text.simulationNote}</div>
  </div>`;
}

function renderStepperClaim(data) {
  const text = evidenceStepperText[currentLang];
  const values = [data.classificationValue, data.statValue, data.tradingValue, data.diagnostic.replace(/^Quantum diagnostic ·\s*/i, '')];
  return `<div class="stepper-claim-stack">${text.claimLabels.map((label, index) => `<div class="stepper-claim-row"><span>${label}</span><strong>${values[index]}</strong></div>`).join('')}</div>`;
}

function renderEvidenceStepper({ animate = false } = {}) {
  const root = document.querySelector('[data-evidence-stepper]');
  if (!root) return;
  const data = horizonExplorerData[currentLang]?.[activeHorizonExplorer];
  if (!data) return;
  const text = evidenceStepperText[currentLang];
  const activeIndex = evidenceStepOrder.indexOf(activeEvidenceStep);
  const stage = root.querySelector('[data-evidence-stepper-stage]');

  const paint = () => {
    const setText = (selector, value) => {
      const el = root.querySelector(selector);
      if (el) el.textContent = value;
    };
    setText('[data-stepper-kicker]', text.kicker);
    setText('[data-stepper-progress-text]', text.progress(activeIndex + 1, evidenceStepOrder.length));
    setText('[data-stepper-shortcut]', text.shortcut);
    setText('[data-step-prev-label]', text.previous);
    setText('[data-step-next-label]', text.next);
    setText('[data-step-layer]', text.layerLabels[activeEvidenceStep]);

    let title = '';
    let note = '';
    let viz = '';
    if (activeEvidenceStep === 'classification') {
      title = data.classificationValue;
      note = data.classificationNote;
      viz = renderStepperClassification(data);
    } else if (activeEvidenceStep === 'stability') {
      title = data.statValue;
      note = data.statNote;
      viz = renderStepperStability(activeHorizonExplorer);
    } else if (activeEvidenceStep === 'trading') {
      title = data.tradingValue;
      note = data.tradingNote;
      viz = renderStepperTrading(activeHorizonExplorer);
    } else if (activeEvidenceStep === 'diagnostics') {
      title = text.diagnosticTitle;
      note = text.diagnosticNote;
      viz = renderStepperDiagnostics(activeHorizonExplorer);
    } else {
      title = data.verdictValue;
      note = data.verdictNote;
      viz = renderStepperClaim(data);
    }

    setText('[data-step-title]', title);
    setText('[data-step-note]', note);
    const vizEl = root.querySelector('[data-step-viz]');
    if (vizEl) vizEl.innerHTML = viz;

    const progress = activeIndex / (evidenceStepOrder.length - 1) * 100;
    const fill = root.querySelector('[data-stepper-track-fill]');
    if (fill) fill.style.width = `${progress}%`;

    root.querySelectorAll('[data-evidence-step]').forEach((button, index) => {
      const selected = button.dataset.evidenceStep === activeEvidenceStep;
      button.classList.toggle('is-active', selected);
      button.classList.toggle('is-complete', index < activeIndex);
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected && stage) stage.setAttribute('aria-labelledby', button.id);
    });

    const prev = root.querySelector('[data-step-prev]');
    const next = root.querySelector('[data-step-next]');
    if (prev) prev.disabled = activeIndex === 0;
    if (next) next.disabled = activeIndex === evidenceStepOrder.length - 1;

    const dots = root.querySelector('[data-step-dots]');
    if (dots) dots.innerHTML = evidenceStepOrder.map((_, index) => `<span class="${index === activeIndex ? 'is-active' : index < activeIndex ? 'is-complete' : ''}"></span>`).join('');
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!animate || reduceMotion || !stage) {
    if (evidenceStepperTimer) clearTimeout(evidenceStepperTimer);
    paint();
    stage?.classList.remove('is-changing');
    return;
  }
  stage.classList.add('is-changing');
  if (evidenceStepperTimer) clearTimeout(evidenceStepperTimer);
  evidenceStepperTimer = setTimeout(() => {
    paint();
    requestAnimationFrame(() => stage.classList.remove('is-changing'));
  }, 120);
}

function setEvidenceStep(step, { focus = false } = {}) {
  if (!evidenceStepOrder.includes(step)) return;
  activeEvidenceStep = step;
  renderEvidenceStepper({ animate: true });
  if (focus) document.querySelector(`[data-evidence-step="${step}"]`)?.focus();
}

function setupEvidenceStepper() {
  const root = document.querySelector('[data-evidence-stepper]');
  if (!root) return;
  const steps = [...root.querySelectorAll('[data-evidence-step]')];
  steps.forEach((button, index) => {
    button.addEventListener('click', () => setEvidenceStep(button.dataset.evidenceStep));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + steps.length) % steps.length;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % steps.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = steps.length - 1;
      setEvidenceStep(steps[nextIndex].dataset.evidenceStep, { focus: true });
    });
  });
  root.querySelector('[data-step-prev]')?.addEventListener('click', () => {
    const index = evidenceStepOrder.indexOf(activeEvidenceStep);
    if (index > 0) setEvidenceStep(evidenceStepOrder[index - 1]);
  });
  root.querySelector('[data-step-next]')?.addEventListener('click', () => {
    const index = evidenceStepOrder.indexOf(activeEvidenceStep);
    if (index < evidenceStepOrder.length - 1) setEvidenceStep(evidenceStepOrder[index + 1]);
  });
  renderEvidenceStepper();
}

const models = ["QSVM", "RBF_PCA", "RBF_FULL"];

const plotConfig = { responsive: true, displayModeBar: false };
let currentLang = 'en';
let activeHorizonExplorer = '1';
let horizonExplorerTimer = null;

function horizonExplorerModelClass(model) {
  return model.toLowerCase().replace(/_/g, '-');
}

function renderHorizonExplorer({ animate = false } = {}) {
  const root = document.querySelector('[data-horizon-explorer]');
  if (!root) return;
  const data = horizonExplorerData[currentLang]?.[activeHorizonExplorer];
  if (!data) return;
  const stage = root.querySelector('.horizon-explorer-stage');

  const paint = () => {
    const setText = (selector, value) => {
      const el = root.querySelector(selector);
      if (el) el.textContent = value;
    };

    setText('[data-hx-horizon-label]', data.horizonLabel);
    setText('[data-hx-claim]', data.claim);
    setText('[data-hx-summary]', data.summary);
    renderEvidenceStepper();

    root.querySelectorAll('[data-hx-horizon]').forEach(tab => {
      const selected = tab.dataset.hxHorizon === activeHorizonExplorer;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && stage) stage.setAttribute('aria-labelledby', tab.id);
    });
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!animate || reduceMotion || !stage) {
    if (horizonExplorerTimer) clearTimeout(horizonExplorerTimer);
    paint();
    stage?.classList.remove('is-changing');
    return;
  }

  stage.classList.add('is-changing');
  if (horizonExplorerTimer) clearTimeout(horizonExplorerTimer);
  horizonExplorerTimer = setTimeout(() => {
    paint();
    requestAnimationFrame(() => stage.classList.remove('is-changing'));
  }, 135);
}

function setHorizonExplorer(horizon, { focus = false } = {}) {
  if (!horizonExplorerData[currentLang]?.[horizon]) return;
  activeHorizonExplorer = horizon;
  renderHorizonExplorer({ animate: true });
  if (focus) {
    document.querySelector(`[data-hx-horizon="${horizon}"]`)?.focus();
  }
}

function setupHorizonExplorer() {
  const tabs = [...document.querySelectorAll('[data-hx-horizon]')];
  if (!tabs.length) return;
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setHorizonExplorer(tab.dataset.hxHorizon));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      setHorizonExplorer(tabs[nextIndex].dataset.hxHorizon, { focus: true });
    });
  });
  renderHorizonExplorer();
}

// Premium chart palette: Gold, Platinum, Copper.
// Silver remains reserved for typography and metallic heading treatments.
const chartColors = {
  gold: '#E5C37A',
  platinum: '#D7D2C4',
  copper: '#C68B59'
};

const baseColors = [
  chartColors.gold,
  chartColors.platinum,
  chartColors.copper
];

function baseLayout(lang) {
  const t = i18n[lang];
  return {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: '#F3F4F1', family: 'Inter, Prompt, Arial, sans-serif' },
    margin: { l: 54, r: 24, t: 12, b: 54 },
    legend: {
      orientation: 'h',
      y: -0.20,
      x: 0,
      font: { color: '#B3BCC9' }
    },
    xaxis: {
      gridcolor: 'rgba(133, 151, 176, 0.16)',
      zerolinecolor: 'rgba(215, 210, 196, 0.26)',
      linecolor: 'rgba(215, 210, 196, 0.14)',
      automargin: true,
      tickfont: { color: '#B9C0CA' }
    },
    yaxis: {
      gridcolor: 'rgba(133, 151, 176, 0.16)',
      zerolinecolor: 'rgba(215, 210, 196, 0.26)',
      linecolor: 'rgba(215, 210, 196, 0.14)',
      automargin: true,
      tickfont: { color: '#B9C0CA' }
    },
    hovermode: 'closest',
    hoverlabel: {
      bgcolor: 'rgba(18, 18, 20, 0.96)',
      bordercolor: chartColors.gold,
      font: { family: 'Inter, Prompt, Arial, sans-serif', color: '#F6F2E8', size: 13 },
      namelength: -1
    },
    uniformtext: { minsize: 12, mode: 'show' },
    colorway: baseColors
  };
}

function tracesByModel(data, metric, decimals, lang) {
  const t = i18n[lang];
  const metricLabel = metric === 'sharpe' ? t.chart_hover_sharpe : t.chart_hover_f1;
  const hoverDecimals = 4;

  return models.map(model => {
    const rows = data
      .filter(d => d.model === model)
      .sort((a, b) => Number(a.horizon) - Number(b.horizon));
    const values = rows.map(d => Number(d[metric]));

    return {
      type: 'bar',
      name: model,
      x: rows.map(d => 'h=' + d.horizon),
      y: values,
      text: values.map(v => v.toFixed(decimals)),
      textposition: 'outside',
      textangle: 0,
      constraintext: 'none',
      textfont: { family: 'Inter, Prompt, Arial, sans-serif', size: 12, color: '#ECE7DA' },
      cliponaxis: false,
      marker: {
        line: { color: 'rgba(255,255,255,0.12)', width: 0.8 }
      },
      hovertemplate: '<b>' + model + '</b><br>' + t.chart_hover_horizon + ': %{x}<br>' + metricLabel + ': %{y:.' + hoverDecimals + 'f}<extra></extra>'
    };
  });
}

function renderCharts(lang) {
  if (!window.Plotly || typeof Plotly.react !== 'function') return;
  const t = i18n[lang];
  const layout = baseLayout(lang);

  Plotly.react(
    'chart_classification',
    tracesByModel(classificationData, 'mean_f1', 3, lang),
    {
      ...layout,
      barmode: 'group',
      yaxis: {
        ...layout.yaxis,
        title: { text: t.axis_f1, font: { color: '#B3BCC9' } },
        range: [0, 0.58]
      }
    },
    plotConfig
  );

  Plotly.react(
    'chart_trading',
    tracesByModel(tradingData, 'sharpe', 2, lang),
    {
      ...layout,
      barmode: 'group',
      yaxis: {
        ...layout.yaxis,
        title: { text: t.axis_sharpe, font: { color: '#B3BCC9' } },
        range: [-0.92, 0.10]
      },
      shapes: [{
        type: 'line',
        xref: 'paper',
        x0: 0,
        x1: 1,
        yref: 'y',
        y0: 0,
        y1: 0,
        line: { color: '#B3BCC9', width: 1, dash: 'dot' }
      }]
    },
    plotConfig
  );

  Plotly.react(
    'chart_diagnostic',
    ['QSVM', 'RBF_PCA'].map(model => {
      const rows = diagnosticData
        .filter(d => d.model === model)
        .sort((a, b) => Number(a.horizon) - Number(b.horizon));
      return {
        type: 'bar',
        name: model,
        x: rows.map(d => 'h=' + d.horizon),
        y: rows.map(d => d.effective_rank),
        text: rows.map(d => Number(d.effective_rank).toFixed(1)),
        textposition: 'outside',
        textangle: 0,
        constraintext: 'none',
        textfont: { family: 'Inter, Prompt, Arial, sans-serif', size: 12, color: '#ECE7DA' },
        cliponaxis: false,
        marker: { line: { color: 'rgba(255,255,255,0.12)', width: 0.8 } },
        hovertemplate: '<b>' + model + '</b><br>' + t.chart_hover_horizon + ': %{x}<br>' + t.chart_hover_rank + ': %{y:.1f}<extra></extra>'
      };
    }),
    {
      ...layout,
      barmode: 'group',
      autosize: true,
      margin: { l: 62, r: 18, t: 54, b: 54 },
      yaxis: {
        ...layout.yaxis,
        title: { text: t.axis_rank, font: { color: '#B3BCC9' } },
        range: [0, 165]
      },
      annotations: [{
        text: t.diag_annotation,
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: 1.14,
        showarrow: false,
        font: { color: chartColors.gold, size: 12 }
      }]
    },
    plotConfig
  );

  schedulePlotlyResize();
}

function getPlotlyChartElements() {
  return ['chart_classification', 'chart_trading', 'chart_diagnostic']
    .map(id => document.getElementById(id))
    .filter(Boolean);
}

function resizePlotlyCharts() {
  if (!window.Plotly || !Plotly.Plots || typeof Plotly.Plots.resize !== 'function') return;
  getPlotlyChartElements().forEach(chart => {
    try {
      Plotly.Plots.resize(chart);
    } catch (error) {
      // A hidden or not-yet-painted chart should not interrupt the page.
    }
  });
}

let resizeTimer;

function schedulePlotlyResize(delay = 80) {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    window.requestAnimationFrame(resizePlotlyCharts);
  }, delay);
}

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang === 'th' ? 'th' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  const revisitNav = document.querySelector('[data-evidence-revisit-nav]');
  if (revisitNav && i18n[lang].revisit_aria) {
    revisitNav.setAttribute('aria-label', i18n[lang].revisit_aria);
  }

  document.getElementById('table_group1_container').innerHTML = tableHTML[lang].group1;
  document.getElementById('table_group2_container').innerHTML = tableHTML[lang].group2;
  document.getElementById('table_group3_container').innerHTML = tableHTML[lang].group3;

  const btnEn = document.getElementById('btn-en');
  const btnTh = document.getElementById('btn-th');
  btnEn.classList.toggle('active', lang === 'en');
  btnTh.classList.toggle('active', lang === 'th');
  btnEn.setAttribute('aria-pressed', String(lang === 'en'));
  btnTh.setAttribute('aria-pressed', String(lang === 'th'));

  updateInteractiveDetails();
  renderHorizonExplorer();
  renderEvidenceStepper();
  renderCharts(lang);
  schedulePlotlyResize(120);
  updateScrollState();
}

const interactiveGroups = {
  feature: {
    market: { titleKey: 'data_domain1_label', detailKey: 'detail_feature_market' },
    onchain: { titleKey: 'data_domain2_label', detailKey: 'detail_feature_onchain' },
    macro: { titleKey: 'data_domain3_label', detailKey: 'detail_feature_macro' }
  },
  horizon: {
    '1d': { title: '1D', detailKey: 'detail_horizon_1d' },
    '7d': { title: '7D', detailKey: 'detail_horizon_7d' },
    '30d': { title: '30D', detailKey: 'detail_horizon_30d' }
  },
  validation: {
    lag: { titleKey: 'data_lag_badge', detailKey: 'detail_validation_lag' },
    folds: { titleKey: 'data_folds_badge', detailKey: 'detail_validation_folds' }
  }
};

function setActiveInteractiveChip(button) {
  const group = button.dataset.interactiveGroup;
  document.querySelectorAll(`[data-interactive-group="${group}"]`).forEach(chip => {
    const isActive = chip === button;
    chip.classList.toggle('is-active', isActive);
    chip.setAttribute('aria-pressed', String(isActive));
  });
  updateInteractiveDetails(group);
}

function updateInteractiveDetails(groupName) {
  const groups = groupName ? [groupName] : Object.keys(interactiveGroups);
  groups.forEach(group => {
    const activeChip = document.querySelector(`[data-interactive-group="${group}"].is-active`);
    const panel = document.querySelector(`[data-interactive-detail="${group}"]`);
    if (!activeChip || !panel) return;

    const config = interactiveGroups[group][activeChip.dataset.interactiveKey];
    if (!config) return;

    const title = config.title || i18n[currentLang][config.titleKey] || '';
    const detail = i18n[currentLang][config.detailKey] || '';
    const titleEl = panel.querySelector('strong');
    const detailEl = panel.querySelector('p');

    if (titleEl) titleEl.innerHTML = title;
    if (detailEl) detailEl.innerHTML = detail;
  });
}

function setupInteractiveChipGroups() {
  document.querySelectorAll('[data-interactive-group]').forEach(button => {
    button.addEventListener('click', () => setActiveInteractiveChip(button));
  });
  updateInteractiveDetails();
}
// Stable scroll reveal: opacity/transform only; elements keep their layout space.
function reveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 96) {
      el.classList.add('active');
    }
  });
}

function setupReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  reveals.forEach(el => observer.observe(el));
}

function updateScrollState() {
  const y = window.scrollY || document.documentElement.scrollTop;
  const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const offset = 140;
  let activeId = '';

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop - offset <= y) {
      activeId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${activeId}`);
  });

  const topButton = document.querySelector('.back-to-top');
  if (topButton) topButton.classList.toggle('is-visible', y > 720);
}

function setupQuantumCanvas() {
  const canvas = document.getElementById('quantum-bg');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const palette = [
    [242, 210, 136],
    [215, 210, 196],
    [198, 139, 89]
  ];
  let particles = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let frame = 0;
  let resizeTimer = 0;

  const createParticles = () => {
    const area = width * height;
    const count = Math.max(34, Math.min(86, Math.round(area / 28000)));
    particles = Array.from({ length: reduceMotion.matches ? Math.round(count * 0.55) : count }, (_, index) => {
      const color = palette[index % palette.length];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: 0.7 + Math.random() * 1.7,
        phase: Math.random() * Math.PI * 2,
        orbit: 0.18 + Math.random() * 0.5,
        color
      };
    });
  };

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createParticles();
    drawStatic();
  };

  const clear = () => ctx.clearRect(0, 0, width, height);

  const drawStatic = () => {
    clear();
    particles.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, 0.44)`;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const draw = () => {
    if (document.hidden) {
      return;
    }

    clear();
    const time = performance.now() * 0.001;
    const maxDistance = Math.min(150, Math.max(96, width * 0.12));

    particles.forEach((p, i) => {
      if (!reduceMotion.matches) {
        p.x += p.vx + Math.sin(time + p.phase) * p.orbit * 0.018;
        p.y += p.vy + Math.cos(time * 0.82 + p.phase) * p.orbit * 0.018;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }

      for (let j = i + 1; j < particles.length; j += 1) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.hypot(dx, dy);
        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.2;
          const color = p.color;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      const pulse = 0.24 + Math.sin(time * 1.2 + p.phase) * 0.12;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${pulse})`;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!reduceMotion.matches) {
      frame = window.requestAnimationFrame(draw);
    }
  };

  const scheduleResize = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 180);
  };

  resize();
  if (reduceMotion.matches) {
    drawStatic();
  } else {
    frame = window.requestAnimationFrame(draw);
  }

  window.addEventListener('resize', scheduleResize);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      window.cancelAnimationFrame(frame);
    } else if (!reduceMotion.matches) {
      frame = window.requestAnimationFrame(draw);
    } else {
      drawStatic();
    }
  });
  reduceMotion.addEventListener?.('change', () => {
    window.cancelAnimationFrame(frame);
    resize();
    if (!reduceMotion.matches) frame = window.requestAnimationFrame(draw);
  });
}

function setupMouseSpotlight() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let raf = 0;
  let nextX = 50;
  let nextY = 20;

  window.addEventListener('pointermove', event => {
    nextX = (event.clientX / window.innerWidth) * 100;
    nextY = (event.clientY / window.innerHeight) * 100;
    document.body.style.setProperty('--spotlight-opacity', '0.95');
    if (!raf) {
      raf = window.requestAnimationFrame(() => {
        document.body.style.setProperty('--mouse-x', `${nextX}%`);
        document.body.style.setProperty('--mouse-y', `${nextY}%`);
        raf = 0;
      });
    }
  }, { passive: true });

  window.addEventListener('pointerleave', () => {
    document.body.style.setProperty('--spotlight-opacity', '0');
  });
}

// Number Counter Animation สำหรับกล่อง KPI
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // ใช้ easeOut effect
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    obj.innerHTML = Math.floor(easeProgress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerHTML = end; // รับประกันเลขจบเป๊ะ
    }
  };
  window.requestAnimationFrame(step);
}

// Trigger Animations เมื่อโหลดเว็บ
document.body.classList.remove('no-js');

document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setupInteractiveChipGroups();
setupEvidenceStepper();
setupHorizonExplorer();

document.querySelectorAll('details').forEach(details => {
  details.addEventListener('toggle', () => schedulePlotlyResize(120));
});

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

window.addEventListener('scroll', () => {
  reveal();
  updateScrollState();
}, { passive: true });
window.addEventListener('resize', () => {
  schedulePlotlyResize(120);
  updateScrollState();
});
window.addEventListener('orientationchange', () => schedulePlotlyResize(180));

let printClosedDetails = [];

window.addEventListener('beforeprint', () => {
  printClosedDetails = [...document.querySelectorAll('details:not([open])')];
  printClosedDetails.forEach(details => {
    details.open = true;
  });
  resizePlotlyCharts();
});

window.addEventListener('afterprint', () => {
  printClosedDetails.forEach(details => {
    details.open = false;
  });
  printClosedDetails = [];
});

window.addEventListener('load', () => {
  setLanguage('en');
  setupQuantumCanvas();
  setupMouseSpotlight();
  setupReveal();
  setTimeout(() => {
    reveal();
    updateScrollState();
    schedulePlotlyResize(120);
  }, 100); // ดึง reveal ให้ทำงานรอบแรก
  
  // รันเลข KPI เมื่อเปิดเว็บ
  const kpis = document.querySelectorAll('.kpi-number');
  if (kpis.length >= 3 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animateValue(kpis[0], 0, 27, 1500); // 27 Folds
    animateValue(kpis[1], 0, 3, 1000);  // 3 Horizons
    animateValue(kpis[2], 0, 4, 1200);  // 4 Layers
  }
});
