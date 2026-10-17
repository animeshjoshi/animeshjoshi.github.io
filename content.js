/* ==========================================================================
   content.js — EDIT THIS FILE to fill in your portfolio.
   Every page reads from this one object, so you never need to touch the HTML.
   Replace the placeholder text below with your own details.
   ========================================================================== */

window.SITE = {
  name: "Animesh Joshi",
  initials: "AJ",
  tagline:
    "M.S. Statistics student at Purdue. I work on causal inference, experimentation, and machine learning.",
  email: "animeshjoshi88@gmail.com",
  resume: "Resume.pdf", // leave empty to hide the button

  socials: {
    github: "https://github.com/animeshjoshi",
    linkedin: "https://www.linkedin.com/in/animesh-joshi-664826237/",
    substack: "https://substack.com/@animeshjoshi",
  },

  /* ---------- Page 1: Introduction ---------- */
  // Put your photos in the /images folder and point to them here.
  // The first photo is the large hero picture, the second sits beside "About me",
  // and any more appear in a gallery below.
  photos: [
    { src: "images/headshot.jpg", alt: "Headshot of Animesh Joshi", caption: "" },
    { src: "images/lake.jpg", alt: "Animesh standing by a lake at golden hour", caption: "" },
  ],

  about: [
    "I'm Animesh. I'm working on my M.S. in Statistics at Purdue and looking for roles in causal inference, experimentation, and machine learning.",
    "I did my undergrad at Purdue too, where I double majored in Math and Statistics and picked up a certificate in Applied Data Science.",
    "I like using data to figure out how things work. That could mean understanding why customers behave a certain way, measuring the effect of a policy change or a macroeconomic decision, or thinking through how a clinical trial should be designed.",
    "Outside of school and work I cook a lot. Some recent ones: chicken fricassée, homemade lasagna, lamb barbacoa, saffron rose cheesecake, and a pizookie or two. I also read a lot about politics and economics (macro theory, election forecasting, foreign policy, economic policy). I play pickleball and basketball and watch pretty much any sport, mostly basketball, football, and tennis.",
  ],

  quickFacts: [
    { label: "Currently", value: "M.S. in Statistics, Purdue University" },
    { label: "Undergrad", value: "B.S. Math & Statistics, Purdue (Dec 2025)" },
    { label: "Certificate", value: "Applied Data Science" },
    { label: "Focus", value: "Causal inference, experimentation, machine learning" },
    { label: "Looking for", value: "Data science and research roles" },
  ],

  interests: [
    "Cooking",
    "Macroeconomics",
    "Election forecasting",
    "Foreign policy",
    "Economic policy",
    "Pickleball",
    "Basketball",
    "Football",
    "Tennis",
  ],

  /* ---------- Page 2: Experience ---------- */
  // logo = optional image shown next to the role (put files in images/logos).
  // highlights = the headline résumé bullets shown on each card.
  // projects   = deeper detail, shown in expandable sections under each role.
  experience: [
    {
      company: "Dexcom",
      logo: "images/logos/dexcom.svg",
      role: "Software Systems Engineer Intern",
      location: "San Diego, CA",
      start: "May 2025",
      end: "Present",
      summary:
        "I work on testing the software and statistics used to decide whether batches of continuous glucose monitor (CGM) sensors meet FDA requirements. A lot of it is simulation and hypothesis testing.",
      highlights: [
        "Built a sensor simulator that models how CGM sensors respond to different glucose levels. Testing used to require physical sensors and lab equipment, and the simulated data removed about $40k+ in hardware costs.",
        "Found errors in the algorithm that picks which statistical model to fit for each sensor lot. Fixing them cut producer risk (good lots getting rejected) by about 30%.",
        "Checked the statistical tolerance interval models used to release sensor lots against simulated data where the true answer was known. This work cut consumer risk (bad lots getting accepted) by about 20%.",
        "Set up automated validation for the drift characterization software, covering its signal processing, nonlinear regression, and statistical inference steps. Stress-tested it on 20+ extreme operating conditions like missing data, noise, and signal spikes.",
        "Built an automated regression testing system for 200+ stored procedures in the manufacturing database, so changes to the database can be checked without manual testing.",
      ],
      projects: [
        {
          name: "Statistical Verification of Sensor Performance Analytics",
          bullets: [
            "Wrote a stochastic simulator that generates the waveforms a sensor would produce when placed in several glucose concentrations. Since I control how the data is generated, I know what the correct pass/fail result should be.",
            "Added simulated measurement error with different bias levels and error distributions in each of the three glycemic ranges (low, normal, high), so the analysis could be tested on both passing and failing lots.",
            "Built my own analysis pipeline in Python that processes the raw waveforms, runs normality tests to decide which method applies, and builds parametric or nonparametric tolerance intervals to check each lot against FDA iCGM accuracy requirements.",
            "Wrote a GUI automation script that runs the production LabVIEW software on the simulated data without anyone clicking through it, plus a report that compares its results to my pipeline line by line.",
            "Extended the simulator to cover problems that show up on the factory floor, like missing data, changing signal amplitudes, spikes, and noise, to see how the software handles them.",
          ],
        },
        {
          name: "Validation of Sensor Drift Characterization Models",
          bullets: [
            "Simulated sensor signals at a single glucose concentration over wear periods of 2 to 15 days, with drift built in.",
            "Rebuilt the full analysis on my own: sensitivity conversion, dip and spike filtering, resampling, nonlinear least squares regression to fit the drift curve, relative difference calculations, normality tests, tolerance intervals, and the final pass/fail decision.",
            "Ran the same data through the production C# DLL and generated a Python report flagging any place where its results didn't match mine.",
          ],
        },
        {
          name: "Combinatorial Regression Testing for Production Data Pipelines",
          bullets: [
            "Went through 200+ stored procedures that run every month during CGM manufacturing and figured out what inputs and database updates each one depends on.",
            "Wrote combinatorial regression tests in Python that run each procedure across many combinations of inputs and check both the returned output and the changes it makes to the database.",
          ],
        },
        {
          name: "Test Automation & Reporting for the FAST Manufacturing Line",
          bullets: [
            "Refactored 15+ automated Python test scripts that check the stored procedures run when CGMs are built on the FAST manufacturing line, making them easier to maintain and extend.",
            "Built a Python tool that generates PDF reports after each test run, showing test coverage, which cases passed or failed, and a summary of how the software performed on each test case.",
          ],
        },
      ],
      tags: ["Python", "SQL", "Monte Carlo Simulation", "Tolerance Intervals", "Hypothesis Testing", "Nonlinear Regression"],
    },
    {
      company: "Axos Bank",
      logo: "images/logos/axos.svg",
      role: "Data Analyst Intern",
      location: "San Diego, CA",
      start: "Jul 2024",
      end: "Aug 2024",
      summary:
        "Analyzed loan and credit risk data to understand what drives delinquency.",
      highlights: [
        "Wrote SQL pipelines that pull loan-level data from several tables in the data warehouse for 4,000+ recent originations, and built summary tables the team could use directly.",
        "Ran a cohort analysis on $12.5B in originations over four fiscal years, grouping loans by when they were originated and comparing their risk profiles to help inform lending strategy.",
        "Tracked credit risk metrics over time across the $20B portfolio and looked at how changes in those metrics lined up with later delinquencies.",
        "Built a Tableau report for the strategy team breaking down the main factors behind $500M in delinquencies.",
      ],
      projects: [
        {
          name: "Origination Risk Cohort Analysis",
          bullets: [
            "Queried and joined several tables in the enterprise data warehouse to build one loan-level dataset covering every loan originated in the past five fiscal years.",
            "Calculated custom credit risk metrics and aggregated existing ones, then compared them across origination cohorts covering $12.5B in loans.",
            "Looked at how those metrics shifted from year to year and which shifts were followed by higher delinquency rates.",
            "Put the results in a Tableau dashboard so the strategy team could see the trends by cohort.",
          ],
        },
        {
          name: "Portfolio Risk Monitoring",
          bullets: [
            "Applied the same approach to the whole $20B portfolio instead of just new originations, tracking credit risk metrics over time.",
            "Connected those trends to delinquency outcomes to identify the factors behind $500M in delinquencies, and shared the results in a Tableau report.",
          ],
        },
      ],
      tags: ["SQL", "Tableau", "Cohort Analysis", "Longitudinal Analysis", "Credit Risk"],
    },
    {
      company: "Purdue University",
      logo: "images/logos/purdue.svg",
      role: "Undergraduate Research Assistant",
      location: "West Lafayette, IN",
      start: "Aug 2022",
      end: "May 2024",
      summary:
        "Research projects on fairness in credit models, deep learning with satellite images, and diffusion models.",
      highlights: [],
      projects: [
        {
          name: "Causal Fairness Evaluation of Credit Segmentation Models",
          bullets: [
            "Built models that group borrowers by credit risk profile using logistic regression, random forests, and neural networks, and compared how well each one performed.",
            "Tested each model for gender bias using statistical discrimination metrics (differences in outcomes and error rates between groups) and causal machine learning methods that account for confounding variables.",
            "Implemented methods that estimate how much each individual data point contributes to a model's bias and accuracy, to see whether bias was coming from specific parts of the training data.",
          ],
        },
        {
          name: "Remote Water Quality Monitoring with Deep Learning (The Data Mine × Intelinair)",
          bullets: [
            "Built a ResNet-50 image classifier that uses satellite images of 14 Indiana lakes to flag waterbodies with harmful levels of blue-green algae. It reached 86% accuracy with 0.96 specificity.",
            "Built a U-Net segmentation model that marks which parts of a lake contain algae, trained on water quality filter images as labels. It picked up about 70% of the algal contamination.",
            "Split the satellite images into 350+ smaller tiles to get more training data, and improved the models with regularization, data augmentation, image processing, batch normalization, and early stopping.",
            "Presented our results at The Data Mine's 2023 research symposium with my team.",
          ],
          link: { label: "View poster (PDF)", href: "files/water-quality-poster.pdf" },
        },
        {
          name: "Diffusion Models for Stochastic PDEs",
          bullets: [
            "Created a dataset of stochastic partial differential equations and tested whether autoencoders and DDPM diffusion models could learn to solve them.",
            "Reproduced a published study on graph diffusion policy optimization, which uses diffusion models to generate molecules for drug discovery.",
            "Built small prototype diffusion models to test how well the Optuna library worked for tuning their hyperparameters.",
          ],
        },
      ],
      tags: ["Causal ML", "Algorithmic Fairness", "Computer Vision", "Deep Learning"],
    },
  ],

  /* ---------- Page 3: Projects ---------- */
  // category drives the filter buttons. Links are optional — leave empty to hide.
  // writing = Substack posts; each one is embedded as a preview card.
  projects: [
    {
      title: "Uplift Modeling for Criteo Advertising Campaigns",
      category: "Experimentation & Causal Inference",
      description:
        "I used Criteo's incrementality dataset (13M+ users) to estimate how much an ad increases conversions, and then how that effect differs from user to user.",
      bullets: [
        "Analyzed the A/B test with a two-proportion z-test, then fit a logistic regression that adjusts for the 12 user covariates. Seeing the ad raised the odds of converting by about 11.5x, with a tight confidence interval.",
        "Ran a post hoc power analysis for both the z-test and the logistic regression to check the sample was big enough to detect realistic effect sizes. Detecting even a 1% lift only needed a few thousand users.",
        "Estimated individual-level treatment effects with S-Learners (one model with treatment as a feature) and T-Learners (separate models for treated and control users) using random forests and XGBoost. The S-Learner estimates came out much lower than the T-Learner's, which I traced to class imbalance, since only about 3% of users were in the treatment group.",
        "Fit causal forests with Microsoft's EconML library. Unlike regular random forests, they split on differences in treatment effect and use honest sample splitting, which gives uplift estimates with confidence intervals for each user.",
      ],
      tags: ["A/B Testing", "Uplift Modeling", "Causal Forests", "Meta-Learners", "EconML"],
      github: "",
      paper: "",
      writing: [
        { title: "A/B Testing in Marketing Incrementality Tests", url: "https://animeshjoshi.substack.com/p/ab-testing-in-marketing-incrementality" },
        { title: "S-Learners and T-Learners for Causal Uplift Modeling", url: "https://animeshjoshi.substack.com/p/s-learners-and-t-learners-for-causal" },
        { title: "Causal Forests for Uplift Modeling", url: "https://animeshjoshi.substack.com/p/causal-forests-for-uplift-modeling" },
      ],
    },
    {
      title: "Sequential Experimentation for Email Marketing Campaigns",
      category: "Experimentation & Causal Inference",
      description:
        "Checking an A/B test before it's done raises the false positive rate. For a multi-arm email campaign, I compared sequential methods that allow early stopping with a standard fixed-horizon test.",
      bullets: [
        "Ran a multi-arm sequential experiment comparing several email campaign versions, and analyzed the same data with a fixed-horizon test to see how the conclusions and sample sizes differed.",
        "Implemented the Sequential Probability Ratio Test (SPRT) and alpha spending functions, which let you check results as data comes in and stop early while keeping the overall Type I error rate at the target level.",
        "Wrote a Monte Carlo simulation that runs thousands of simulated experiments to compare Type I error, Type II error, and average stopping time for each sequential method and for naive repeated peeking.",
        "Looked at whether the campaign worked better for some customers than others, using subgroup analyses and treatment-by-segment interaction terms.",
      ],
      tags: ["Sequential Testing", "SPRT", "Alpha Spending", "Monte Carlo", "HTE"],
      github: "",
      paper: "",
      writing: [
        { title: "Sequential A/B Testing with the Sequential Probability Ratio Test", url: "https://animeshjoshi.substack.com/p/sequential-ab-testing-with-sequential" },
      ],
    },
    {
      title: "Detecting Statistically Significant Fairness Violations in Recidivism Forecasting",
      category: "Experimentation & Causal Inference",
      description:
        "Most fairness metrics are reported without any measure of uncertainty. In this paper I estimate sampling distributions for these metrics so they can be tested for significance, using recidivism data from Georgia (National Institute of Justice).",
      bullets: [
        "Built models predicting whether people released from prison in Georgia would be rearrested, using logistic regression, SVMs, random forests, XGBoost, and LDA.",
        "Measured bias in three ways: differences between predicted and actual outcomes across racial groups, calibration by group, and observational causal inference methods.",
        "Used k-fold cross-validation to get many estimates of each bias metric, which gives an approximate sampling distribution instead of a single number.",
        "Ran significance tests on those distributions. Several fairness definitions showed statistically significant bias against Black individuals, while others showed no bias or bias against White individuals, which shows how much the conclusion depends on the definition you pick.",
      ],
      tags: ["Causal Inference", "Algorithmic Fairness", "Hypothesis Testing", "ML"],
      github: "",
      paper: "https://arxiv.org/abs/2511.11575",
      writing: [],
    },
    {
      title: "Simulation Study of Tolerance Interval Methods",
      category: "Statistics & Simulation",
      description:
        "A simulation study comparing ways to build tolerance intervals, especially when the data isn't normal.",
      bullets: [
        "Built tolerance intervals five ways: approximate and exact normal-theory methods, a rank-based nonparametric method, the bootstrap, and a bootstrap that resamples from a kernel density estimate.",
        "Ran Monte Carlo simulations (n = 500, 95% confidence, 95% coverage) on normal, exponential, beta, and Pareto data, recording how often each interval actually covered the target and how wide it was.",
        "Set up the comparison as a randomized complete block design, with the data distribution as the block, so the methods could be compared fairly across distributions.",
        "The approximate normal method fell apart (under 4% confidence even on normal data), while the KDE bootstrap stayed above 95% on skewed data without producing noticeably wider intervals than the nonparametric method.",
      ],
      tags: ["Monte Carlo", "Design of Experiments", "Nonparametrics", "Bootstrap"],
      github: "",
      paper: "",
      writing: [
        { title: "Tolerance Intervals: Theory, Construction, and Simulation", url: "https://animeshjoshi.substack.com/p/tolerance-intervals-theory-construction" },
      ],
    },
    {
      title: "Autoregressive Models for Stock Price Forecasting",
      category: "Statistics & Simulation",
      description:
        "Autoregressive models applied to NVIDIA stock, along with the math behind why they have a hard time forecasting prices.",
      bullets: [
        "Used NVIDIA daily closing prices from 2015 on. Raw prices aren't stationary, so I converted them to log returns and confirmed stationarity with an Augmented Dickey-Fuller test, then checked normality with a Jarque-Bera test.",
        "Chose the number of lags with BIC, which picked an AR(1), and evaluated forecasts on a rolling window. Price forecasts were off by about 14% on average (MAPE).",
        "Showed that forecasts quickly revert to the historical average return and that the forecast variance keeps growing with the horizon, which is why these models aren't very useful for predicting prices.",
        "Wrote out the math for why this happens, including proofs of variance growth, mean reversion, and how the model parameters are estimated.",
      ],
      tags: ["Time Series", "AR Models", "Python"],
      github: "",
      paper: "",
      writing: [
        { title: "Autoregressive Models: Theory, Intuition and an Application to Stock Price Forecasting", url: "https://animeshjoshi.substack.com/p/autoregressive-models-theory-intuition" },
      ],
    },
    {
      title: "Disposable Personal Income Regression Analysis",
      category: "Statistics & Simulation",
      description:
        "A regression analysis of how inflation, interest rates, and government spending affect U.S. disposable personal income.",
      bullets: [
        "Fit multiple regression models with measures of inflation, interest rates, and government spending as predictors of disposable personal income.",
        "Checked the regression assumptions with VIF for multicollinearity, Shapiro-Wilk for normality of residuals, and Brown-Forsythe for constant variance.",
        "Bootstrapped confidence intervals for the coefficients so the inference didn't rely only on the normality assumption.",
      ],
      tags: ["Regression", "Bootstrap", "Econometrics", "R / Python"],
      github: "https://github.com/animeshjoshi/dpi_regression/tree/main",
      paper: "",
      writing: [],
    },
    {
      title: "Markov Chain Analysis of Snakes and Ladders",
      category: "Statistics & Simulation",
      description: "I modeled Snakes and Ladders as a Markov chain to see how much going first matters.",
      bullets: [
        "Set up the board as a Markov chain, where each square is a state and the dice roll, snakes, and ladders define the transition matrix.",
        "Used the transition matrix to compute the exact probability that each player wins based on their turn order, and looked at how that first-mover advantage changes as more players join the game.",
      ],
      tags: ["Markov Chains", "Probability", "Python"],
      github: "https://github.com/animeshjoshi/Snakes_Ladders",
      paper: "",
      writing: [],
    },
    {
      title: "Credit Risk Explanation System with LLMs",
      category: "Machine Learning",
      description:
        "Credit risk models with an LLM app on top that explains the results to loan applicants.",
      bullets: [
        "Built logistic regression and random forest models to predict probability of default and loss given default (LGD), and evaluated them with the KS statistic and AUC.",
        "Set up a ChromaDB vector database holding past default projections, model interpretations (regression coefficients, SHAP values, feature importances), model documentation, and credit risk background material.",
        "Built a RAG system that takes a user's question, retrieves the most relevant documents from the database, and passes them to a Mistral LLM as context for its answer.",
        "Trained a Naive Bayes classifier on LLM-generated example questions to sort each query by type and search the right part of the database, then deployed the app on AWS.",
      ],
      tags: ["Credit Risk", "SHAP", "RAG", "LLMs", "AWS"],
      github: "https://github.com/animeshjoshi/Credit-Risk-Modeling-with-LLM-Explainer",
      paper: "",
      writing: [],
    },
    {
      title: "Measuring Defender Impact in NFL Pass Plays",
      category: "Machine Learning",
      description:
        "My NFL Big Data Bowl project, measuring how much each defender affects a pass play over time.",
      bullets: [
        "Used NFL player tracking data (each player's position, speed, and acceleration) to predict completion probability and expected yards after catch with regression and random forest models.",
        "Combined those into a utility function that estimates the expected yards gained on a pass play at every moment after the snap.",
        "Estimated each defender's marginal effect on that utility at every point in the play, and looked at how the impact of different positions changes as the play develops.",
      ],
      tags: ["Sports Analytics", "Tracking Data", "ML"],
      github: "https://github.com/animeshjoshi/nfl-data-bowl-25",
      paper: "",
      writing: [],
    },
    {
      title: "Loan Repayment Prediction",
      category: "Machine Learning",
      description: "Predicting default for LendingClub loan applicants, comparing a neural net to standard ML models.",
      bullets: [
        "Did exploratory analysis on the LendingClub data to find missing values and other data quality issues, and to decide which features needed to be engineered.",
        "Built a multilayer perceptron (MLP) that predicts each applicant's probability of default.",
        "Compared it to SVMs, tree-based models, and KNN on the same data to see whether the neural net was worth the added complexity.",
      ],
      tags: ["Deep Learning", "Credit Risk", "Classification"],
      github: "https://github.com/animeshjoshi/Loan-Repayment-Prediction",
      paper: "",
      writing: [],
    },
  ],

  /* ---------- Page 4: Coursework ---------- */
  education: [
    {
      school: "Purdue University",
      degree: "M.S. in Statistics",
      dates: "Aug 2026 – Dec 2027",
    },
    {
      school: "Purdue University",
      degree: "B.S. in Mathematics and B.S. in Statistics, Certificate in Applied Data Science",
      dates: "Aug 2022 – Dec 2025",
    },
  ],

  // category drives the filter buttons. code and term are optional (e.g. code: "STAT 51200", term: "Fall 2025").
  courses: [
    // ----- Causal Inference & Experimentation -----
    {
      name: "Causal Inference with Modern Data and Machine Learning",
      category: "Causal Inference & Experimentation",
      description:
        "Defining causal effects, the assumptions needed to identify them, and estimating them from experimental and observational data. Covers heterogeneous effects, longitudinal treatments, network interference, and machine learning-based estimators.",
    },
    {
      name: "Design of Experiments",
      category: "Causal Inference & Experimentation",
      description:
        "Completely randomized, randomized complete block, and Latin square designs; full and fractional factorials (2ⁿ, 3ⁿ, mixed); confounding, incomplete block, lattice, nested, and split-plot designs; ANOVA in regression models; and optimal design.",
    },
    {
      name: "Randomized Controlled Trials in Public Health",
      category: "Causal Inference & Experimentation",
      description:
        "Hands-on design and analysis of randomized studies: handling practical data-collection issues, choosing appropriate analyses in SAS, recognizing the limits of the evidence, and communicating results to different audiences.",
    },
    {
      name: "Epidemiology",
      category: "Causal Inference & Experimentation",
      description:
        "Patterns, causes, and impact of disease in populations: measures of occurrence and association, observational study designs, and how to argue for causality, with an emphasis on environmental causes of disease.",
    },

    // ----- Statistical Methods & Theory -----
    {
      name: "Statistical Theory",
      category: "Statistical Methods & Theory",
      description:
        "Mathematical foundations of inference: properties of estimators, maximum likelihood, sufficiency, hypothesis tests, and confidence intervals, plus Bayesian inference (posteriors, MAP estimation, credible intervals, Bayesian testing).",
    },
    {
      name: "Advanced Statistical Methodology",
      category: "Statistical Methods & Theory",
      description:
        "Modeling beyond least squares in R: generalized linear models for non-Gaussian outcomes, mixed effects models for correlated data, nonparametric regression, and parametric and nonparametric survival analysis for censored data.",
    },
    {
      name: "Intermediate Statistical Methodology",
      category: "Statistical Methods & Theory",
      description:
        "General and generalized linear models in SAS: regression, ANOVA, ANCOVA, random and mixed effects models, and logistic and log-linear models applied to real data.",
    },
    {
      name: "Regression Analysis",
      category: "Statistical Methods & Theory",
      description:
        "Simple and multiple linear regression, residual diagnostics, transformations, polynomial and nonlinear regression, model building, one- and two-way ANOVA, multiple comparisons, and ANCOVA.",
    },
    {
      name: "Statistical Learning for Multivariate Data",
      category: "Statistical Methods & Theory",
      description:
        "Multivariate extensions of classical tests: MANOVA, tests for equal covariance matrices, discriminant analysis, canonical correlation, principal components, and factor analysis.",
    },
    {
      name: "Time Series and Applications",
      category: "Statistical Methods & Theory",
      description:
        "Stationarity, autocovariance, and ARIMA models, plus spectral analysis (periodograms, tapering, linear filtering), with extensive model building in R.",
    },
    {
      name: "Introduction to Statistics",
      category: "Statistical Methods & Theory",
      description:
        "Data-driven introduction to applied statistics: exploratory analysis, experimental design, simulation, sampling distributions, the CLT, confidence intervals, hypothesis tests, ANOVA, and regression.",
    },

    // ----- Probability & Stochastic Processes -----
    {
      name: "Probability Theory",
      category: "Probability & Stochastic Processes",
      description:
        "Sample spaces, combinatorics, independence, random variables and distribution functions, moment generating functions, transformations of random variables, and limit theorems.",
    },
    {
      name: "Probability",
      category: "Probability & Stochastic Processes",
      description:
        "Conditional probability and Bayes' theorem, discrete and continuous random variables, joint and conditional distributions, moments, the law of large numbers, and the central limit theorem.",
    },
    {
      name: "Stochastic Processes",
      category: "Probability & Stochastic Processes",
      description:
        "Discrete-time Markov chains and Poisson processes, with continuous-time Markov chains, renewal processes, queueing networks, and martingales.",
    },
    {
      name: "Elements of Stochastic Processes",
      category: "Probability & Stochastic Processes",
      description:
        "Discrete- and continuous-time Markov chains and Brownian motion, plus Gaussian processes, queues, epidemic and branching models, renewal processes, and reliability problems.",
    },
    {
      name: "Computational Finance I",
      category: "Probability & Stochastic Processes",
      description:
        "Mathematics of modern finance through Black-Scholes: Brownian motion and stochastic calculus, Itô's formula, Feynman-Kac, pricing and hedging, incomplete markets, path-dependent options, and stochastic portfolio optimization.",
    },

    // ----- Machine Learning & Computing -----
    {
      name: "Machine Learning",
      category: "Machine Learning & Computing",
      description:
        "Statistical learning in R: linear regression, classification, regularization and shrinkage, tree-based methods, and support vector machines, applied to business and economics data.",
    },
    {
      name: "Operations Research and Optimization",
      category: "Machine Learning & Computing",
      description: "Formulating and solving linear programs, network flow problems, and integer programs.",
    },
    {
      name: "Programming in C",
      category: "Machine Learning & Computing",
      description:
        "C in a UNIX environment: pointers, dynamic memory, structures, the preprocessor, file I/O, recursion, and concurrency.",
    },
    {
      name: "Object-Oriented Programming",
      category: "Machine Learning & Computing",
      description:
        "Problem solving and algorithm design, collections, searching and sorting, decomposition, classes and inheritance, exception handling, GUIs, file I/O, and abstract data types.",
    },
    {
      name: "Foundations of Computer Science",
      category: "Machine Learning & Computing",
      description:
        "Logic and proofs, sets and relations, counting, algorithm analysis, graphs and trees, recursion, finite state machines, pushdown automata, and computability.",
    },
    {
      name: "Data Science Labs in Calculus",
      category: "Machine Learning & Computing",
      description:
        "Weekly Python labs applying multivariable calculus to data problems: color representation, motion detection in video, and building a planimeter from Green's theorem using sensors and microprocessors.",
    },
    {
      name: "Signals and Systems for Mathematicians",
      category: "Machine Learning & Computing",
      description:
        "Mathematical framework for signals like audio and images: representations in different bases, sampling continuous signals, and linear time-invariant systems.",
    },

    // ----- Mathematics -----
    {
      name: "Real Analysis",
      category: "Mathematics",
      description:
        "Rigorous treatment of the real numbers, sequences, series, continuity, differentiation, and Riemann integration.",
    },
    {
      name: "Advanced Linear Algebra",
      category: "Mathematics",
      description: "Theory behind applied linear algebra: inner products, orthogonality, and applications including least squares.",
    },
    {
      name: "Linear Algebra",
      category: "Mathematics",
      description: "Systems of linear equations, vector spaces, matrices, determinants, and eigenvalues and eigenvectors.",
    },
    {
      name: "Multivariate Calculus",
      category: "Mathematics",
      description: "Lines, planes, and curves in 3D; differential calculus of several variables; multiple integrals; and vector calculus.",
    },
    {
      name: "Introduction to Proofs",
      category: "Mathematics",
      description:
        "Abstract reasoning through real analysis: axioms of the reals, induction, limits, convergence, continuity, the major calculus theorems, and cardinality.",
    },
    {
      name: "Mathematical Logic",
      category: "Mathematics",
      description: "Propositional and predicate calculus applied to proofs, valid arguments, switching theory, and formal languages.",
    },
    {
      name: "Modern Mathematics and Society",
      category: "Mathematics",
      description:
        "Combinatorics and probability applied to real life: voting paradoxes, weighted voting, fair division, apportionment, networks, growth patterns, finance, and survey sampling.",
    },

    // ----- Policy & Society -----
    {
      name: "Data Science and Society",
      category: "Policy & Society",
      description:
        "Writing-intensive course on the ethical, legal, and social issues of data science and frameworks for evaluating its impact.",
    },
    {
      name: "Introduction to U.S. Foreign Policy",
      category: "Policy & Society",
      description: "Historical background and theoretical tools for understanding and evaluating U.S. foreign policy.",
    },
    {
      name: "International Relations",
      category: "Policy & Society",
      description: "Fundamentals of international law, organizations, and politics in contemporary international relations.",
    },
    {
      name: "Weapons and International Relations",
      category: "Policy & Society",
      description: "The roles modern weapons systems play in contemporary international relations.",
    },
  ],
};
