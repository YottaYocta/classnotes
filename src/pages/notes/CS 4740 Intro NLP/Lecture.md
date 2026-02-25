---
layout: ../../../layouts/Note.astro
title: Feed Forward Neural Networks
---

# Review

Multi-class classification:
\\[
P(\hat y = x^j) = \frac {e^{w_c \cdot x^j}}{\sum^L_{k=1} e^{w_c \cdot x^j}}
\\]

There are \\(k\\) features and \\(L\\) classes.
There are \\(L\\) weight vectors \\(w_c\\). Each vector \\(w_i\\) corresponds to how likely class \\(L_i\\) is. Co-occurence matrices are **sparse embeddings**, whereas skip gram is **dense**

Why not only a single \\(w\\) vector for both \\(w\\) and \\(c\\)?
Take the following example:

```
Play cricket
Play baseball
```

`Play` is not intrinsically similar to cricket or baseball, but cricket and baseball are related in that they both can be played. Why then are there two separate \\(c\\)? In reality \\(c^-\\) and \\(c^+\\) refer to the same vector.

# Feed Forward Networks

Generic word vectors might not be optimal. Feed forward neural nets allow for **representation learning**, learning how tokens are embedded.

Consider task of Named Entity Tagging (NE).

Ideally words get embedded so that names of people get clustered and names of places get clustered, with neither mixing. This would let us learn a linearly separable boundary.

At high level, **feed forward neural networks (FFNN)** learn how to represent some input vector \\(x\\) as another vector \\(y\\) that can be used to compute probabilities easily.
