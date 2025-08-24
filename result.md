Explanation:
module /Users/next-user/src/magic-ui/pages/index.js 24 s (total 33 s, self 163 ms) [read-resource 873 µs, next-babel-turbo-loader 135 ms]
       ════════╤═══════════════════════════════════ ═╤═        ═╤═       ═╤════   ═══════════╤════════════════════════════════════════
               └─ name of the processed module       │          │         │                  └─ timings of nested steps
                                                     │          │         └─ building the module itself (including overlapping parallel actions)
                                                     │          └─ total build time of this modules and all nested ones (including overlapping parallel actions)
                                                     └─ how long until the module and all nested modules took compiling (wall time, without overlapping actions)

module lodash (lodash/camelCase.js + 281) 295 ms (self 958 ms) [read-resource 936 ms]
       ═╤════  ══════╤════════════   ═╤═
        │            │                └─ number of modules that are merged into that line
        │            └─ first module that is imported
        └─ npm package name


next-build 19 s
├─ generate-buildid 183 µs
├─ load-custom-routes 254 µs
├─ create-dist-dir 649 µs
├─ create-pages-mapping 325 µs
├─ collect-app-files 1.8 ms
├─ create-app-mapping 652 µs
├─ create-app-layouts 473 µs
├─ generate-route-types 3.6 ms
├─ collect-default-files 286 µs
├─ public-dir-conflict-check 300 µs
├─ generate-routes-manifest 13 ms
├─ run-webpack-compiler 7.6 s
│  ├─ generate-webpack-config 269 ms
│  ├─ server compilation 1.2 s
│  │  ├─ next-trace-entrypoint-plugin 1.2 s (self 1.7 ms)
│  │  │  ├─ finish-modules 71 ms
│  │  │  │  ├─ get-entries 319 µs
│  │  │  │  ├─ node-file-trace-plugin 66 ms
│  │  │  │  └─ collect-traced-files 484 µs
│  │  │  └─ create-trace-assets 1.2 ms
│  │  ├─ make 831 ms
│  │  │  ├─ entry next/dist/pages/_app
│  │  │  │  └─ module next (next/dist/pages/_app.js + 1) 429 ms (total 94 ms, self 82 ms) [build-module 214 µs]
│  │  │  │     └─ module @swc/helpers (@swc/helpers/cjs/_interop_require_default.cjs) 27 ms
│  │  │  ├─ entry page next/dist/pages/_error&absoluteAppPath=next/dist/pages/_app&absoluteDocumentPath=next/dist/pages/_document&middlewareConfigBase64=e30=
│  │  │  │  └─ build-module 487 ms (self 45 ms)
│  │  │  │     ├─ module next (next/dist/server/route-kind.js) 11 ms
│  │  │  │     ├─ module next (next/dist/pages/_error.js + 7) 318 ms (total 38 ms, self 148 ms)
│  │  │  │     │  └─ module @swc/helpers (@swc/helpers/cjs/_interop_require_wildcard.cjs) 32 ms
│  │  │  │     ├─ module next (next/dist/build/templates/helpers.js) 12 ms
│  │  │  │     ├─ module next (next/dist/server/route-modules/pages/module.compiled.js) 27 ms (total 12 ms, self 12 ms)
│  │  │  │     │  └─ module next/dist/compiled/next-server/pages.runtime.prod.js 38 µs
│  │  │  │     └─ module next (next/dist/server/route-modules/pages/pages-handler.js + 49) 41 ms (total 17 ms, self 998 ms)
│  │  │  │        └─ module ../../../shared/lib/no-fallback-error.external 25 µs
│  │  │  ├─ entry next-app-loader?page=%2F_not-found%2Fpage&name=app%2F_not-found%2Fpage&pagePath=%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fbuiltin%2Fglobal-not-found.js&appDir=%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fsrc%2Fapp&appPaths=%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fbuiltin%2Fglobal-not-found&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!
│  │  │  │  └─ build-module 519 ms (self 151 ms)
│  │  │  │     ├─ build-module 40 µs
│  │  │  │     ├─ build-module 13 µs
│  │  │  │     ├─ build-module 8 µs
│  │  │  │     ├─ module next/dist/shared/lib/no-fallback-error.external 9 µs
│  │  │  │     ├─ module next (next/dist/server/route-kind.js) 2.2 ms
│  │  │  │     ├─ module next (next/dist/server/request-meta.js) 24 ms
│  │  │  │     ├─ module next (next/dist/server/lib/trace/tracer.js + 2) 4.3 ms (self 76 ms)
│  │  │  │     ├─ module next (next/dist/server/lib/trace/constants.js) 5.3 ms
│  │  │  │     ├─ module next (next/dist/lib/constants.js) 33 ms
│  │  │  │     ├─ module next (next/dist/server/send-payload.js + 4) 38 ms (self 128 ms)
│  │  │  │     ├─ module next (next/dist/server/render-result.js + 24) 35 ms (self 413 ms)
│  │  │  │     ├─ module next (next/dist/server/app-render/interop-default.js) 32 ms
│  │  │  │     ├─ module next (next/dist/server/instrumentation/utils.js) 31 ms
│  │  │  │     ├─ module next (next/dist/server/app-render/strip-flight-headers.js) 39 ms
│  │  │  │     ├─ module next (next/dist/server/app-render/encryption-utils.js) 49 ms
│  │  │  │     ├─ module next (next/dist/server/app-render/action-utils.js + 6) 95 ms (total 37 ms, self 123 ms)
│  │  │  │     │  └─ module ./work-async-storage.external 21 µs
│  │  │  │     ├─ module next (next/dist/server/app-render/entry-base.js + 71) 268 ms (total 40 ms, self 1.7 s) [build-module 17 µs]
│  │  │  │     │  ├─ module ./work-unit-async-storage.external 8 µs
│  │  │  │     │  ├─ module ../app-render/action-async-storage.external 4 µs
│  │  │  │     │  ├─ module ../app-render/dynamic-access-async-storage.external 16 µs
│  │  │  │     │  └─ module ../app-render/after-task-async-storage.external 14 µs
│  │  │  │     ├─ module next (next/dist/server/lib/streaming-metadata.js + 2) 37 ms (self 50 ms)
│  │  │  │     ├─ module next (next/dist/server/lib/server-action-request-meta.js) 38 ms
│  │  │  │     ├─ module next (next/dist/lib/fallback.js) 37 ms
│  │  │  │     ├─ module next (next/dist/client/components/redirect-status-code.js) 7.9 ms
│  │  │  │     ├─ module next (next/dist/client/components/app-router-headers.js) 8.6 ms
│  │  │  │     ├─ module next (next/dist/server/response-cache/index.js + 4) 37 ms (self 160 ms)
│  │  │  │     ├─ module next (next/dist/server/route-modules/app-page/module.compiled.js) 70 ms (total 54 ms, self 54 ms)
│  │  │  │     │  └─ module next/dist/compiled/next-server/app-page.runtime.prod.js 34 µs
│  │  │  │     ├─ module next (next/dist/server/base-http/node.js + 5) 55 ms (self 211 ms)
│  │  │  │     ├─ module next (next/dist/server/request/fallback-params.js + 9) 53 ms (self 160 ms)
│  │  │  │     ├─ module next (next/dist/server/lib/experimental/ppr.js) 51 ms
│  │  │  │     ├─ module next (next/dist/client/components/builtin/global-error.js + 1) 11 ms (self 50 ms)
│  │  │  │     ├─ module next (next/dist/client/components/builtin/not-found.js + 2) 8.7 ms (self 22 ms)
│  │  │  │     ├─ module next (next/dist/client/components/builtin/forbidden.js) 9.7 ms
│  │  │  │     ├─ module next (next/dist/client/components/builtin/unauthorized.js) 8.9 ms
│  │  │  │     ├─ module next (next/dist/server/stream-utils/encoded-tags.js) 52 ms
│  │  │  │     └─ module /Users/kiyo/Projects/panda-lab/src/app/layout.tsx 163 ms (total 33 ms, self 32 ms)
│  │  │  │        └─ module /Users/kiyo/Projects/panda-lab/src/app/globals.css 803 µs
│  │  │  ├─ entry next-app-loader?page=%2Fpage&name=app%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fsrc%2Fapp&appPaths=%2Fpage&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!
│  │  │  │  └─ build-module 611 ms (self 150 ms)
│  │  │  │     └─ module /Users/kiyo/Projects/panda-lab/src/app/page.tsx 263 ms (total 53 ms, self 32 ms)
│  │  │  │        └─ module /Users/kiyo/Projects/panda-lab/styled-system/css/index.mjs 23 ms (total 21 ms, self 1.7 ms)
│  │  │  │           ├─ module /Users/kiyo/Projects/panda-lab/styled-system/css/cx.mjs 2.5 ms
│  │  │  │           ├─ module /Users/kiyo/Projects/panda-lab/styled-system/css/sva.mjs 12 ms (total 8.1 ms, self 2.9 ms)
│  │  │  │           │  └─ module /Users/kiyo/Projects/panda-lab/styled-system/helpers.mjs 5.2 ms
│  │  │  │           ├─ module /Users/kiyo/Projects/panda-lab/styled-system/css/css.mjs 6.8 ms (total 4.4 ms, self 3.1 ms)
│  │  │  │           │  └─ module /Users/kiyo/Projects/panda-lab/styled-system/css/conditions.mjs 1.4 ms
│  │  │  │           └─ module /Users/kiyo/Projects/panda-lab/styled-system/css/cva.mjs 3.9 ms
│  │  │  └─ entry next/dist/pages/_document
│  │  │     └─ module next (next/dist/pages/_document.js + 25) 80 ms (self 366 ms)
│  │  ├─ build-module 1.5 ms
│  │  ├─ build-module 107 µs
│  │  ├─ build-module 80 ms (self 562 µs)
│  │  │  ├─ module next (next/dist/client/components/builtin/global-error.js + 1) 4 ms (self 14 ms)
│  │  │  ├─ module next (next/dist/client/components/client-page.js + 3) 3.5 ms (self 32 ms)
│  │  │  ├─ module next (next/dist/client/components/client-segment.js + 10) 2.9 ms (self 59 ms)
│  │  │  ├─ module next (next/dist/client/components/layout-router.js + 49) 69 ms (total 41 ms, self 263 ms)
│  │  │  │  └─ module @swc/helpers (@swc/helpers/esm/_interop_require_default.js) 30 ms
│  │  │  ├─ module next (next/dist/client/components/render-from-template-context.js + 3) 68 ms (total 32 ms, self 28 ms)
│  │  │  │  └─ module @swc/helpers (@swc/helpers/esm/_interop_require_wildcard.js) 30 ms
│  │  │  ├─ module next (next/dist/lib/framework/boundary-components.js + 1) 5.5 ms (self 7.8 ms)
│  │  │  ├─ module next (next/dist/client/components/http-access-fallback/error-boundary.js + 4) 6.3 ms (self 42 ms)
│  │  │  ├─ module next (next/dist/client/components/metadata/async-metadata.js) 5 ms
│  │  │  └─ module next (next/dist/lib/metadata/generate/icon-mark.js) 7.2 ms
│  │  ├─ build-module 476 µs
│  │  ├─ build-module 77 µs
│  │  ├─ build-module 77 µs
│  │  ├─ seal 286 ms
│  │  │  ├─ chunk-graph 6.2 ms
│  │  │  ├─ optimize 12 ms
│  │  │  ├─ optimize-modules 20 µs
│  │  │  ├─ optimize-chunks 7.5 ms
│  │  │  ├─ optimize-tree 110 µs
│  │  │  ├─ optimize-chunk-modules 4.5 ms
│  │  │  ├─ module-hash 7.9 ms
│  │  │  ├─ code-generation 36 ms
│  │  │  ├─ hash 6.2 ms
│  │  │  ├─ code-generation-jobs 417 µs
│  │  │  ├─ module-assets 163 µs
│  │  │  └─ create-chunk-assets 5.2 ms
│  │  ├─ minify-webpack-plugin-optimize 180 ms
│  │  │  ├─ minify-js 27 ms
│  │  │  ├─ minify-js 51 ms
│  │  │  ├─ minify-js 23 ms
│  │  │  ├─ minify-js 26 ms
│  │  │  ├─ minify-js 19 ms
│  │  │  ├─ minify-js 20 ms
│  │  │  ├─ minify-js 164 ms
│  │  │  └─ minify-js 37 ms
│  │  └─ css-minimizer-plugin 170 µs
│  ├─ emit 4.5 ms
│  ├─ webpack-close 223 ms (self 221 ms)
│  │  └─ webpack-generate-error-stats 1.7 ms
│  ├─ edge-server compilation 10 ms
│  │  ├─ make 192 µs
│  │  ├─ seal 8.1 ms
│  │  │  ├─ chunk-graph 29 µs
│  │  │  ├─ optimize 695 µs
│  │  │  ├─ optimize-modules 6 µs
│  │  │  ├─ optimize-chunks 254 µs
│  │  │  ├─ optimize-tree 6 µs
│  │  │  ├─ optimize-chunk-modules 156 µs
│  │  │  ├─ module-hash 58 µs
│  │  │  ├─ code-generation 23 µs
│  │  │  ├─ hash 163 µs
│  │  │  ├─ code-generation-jobs 108 µs
│  │  │  ├─ module-assets 54 µs
│  │  │  └─ create-chunk-assets 30 µs
│  │  ├─ minify-webpack-plugin-optimize 1.1 ms
│  │  │  └─ minify-js 653 µs
│  │  └─ css-minimizer-plugin 82 µs
│  ├─ emit 683 µs
│  ├─ webpack-close 39 ms (self 38 ms)
│  │  └─ webpack-generate-error-stats 308 µs
│  ├─ client compilation 4.2 s
│  │  ├─ make 3.6 s
│  │  │  ├─ entry next/dist/client/next.js
│  │  │  │  └─ module next (next/dist/client/next.js + 61) 3.5 s (total 120 ms, self 2 s) [build-module 98 µs]
│  │  │  │     ├─ module @swc/helpers (@swc/helpers/esm/_interop_require_wildcard.js) 3 ms
│  │  │  │     └─ module react-dom (react-dom/client.js + 3) 3.3 s (total 108 ms, self 2 s)
│  │  │  │        ├─ module next (next/dist/build/polyfills/process.js + 1) 6.8 ms (self 12 ms)
│  │  │  │        └─ module scheduler (scheduler/index.js + 1) 6.1 ms (self 12 ms)
│  │  │  ├─ entry next/dist/client/app-next.js
│  │  │  │  └─ module next (next/dist/client/app-next.js + 69) 3.5 s (total 35 ms, self 6.3 s)
│  │  │  │     ├─ module @swc/helpers (@swc/helpers/esm/_interop_require_default.js) 11 ms
│  │  │  │     ├─ module @swc/helpers (@swc/helpers/esm/_class_private_field_loose_key.js) 8.4 ms
│  │  │  │     └─ module @swc/helpers (@swc/helpers/esm/_class_private_field_loose_base.js) 6 ms
│  │  │  ├─ entry next-flight-client-entry-loader?modules=%7B%22request%22%3A%22%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fbuiltin%2Fglobal-error.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-segment.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fhttp-access-fallback%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fasync-metadata.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Flib%2Fframework%2Fboundary-components.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Flib%2Fmetadata%2Fgenerate%2Ficon-mark.js%22%2C%22ids%22%3A%5B%5D%7D&server=false!
│  │  │  │  └─ build-module 160 ms (self 1.7 ms)
│  │  │  │     ├─ module next (next/dist/client/components/client-page.js + 6) 5.1 ms (self 169 ms)
│  │  │  │     ├─ module next (next/dist/client/components/client-segment.js) 8.5 ms
│  │  │  │     ├─ module next (next/dist/client/components/layout-router.js + 43) 19 ms (self 3.3 s)
│  │  │  │     ├─ module next (next/dist/client/components/render-from-template-context.js + 7) 139 ms (total 16 ms, self 3.4 s)
│  │  │  │     │  └─ module @swc/helpers (@swc/helpers/esm/_interop_require_wildcard.js) 12 ms
│  │  │  │     ├─ module next (next/dist/lib/framework/boundary-components.js + 1) 20 ms (self 23 ms)
│  │  │  │     ├─ module next (next/dist/client/components/builtin/global-error.js + 1) 5.4 ms (self 16 ms)
│  │  │  │     ├─ module next (next/dist/client/components/http-access-fallback/error-boundary.js + 4) 9.4 ms (self 126 ms)
│  │  │  │     ├─ module next (next/dist/client/components/metadata/async-metadata.js) 12 ms
│  │  │  │     └─ module next (next/dist/lib/metadata/generate/icon-mark.js) 14 ms
│  │  │  ├─ entry next-client-pages-loader?absolutePagePath=next%2Fdist%2Fpages%2F_app&page=%2F_app!
│  │  │  │  └─ build-module 254 ms (self 2.1 ms)
│  │  │  │     ├─ next-client-pages-loader 146 µs
│  │  │  │     └─ module next (next/dist/pages/_app.js + 1) 239 ms (total 235 ms, self 34 ms)
│  │  │  │        ├─ module react (react/jsx-runtime.js + 1) 112 ms (self 269 ms)
│  │  │  │        ├─ module @swc/helpers (@swc/helpers/esm/_interop_require_default.js) 1.9 ms
│  │  │  │        └─ module react (react/index.js + 1) 110 ms (self 266 ms)
│  │  │  ├─ entry next/dist/client/router.js
│  │  │  │  └─ module next (next/dist/client/router.js + 26) 15 ms (self 2.5 s)
│  │  │  ├─ entry next-client-pages-loader?absolutePagePath=next%2Fdist%2Fpages%2F_error&page=%2F_error!
│  │  │  │  └─ build-module 34 ms (self 263 µs)
│  │  │  │     ├─ next-client-pages-loader 24 µs
│  │  │  │     └─ module next (next/dist/pages/_error.js + 5) 20 ms (self 116 ms)
│  │  │  ├─ entry next-client-pages-loader?absolutePagePath=%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fbuiltin%2Fglobal-not-found.js&page=%2F_not-found%2Fpage!
│  │  │  │  └─ build-module 26 ms (self 289 µs)
│  │  │  │     ├─ next-client-pages-loader 43 µs
│  │  │  │     └─ module next (next/dist/client/components/builtin/global-not-found.js + 2) 12 ms (self 98 ms)
│  │  │  ├─ entry next-flight-client-entry-loader?modules=%7B%22request%22%3A%22%2FUsers%2Fkiyo%2FProjects%2Fpanda-lab%2Fsrc%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&server=false!
│  │  │  │  └─ build-module 3.6 s (self 208 µs)
│  │  │  │     └─ module /Users/kiyo/Projects/panda-lab/src/app/globals.css 3.3 s (total 6.4 s) [build-module 222 µs]
│  │  │  │        └─ module /Users/kiyo/Projects/panda-lab/src/app/globals.css 3.2 s (total 3.2 s, self 3.2 s) [postcss-loader 3 s, css-loader 82 ms]
│  │  │  │           └─ module next (next/dist/build/webpack/loaders/css-loader/src/runtime/api.js) 6.5 ms
│  │  │  └─ entry next-flight-client-entry-loader?server=false!
│  │  │     └─ build-module 239 µs
│  │  ├─ seal 636 ms
│  │  │  ├─ chunk-graph 7.2 ms
│  │  │  ├─ optimize 9.5 ms
│  │  │  ├─ optimize-modules 10 µs
│  │  │  ├─ optimize-chunks 7.2 ms
│  │  │  ├─ optimize-tree 23 µs
│  │  │  ├─ optimize-chunk-modules 684 µs
│  │  │  ├─ module-hash 15 ms
│  │  │  ├─ code-generation 18 ms
│  │  │  ├─ hash 7.7 ms
│  │  │  ├─ code-generation-jobs 392 µs
│  │  │  ├─ module-assets 127 µs
│  │  │  └─ create-chunk-assets 10 ms
│  │  ├─ NextJsBuildManifest-createassets 4.1 ms
│  │  ├─ NextJsBuildManifest-generateClientManifest 2.8 ms
│  │  ├─ minify-webpack-plugin-optimize 380 ms
│  │  │  ├─ minify-js 198 ms
│  │  │  ├─ minify-js 30 ms
│  │  │  ├─ minify-js 30 ms
│  │  │  ├─ minify-js 30 ms
│  │  │  ├─ minify-js 32 ms
│  │  │  ├─ minify-js 30 ms
│  │  │  ├─ minify-js 30 ms
│  │  │  ├─ minify-js 36 ms
│  │  │  ├─ minify-js 356 ms
│  │  │  ├─ minify-js 344 ms
│  │  │  ├─ minify-js 273 ms
│  │  │  ├─ minify-js 172 ms
│  │  │  ├─ minify-js 172 ms
│  │  │  ├─ minify-js 172 ms
│  │  │  ├─ minify-js 172 ms
│  │  │  └─ minify-js 172 ms
│  │  └─ css-minimizer-plugin 132 ms
│  │     └─ minify-css 132 ms
│  ├─ emit 4.7 ms
│  └─ webpack-close 434 ms (self 432 ms)
│     └─ webpack-generate-error-stats 2.1 ms
├─ create-entrypoints 103 ms
├─ format-webpack-messages 278 µs
├─ verify-typescript-setup 4.7 s
├─ verify-and-lint 513 ms
├─ static-check 527 ms
│  ├─ check-static-error-page 3.1 ms
│  ├─ check-page 1.3 ms
│  ├─ check-page 835 µs
│  ├─ check-page 441 µs
│  ├─ check-page 488 ms
│  │  └─ is-page-static 487 ms
│  └─ check-page 489 ms
│     └─ is-page-static 487 ms
├─ generate-required-server-files 451 µs
├─ node-file-trace-build 6.4 s
├─ write-routes-manifest 1.8 ms
├─ static-generation 1.1 s
│  ├─ move-exported-app-not-found- 16 ms
│  └─ move-exported-page 32 ms
├─ next-export 873 ms
│  ├─ load-dotenv 64 µs
│  └─ run-export-path-map 396 µs
├─ write-routes-manifest 18 ms
├─ apply-include-excludes 688 µs
├─ print-tree-view 2.2 ms
└─ telemetry-flush 30 µs
