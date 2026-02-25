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

# Languages

Languages in R are recursive

- There exists some turing machine \\(T\\) that accepts every string \\(s\in L\\)
- And for strings not in \\(L\\), \\(T\\) always halts and rejects

Languages in RE are recursively enumerable

- There exists some turing machine \\(T\\) that accepts every string \\(s\in L\\)
- For strings not in \\(L\\), \\(T\\) may halt or run forever

# Turing Machine to Evaluate Boolean Expression

Q, Sigma, Alphabet = \{1, 0, left end marker, blank\}
Transition function: Qx Alphabet x \{L,R\}

Start State \\(S\\): on seeing the leftmost marker, start sweeping right

Right Sweep

Left Sweep

Steps to describe turing machine: describe states, all transition functions
