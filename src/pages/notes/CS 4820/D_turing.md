---
title: "Turing Machines"
layout: ../../../layouts/Note.astro
---

Church Turing Thesis: turing machines (TM) satisfies these requirement

Strong Church Turing Thesis: efficient simulation of any model of computation

FACTOR: given integer \\(n\\), find a factor of n. This is hard, no known polytime algorithm for classical computation, but there is a known quantum algorithm (Shor's Algorithm)

_Components of a Turing Machine_

1. \\(Q\\) set of states
2. \\(\Gamma\\): tape alphabet
3. \\(\Sigma \subset \Gamma\\): input alphabet
4. Transition Function

\\[\delta: Q \times \Gamma \rightarrow Q \times \Gamma \times L, R\\]

Special states: \\(s\\) - start state, \\(t\\) - accept state, \\(r\\) - reject, blank symbol (nothing written)
