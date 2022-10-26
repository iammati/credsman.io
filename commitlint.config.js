module.exports = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                '⚒️ build',
                '♻️ chore',
                '📄 misc',
                '📚 docs',
                '✨ feat',
                '🐛 fix',
                '🚀 perf',
                '📦 refactor',
                '🔙 revert',
                '💎 style',
                '🚨 test',
            ],
        ],
    },
    prompt: {
        questions: {
            type: {
                description:
                    'Select the type of change that you are about to commit',
                enum: {
                    '✨ feat': {
                        description: '✨ A new feature',
                        title: 'Features',
                        emoji: '✨',
                    },
                    '🐛 fix': {
                        description: ' 🐛 A (bug) fix',
                        title: 'Bug Fixes',
                        emoji: '🐛',
                    },
                    '📚 docs': {
                        description: ' 📚 Documentation only changes',
                        title: 'Documentation',
                        emoji: '📚',
                    },
                    '💎 style': {
                        description:
                            ' 💎 Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
                        title: 'Styles',
                        emoji: '💎',
                    },
                    '📦 refactor': {
                        description:
                            ' 📦 A code change that neither fixes a bug nor adds a feature',
                        title: 'Code Refactoring',
                        emoji: '📦',
                    },
                    '🚀 perf': {
                        description:
                            ' 🚀 A code change that improves performance',
                        title: 'Performance Improvements',
                        emoji: '🚀',
                    },
                    '🚨 test': {
                        description:
                            ' 🚨 Add missing test(s) or correcting existing test(s)',
                        title: 'Tests',
                        emoji: '🚨',
                    },
                    '⚒️ build': {
                        description:
                            ' ⚒️ Changes that affect the build system or external dependencies (example scopes: pnpm, vite, webpack)',
                        title: 'Builds',
                        emoji: '⚒️',
                    },
                    '♻️ chore': {
                        description:
                            ' ♻️ Other changes that do not modify source or test files',
                        title: 'Chores',
                        emoji: '♻️',
                    },
                    '📄 misc': {
                        description:
                            ' 📄 Changes which affect several source code changes and or config changes',
                        title: 'Misc',
                        emoji: '📄',
                    },
                    '🔙 revert': {
                        description: ' 🔙 Reverts a previous commit',
                        title: 'Reverts',
                        emoji: '🔙',
                    },
                },
            },
            scope: {
                description:
                    'What is the scope of this change (e.g. component or file name)',
            },
            subject: {
                description:
                    'Write a short, imperative tense description of the change',
            },
            body: {
                description: 'Provide a longer description of the change',
            },
            isBreaking: {
                description: 'Are there any breaking changes?',
            },
            breakingBody: {
                description:
                    'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
            },
            breaking: {
                description: 'Describe the breaking changes',
            },
            isIssueAffected: {
                description: 'Does this change affect any open issues?',
            },
            issuesBody: {
                description:
                    'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
            },
            issues: {
                description: 'Add issue references (e.g. "refs: #123")',
            },
        },
    },
}
