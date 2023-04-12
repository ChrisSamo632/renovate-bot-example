module.exports = {
    hostRules: [{
        // Will be passed as `//gitlab.example/api/v4/projects/xxx/packages/npm/:_authToken=<TOKEN>` to `.npmrc`
        hostType: 'npm',
        matchHost: 'https://gitlab.example/api/v4/projects/xxx/packages/npm/',
        token: process.env.RENOVATE_TOKEN || process.env.CI_JOB_TOKEN
    },
    {
        hostType: 'docker',
        matchHost: 'registry.gitlab.example',
        username: process.env.CI_REGISTRY_USER,
        password: process.env.CI_REGISTRY_PASSWORD
    }
    ]
};
