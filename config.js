module.exports = {
    gitAuthor: 'Renovator <noreply@kevvlvl.renovatebot.org>',
    token: '',
    platform: 'github',
    onboardingConfig: {
        extends: ['config:base'],
    },
    repositories: [                                    // ENV RENOVATE_REPOSITORIES
        {
            repository: 'kevvlvl/ApiTestCucumber',
            baseBranches: ["feature/pom-updater"],     // ENV RENOVATE_BASE_BRANCHES
            addLabels: 'Renovated by the Renovator!',
            packageRules: [
                {
                    enabled: false,
                    matchPackagePatterns: [
                        ".*",
                    ],
                },
                {
                    enabled: true,
                    // automerge: true,
                    labels: 'Snapshot to Release',
                    matchPackagePrefixes: [
                        "io.cucumber",
                    ],
                    versioning: "loose"
                },
            ],
        },
    ],
};