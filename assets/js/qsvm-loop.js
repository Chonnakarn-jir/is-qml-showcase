/*
 * QSVM Path C. Approved Figure A geometry, one deterministic 16-second timeline.
 * No libraries, network requests, server, measurements, or numerical predictions.
 * Edit labels in LAYERS. Edit pacing in TIMING. All exports use frameSVG().
 */
(function(root){
  'use strict';
  const CONFIG=Object.freeze({duration:16,width:1280,height:720});
  const TIMING=Object.freeze({
    mapping:[1,1.65],states:[2.45,3.1],
    comparison:[3.85,4.4],stateTravel:[3.9,5.3],
    fidelity:[5.25,5.85],equation:[5.9,6.65],interpretation:[6.35,7.0],
    entryRoute:[7.85,8.35],matrixFrame:[8.25,8.9],valueTravel:[8.1,9.45],
    highlight:[9.3,9.6],targetEntry:[9.4,9.7],repeat:[9.35,10.05],
    svmArrow:[10.6,11.05],svm:[10.9,11.5],outputArrow:[11.6,12.0],output:[11.9,12.5],
    reset:[14.6,15.6]
  });
  const LAYERS={
  "opening": "<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"38\" font-weight=\"700\" text-anchor=\"start\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"56\" y=\"57\">Quantum Fidelity Kernel</tspan></text>\n<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"21\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"135\" y=\"167.5\">Observation A</tspan></text>\n<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"44\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"131\" y=\"228\">xᵢ</tspan></text>\n<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"21\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"1145\" y=\"167.5\">Observation B</tspan></text>\n<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"44\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"1149\" y=\"228\">xⱼ</tspan></text>",
  "mapping": "<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"19\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#BFC0C7\"><tspan x=\"640\" y=\"106\">Same Quantum Feature Map applied to both observations</tspan></text>\n<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"15\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#BFC0C7\"><tspan x=\"640\" y=\"132\">8-D PCA representation → 8-qubit state</tspan></text>\n<path d=\"M0.000,11.000 L153.000,0.000 L153.000,81.000 L0.000,92.000 Z\" transform=\"translate(208 181)\" fill=\"#15130F\" stroke=\"#E5C37A\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/>\n<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"20\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"284.5\" y=\"214.7\">Quantum</tspan><tspan x=\"284.5\" y=\"238.3\">Feature Map</tspan></text>\n<path d=\"M0.000,11.000 L153.000,0.000 L153.000,81.000 L0.000,92.000 Z\" transform=\"translate(919 181)\" fill=\"#15130F\" stroke=\"#E5C37A\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/>\n<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"20\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"995.5\" y=\"214.7\">Quantum</tspan><tspan x=\"995.5\" y=\"238.3\">Feature Map</tspan></text><path d=\"M178,228 L201,228\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.7\" marker-end=\"url(#arrowhead)\"/><path d=\"M1097,228 L1079,228\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.7\" marker-end=\"url(#arrowhead)\"/>",
  "states": "<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"20\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"475.5\" y=\"157\">Quantum state A</tspan></text>\n<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"28\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"475\" y=\"287.5\">|ψ(xᵢ)⟩</tspan></text>\n<path d=\"M124.110,37.500 L124.273,39.580 L123.988,41.656 L123.179,43.688 L121.797,45.627 L119.829,47.422 L117.310,49.025 L114.317,50.398 L110.966,51.524 L107.402,52.406 L103.784,53.073 L100.264,53.581 L96.976,54.002 L94.015,54.424 L91.430,54.938 L89.216,55.628 L87.319,56.558 L85.641,57.768 L84.052,59.264 L82.412,61.017 L80.583,62.962 L78.449,65.007 L75.932,67.038 L72.999,68.931 L69.667,70.567 L66.000,71.838 L62.100,72.665 L58.095,72.998 L54.122,72.825 L50.310,72.168 L46.767,71.081 L43.568,69.642 L40.749,67.943 L38.305,66.080 L36.196,64.143 L34.358,62.207 L32.713,60.327 L31.183,58.534 L29.703,56.837 L28.231,55.225 L26.756,53.675 L25.294,52.155 L23.886,50.634 L22.592,49.088 L21.477,47.501 L20.597,45.869 L19.992,44.202 L19.674,42.513 L19.626,40.824 L19.796,39.149 L20.110,37.500 L20.478,35.875 L20.808,34.261 L21.021,32.632 L21.064,30.955 L20.919,29.190 L20.613,27.306 L20.215,25.277 L19.830,23.100 L19.592,20.792 L19.646,18.394 L20.131,15.973 L21.163,13.614 L22.822,11.415 L25.137,9.478 L28.086,7.896 L31.593,6.742 L35.538,6.066 L39.771,5.879 L44.128,6.160 L48.445,6.850 L52.586,7.861 L56.445,9.083 L59.965,10.397 L63.137,11.683 L66.000,12.838 L68.630,13.781 L71.130,14.463 L73.609,14.870 L76.174,15.021 L78.905,14.968 L81.853,14.785 L85.030,14.558 L88.407,14.378 L91.922,14.327 L95.488,14.475 L99.005,14.866 L102.376,15.525 L105.515,16.449 L108.365,17.617 L110.894,18.996 L113.104,20.541 L115.022,22.211 L116.694,23.967 L118.173,25.781 L119.506,27.637 L120.724,29.529 L121.832,31.458 L122.806,33.429 L123.591,35.445 Z\" transform=\"translate(409 185)\" fill=\"none\" stroke=\"#E5C37A\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/>\n<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"20\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"805.5\" y=\"157\">Quantum state B</tspan></text>\n<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"28\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"805\" y=\"287.5\">|ψ(xⱼ)⟩</tspan></text>\n<path d=\"M124.798,37.500 L125.257,39.615 L125.406,41.757 L125.148,43.901 L124.403,46.007 L123.117,48.028 L121.270,49.914 L118.887,51.619 L116.032,53.104 L112.804,54.351 L109.328,55.359 L105.739,56.150 L102.167,56.767 L98.724,57.269 L95.492,57.724 L92.511,58.201 L89.785,58.762 L87.275,59.454 L84.913,60.301 L82.612,61.303 L80.280,62.433 L77.831,63.641 L75.199,64.858 L72.348,66.007 L69.272,67.006 L66.000,67.784 L62.586,68.283 L59.104,68.467 L55.636,68.322 L52.259,67.861 L49.039,67.114 L46.019,66.129 L43.220,64.963 L40.636,63.674 L38.244,62.312 L36.006,60.920 L33.883,59.524 L31.843,58.135 L29.864,56.751 L27.948,55.358 L26.115,53.939 L24.404,52.475 L22.865,50.953 L21.550,49.366 L20.505,47.719 L19.755,46.024 L19.301,44.302 L19.113,42.574 L19.130,40.859 L19.267,39.168 L19.422,37.500 L19.493,35.840 L19.391,34.160 L19.052,32.419 L18.457,30.575 L17.632,28.584 L16.653,26.416 L15.644,24.057 L14.763,21.520 L14.190,18.847 L14.101,16.109 L14.656,13.403 L15.972,10.849 L18.113,8.570 L21.075,6.693 L24.790,5.322 L29.127,4.538 L33.904,4.379 L38.911,4.842 L43.928,5.873 L48.749,7.379 L53.204,9.227 L57.178,11.263 L60.616,13.321 L63.532,15.243 L66.000,16.892 L68.144,18.163 L70.121,18.995 L72.096,19.372 L74.224,19.329 L76.633,18.935 L79.402,18.297 L82.559,17.537 L86.076,16.783 L89.875,16.157 L93.841,15.761 L97.835,15.669 L101.716,15.923 L105.354,16.535 L108.648,17.485 L111.535,18.732 L113.993,20.221 L116.043,21.892 L117.737,23.689 L119.145,25.563 L120.348,27.482 L121.415,29.428 L122.393,31.397 L123.301,33.393 L124.119,35.426 Z\" transform=\"translate(739 185)\" fill=\"none\" stroke=\"#D7D2C4\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/><path d=\"M368,228 L391,228\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.7\" marker-end=\"url(#arrowhead)\"/><path d=\"M912,228 L889,228\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.7\" marker-end=\"url(#arrowhead)\"/>",
  "comparison": "<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"17\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"640\" y=\"166.5\">Compare states</tspan></text>\n<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"14\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#BFC0C7\"><tspan x=\"640\" y=\"316.5\">Conceptual similarity view</tspan></text><path d=\"M551,224 L569,224\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"2\" marker-end=\"url(#arrowhead)\"/><path d=\"M729,224 L711,224\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"2\" marker-end=\"url(#arrowhead)\"/>",
  "compareA": "<path d=\"M124.110,37.500 L124.273,39.580 L123.988,41.656 L123.179,43.688 L121.797,45.627 L119.829,47.422 L117.310,49.025 L114.317,50.398 L110.966,51.524 L107.402,52.406 L103.784,53.073 L100.264,53.581 L96.976,54.002 L94.015,54.424 L91.430,54.938 L89.216,55.628 L87.319,56.558 L85.641,57.768 L84.052,59.264 L82.412,61.017 L80.583,62.962 L78.449,65.007 L75.932,67.038 L72.999,68.931 L69.667,70.567 L66.000,71.838 L62.100,72.665 L58.095,72.998 L54.122,72.825 L50.310,72.168 L46.767,71.081 L43.568,69.642 L40.749,67.943 L38.305,66.080 L36.196,64.143 L34.358,62.207 L32.713,60.327 L31.183,58.534 L29.703,56.837 L28.231,55.225 L26.756,53.675 L25.294,52.155 L23.886,50.634 L22.592,49.088 L21.477,47.501 L20.597,45.869 L19.992,44.202 L19.674,42.513 L19.626,40.824 L19.796,39.149 L20.110,37.500 L20.478,35.875 L20.808,34.261 L21.021,32.632 L21.064,30.955 L20.919,29.190 L20.613,27.306 L20.215,25.277 L19.830,23.100 L19.592,20.792 L19.646,18.394 L20.131,15.973 L21.163,13.614 L22.822,11.415 L25.137,9.478 L28.086,7.896 L31.593,6.742 L35.538,6.066 L39.771,5.879 L44.128,6.160 L48.445,6.850 L52.586,7.861 L56.445,9.083 L59.965,10.397 L63.137,11.683 L66.000,12.838 L68.630,13.781 L71.130,14.463 L73.609,14.870 L76.174,15.021 L78.905,14.968 L81.853,14.785 L85.030,14.558 L88.407,14.378 L91.922,14.327 L95.488,14.475 L99.005,14.866 L102.376,15.525 L105.515,16.449 L108.365,17.617 L110.894,18.996 L113.104,20.541 L115.022,22.211 L116.694,23.967 L118.173,25.781 L119.506,27.637 L120.724,29.529 L121.832,31.458 L122.806,33.429 L123.591,35.445 Z\" transform=\"translate(574 185)\" fill=\"none\" stroke=\"#E5C37A\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/>",
  "compareB": "<path d=\"M124.798,37.500 L125.257,39.615 L125.406,41.757 L125.148,43.901 L124.403,46.007 L123.117,48.028 L121.270,49.914 L118.887,51.619 L116.032,53.104 L112.804,54.351 L109.328,55.359 L105.739,56.150 L102.167,56.767 L98.724,57.269 L95.492,57.724 L92.511,58.201 L89.785,58.762 L87.275,59.454 L84.913,60.301 L82.612,61.303 L80.280,62.433 L77.831,63.641 L75.199,64.858 L72.348,66.007 L69.272,67.006 L66.000,67.784 L62.586,68.283 L59.104,68.467 L55.636,68.322 L52.259,67.861 L49.039,67.114 L46.019,66.129 L43.220,64.963 L40.636,63.674 L38.244,62.312 L36.006,60.920 L33.883,59.524 L31.843,58.135 L29.864,56.751 L27.948,55.358 L26.115,53.939 L24.404,52.475 L22.865,50.953 L21.550,49.366 L20.505,47.719 L19.755,46.024 L19.301,44.302 L19.113,42.574 L19.130,40.859 L19.267,39.168 L19.422,37.500 L19.493,35.840 L19.391,34.160 L19.052,32.419 L18.457,30.575 L17.632,28.584 L16.653,26.416 L15.644,24.057 L14.763,21.520 L14.190,18.847 L14.101,16.109 L14.656,13.403 L15.972,10.849 L18.113,8.570 L21.075,6.693 L24.790,5.322 L29.127,4.538 L33.904,4.379 L38.911,4.842 L43.928,5.873 L48.749,7.379 L53.204,9.227 L57.178,11.263 L60.616,13.321 L63.532,15.243 L66.000,16.892 L68.144,18.163 L70.121,18.995 L72.096,19.372 L74.224,19.329 L76.633,18.935 L79.402,18.297 L82.559,17.537 L86.076,16.783 L89.875,16.157 L93.841,15.761 L97.835,15.669 L101.716,15.923 L105.354,16.535 L108.648,17.485 L111.535,18.732 L113.993,20.221 L116.043,21.892 L117.737,23.689 L119.145,25.563 L120.348,27.482 L121.415,29.428 L122.393,31.397 L123.301,33.393 L124.119,35.426 Z\" transform=\"translate(574 185)\" fill=\"none\" stroke=\"#D7D2C4\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/>",
  "fidelity": "<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"32\" font-weight=\"700\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"640\" y=\"355.5\">Fidelity / State Overlap</tspan></text>",
  "equation": "<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"43\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"640\" y=\"414\">Kᵢⱼ = |⟨ψ(xᵢ)|ψ(xⱼ)⟩|²</tspan></text>",
  "interpretation": "<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"22\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#BFC0C7\"><tspan x=\"640\" y=\"466.5\">Higher overlap = higher similarity</tspan></text>",
  "entryRoute": "<line x1=\"640\" y1=\"508\" x2=\"718\" y2=\"508.01\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.7\"/>\n<line x1=\"640\" y1=\"487\" x2=\"640.01\" y2=\"508\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.7\"/>\n<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"18\" font-weight=\"400\" text-anchor=\"start\" dominant-baseline=\"central\" fill=\"#BFC0C7\"><tspan x=\"737\" y=\"498\">one entry</tspan></text><path d=\"M718,508 L718,543\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.7\" marker-end=\"url(#arrowhead)\"/>",
  "matrixFrame": "<line x1=\"537\" y1=\"547\" x2=\"537.01\" y2=\"656\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.9\"/>\n<line x1=\"537\" y1=\"547\" x2=\"548\" y2=\"547.01\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.9\"/>\n<line x1=\"537\" y1=\"656\" x2=\"548\" y2=\"656.01\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.9\"/>\n<line x1=\"764\" y1=\"547\" x2=\"764.01\" y2=\"656\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.9\"/>\n<line x1=\"753\" y1=\"547\" x2=\"764\" y2=\"547.01\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.9\"/>\n<line x1=\"753\" y1=\"656\" x2=\"764\" y2=\"656.01\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.9\"/>\n<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"31\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"496.5\" y=\"599\">K =</tspan></text>\n<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"654\" y=\"681\">Quantum Kernel Matrix</tspan></text>",
  "highlight": "<rect x=\"681\" y=\"549\" width=\"75\" height=\"35\" fill=\"#2A2419\" stroke=\"#F2D288\" stroke-width=\"1.4\"/>",
  "cell00": "<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"28\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"572\" y=\"566\">1</tspan></text>",
  "cell01": "<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"28\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"645\" y=\"566\">⋯</tspan></text>",
  "cell02": "<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"25\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"718\" y=\"566\">Kᵢⱼ</tspan></text>",
  "cell10": "<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"28\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"572\" y=\"602\">⋮</tspan></text>",
  "cell11": "<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"28\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"645\" y=\"602\">⋱</tspan></text>",
  "cell12": "<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"28\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"718\" y=\"602\">⋮</tspan></text>",
  "cell20": "<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"25\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"572\" y=\"638\">Kⱼᵢ</tspan></text>",
  "cell21": "<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"28\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"645\" y=\"638\">⋯</tspan></text>",
  "cell22": "<text font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"28\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"718\" y=\"638\">1</tspan></text>",
  "repeat": "<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"21\" font-weight=\"400\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#BFC0C7\"><tspan x=\"309.5\" y=\"580.61\">Repeat for all</tspan><tspan x=\"309.5\" y=\"605.39\">observation pairs</tspan></text>",
  "svmArrow": "<path d=\"M779,602 L851,602\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.8\" marker-end=\"url(#arrowhead)\"/>",
  "svm": "<rect x=\"863\" y=\"574\" width=\"192\" height=\"56\" fill=\"#121214\" stroke=\"#E5C37A\" stroke-width=\"1.6\"/>\n<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"959\" y=\"602\">Classical SVM</tspan></text>",
  "outputArrow": "<path d=\"M1063,602 L1086,602\" fill=\"none\" stroke=\"#F5F5F7\" stroke-width=\"1.7\" marker-end=\"url(#arrowhead)\"/>",
  "output": "<text font-family=\"Inter, Prompt, sans-serif\" font-size=\"20\" font-weight=\"700\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F5F5F7\"><tspan x=\"1168\" y=\"602\">Up / Non-Up</tspan></text>",
  "scalar": "<rect x=\"-37.5\" y=\"-17.5\" width=\"75\" height=\"35\" rx=\"8\" fill=\"#1B1811\" stroke=\"#F2D288\" stroke-width=\"1.1\"/><text x=\"0\" y=\"0\" font-family=\"DejaVu Serif, Cambria Math, serif\" font-size=\"25\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F2D288\">Kᵢⱼ</text>"
};
  const clamp=n=>Math.max(0,Math.min(1,n));
  const ease=n=>{n=clamp(n);return n*n*(3-2*n);};
  const ramp=(t,range)=>ease((t-range[0])/(range[1]-range[0]));
  const fixed=n=>Number(n.toFixed(4));
  function pointAlong(progress){
    // Same right-angle leader as A: fidelity -> one highlighted matrix entry.
    const points=[[640,501],[640,508],[718,508],[718,566]];
    const lengths=[7,78,58];let distance=clamp(progress)*143;
    for(let i=0;i<lengths.length;i++){
      if(distance<=lengths[i]||i===lengths.length-1){
        const f=Math.min(1,distance/lengths[i]);
        return [points[i][0]+f*(points[i+1][0]-points[i][0]),points[i][1]+f*(points[i+1][1]-points[i][1])];
      }
      distance-=lengths[i];
    }
  }
  function snapshot(seconds){
    const t=((seconds%CONFIG.duration)+CONFIG.duration)%CONFIG.duration;
    const reset=1-ramp(t,TIMING.reset);
    const frame={};
    for(const name of Object.keys(LAYERS))frame[name]={opacity:0,transform:''};
    frame.opening.opacity=1;
    for(const name of ['mapping','states','comparison','fidelity','equation','interpretation','entryRoute','matrixFrame','highlight','repeat','svmArrow','svm','outputArrow','output'])
      frame[name].opacity=fixed(ramp(t,TIMING[name])*reset);
    const travel=ramp(t,TIMING.stateTravel),stateFade=ramp(t,[3.9,4.2])*reset;
    frame.compareA={opacity:fixed(stateFade),transform:`translate(${fixed(-165*(1-travel))} 0)`};
    frame.compareB={opacity:fixed(stateFade),transform:`translate(${fixed(165*(1-travel))} 0)`};
    frame.cell02.opacity=fixed(ramp(t,TIMING.targetEntry)*reset);
    const remaining=['cell00','cell22','cell20','cell01','cell10','cell11','cell12','cell21'];
    remaining.forEach((name,i)=>{frame[name].opacity=fixed(ramp(t,[9.55+i*.105,9.95+i*.105])*reset);});
    const scalarOpacity=ramp(t,[8.1,8.25])*(1-ramp(t,[9.4,9.65]))*reset;
    const [x,y]=pointAlong(ramp(t,TIMING.valueTravel));
    frame.scalar={opacity:fixed(scalarOpacity),transform:`translate(${fixed(x)} ${fixed(y)})`};
    return frame;
  }
  const defs='<defs><marker id="arrowhead" viewBox="0 -3 7 6" refX="6" refY="0" markerWidth="7" markerHeight="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,-3 L6,0 L0,3 Z" fill="#E5C37A"/></marker></defs>';
  function frameSVG(seconds){
    const state=snapshot(seconds);
    const groups=Object.entries(LAYERS).map(([name,svg])=>`<g id="layer-${name}" opacity="${state[name].opacity}" transform="${state[name].transform}">${svg}</g>`).join('\n');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720" role="img" aria-labelledby="qsvm-title qsvm-desc"><title id="qsvm-title">Quantum Fidelity Kernel</title><desc id="qsvm-desc">Two observations pass separately through the same quantum feature map. Their abstract state representations are compared by fidelity to form one kernel entry. Repeated pairs form a matrix for a classical SVM with Up or Non-Up output. State outlines are conceptual, not physical geometry. This study uses exact statevector simulation.</desc>${defs}<rect width="1280" height="720" fill="transparent"/>${groups}</svg>`;
  }
  const api={CONFIG,TIMING,snapshot,frameSVG};
  if(typeof module==='object'&&module.exports)module.exports=api;
  if(typeof document==='undefined')return;

  function mount(){
    const stage=document.getElementById('qsvm-loop-stage');if(!stage)return;
    if(!stage.querySelector('svg'))stage.innerHTML=frameSVG(0);
    const nodes={};
    for(const name of Object.keys(LAYERS)){
      nodes[name]=stage.querySelector('#layer-'+name);
      if(!nodes[name])throw new Error('Missing animation layer '+name);
    }
    let request=0,playing=false,origin=0,position=0;
    function renderAt(seconds){
      position=seconds;const state=snapshot(seconds);
      for(const [name,value] of Object.entries(state)){
        nodes[name].setAttribute('opacity',value.opacity);
        nodes[name].setAttribute('transform',value.transform);
      }
    }
    function tick(now){
      if(!playing)return;
      renderAt((now-origin)/1000);
      request=root.requestAnimationFrame(tick);
    }
    function play(){
      if(playing)return;
      playing=true;origin=root.performance.now()-position*1000;
      request=root.requestAnimationFrame(tick);
    }
    function pause(){playing=false;root.cancelAnimationFrame(request);}
    api.renderAt=seconds=>{pause();renderAt(seconds);};api.play=play;api.pause=pause;
    root.QSVMLoop=api;
    const ready=document.fonts?.ready??Promise.resolve();
    ready.then(()=>{
      renderAt(0);
      const reduced=root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(reduced){ renderAt(12.7); return; }
      if('IntersectionObserver' in root){
        const observer=new IntersectionObserver(entries=>{
          const visible=entries.some(entry=>entry.isIntersecting && entry.intersectionRatio>0.08);
          if(visible) play(); else pause();
        },{threshold:[0,0.08,0.25]});
        observer.observe(stage);
        document.addEventListener('visibilitychange',()=>{
          if(document.hidden){ pause(); return; }
          const rect=stage.getBoundingClientRect();
          if(rect.bottom>0 && rect.top<root.innerHeight) play();
        });
      } else play();
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});
  else mount();
})(typeof window!=='undefined'?window:globalThis);
