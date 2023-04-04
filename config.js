module.exports = {
    gitAuthor: 'Renovator <noreply@kevvlvl.renovatebot.org>',
    platform: 'github',
    // executionTimeout: 60, // set max timeout of 60 minutes.
    persistRepoData: true,   // repo data is kept between executions. git fetch will be used instead of git clone.
    binarySource: 'gradle-wrapper',
    onboardingConfig: {
        extends: ['config:base'],
    },
    repositories: [
        {
            repository: 'kevvlvl/quarkus-carservice-api',
            // baseBranches: ["/^feature\\/.*$/"],
            addLabels: 'Renovated by the Renovator!',
            additionalReviewers:  ["kevvlvl_analyst"],
            prBodyNotes: ["Properties file changed!"],
            packageRules: [
                {
                    description: 'Match Config files',
                    matchPaths: ["**/*.properties"],
                    groupName: 'Config files'
                },
            ],
        },
        {
            repository: 'kevvlvl/quarkus-carservice-api',
            // baseBranches: ["/^feature\\/.*$/"],
            addLabels: 'Renovated by the Renovator!',
            additionalReviewers:  ["kevvlvl_teamlead"],
            prBodyNotes: ["Source Code changed!"],
            packageRules: [
                {
                    description: 'Match source code',
                    matchPaths: ["**/*.java"],
                    groupName: 'Java Source code'
                },
            ],
        }
    ],
};