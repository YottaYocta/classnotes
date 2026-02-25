---
layout: ../../../layouts/Note.astro
title: Language Modeling
---

# Autoregressive Modeling

For a vocabulary of tokens (possible words, smaller parts of words, symbols, etc.) train a model that takes a sequence of words and outputs the probability for each token in the vocabulary being the 'next' output.

# Next Token Predictive Task

Formal goal: learn \\(P(x_i \mid x\_{< i})\\), where \\(x\_{< i}\\) represents all token before \\(x\_{i}\\)

1. embeddings of vectors in \\(\mathbb{R^k}\\)
2. input of \\(d\\) tokens, should produce list of \\(d \times \mathbb{R^k}\\)
3. train embedding and transformer that, given list of input tokens, produces transformed output tokens that encode the 'next most likely' token given the sequence up till that token.
4. softmax into probabilities for some future token \\(x_i\\) given \\(x\_{< i } \\)

# Training Data Preprocessing and Sequence Packing

Sequence packing and issue of documents; documents of different lengths. How to train in batches for SGD?

Solution: take data, separate into sequences of fixed length, and train on these chunks. This is the model's _context length_

# Exposure Bias

Generation of next token depends on previously generated tokens. Bad models produce generations that don't accurately represent distribution of training text. With older models, longer outputs progressively got worse because generated distribution matched output less and less.
