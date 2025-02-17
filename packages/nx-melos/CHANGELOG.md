## [2.0.3](https://github.com/tinesoft/nxrocks/compare/nx-melos/v2.0.2...nx-melos/v2.0.3) (2023-05-12)


### Bug Fixes

* **common:** fix dependency graph generation failure on `windows` OS ([26ef7c4](https://github.com/tinesoft/nxrocks/commit/26ef7c476cd4bc158b4df818a84be428a25c6adc)), closes [#170](https://github.com/tinesoft/nxrocks/issues/170)
* **common:** fix deprecated usage of dependency graph API ([badf089](https://github.com/tinesoft/nxrocks/commit/badf089040b31682df94c97818bf7e96201d42f9))

## [2.0.2](https://github.com/tinesoft/nxrocks/compare/nx-melos/v2.0.1...nx-melos/v2.0.2) (2023-05-06)


### Bug Fixes

* loosen `peerDependencies` on `@nx/*` to support v16.0.0 AND higher ([fb2f8df](https://github.com/tinesoft/nxrocks/commit/fb2f8df907fe9a498cc310862f08571e6c87dd6b))

## [2.0.1](https://github.com/tinesoft/nxrocks/compare/nx-melos/v2.0.0...nx-melos/v2.0.1) (2023-05-04)


### Bug Fixes

* **common:** bump version of `@nxrocks/common` for Nx 16 support ([980a86f](https://github.com/tinesoft/nxrocks/commit/980a86fe0ee16e7d0efb5578b3eef45a00ac9654)), closes [#169](https://github.com/tinesoft/nxrocks/issues/169)

# [2.0.0](https://github.com/tinesoft/nxrocks/compare/nx-melos/v1.2.0...nx-melos/v2.0.0) (2023-05-03)

### Features

- update to Nx workspace `v16.0.0` ([ab11ea8](https://github.com/tinesoft/nxrocks/commit/ab11ea89becafa9555f43527c95167827089a6e6))

### BREAKING CHANGES

- Nx `v16.x.x` is now the minimum required version to use the plugin

# [1.2.0](https://github.com/tinesoft/nxrocks/compare/nx-melos/v1.1.0...nx-melos/v1.2.0) (2023-04-10)

### Features

- **common:** add `addMavenProperty` helper and improve `xpath` matching ([9f89c08](https://github.com/tinesoft/nxrocks/commit/9f89c081eefc9bd168e964bf80416c5e7ad3289a))
- **common:** add `MavenDependency` model ([5ab8c1d](https://github.com/tinesoft/nxrocks/commit/5ab8c1d89d0cc31a997bc65d3cd7d9042604a3fc))
- **nx-ktor:** add `nx-ktor` plugin ([cb74a79](https://github.com/tinesoft/nxrocks/commit/cb74a79d23a79b1eda79c2555d092d8151cf7e49))

# [@nxrocks/nx-melos-v1.1.0](https://github.com/tinesoft/nxrocks/compare/nx-melos/v1.0.0...nx-melos/v1.1.0) (2023-02-28)

### Bug Fixes

- improve schemas of generators for a better UX in `Nx Console` ([0214736](https://github.com/tinesoft/nxrocks/commit/02147369d855247538becf7730f088765f7734d4))
- **nx-melos:** fix typo in `nx-melos.mjs` file ([6c7cff6](https://github.com/tinesoft/nxrocks/commit/6c7cff6c81740bb9384ecaa7f1bbaecd5fd611be))

# @nxrocks/nx-melos-v1.0.0 (2023-01-10)

### Features

- **nx-melos:** add `nx-melos` plugin ([4fb5da8](https://github.com/tinesoft/nxrocks/commit/4fb5da8c7883e9a8703383bcf683a533269fc047))
