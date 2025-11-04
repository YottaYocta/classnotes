---
layout: ../../../layouts/Note.astro
title: "Optimization"
---

# Optimization

## Design strategies:

- ERM (empirical risk minimization)

  - find h = \\(\text{argmin}\_{h\in H} \text{Err}(h)\\) subject to overfitting control
  - pro: directly estimate decision rule
  - con: need to commit to loss, input, output (?)

- Conditional Model

  - Find P(Y|X), then derive h(x) via bayes rule
  - pro: not yet committed to loss during training
  - con: still commit to input/output, learning conditional distribution is harder

- Generative Model
  - model finds P(X, Y)

## Discriminative Training

\\[
\min_{w} R(w) + C \sum^n_{i=1} L(w\cdot x_i, y_i)
\\]

\\(R(w) \\) is the regularizer, responsible for adding penalty for overfitting/overly large w

\\(C \sum^n\_{i=1} L(w\cdot x_i, y_i)\\) is the loss function, with \\(C\\) controlling how much influence the loss function has

**Common Loss Functions**

- Hinge
- Logistic
- Expo
- Squared Error
- Abs Error

**Common Regularizers**

- L2 Norm
- L1 Norm
- L0 Norm

Beyond Linear:

- Kernels: \\(w\cdot \phi(x)\\)
- Deep networks: \\(f(x\|w)\\)
- Boosting: \\(\sum w_j \text{Tree(x)}\\)

## Convexity and Gradients

Def: a multivariate function \\(f: \mathbb{R}^d \rightarrow \mathbb{R}\\) is convex if
\\[f(\alpha w + (1 - \alpha)w') \leq \alpha f(w) + (1 - \alpha)f(w')\\]
All local minima are global minima

Gradient = partial derivatives of a multi-variate function \\(f: \mathbb(R)^d \rightarrow \mathbb{R}\\)

- the critical points of the gradient function are the \\(w\in R\\) such that \delta f(w\_\*) = 0

Def: a function is convex if and only if

\\[f(w') \leq f(w) + \delta f(w)\cdot (w' - w) \\]

\\(f\\) always lies above tangent lines

## Gradient Descent

Algorithm:

- input function f, time horizon, and step size \\(eta_T\\)
- initialize \\(w =^{(1)}) (0, 0, 0)\\)
- for each time step;

\\[w^{t + 1} = w^{t} - \eta_t \delta f \\]

output \\(w^T\\): faster, more practical, more common

- theoretical guarantees for convex f
- step size important in theory + practice
- output \\(\frac 1 T \sum^T\_{t=1} w^{(t)}\\) more stable, strong theoretical guarantees, slow

## Stochastic Gradient Descent

uses a random vector g that is gradient in expectation
\\[\mathbb{E}\[g|w\] = \delta f(x)\\]

-gives right direction only in expectation

Algorithm

- input: function f, time horizon, and step size
- initialize like GD
- for any \\(t=1,2,.., T\\), \\(g^{(t)}\\) s.t. \\(\mathbb E \[g^t \| e^{(t)} = \delta f(w^{t})\\])

- step size even more important than for gradient descent

## Linear Learning Models

- for training dataset of \\((x_1, y_1), \dots (x_n, y_n)\\), many learning problems written to minimize risk;

- for regularized linear discussed, risk function (regularizer + loss) is convex (why?)

**GD for Learning**

- input: time horizon, step size \\(\eta\\), and samples
- initialize weight to zeroed (\\(w^0 = (0,0,0, \dots)\\))
- for each timestep \\(t + 1\\), set \\(w^{t + 1} = w^t - \eta \delta \mathcal{L}\_S(w^t)\\)

applicable to something like support vector machines; take derivatives and you end up with loss function.

**Optimizing for Large-Scale ML**

getting the gradient so far has involved computing the prediction for every sample.

- challenges:

  - dataset large
  - high dimensionality in models

- use fewer samples for each update

- Stochastic Gradient descent relies on random sampling to get an unbiased estimator for gradient

- mini batch: instead of selecting one, select a small group each time for gradient descent

- non-differentiable function may not have gradient at every point, however, we can use subgradients (any tangent that lies below f) to run SGD and GD

- smaller step sizes -> less stochastic improvement (closer to true GD), less uncertainty
- larger step sizes -> more stochastic improvement, more uncertainty

- decaying step size common in practice

- well-conditioned graphs can be thought of as a bowl; it has a single 'sink' that GD heads towards

- ill-conditioned graphs can be thought of as a canoe. Starting on one side of the canoe, with a larger enough step size, will jump to the other side. This may cause a looping behavior preventing improvements in estimations

- AdaGrad: change step size based on previous gradients
