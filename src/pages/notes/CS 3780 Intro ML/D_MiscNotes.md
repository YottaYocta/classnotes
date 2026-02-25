# Questions

What does the gradient of a scalar function with respect to a vector represent geometrically?

How do you compute the gradient of a linear function
w⊤x
w
⊤
x with respect to
w
w?

How do you apply the chain rule when differentiating a squared term like
(y−w⊤x)2
(y−w
⊤
x)
2
?

How do summations over examples translate into vector or matrix notation for gradients?

⚖️ 2. Regularization and the L1 Norm

What is the definition of the L1 norm
∥w∥1
∥w∥
1
​

?

Why is the L1 norm non-differentiable at
wj=0
w
j
​

=0?

What is the subgradient of
∣wj∣
∣w
j
​

∣, and how is it represented using the sign function?

What effect does L1 regularization have on the learned weights compared to L2 regularization?

📉 3. Loss Function and Objective

What is the intuition behind the squared error loss
(y−w⊤x)2
(y−w
⊤
x)
2
?

Why do we include a regularization term in the objective function for regression models?

How do we balance the influence of the data term and the regularization term (role of
C
C)?

⚙️ 4. Gradient Descent (GD) Mechanics

What is the general update rule for gradient descent?

How does the learning rate
η
η affect convergence?

How would you compute the gradient of the entire Lasso objective (both terms together)?

Why is gradient descent considered an iterative optimization algorithm?

🧮 5. Stochastic Gradient Descent (SGD)

How does SGD differ from full-batch gradient descent conceptually and computationally?

How do we compute the gradient of the loss for a single example
(xi,yi)
(x
i
​

,y
i
​

)?

What is the SGD update rule when we use one data point at a time?

How does stochasticity (random sampling) affect the trajectory of
w
w updates?

💾 6. Choosing Between GD and SGD

What happens to the computational cost when the dataset becomes very large?

Why might SGD be preferable for large datasets with redundant samples?

Why might GD be preferable for smaller or cleaner datasets?

🧠 7. Mini-Batch Gradient Descent & Variance

What is a mini-batch, and how does it combine features of GD and SGD?

What happens to the computation cost per iteration as we increase the mini-batch size
m′
m
′
?

What happens to the variance of the gradient estimate as we increase m′ m ′ ?

How does variance reduction affect the convergence behavior of gradient descent?

How would you combine the gradient from the regularizer and the loss term into one update rule?

What is the meaning of each component in the final update:
\\[
\mathbf{w}^{(t+1)} = \mathbf{w}^{(t)} - \eta \left( \operatorname{sgn}(\mathbf{w}^{(t)}) + \frac{2C}{m} \sum_{i=1}^{m} \big( \mathbf{w}^{(t)\top} \mathbf{x}_i - y_i \big) \mathbf{x}_i \right)
\\]

What simplifications occur when switching from full-batch GD to SGD (or to mini-batch updates)?

How would you explain the difference between GD, SGD, and mini-batch GD to someone new to optimization?
