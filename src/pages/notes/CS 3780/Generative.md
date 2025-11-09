---
layout: ../../../layouts/Note.astro
title: Generative Modeling
---

# Generative Modeling

ERM:

- find \\(h(x)\\) that directly minimizes loss
-

Discriminative Conditional Model:

- find \\(P(Y | X)\\), derive \\(h(x)\\) via bayes rule
- Pro: not yet committed to loss during training
- Con: neet to commit to input + output before training; learning conditional distribution is harder than learning decision rule

i.e. logistic regression, ridge regression

Generative:

- find \\(P(X, Y)\\), derive \\(h(x)\\) via bayes rule
- pro: not yet committed to loss, input, or output during training
- con: needs to model dependencies in X

## Processr

goal of generative
