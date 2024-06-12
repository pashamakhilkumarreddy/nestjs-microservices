# Contributing

👋 Hello and thanks for your interest in contributing to NestJS Microservices. We welcome contributions from anyone!

## Code Contributions

Check out the [README](./README.md) document for pre-requisites and instructions on how to get started with NestJS Microservices.

Follow these steps when authoring your PR:

### 📝 Authoring Your PR

-   Ensure your branch is up-to-date with the latest code from the `main` branch to prevent regressions and conflicts.
-   Write your PR title using the semantic commit format as outlined in the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification. Craft a clear and informative title that communicates the nature of your change.
-   Complete the PR title and description in the pull request template.
-   The title and description will be used in the changelog and Git history, so provide detailed context for future maintainers.
-   Link to relevant Jira tickets, Slack threads, other PRs, or external sources that provide context for your change. However, these should not replace a well-written PR description. If a source provides all necessary context, feel free to copy it into the PR description.

### Providing Testing Instructions

-   Provide test links and steps to verify the effects of your change. Use QA tools to demonstrate the impact of your PR, and provide a brief description of what to look for in each link.
-   If reviewers need to view the code locally, provide necessary links and additional steps (e.g., setting environment variables, running scripts).

### Merging Your PR

-   When merging, use your PR title as the commit title and the PR description as the commit body.
-   All merges to `main` are automatically pushed to production. Verify that your work appears as expected in the production environment following deployment.

## Code Review Process Guidelines

### Guidelines for Everyone

-   Approach code reviews positively, aiming to improve the codebase collectively.
-   Ask constructive questions without making demands. ("What do you think about naming this `userId`?")
-   Avoid judgement and assumptions about the author's perspective.
-   Ask for clarification if needed. ("I didn't understand. Can you clarify?")
-   Avoid selective ownership of code (terms like "mine", "not mine", "yours").
-   Avoid terms referring to personal traits ("dumb", "stupid"). Assume everyone is intelligent and well-meaning.
-   Be explicit, as online intentions can be misunderstood.
-   Be humble. ("I'm not sure - let's look it up.")
-   If too many comments are unclear or suggest alternatives, consider discussing synchronously (chat, screensharing, in person) and summarize the discussion for historical reference.

### Guidelines for Authors

-   Prefer smaller, focused PRs. Aim to scope changes to one feature or part of the system. Smaller PRs are easier to review and less prone to regressions. If a PR is large or touches many components, you may be asked to break it into smaller PRs.
-   If unsure about structuring a change, seek guidance from the team or relevant channels.
-   If multiple changes are necessary in a single branch for external review, ease the review process as much as possible (e.g., using discrete commits for each feature or creating smaller PRs for developer review).
-   Inform your team when you need a review and be proactive about getting your code merged. Merge your code if it has the necessary approvals.
-   If a reviewer's comments are outside the PR scope, consider extracting those changes into future tickets.
-   Review your own code with attention to detail and test it thoroughly. Ensure changes work as expected across all relevant configurations.
-   Be grateful for reviewers' suggestions. ("Good call. I'll make that change.")
-   All reviews are welcome. Seek to understand the reviewer's perspective, acknowledging different insights and team perspectives.
-   Remember: "The review is of the code, not you." Misinterpretations of feedback are common. If feedback seems personal, ask for clarification of intent.
-   Assume the best intentions from reviewers' comments.
-   Push feedback-based commits as isolated commits. Do not squash until the branch is ready to merge. Reviewers should be able to track individual updates.
-   Respond to every comment, allowing the original commenter to "resolve" the conversation in GitHub.

### Guidelines for Reviewers

-   Understand why the change is necessary (bug fix, user experience improvement, refactor). Ask for context if not provided.
-   Communicate the importance of your comments or requested changes.
-   If blocking a PR, clarify which changes are blocking and which are suggestions. Authors should know how to address the issues.
-   Prefix comments to indicate their importance (e.g., `Nit: this variable name seems too generic`, `Blocking: if the input is x, this will fail`).
-   Prioritize bugs, tests, and code quality over subjective issues (e.g., coding style).
-   Identify ways to simplify the code while solving the problem.
-   Offer alternative implementations but assume the author considered them. ("What do you think about using a custom validator here?")
-   Move philosophical or academic discussions offline (e.g., tech sustainability meetings). Let the author decide on alternative implementations.
-   Seek to understand the author's perspective.
-   Ask for additional reviews if unsure.
-   Run changes locally or in a QA environment to confirm they work as expected.
