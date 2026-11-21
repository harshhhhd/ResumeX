# InterviewReady Low Level Design: skill for your AI

This skill lets your AI coding assistant rebuild your code with what the InterviewReady Low Level Design course teaches. It reads your project, works out what you are building, suggests design changes grounded in the course, and changes the code only after you approve each strategic decision.

What is inside:

- SKILL.md: the workflow (understand, diagnose, suggest, change, report) and the course's knowledge: the yardstick, principles, when to use each pattern, concurrency options, testing habits and red flags.
- references/: every lesson of the course in order, with notes and full transcripts, plus every quiz with answers.
- assets/: summary PDFs, diagrams and source code.

How to use it:

- Claude Code: unzip into ~/.claude/skills/ so you have ~/.claude/skills/interviewready-low-level-design/SKILL.md, then open your project.
- Claude (claude.ai or the desktop app): Settings, Capabilities, Skills, upload this ZIP.
- Any other assistant: give it SKILL.md as instructions and the references folder as files.

Then ask, in your project: "This class keeps growing, help me redesign it", "I need to add timed games, how should the design change?", "Review the design of my notification service".

Watch the lessons: https://interviewready.io/course-page/low-level-design-course
