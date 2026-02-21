---
name: skill-creator
description: Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Claude's capabilities with specialized knowledge, workflows, or tool integrations.
---

# Skill Creator

This skill provides guidance for creating effective skills.

## About Skills

Skills are modular, self-contained packages that extend Claude's capabilities by providing
specialized knowledge, workflows, and tools. Think of them as "onboarding guides" for specific
domains or tasks—they transform Claude from a general-purpose agent into a specialized agent
equipped with procedural knowledge that no model can fully possess.

### What Skills Provide

1. Specialized workflows - Multi-step procedures for specific domains
2. Tool integrations - Instructions for working with specific file formats or APIs
3. Domain expertise - Company-specific knowledge, schemas, business logic
4. Bundled resources - Scripts, references, and assets for complex and repetitive tasks

## Core Principles

### Concise is Key

The context window is a public good. Skills share the context window with everything else Claude needs: system prompt, conversation history, other Skills' metadata, and the actual user request.

**Default assumption: Claude is already very smart.** Only add context Claude doesn't already have. Challenge each piece of information: "Does Claude really need this explanation?" and "Does this paragraph justify its token cost?"

Prefer concise examples over verbose explanations.

### Set Appropriate Degrees of Freedom

Match the level of specificity to the task's fragility and variability:

**High freedom (text-based instructions)**: Use when multiple approaches are valid, decisions depend on context, or heuristics guide the approach.

**Medium freedom (pseudocode or scripts with parameters)**: Use when a preferred pattern exists, some variation is acceptable, or configuration affects behavior.

**Low freedom (specific scripts, few parameters)**: Use when operations are fragile and error-prone, consistency is critical, or a specific sequence must be followed.

### Anatomy of a Skill

Every skill consists of a required SKILL.md file and optional bundled resources:

```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter metadata (required)
│   │   ├── name: (required)
│   │   ├── description: (required)
│   │   └── compatibility: (optional, rarely needed)
│   └── Markdown instructions (required)
└── Bundled Resources (optional)
    ├── scripts/          - Executable code (Python/Bash/etc.)
    ├── references/       - Documentation intended to be loaded into context as needed
    └── assets/           - Files used in output (templates, images, fonts, etc.)
```

#### SKILL.md (required)

- **Frontmatter** (YAML): Contains `name` and `description` fields (required). Only `name` and `description` are read by Claude to determine when the skill triggers, so be clear and comprehensive about what the skill is and when it should be used.
- **Body** (Markdown): Instructions and guidance for using the skill. Only loaded AFTER the skill triggers.

#### Bundled Resources (optional)

##### Scripts (`scripts/`)

Executable code for tasks that require deterministic reliability or are repeatedly rewritten.

##### References (`references/`)

Documentation and reference material intended to be loaded as needed into context.

- Keeps SKILL.md lean, loaded only when Claude determines it's needed
- If files are large (>10k words), include grep search patterns in SKILL.md
- Avoid duplication: information should live in either SKILL.md or references files, not both

##### Assets (`assets/`)

Files not intended to be loaded into context, but rather used within the output Claude produces (templates, images, boilerplate code, etc.).

#### What to Not Include

Do NOT create extraneous documentation or auxiliary files (README.md, INSTALLATION_GUIDE.md, CHANGELOG.md, etc.). Only include essential files that directly support functionality.

### Progressive Disclosure

Skills use a three-level loading system:

1. **Metadata (name + description)** - Always in context (~100 words)
2. **SKILL.md body** - When skill triggers (<5k words)
3. **Bundled resources** - As needed (unlimited since scripts can execute without reading into context)

Keep SKILL.md under 500 lines. Split content into separate reference files when approaching this limit, and clearly reference them from SKILL.md.

## Skill Creation Process

1. **Understand** the skill with concrete examples
2. **Plan** reusable skill contents (scripts, references, assets)
3. **Initialize** the skill directory structure
4. **Edit** — implement resources and write SKILL.md
5. **Iterate** based on real usage

### Step 1: Understanding with Concrete Examples

To create an effective skill, clearly understand concrete examples of how the skill will be used. Ask questions like:
- "What functionality should the skill support?"
- "Can you give some examples of how this skill would be used?"
- "What would a user say that should trigger this skill?"

### Step 2: Planning Reusable Contents

Analyze each example by considering how to execute it from scratch, and identifying what scripts, references, and assets would be helpful when executing these workflows repeatedly.

### Step 3: Initialize the Skill

Create the skill directory with SKILL.md and any needed subdirectories (scripts/, references/, assets/).

### Step 4: Edit the Skill

Remember that the skill is being created for another instance of Claude to use. Include information that would be beneficial and non-obvious to Claude.

**Frontmatter guidelines:**
- `name`: The skill name
- `description`: Primary triggering mechanism. Include both what the skill does AND specific triggers/contexts for when to use it. Include all "when to use" info here, not in the body (the body only loads after triggering).

**Body guidelines:**
- Use imperative/infinitive form
- Keep under 500 lines
- Split longer content into reference files

### Step 5: Iterate

1. Use the skill on real tasks
2. Notice struggles or inefficiencies
3. Update SKILL.md or bundled resources
4. Test again
