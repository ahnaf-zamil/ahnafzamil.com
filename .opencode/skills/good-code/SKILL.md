---
name: good-code
description: Engineering principles for writing simple, maintainable, testable code. Apply when implementing or modifying code.
---

# Good Code

Write code that is simple, readable, maintainable, testable, and consistent
with the existing architecture.

## Principles

- Understand the existing code and conventions before introducing new ones.
- Prefer simple solutions over clever solutions.
- Keep functions and modules cohesive and focused.
- Give names that clearly communicate intent.
- Minimize coupling and encapsulate implementation details.
- Keep responsibilities clear and avoid mixing unrelated concerns.
- Prefer composition over inheritance when appropriate.
- Avoid unnecessary global state and hidden side effects.
- Avoid duplication of knowledge, but do not abstract merely because code
  happens to look similar.
- Avoid premature generalization and speculative abstractions.
- Do not introduce design patterns unless they solve a concrete problem.
- Prefer the smallest abstraction that cleanly solves the current problem.
- Keep interfaces narrow and purposeful.
- Follow existing project conventions unless there is a good reason not to.
- Handle errors explicitly at appropriate boundaries.
- Write tests for meaningful behavior, especially important edge and failure cases.

## Before implementing

Consider:

1. What responsibility does this code have?
2. What should it know about?
3. What should it not know about?
4. Which existing abstraction should this belong to?
5. Is a new abstraction actually necessary?
6. Am I solving a current requirement or a hypothetical future one?

Prefer extending an existing appropriate abstraction over creating a competing one.

## During implementation

Keep the implementation proportional to the problem.

Avoid:

- unnecessary wrappers
- unnecessary interfaces
- premature factories
- excessive indirection
- clever code that sacrifices readability
- large functions with unrelated responsibilities
- leaking implementation details
- speculative extensibility

When multiple designs are reasonable, prefer the one with fewer concepts,
fewer dependencies, and clearer ownership.

## Before finishing

Briefly self-review:

- Is the code understandable?
- Are responsibilities clear?
- Are names accurate?
- Did I introduce unnecessary complexity?
- Did I introduce an abstraction without a concrete need?
- Did I duplicate existing knowledge?
- Did I make unrelated changes?
- Are important error and boundary cases handled?
- Are appropriate tests present?

Do not refactor working code merely for the sake of refactoring.
