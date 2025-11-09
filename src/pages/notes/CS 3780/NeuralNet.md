---
layout: ../../../layouts/Note.astro
title: Neural Networks
---

# Neural Networks

linear functions can be repped as single layer network

i.e. input nodes \\(1\dots n\\) are the \\(n\\) fields of some input vector \\(v\\). Each is multiplied with the \\(i\\)th entry of a weight vector, their result is summed, and then a bias is applied to the sum.

Classifier for this case is a sign classifier (positive/negative)

hidden layers allow for multiple simultaneous linear computations to occur, and for the results of those computations to be used in deeper layers

## Common Activation Functions

- Binary Step: returns the sign, or undefined if \\(x = 0\\)
- Sigmoid: positive only, smooth
- Tanh: Kinda like sigmoid but goes from \\(\[-1, 1\]\\) in terms of range
- ReLu (Rectified Linear): \\(y = x\\) if \\(x > 0\\) otherwise, \\(0\\)

These functions are denoted \\(\sigma(x)\\), not necessarily referring to the sigmoid function

## Multi-Layer

- Depth: number of layers starting from the one immediately after input
- Hidden Layers: layers between input and output that produce some result
- Width: how many nodes are on a layer
