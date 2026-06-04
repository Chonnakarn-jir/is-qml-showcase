const i18n = {
  "en": {
    "nav_dashboard": "Dashboard",
    "nav_summary": "Summary",
    "nav_claims": "Claim boundary",
    "nav_appendix": "Evidence appendix",
    "eyebrow": "Finance ML &middot; Quantum Kernel Benchmark &middot; BTC Forecasting",
    "hero_title": "Testing Quantum Machine Learning Under Real Financial Validation",
    "hero_subtitle": "A leakage-safe, multi-horizon Bitcoin forecasting study comparing Quantum Support Vector Machine with classical kernel baselines across directional prediction, trading/risk interpretation, and quantum kernel diagnostics.",
    "hero_positioning": "This project does not assume that quantum models should outperform classical models. Instead, it asks a stricter question: when QSVM is tested under realistic financial validation, does its quantum-generated kernel provide task-relevant value beyond strong classical baselines?",
    "hero_chip_leakage": "Leakage-safe",
    "hero_chip_horizon": "Multi-horizon",
    "hero_chip_trading": "Trading-aware",
    "hero_chip_diagnostic": "Diagnostically bounded",
    "final_answer_label": "Final Answer",
    "final_answer_title": "QSVM is meaningful, but quantum advantage is not established.",
    "final_answer_text": "QSVM remains scientifically useful as a quantum-kernel benchmark and shows horizon-dependent competitiveness in directional classification. However, the integrated evidence does not support claims of overall QSVM superiority, trading superiority, or task-relevant quantum advantage in the tested Bitcoin forecasting setting.",
    "kpi_folds_label": "Walk-forward folds",
    "kpi_folds_note": "Rolling out-of-sample validation",
    "kpi_horizons_label": "Forecast horizons",
    "kpi_horizons_note": "h = 1, 7, 30",
    "kpi_layers_label": "Evidence layers",
    "kpi_layers_note": "Prediction, trading/risk, robustness, diagnostics",
    "kpi_num": "0",
    "kpi_adv_label": "Unsubstantiated Overclaims",
    "kpi_adv_note": "No superiority claim is made beyond the integrated evidence.",
    "summary_kicker": "Executive summary",
    "summary_title": "There is no single winner across all criteria",
    "summary_desc": "The main finding is disciplined: QSVM remains useful as a benchmark, but it is not superior under the full financial validation protocol.",
    "sum1_title": "QSVM remains useful for predicting price direction",
    "sum1_text": "The evidence shows that QSVM is still worth considering for predicting Bitcoin price direction across short-, medium-, and longer-horizon tests.",
    "sum2_title": "A good prediction score is not the same as financial usefulness",
    "sum2_text": "The h = 1 QSVM case shows why prediction scores alone can mislead in financial ML. Strong prediction scores can be weakened once transaction costs, turnover, and risk exposure are considered.",
    "sum3_title": "RBF_FULL is stronger in trading/risk evidence",
    "sum3_text": "At h = 7 and h = 30, RBF_FULL provides stronger risk-adjusted trading evidence than QSVM under the tested protocol.",
    "sum4_title": "Model complexity is not the same as advantage",
    "sum4_text": "QSVM kernels are different and structurally richer, but a richer representation does not automatically become a useful advantage for this prediction task.",
    "dashboard_kicker": "Main Results Dashboard",
    "dashboard_title": "Evidence changes the interpretation",
    "dashboard_desc": "Classification evidence makes QSVM look competitive, but trading/risk and quantum diagnostics define the final evidence boundary. The results should be read as layered evidence, not as a single leaderboard.",
    "chart1_title": "Classification Evidence",
    "chart1_desc": "Mean F1-score across horizons and models.",
    "chart1_sowhat": "<strong>So what:</strong> QSVM remains worth considering for Bitcoin direction forecasting. However, this is only the first evidence layer, not the final conclusion.",
    "chart2_title": "Trading/Risk Evidence",
    "chart2_desc": "Sharpe ratio across horizons and models under the fixed post-hoc trading/risk interpretation.",
    "chart2_sowhat": "<strong>So what:</strong> The trading/risk layer changes the interpretation. RBF_FULL becomes stronger at the 7-day and 30-day horizons, showing that classification strength does not directly translate into financial usefulness.",
    "gap_title": "A promising prediction score does not automatically become financial usefulness",
    "gap_desc": "The 1-day QSVM case shows why financial ML claims require more than a classification metric. A model may look competitive by F1-score but become fragile after turnover, transaction costs, and drawdown risk are considered.",
    "gap_sowhat": "<strong>So what:</strong> This is the project’s turning point. QSVM looks promising by F1, but its short-horizon trading profile is weakened by turnover and transaction costs.",
    "metric_f1": "Mean F1",
    "metric_sharpe": "Sharpe ratio",
    "metric_return": "Total return",
    "metric_turnover": "Turnover",
    "diag_title": "A richer quantum kernel is not the same as task-relevant advantage",
    "diag_desc": "The QSVM kernel is structurally different from the PCA-controlled RBF kernel and shows a richer spectral profile. However, the target-alignment evidence is small, so the diagnostic layer does not establish task-relevant quantum advantage.",
    "diag_sowhat": "<strong>So what:</strong> The quantum kernel is different and richer, but richness alone is not enough. The evidence does not show that this richer representation is more aligned with the prediction target.",
    "decision_kicker": "Decision takeaway",
    "decision_title": "QSVM is worth studying, but the evidence should not be overstated",
    "decision_text": "The strongest result of this project is not a quantum-advantage claim. It is a rigorous evidence boundary showing where quantum kernels are meaningful, where classical baselines remain stronger, and why financial ML evaluation must go beyond F1.",
    "claim_kicker": "Claim Boundary",
    "claim_title": "What the evidence supports - and what it does not",
    "claim_desc": "The study does not treat the highest classification score as proof of model superiority. The final interpretation is bounded by classification evidence, stability behavior, trading/risk interpretation, and quantum diagnostics.",
    "claim_supported_title": "Supported",
    "claim_qualified_title": "Qualified",
    "claim_not_title": "Not supported",
    "claim_supported_html": "<li>QSVM is classification-competitive.</li><li>Quantum expressivity is observable.</li><li>RBF_FULL is stronger in trading/risk evidence at longer horizons.</li><li>The framework provides leakage-safe, multi-layer financial validation.</li>",
    "claim_qualified_html": "<li>Classification evidence is not final superiority.</li><li>Trading/risk results are an evaluation layer, not a deployable trading strategy.</li><li>Higher kernel richness does not imply target usefulness.</li><li>Results are specific to this dataset, horizons, features, and validation protocol.</li>",
    "claim_not_html": "<li>QSVM overall superiority.</li><li>QSVM trading superiority.</li><li>Task-relevant quantum advantage.</li><li>Live trading readiness or guaranteed profitability.</li>",
    "appendix_kicker": "Evidence Tables",
    "appendix_title": "Detailed evidence, available on demand",
    "appendix_desc": "The main page explains the interpretation. The tables below provide the supporting evidence for readers who want to inspect the numerical basis of the claim boundary.",
    "table_classification": "Classification evidence table",
    "table_trading": "Trading/risk evidence table",
    "table_decision": "Integrated decision table",
    "table_diagnostic": "Quantum diagnostic table",
    "table_verdict": "Final verdict table",
    "axis_f1": "Mean F1",
    "axis_sharpe": "Sharpe ratio",
    "axis_rank": "Effective rank",
    "diag_annotation": "Kernel corr ≈ 0.6808 · target alignment diff ≈ 0.0022",
    "footer": "Final bilingual finance-grade showcase · visualization/reporting only · No new experiment",
    "nav_research": "Research",
    "nav_dataset": "Dataset",
    "rq_kicker": "Research Question",
    "rq_title": "Not just \"which model wins?\" - but what evidence is enough?",
    "rq_desc": "Financial QML claims should not be judged by a single average score. This study evaluates whether QSVM provides task-relevant value across four evidence layers: directional classification, fold-level stability, trading/risk interpretation, and quantum kernel diagnostics.",
    "rq_main_label": "Main Question",
    "rq_main_question": "Does QSVM provide task-relevant value beyond classical kernel baselines under leakage-safe, multi-horizon Bitcoin direction forecasting?",
    "rq_card1_title": "Directional Classification",
    "rq_card1_text": "Can QSVM predict Bitcoin direction competitively across 1-day, 7-day, and 30-day horizons?",
    "rq_card2_title": "Stability Across Time",
    "rq_card2_text": "Does model performance remain consistent across rolling walk-forward folds, or does it depend heavily on specific market periods?",
    "rq_card3_title": "Trading/Risk Interpretation",
    "rq_card3_text": "Do clean out-of-sample predictions remain meaningful when viewed through transaction costs, turnover, Sharpe ratio, return, and drawdown?",
    "rq_card4_title": "Quantum Kernel Diagnostics",
    "rq_card4_text": "Is the quantum-generated kernel structurally different, and does that difference appear aligned with the prediction target?\r\n\r\nBoundary Note:\r\nNo single evidence layer is sufficient to claim model superiority. Classification, stability, financial interpretation, and diagnostics must be interpreted together.",
    "rq_boundary_note": "No single evidence layer is sufficient to claim model superiority. Classification, stability, financial interpretation, and diagnostics must be interpreted together.",
    "btc_kicker": "Why Bitcoin?",
    "btc_title": "A volatile stress-test for financial QML claims",
    "btc_desc": "Bitcoin is not used here as a trading recommendation. It is used as a demanding case study because its market behavior is noisy, volatile, non-stationary, and influenced by multiple information sources.",
    "btc_narrative": "Financial machine learning is difficult because predictive accuracy does not automatically translate into reliable financial interpretation. A model can look competitive under classification metrics while becoming fragile after transaction costs, turnover, drawdowns, or regime shifts are considered. Bitcoin makes this challenge especially visible. It trades continuously, experiences sharp volatility, and reflects market, blockchain network, and macro-financial signals at the same time. This makes it a useful stress-test for evaluating whether QSVM provides value that survives beyond a single predictive metric.",
    "btc_boundary_note": "Bitcoin is used as a stress-test environment, not as an investment object or trading signal.",
    "btc_card1_title": "High Volatility",
    "btc_card1_text": "Bitcoin exposes models to rapid price changes and unstable market conditions.",
    "btc_card2_title": "Non-Stationarity",
    "btc_card2_text": "Patterns that appear useful in one period may weaken or reverse in another.",
    "btc_card3_title": "Multi-Source Signals",
    "btc_card3_text": "The dataset combines market/technical, on-chain, and macroeconomic information.",
    "btc_card4_title": "Accuracy-Risk Gap",
    "btc_card4_text": "Classification strength may not survive trading/risk interpretation.",
    "btc_card5_title": "Strict Validation Needed",
    "btc_card5_text": "A leakage-safe walk-forward protocol is essential to avoid optimistic conclusions.",
    "flow_classification": "Directional classification",
    "flow_stability": "Stability",
    "flow_trading": "Trading/risk",
    "flow_diagnostics": "Quantum diagnostics",
    "flow_boundary": "Claim boundary",
    "data_kicker": "Dataset Snapshot",
    "data_title": "Daily Bitcoin data, multiple signals, three prediction horizons",
    "data_desc": "The study uses a daily Bitcoin dataset aligned on a UTC calendar, combining market/technical, on-chain, and macroeconomic signals. Exogenous variables are lagged by one day to reduce look-ahead risk.",
    "data_narrative": "Each observation represents information available at or before a given date. The model then predicts whether the Bitcoin closing price will be higher after a selected prediction horizon. The three horizons - 1-day, 7-day, and 30-day - are separate forecasting tasks, not input windows. This distinction matters because the study tests whether model behavior changes across short-, medium-, and longer-horizon prediction settings.",
    "data_asset_label": "Asset",
    "data_asset_value": "Bitcoin daily data",
    "data_period_label": "Study Period",
    "data_period_value": "31 January 2016 to 30 November 2025",
    "data_domains_label": "Feature Domains",
    "data_domains_value": "Market/technical, on-chain, and macroeconomic features",
    "data_horizons_label": "Prediction Horizons",
    "data_horizons_value": "1-day, 7-day, and 30-day direction forecasting",
    "data_validation_label": "Validation Design",
    "data_validation_value": "Rolling walk-forward validation with 27 folds",
    "data_leakage_label": "Leakage Control",
    "data_leakage_value": "One-day lag for exogenous on-chain and macroeconomic variables",
    "data_domain1_label": "Market / Technical",
    "data_domain2_label": "On-chain",
    "data_domain3_label": "Macroeconomic",
    "data_lag_badge": "1-day exogenous lag",
    "data_folds_badge": "27 folds",
    "data_clarification_note": "The prediction horizon is the future target period. It is not the historical input window. For example, in the 7-day task, the model uses information available at date t to predict whether the Bitcoin closing price at t+7 is higher than at t.",
    "detail_feature_market": "Price, volume, volatility, momentum, and trend-based indicators derived from Bitcoin market behavior.",
    "detail_feature_onchain": "Blockchain network activity and transaction-related signals that may capture behavior beyond market price alone.",
    "detail_feature_macro": "Broader financial-market context such as risk sentiment, currency strength, equity-market conditions, and interest-rate environment.",
    "detail_horizon_1d": "Short-horizon task: use information available at date t to predict whether the Bitcoin close at t+1 is higher than at t.",
    "detail_horizon_7d": "Medium-horizon task: use information available at date t to predict whether the Bitcoin close at t+7 is higher than at t.",
    "detail_horizon_30d": "Longer-horizon task: use information available at date t to predict whether the Bitcoin close at t+30 is higher than at t.",
    "detail_validation_lag": "On-chain and macroeconomic variables are shifted by one day before modeling to reduce look-ahead risk.",
    "detail_validation_folds": "Rolling walk-forward validation evaluates models across 27 out-of-sample folds instead of relying on a random split.",
    "timeline_context_dataset": "Daily UTC Bitcoin dataset",
    "timeline_context_period": "31 Jan 2016 - 30 Nov 2025",
    "timeline_context_folds": "27 rolling walk-forward folds",
    "timeline_context_label": "Dataset coverage",
    "pipeline_kicker": "Experiment Pipeline",
    "pipeline_title": "From daily Bitcoin data to leakage-safe out-of-sample evidence",
    "pipeline_desc": "The experiment is designed around one principle: every operation that could leak future information must be fitted or decided using training data only. The test fold is reserved strictly for out-of-sample evaluation.",
    "pipeline_narrative_1": "The pipeline begins with a single daily UTC Bitcoin master dataset that combines market/technical, on-chain, and macroeconomic features. Exogenous on-chain and macroeconomic variables are lagged by one day before modeling. Independent binary directional labels are constructed for the 1-day, 7-day, and 30-day prediction horizons, and models are trained separately for each horizon-specific task.",
    "pipeline_narrative_2": "For each walk-forward fold, preprocessing is fitted only on the training window. Scaling, PCA, hyperparameter selection, and model fitting are completed before the model sees the test fold. The resulting predictions are recorded as clean out-of-sample evidence and later interpreted through classification, stability, trading/risk, and diagnostic layers.",
    "pipeline_step1_title": "Daily UTC Master Dataset",
    "pipeline_step1_text": "Market, on-chain, and macroeconomic data are aligned to the Bitcoin daily calendar.",
    "pipeline_step2_title": "One-Day Exogenous Lag",
    "pipeline_step2_text": "On-chain and macroeconomic variables are shifted by one day to reduce look-ahead risk.",
    "pipeline_step3_title": "Independent Horizon Labels",
    "pipeline_step3_text": "Binary directional labels are created separately for the 1-day, 7-day, and 30-day horizon-specific tasks.",
    "pipeline_step4_title": "Rolling Walk-Forward Folds",
    "pipeline_step4_text": "The evaluation uses time-ordered train/test folds rather than random splitting.",
    "pipeline_step5_title": "Train-Only Preprocessing",
    "pipeline_step5_text": "Scaling and PCA are fitted only on the training fold, then applied to the test fold.",
    "pipeline_step6_title": "Nested Model Selection",
    "pipeline_step6_text": "Model settings are selected using training information only.",
    "pipeline_step7_title": "Out-of-Sample Prediction",
    "pipeline_step7_text": "Predictions are generated only on untouched test folds.",
    "pipeline_step8_title": "Evidence-Layer Evaluation",
    "pipeline_step8_text": "The OOS predictions are interpreted through classification, stability, trading/risk, and diagnostics.",
    "pipeline_trust_note": "Each prediction horizon is treated as an independent forecasting task. The 1-day, 7-day, and 30-day models are not trained as a single multi-task model. The test fold is never used to fit preprocessing, select parameters, define model transformations, or optimize trading rules.",
    "roles_kicker": "Model Roles",
    "roles_title": "Not all baselines answer the same question",
    "roles_desc": "The model suite is designed for role-based benchmarking. QSVM is not treated as a presumed winner. It is evaluated against classical kernel baselines that provide different comparison boundaries.",
    "roles_narrative_1": "This study focuses on kernel-based comparison because QSVM preserves the SVM classification framework but replaces the classical similarity function with a quantum-generated kernel. To interpret QSVM fairly, it must be compared against more than one classical reference.",
    "roles_narrative_2": "RBF_PCA is the dimension-controlled comparator because it uses a PCA-reduced feature representation similar to the QSVM input constraint. RBF_FULL is the full-feature classical kernel reference. QSVM is the quantum-kernel benchmark that tests whether quantum-generated similarity produces task-relevant value under the same validation protocol.",
    "role_qsvm_title": "QSVM - Quantum-Kernel Benchmark",
    "role_qsvm_text": "Uses a quantum-generated kernel to construct pairwise similarity before SVM classification. Its role is to test whether quantum-kernel representation provides task-relevant value, not to assume quantum superiority.",
    "role_rbf_pca_title": "RBF_PCA - Dimension-Controlled Classical Comparator",
    "role_rbf_pca_text": "Uses a classical RBF kernel on PCA-reduced features. It is the closest structural comparator to QSVM because both operate under constrained dimensionality.",
    "role_rbf_full_title": "RBF_FULL - Full-Feature Classical Kernel Reference",
    "role_rbf_full_text": "Uses a classical RBF kernel with the full feature representation. It acts as the unconstrained classical kernel reference for assessing whether dimensionality reduction required by the quantum-capacity setting may sacrifice task-relevant information.",
    "roles_interpretation_rule": "If QSVM outperforms RBF_PCA but not RBF_FULL, the safe interpretation is dimension-controlled competitiveness, not overall classical superiority.",
    "leak_kicker": "Leakage-Safe Controls",
    "leak_title": "The test fold stays untouched until evaluation",
    "leak_desc": "Financial time-series experiments can look stronger than they really are when future information enters preprocessing, model selection, or trading interpretation. This study separates training decisions from out-of-sample evaluation.",
    "leak_narrative_1": "The protocol is designed so that information flows forward in time. Data alignment, feature lagging, label construction, train/test splitting, preprocessing, PCA, model selection, and OOS prediction all follow this principle. Any transformation that learns from the data is fitted only inside the training fold. The test fold is used only after the model and transformations are fixed.",
    "leak_narrative": "The protocol is designed so that information flows forward in time. Data alignment, feature lagging, label construction, train/test splitting, preprocessing, PCA, model selection, and OOS prediction all follow this principle. Any transformation that learns from the data is fitted only inside the training fold. The test fold is used only after the model and transformations are fixed.",
    "leak_control1_title": "No Random Split",
    "leak_control1_text": "Time order is preserved through rolling walk-forward validation.",
    "leak_control2_title": "One-Day Exogenous Lag",
    "leak_control2_text": "On-chain and macroeconomic variables are shifted before modeling.",
    "leak_control3_title": "Train-Only Scaling",
    "leak_control3_text": "Scalers are fitted only on the training fold.",
    "leak_control4_title": "Train-Only PCA",
    "leak_control4_text": "Dimensionality reduction is fitted only on the training fold.",
    "leak_control5_title": "Train-Only Model Selection",
    "leak_control5_text": "Hyperparameters are selected without using the outer test fold.",
    "leak_control6_title": "Untouched OOS Test Fold",
    "leak_control6_text": "Final predictions are generated only after training decisions are fixed.",
    "leak_control7_title": "OOS-Only Trading/Risk Layer",
    "leak_control7_text": "Trading/risk interpretation uses clean out-of-sample predictions only, with a fixed transaction-cost assumption. No trading rule or cost parameter is optimized on the test fold.",
    "leak_control8_title": "Hardcoded Transaction Cost",
    "leak_control8_text": "The post-hoc trading/risk layer includes a fixed transaction cost, c = 0.0015, to reduce the risk of overstating high-turnover prediction behavior.",
    "leak_control9_title": "Diagnostics Separated from Selection",
    "leak_control9_text": "Quantum diagnostics are used for interpretation, not model selection.",
    "leak_trust_note": "This design does not guarantee better performance. It makes the evidence harder to overstate by forcing predictive, financial, and diagnostic claims to remain separated.",
    "ladder_kicker": "Evidence Ladder",
    "ladder_title": "Each evidence layer answers a different question",
    "ladder_desc": "The study does not rank models from a single chart. It builds an evidence ladder from classification to stability, from financial interpretation to quantum diagnostics, and finally to a bounded claim.",
    "ladder_narrative_1": "A high mean F1-score can support classification competitiveness, but it cannot prove financial usefulness. A richer quantum kernel can support representational difference, but it cannot prove task-relevant quantum advantage. Worst-fold behavior is treated as important because a model with an acceptable average score may still fail sharply during difficult market periods. The evidence ladder prevents these different claims from being mixed together.",
    "ladder_narrative": "A high mean F1-score can support classification competitiveness, but it cannot prove financial usefulness. A richer quantum kernel can support representational difference, but it cannot prove task-relevant quantum advantage. Worst-fold behavior is treated as important because a model with an acceptable average score may still fail sharply during difficult market periods. The evidence ladder prevents these different claims from being mixed together.",
    "ladder1_title": "Classification",
    "ladder1_question": "Can the model predict direction competitively?",
    "ladder1_can": "directional competitiveness",
    "ladder1_cannot": "trading superiority or quantum advantage",
    "ladder2_title": "Stability",
    "ladder2_question": "How severe is performance degradation in the worst-performing walk-forward fold?",
    "ladder2_can": "temporal robustness and downside stability",
    "ladder2_cannot": "profitability, live deployment readiness, or hardware-level advantage",
    "ladder3_title": "Trading/Risk",
    "ladder3_question": "Do OOS predictions remain meaningful under transaction costs and risk metrics?",
    "ladder3_can": "financial interpretation under a fixed protocol",
    "ladder3_cannot": "live trading readiness or investment advice",
    "ladder4_title": "Quantum Diagnostics",
    "ladder4_question": "Is the QSVM kernel structurally different and target-relevant?",
    "ladder4_can": "representational evidence",
    "ladder4_cannot": "quantum advantage by itself",
    "ladder5_title": "Claim Boundary",
    "ladder5_question": "What can safely be concluded from all evidence together?",
    "ladder5_can": "bounded interpretation",
    "ladder5_cannot": "overclaiming beyond the tested setting",
    "ladder_bridge_note": "The results should be read from bottom to top: first as evidence, then as interpretation, and only then as a claim.",
    "ladder_question_label": "Question:",
    "ladder_can_label": "Can support:",
    "ladder_cannot_label": "Cannot support:",
    "qsvm_kicker": "QSVM Kernel Mechanism",
    "qsvm_title": "From features to quantum similarity",
    "qsvm_desc": "QSVM keeps the support vector machine classification logic, but replaces the classical similarity function with a quantum-generated kernel. The key change is not the classifier itself, but how the model measures similarity between observations.",
    "qsvm_narrative_1": "In a classical RBF-SVM, similarity is computed through a classical kernel function. In QSVM, the input features are first reduced to a feasible quantum embedding dimension, then encoded through a quantum feature map. The resulting quantum states are compared through pairwise state overlap, producing a quantum kernel matrix that is passed into the SVM classifier.",
    "qsvm_narrative_2": "This study uses PennyLane's default.qubit statevector simulator to compute the quantum kernel deterministically. It does not use physical quantum hardware. Therefore, the experiment isolates representational behavior under simulation, not hardware speedup, shot noise, decoherence, or device calibration effects.",
    "qsvm_card1_title": "What changes?",
    "qsvm_card1_text": "QSVM changes the similarity construction mechanism, not the entire SVM learning framework.",
    "qsvm_card2_title": "What is simulated?",
    "qsvm_card2_text": "The quantum kernel is evaluated using PennyLane default.qubit statevector simulation, not physical quantum hardware.",
    "qsvm_card3_title": "What is excluded?",
    "qsvm_card3_text": "Statevector simulation does not include shot noise, measurement noise, decoherence, or device-specific calibration effects.",
    "qsvm_card4_title": "What does not follow automatically?",
    "qsvm_card4_text": "A structurally different or richer quantum kernel does not automatically imply quantum advantage.",
    "qsvm_card5_title": "How should diagnostics be read?",
    "qsvm_card5_text": "Higher kernel richness or effective rank should be interpreted as representational evidence, not proof of task-relevant superiority.",
    "qsvm_diagnostic_bridge": "Later diagnostics show that the QSVM kernel is structurally different from the PCA-controlled RBF kernel: Pearson kernel correlation is approximately 0.6808 and Spearman kernel correlation is approximately 0.5054. QSVM also shows a higher effective rank, approximately 147.79 compared with approximately 35.90 for RBF_PCA. However, target-alignment differences are small: 0.0025, 0.0044, and -0.0002. This means the kernel is different and richer, but the evidence is not sufficient to claim task-relevant quantum advantage.",
    "qsvm_step1_title": "Input Features",
    "qsvm_step1_text": "Market/technical, on-chain, and macroeconomic signals after leakage-safe preparation.",
    "qsvm_step2_title": "PCA-Reduced Features",
    "qsvm_step2_text": "Features are reduced to match the feasible quantum embedding dimension.",
    "qsvm_step3_title": "Quantum Feature Map",
    "qsvm_step3_text": "Classical feature values are encoded into a quantum representation.",
    "qsvm_step4_title": "Quantum State / Statevector Simulation",
    "qsvm_step4_text": "The encoded data are represented as simulated quantum states using default.qubit.",
    "qsvm_step5_title": "Pairwise State Overlap",
    "qsvm_step5_text": "Similarity between two observations is computed from the overlap of their quantum states.",
    "qsvm_step6_title": "Quantum Kernel Matrix",
    "qsvm_step6_text": "All pairwise similarities form the kernel matrix used by the classifier.",
    "qsvm_step7_title": "SVM Classifier",
    "qsvm_step7_text": "The SVM uses the quantum kernel matrix for margin-based classification.",
    "qsvm_step8_title": "Direction Prediction",
    "qsvm_step8_text": "The model predicts whether Bitcoin's future closing price direction is up or not for each horizon-specific task.",
    "dashboard_framing": "The classification layer shows that QSVM remains meaningful as a quantum-kernel benchmark across the tested horizons. However, the dashboard is intentionally paired with trading/risk evidence because financial machine learning cannot be judged by predictive scores alone.",
    "classification_stat_note": "<span class=\"badge-focus gold evidence-badge\">Holm-limited</span><br>Statistical note: QSVM has the highest Mean F1 across the tested horizons, but Holm-corrected statistical support is observed only for QSVM vs RBF_FULL at the 1-day horizon. Other QSVM comparisons are descriptive or not significant after correction.",
    "gap_kicker": "Classification-to-Trading Gap",
    "gap_classification_label": "Classification Layer",
    "gap_classification_text": "QSVM shows the strongest 1-day Mean F1 among the compared kernel models.",
    "gap_trading_label": "Trading/Risk Layer",
    "gap_trading_text": "The same 1-day QSVM signal is weakened by high turnover and transaction-cost sensitivity.",
    "gap_interpretation": "This is not a failure of QSVM as a scientific benchmark. It is the reason the study uses layered evaluation. Classification competitiveness can be real, while financial usefulness remains unsupported under a trading/risk interpretation.",
    "diag_kicker": "Quantum Diagnostics",
    "diag_interpretation": "The quantum kernel is different and richer, but richness alone is not enough. To support task-relevant advantage, the representation must also align with the prediction target and improve integrated evidence across classification, trading/risk, and diagnostics. That condition is not established in this study.",
    "diag_kernel_label": "Kernel Similarity",
    "diag_kernel_pearson": "Pearson kernel correlation ≈ 0.6808",
    "diag_kernel_spearman": "Spearman kernel correlation ≈ 0.5054",
    "diag_rank_label": "Effective Rank",
    "diag_alignment_label": "Target Alignment",
    "diag_alignment_text": "Target-alignment differences are small: 0.0025, 0.0044, -0.0002",
    "diag_rank_qsvm": "QSVM effective rank ≈ 147.79",
    "diag_rank_rbf": "RBF_PCA effective rank ≈ 35.90",
    "claim_boundary_text": "The evidence supports a careful conclusion: QSVM is a meaningful quantum-kernel benchmark and remains competitive in selected classification settings. However, the integrated evidence does not support stronger claims of overall QSVM superiority, trading superiority, live trading readiness, or task-relevant quantum advantage.",
    "claim_card1_status": "Supported",
    "claim_card1_title": "Meaningful quantum-kernel benchmark",
    "claim_card1_text": "QSVM remains scientifically meaningful as a quantum-kernel benchmark and is classification-competitive in the tested multi-horizon Bitcoin setting.",
    "claim_card2_status": "Qualified",
    "claim_card2_title": "Classification competitiveness",
    "claim_card2_text": "QSVM shows the highest Mean F1 across the tested horizons, but corrected statistical support is limited. Classification competitiveness should be interpreted together with fold stability and trading/risk evidence.",
    "claim_card3_status": "Not Supported",
    "claim_card3_title": "Overall model superiority",
    "claim_card3_text": "The evidence does not establish overall QSVM superiority over classical kernel baselines.",
    "claim_card4_status": "Not Supported",
    "claim_card4_title": "Trading superiority or deployment readiness",
    "claim_card4_text": "The trading/risk layer does not establish QSVM trading superiority or live deployment readiness.",
    "claim_card5_status": "Not Established",
    "claim_card5_title": "Task-relevant quantum advantage",
    "claim_card5_text": "Quantum diagnostics show kernel difference and richer spectral structure, but not task-relevant quantum advantage.",
    "claim_boundary_statement": "The safest conclusion is not \"QSVM wins.\" The safer conclusion is that QSVM is worth studying under strict financial QML evaluation, and that its claims must be bounded by multiple evidence layers.",
    "table_group1_title": "Classification and Stability Summary",
    "table_group1_intro": "Fold-level classification evidence shows that QSVM has the highest Mean F1 across the tested horizons, but statistical and stability interpretation must remain bounded.",
    "table_group1_note": "<span class=\"badge-focus gold evidence-badge\">Holm-limited</span><br>Holm-corrected statistical support is observed only for QSVM vs RBF_FULL at the 1-day horizon. Other QSVM comparisons are descriptive or not significant after correction.",
    "table_group2_title": "Trading/Risk Summary",
    "table_group2_intro": "The trading/risk layer uses clean out-of-sample predictions under a fixed post-hoc interpretation. It does not represent a deployable trading strategy.",
    "table_group2_note": "Turnover denotes aggregate turnover across evaluated out-of-sample folds, not daily turnover. These results are for interpretation only and are not investment advice.",
    "table_group3_title": "Quantum Diagnostics and Claim Boundary",
    "table_group3_intro": "Quantum diagnostics evaluate whether the QSVM kernel differs structurally from the PCA-controlled RBF kernel and whether that difference is task-relevant.",
    "final_takeaway_kicker": "Final Takeaway",
    "final_takeaway_title": "What this study actually found",
    "final_takeaway_message": "<span class=\"final-message-line final-message-lead\">QSVM is not a guaranteed winner, but it is not a cosmetic benchmark either.</span><span class=\"final-message-line\">Across the tested horizons, QSVM delivers the <span class=\"final-finding-highlight\">strongest Mean F1 profile</span> and remains especially meaningful when compared against the <span class=\"final-finding-highlight\">PCA-controlled classical kernel baseline</span>. Its quantum-generated kernel is <span class=\"final-finding-highlight\">structurally different from RBF_PCA and shows a richer spectral profile</span>, suggesting that the quantum representation is doing something non-trivial.</span><span class=\"final-message-line final-message-boundary\">The boundary is equally important: this representational difference does not yet translate into broad statistical superiority, trading superiority, or task-relevant quantum advantage. The result is therefore not \"QSVM wins.\" The result is stronger and more useful: QSVM is empirically meaningful, diagnostically distinct, and worth studying further - but only under careful evidence boundaries.</span>",
    "final_chip_leakage": "Leakage-safe",
    "final_chip_horizon": "Horizon-aware",
    "final_chip_trading": "Trading-aware",
    "final_chip_diagnostic": "Diagnostically bounded",
    "final_takeaway_supporting": "",
    "final_takeaway_closing": ""
  },
  "th": {
    "nav_dashboard": "ภาพรวมผลลัพธ์",
    "nav_summary": "สรุปใจความ",
    "nav_claims": "ขอบเขตข้อสรุป",
    "nav_appendix": "หลักฐานประกอบ",
    "eyebrow": "Finance ML &middot; Quantum Kernel Benchmark &middot; Bitcoin Forecasting",
    "hero_title": "ทดสอบ Quantum Machine Learning ภายใต้การประเมินทางการเงินจริง",
    "hero_subtitle": "งานนี้เปรียบเทียบ Quantum Support Vector Machine กับ classical kernel baselines ในโจทย์พยากรณ์ทิศทางราคา Bitcoin หลายช่วงเวลา โดยพิจารณาทั้งผลการพยากรณ์ ความเสี่ยงทางการเงิน และหลักฐานเชิงโครงสร้างของ quantum kernel",
    "hero_positioning": "โครงการนี้ไม่ได้เริ่มจากสมมติฐานว่าโมเดลควอนตัมต้องชนะโมเดลแบบดั้งเดิม แต่ตั้งคำถามที่เข้มงวดกว่า คือ เมื่อ QSVM ถูกทดสอบภายใต้เงื่อนไข financial validation ที่ป้องกันข้อมูลรั่วและประเมินหลายมิติ quantum-generated kernel ให้คุณค่าเพิ่มที่เกี่ยวข้องกับโจทย์จริงหรือไม่",
    "hero_chip_leakage": "ป้องกัน leakage",
    "hero_chip_horizon": "หลาย horizon",
    "hero_chip_trading": "มี trading/risk layer",
    "hero_chip_diagnostic": "มี diagnostic boundary",
    "final_answer_label": "คำตอบหลัก",
    "final_answer_title": "QSVM มีคุณค่าเชิงวิจัย แต่ยังไม่อาจสรุปได้ว่าเกิด quantum advantage",
    "final_answer_text": "QSVM ยังมีความหมายในฐานะ quantum-kernel benchmark และมีความสามารถในการแข่งขันในชั้นการพยากรณ์ทิศทางราคา อย่างไรก็ตาม เมื่อพิจารณาหลักฐานรวมจาก classification, trading/risk และ quantum diagnostics แล้ว งานนี้ยังไม่สนับสนุนข้อสรุปว่า QSVM เหนือกว่าโดยรวม เหนือกว่าด้านการเงิน หรือแสดง task-relevant quantum advantage ในบริบทที่ทดสอบ",
    "kpi_folds_label": "รอบทดสอบแบบเลื่อนเวลา",
    "kpi_folds_note": "ประเมินจากข้อมูลอนาคตที่โมเดลยังไม่เคยเห็น",
    "kpi_horizons_label": "ระยะพยากรณ์",
    "kpi_horizons_note": "1 วัน, 7 วัน, 30 วัน",
    "kpi_layers_label": "มุมประเมินผล",
    "kpi_layers_note": "การพยากรณ์, ผลตอบแทน/ความเสี่ยง, ความทนทาน, โครงสร้างโมเดล",
    "kpi_num": "0",
    "kpi_adv_label": "การอ้างเกินหลักฐาน",
    "kpi_adv_note": "ไม่มีการสรุปว่าโมเดลควอนตัมเหนือกว่า หากหลักฐานรวมยังไม่ชัดเจน",
    "summary_kicker": "สรุปใจความสำคัญ",
    "summary_title": "ผลลัพธ์ไม่ได้มีผู้ชนะเพียงมิติเดียว",
    "summary_desc": "ผลการทดลองชี้ว่า QSVM ยังมีคุณค่าในเชิงการพยากรณ์ แต่เมื่อประเมินร่วมกับผลตอบแทน ความเสี่ยง และต้นทุนจากการซื้อขายแล้ว หลักฐานโดยรวมยังไม่สนับสนุนว่า QSVM เหนือกว่าโมเดลแบบดั้งเดิม",
    "sum1_title": "QSVM ยังมีศักยภาพในการพยากรณ์ทิศทางราคา",
    "sum1_text": "ผลการทดลองแสดงว่า QSVM ยังทำผลงานได้ดีพอแข่งขันในการพยากรณ์ทิศทางราคา Bitcoin ทั้งในระยะสั้น ระยะกลาง และระยะยาว",
    "sum2_title": "คะแนนการพยากรณ์ที่ดี อาจยังไม่พอในงานการเงิน",
    "sum2_text": "กรณีระยะ 1 วันของ QSVM แสดงให้เห็นว่า คะแนนการพยากรณ์ที่ดูดีอาจลดความน่าเชื่อถือลง เมื่อนำไปพิจารณาร่วมกับต้นทุนการซื้อขาย ความเสี่ยง และการเปลี่ยนสถานะซื้อขายบ่อยครั้ง",
    "sum3_title": "RBF_FULL ให้หลักฐานด้านผลตอบแทนและความเสี่ยงที่แข็งแรงกว่า",
    "sum3_text": "ในการทดสอบระยะ 7 วันและ 30 วัน โมเดล RBF_FULL ให้ผลตอบแทนเมื่อเทียบกับความเสี่ยงดีกว่า QSVM ภายใต้กรอบการทดสอบเดียวกัน",
    "sum4_title": "โมเดลที่ซับซ้อนกว่า ไม่ได้แปลว่าใช้งานได้ดีกว่าเสมอ",
    "sum4_text": "QSVM สามารถจับความสัมพันธ์ของข้อมูลได้ซับซ้อนกว่าโมเดลอ้างอิงบางตัว แต่ยังไม่เห็นว่าความซับซ้อนนั้นช่วยให้ผลลัพธ์ดีกว่าอย่างชัดเจนในการพยากรณ์หรือการประเมินทางการเงิน",
    "dashboard_kicker": "แดชบอร์ดผลลัพธ์หลัก",
    "dashboard_title": "หลักฐานแต่ละชั้นเปลี่ยนการตีความ",
    "dashboard_desc": "ผล classification ทำให้ QSVM ดูแข่งขันได้ แต่ trading/risk และ quantum diagnostics เป็นตัวกำหนดขอบเขตข้อสรุปสุดท้าย ผลลัพธ์จึงควรถูกอ่านเป็นหลักฐานหลายชั้น ไม่ใช่ leaderboard เดียว",
    "chart1_title": "หลักฐานด้าน Classification",
    "chart1_desc": "ค่า Mean F1-score across horizons และ models",
    "chart1_sowhat": "<strong>แปลว่าอะไร:</strong> QSVM ยังควรถูกพิจารณาในโจทย์ Bitcoin direction forecasting อย่างไรก็ตาม นี่เป็นเพียง evidence layer แรก ไม่ใช่ข้อสรุปสุดท้าย",
    "chart2_title": "หลักฐานด้าน Trading/Risk",
    "chart2_desc": "ค่า Sharpe ratio across horizons และ models ภายใต้ post-hoc trading/risk interpretation ที่กำหนดไว้ล่วงหน้า",
    "chart2_sowhat": "<strong>แปลว่าอะไร:</strong> ชั้น trading/risk เปลี่ยนการตีความอย่างชัดเจน โดย RBF_FULL แข็งแรงกว่าใน horizon 7 วัน และ 30 วัน สะท้อนว่า classification strength ไม่ได้แปลเป็น financial usefulness โดยตรง",
    "gap_title": "คะแนนทำนายที่ดูดีไม่ได้แปลเป็นประโยชน์ทางการเงินโดยอัตโนมัติ",
    "gap_desc": "กรณี QSVM ที่ horizon 1 วัน แสดงให้เห็นว่าข้อกล่าวอ้างด้าน financial ML ต้องมีมากกว่า classification metric โมเดลอาจดูแข่งขันได้จาก F1-score แต่ผลอาจอ่อนลงเมื่อพิจารณา turnover, transaction costs และ drawdown risk",
    "gap_sowhat": "<strong>แปลว่าอะไร:</strong> จุดนี้คือบทเรียนสำคัญของงาน QSVM ดูน่าสนใจจากค่า F1 แต่เมื่อนำผลทำนายไปจำลองในมุมการซื้อขาย ผลลัพธ์ถูกลดทอนจากการเปลี่ยนสถานะบ่อยและต้นทุนแฝง",
    "metric_f1": "Mean F1",
    "metric_sharpe": "Sharpe ratio",
    "metric_return": "Total return",
    "metric_turnover": "Turnover",
    "diag_title": "Quantum kernel ที่ richer ไม่ได้เท่ากับ task-relevant advantage",
    "diag_desc": "QSVM kernel มีโครงสร้างแตกต่างจาก PCA-controlled RBF kernel และมี spectral profile ที่ richer กว่า อย่างไรก็ตาม target-alignment evidence มีขนาดเล็ก ดังนั้น diagnostic layer ยังไม่สนับสนุนข้อสรุปว่าเกิด task-relevant quantum advantage",
    "diag_sowhat": "<strong>แปลว่าอะไร:</strong> QSVM จับความสัมพันธ์ของข้อมูลได้แตกต่างและซับซ้อนกว่า แต่คำถามสำคัญคือความซับซ้อนนั้นช่วยให้พยากรณ์โจทย์นี้ได้ดีขึ้นจริงหรือไม่ ซึ่งหลักฐานยังไม่ชี้ชัด",
    "decision_kicker": "ข้อสรุปเชิงตัดสินใจ",
    "decision_title": "QSVM เป็นโมเดลที่ควรศึกษา แต่ไม่ควรถูกอ้างเกินหลักฐาน",
    "decision_text": "จุดแข็งที่สุดของงานนี้ไม่ใช่การพิสูจน์ว่าโมเดลควอนตัมชนะโมเดลแบบดั้งเดิม แต่คือการวางกรอบการทดสอบที่เข้มพอจะบอกได้ว่า โมเดลควอนตัมมีคุณค่าตรงไหน โมเดลแบบดั้งเดิมยังแข็งแรงกว่าตรงไหน และทำไมงานด้านการเงินต้องประเมินมากกว่าคะแนนการพยากรณ์เพียงตัวเดียว",
    "claim_kicker": "ขอบเขตของข้อสรุป",
    "claim_title": "หลักฐานสนับสนุนอะไร - และยังไม่สนับสนุนอะไร",
    "claim_desc": "งานนี้ไม่ตีความคะแนน classification ที่สูงที่สุดว่าเป็นหลักฐานของ model superiority โดยตรง ข้อสรุปสุดท้ายถูกจำกัดด้วย classification evidence, stability behavior, trading/risk interpretation และ quantum diagnostics",
    "claim_supported_title": "หลักฐานสนับสนุน",
    "claim_qualified_title": "ต้องตีความอย่างระมัดระวัง",
    "claim_not_title": "ยังไม่สนับสนุน",
    "claim_supported_html": "<li>QSVM ยังแข่งขันได้ในการพยากรณ์ทิศทางราคา Bitcoin</li><li>โมเดลควอนตัมสามารถจับความสัมพันธ์ของข้อมูลได้แตกต่างและซับซ้อนกว่าโมเดลอ้างอิงบางตัว</li><li>RBF_FULL ให้หลักฐานด้านผลตอบแทนและความเสี่ยงที่แข็งแรงกว่าในระยะกลางและระยะยาว</li><li>กรอบการทดลองช่วยลดความเสี่ยงจากข้อมูลรั่ว และทำให้การเปรียบเทียบโมเดลมีความยุติธรรมมากขึ้น</li>",
    "claim_qualified_html": "<li>คะแนนการพยากรณ์ที่ดี ไม่ใช่ข้อสรุปว่าโมเดลดีที่สุดโดยรวม</li><li>ผลด้านการซื้อขายในงานนี้เป็นการประเมินเชิงทดลอง ไม่ใช่ระบบซื้อขายที่พร้อมใช้งานจริง</li><li>โมเดลที่ซับซ้อนกว่าไม่ได้แปลว่ามีประโยชน์มากกว่าเสมอ</li><li>ผลลัพธ์นี้ขึ้นอยู่กับชุดข้อมูล ช่วงเวลา ตัวแปร และวิธีการประเมินที่ใช้ในงานนี้</li>",
    "claim_not_html": "<li>ยังไม่สามารถสรุปได้ว่า QSVM เหนือกว่าโมเดลแบบดั้งเดิมโดยรวม</li><li>ยังไม่สามารถสรุปได้ว่า QSVM เหนือกว่าในเชิงผลตอบแทนและความเสี่ยง</li><li>ยังไม่สามารถสรุปได้ว่าเกิดความได้เปรียบจากโมเดลควอนตัมที่มีประโยชน์ต่อโจทย์นี้อย่างชัดเจน</li><li>งานนี้ไม่ใช่การรับรองว่าระบบพร้อมใช้ซื้อขายจริงหรือสามารถรับประกันกำไรได้</li>",
    "appendix_kicker": "ตารางหลักฐาน",
    "appendix_title": "รายละเอียดหลักฐานสำหรับตรวจสอบเพิ่มเติม",
    "appendix_desc": "หน้าเว็บหลักอธิบายการตีความ ส่วนตารางด้านล่างเปิดให้ผู้อ่านที่ต้องการตรวจสอบตัวเลขและหลักฐานเบื้องหลัง claim boundary ดูเพิ่มเติมได้",
    "table_classification": "ตารางผลการพยากรณ์ทิศทางราคา",
    "table_trading": "ตารางผลตอบแทนและความเสี่ยง",
    "table_decision": "ตารางสรุปการตัดสินใจจากผลลัพธ์",
    "table_diagnostic": "ตารางวิเคราะห์โครงสร้างโมเดลควอนตัม",
    "table_verdict": "ตารางข้อสรุปสุดท้าย",
    "axis_f1": "ค่า F1 เฉลี่ย",
    "axis_sharpe": "Sharpe",
    "axis_rank": "Effective rank",
    "diag_annotation": "Kernel correlation ≈ 0.6808 · target alignment difference ≈ 0.0022",
    "footer": "Final bilingual finance-grade showcase · ใช้เพื่อสรุปและแสดงผลเท่านั้น · ไม่มีการทดลองใหม่",
    "nav_research": "คำถามวิจัย",
    "nav_dataset": "ข้อมูลที่ใช้ในการศึกษา",
    "rq_kicker": "คำถามวิจัย",
    "rq_title": "ไม่ใช่แค่ “โมเดลไหนชนะ” แต่คือหลักฐานแบบใดจึงเพียงพอ",
    "rq_desc": "ข้อกล่าวอ้างเกี่ยวกับ Financial QML ไม่ควรถูกตัดสินจากค่าเฉลี่ยของ metric เดียว งานนี้จึงประเมิน QSVM ผ่านหลักฐาน 4 ชั้น ได้แก่ การพยากรณ์ทิศทางราคา ความเสถียร across folds การตีความด้าน trading/risk และ quantum kernel diagnostics",
    "rq_main_label": "คำถามวิจัย",
    "rq_main_question": "QSVM ให้คุณค่าเพิ่มที่เกี่ยวข้องกับโจทย์จริงเหนือ classical kernel baselines หรือไม่ ภายใต้การพยากรณ์ทิศทาง Bitcoin แบบ leakage-safe และ multi-horizon?",
    "rq_card1_title": "Directional Classification",
    "rq_card1_text": "QSVM สามารถพยากรณ์ทิศทางราคา Bitcoin ได้แข่งขันกับ classical baselines หรือไม่ ใน horizon 1 วัน, 7 วัน และ 30 วัน?",
    "rq_card2_title": "Stability Across Time",
    "rq_card2_text": "ผลลัพธ์ของโมเดลเสถียร across rolling walk-forward folds หรือขึ้นอยู่กับบางช่วงเวลาของตลาดมากเกินไป?",
    "rq_card3_title": "Trading/Risk Interpretation",
    "rq_card3_text": "เมื่อใช้เฉพาะ out-of-sample predictions แล้วนำไปตีความผ่าน transaction costs, turnover, Sharpe ratio, return และ drawdown ผลลัพธ์ยังมีความหมายทางการเงินหรือไม่?",
    "rq_card4_title": "Quantum Kernel Diagnostics",
    "rq_card4_text": "Quantum-generated kernel มีโครงสร้างแตกต่างจาก classical kernel จริงหรือไม่ และความแตกต่างนั้นเกี่ยวข้องกับ target prediction หรือไม่?\r\n\r\nBoundary Note:\r\nไม่มี evidence layer ใดเพียงชั้นเดียวที่เพียงพอสำหรับสรุปว่าโมเดลหนึ่งเหนือกว่าอีกโมเดลหนึ่ง ต้องตีความ classification, stability, financial interpretation และ diagnostics ร่วมกัน",
    "rq_boundary_note": "ไม่มี evidence layer ใดเพียงชั้นเดียวที่เพียงพอสำหรับสรุปว่าโมเดลหนึ่งเหนือกว่าอีกโมเดลหนึ่ง ต้องตีความ classification, stability, financial interpretation และ diagnostics ร่วมกัน",
    "btc_kicker": "ทำไมต้อง Bitcoin?",
    "btc_title": "สนามทดสอบที่ผันผวนสำหรับ Financial QML",
    "btc_desc": "งานนี้ไม่ได้ใช้ Bitcoin เพื่อเสนอการลงทุนหรือระบบซื้อขาย แต่ใช้เป็น case study ที่ท้าทาย เพราะข้อมูลมีความผันผวนสูง ไม่คงที่ และได้รับอิทธิพลจากหลายแหล่งข้อมูล",
    "btc_narrative": "งานด้าน financial machine learning ยากกว่างานทำนายทั่วไป เพราะคะแนนการพยากรณ์ที่ดีไม่ได้แปลว่าจะตีความทางการเงินได้ดีเสมอไป โมเดลอาจดูแข่งขันได้เมื่อวัดด้วย classification metrics แต่ผลลัพธ์อาจอ่อนลงเมื่อพิจารณา transaction costs, turnover, drawdowns หรือ regime shifts Bitcoin ทำให้ปัญหานี้ชัดเจน เพราะเป็นสินทรัพย์ที่ซื้อขายต่อเนื่อง มีความผันผวนสูง และสะท้อนทั้งข้อมูลตลาด กิจกรรมบน blockchain และสภาพแวดล้อมทางการเงินมหภาคพร้อมกัน จึงเหมาะสำหรับใช้เป็น stress-test ว่า QSVM ให้คุณค่าเพิ่มจริงหรือไม่เมื่อประเมินมากกว่า metric เดียว",
    "btc_boundary_note": "งานนี้ไม่ได้ใช้ Bitcoin เพื่อเสนอการลงทุนหรือระบบซื้อขาย แต่ใช้เป็น case study ที่ท้าทาย เพราะข้อมูลมีความผันผวนสูง ไม่คงที่ และได้รับอิทธิพลจากหลายแหล่งข้อมูล",
    "btc_card1_title": "High Volatility",
    "btc_card1_text": "Bitcoin ทำให้โมเดลต้องเผชิญกับการเปลี่ยนแปลงของราคาที่รวดเร็วและไม่เสถียร",
    "btc_card2_title": "Non-Stationarity",
    "btc_card2_text": "รูปแบบที่ดูมีประโยชน์ในช่วงหนึ่ง อาจอ่อนลงหรือเปลี่ยนทิศทางในอีกช่วงหนึ่ง",
    "btc_card3_title": "Multi-Source Signals",
    "btc_card3_text": "ชุดข้อมูลรวม market/technical, on-chain และ macroeconomic features",
    "btc_card4_title": "Accuracy-Risk Gap",
    "btc_card4_text": "คะแนน classification ที่ดีอาจไม่แปลเป็นผลลัพธ์ทางการเงินที่ดี",
    "btc_card5_title": "Strict Validation Needed",
    "btc_card5_text": "ต้องใช้ leakage-safe walk-forward protocol เพื่อหลีกเลี่ยงข้อสรุปที่ดูดีเกินจริง",
    "flow_classification": "Directional classification",
    "flow_stability": "Stability",
    "flow_trading": "Trading/risk",
    "flow_diagnostics": "Quantum diagnostics",
    "flow_boundary": "Claim boundary",
    "data_kicker": "ข้อมูลที่ใช้ในการศึกษา",
    "data_title": "ข้อมูล Bitcoin รายวัน หลายกลุ่มสัญญาณ และ 3 ระยะพยากรณ์",
    "data_desc": "งานนี้ใช้ชุดข้อมูล Bitcoin รายวันบน UTC calendar โดยรวมสัญญาณจาก market/technical, on-chain และ macroeconomic features พร้อม lag ข้อมูล exogenous 1 วันเพื่อลดความเสี่ยงของ look-ahead bias",
    "data_narrative": "แต่ละ observation แทนข้อมูลที่มีอยู่ ณ วันนั้นหรือก่อนหน้า จากนั้นโมเดลทำนายว่าราคาปิดของ Bitcoin ในอนาคตจะสูงกว่าราคาปัจจุบันหรือไม่ Horizon ทั้ง 3 ระยะ ได้แก่ 1 วัน, 7 วัน และ 30 วัน เป็น prediction tasks คนละงาน ไม่ใช่ input windows จุดนี้สำคัญเพราะงานต้องการตรวจสอบว่าพฤติกรรมของโมเดลเปลี่ยนไปอย่างไรเมื่อโจทย์เปลี่ยนจากระยะสั้นไปสู่ระยะกลางและระยะยาว",
    "data_asset_label": "Asset",
    "data_asset_value": "ข้อมูล Bitcoin รายวัน",
    "data_period_label": "Study Period",
    "data_period_value": "31 มกราคม 2016 ถึง 30 พฤศจิกายน 2025",
    "data_domains_label": "Feature Domains",
    "data_domains_value": "Market/technical, on-chain และ macroeconomic features",
    "data_horizons_label": "Prediction Horizons",
    "data_horizons_value": "พยากรณ์ทิศทางราคาในระยะ 1 วัน, 7 วัน และ 30 วัน",
    "data_validation_label": "Validation Design",
    "data_validation_value": "Rolling walk-forward validation จำนวน 27 folds",
    "data_leakage_label": "Leakage Control",
    "data_leakage_value": "Lag ข้อมูล on-chain และ macroeconomic variables 1 วันก่อนนำเข้าโมเดล",
    "data_domain1_label": "Market / Technical",
    "data_domain2_label": "On-chain",
    "data_domain3_label": "Macroeconomic",
    "data_lag_badge": "1-day exogenous lag",
    "data_folds_badge": "27 folds",
    "data_clarification_note": "Prediction horizon หมายถึงช่วงเวลาในอนาคตที่ต้องการทำนาย ไม่ใช่จำนวนวันย้อนหลังที่ใช้เป็น input เช่น ในโจทย์ 7 วัน โมเดลใช้ข้อมูลที่มี ณ วัน t เพื่อทำนายว่าราคาปิด Bitcoin ณ วัน t+7 จะสูงกว่าวัน t หรือไม่",
    "detail_feature_market": "ตัวแปรจากราคา ปริมาณซื้อขาย ความผันผวน momentum และ trend ที่สะท้อนพฤติกรรมตลาดของ Bitcoin",
    "detail_feature_onchain": "สัญญาณจากกิจกรรมบนเครือข่าย blockchain และธุรกรรม ซึ่งอาจสะท้อนพฤติกรรมที่อยู่นอกเหนือจากราคาตลาดเพียงอย่างเดียว",
    "detail_feature_macro": "บริบททางการเงินมหภาค เช่น risk sentiment ค่าเงิน สภาวะตลาดหุ้น และสภาพแวดล้อมด้านอัตราดอกเบี้ย",
    "detail_horizon_1d": "งานพยากรณ์ระยะสั้น ใช้ข้อมูล ณ วัน t เพื่อทำนายว่าราคาปิด Bitcoin ณ วัน t+1 สูงกว่าวัน t หรือไม่",
    "detail_horizon_7d": "งานพยากรณ์ระยะกลาง ใช้ข้อมูล ณ วัน t เพื่อทำนายว่าราคาปิด Bitcoin ณ วัน t+7 สูงกว่าวัน t หรือไม่",
    "detail_horizon_30d": "งานพยากรณ์ระยะยาว ใช้ข้อมูล ณ วัน t เพื่อทำนายว่าราคาปิด Bitcoin ณ วัน t+30 สูงกว่าวัน t หรือไม่",
    "detail_validation_lag": "ข้อมูล on-chain และ macroeconomic variables ถูกเลื่อนย้อนหลัง 1 วันก่อนนำเข้าโมเดล เพื่อลดความเสี่ยงของ look-ahead bias",
    "detail_validation_folds": "ใช้ rolling walk-forward validation จำนวน 27 folds เพื่อประเมินโมเดลแบบ out-of-sample แทนการสุ่มแบ่งข้อมูล",
    "timeline_context_dataset": "ข้อมูล Bitcoin รายวัน / UTC calendar",
    "timeline_context_period": "31 มกราคม 2016 ถึง 30 พฤศจิกายน 2025",
    "timeline_context_folds": "Rolling walk-forward validation จำนวน 27 folds",
    "timeline_context_label": "ขอบเขตข้อมูล",
    "pipeline_kicker": "กระบวนการทดลอง",
    "pipeline_title": "จากข้อมูล Bitcoin รายวันสู่หลักฐาน out-of-sample ที่ป้องกัน leakage",
    "pipeline_desc": "การทดลองนี้ยึดหลักสำคัญข้อเดียว คือ ทุกขั้นตอนที่อาจทำให้ข้อมูลอนาคตรั่วเข้าสู่โมเดล ต้องถูก fit หรือตัดสินใจจาก training data เท่านั้น ส่วน test fold ถูกใช้เพื่อ out-of-sample evaluation เท่านั้น",
    "pipeline_narrative_1": "กระบวนการเริ่มจาก master dataset รายวันของ Bitcoin บน UTC calendar ซึ่งรวม market/technical, on-chain และ macroeconomic features จากนั้นข้อมูล exogenous เช่น on-chain และ macroeconomic variables ถูก lag 1 วันก่อนนำเข้าโมเดล จากนั้นจึงสร้าง binary directional labels และฝึกสอนโมเดลแยกจากกันสำหรับแต่ละโจทย์ horizon ได้แก่ 1 วัน, 7 วัน และ 30 วัน",
    "pipeline_narrative_2": "ในแต่ละ walk-forward fold ขั้นตอน preprocessing จะ fit จาก training window เท่านั้น ไม่ว่าจะเป็น scaling, PCA, hyperparameter selection หรือ model fitting ทั้งหมดต้องเสร็จก่อนที่โมเดลจะถูกประเมินบน test fold ผลทำนายที่ได้จึงถูกเก็บเป็น clean out-of-sample evidence และนำไปตีความต่อผ่าน classification, stability, trading/risk และ diagnostic layers",
    "pipeline_step1_title": "Daily UTC Master Dataset",
    "pipeline_step1_text": "จัดข้อมูล market, on-chain และ macroeconomic variables ให้อยู่บน BTC daily calendar เดียวกัน",
    "pipeline_step2_title": "One-Day Exogenous Lag",
    "pipeline_step2_text": "เลื่อนข้อมูล on-chain และ macroeconomic variables ย้อนหลัง 1 วันเพื่อลด look-ahead risk",
    "pipeline_step3_title": "Independent Horizon Labels",
    "pipeline_step3_text": "สร้าง binary directional labels แยกสำหรับโจทย์ horizon 1 วัน, 7 วัน และ 30 วัน",
    "pipeline_step4_title": "Rolling Walk-Forward Folds",
    "pipeline_step4_text": "ใช้การแบ่ง train/test ตามลำดับเวลา ไม่ใช้ random split",
    "pipeline_step5_title": "Train-Only Preprocessing",
    "pipeline_step5_text": "fit scaling และ PCA จาก training fold เท่านั้น แล้วจึง apply ไปยัง test fold",
    "pipeline_step6_title": "Nested Model Selection",
    "pipeline_step6_text": "เลือก model settings จากข้อมูล training เท่านั้น",
    "pipeline_step7_title": "Out-of-Sample Prediction",
    "pipeline_step7_text": "สร้าง predictions บน test folds ที่โมเดลยังไม่เคยเห็น",
    "pipeline_step8_title": "Evidence-Layer Evaluation",
    "pipeline_step8_text": "นำ OOS predictions ไปตีความผ่าน classification, stability, trading/risk และ diagnostics",
    "pipeline_trust_note": "แต่ละ prediction horizon ถูกปฏิบัติเป็นโจทย์พยากรณ์แยกจากกัน โมเดลสำหรับ 1 วัน, 7 วัน และ 30 วันไม่ได้ถูกฝึกเป็น multi-task model เดียวกัน และ test fold ไม่ถูกใช้เพื่อ fit preprocessing, เลือก parameters, สร้าง transformations หรือ optimize trading rules",
    "roles_kicker": "บทบาทของโมเดล",
    "roles_title": "Baseline แต่ละตัวไม่ได้ตอบคำถามเดียวกัน",
    "roles_desc": "ชุดโมเดลในงานนี้ถูกออกแบบเพื่อการเปรียบเทียบตามบทบาท ไม่ใช่การแข่งขันแบบดูว่าโมเดลไหนชนะอย่างเดียว QSVM ไม่ได้ถูกตั้งให้เป็นผู้ชนะล่วงหน้า แต่ถูกประเมินเทียบกับ classical kernel baselines ที่มีขอบเขตการเปรียบเทียบต่างกัน",
    "roles_narrative_1": "งานนี้เน้นการเปรียบเทียบในกลุ่ม kernel-based models เพราะ QSVM ยังคงใช้ logic ของ SVM classification แต่เปลี่ยนวิธีสร้าง similarity function จาก classical kernel ไปเป็น quantum-generated kernel ดังนั้นการตีความ QSVM อย่างยุติธรรมต้องเปรียบกับ classical references มากกว่าหนึ่งแบบ",
    "roles_narrative_2": "RBF_PCA เป็น dimension-controlled comparator เพราะใช้ PCA-reduced feature representation ใกล้กับข้อจำกัดของ QSVM ส่วน RBF_FULL เป็น full-feature classical kernel reference ขณะที่ QSVM เป็น quantum-kernel benchmark สำหรับตรวจสอบว่า quantum-generated similarity ให้คุณค่าเพิ่มที่เกี่ยวข้องกับโจทย์จริงหรือไม่ภายใต้ validation protocol เดียวกัน",
    "role_qsvm_title": "QSVM - Quantum-Kernel Benchmark",
    "role_qsvm_text": "ใช้ quantum-generated kernel เพื่อสร้าง pairwise similarity ก่อนเข้าสู่ SVM classification บทบาทคือทดสอบว่า quantum-kernel representation ให้ task-relevant value หรือไม่ ไม่ใช่ตั้งต้นว่า quantum ต้องเหนือกว่า",
    "role_rbf_pca_title": "RBF_PCA - Dimension-Controlled Classical Comparator",
    "role_rbf_pca_text": "ใช้ classical RBF kernel บน PCA-reduced features เป็นตัวเปรียบเทียบเชิงโครงสร้างที่ใกล้กับ QSVM มากที่สุด เพราะทั้งสองอยู่ภายใต้ข้อจำกัดด้านมิติของ input",
    "role_rbf_full_title": "RBF_FULL - Full-Feature Classical Kernel Reference",
    "role_rbf_full_text": "ใช้ classical RBF kernel กับ full feature representation ทำหน้าที่เป็นตัวแทน classical kernel ที่ไม่ถูกจำกัดด้านมิติ เพื่อประเมินว่าการลดมิติของข้อมูลตามข้อจำกัดของ quantum-capacity setting อาจทำให้สูญเสียข้อมูลที่เกี่ยวข้องกับโจทย์หรือไม่",
    "roles_interpretation_rule": "ถ้า QSVM ดีกว่า RBF_PCA แต่ยังไม่ดีกว่า RBF_FULL การตีความที่ปลอดภัยคือ QSVM แข่งขันได้ภายใต้ dimension-controlled setting ไม่ใช่ QSVM เหนือกว่า classical models โดยรวม",
    "leak_kicker": "การควบคุม Leakage",
    "leak_title": "test fold ต้องไม่ถูกแตะก่อนถึงขั้นประเมินผล",
    "leak_desc": "งาน financial time-series อาจดูดีเกินจริงได้ หากข้อมูลอนาคตรั่วเข้าสู่ preprocessing, model selection หรือ trading interpretation งานนี้จึงแยก training decisions ออกจาก out-of-sample evaluation อย่างชัดเจน",
    "leak_narrative_1": "protocol นี้ถูกออกแบบให้ข้อมูลไหลไปข้างหน้าตามเวลา ตั้งแต่ data alignment, feature lagging, label construction, train/test splitting, preprocessing, PCA, model selection และ OOS prediction ทุกขั้นตอนที่เรียนรู้จากข้อมูลต้อง fit ภายใน training fold เท่านั้น ส่วน test fold จะถูกใช้หลังจากโมเดลและ transformations ถูกกำหนดเรียบร้อยแล้ว",
    "leak_narrative": "protocol นี้ถูกออกแบบให้ข้อมูลไหลไปข้างหน้าตามเวลา ตั้งแต่ data alignment, feature lagging, label construction, train/test splitting, preprocessing, PCA, model selection และ OOS prediction ทุกขั้นตอนที่เรียนรู้จากข้อมูลต้อง fit ภายใน training fold เท่านั้น ส่วน test fold จะถูกใช้หลังจากโมเดลและ transformations ถูกกำหนดเรียบร้อยแล้ว",
    "leak_control1_title": "No Random Split",
    "leak_control1_text": "รักษาลำดับเวลาด้วย rolling walk-forward validation",
    "leak_control2_title": "One-Day Exogenous Lag",
    "leak_control2_text": "เลื่อนข้อมูล on-chain และ macroeconomic variables ก่อนนำเข้าโมเดล",
    "leak_control3_title": "Train-Only Scaling",
    "leak_control3_text": "fit scaler จาก training fold เท่านั้น",
    "leak_control4_title": "Train-Only PCA",
    "leak_control4_text": "fit dimensionality reduction จาก training fold เท่านั้น",
    "leak_control5_title": "Train-Only Model Selection",
    "leak_control5_text": "เลือก hyperparameters โดยไม่ใช้ outer test fold",
    "leak_control6_title": "Untouched OOS Test Fold",
    "leak_control6_text": "สร้าง final predictions หลังจาก training decisions ถูกกำหนดแล้วเท่านั้น",
    "leak_control7_title": "OOS-Only Trading/Risk Layer",
    "leak_control7_text": "การตีความ trading/risk ใช้เฉพาะ clean out-of-sample predictions พร้อมสมมติฐาน transaction cost ที่กำหนดไว้ล่วงหน้า ไม่มีการ optimize trading rule หรือ cost parameter จาก test fold",
    "leak_control8_title": "Hardcoded Transaction Cost",
    "leak_control8_text": "ชั้น trading/risk บังคับใช้ transaction cost คงที่ c = 0.0015 เพื่อลดความเสี่ยงของการตีความเกินจริงจากโมเดลที่เปลี่ยนสัญญาณถี่เกินไป",
    "leak_control9_title": "Diagnostics Separated from Selection",
    "leak_control9_text": "ใช้ quantum diagnostics เพื่อการตีความ ไม่ใช่เพื่อเลือกโมเดล",
    "leak_trust_note": "การออกแบบนี้ไม่ได้รับประกันว่า performance จะดีขึ้น แต่ช่วยลดความเสี่ยงของการตีความเกินจริง โดยแยก predictive evidence, financial interpretation และ diagnostic evidence ออกจากกันอย่างชัดเจน",
    "ladder_kicker": "ลำดับชั้นของหลักฐาน",
    "ladder_title": "หลักฐานแต่ละชั้นตอบคำถามคนละแบบ",
    "ladder_desc": "งานนี้ไม่ได้จัดอันดับโมเดลจากกราฟเดียว แต่สร้าง evidence ladder จาก classification ไปสู่ stability จากการตีความทางการเงินไปสู่ quantum diagnostics และสุดท้ายจึงเข้าสู่ claim boundary",
    "ladder_narrative_1": "ค่า mean F1 ที่สูงสามารถสนับสนุนว่าโมเดลแข่งขันได้ในชั้น classification แต่ไม่สามารถพิสูจน์ financial usefulness ได้โดยตรง ในทำนองเดียวกัน quantum kernel ที่ richer สามารถสนับสนุนว่ามี representation ที่ต่างออกไป แต่ไม่สามารถพิสูจน์ task-relevant quantum advantage ได้ด้วยตัวเอง Worst-fold behavior มีความสำคัญ เพราะโมเดลที่มีค่าเฉลี่ยดูยอมรับได้ อาจยังล้มเหลวอย่างรุนแรงในช่วงตลาดที่ยากที่สุด Evidence ladder จึงช่วยป้องกันไม่ให้ claim คนละประเภทถูกปนกัน",
    "ladder_narrative": "ค่า mean F1 ที่สูงสามารถสนับสนุนว่าโมเดลแข่งขันได้ในชั้น classification แต่ไม่สามารถพิสูจน์ financial usefulness ได้โดยตรง ในทำนองเดียวกัน quantum kernel ที่ richer สามารถสนับสนุนว่ามี representation ที่ต่างออกไป แต่ไม่สามารถพิสูจน์ task-relevant quantum advantage ได้ด้วยตัวเอง Worst-fold behavior มีความสำคัญ เพราะโมเดลที่มีค่าเฉลี่ยดูยอมรับได้ อาจยังล้มเหลวอย่างรุนแรงในช่วงตลาดที่ยากที่สุด Evidence ladder จึงช่วยป้องกันไม่ให้ claim คนละประเภทถูกปนกัน",
    "ladder1_title": "Classification",
    "ladder1_question": "โมเดลทำนายทิศทางได้แข่งขันหรือไม่",
    "ladder1_can": "directional competitiveness",
    "ladder1_cannot": "trading superiority หรือ quantum advantage",
    "ladder2_title": "Stability",
    "ladder2_question": "โมเดลมีอาการเสื่อมประสิทธิภาพรุนแรงแค่ไหนใน walk-forward fold ที่แย่ที่สุด",
    "ladder2_can": "temporal robustness และ downside stability",
    "ladder2_cannot": "profitability, ความพร้อมใช้งานจริง หรือ hardware-level advantage",
    "ladder3_title": "Trading/Risk",
    "ladder3_question": "OOS predictions ยังมีความหมายหรือไม่เมื่อพิจารณา transaction costs และ risk metrics",
    "ladder3_can": "financial interpretation ภายใต้ protocol ที่กำหนด",
    "ladder3_cannot": "live trading readiness หรือ investment advice",
    "ladder4_title": "Quantum Diagnostics",
    "ladder4_question": "QSVM kernel มีโครงสร้างแตกต่างและเกี่ยวข้องกับ target หรือไม่",
    "ladder4_can": "representational evidence",
    "ladder4_cannot": "quantum advantage ด้วยตัวมันเอง",
    "ladder5_title": "Claim Boundary",
    "ladder5_question": "เมื่อรวมหลักฐานทั้งหมดแล้ว สรุปอะไรได้อย่างปลอดภัย",
    "ladder5_can": "bounded interpretation",
    "ladder5_cannot": "overclaim เกิน setting ที่ทดสอบ",
    "ladder_bridge_note": "ผลลัพธ์ควรถูกอ่านเป็นลำดับ: เริ่มจากหลักฐาน ต่อด้วยการตีความ และสุดท้ายจึงเป็นขอบเขตของ claim",
    "ladder_question_label": "คำถาม:",
    "ladder_can_label": "สนับสนุนได้:",
    "ladder_cannot_label": "สนับสนุนไม่ได้:",
    "qsvm_kicker": "กลไกของ QSVM Kernel",
    "qsvm_title": "จาก Features สู่ Quantum Similarity",
    "qsvm_desc": "QSVM ยังคงใช้ตรรกะของ Support Vector Machine แต่เปลี่ยนวิธีสร้าง similarity จาก classical kernel ไปเป็น quantum-generated kernel จุดเปลี่ยนหลักจึงไม่ใช่ตัว classifier ทั้งหมด แต่คือวิธีวัดความคล้ายกันระหว่าง observations",
    "qsvm_narrative_1": "ใน classical RBF-SVM ความคล้ายกันของข้อมูลถูกคำนวณผ่าน classical kernel function แต่ใน QSVM features จะถูกลดมิติให้เหมาะกับ quantum embedding dimension ก่อน จากนั้นจึงถูก encode ผ่าน quantum feature map ข้อมูลที่ถูก encode แล้วจะถูกแทนเป็น quantum states และนำมาเปรียบเทียบกันผ่าน pairwise state overlap เพื่อสร้าง quantum kernel matrix ก่อนส่งเข้าสู่ SVM classifier",
    "qsvm_narrative_2": "งานนี้ใช้ PennyLane default.qubit statevector simulator เพื่อคำนวณ quantum kernel แบบ deterministic ไม่ได้ใช้ physical quantum hardware ดังนั้นการทดลองนี้ประเมินพฤติกรรมของ representation ภายใต้ simulation ไม่ใช่ hardware speedup, shot noise, decoherence หรือผลจาก device calibration",
    "qsvm_card1_title": "เปลี่ยนอะไร?",
    "qsvm_card1_text": "QSVM เปลี่ยนกลไกการสร้าง similarity ไม่ได้เปลี่ยน learning framework ทั้งหมดของ SVM",
    "qsvm_card2_title": "จำลองอะไร?",
    "qsvm_card2_text": "Quantum kernel ถูกประเมินด้วย PennyLane default.qubit statevector simulation ไม่ใช่ physical quantum hardware",
    "qsvm_card3_title": "อะไรที่ไม่ได้รวมอยู่?",
    "qsvm_card3_text": "Statevector simulation ไม่รวม shot noise, measurement noise, decoherence หรือ device-specific calibration effects",
    "qsvm_card4_title": "อะไรที่ยังสรุปไม่ได้โดยอัตโนมัติ?",
    "qsvm_card4_text": "Quantum kernel ที่แตกต่างหรือ richer กว่า ไม่ได้แปลว่าเกิด quantum advantage โดยอัตโนมัติ",
    "qsvm_card5_title": "ควรอ่าน diagnostics อย่างไร?",
    "qsvm_card5_text": "Kernel richness หรือ effective rank ที่สูงกว่า ควรถูกตีความเป็น representational evidence ไม่ใช่หลักฐานว่าโมเดลเหนือกว่าในโจทย์จริง",
    "qsvm_diagnostic_bridge": "ผล diagnostics ภายหลังแสดงว่า QSVM kernel มีโครงสร้างแตกต่างจาก PCA-controlled RBF kernel โดย Pearson kernel correlation อยู่ประมาณ 0.6808 และ Spearman kernel correlation อยู่ประมาณ 0.5054 อีกทั้ง QSVM มี effective rank สูงกว่า ประมาณ 147.79 เทียบกับ RBF_PCA ประมาณ 35.90 อย่างไรก็ตาม target-alignment differences มีขนาดเล็กมาก ได้แก่ 0.0025, 0.0044 และ -0.0002 ดังนั้น kernel มีความแตกต่างและ richer จริง แต่หลักฐานยังไม่เพียงพอสำหรับสรุปว่าเกิด task-relevant quantum advantage",
    "qsvm_step1_title": "Input Features",
    "qsvm_step1_text": "สัญญาณจาก market/technical, on-chain และ macroeconomic features หลังการเตรียมข้อมูลแบบ leakage-safe",
    "qsvm_step2_title": "PCA-Reduced Features",
    "qsvm_step2_text": "ลดมิติของ features ให้เหมาะกับ quantum embedding dimension ที่ทำได้จริง",
    "qsvm_step3_title": "Quantum Feature Map",
    "qsvm_step3_text": "encode ค่า features แบบ classical ให้กลายเป็น quantum representation",
    "qsvm_step4_title": "Quantum State / Statevector Simulation",
    "qsvm_step4_text": "แทนข้อมูลที่ encode แล้วเป็น quantum states ผ่าน default.qubit simulator",
    "qsvm_step5_title": "Pairwise State Overlap",
    "qsvm_step5_text": "คำนวณ similarity ของ observations สองตัวจาก overlap ของ quantum states",
    "qsvm_step6_title": "Quantum Kernel Matrix",
    "qsvm_step6_text": "รวม pairwise similarities ทั้งหมดเป็น kernel matrix สำหรับ classifier",
    "qsvm_step7_title": "SVM Classifier",
    "qsvm_step7_text": "SVM ใช้ quantum kernel matrix เพื่อทำ margin-based classification",
    "qsvm_step8_title": "Direction Prediction",
    "qsvm_step8_text": "โมเดลทำนายว่าทิศทางราคาปิด Bitcoin ในอนาคตจะสูงขึ้นหรือไม่ สำหรับแต่ละ horizon-specific task",
    "dashboard_framing": "ชั้น classification แสดงว่า QSVM ยังมีความหมายในฐานะ quantum-kernel benchmark across horizons ที่ทดสอบ อย่างไรก็ตาม dashboard นี้ต้องถูกอ่านคู่กับ trading/risk evidence เพราะ financial machine learning ไม่ควรถูกตัดสินจาก predictive scores เพียงอย่างเดียว",
    "classification_stat_note": "<span class=\"badge-focus gold evidence-badge\">จำกัดด้วย Holm correction</span><br>หมายเหตุทางสถิติ: QSVM มี Mean F1 สูงที่สุดใน horizons ที่ทดสอบ แต่หลักฐานนัยสำคัญหลัง Holm correction พบเฉพาะการเปรียบเทียบ QSVM vs RBF_FULL ที่ horizon 1 วัน ส่วนการเปรียบเทียบอื่นเป็น descriptive หรือไม่ผ่านนัยสำคัญหลัง correction",
    "gap_kicker": "ช่องว่างระหว่าง Classification และ Trading",
    "gap_classification_label": "Classification Layer",
    "gap_classification_text": "QSVM มี Mean F1 สูงที่สุดในกลุ่ม kernel models ที่เปรียบเทียบสำหรับ horizon 1 วัน",
    "gap_trading_label": "Trading/Risk Layer",
    "gap_trading_text": "แต่สัญญาณ QSVM horizon 1 วันเดียวกันอ่อนลงจาก turnover สูงและความไวต่อ transaction cost",
    "gap_interpretation": "นี่ไม่ได้แปลว่า QSVM ไม่มีคุณค่าในฐานะ benchmark เชิงวิทยาศาสตร์ แต่เป็นเหตุผลว่าทำไมงานนี้ต้องใช้ layered evaluation ความสามารถในการแข่งขันด้าน classification อาจมีอยู่จริง ขณะที่ financial usefulness ยังไม่ถูกสนับสนุนภายใต้ trading/risk interpretation",
    "diag_kicker": "Quantum Diagnostics",
    "diag_interpretation": "Quantum kernel มีความแตกต่างและ richer จริง แต่ richness เพียงอย่างเดียวไม่เพียงพอ หากจะสนับสนุน task-relevant advantage representation นั้นต้อง align กับ prediction target และทำให้ integrated evidence ดีขึ้น across classification, trading/risk และ diagnostics เงื่อนไขนี้ยังไม่ถูกพิสูจน์ในงานนี้",
    "diag_kernel_label": "Kernel Similarity",
    "diag_kernel_pearson": "Pearson kernel correlation ≈ 0.6808",
    "diag_kernel_spearman": "Spearman kernel correlation ≈ 0.5054",
    "diag_rank_label": "Effective Rank",
    "diag_alignment_label": "Target Alignment",
    "diag_alignment_text": "Target-alignment differences มีขนาดเล็ก: 0.0025, 0.0044, -0.0002",
    "diag_rank_qsvm": "QSVM effective rank ≈ 147.79",
    "diag_rank_rbf": "RBF_PCA effective rank ≈ 35.90",
    "claim_boundary_text": "หลักฐานสนับสนุนข้อสรุปแบบระมัดระวังว่า QSVM มีความหมายในฐานะ quantum-kernel benchmark และยังแข่งขันได้ในบาง classification settings อย่างไรก็ตาม หลักฐานรวมยังไม่สนับสนุนข้อกล่าวอ้างที่แรงกว่า เช่น overall QSVM superiority, trading superiority, live trading readiness หรือ task-relevant quantum advantage",
    "claim_card1_status": "สนับสนุน",
    "claim_card1_title": "มีความหมายในฐานะ quantum-kernel benchmark",
    "claim_card1_text": "QSVM ยังมีความหมายทางวิทยาศาสตร์ในฐานะ quantum-kernel benchmark และแข่งขันได้ในชั้น classification ภายใต้ Bitcoin multi-horizon setting ที่ทดสอบ",
    "claim_card2_status": "สนับสนุนแบบมีเงื่อนไข",
    "claim_card2_title": "ความสามารถในการแข่งขันด้าน classification",
    "claim_card2_text": "QSVM มี Mean F1 สูงที่สุดใน horizons ที่ทดสอบ แต่ corrected statistical support ยังมีขอบเขตจำกัด ดังนั้น classification competitiveness ต้องอ่านร่วมกับ fold stability และ trading/risk evidence",
    "claim_card3_status": "ไม่สนับสนุน",
    "claim_card3_title": "ความเหนือกว่าโดยรวมของโมเดล",
    "claim_card3_text": "หลักฐานยังไม่อาจสรุปได้ว่า QSVM เหนือกว่า classical kernel baselines โดยรวม",
    "claim_card4_status": "ไม่สนับสนุน",
    "claim_card4_title": "Trading superiority หรือความพร้อมใช้งานจริง",
    "claim_card4_text": "trading/risk layer ยังไม่อาจสรุปได้ว่า QSVM มี trading superiority หรือความพร้อมสำหรับ live deployment",
    "claim_card5_status": "ยังไม่อาจสรุปได้",
    "claim_card5_title": "Task-relevant quantum advantage",
    "claim_card5_text": "quantum diagnostics แสดง kernel difference และ spectral richness ที่สูงกว่า แต่ยังไม่อาจสรุปได้ว่าเกิด task-relevant quantum advantage",
    "claim_boundary_statement": "ข้อสรุปที่ปลอดภัยที่สุดไม่ใช่ \"QSVM ชนะ\" แต่คือ QSVM ควรถูกศึกษาเพิ่มเติมภายใต้การประเมิน financial QML ที่เข้มงวด และข้อกล่าวอ้างเกี่ยวกับ QSVM ต้องถูกจำกัดด้วย evidence layers หลายชั้น",
    "table_group1_title": "Classification and Stability Summary",
    "table_group1_intro": "หลักฐานด้าน fold-level classification แสดงว่า QSVM มี Mean F1 สูงที่สุดใน horizons ที่ทดสอบ แต่การตีความเชิงสถิติและ stability ยังต้องอยู่ในขอบเขตที่เหมาะสม",
    "table_group1_note": "<span class=\"badge-focus gold evidence-badge\">จำกัดด้วย Holm correction</span><br>หลักฐานนัยสำคัญหลัง Holm correction พบเฉพาะการเปรียบเทียบ QSVM vs RBF_FULL ที่ horizon 1 วัน ส่วนการเปรียบเทียบอื่นเป็น descriptive หรือไม่ผ่านนัยสำคัญหลัง correction",
    "table_group2_title": "Trading/Risk Summary",
    "table_group2_intro": "trading/risk layer ใช้ clean out-of-sample predictions ภายใต้ post-hoc interpretation ที่กำหนดไว้ล่วงหน้า ไม่ใช่ระบบ trading ที่พร้อมใช้งานจริง",
    "table_group2_note": "Turnover หมายถึง aggregate turnover across out-of-sample folds ที่ประเมิน ไม่ใช่ daily turnover ผลลัพธ์นี้ใช้เพื่อการตีความเท่านั้น ไม่ใช่คำแนะนำการลงทุน",
    "table_group3_title": "Quantum Diagnostics and Claim Boundary",
    "table_group3_intro": "quantum diagnostics ใช้ตรวจสอบว่า QSVM kernel แตกต่างจาก PCA-controlled RBF kernel หรือไม่ และความแตกต่างนั้นเกี่ยวข้องกับโจทย์จริงหรือไม่",
    "final_takeaway_kicker": "ข้อสรุปสุดท้าย",
    "final_takeaway_title": "งานนี้พบอะไรจริง ๆ",
    "final_takeaway_message": "<span class=\"final-message-line final-message-lead\">QSVM ไม่ได้พิสูจน์ว่าชนะทุกโมเดล แต่ก็ไม่ใช่โมเดลที่ไม่มีคุณค่า</span><span class=\"final-message-line\">ในการทดลองนี้ QSVM ให้ผลด้านการทำนายทิศทางที่น่าสนใจ โดยเฉพาะเมื่อเปรียบเทียบกับโมเดล classical kernel ที่ถูกลดมิติด้วย PCA เพื่อให้เงื่อนไขใกล้เคียงกันมากขึ้น</span><span class=\"final-message-line\">นอกจากนี้ kernel ของ QSVM ยังมีโครงสร้างแตกต่างจาก RBF_PCA และมีความหลากหลายของ representation สูงกว่า แสดงว่าโมเดลไม่ได้เพียงทำซ้ำสิ่งที่ classical kernel ทำอยู่แล้ว</span><span class=\"final-message-line\">อย่างไรก็ตาม หลักฐานยังไม่เพียงพอที่จะสรุปว่า QSVM เหนือกว่าโดยรวม ใช้เทรดได้ดีกว่า หรือเกิด quantum advantage ในโจทย์นี้</span><span class=\"final-message-line final-message-boundary\">ข้อสรุปที่เหมาะสมคือ: QSVM เป็น benchmark ที่มีความหมาย มีพฤติกรรมที่ต่างจาก classical kernel และควรถูกศึกษาต่อภายใต้การประเมินที่รัดกุม</span>",
    "final_chip_leakage": "ป้องกัน leakage",
    "final_chip_horizon": "แยกตาม horizon",
    "final_chip_trading": "มี trading-risk layer",
    "final_chip_diagnostic": "มี diagnostic boundary",
    "final_takeaway_supporting": "",
    "final_takeaway_closing": ""
  }
};

const tableHTML = {
  "en": {
    "classification": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Mean F1</th><th>Std F1</th><th>Worst F1</th><th>Rank</th></tr></thead>\n        <tbody><tr class=\"highlight-row\"><td>1</td><td>QSVM</td><td>0.475</td><td>0.062</td><td>0.321</td><td>1</td></tr><tr><td>1</td><td>RBF_PCA</td><td>0.437</td><td>0.067</td><td>0.27</td><td>2</td></tr><tr><td>1</td><td>RBF_FULL</td><td>0.427</td><td>0.079</td><td>0.258</td><td>3</td></tr><tr class=\"highlight-row\"><td>7</td><td>QSVM</td><td>0.456</td><td>0.094</td><td>0.308</td><td>1</td></tr><tr><td>7</td><td>RBF_FULL</td><td>0.429</td><td>0.093</td><td>0.261</td><td>2</td></tr><tr><td>7</td><td>RBF_PCA</td><td>0.428</td><td>0.089</td><td>0.244</td><td>3</td></tr><tr class=\"highlight-row\"><td>30</td><td>QSVM</td><td>0.455</td><td>0.138</td><td>0.147</td><td>1</td></tr><tr><td>30</td><td>RBF_FULL</td><td>0.43</td><td>0.155</td><td>0.161</td><td>2</td></tr><tr><td>30</td><td>RBF_PCA</td><td>0.429</td><td>0.207</td><td>0.011</td><td>3</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "trading": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Total Return</th><th>Sharpe</th><th>Max Drawdown</th><th>Turnover</th><th>Rank</th></tr></thead>\n        <tbody><tr><td>1</td><td>RBF_PCA</td><td>-64.0%</td><td>-0.24</td><td>-92.8%</td><td>587.0</td><td>1</td></tr><tr><td>1</td><td>RBF_FULL</td><td>-67.4%</td><td>-0.26</td><td>-92.6%</td><td>671.0</td><td>2</td></tr><tr class=\"highlight-row\"><td>1</td><td>QSVM</td><td>-94.1%</td><td>-0.67</td><td>-97.1%</td><td>1315.0</td><td>3</td></tr><tr class=\"highlight-row\"><td>7</td><td>RBF_FULL</td><td>1932.4%</td><td>0.66</td><td>-68.1%</td><td>157.0</td><td>1</td></tr><tr><td>7</td><td>RBF_PCA</td><td>1362.5%</td><td>0.58</td><td>-63.6%</td><td>157.0</td><td>2</td></tr><tr><td>7</td><td>QSVM</td><td>383.5%</td><td>0.34</td><td>-68.0%</td><td>245.0</td><td>3</td></tr><tr class=\"highlight-row\"><td>30</td><td>RBF_FULL</td><td>8558.2%</td><td>0.77</td><td>-64.4%</td><td>77.0</td><td>1</td></tr><tr><td>30</td><td>RBF_PCA</td><td>1980.8%</td><td>0.52</td><td>-80.8%</td><td>77.0</td><td>2</td></tr><tr><td>30</td><td>QSVM</td><td>657.2%</td><td>0.34</td><td>-86.4%</td><td>89.0</td><td>3</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "decision": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Nested F1</th><th>Total Return</th><th>Sharpe</th><th>Final Role</th><th>Interpretation</th></tr></thead>\n        <tbody><tr><td>1</td><td>RBF_PCA</td><td>0.437</td><td>-64.0%</td><td>-0.24</td><td>Dimensionality-controlled classical comparator</td><td>Useful PCA-controlled comparator; instability appears in some long-horizon folds</td></tr><tr class=\"highlight-row\"><td>1</td><td>QSVM</td><td>0.475</td><td>-94.1%</td><td>-0.67</td><td>Quantum-kernel benchmark; competitive but not overall superior</td><td>Classification strength; trading weakness due to turnover/cost</td></tr><tr><td>1</td><td>RBF_FULL</td><td>0.427</td><td>-67.4%</td><td>-0.26</td><td>Strongest practical trading/risk classical baseline</td><td>Robust classical baseline</td></tr><tr class=\"highlight-row\"><td>7</td><td>RBF_FULL</td><td>0.429</td><td>1932.4%</td><td>0.66</td><td>Strongest practical trading/risk classical baseline</td><td>Strongest trading/risk profile</td></tr><tr><td>7</td><td>RBF_PCA</td><td>0.428</td><td>1362.5%</td><td>0.58</td><td>Dimensionality-controlled classical comparator</td><td>Useful PCA-controlled comparator; instability appears in some long-horizon folds</td></tr><tr><td>7</td><td>QSVM</td><td>0.456</td><td>383.5%</td><td>0.34</td><td>Quantum-kernel benchmark; competitive but not overall superior</td><td>Competitive classification; weaker trading/risk than RBF_FULL</td></tr><tr class=\"highlight-row\"><td>30</td><td>RBF_FULL</td><td>0.43</td><td>8558.2%</td><td>0.77</td><td>Strongest practical trading/risk classical baseline</td><td>Strongest trading/risk profile</td></tr><tr><td>30</td><td>QSVM</td><td>0.455</td><td>657.2%</td><td>0.34</td><td>Quantum-kernel benchmark; competitive but not overall superior</td><td>Competitive classification; weaker trading/risk than RBF_FULL</td></tr><tr><td>30</td><td>RBF_PCA</td><td>0.429</td><td>1980.8%</td><td>0.52</td><td>Dimensionality-controlled classical comparator</td><td>Useful PCA-controlled comparator; instability appears in some long-horizon folds</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "diagnostic": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Diagnostic</th><th>Result</th><th>Meaning</th><th>Presentation Level</th></tr></thead>\n        <tbody><tr><td>Kernel similarity</td><td>0.6808</td><td>QSVM and RBF_PCA kernels are meaningfully different, not identical.</td><td>main_ladder</td></tr><tr class=\"highlight-row\"><td>Target alignment</td><td>0.0022</td><td>No clear QSVM target-alignment advantage for binary direction labels.</td><td>main_ladder</td></tr><tr class=\"highlight-row\"><td>Effective rank</td><td>QSVM 147.8 vs RBF_PCA 35.9</td><td>QSVM has richer spectral complexity, but richness alone does not imply advantage.</td><td>main_ladder</td></tr><tr><td>Volatility-regime alignment</td><td>-0.0077</td><td>Exploratory probe does not show QSVM regime-alignment advantage over RBF_PCA.</td><td>evidence_mode</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "verdict": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Claim</th><th>Evidence Status</th><th>Safe Interpretation</th></tr></thead>\n        <tbody><tr><td>QSVM is overall superior to classical ML.</td><td><span class=\"badge-focus red\">Not supported</span></td><td>Evidence does not support overall superiority across horizons, stability, and trading/risk metrics.</td></tr><tr><td>QSVM has no scientific value.</td><td>Rejected</td><td>QSVM remains competitive in selected classification settings and is meaningful as a quantum-kernel benchmark.</td></tr><tr><td>The main contribution is a deployable trading strategy.</td><td><span class=\"badge-focus red\">Not supported</span></td><td>The study contributes a leakage-safe, multi-horizon, stability-aware, trading-aware evaluation framework, not an investment system.</td></tr><tr><td>Quantum expressivity equals task-relevant advantage.</td><td><span class=\"badge-focus gold\">Not established</span></td><td>Quantum expressivity is observable, but task-relevant quantum advantage is not established.</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "group1": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Mean F1</th><th>Std F1</th><th>Worst F1</th><th>Interpretation</th></tr></thead>\n        <tbody><tr><td>1-day</td><td>QSVM</td><td>0.4754</td><td>0.0616</td><td>0.3212</td><td><span class=\"badge-focus gold evidence-badge\">Classification-competitive</span><br><span class=\"badge-focus gold evidence-badge\">Highest Mean F1</span><br>Strongest 1-day classification-stability profile, but not a final superiority claim.</td></tr><tr><td>1-day</td><td>RBF_PCA</td><td>0.4375</td><td>0.0667</td><td>0.2705</td><td>Dimension-controlled classical comparator with lower mean F1 than QSVM.</td></tr><tr><td>1-day</td><td>RBF_FULL</td><td>0.4271</td><td>0.0795</td><td>0.2583</td><td>Full-feature classical reference with weaker 1-day classification evidence than QSVM.</td></tr><tr><td>7-day</td><td>QSVM</td><td>0.4556</td><td>0.0937</td><td>0.3076</td><td><span class=\"badge-focus gold evidence-badge\">Highest Mean F1</span><br>Highest mean and worst-fold F1 at the 7-day horizon.</td></tr><tr><td>7-day</td><td>RBF_FULL</td><td>0.4288</td><td>0.0933</td><td>0.2609</td><td>Similar dispersion to QSVM but lower mean and worst-fold F1.</td></tr><tr><td>7-day</td><td>RBF_PCA</td><td>0.4279</td><td>0.0886</td><td>0.2437</td><td>Lowest dispersion but weaker mean and worst-fold profile.</td></tr><tr><td>30-day</td><td>QSVM</td><td>0.4551</td><td>0.1382</td><td>0.1473</td><td><span class=\"badge-focus gold evidence-badge\">Highest Mean F1</span><br>Highest mean F1 and lowest dispersion, but not strongest worst-fold result.</td></tr><tr><td>30-day</td><td>RBF_FULL</td><td>0.4296</td><td>0.1545</td><td>0.1606</td><td>Strongest worst-fold result at the 30-day horizon.</td></tr><tr><td>30-day</td><td>RBF_PCA</td><td>0.4295</td><td>0.2066</td><td>0.0111</td><td>Weakest stability profile among the 30-day kernel comparisons.</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "group2": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Total Return</th><th>Sharpe</th><th>Max Drawdown</th><th>Turnover</th><th>Interpretation</th></tr></thead>\n        <tbody><tr><td>1-day</td><td>QSVM</td><td>-0.9412</td><td>-0.6691</td><td>-0.9714</td><td>1315</td><td><span class=\"badge-focus copper evidence-badge\">Cost-sensitive</span><br>High classification score but highly sensitive to turnover and transaction costs.</td></tr><tr><td>1-day</td><td>RBF_FULL</td><td>-0.6739</td><td>-0.2646</td><td>-0.9263</td><td>671</td><td>Less negative than QSVM but still weak under the tested trading/risk layer.</td></tr><tr><td>1-day</td><td>RBF_PCA</td><td>-0.6396</td><td>-0.2411</td><td>-0.9284</td><td>587</td><td>Best short-horizon trading/risk profile among the three tested kernel models.</td></tr><tr><td>7-day</td><td>QSVM</td><td>3.8348</td><td>0.3417</td><td>-0.6796</td><td>245</td><td>Positive trading/risk profile but weaker than the classical baselines.</td></tr><tr><td>7-day</td><td>RBF_FULL</td><td>19.3243</td><td>0.6557</td><td>-0.6808</td><td>157</td><td><span class=\"badge-focus gold evidence-badge\">Strongest 7D Sharpe</span><br>Strongest 7-day risk-adjusted profile under the tested protocol.</td></tr><tr><td>7-day</td><td>RBF_PCA</td><td>13.6248</td><td>0.5837</td><td>-0.6356</td><td>157</td><td>Competitive 7-day trading/risk profile but below RBF_FULL.</td></tr><tr><td>30-day</td><td>QSVM</td><td>6.5722</td><td>0.3415</td><td>-0.8645</td><td>89</td><td>Positive but weaker risk-adjusted profile than classical baselines.</td></tr><tr><td>30-day</td><td>RBF_FULL</td><td>85.5822</td><td>0.7675</td><td>-0.6439</td><td>77</td><td><span class=\"badge-focus gold evidence-badge\">Strongest 30D Sharpe</span><br>Strongest 30-day trading/risk evidence under the tested protocol.</td></tr><tr><td>30-day</td><td>RBF_PCA</td><td>19.8075</td><td>0.5155</td><td>-0.8081</td><td>77</td><td>Moderate 30-day trading/risk evidence.</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "group3": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Evidence Question</th><th>Key Evidence</th><th>Assessment</th><th>Safe Claim Boundary</th></tr></thead>\n        <tbody><tr><td>Is QSVM classification-competitive?</td><td>QSVM has the highest mean F1-score across the three tested horizons.</td><td><span class=\"badge-focus gold evidence-badge\">Classification-competitive</span><br>Supported with qualification</td><td>QSVM shows horizon-dependent competitiveness, not overall superiority.</td></tr><tr><td>Is QSVM statistically superior across all horizons?</td><td>Corrected statistical support appears only for QSVM vs RBF_FULL at the 1-day horizon.</td><td><span class=\"badge-focus gold evidence-badge\">Holm-limited</span><br>Not supported broadly</td><td>Statistical superiority across all horizons is not established.</td></tr><tr><td>Does classification strength translate directly into financial usefulness?</td><td>Trading/risk evidence differs from classification evidence, especially at the 1-day horizon.</td><td>Not supported</td><td>Classification and financial interpretation must be evaluated separately.</td></tr><tr><td>Does QSVM provide superior trading/risk performance?</td><td>RBF_FULL has stronger Sharpe ratios at the 7-day and 30-day horizons.</td><td>Not supported</td><td>QSVM trading superiority is not established.</td></tr><tr><td>Is the QSVM kernel structurally different from RBF_PCA?</td><td>Pearson 0.6808; Spearman 0.5054.</td><td><span class=\"badge-focus gold evidence-badge\">Structurally different</span><br>Supported descriptively</td><td>Kernel difference does not imply predictive superiority.</td></tr><tr><td>Is the QSVM kernel spectrally richer?</td><td>QSVM effective rank 147.79; RBF_PCA 35.90.</td><td><span class=\"badge-focus gold evidence-badge\">Richer spectrum</span><br>Supported descriptively</td><td>Higher effective rank does not prove task usefulness.</td></tr><tr><td>Is QSVM more target-aligned?</td><td>Alignment differences are 0.0025, 0.0044, and -0.0002.</td><td><span class=\"badge-focus copper evidence-badge\">No clear target advantage</span><br>No clear advantage</td><td>Richer representation does not automatically imply task-relevant advantage.</td></tr><tr><td>Is task-relevant quantum advantage established?</td><td>Integrated evidence does not show consistent QSVM superiority across classification, trading/risk, and diagnostic layers.</td><td><span class=\"badge-focus gold evidence-badge\">Expressivity ≠ advantage</span><br>Not supported</td><td>QSVM is a meaningful benchmark, not proof of quantum advantage.</td></tr></tbody>\n      </table>\n    </div>\n    "
  },
  "th": {
    "classification": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>ระยะเวลา (Days)</th><th>โมเดล</th><th>ความแม่นยำเฉลี่ย (Mean F1)</th><th>ความผันผวน (Std F1)</th><th>กรณีเลวร้ายสุด (Worst F1)</th><th>อันดับ</th></tr></thead>\n        <tbody><tr class=\"highlight-row\"><td>1</td><td>QSVM</td><td>0.475</td><td>0.062</td><td>0.321</td><td>1</td></tr><tr><td>1</td><td>RBF_PCA</td><td>0.437</td><td>0.067</td><td>0.270</td><td>2</td></tr><tr><td>1</td><td>RBF_FULL</td><td>0.427</td><td>0.079</td><td>0.258</td><td>3</td></tr><tr class=\"highlight-row\"><td>7</td><td>QSVM</td><td>0.456</td><td>0.094</td><td>0.308</td><td>1</td></tr><tr><td>7</td><td>RBF_FULL</td><td>0.429</td><td>0.093</td><td>0.261</td><td>2</td></tr><tr><td>7</td><td>RBF_PCA</td><td>0.428</td><td>0.089</td><td>0.244</td><td>3</td></tr><tr class=\"highlight-row\"><td>30</td><td>QSVM</td><td>0.455</td><td>0.138</td><td>0.147</td><td>1</td></tr><tr><td>30</td><td>RBF_FULL</td><td>0.430</td><td>0.155</td><td>0.161</td><td>2</td></tr><tr><td>30</td><td>RBF_PCA</td><td>0.429</td><td>0.207</td><td>0.011</td><td>3</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "trading": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>ระยะเวลา (Days)</th><th>โมเดล</th><th>ผลตอบแทนรวมสะสมจากการจำลอง</th><th>Sharpe Ratio</th><th>สัดส่วนขาดทุนสูงสุด (Max Drawdown)</th><th>รอบการซื้อขาย (Turnover)</th><th>อันดับ</th></tr></thead>\n        <tbody><tr><td>1</td><td>RBF_PCA</td><td>-64.0%</td><td>-0.24</td><td>-92.8%</td><td>587.0</td><td>1</td></tr><tr><td>1</td><td>RBF_FULL</td><td>-67.4%</td><td>-0.26</td><td>-92.6%</td><td>671.0</td><td>2</td></tr><tr class=\"highlight-row\"><td>1</td><td>QSVM</td><td>-94.1%</td><td>-0.67</td><td>-97.1%</td><td>1315.0</td><td>3</td></tr><tr class=\"highlight-row\"><td>7</td><td>RBF_FULL</td><td>1932.4%</td><td>0.66</td><td>-68.1%</td><td>157.0</td><td>1</td></tr><tr><td>7</td><td>RBF_PCA</td><td>1362.5%</td><td>0.58</td><td>-63.6%</td><td>157.0</td><td>2</td></tr><tr><td>7</td><td>QSVM</td><td>383.5%</td><td>0.34</td><td>-68.0%</td><td>245.0</td><td>3</td></tr><tr class=\"highlight-row\"><td>30</td><td>RBF_FULL</td><td>8558.2%</td><td>0.77</td><td>-64.4%</td><td>77.0</td><td>1</td></tr><tr><td>30</td><td>RBF_PCA</td><td>1980.8%</td><td>0.52</td><td>-80.8%</td><td>77.0</td><td>2</td></tr><tr><td>30</td><td>QSVM</td><td>657.2%</td><td>0.34</td><td>-86.4%</td><td>89.0</td><td>3</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "decision": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>ระยะเวลา (Days)</th><th>โมเดล</th><th>ความแม่นยำ (Nested F1)</th><th>ผลตอบแทนรวม</th><th>Sharpe Ratio</th><th>บทบาทที่เหมาะสมเชิงนโยบาย</th><th>ข้อสังเกตเพิ่มเติม</th></tr></thead>\n        <tbody><tr><td>1</td><td>RBF_PCA</td><td>0.437</td><td>-64.0%</td><td>-0.24</td><td>โมเดลพื้นฐานสำหรับเปรียบเทียบมิติข้อมูล</td><td>เกิดความไม่เสถียรในกรอบเวลาที่ยาวขึ้น</td></tr><tr class=\"highlight-row\"><td>1</td><td>QSVM</td><td>0.475</td><td>-94.1%</td><td>-0.67</td><td>โมเดลควอนตัมทางเลือก (คู่แข่งที่น่าสนใจแต่ไม่ชนะเด็ดขาด)</td><td>ทำนายแม่นยำ แต่มีข้อจำกัดสำคัญเรื่องต้นทุนการทำธุรกรรม</td></tr><tr><td>1</td><td>RBF_FULL</td><td>0.427</td><td>-67.4%</td><td>-0.26</td><td>โมเดลมาตรฐานเพื่อจัดการความเสี่ยง (มีความแข็งแรงที่สุดในมุมผลตอบแทนและความเสี่ยง)</td><td>รับมือกับปัจจัยเสี่ยงและต้นทุนแฝงได้ดี</td></tr><tr class=\"highlight-row\"><td>7</td><td>RBF_FULL</td><td>0.429</td><td>1932.4%</td><td>0.66</td><td>โมเดลมาตรฐานเพื่อจัดการความเสี่ยง (มีความแข็งแรงที่สุดในมุมผลตอบแทนและความเสี่ยง)</td><td>ให้โปรไฟล์ผลตอบแทนเทียบความเสี่ยงดีที่สุด</td></tr><tr><td>7</td><td>RBF_PCA</td><td>0.428</td><td>1362.5%</td><td>0.58</td><td>โมเดลพื้นฐานสำหรับเปรียบเทียบมิติข้อมูล</td><td>เกิดความไม่เสถียรในกรอบเวลาที่ยาวขึ้น</td></tr><tr><td>7</td><td>QSVM</td><td>0.456</td><td>383.5%</td><td>0.34</td><td>โมเดลควอนตัมทางเลือก (คู่แข่งที่น่าสนใจแต่ไม่ชนะเด็ดขาด)</td><td>พยากรณ์ดี แต่ยังให้ผลลัพธ์การลงทุนสู้ RBF_FULL ไม่ได้</td></tr><tr class=\"highlight-row\"><td>30</td><td>RBF_FULL</td><td>0.430</td><td>8558.2%</td><td>0.77</td><td>โมเดลมาตรฐานเพื่อจัดการความเสี่ยง (มีความแข็งแรงที่สุดในมุมผลตอบแทนและความเสี่ยง)</td><td>ให้โปรไฟล์ผลตอบแทนเทียบความเสี่ยงดีที่สุด</td></tr><tr><td>30</td><td>QSVM</td><td>0.455</td><td>657.2%</td><td>0.34</td><td>โมเดลควอนตัมทางเลือก (คู่แข่งที่น่าสนใจแต่ไม่ชนะเด็ดขาด)</td><td>พยากรณ์ดี แต่ยังให้ผลลัพธ์การลงทุนสู้ RBF_FULL ไม่ได้</td></tr><tr><td>30</td><td>RBF_PCA</td><td>0.429</td><td>1980.8%</td><td>0.52</td><td>โมเดลพื้นฐานสำหรับเปรียบเทียบมิติข้อมูล</td><td>เกิดความไม่เสถียรในกรอบเวลาที่ยาวขึ้น</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "diagnostic": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>ตัวชี้วัด (Diagnostic)</th><th>ผลประเมิน</th><th>ความหมายเชิงสถิติ</th><th>ระดับความสำคัญ</th></tr></thead>\n        <tbody><tr><td>ความแตกต่างของ Kernel</td><td>0.6808</td><td>QSVM และ RBF_PCA สกัดโครงสร้างข้อมูลที่แตกต่างกันอย่างชัดเจนในเชิงโครงสร้าง</td><td>ระดับสูง</td></tr><tr class=\"highlight-row\"><td>ความสอดคล้องกับเป้าหมาย</td><td>0.0022</td><td>ยังไม่พบข้อได้เปรียบที่ชัดเจนของ QSVM ในการนำมาวิเคราะห์ทิศทางไบนารี</td><td>ระดับสูง</td></tr><tr class=\"highlight-row\"><td>ความซับซ้อนเชิงมิติ (Effective Rank)</td><td>QSVM 147.8 vs RBF_PCA 35.9</td><td>QSVM มีความซับซ้อนเชิงสเปกตรัมสูงกว่า แต่ความซับซ้อนไม่ได้แปลว่าได้เปรียบ</td><td>ระดับสูง</td></tr><tr><td>ความทนทานต่อสภาวะตลาดผันผวน</td><td>-0.0077</td><td>ผลทดสอบเบื้องต้นยังไม่ชี้ชัดว่า QSVM ทนทานต่อ Regime ความผันผวนได้ดีกว่า</td><td>ระดับรอง</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "verdict": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>ข้อกล่าวอ้าง</th><th>สถานะหลักฐาน</th><th>การตีความที่ปลอดภัย</th></tr></thead>\n        <tbody><tr><td>QSVM เหนือกว่า Classical ML โดยรวม</td><td><span class=\"badge-focus red\">ไม่สนับสนุน</span></td><td>หลักฐานยังไม่สนับสนุน overall superiority across horizons, stability และ trading/risk metrics</td></tr><tr><td>QSVM ไม่มีคุณค่าทางวิทยาศาสตร์</td><td>ปฏิเสธข้อสรุปนี้</td><td>QSVM ยังแข่งขันได้ในบาง classification settings และมีความหมายในฐานะ quantum-kernel benchmark</td></tr><tr><td>ผลงานหลักคือระบบ trading ที่พร้อมใช้งาน</td><td><span class=\"badge-focus red\">ไม่สนับสนุน</span></td><td>งานนี้นำเสนอ leakage-safe, multi-horizon, stability-aware และ trading-aware evaluation framework ไม่ใช่ระบบลงทุน</td></tr><tr><td>Quantum expressivity เท่ากับ task-relevant advantage</td><td><span class=\"badge-focus gold\">ยังไม่อาจสรุปได้</span></td><td>พบ quantum expressivity แต่ยังไม่อาจสรุปได้ว่าเกิด task-relevant quantum advantage</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "group1": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Mean F1</th><th>Std F1</th><th>Worst F1</th><th>Interpretation</th></tr></thead>\n        <tbody><tr><td>1-day</td><td>QSVM</td><td>0.4754</td><td>0.0616</td><td>0.3212</td><td><span class=\"badge-focus gold evidence-badge\">แข่งขันได้ด้าน classification</span><br><span class=\"badge-focus gold evidence-badge\">Mean F1 สูงสุด</span><br>classification-stability profile แข็งแรงที่สุดใน horizon 1 วัน แต่ไม่ใช่ข้อสรุปว่าเหนือกว่าโดยรวม</td></tr><tr><td>1-day</td><td>RBF_PCA</td><td>0.4375</td><td>0.0667</td><td>0.2705</td><td>dimension-controlled classical comparator ที่มี Mean F1 ต่ำกว่า QSVM</td></tr><tr><td>1-day</td><td>RBF_FULL</td><td>0.4271</td><td>0.0795</td><td>0.2583</td><td>full-feature classical reference ที่มี classification evidence ใน horizon 1 วันอ่อนกว่า QSVM</td></tr><tr><td>7-day</td><td>QSVM</td><td>0.4556</td><td>0.0937</td><td>0.3076</td><td><span class=\"badge-focus gold evidence-badge\">Mean F1 สูงสุด</span><br>มี mean และ worst-fold F1 สูงที่สุดใน horizon 7 วัน</td></tr><tr><td>7-day</td><td>RBF_FULL</td><td>0.4288</td><td>0.0933</td><td>0.2609</td><td>dispersion ใกล้เคียง QSVM แต่ mean และ worst-fold F1 ต่ำกว่า</td></tr><tr><td>7-day</td><td>RBF_PCA</td><td>0.4279</td><td>0.0886</td><td>0.2437</td><td>dispersion ต่ำที่สุด แต่ mean และ worst-fold profile อ่อนกว่า</td></tr><tr><td>30-day</td><td>QSVM</td><td>0.4551</td><td>0.1382</td><td>0.1473</td><td><span class=\"badge-focus gold evidence-badge\">Mean F1 สูงสุด</span><br>มี Mean F1 สูงที่สุดและ dispersion ต่ำที่สุด แต่ไม่ใช่ strongest worst-fold result</td></tr><tr><td>30-day</td><td>RBF_FULL</td><td>0.4296</td><td>0.1545</td><td>0.1606</td><td>มี worst-fold result แข็งแรงที่สุดใน horizon 30 วัน</td></tr><tr><td>30-day</td><td>RBF_PCA</td><td>0.4295</td><td>0.2066</td><td>0.0111</td><td>stability profile อ่อนที่สุดในกลุ่ม kernel comparisons ของ horizon 30 วัน</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "group2": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Horizon</th><th>Model</th><th>Total Return</th><th>Sharpe</th><th>Max Drawdown</th><th>Turnover</th><th>Interpretation</th></tr></thead>\n        <tbody><tr><td>1-day</td><td>QSVM</td><td>-0.9412</td><td>-0.6691</td><td>-0.9714</td><td>1315</td><td><span class=\"badge-focus copper evidence-badge\">ไวต่อ transaction cost</span><br>classification score สูง แต่ไวต่อ turnover และ transaction costs มาก</td></tr><tr><td>1-day</td><td>RBF_FULL</td><td>-0.6739</td><td>-0.2646</td><td>-0.9263</td><td>671</td><td>ติดลบน้อยกว่า QSVM แต่ยังอ่อนภายใต้ trading/risk layer ที่ทดสอบ</td></tr><tr><td>1-day</td><td>RBF_PCA</td><td>-0.6396</td><td>-0.2411</td><td>-0.9284</td><td>587</td><td>trading/risk profile ระยะสั้นดีที่สุดในสาม kernel models ที่ทดสอบ</td></tr><tr><td>7-day</td><td>QSVM</td><td>3.8348</td><td>0.3417</td><td>-0.6796</td><td>245</td><td>trading/risk profile เป็นบวก แต่ยังอ่อนกว่า classical baselines</td></tr><tr><td>7-day</td><td>RBF_FULL</td><td>19.3243</td><td>0.6557</td><td>-0.6808</td><td>157</td><td><span class=\"badge-focus gold evidence-badge\">Sharpe เด่นสุดที่ 7 วัน</span><br>risk-adjusted profile แข็งแรงที่สุดใน horizon 7 วันภายใต้ protocol ที่ทดสอบ</td></tr><tr><td>7-day</td><td>RBF_PCA</td><td>13.6248</td><td>0.5837</td><td>-0.6356</td><td>157</td><td>trading/risk profile ใน horizon 7 วันแข่งขันได้ แต่ยังต่ำกว่า RBF_FULL</td></tr><tr><td>30-day</td><td>QSVM</td><td>6.5722</td><td>0.3415</td><td>-0.8645</td><td>89</td><td>เป็นบวก แต่ risk-adjusted profile ยังอ่อนกว่า classical baselines</td></tr><tr><td>30-day</td><td>RBF_FULL</td><td>85.5822</td><td>0.7675</td><td>-0.6439</td><td>77</td><td><span class=\"badge-focus gold evidence-badge\">Sharpe เด่นสุดที่ 30 วัน</span><br>trading/risk evidence แข็งแรงที่สุดใน horizon 30 วันภายใต้ protocol ที่ทดสอบ</td></tr><tr><td>30-day</td><td>RBF_PCA</td><td>19.8075</td><td>0.5155</td><td>-0.8081</td><td>77</td><td>trading/risk evidence ระดับปานกลางใน horizon 30 วัน</td></tr></tbody>\n      </table>\n    </div>\n    ",
    "group3": "\n    <div class=\"table-scroll\">\n      <table>\n        <thead><tr><th>Evidence Question</th><th>Key Evidence</th><th>Assessment</th><th>Safe Claim Boundary</th></tr></thead>\n        <tbody><tr><td>QSVM แข่งขันได้ในชั้น classification หรือไม่</td><td>QSVM มี mean F1-score สูงที่สุด across three tested horizons</td><td><span class=\"badge-focus gold evidence-badge\">แข่งขันได้ด้าน classification</span><br>สนับสนุนแบบมีเงื่อนไข</td><td>QSVM แสดง horizon-dependent competitiveness ไม่ใช่ overall superiority</td></tr><tr><td>QSVM เหนือกว่าเชิงสถิติ across all horizons หรือไม่</td><td>corrected statistical support พบเฉพาะ QSVM vs RBF_FULL ที่ horizon 1 วัน</td><td><span class=\"badge-focus gold evidence-badge\">จำกัดด้วย Holm correction</span><br>ไม่สนับสนุนในภาพกว้าง</td><td>ยังไม่อาจสรุป statistical superiority across all horizons</td></tr><tr><td>classification strength แปลเป็น financial usefulness โดยตรงหรือไม่</td><td>trading/risk evidence แตกต่างจาก classification evidence โดยเฉพาะ horizon 1 วัน</td><td>ไม่สนับสนุน</td><td>classification และ financial interpretation ต้องประเมินแยกกัน</td></tr><tr><td>QSVM ให้ trading/risk performance ที่เหนือกว่าหรือไม่</td><td>RBF_FULL มี Sharpe ratios แข็งแรงกว่าใน horizon 7 วันและ 30 วัน</td><td>ไม่สนับสนุน</td><td>ยังไม่อาจสรุปว่า QSVM มี trading superiority</td></tr><tr><td>QSVM kernel แตกต่างจาก RBF_PCA เชิงโครงสร้างหรือไม่</td><td>Pearson 0.6808; Spearman 0.5054</td><td><span class=\"badge-focus gold evidence-badge\">โครงสร้างแตกต่าง</span><br>สนับสนุนเชิงพรรณนา</td><td>kernel difference ไม่ได้แปลว่า predictive superiority</td></tr><tr><td>QSVM kernel มี spectral richness สูงกว่าหรือไม่</td><td>QSVM effective rank 147.79; RBF_PCA 35.90</td><td><span class=\"badge-focus gold evidence-badge\">spectrum richer</span><br>สนับสนุนเชิงพรรณนา</td><td>effective rank ที่สูงกว่าไม่ได้พิสูจน์ task usefulness</td></tr><tr><td>QSVM target-aligned มากกว่าหรือไม่</td><td>alignment differences คือ 0.0025, 0.0044 และ -0.0002</td><td><span class=\"badge-focus copper evidence-badge\">ยังไม่เห็น target advantage ชัดเจน</span><br>ยังไม่เห็นข้อได้เปรียบชัดเจน</td><td>richer representation ไม่ได้แปลว่า task-relevant advantage โดยอัตโนมัติ</td></tr><tr><td>เกิด task-relevant quantum advantage แล้วหรือไม่</td><td>integrated evidence ยังไม่แสดง consistent QSVM superiority across classification, trading/risk และ diagnostic layers</td><td><span class=\"badge-focus gold evidence-badge\">expressivity ≠ advantage</span><br>ไม่สนับสนุน</td><td>QSVM เป็น meaningful benchmark ไม่ใช่หลักฐานของ quantum advantage</td></tr></tbody>\n      </table>\n    </div>\n    "
  }
};

const classificationData = [{"horizon": "1", "model": "QSVM", "mean_f1": 0.4754082368, "std_f1": 0.0616132147, "worst_f1": 0.3211864407}, {"horizon": "1", "model": "RBF_PCA", "mean_f1": 0.4374709226, "std_f1": 0.0666770917, "worst_f1": 0.2704918033}, {"horizon": "1", "model": "RBF_FULL", "mean_f1": 0.4271445676, "std_f1": 0.0794675529, "worst_f1": 0.2583333333}, {"horizon": "7", "model": "QSVM", "mean_f1": 0.4555661314, "std_f1": 0.0936909942, "worst_f1": 0.3075647404}, {"horizon": "7", "model": "RBF_FULL", "mean_f1": 0.4287765688, "std_f1": 0.0933453472, "worst_f1": 0.2608577263}, {"horizon": "7", "model": "RBF_PCA", "mean_f1": 0.4279076636, "std_f1": 0.0886140814, "worst_f1": 0.2436951754}, {"horizon": "30", "model": "QSVM", "mean_f1": 0.4551214141, "std_f1": 0.1382256704, "worst_f1": 0.1472556894}, {"horizon": "30", "model": "RBF_FULL", "mean_f1": 0.4296151532, "std_f1": 0.1545369718, "worst_f1": 0.1605640479}, {"horizon": "30", "model": "RBF_PCA", "mean_f1": 0.4294557192, "std_f1": 0.2065535524, "worst_f1": 0.0111111111}];
const tradingData = [{"horizon": "1", "model": "RBF_PCA", "sharpe": -0.2410999924, "total_return": -0.6395849733, "max_drawdown": -0.9283611797, "total_turnover": 587.0}, {"horizon": "1", "model": "RBF_FULL", "sharpe": -0.2645604792, "total_return": -0.6738587047, "max_drawdown": -0.9263054564, "total_turnover": 671.0}, {"horizon": "1", "model": "QSVM", "sharpe": -0.6691284914, "total_return": -0.9411552737, "max_drawdown": -0.9713909622, "total_turnover": 1315.0}, {"horizon": "7", "model": "RBF_FULL", "sharpe": 0.6556764965, "total_return": 19.3243467875, "max_drawdown": -0.6808406592, "total_turnover": 157.0}, {"horizon": "7", "model": "RBF_PCA", "sharpe": 0.5836922409, "total_return": 13.6247711628, "max_drawdown": -0.6355973476, "total_turnover": 157.0}, {"horizon": "7", "model": "QSVM", "sharpe": 0.3417169401, "total_return": 3.8347594075, "max_drawdown": -0.6796473773, "total_turnover": 245.0}, {"horizon": "30", "model": "RBF_FULL", "sharpe": 0.7675353511, "total_return": 85.5821555478, "max_drawdown": -0.6439249329, "total_turnover": 77.0}, {"horizon": "30", "model": "RBF_PCA", "sharpe": 0.5155196246, "total_return": 19.8075256831, "max_drawdown": -0.8081431265, "total_turnover": 77.0}, {"horizon": "30", "model": "QSVM", "sharpe": 0.3415175292, "total_return": 6.5721672121, "max_drawdown": -0.864497361, "total_turnover": 89.0}];
const diagnosticData = [{"model": "QSVM", "effective_rank": 147.8}, {"model": "RBF_PCA", "effective_rank": 35.9}];
const models = ["QSVM", "RBF_FULL", "RBF_PCA"];

const plotConfig = { responsive: true, displayModeBar: false };
let currentLang = 'en';

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
      gridcolor: '#2A3442',
      zerolinecolor: '#2A3442',
      automargin: true,
      tickfont: { color: '#B3BCC9' }
    },
    yaxis: {
      gridcolor: '#2A3442',
      zerolinecolor: '#2A3442',
      automargin: true,
      tickfont: { color: '#B3BCC9' }
    },
    hoverlabel: {
      bgcolor: '#161E28',
      bordercolor: chartColors.gold,
      font: { family: 'Inter, Prompt, Arial, sans-serif', color: '#F8F9FA' }
    },
    colorway: baseColors
  };
}

function tracesByModel(data, metric, decimals) {
  return models.map(model => {
    const rows = data
      .filter(d => d.model === model)
      .sort((a, b) => Number(a.horizon) - Number(b.horizon));

    return {
      type: 'bar',
      name: model,
      x: rows.map(d => 'h=' + d.horizon),
      y: rows.map(d => d[metric]),
      text: rows.map(d => Number(d[metric]).toFixed(decimals)),
      textposition: 'auto',
      hovertemplate: '%{x}<br>' + model + '<br>%{y:.3f}<extra></extra>'
    };
  });
}

function renderCharts(lang) {
  const t = i18n[lang];
  const layout = baseLayout(lang);

  Plotly.react(
    'chart_classification',
    tracesByModel(classificationData, 'mean_f1', 3),
    {
      ...layout,
      barmode: 'group',
      yaxis: {
        ...layout.yaxis,
        title: { text: t.axis_f1, font: { color: '#B3BCC9' } },
        range: [0, 0.60]
      }
    },
    plotConfig
  );

  Plotly.react(
    'chart_trading',
    tracesByModel(tradingData, 'sharpe', 2),
    {
      ...layout,
      barmode: 'group',
      yaxis: {
        ...layout.yaxis,
        title: { text: t.axis_sharpe, font: { color: '#B3BCC9' } }
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
    [{
      type: 'bar',
      x: diagnosticData.map(d => d.model),
      y: diagnosticData.map(d => d.effective_rank),
      text: diagnosticData.map(d => Number(d.effective_rank).toFixed(1)),
      textposition: 'auto',
      marker: { color: [chartColors.gold, chartColors.copper] }, 
      hovertemplate: '%{x}<br>Effective rank: %{y:.1f}<extra></extra>'
    }],
    {
      ...layout,
      autosize: true,
      showlegend: false,
      margin: { l: 62, r: 18, t: 54, b: 54 },
      yaxis: {
        ...layout.yaxis,
        title: { text: t.axis_rank, font: { color: '#B3BCC9' } },
        rangemode: 'tozero'
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

  document.getElementById('table_group1_container').innerHTML = tableHTML[lang].group1;
  document.getElementById('table_group2_container').innerHTML = tableHTML[lang].group2;
  document.getElementById('table_group3_container').innerHTML = tableHTML[lang].group3;

  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-th').classList.toggle('active', lang === 'th');

  updateInteractiveDetails();
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
