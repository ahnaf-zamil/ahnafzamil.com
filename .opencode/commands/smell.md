---
description: Scan git diff vs target branch for code smells (Clean Code + GoF + Python catalog)
argument-hint: "[target-branch]"
allowed-tools: Bash(git:*), Read, Grep, Glob
---

# /smell — Code smell review

You are running a 5-step code-smell review. Follow the steps **in order**.

Your goal is to identify genuine problems in the current change that are worth fixing before merge.

Do **not** invent findings. Do **not** criticize subjective style preferences. Do **not** recommend complexity merely for the sake of following a pattern.

Cite catalog IDs verbatim from the lists below.

---

## Step 1 — Ingest

The diff below has already been collected. Read it carefully before proceeding.

It contains:

1. Committed changes vs the base branch (`base...HEAD`)
2. Working-tree changes (staged + unstaged)
```
!`bash -c '
BASE="$1"

if [ -z "$BASE" ]; then
  BASE=$(git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed "s@^refs/remotes/@@")
  [ -z "$BASE" ] && BASE="origin/main"
  git rev-parse "$BASE" >/dev/null 2>&1 || BASE="main"
fi

if ! git rev-parse "$BASE" >/dev/null 2>&1; then
  echo "ERROR: base $BASE not found. Pass an explicit branch: /smell <branch>"
  exit 1
fi

echo "===== BASE: $BASE ====="
echo
echo "----- Stat (committed vs $BASE) -----"
git diff --stat "$BASE"...HEAD || true
echo
echo "----- Stat (working tree, staged+unstaged) -----"
git diff --stat HEAD || true
echo
echo "===== Committed diff (vs $BASE, -U10) ====="
git diff -U10 "$BASE"...HEAD || true
echo
echo "===== Working-tree diff (staged + unstaged, -U10) ====="
git diff -U10 HEAD || true
' -- "$ARGUMENTS"`
```
Before analyzing:

- Understand what the change actually does.
- Identify the relevant files and components.
- Inspect surrounding code when necessary to understand the change.
- Inspect related callers, implementations, interfaces, and tests when necessary.
- Do not review unrelated code unless the change makes it relevant.

A hunk may contain **no findings**. Do not manufacture a finding simply because every hunk must be reviewed.

---

## Step 2 — Classify

Pick **exactly one** category for the overall change and justify it in **one sentence**:

- `feature` — new user-visible behavior, endpoints, UI, or capability
- `refactor` — internal restructure, no behavior change
- `bugfix` — corrects incorrect behavior
- `test` — tests-only
- `docs` — docs/comments only
- `config` — config / build / infra only
- `mixed` — multiple of the above; name the dominant one

---

## Step 3 — Weight the lens

Decide whether to emphasize **Clean Code**, **Gang of Four**, or **Mixed**.

State your choice and give a one-sentence rationale.

### Heuristic

- Diff introduces new classes / hierarchies / abstractions / extension points
  → **Gang of Four lens**
- Diff is mostly inline edits, naming, function shape, duplication, or local complexity
  → **Clean Code lens**
- Both
  → **Mixed**

### Clean Code reminder

Use these as review principles, not as mandatory rules that must always be satisfied.

- **Functions:** small, focused, one responsibility, consistent abstraction level.
- **Arguments:** avoid excessive arguments, output arguments, and boolean flag arguments when they obscure responsibility.
- **Names:** reveal intent, remain unambiguous, and accurately describe behavior and side effects.
- **Comments:** prefer comments that explain *why*; remove obsolete, redundant, or commented-out code.
- **General:** watch for duplication, excessive complexity, wrong abstraction levels, feature envy, excessive coupling, magic values, and Law-of-Demeter violations.
- **Polymorphism:** consider polymorphism when repeated type-based branching represents genuinely varying behavior.
- **Tests:** value fast, independent, repeatable, self-validating, timely tests and meaningful boundary-condition coverage.

### Gang of Four reminder

The 23 GoF patterns are:

**Creational:** Abstract Factory, Builder, Factory Method, Prototype, Singleton.

**Structural:** Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.

**Behavioral:** Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor.

Core principles:

- Program to an interface, not an implementation.
- Favor object composition over class inheritance.

Also consider relevant SOLID principles:

- SRP
- OCP
- LSP
- ISP
- DIP

Design smells:

- Rigidity
- Fragility
- Immobility
- Viscosity
- Needless complexity
- Needless repetition
- Opacity

### Pattern discipline

**A missing design pattern is NOT a smell by itself.**

Only report a `GOF.*-MISSING` finding when introducing the pattern would clearly reduce an existing problem such as:

- complexity
- coupling
- duplication
- rigidity
- inappropriate responsibilities
- repeated type-based branching
- difficult object creation
- awkward extension points

Do **not** recommend a pattern merely because the code structurally resembles one.

Do **not** introduce factories, strategies, adapters, decorators, or other abstractions for hypothetical future requirements.

Prefer the simplest design that adequately solves the current problem.

---

### Pattern-missing signals

Use these only as scanner heuristics. They require judgment and concrete evidence.

- Long `if`/`elif`/`match` on a type-code or enum repeated across methods
  → **Strategy** or **State**
- Client directly instantiates concrete classes from a hierarchy
  → **Factory Method** or **Abstract Factory**
- Subclass explosion combining orthogonal traits
  → **Decorator** or **Bridge**
- Polling another object for state changes or hand-rolled listener loops
  → **Observer**
- Two near-identical methods differing in only a small number of steps
  → **Template Method**
- Recursive container structures handled through repeated type checks
  → **Composite**
- Inline translation between a foreign API and the application's interface
  → **Adapter**
- Ad-hoc tuples/dicts representing deferred actions or undo operations
  → **Command**
- Index-based traversal of a custom collection
  → **Iterator**
- Clients reaching into many internals of one subsystem
  → **Facade**

Again: these are **signals**, not automatic findings.

---

## Step 4 — Analyze

Walk every relevant hunk.

For each genuine issue:

1. Identify the concrete problem.
2. Determine whether it is caused or exposed by this change.
3. Determine whether it materially affects correctness, security, reliability, maintainability, testability, coupling, or design.
4. Assign **exactly one** catalog ID.
5. Quote the smallest meaningful code excerpt.
6. Give a one-sentence explanation of why it matters.
7. Give a one-sentence recommended fix.

Do not invent catalog IDs.

Do not report an issue simply because a rule technically applies.

Before reporting any finding, ask:

> Is this actually a problem, is it caused or exposed by this change, and is fixing it worth the added complexity?

Prefer **fewer high-confidence findings** over many weak findings.

### Clean Code IDs

- **CC.C1** Inappropriate Information — non-technical information in comments
- **CC.C2** Obsolete Comment — comment no longer matches code
- **CC.C3** Redundant Comment — merely restates the code
- **CC.C5** Commented-Out Code
- **CC.F1** Too Many Arguments — more than 3 arguments when materially harmful
- **CC.F2** Output Arguments — parameters mutated as outputs
- **CC.F3** Flag Arguments — boolean parameter causes a function to perform multiple behaviors
- **CC.F4** Dead Function — function is never called
- **CC.G5** Duplication — duplicated knowledge or logic
- **CC.G6** Code at Wrong Level of Abstraction
- **CC.G8** Too Much Information — overly wide interface
- **CC.G9** Dead Code — unreachable branches or unused symbols
- **CC.G11** Inconsistency — same concept expressed in conflicting ways
- **CC.G12** Clutter — useless variables, empty constructors, useless comments, etc.
- **CC.G14** Feature Envy — method relies more heavily on another object's data than its own
- **CC.G15** Selector Arguments — magic flags that obscure behavior
- **CC.G16** Obscured Intent — magic numbers, dense expressions, cryptic names
- **CC.G19** Use Explanatory Variables — dense expressions should be clarified with meaningful intermediates
- **CC.G20** Function Names Should Say What They Do
- **CC.G23** Prefer Polymorphism to If/Else or Switch/Case — only when polymorphism actually simplifies the design
- **CC.G25** Replace Magic Numbers with Named Constants
- **CC.G28** Encapsulate Conditionals — extract complex conditions into meaningful predicates
- **CC.G29** Avoid Negative Conditionals
- **CC.G30** Functions Should Do One Thing
- **CC.G34** Functions Should Descend Only One Level of Abstraction
- **CC.G36** Avoid Transitive Navigation — Law of Demeter
- **CC.N1** Choose Descriptive Names
- **CC.N4** Unambiguous Names
- **CC.N5** Use Long Names for Long Scopes
- **CC.N7** Names Should Describe Side Effects
- **CC.T1** Insufficient Tests
- **CC.T5** Test Boundary Conditions
- **CC.T9** Tests Should Be Fast

### Gang of Four IDs — missing-pattern signals

- **GOF.STRATEGY-MISSING** — long if/elif/match on type-code or enum repeated across methods
- **GOF.FACTORY-MISSING** — client directly instantiates concrete classes from a hierarchy
- **GOF.DECORATOR-MISSING** — subclass explosion combining orthogonal traits
- **GOF.OBSERVER-MISSING** — polling or hand-rolled listener loops
- **GOF.TEMPLATE-MISSING** — near-identical methods differing in a small number of steps
- **GOF.COMPOSITE-MISSING** — recursive structures handled through repeated type checks
- **GOF.ADAPTER-MISSING** — inline translation to a foreign API
- **GOF.COMMAND-MISSING** — ad-hoc deferred actions or undo stacks
- **GOF.ITERATOR-MISSING** — index-based traversal of a custom collection
- **GOF.FACADE-MISSING** — clients touch many internals of one subsystem

### Gang of Four IDs — design smells

- **DS.RIGIDITY** — one change cascades widely
- **DS.FRAGILITY** — changes break unrelated parts
- **DS.IMMOBILITY** — components are unnecessarily difficult to extract or reuse
- **DS.VISCOSITY** — hacks are easier than the correct implementation
- **DS.NEEDLESS-COMPLEXITY** — infrastructure or abstraction is not justified by the current need
- **DS.NEEDLESS-REPETITION** — same logic or knowledge exists in multiple places
- **DS.OPACITY** — code is unnecessarily difficult to understand

### Python-specific IDs

Apply these **only to `.py` files**:

- **PY.MUTABLE-DEFAULT** — `def f(x=[])` / `def f(x={})` shares one object across calls
- **PY.CALL-IN-DEFAULT** — function call in a default argument evaluated at definition time
- **PY.BARE-EXCEPT** — bare `except:` swallows `KeyboardInterrupt` / `SystemExit`
- **PY.BROAD-EXCEPT** — broad exception handling hides bugs
- **PY.EXCEPT-PASS** — silently swallowing exceptions
- **PY.RAISE-WITHOUT-FROM** — raising a new exception in an `except` block without preserving the chain when appropriate
- **PY.NONE-EQ** — `== None` instead of `is None`
- **PY.BOOL-EQ** — `== True` / `== False`
- **PY.TYPE-EQ** — `type(x) == T` instead of `isinstance`
- **PY.RANGE-LEN** — `for i in range(len(x))` where direct iteration would be clearer
- **PY.STAR-IMPORT** — `from x import *`
- **PY.UNUSED-IMPORT** — unused import
- **PY.UNUSED-VAR** — unused local variable
- **PY.LAMBDA-NAMED** — assigning a lambda to a name instead of using `def`
- **PY.AMBIG-NAME** — ambiguous names such as `l`, `O`, or `I`
- **PY.BUILTIN-SHADOW** — rebinding built-ins such as `list`, `dict`, or `id`
- **PY.MUTABLE-CLASS-ATTR** — mutable class attribute unintentionally shared between instances
- **PY.FILE-NO-WITH** — `open()` without an appropriate context manager
- **PY.EVAL** — `eval()` on untrusted input
- **PY.EXEC** — unsafe or unnecessary `exec()`
- **PY.ASSERT-RUNTIME** — `assert` used for runtime validation
- **PY.SHELL-TRUE** — `subprocess(..., shell=True)` when unsafe or unnecessary
- **PY.PICKLE-LOAD** — loading untrusted pickle data
- **PY.YAML-LOAD** — unsafe YAML loading
- **PY.LATE-BIND** — late-binding closure in a loop
- **PY.IS-LITERAL** — `is` used with a non-singleton literal
- **PY.UNUSED-LOOP-VAR** — loop variable is never used
- **PY.PRINT-IN-LIB** — `print()` in non-CLI library code
- **PY.BLOCKING-IN-ASYNC** — blocking I/O inside `async def`
- **PY.DICT-KEYS-ITER** — unnecessary `for k in d.keys()`
- **PY.LOG-NO-EXC** — logging an exception without preserving exception information when appropriate

---

## Step 5 — Prioritize & report

### Severity definitions

- **BLOCKER** — security, correctness, data-loss, or runtime-crash risk
- **HIGH** — clearly wrong; likely to regress maintainability or behavior
- **MEDIUM** — meaningful design or maintainability weakness worth fixing now
- **LOW** — minor but worthwhile improvement
- **NIT** — style preference with little or no practical cost

Do not inflate severity.

Sort findings by severity descending, then by file path.

### Required finding format

For every finding, emit:

```markdown
### [SEVERITY] `CATALOG.ID` — `path/file.ext:line`

```language
<smallest meaningful excerpt>
````

**Why:** <one sentence explaining the concrete consequence>

**Fix:** <one sentence describing the smallest reasonable improvement>

````

Do not provide a large rewrite unless the problem genuinely requires one.

---

## Final response format

Emit **exactly this structure**:

```markdown
# Smell Report

**Base:** `<BASE>`

**Classification:** `<feature|refactor|bugfix|test|docs|config|mixed>`

**Primary lens:** `<Clean Code | Gang of Four | Mixed>`

## Summary

- Files changed: N
- Findings: X blocker, Y high, Z medium, W low, V nit
- Top risk: <one sentence>

## Findings

### [SEVERITY] `CATALOG.ID` — `path/file.ext:line`

```language
<smallest meaningful excerpt>
````

**Why:** <one sentence>

**Fix:** <one sentence>

## Synthesis

<One paragraph describing the dominant theme of the diff and the top 3 actions to take before merge.>

```

If there are no meaningful findings:

- Keep the same structure.
- Set all finding counts to zero.
- Leave the Findings section empty.
- Add:

> **No meaningful code smells found on this diff.**

- Still provide the Synthesis paragraph.

---

## Review philosophy

Follow these principles throughout the review:

1. **Correctness before aesthetics.**
2. **Evidence before criticism.**
3. **Simple solutions before patterns.**
4. **Real requirements before hypothetical requirements.**
5. **Readability beats cleverness.**
6. **Abstraction is a tool, not a goal.**
7. **Patterns are tools, not goals.**
8. **Duplication is not automatically a smell.**
9. **A missing design pattern is not automatically a defect.**
10. **Prefer minimal changes that solve the actual problem.**
11. **Do not turn working code into a framework without a concrete reason.**
12. **Do not criticize unrelated pre-existing code unless the current change makes it relevant.**
13. **A reviewed hunk may legitimately have no findings.**
14. **Prefer fewer high-confidence findings over many weak findings.**
15. **The purpose of `/smell` is to improve the codebase, not maximize the number of criticisms.**

When uncertain whether something is a genuine smell, **do not report it** unless the evidence is strong enough to justify the recommendation.

Begin now with Step 2.

