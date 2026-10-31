# Changelog

## [0.5.0](https://github.com/wishboards/wishboards.app/compare/wishboards.app-v0.4.0...wishboards.app-v0.5.0) (2026-10-31)


### Features

* **deps:** package dependency updates for deployment ([c22c9f3](https://github.com/wishboards/wishboards.app/commit/c22c9f393bc5da280621a8b086ab8739bdee7459))

## [0.4.0](https://github.com/wishboards/wishboards.app/compare/wishboards.app-v0.3.0...wishboards.app-v0.4.0) (2026-10-14)


### Features

* **a11y:** validate WCAG 2.1 AA accessibility and add automated axe-core testing ([#25](https://github.com/wishboards/wishboards.app/issues/25)) ([147952f](https://github.com/wishboards/wishboards.app/commit/147952fa5ea0f2e626ff0a931ca85322dc20acde))

## [0.3.0](https://github.com/wishboards/wishboards.app/compare/wishboards.app-v0.2.1...wishboards.app-v0.3.0) (2026-10-13)


### Features

* highlight local accounts and wishmail, replace thermal printer mentions with opencv card scanner ([#21](https://github.com/wishboards/wishboards.app/issues/21)) ([029c5f7](https://github.com/wishboards/wishboards.app/commit/029c5f70a102eb4a6888874f7b3c8bd732f6e82c))

## [0.2.1](https://github.com/wishboards/wishboards.app/compare/wishboards.app-v0.2.0...wishboards.app-v0.2.1) (2026-10-12)


### Bug Fixes

* **cfn:** scope cloudfront iam arns and enable s3 versioning with lifecycle rule ([#5](https://github.com/wishboards/wishboards.app/issues/5)) ([c274d9f](https://github.com/wishboards/wishboards.app/commit/c274d9f5b201fabd5cbbb27f784abae5dc4a2472))
* **ci:** pin third-party actions to full commit sha hashes ([#4](https://github.com/wishboards/wishboards.app/issues/4)) ([e248fc1](https://github.com/wishboards/wishboards.app/commit/e248fc13dcaeaf6a9bef81749f06b6ad0a99ae1c))
* **ci:** support github org and repo id format in oidc trust policy ([#9](https://github.com/wishboards/wishboards.app/issues/9)) ([853022c](https://github.com/wishboards/wishboards.app/commit/853022c7fa48e02f4361a489097846c78acd7461))
* **ci:** use env context instead of secrets in release step conditions ([#6](https://github.com/wishboards/wishboards.app/issues/6)) ([7408172](https://github.com/wishboards/wishboards.app/commit/74081722e0ad48d489fb6ead9d201078c90b8a23))
* **ci:** use RELEASE_PLEASE_PAT secret and v5 action for release workflow ([#7](https://github.com/wishboards/wishboards.app/issues/7)) ([b13f8a5](https://github.com/wishboards/wishboards.app/commit/b13f8a55215d54841e4c15d5b694276ad4963da0))
* **quality:** resolve sonarcloud accessibility, security, and pipeline issues ([#3](https://github.com/wishboards/wishboards.app/issues/3)) ([c2ac609](https://github.com/wishboards/wishboards.app/commit/c2ac609247550628398e5fd9c39715773cafe9fd))

## [0.2.0](https://github.com/wishboards/wishboards.app/compare/wishboards.app-v0.1.0...wishboards.app-v0.2.0) (2026-10-12)


### Features

* ground matching demo in actual rule engine and configure release-please deploy pipeline ([8015204](https://github.com/wishboards/wishboards.app/commit/80152049c0844a30922adf0427b634ba1360c1f0))
* initialize wishboards.app landing page with interactive sandbox and AWS SAM infrastructure ([7cc8a91](https://github.com/wishboards/wishboards.app/commit/7cc8a91c9080bf930859739609702cbf8476ed39))


### Bug Fixes

* **deps:** regenerate clean package-lock for CI npm ci ([a9ee092](https://github.com/wishboards/wishboards.app/commit/a9ee092f3e1fc0c448078cb50c8f5f353f7089c8))
