# CHANGELOG

<!--__CHANGELOG_ENTRY__-->

## 0.16.0 (2024-09-06)


### Bug Fixes

* add DropZone iframe compatablity mode for bug in Safari 17.2, 17.3 and 17.4 ([47496c2](https://github.com/Adgame-organization/puck-builder/commit/47496c25407b1a5fdb88333e1fbf5416efc51c50))
* add favicon to next recipe to prevent Puck 404 ([2c52d27](https://github.com/Adgame-organization/puck-builder/commit/2c52d271c6c20e9368a59eb1f2a5df184cef72bc))
* add key to Render component ([7ea9fee](https://github.com/Adgame-organization/puck-builder/commit/7ea9feea17198448d000236de45ed0a61f02642c))
* add missing glob dependency for create-puck-app ([7dbe190](https://github.com/Adgame-organization/puck-builder/commit/7dbe1902bf1c31a674b35c1269ee44ac09aac763))
* add missing id type to render props ([18753cf](https://github.com/Adgame-organization/puck-builder/commit/18753cf1142d70f7100bc6fd5aa913813491042e))
* add missing lib ([9f7abc4](https://github.com/Adgame-organization/puck-builder/commit/9f7abc4f942a8378a81bc6cda4b479592e399c23))
* add missing optional chaining operator to next recipe ([a368319](https://github.com/Adgame-organization/puck-builder/commit/a368319ec73adfc5bce8fb6bd31ac8e46e669400)), closes [/github.com/measuredco/puck/commit/34f248cd0ca47c79d5c23bc41f366fe870ea3ad9#diff-03f6d84aea18b78020e4edaabac75a948a5c6b56b5212194570e0364684f3f41R31](https://github.com//github.com/measuredco/puck/commit/34f248cd0ca47c79d5c23bc41f366fe870ea3ad9/issues/diff-03f6d84aea18b78020e4edaabac75a948a5c6b56b5212194570e0364684f3f41R31) [#1](https://github.com/Adgame-organization/puck-builder/issues/1)
* align Drawer behaviour and docs with expectation ([e2cd445](https://github.com/Adgame-organization/puck-builder/commit/e2cd445f9d3abccca5b3daf95a4d92774a1dd47a))
* allow sidebars to scroll ([9c39efb](https://github.com/Adgame-organization/puck-builder/commit/9c39efb990ec0b63cd69fbea5c3fcb0339c2d0f5))
* animate loader in iframe ([151a267](https://github.com/Adgame-organization/puck-builder/commit/151a2675bf8e700368aad0652192bc7d9fd2bbd6))
* avoid FOUC of side bars on mobile ([83be956](https://github.com/Adgame-organization/puck-builder/commit/83be95643e4dcb96e30d0e6a9dbfe03c60f83002))
* avoid hardcoding localhost in strapi adaptor ([f8d920c](https://github.com/Adgame-organization/puck-builder/commit/f8d920c6d188e9b8c9ea1bc7cb58d63e6f25d823))
* bust cache in generated app on publish ([6e1c8ed](https://github.com/Adgame-organization/puck-builder/commit/6e1c8ed9df1be9634e49d18edc8c42c7ebf6e864))
* change id when duplicating ([41d7aea](https://github.com/Adgame-organization/puck-builder/commit/41d7aead75739b38cfd59d1e8485820c25b17a3d))
* check for optionality to handle race condition when dragging ([4dbd487](https://github.com/Adgame-organization/puck-builder/commit/4dbd487f6055ea3d38ab7de54e29bd6e4ffe84ce))
* clip border for last item in draggable list ([9dd62d8](https://github.com/Adgame-organization/puck-builder/commit/9dd62d8690364dee50eda3eefc57cf3bf0452254))
* correctly infer objectFields type from props ([e8991cc](https://github.com/Adgame-organization/puck-builder/commit/e8991cc90d5fd899a3357f6d1f50b382d90aad23))
* defer iframe event binding until contentWindow is ready ([268ea53](https://github.com/Adgame-organization/puck-builder/commit/268ea53f969a892843c026e5ba9ced15edb9f801))
* don't 404 on homepage by default with generator ([8fd7b3b](https://github.com/Adgame-organization/puck-builder/commit/8fd7b3b38a046776f69105e25f86a622b5e41c40))
* don't attempt to resolve data if component missing from config ([cc7d391](https://github.com/Adgame-organization/puck-builder/commit/cc7d391503cce3cbdbad9b769b5fb0fca6610cb0))
* don't call API when building generated project ([8041fc1](https://github.com/Adgame-organization/puck-builder/commit/8041fc1da598f61b4c30c711d8233466c8643099))
* don't crash demo app if database.json doesn't exist ([53d3a79](https://github.com/Adgame-organization/puck-builder/commit/53d3a7954056080b79abe59d1bdaff3ef07ba130))
* don't crash if component is missing after referenced in category ([dc93789](https://github.com/Adgame-organization/puck-builder/commit/dc93789c4311e386b022b5c3d7c8595c00a8a212))
* don't crash in no fields specified ([efc0509](https://github.com/Adgame-organization/puck-builder/commit/efc0509236934834bd2b10087443f05599debb5e))
* don't crash when loading external data into array field items ([d13d00b](https://github.com/Adgame-organization/puck-builder/commit/d13d00b67a7106889a0fc3beae94fa9c2e5bfcc3))
* don't drop props when duplicating ([b0b9820](https://github.com/Adgame-organization/puck-builder/commit/b0b9820f36e6c07d8b5ee68a57dde6331e3b7e4a))
* don't enable style pollution of input background color ([bb1a76b](https://github.com/Adgame-organization/puck-builder/commit/bb1a76b314f744b76197cb670c448abc7896a45e))
* don't flash nested dropzones on first drag ([38c3dc4](https://github.com/Adgame-organization/puck-builder/commit/38c3dc418e047b7f1218c8c50cf3ba3f2e6b74d8))
* don't flicker root DropZone when dragging ([358435c](https://github.com/Adgame-organization/puck-builder/commit/358435c36a216e6749be73599ab631ffdd8069c8))
* don't force height of DropZones in custom interfaces ([046c255](https://github.com/Adgame-organization/puck-builder/commit/046c2557b6baa62994380c547ad006759b02cc92))
* don't include headings outside of page in heading analyzer ([8c31aed](https://github.com/Adgame-organization/puck-builder/commit/8c31aed150aee09ff7c5e75d99b35aab94abcbb4))
* don't inline link stylesheets for more predictable behaviour ([c0a331d](https://github.com/Adgame-organization/puck-builder/commit/c0a331de31c2d59e0e21ef342eb4c821850e10be)), closes [#454](https://github.com/Adgame-organization/puck-builder/issues/454)
* don't overflow external inputs inside arrays/objects ([42ef582](https://github.com/Adgame-organization/puck-builder/commit/42ef582cac949f8a24f9cdad204baf24d808b410))
* don't query iframe document if not ready ([2b2ef32](https://github.com/Adgame-organization/puck-builder/commit/2b2ef32555387d4656872674289740b73dcd406b))
* don't render plugins twice when using React strict mode ([e09d406](https://github.com/Adgame-organization/puck-builder/commit/e09d4067ae6857aed8f9bfa81af615525309c6ae))
* don't reset array item labels when changing order ([57563e1](https://github.com/Adgame-organization/puck-builder/commit/57563e1da1826dbfa08a32fabb27153e4618ab40))
* don't show margin underneath placeholder when dragging in ([2620455](https://github.com/Adgame-organization/puck-builder/commit/26204557b6fc92b208ee1051921965b793a78b1e))
* don't submit buttons if Puck used in form ([f761e5f](https://github.com/Adgame-organization/puck-builder/commit/f761e5fed63fc698e3a9d6ba94607364ed46f31b))
* don't switch between controlled/uncontrolled inputs ([b20e298](https://github.com/Adgame-organization/puck-builder/commit/b20e2980be6df6d57f9dfb6987b512686ccc5a7a))
* don't throw undefined error if rapidly zooming browser in some environments ([282a8b0](https://github.com/Adgame-organization/puck-builder/commit/282a8b0d9f170ea95f5717c8b2ad08ec487d7d8f))
* don't throw warning when user is correctly specifying root props ([46aa8ff](https://github.com/Adgame-organization/puck-builder/commit/46aa8ff3a68dcbd4aec4ebfef246d400469ca4d4))
* don't try to render page title if page doesn't exist ([5994980](https://github.com/Adgame-organization/puck-builder/commit/59949801f6487935ee8541e0849f3adeaf8be904))
* don't unexpectedly show DropZone background ([2001fa2](https://github.com/Adgame-organization/puck-builder/commit/2001fa2bb6e69451f68cd94a3f872a0f83ff2b4b))
* don't unintentionally use read-only styles in external fields ([acaf727](https://github.com/Adgame-organization/puck-builder/commit/acaf72746c2c82881a753dab6350161c774cd13f))
* don't use nextjs Link in Button, and fix onClick call ([7a26a79](https://github.com/Adgame-organization/puck-builder/commit/7a26a791702efbb39d09bbe0410c0bb015b78751))
* don't wrap links in <a> twice in Button ([58b8d63](https://github.com/Adgame-organization/puck-builder/commit/58b8d63e541d5022a3909fce8c97ed88bee4a87e))
* enable user to pass in config without casting ([ee211e2](https://github.com/Adgame-organization/puck-builder/commit/ee211e2a3ae6fbcb3d2b12316172e49f11fecd1e)), closes [#185](https://github.com/Adgame-organization/puck-builder/issues/185)
* ensure array fields can render if value is undefined ([47ab3c9](https://github.com/Adgame-organization/puck-builder/commit/47ab3c971e4aafec443e8b4d73e7c921dec38ac6))
* ensure chrome respects antd Video autoplay ([4268d35](https://github.com/Adgame-organization/puck-builder/commit/4268d35405ca2425f72a213e632d261d26354775))
* ensure component label doesn't inherit user styles ([5c0d65b](https://github.com/Adgame-organization/puck-builder/commit/5c0d65b8519897c454b2f321330dd24dd30f831f))
* ensure demo homepage renders metadata ([042d8e0](https://github.com/Adgame-organization/puck-builder/commit/042d8e094621bae6b447c83bf0d4fabf294665d5))
* ensure demo types are satisfied with TypeScript@5 ([958dc25](https://github.com/Adgame-organization/puck-builder/commit/958dc255ac5d285f98b6b592df677883b74e2830))
* ensure detaching doesn't crash when component reselected ([2b4bccc](https://github.com/Adgame-organization/puck-builder/commit/2b4bccc6af6a795b01c2e5574fc20898ab48c481))
* ensure draggable actions are visible above next component ([1c2b804](https://github.com/Adgame-organization/puck-builder/commit/1c2b8042a236c309d6ecb9641f3bef83fc4c411b))
* ensure editMode is passed to component in renderer ([923decb](https://github.com/Adgame-organization/puck-builder/commit/923decbce49f4a5b0f2e8f855228987c9c07fdc1))
* ensure field debounce doesn't sporadically lock preview update ([932e412](https://github.com/Adgame-organization/puck-builder/commit/932e4121868fccd2e2f1c89193c2733ee7a2b5c8))
* ensure field icon and label are vertically aligned ([caa40e0](https://github.com/Adgame-organization/puck-builder/commit/caa40e0499570831e5779f9a6a031e38f054c3f8))
* ensure font loads for ExternalFields ([e9bca75](https://github.com/Adgame-organization/puck-builder/commit/e9bca751926db8a88f4f6ad2bc135a10705987d9))
* ensure form styles override global styles ([104091a](https://github.com/Adgame-organization/puck-builder/commit/104091ac87c95d1395687d1785e621f5580efd87))
* ensure git doesn't init inside existing repo in generator ([e9b1db6](https://github.com/Adgame-organization/puck-builder/commit/e9b1db646adf5b9620582c8f30bd47bb640564a8))
* ensure global styles don't leak into previewed content ([cacf96c](https://github.com/Adgame-organization/puck-builder/commit/cacf96c32831d2f7d1648255987e076509ddf3a1))
* ensure heading outline resets in safari ([49b1e48](https://github.com/Adgame-organization/puck-builder/commit/49b1e482a1b835f3e669aebd7f5e19b84c6dc1be))
* ensure heading-analyzer updates when content changes ([d75df7a](https://github.com/Adgame-organization/puck-builder/commit/d75df7a5c8ab365a4ef0de6c81c707e706433383))
* ensure homepage renders ([0c1c32c](https://github.com/Adgame-organization/puck-builder/commit/0c1c32c0af5957443af2ad87feab31d7bcc184dc))
* ensure hooks can always be used within render functions ([cbf8e8e](https://github.com/Adgame-organization/puck-builder/commit/cbf8e8e49fc5d43a8818cf41010cfba6034bbf28))
* ensure layer tree consistently shows selected item ([6a9145c](https://github.com/Adgame-organization/puck-builder/commit/6a9145c23b1461e46f3568e9a107d3c429aa87d2))
* ensure locked fields work consistently ([337218f](https://github.com/Adgame-organization/puck-builder/commit/337218f4098a72e322ce3ac42580b98f9c0ba924))
* ensure margin collapse fix works with coloured backgrounds ([fdec4fa](https://github.com/Adgame-organization/puck-builder/commit/fdec4faac197e541a04785ab7c16919223b3ec9d))
* ensure placeholder works on Safari ([d2256df](https://github.com/Adgame-organization/puck-builder/commit/d2256df2f64990839f9564a3e3913c60e168f708))
* ensure publish button defaults to right-hand-side ([1105b0a](https://github.com/Adgame-organization/puck-builder/commit/1105b0aaf509e6a875733a8420b00f9b2e04dc4d))
* ensure root render receives props from latest data API ([abb6ff1](https://github.com/Adgame-organization/puck-builder/commit/abb6ff1bd53d7f93ef0ac287290712943ca2c1ce))
* ensure select and radio fields support read only arrays ([cbdf66d](https://github.com/Adgame-organization/puck-builder/commit/cbdf66d348acc3461f321956c80dbc87a896069e))
* ensure types allow for nested arrays ([06b145b](https://github.com/Adgame-organization/puck-builder/commit/06b145b9089548725166fec3dd54f757b6e932cc))
* export correct files for Strapi adaptor ([577a849](https://github.com/Adgame-organization/puck-builder/commit/577a84928cd3c8e4f7a57d1f2746abd69db23eeb))
* export History type ([00a43cf](https://github.com/Adgame-organization/puck-builder/commit/00a43cffe8858d1c76e77f2587ad7ee9109d891f))
* export missing Plugin type ([eb42734](https://github.com/Adgame-organization/puck-builder/commit/eb427343fd58752861cac850f59c1098cf473f50))
* export missing PuckAction type ([f22f32d](https://github.com/Adgame-organization/puck-builder/commit/f22f32dc5569eaa9cea90f896cf4cdafc59940fe))
* fill empty space under puck-root ([d42cfb6](https://github.com/Adgame-organization/puck-builder/commit/d42cfb69aa7c7e0b70321b4b509efd3c6fdbe393))
* fix array field when used on root ([95280e6](https://github.com/Adgame-organization/puck-builder/commit/95280e686409342d3be3d68ec2acb90f7cfc570e))
* fix broken nested array fields ([7a3949f](https://github.com/Adgame-organization/puck-builder/commit/7a3949f7f10b2323504b31bcae9a9aa5d46f4074))
* fix crash if component in data is missing from config ([0daf478](https://github.com/Adgame-organization/puck-builder/commit/0daf478d9ad8b14d2844ff6ae2db9bd72970d680))
* fix defaultProps for root ([9a1cc7c](https://github.com/Adgame-organization/puck-builder/commit/9a1cc7c925f0b8a79b5f523fc7c8a6d6afdc2067))
* fix drag-and-drop when entire Puck component used inside an iframe ([23db292](https://github.com/Adgame-organization/puck-builder/commit/23db292b9a2caa8e65117c08706843d3ed343454))
* fix initial UI state on mobile ([3aa0057](https://github.com/Adgame-organization/puck-builder/commit/3aa005740b650879d95318a01ac9e2949ec5e9d8))
* fix placeholder style calculations ([193381d](https://github.com/Adgame-organization/puck-builder/commit/193381d5637eb0a81b105b8eeeb10753920b29a4))
* fix renderDropZone method in editor ([2c738dd](https://github.com/Adgame-organization/puck-builder/commit/2c738dd3761596925caecfee2bfdcb2960a10b83))
* fix rootResolver behaviour when using recommended root data API ([5c13de5](https://github.com/Adgame-organization/puck-builder/commit/5c13de58a335f2b4c81f2b424fee8b4a356fb563))
* fix safari styling for select inputs ([07d23ee](https://github.com/Adgame-organization/puck-builder/commit/07d23ee57af4371819352288e990c292ef1486c2))
* fix support for boolean values in select fields ([c4a66ad](https://github.com/Adgame-organization/puck-builder/commit/c4a66addacd9acdc1f042ac54831b7dac38f2757))
* fix tsconfig and deps in next template ([f17233c](https://github.com/Adgame-organization/puck-builder/commit/f17233cbcf36cdd140da7d9d2e49ecaa8489fada))
* fix type issues in next recipe ([b16e98e](https://github.com/Adgame-organization/puck-builder/commit/b16e98e15407678524d904211ecc74230b205018))
* fix unpredictable rendering of drop placeholder ([bf5f16b](https://github.com/Adgame-organization/puck-builder/commit/bf5f16b394ef950318949e9a440dd1bf2407636e))
* improve dnd drag response by moving zoom ([433f8d7](https://github.com/Adgame-organization/puck-builder/commit/433f8d77b3642eb17c399edc2bf6940418c844d9))
* improve resiliency of iframe CSS for some frameworks, like Mantine ([538cb05](https://github.com/Adgame-organization/puck-builder/commit/538cb05606126c338e97c047b97065463e618d36))
* include .gitignore in recipes ([e18bf67](https://github.com/Adgame-organization/puck-builder/commit/e18bf67e366c431a6bea08a9965b7d40866119e2))
* include next recipe in generator ([c85f82f](https://github.com/Adgame-organization/puck-builder/commit/c85f82f4001e18f6ddbcd7dcde43a93e2ec60793))
* infer correct value types in Custom fields ([5c8c0e1](https://github.com/Adgame-organization/puck-builder/commit/5c8c0e1bfa9ca4da04e1cfac83c7a3ab5883fc5c))
* inject react into libraries ([7e10d91](https://github.com/Adgame-organization/puck-builder/commit/7e10d9141901aaf79ae4ebfa3a7b60b589c6c715))
* isolate adaptor modal from high z-indexes ([fdf97c7](https://github.com/Adgame-organization/puck-builder/commit/fdf97c7f6da6035447e9b7deec9019217875c4ef))
* load initial data if no data ([d1a2dc1](https://github.com/Adgame-organization/puck-builder/commit/d1a2dc190c614ac9cbad00bfbbcfa27f494e9821))
* lower opacity of DropZone background to support dark backgrounds ([9a5c0b8](https://github.com/Adgame-organization/puck-builder/commit/9a5c0b8ec57e41eeda3592d9a45ab00907a7a313))
* make Config and Data types more robust ([6bcf555](https://github.com/Adgame-organization/puck-builder/commit/6bcf555da74d54d70f00f37878d35fa166bb7e4c))
* make default props on root optional ([dc5b1ae](https://github.com/Adgame-organization/puck-builder/commit/dc5b1aec6518f1c3ed1ad8f798bcfe359077865f))
* make draggable outlines consistent ([9008b70](https://github.com/Adgame-organization/puck-builder/commit/9008b70ed63155140a5241914c86456a2d4c9388))
* make Field types required based on type ([daf36ac](https://github.com/Adgame-organization/puck-builder/commit/daf36ac8864dc1b0f324c3e08294f9d62568acf2))
* make getItemSummary optional on ExternalFields, as expected ([26bc4ff](https://github.com/Adgame-organization/puck-builder/commit/26bc4ff320cc93bf4376edd190b3779774f2f87c))
* migrate to @hello-pangea/dnd to fix defaultProps warning ([2c97362](https://github.com/Adgame-organization/puck-builder/commit/2c97362e15f5d2046dc216c6e5fc25f5199d0a37))
* move incorrect dependency to devDependencies ([6ffd86c](https://github.com/Adgame-organization/puck-builder/commit/6ffd86c9d668449991a0642d79fa85c1a364deae))
* only import Puck CSS on editor pages ([22a4182](https://github.com/Adgame-organization/puck-builder/commit/22a41823559d36fd06842496d59788004b316797))
* only render strings or numbers in external adaptors ([3c337be](https://github.com/Adgame-organization/puck-builder/commit/3c337be171c5fa6ad464f5a16fcb7f17e9b1a4f9))
* only show sidebar scroll bars if necessary ([87c8736](https://github.com/Adgame-organization/puck-builder/commit/87c87369003f417600ca0a7bb38041de5c675afb))
* persist external data state when selecting new components ([c995789](https://github.com/Adgame-organization/puck-builder/commit/c9957894e3324273780218b728b6382005101f6c))
* position field loader relative to sidebar, not fields ([2e8936e](https://github.com/Adgame-organization/puck-builder/commit/2e8936e4f416b0a04b273250cf3848447fb7e045))
* prevent global pollution of Heading color ([327721c](https://github.com/Adgame-organization/puck-builder/commit/327721c705546a538fedd0a3b794926605cd58fc))
* prevent global style pollution in external fields ([429731d](https://github.com/Adgame-organization/puck-builder/commit/429731dbb77de2d8ca1c4a88832c73294a9b141c))
* prevent grid layout issues in generated apps ([5c05f94](https://github.com/Adgame-organization/puck-builder/commit/5c05f945679f7f2c0edd5d99c652989c00920ac6))
* prevent inconsistent default input font-size ([99f90b3](https://github.com/Adgame-organization/puck-builder/commit/99f90b3ba81bf286758685f7c2a457abaffeb2e1))
* prevent infinite loop when using plugins with some frameworks ([3870871](https://github.com/Adgame-organization/puck-builder/commit/38708716f32d65a9131b87fe664ba96b32aead15))
* prevent long header titles from rendering over actions ([4613df4](https://github.com/Adgame-organization/puck-builder/commit/4613df47fdde9ac796419f02a2d9f649892b3d35))
* prevent pollution of global styles into component overlay ([3fcf8e3](https://github.com/Adgame-organization/puck-builder/commit/3fcf8e3f9975a14d8bc355e025585c9f55f233b1))
* prevent removal of fieldset padding ([550bd0e](https://github.com/Adgame-organization/puck-builder/commit/550bd0ef9263766817709cea2c0365e9bd3e95cf))
* prevent rerendering when changing state ([e24d0e2](https://github.com/Adgame-organization/puck-builder/commit/e24d0e26920842a5a577d22912334c1682f8c512))
* prevent style pollution for select fields ([fa7af7d](https://github.com/Adgame-organization/puck-builder/commit/fa7af7da9d770d5e790944d421dc0a30f0da84b1))
* prevent Tailwind from clashing with viewport zoom select ([9151255](https://github.com/Adgame-organization/puck-builder/commit/91512553430b295c37c80a935f0db929bb37870c))
* prevent unexpected field behaviour when pressing "Enter" key ([bf4f527](https://github.com/Adgame-organization/puck-builder/commit/bf4f5277f5d5cbf7a7ccf473130055575a5e983a)), closes [#345](https://github.com/Adgame-organization/puck-builder/issues/345)
* record history when a user selects an item ([3a649c9](https://github.com/Adgame-organization/puck-builder/commit/3a649c9922cc0a6c8c6c2b96f5fbe44bd3a6176a))
* reflect value changes made via resolveData in radio fields ([9a7066f](https://github.com/Adgame-organization/puck-builder/commit/9a7066f4e837575aecbde0de4dd2bc96328a2a15))
* remove body margin in remix recipe ([0898b26](https://github.com/Adgame-organization/puck-builder/commit/0898b26cd021680dfb77a439b04140ce2fb8cb2c))
* remove border on draggable components ([726a27c](https://github.com/Adgame-organization/puck-builder/commit/726a27cc0df6b8c439d0aa8e0dd05cac32774b3e))
* remove flakey bottom hover radius ([a7e77ba](https://github.com/Adgame-organization/puck-builder/commit/a7e77ba98549e5bac63a56b97e7a009dbbc53000))
* remove invalid zoom from droppable root ([9055c61](https://github.com/Adgame-organization/puck-builder/commit/9055c617eb37382c39e6d1904ef560f3d74d7524))
* remove packages triggering superficial security warning ([0f52b61](https://github.com/Adgame-organization/puck-builder/commit/0f52b610769550b3365ab91f856b264d02d005c2))
* remove peer dependencies causing warnings ([041ca64](https://github.com/Adgame-organization/puck-builder/commit/041ca64a6fe96539681d88e9cd0e66a6ac27a6ce))
* remove unused "mode" prop from custom example ([840222f](https://github.com/Adgame-organization/puck-builder/commit/840222fb603c8da15e6aee527ee3d432bad5bfc1))
* remove unused icon from Stats demo component ([ff3d70d](https://github.com/Adgame-organization/puck-builder/commit/ff3d70dffd0cd4059f52837b81edc59e1d7fc1fe))
* rename next-multi to correctly named next ([919cc25](https://github.com/Adgame-organization/puck-builder/commit/919cc251cf16ca83d8ce01b6e7052fc705072e3c))
* render `icon` if provided to FieldLabel ([ae01891](https://github.com/Adgame-organization/puck-builder/commit/ae01891ce55b844c5a76a20faa33e5df16c2d593))
* render drag and drop correctly when using margins ([f88025b](https://github.com/Adgame-organization/puck-builder/commit/f88025bf27479036426305a1004acfe8f0ab6644))
* reset stacking context for each item ([a826492](https://github.com/Adgame-organization/puck-builder/commit/a826492ee7bab57710edad6b7df498f294398606))
* resolve security warning when additional iframes present ([03ab0bd](https://github.com/Adgame-organization/puck-builder/commit/03ab0bd3314a4d6dfc863bdcf5f23246331b959b))
* respect label in radio fields ([fe550d7](https://github.com/Adgame-organization/puck-builder/commit/fe550d795eed20ce3a3004a2e7c8dfdbaca0b67d))
* respect labels for array item fields ([f2e7843](https://github.com/Adgame-organization/puck-builder/commit/f2e7843de0b12df4b15b1c1dd953e8b4d82ce366))
* respect zoom for page rendering ([cb861d0](https://github.com/Adgame-organization/puck-builder/commit/cb861d0f62d9f0d10b15047107bc4e79f820ab00))
* return component to original position when drag cancelled ([cae760f](https://github.com/Adgame-organization/puck-builder/commit/cae760fbfb8497de09311bb81e3059c07efe75ac))
* revert "fix: stop `position: fixed;` elements from escaping editor" ([9e4a0e3](https://github.com/Adgame-organization/puck-builder/commit/9e4a0e353099e1f110622aa86bb810476a7b4d3e))
* scope styles in OutlineList ([1dc222c](https://github.com/Adgame-organization/puck-builder/commit/1dc222cfa5924aca2e5eb5ea535f77cfe2fe1281))
* set aria-label on all loaders ([9adca27](https://github.com/Adgame-organization/puck-builder/commit/9adca2774dae5e532134be76de9c79e0b4af751c))
* set correct font family for empty outlines ([3d45841](https://github.com/Adgame-organization/puck-builder/commit/3d4584190e13f9b07077d6012d1ce4197de0a436))
* set the inGitRepo var correctly in generator ([3c318bc](https://github.com/Adgame-organization/puck-builder/commit/3c318bcb5cd8a4fae003cf9ad4e770869ebe95bd))
* show a default value when no placeholder set on external fields ([e30b5b6](https://github.com/Adgame-organization/puck-builder/commit/e30b5b69b6a9f6467db4b05c55ffdc5f1ecebcfb))
* show external field modal when using custom interfaces ([6e97a0e](https://github.com/Adgame-organization/puck-builder/commit/6e97a0e18aea72581ba466e8cf3f87e60f3a65f3))
* show field loader when using field overrides ([8ccfa4c](https://github.com/Adgame-organization/puck-builder/commit/8ccfa4c0c3477b8e1d2db2fcc7a352b353643095))
* show warning if heading-analyzer styles aren't loaded ([4e7110b](https://github.com/Adgame-organization/puck-builder/commit/4e7110b591a4a12e2b3c89eb1fa98faf5f9338d4))
* still load iframe if styles fail to load ([3e56bc1](https://github.com/Adgame-organization/puck-builder/commit/3e56bc1816c40c555de2eb28148baf5dcdcacbea))
* stop `position: fixed;` elements from escaping editor ([efa4f45](https://github.com/Adgame-organization/puck-builder/commit/efa4f456458ea8aaab346b21e72dc521e9826279))
* stop `zones` getting wiped out if data prop updated ([0c4514f](https://github.com/Adgame-organization/puck-builder/commit/0c4514fcde24d0ba585fea0981d73e7a8188840f))
* stop caching editor ([8974b18](https://github.com/Adgame-organization/puck-builder/commit/8974b1829aa2ca015044a3555fe005e4e3b4266c))
* stop color pollution in external field modals ([2e1b5ef](https://github.com/Adgame-organization/puck-builder/commit/2e1b5ef330ebbddee8c44b5002be65c2361fda4f))
* stop generator crashing on Windows due to commits with single quotes ([2e931bc](https://github.com/Adgame-organization/puck-builder/commit/2e931bc2886cb8991ee654db0019bd239fed8450))
* stop style pollution into array field items ([03b89d5](https://github.com/Adgame-organization/puck-builder/commit/03b89d568ded7cae6eb34e0dcf45e60eb758b552))
* stretch external field table to width of modal ([f6d89f6](https://github.com/Adgame-organization/puck-builder/commit/f6d89f69f1a24f94479365b9d955a3ea60b17b8d))
* stretch ExternalInput button to fill container ([69ee221](https://github.com/Adgame-organization/puck-builder/commit/69ee221e41ab09aae3d4d4d89c92d799d9b387f9))
* style clashing with dark mode root element ([8506e8e](https://github.com/Adgame-organization/puck-builder/commit/8506e8e7f72aa8df7e69a1e7349eae273ebdee0e))
* upgrade next version in recipe to ensure vercel builds pass ([c2d7fae](https://github.com/Adgame-organization/puck-builder/commit/c2d7faeed59fea5c7c795f76915cf354151d644d)), closes [#issuecomment-1730544814](https://github.com/Adgame-organization/puck-builder/issues/issuecomment-1730544814)
* upgrade to next@13.4.6 to fix React issues in demo ([aef4ae7](https://github.com/Adgame-organization/puck-builder/commit/aef4ae703aec63506e6ce3870d572b46f3def142))
* use 100% width for Puck preview when iframe disabled ([#414](https://github.com/Adgame-organization/puck-builder/issues/414)) ([64303c8](https://github.com/Adgame-organization/puck-builder/commit/64303c8510df15b6ca94bc7be0294d9746193b35))
* use correct color in FieldLabel labels ([b0469a1](https://github.com/Adgame-organization/puck-builder/commit/b0469a1134ac8eafc9a3b16de4d7805241127947))
* use correct font stack for header select ([b5bdda0](https://github.com/Adgame-organization/puck-builder/commit/b5bdda0773cdbaac98f87af5d9db581580a786ef))
* use correct heading component for external inputs ([462266d](https://github.com/Adgame-organization/puck-builder/commit/462266d069b04a3de09684af4b816e1d1dac46dc))
* use correct images for initial homepage data ([abcb623](https://github.com/Adgame-organization/puck-builder/commit/abcb623d0ff62fb78cc220c4ca21690b59ade6de))
* use correct markup for table ([c768ab2](https://github.com/Adgame-organization/puck-builder/commit/c768ab2dc1f4bc8a94561b22c40fd74350ab2740))
* use correct package name for create-puck-app ([11b8ebf](https://github.com/Adgame-organization/puck-builder/commit/11b8ebf9c795c2d2886c90daaa79a7958c34d553))
* use correct peer dependencies for react ([39f4e7f](https://github.com/Adgame-organization/puck-builder/commit/39f4e7fab5818266aa75046d2c2ca6e858803a13))
* use correct root data API in next recipe example database ([b598144](https://github.com/Adgame-organization/puck-builder/commit/b5981446ee64a3b5451eb17b8d42263f42df179f))
* use correct select styling for demo in Safari ([b0a4bb2](https://github.com/Adgame-organization/puck-builder/commit/b0a4bb262b6187541d6b20523c1e71e38e6b0871))
* use correct title path in recipes ([60244ba](https://github.com/Adgame-organization/puck-builder/commit/60244ba5637d889530ae646986b1890c6b89efea))
* use Inter font in button type Buttons ([1973847](https://github.com/Adgame-organization/puck-builder/commit/19738473723c49ddb0d764864283bf597280c7c5))
* use label on radio inputs ([94aa432](https://github.com/Adgame-organization/puck-builder/commit/94aa43248734f629b981be7a544ad20de7f87107))
* use more custom interface friendly styles for iframes ([e6e01c6](https://github.com/Adgame-organization/puck-builder/commit/e6e01c6ec5b2bee9ab3a4a9425276ad4f1840c20))
* use React server components properly ([309b6c7](https://github.com/Adgame-organization/puck-builder/commit/309b6c75c11920e9b7f806b5fa00e7d93a323432))
* use strict return type for resolveData ([777cd3c](https://github.com/Adgame-organization/puck-builder/commit/777cd3c02a0b0ec8df1b81e19654b1179b56cb53))
* vertically align field icons ([fa92436](https://github.com/Adgame-organization/puck-builder/commit/fa924363c8f2e5ad3d866793ba34a1b488250ce5))
* watch puck.config.tsx in Remix recipe ([ecb276c](https://github.com/Adgame-organization/puck-builder/commit/ecb276c39fd3cf03d524b221b3f34b3a8df99823))


### Features

* (revert) make name param optional in custom fields (breaking change) ([bcb81cb](https://github.com/Adgame-organization/puck-builder/commit/bcb81cbcbb0eb7855db0e3efc2ca31526d1d36b5))
* add "name" prop to componentItem override ([45bbceb](https://github.com/Adgame-organization/puck-builder/commit/45bbceb1d2805455fa38f5bce91d892f6acacfbf))
* add "puck" package for distribution ([042e0a1](https://github.com/Adgame-organization/puck-builder/commit/042e0a10d57330d3e1244c66abaf90b681f98fbc))
* add "ui" prop to Puck to set the initial state ([71f8b2f](https://github.com/Adgame-organization/puck-builder/commit/71f8b2f1143b9774fd763a8f5a3685957474237b))
* add `min` and `max` APIs to array fields ([53b7937](https://github.com/Adgame-organization/puck-builder/commit/53b7937675303bc3cf282bbd005309c8c276d1b2))
* add a lick of paint ([5c3041c](https://github.com/Adgame-organization/puck-builder/commit/5c3041ccaa98da6086d9f07ac2dc7e49540e7a3a))
* add ability to drag new components in ([22dd84c](https://github.com/Adgame-organization/puck-builder/commit/22dd84cb22d588046d789b201d78d899b6a286ae))
* add ability to select components ([731bff2](https://github.com/Adgame-organization/puck-builder/commit/731bff205e0f4c69a17319125f6e6bdc73b0b962))
* add actionBar override for adding component controls ([48ec0d7](https://github.com/Adgame-organization/puck-builder/commit/48ec0d786c7c589efc8b97152a5e1a4c065c0312))
* add adaptor-fetch package ([eaf7875](https://github.com/Adgame-organization/puck-builder/commit/eaf787527c0f76f3d43cbb8fd6fd1542aebdf5b0))
* add antd config to demo ([6fb107f](https://github.com/Adgame-organization/puck-builder/commit/6fb107f29cdbf8054c9a2c5739ff640258ecba4c))
* add API to opt-out of iframes ([03dd90b](https://github.com/Adgame-organization/puck-builder/commit/03dd90b98c8a72e2af3baa8fc436ff7d4f4c7449))
* add APIs for setting undo/redo history ([39e7f40](https://github.com/Adgame-organization/puck-builder/commit/39e7f4053add98bb69f0717cc9ec1170852b5213))
* add APIs to restrict components dropped in DropZones ([28f24f9](https://github.com/Adgame-organization/puck-builder/commit/28f24f927a2d1c378834f124e85abfcc2267a0d7))
* add Arc config to demo ([72d4ddb](https://github.com/Adgame-organization/puck-builder/commit/72d4ddb7475a188d8e37a944e3cdf38dfb63ab70))
* add AutoField component for using Puck fields inside custom fields ([106028b](https://github.com/Adgame-organization/puck-builder/commit/106028b59bb1a02756645bb76ce400adc398430d))
* add automatic RSC export, replacing /rsc bundle ([d21eba6](https://github.com/Adgame-organization/puck-builder/commit/d21eba6185da8efcbcb5458eaaa5be6c321b3d1a))
* add backwards compatability for adaptors ([d22150a](https://github.com/Adgame-organization/puck-builder/commit/d22150a4d4c05a8fcb60cd5848eec690304b591f))
* add basic dnd implementation ([fc6b244](https://github.com/Adgame-organization/puck-builder/commit/fc6b244903777eb643ce418e3a96ba1c3a3ca489))
* add basic plugin architecture ([5e7ec9a](https://github.com/Adgame-organization/puck-builder/commit/5e7ec9a99fef59ebbf8366eb2c5ecab8f4276ab1))
* add Button ([fea457c](https://github.com/Adgame-organization/puck-builder/commit/fea457cbf8e7744ed781dae96568903fcbb876fd))
* add catch all mode to demo, and metadata ([c03cc04](https://github.com/Adgame-organization/puck-builder/commit/c03cc04940d272ec3cf523401b4a1d2330458281))
* add categories API for grouping components in side bar ([594cc76](https://github.com/Adgame-organization/puck-builder/commit/594cc76c763a7d2ce06cd78f34a4683c0fa89f8e))
* add content control ([2712c07](https://github.com/Adgame-organization/puck-builder/commit/2712c07ebba92fd4e72af066c0957ecb6897d1b3))
* add Contentful field package ([d944288](https://github.com/Adgame-organization/puck-builder/commit/d94428819a958b4f566e5d0e8cd29b3bf1107881))
* add data migration API ([f987324](https://github.com/Adgame-organization/puck-builder/commit/f987324804d59e55a3a5e6770389305d88f39194))
* add debug mechanism to DraggableComponent ([4828b40](https://github.com/Adgame-organization/puck-builder/commit/4828b400278f735f7853d8e1fb0157b694a1fdb8))
* add defaultItemProps for groups ([60a55b2](https://github.com/Adgame-organization/puck-builder/commit/60a55b2302e77469ff6808e8e8bc02a996b21bef))
* add delete and duplicate overlay ([4e2c3e0](https://github.com/Adgame-organization/puck-builder/commit/4e2c3e032d720956c286fac190fb2b5db155b9e0))
* add disabled states to all field types ([746d896](https://github.com/Adgame-organization/puck-builder/commit/746d896996f01d086d557f2a2918f4e76e3f5b35))
* add drag, insert, delete, duplicate & drag permissions, and isDisabled prop to Drawer.Item ([cad95b8](https://github.com/Adgame-organization/puck-builder/commit/cad95b887c6b06a41a2bacf28792fd4dbc808d72))
* add example content to custom demo config ([8a9b757](https://github.com/Adgame-organization/puck-builder/commit/8a9b757765477eebebf49f975582549d8064795d))
* add explicit rsc and css exports ([0b6a527](https://github.com/Adgame-organization/puck-builder/commit/0b6a52792628225d392775ba6b3d549aab5be59b))
* add external content support with example Strapi adaptor ([889e6cc](https://github.com/Adgame-organization/puck-builder/commit/889e6ccdc826b05460d60260ae9d0d6ec2e1bac0))
* add filter fields to ExternalFields ([7a55053](https://github.com/Adgame-organization/puck-builder/commit/7a5505374953ab8004720a9c91d8975ad3df94e5))
* add Footer to custom example ([16114b5](https://github.com/Adgame-organization/puck-builder/commit/16114b5b4dd8fc0583f33798d73ac77937765b4d))
* add generic Config type to Puck and Render components ([1c4b97f](https://github.com/Adgame-organization/puck-builder/commit/1c4b97f0a8487785b5a677a2a1ba168b292e5ca4))
* add group field support ([200a48c](https://github.com/Adgame-organization/puck-builder/commit/200a48c22fd8a56bbf39a0077fdff6b2532a8c1a))
* add headerTitle and headerPath APIs ([a8e3ae7](https://github.com/Adgame-organization/puck-builder/commit/a8e3ae76490d42ced789455ce6b21b6cf1e59834))
* add heading analyzer plugin ([729bb69](https://github.com/Adgame-organization/puck-builder/commit/729bb696eeaf7640dc7267d0326476898a9d2fcd))
* add icon to adaptor inputs ([a3a018b](https://github.com/Adgame-organization/puck-builder/commit/a3a018bb1876fd4b831676e8ff848052ec7ba527))
* add icons to inputs ([f47482e](https://github.com/Adgame-organization/puck-builder/commit/f47482e8cabd334360666ea90d2e6a12b3648cf9))
* add iframe override for style injection ([7cac376](https://github.com/Adgame-organization/puck-builder/commit/7cac3764d1f9336776b97fa08cbd48bec95e6a10))
* add iframe support ([1d0bf57](https://github.com/Adgame-organization/puck-builder/commit/1d0bf57894200edc6b9a883a41937f7a3141074f))
* add initialHistories prop to Puck ([54b5a87](https://github.com/Adgame-organization/puck-builder/commit/54b5a871570120a3d0d55e96738746ec375dee0d))
* add isEditing flag to `puck` object prop ([13bb1bd](https://github.com/Adgame-organization/puck-builder/commit/13bb1bdf03a62000c07a7d49a56ad09c1433fda0))
* add left margin to OutlineList ([9cc625a](https://github.com/Adgame-organization/puck-builder/commit/9cc625a17a2e828e52d4e6dbea7a4d383e2d964a))
* add loading state to external field modal ([5b4fc92](https://github.com/Adgame-organization/puck-builder/commit/5b4fc92f96caf83148fa335321dad3a5f1a65789))
* add lock icon when field is read-only ([a051000](https://github.com/Adgame-organization/puck-builder/commit/a05100016fed1e368be333f2707087b152fb4c0e))
* add mapProp API to external field adaptors ([86c4979](https://github.com/Adgame-organization/puck-builder/commit/86c49795ac1d198836242772ec01bd755ee699c8))
* add min and max params to number field ([4932a6e](https://github.com/Adgame-organization/puck-builder/commit/4932a6ef1b640410b3291cc67fb1f3153c04eac4)), closes [#270](https://github.com/Adgame-organization/puck-builder/issues/270)
* add missing code ([eab04e3](https://github.com/Adgame-organization/puck-builder/commit/eab04e3eaf9d2ee510fd7fff11341bc3aabda33a))
* add missing topColor prop to demo Curve ([a9c4b7b](https://github.com/Adgame-organization/puck-builder/commit/a9c4b7bc46fd4cce983f93bad5fbc646a4c6495b))
* add next-multi to generator ([9712c0a](https://github.com/Adgame-organization/puck-builder/commit/9712c0ac61d5c411bec4d8c144f52b5310ec19c9))
* add object field type ([243278b](https://github.com/Adgame-organization/puck-builder/commit/243278bb01e34de6123a47d902fcc58ea7678642))
* add onAction API to track and react to state changes ([c7007ac](https://github.com/Adgame-organization/puck-builder/commit/c7007acab334ec2d08f95669d685edb8c3947bcc))
* add onChange and onPublish to Puck component ([0730826](https://github.com/Adgame-organization/puck-builder/commit/0730826c27dfa7057d81cfcd987ba6945a34fe23))
* add optional base wrapping via Base ([dc95218](https://github.com/Adgame-organization/puck-builder/commit/dc9521860152acdd97262fd382bc442ff329b817))
* add optional defaultProps functionality ([c262066](https://github.com/Adgame-organization/puck-builder/commit/c262066b78104ebb61764b29ba9a9237d669582b))
* add optional label param to fields ([fc61c42](https://github.com/Adgame-organization/puck-builder/commit/fc61c42891583fb6f6d60359466e6938b5d1ef99))
* add package manager detection to generator ([f2e7bd2](https://github.com/Adgame-organization/puck-builder/commit/f2e7bd27732482cabf84d657220e1a62755e7a43))
* add permissions API ([a43914d](https://github.com/Adgame-organization/puck-builder/commit/a43914dc36e70c5596c186d3c63b9497949365a9))
* add plugin for injecting Emotion cache ([f8a88b9](https://github.com/Adgame-organization/puck-builder/commit/f8a88b9c2447c76f2f7a00ce5705f8fae07be58c))
* add Puck class to outer div ([0698a12](https://github.com/Adgame-organization/puck-builder/commit/0698a127e093cb2cf66fa35dafca80ebd4c73f89))
* add radio input type ([a7cb3a0](https://github.com/Adgame-organization/puck-builder/commit/a7cb3a0254d5f839aeba397803611d95a38aa8d5))
* add react prop defaults ([129fe19](https://github.com/Adgame-organization/puck-builder/commit/129fe1965e4db022f3e0707bba6b4d1b047b088b))
* add remix recipe ([f882878](https://github.com/Adgame-organization/puck-builder/commit/f882878e081b44a2b0bd1f773114f3c35b8398b1))
* add renderComponentList API ([ec985e3](https://github.com/Adgame-organization/puck-builder/commit/ec985e3d28a4915f8fb2816b9599060d20bbf621))
* add renderer with basic API and json file database ([ae52d18](https://github.com/Adgame-organization/puck-builder/commit/ae52d181ac2d88dc9d01b28b3e2ec77aac4662d6))
* add renderHeader API to Puck ([63dda9a](https://github.com/Adgame-organization/puck-builder/commit/63dda9ab4118dc314b9d577a8c488773b50c58ba))
* add resolveFields API for dynamic fields ([0a18bdb](https://github.com/Adgame-organization/puck-builder/commit/0a18bdb9387f302565f74fa30f09fd912ea0769b))
* add resolvePermissions API ([f0655f0](https://github.com/Adgame-organization/puck-builder/commit/f0655f08a96b853cf18d681025f40e8d30df3013))
* add resolveProp API for modifying props dynamically ([c1181ad](https://github.com/Adgame-organization/puck-builder/commit/c1181ad9b1de6cc036cfedebcc3e57334ef62196))
* add search to external fields ([fe3b439](https://github.com/Adgame-organization/puck-builder/commit/fe3b4394c7464eeab69e1af5a96bd525bd15872a))
* add selectedItem convenience param to usePuck ([c1224d0](https://github.com/Adgame-organization/puck-builder/commit/c1224d026d37bbbcf1366804947771902e29d9bb))
* add shift modifier for interacting with underlying components ([d49d4c1](https://github.com/Adgame-organization/puck-builder/commit/d49d4c1c143b20092b5511ce82738a995a1ed28a))
* add support for custom fields ([b46b721](https://github.com/Adgame-organization/puck-builder/commit/b46b721aea70698e249cd3dfff34f88717952da7))
* add textarea input type ([08123b7](https://github.com/Adgame-organization/puck-builder/commit/08123b74c464ac38a0a770d4b867e3b5601378e2))
* add transformProps lib to migrate component props ([1ec2a78](https://github.com/Adgame-organization/puck-builder/commit/1ec2a78968e10efc5666aaf994b6feea6c820449))
* add undo/redo history ([222697e](https://github.com/Adgame-organization/puck-builder/commit/222697e5b9e95e3b28d0dfd9ac0b85f46c56068e))
* add usePuck hook ([13f3ccb](https://github.com/Adgame-organization/puck-builder/commit/13f3ccbd314e5a82f5a509c713ad34d3d0614b34))
* add viewport switching ([ccf9149](https://github.com/Adgame-organization/puck-builder/commit/ccf91495f3a9f20a37051ba407abd992095a7b4d))
* add visibility toggle for right-hand sidebar ([3d6c5d4](https://github.com/Adgame-organization/puck-builder/commit/3d6c5d479f2237400e0dc7cab6d5ed5773058d3b))
* align component list UI with refreshed array fields ([74cd3a7](https://github.com/Adgame-organization/puck-builder/commit/74cd3a7ba9100e5e7e1a5e626511906fbdf75b98))
* allow custom fields to set UI state during onChange ([388793c](https://github.com/Adgame-organization/puck-builder/commit/388793c9b0ac27b14a538b70357abd0dc4f26779))
* allow data prop to accept an empty object ([aedd401](https://github.com/Adgame-organization/puck-builder/commit/aedd401dd415e9d7dc1cbd6e33e59f5264180374))
* bump next recipe to Next@14 ([47a27ed](https://github.com/Adgame-organization/puck-builder/commit/47a27ed2c6aee80d4093975c399d96b950cb6956)), closes [#62655](https://github.com/Adgame-organization/puck-builder/issues/62655) [#62663](https://github.com/Adgame-organization/puck-builder/issues/62663) [#62121](https://github.com/Adgame-organization/puck-builder/issues/62121) [#61835](https://github.com/Adgame-organization/puck-builder/issues/61835) [#61721](https://github.com/Adgame-organization/puck-builder/issues/61721)
* call resolveData when new item inserted ([3298831](https://github.com/Adgame-organization/puck-builder/commit/329883165c9e428b9f291add7b6009ba29680146))
* cast number field types to Number ([d5df959](https://github.com/Adgame-organization/puck-builder/commit/d5df95946dd9abf1502cb21bfc8682dd98efb1e1))
* **create-turbo:** apply official-starter transform ([5f865a4](https://github.com/Adgame-organization/puck-builder/commit/5f865a42899d142064e26d7c795ba2abf9e0e050))
* **create-turbo:** apply package-manager transform ([f3460e2](https://github.com/Adgame-organization/puck-builder/commit/f3460e2123e10e247c076680fcb68b0571001771))
* **create-turbo:** create basic ([8337967](https://github.com/Adgame-organization/puck-builder/commit/8337967f7b9bc0e4d148e5958bfcd2076160e0d5))
* deprecate magic adaptor _data behaviour in favour of resolveProps API ([4ee31e7](https://github.com/Adgame-organization/puck-builder/commit/4ee31e7c0d93578976b2b655e0c56477571f8341))
* disable autocomplete ([beaebd2](https://github.com/Adgame-organization/puck-builder/commit/beaebd2e13c4abbf46b6ecea3712732527b585e9))
* don't mandate fields for optional props ([5a219ef](https://github.com/Adgame-organization/puck-builder/commit/5a219eff0c2f4763ec1d9f48f45fe684e6482b8f))
* enable drag-and-drop of array items ([12800f8](https://github.com/Adgame-organization/puck-builder/commit/12800f816b872d614ed50c9fcf3179f41dbbbfb2))
* enable mapping of table rows in external fields ([d50c56e](https://github.com/Adgame-organization/puck-builder/commit/d50c56e829b482f13c5ec08acc76eed70494d3cf))
* enable override of publish button (breaking change) ([480467a](https://github.com/Adgame-organization/puck-builder/commit/480467ae2e06ae4d36c4fd67f75757557058f561))
* ensure sharp edge in OutlineList ([cf46227](https://github.com/Adgame-organization/puck-builder/commit/cf46227a906c8770ef701ffcf4a7b2631d7224cb))
* export ActionBar component for use in overrides ([04fd6c5](https://github.com/Adgame-organization/puck-builder/commit/04fd6c5c7a65fc3ec9a05da277865341efe229af))
* export Button and IconButton to make extending header seamless ([d98eb29](https://github.com/Adgame-organization/puck-builder/commit/d98eb298f14ef0ae8888a710cadf85fac13e084d))
* expose field "id" to custom fields ([849161e](https://github.com/Adgame-organization/puck-builder/commit/849161ef0e2e2e01f6a1b9f517ba4bcc66cf6bd1))
* expose history via usePuck hook ([1b907cb](https://github.com/Adgame-organization/puck-builder/commit/1b907cba506dda7a2b1fe201a426e1c4bcfffecc))
* expose previous data to resolveData via `lastData` param ([dd7051e](https://github.com/Adgame-organization/puck-builder/commit/dd7051e8fbb3770714100c92f7f5c69d0be5dab6))
* expose state dispatcher to plugins ([e94accb](https://github.com/Adgame-organization/puck-builder/commit/e94accb22bae2afbb30728e0d58f8c6a558b3e39))
* expose state to plugins, removing data ([89f9f2e](https://github.com/Adgame-organization/puck-builder/commit/89f9f2e3a526a1459d14bdd7301f2c761f7c340d))
* expose state to renderHeader, removing data ([29ddaaf](https://github.com/Adgame-organization/puck-builder/commit/29ddaaf376b57134be46a489e7686978d0465669))
* flatten adaptor onto external fields ([7f13efc](https://github.com/Adgame-organization/puck-builder/commit/7f13efc769ddc77fc7931a8191796f017354e89a))
* generate static pages in next recipe ([a333857](https://github.com/Adgame-organization/puck-builder/commit/a33385783022179e12ef3f732cb4e2e387985030))
* go to and outline headings on click in analyzer ([a7f0c0d](https://github.com/Adgame-organization/puck-builder/commit/a7f0c0d79d4c72302281467984ec8731da5ee6d2))
* gracefully fallback if component definition doesn't exist ([0d9b821](https://github.com/Adgame-organization/puck-builder/commit/0d9b821ade6266bc15c9dbff7266c2ce362c42de))
* hide array Add button when array is readOnly ([4e27c3f](https://github.com/Adgame-organization/puck-builder/commit/4e27c3f18a0fa9a97dcd5fd240b01a133d7cb153))
* improve IconButton accessibility ([4c71d39](https://github.com/Adgame-organization/puck-builder/commit/4c71d39d1138f0fc823ada04710d0057433475b7))
* improve responsive behaviour ([889b4c7](https://github.com/Adgame-organization/puck-builder/commit/889b4c7a91f1a9b95c9fd7d4b3cdb20b2ee4946b))
* improve touch, contrast & keyboard a11y ([f975d87](https://github.com/Adgame-organization/puck-builder/commit/f975d87c5c2823e1f27161e6b6aa76a0d3fafad2))
* improve UI for fields ([aa0d2fe](https://github.com/Adgame-organization/puck-builder/commit/aa0d2fe56ff633b9c2cff2023ae00c8b9ec04df3))
* improve UI for group items ([4599abb](https://github.com/Adgame-organization/puck-builder/commit/4599abb5fdf4a3fd08af971af89002a7c2ea47ae))
* improve UI for overlay actions ([8e24904](https://github.com/Adgame-organization/puck-builder/commit/8e24904f5524f8e9488caa61de0a97267aa8c875))
* infer Data type from user config ([50045bb](https://github.com/Adgame-organization/puck-builder/commit/50045bbda2cf3b64e37e0e6bedcfce14f680cda1))
* introduce DropZone API for nesting components and advanced layouts ([5053a84](https://github.com/Adgame-organization/puck-builder/commit/5053a8430de1f4bfb6fb7a4b1f194a1474ed3ae3))
* introduce new outline UI ([e32c4ff](https://github.com/Adgame-organization/puck-builder/commit/e32c4ff784a2fcc5f2e2879807c045bd2742f4ac))
* introduce UI overrides API ([8a7c325](https://github.com/Adgame-organization/puck-builder/commit/8a7c3252d8aed2c160e390c1ba7c411d8b884b6f))
* load initial data for demo frameworks ([efea398](https://github.com/Adgame-organization/puck-builder/commit/efea39864b59c74f48906e5598e220b346e488a8))
* make actions sticky to component scroll ([f3e5b50](https://github.com/Adgame-organization/puck-builder/commit/f3e5b50d921f0c75978f805a7d44b88511fbaf69))
* make appName optional in generator ([743ec81](https://github.com/Adgame-organization/puck-builder/commit/743ec81bd4afe209ce6279a09a4dbd068c02090a))
* make background blue when dragging over ([c74d533](https://github.com/Adgame-organization/puck-builder/commit/c74d5330e54900edcfcb14578da16558cc96df71))
* make external field more consistent with other fields ([5bfbc5b](https://github.com/Adgame-organization/puck-builder/commit/5bfbc5bf71b0af72e97e24b5828ad7009836e51e))
* make it obvious when an input is readonly ([d7506c3](https://github.com/Adgame-organization/puck-builder/commit/d7506c35cb199310c6da9f14f3e0518ffd270787))
* make name param optional in custom fields (breaking change) ([9ff12bb](https://github.com/Adgame-organization/puck-builder/commit/9ff12bbe2fccb20b4c9e09412132ff5a05416bbd))
* make onPublish prop optional ([60f317f](https://github.com/Adgame-organization/puck-builder/commit/60f317f75bb1a18bd59819d1323c45266334138c))
* make sidebar sections collapsable and redesign component list ([a8db04b](https://github.com/Adgame-organization/puck-builder/commit/a8db04b60159b6e2f5f4953b67403bb633ba04de))
* move demo to next-multi recipe ([7e609b0](https://github.com/Adgame-organization/puck-builder/commit/7e609b04b557f205ca59f57d5132d7c04b532a3d))
* move root props under `props` key ([7593584](https://github.com/Adgame-organization/puck-builder/commit/759358446e01b4320e55156dbe849d264e4e7edf))
* new monospaced font stack ([c484ea6](https://github.com/Adgame-organization/puck-builder/commit/c484ea6bae5e6283bf82860e9a84413e60720163))
* pass editMode to all components ([89dcb38](https://github.com/Adgame-organization/puck-builder/commit/89dcb38a9b9a88996acfaa435ca547632b1270a8))
* provide ES Module build ([ff9076b](https://github.com/Adgame-organization/puck-builder/commit/ff9076b9d24d030ad47619b6a359b1f120422d70))
* record application state in undo/redo history ([0f2d7c5](https://github.com/Adgame-organization/puck-builder/commit/0f2d7c55aebe898925084ff27d5af97e9a7b9090))
* redesign action overlay and move outside of component ([5145cba](https://github.com/Adgame-organization/puck-builder/commit/5145cba6595e2051d14a7bfd37d9b180d9553330))
* refine editor styles ([afa4b5f](https://github.com/Adgame-organization/puck-builder/commit/afa4b5fe5b145ad93250b53d6c4f7a05ee4c410d))
* refine UI for external field modal ([6a2afa1](https://github.com/Adgame-organization/puck-builder/commit/6a2afa1abbd33a062bca6962b547b5534ed93036))
* refresh UI for array fields ([5ef8a96](https://github.com/Adgame-organization/puck-builder/commit/5ef8a96b6952d450927a499f1ec0f93610450864))
* release create-puck-app ([0722a65](https://github.com/Adgame-organization/puck-builder/commit/0722a656c7da4b4caa9212385affd62323a56c92))
* remove blocks from antd demo ([6d4a44a](https://github.com/Adgame-organization/puck-builder/commit/6d4a44ab0a3847193bc0595752a97b43c8c926bc))
* remove hardcoded API token from Strapi adaptor ([01722c2](https://github.com/Adgame-organization/puck-builder/commit/01722c2af9626e744ca3975fc9f74ebff3d801c6))
* remove renderComponentList in favour of overrides API ([97f65e3](https://github.com/Adgame-organization/puck-builder/commit/97f65e3f0411abab66a72ea3c9ecd485cd941b4e))
* remove unnecessary react-from-json ([802076a](https://github.com/Adgame-organization/puck-builder/commit/802076a9feb6fa9e34a7281da727f650c5f47984))
* remove unused docs app ([0e00cb1](https://github.com/Adgame-organization/puck-builder/commit/0e00cb1d6604a717d85d74533ca95a9a7500d067))
* rename "group" field type to "array" ([4f99c7d](https://github.com/Adgame-organization/puck-builder/commit/4f99c7d761b8e1cfa280fb5e74f6f369be84d7a2))
* rename generator to support npm and yarn shorthands ([1039122](https://github.com/Adgame-organization/puck-builder/commit/1039122537c8c3f4c4e8a4aa2474d2cc1a6d498e))
* rename initialHistories to initialHistory and update docs ([e367dd4](https://github.com/Adgame-organization/puck-builder/commit/e367dd44869480c6c0d6736f5d2c40e19f75721c))
* rename itemFields to groupFields ([03e71ef](https://github.com/Adgame-organization/puck-builder/commit/03e71ef01355484958586a6502a4dae45d2483a7))
* rename next-multi recipe to next ([31339e6](https://github.com/Adgame-organization/puck-builder/commit/31339e67f3f8761d1cf49645ae307ebf22615501))
* rename page to root in API ([8519675](https://github.com/Adgame-organization/puck-builder/commit/8519675ab450438ae459bee54a8ae00bdc7553b4))
* rename resolveProps to resolveData ([a361d29](https://github.com/Adgame-organization/puck-builder/commit/a361d29c0557153a887ebcdde0e053e4ce48b356))
* rename web app to demo ([6aa0a6c](https://github.com/Adgame-organization/puck-builder/commit/6aa0a6cf1171bd023a3fabf9dfb641eef936e069))
* replace background colour with placeholder elements ([b9499ab](https://github.com/Adgame-organization/puck-builder/commit/b9499abaaa35e912bce86f3bb60d2a7c84fb3abf))
* replace existing plugin API with plugin overrides ([46cca26](https://github.com/Adgame-organization/puck-builder/commit/46cca26c879a2ae53cf3e668f1dad37bb480bd84))
* replace history chevrons with undo/redo icons ([91dff22](https://github.com/Adgame-organization/puck-builder/commit/91dff227c382ddd5ad183cd69cb4d2fabd56f093))
* scroll block into view when using outline ([78be5b1](https://github.com/Adgame-organization/puck-builder/commit/78be5b1b8b27ec542bab087cd24864f4f61fdebe))
* setup demo app ([9d9060b](https://github.com/Adgame-organization/puck-builder/commit/9d9060b61a78ba57ac3c277601cc6ba090327e3f))
* show "No headings." in heading analyzer when no headings exist ([962a319](https://github.com/Adgame-organization/puck-builder/commit/962a31969432fca7459e8827053b090c9dfe2d33))
* show spinner if iframe load takes over 500ms ([cfecf54](https://github.com/Adgame-organization/puck-builder/commit/cfecf5499d06b8e90438dc151e5e915da06ccb87))
* streamline usePuck history API ([c8b2807](https://github.com/Adgame-organization/puck-builder/commit/c8b28075fde0081b8ac824eb256114c9b8836f9e))
* support booleans in radios and selects ([e79a835](https://github.com/Adgame-organization/puck-builder/commit/e79a835cc708fc06483f122183bc1406796c1d08))
* support compositional Puck ([22f053f](https://github.com/Adgame-organization/puck-builder/commit/22f053fa6209735c27b172eb625ea25d9df4bb3d))
* support custom component labels via the new label param ([712fb8e](https://github.com/Adgame-organization/puck-builder/commit/712fb8eeac0502b2baea4c86a4494eb8f924ed82))
* support React server components via @measured/puck/rsc bundle ([90ac161](https://github.com/Adgame-organization/puck-builder/commit/90ac161513d0c8c84f6b2bb968f7e5400c732a0a))
* support select input types ([553d46a](https://github.com/Adgame-organization/puck-builder/commit/553d46a5449fe7faba1123be83b8937eeab40634))
* track isDragging in app state ([841ae12](https://github.com/Adgame-organization/puck-builder/commit/841ae126d3f5e8a9e40c064b69d5ee675169e4cd))
* tweak demo copy ([75779f5](https://github.com/Adgame-organization/puck-builder/commit/75779f5822328aea0521d9a61a251d026373476b))
* tweak demo tagline copy ([49577ad](https://github.com/Adgame-organization/puck-builder/commit/49577ad720f62cd0f802b9e2dc6c0ee4a650bc60))
* tweak Field input focus state ([8012afd](https://github.com/Adgame-organization/puck-builder/commit/8012afdd9be2e3bc96185b4f0208b3ebdef0ed21))
* tweak primary CTA in demo ([fca8bec](https://github.com/Adgame-organization/puck-builder/commit/fca8bec9b2ba4453241248d25003ab1fac5b8df8))
* tweak style of external input modal ([a88905e](https://github.com/Adgame-organization/puck-builder/commit/a88905e00d11b0b5a36f405b5c9163400ecb4a3b))
* tweak wording for stats section in demo ([74d1d3c](https://github.com/Adgame-organization/puck-builder/commit/74d1d3c4b7eb49c9dc9859a728d18a349148692a))
* update demo title prefix to "Editing" ([44949a7](https://github.com/Adgame-organization/puck-builder/commit/44949a7177a88efbffc117dbac2b53dea0e341e4))
* update to 12-tint color palette ([d43da58](https://github.com/Adgame-organization/puck-builder/commit/d43da581da3bd79324ed846ca5c5cd0c86469b23))
* upgrade "next" recipe to typescript@5.5.4 ([60fe631](https://github.com/Adgame-organization/puck-builder/commit/60fe63113f8ad8bbce52d8457ee4372aa4b09509)), closes [#546](https://github.com/Adgame-organization/puck-builder/issues/546)
* upgrade chrome styles ([fa6cfc9](https://github.com/Adgame-organization/puck-builder/commit/fa6cfc9e663c526a7544dd8005c6a24e62638d1f))
* use Alt instead of Shift for interaction modifier ([c0950ea](https://github.com/Adgame-organization/puck-builder/commit/c0950eabdc442b2b89ba2a7d6921c6d6a5d0c32d))
* use h4s instead of h2s for outline and components ([25935ad](https://github.com/Adgame-organization/puck-builder/commit/25935ad0a8cd8ac6bcb4a37fcb42fd0e65a8ec66))
* use heading analyzer in demo ([5661b80](https://github.com/Adgame-organization/puck-builder/commit/5661b8090e8ae839fd5d40b26a1b351ea0c478aa))
* use InterVariable font ([88532fb](https://github.com/Adgame-organization/puck-builder/commit/88532fbc248a3a171dc2e26906dcd68ba5979570))
* use proper color system in demo ([f219ca6](https://github.com/Adgame-organization/puck-builder/commit/f219ca6deb709bf184303e1301ea5833e65c71ef))
* use smaller minimum size for page to accommodate different pages ([ebf0b4a](https://github.com/Adgame-organization/puck-builder/commit/ebf0b4ab2989b71fd1a736493c78c654fbecea83))
* use systematised colors ([d9ec3b0](https://github.com/Adgame-organization/puck-builder/commit/d9ec3b0373168d579eb47c27a8717ea70c095c99))
* zoom page out by 25% ([b27ea07](https://github.com/Adgame-organization/puck-builder/commit/b27ea07c9c18d4bc120f9f4cb1c2dc263051c33b))


### Performance Improvements

* add API for disabling auto-scroll due to performance issues ([3e5599e](https://github.com/Adgame-organization/puck-builder/commit/3e5599e687643094f7c80d0ce99a7c6a0c947e28))
* batch load initial iframe styles ([e585f20](https://github.com/Adgame-organization/puck-builder/commit/e585f2090c0457d124006bd6349a69c9883d3c03))
* bundle used react-feather icons only ([f4b0563](https://github.com/Adgame-organization/puck-builder/commit/f4b0563e38a93a5f582b0210b0d75a846e3bada4))
* cache data between fetchList calls in external fields ([04b7322](https://github.com/Adgame-organization/puck-builder/commit/04b7322d5fa5a5506b853c3dcde7a0b47d5b21bc))
* cache resolveProps if props haven't changed ([885cc14](https://github.com/Adgame-organization/puck-builder/commit/885cc14000f1c464550996c7f8a0a48524f29a1c))
* don't lock main thread when iframe styles changed ([e529e85](https://github.com/Adgame-organization/puck-builder/commit/e529e8525eb758025261577c424d8601c1ed8daf))
* improve render performance of fields ([d92de7f](https://github.com/Adgame-organization/puck-builder/commit/d92de7fe6eaf081deff139b010e4741d07ba6114))
* let resolveProps know which props changed ([5ea4745](https://github.com/Adgame-organization/puck-builder/commit/5ea4745c07e67211c5436c3ecf4985a56d4a31b6))
* reuse host window styles in iframes ([e7fe7e0](https://github.com/Adgame-organization/puck-builder/commit/e7fe7e0d7577bae1ab90650e5d7986d6745fbaf9))




## [0.15.0](https://github.com/measuredco/puck/compare/v0.14.2...v0.15.0) (2024-05-30)


### Bug Fixes

* align Drawer behaviour and docs with expectation ([e2cd445](https://github.com/measuredco/puck/commit/e2cd445f9d3abccca5b3daf95a4d92774a1dd47a))
* animate loader in iframe ([151a267](https://github.com/measuredco/puck/commit/151a2675bf8e700368aad0652192bc7d9fd2bbd6))
* don't inline link stylesheets for more predictable behaviour ([c0a331d](https://github.com/measuredco/puck/commit/c0a331de31c2d59e0e21ef342eb4c821850e10be))
* don't overflow external inputs inside arrays/objects ([42ef582](https://github.com/measuredco/puck/commit/42ef582cac949f8a24f9cdad204baf24d808b410))
* don't throw warning when user is correctly specifying root props ([46aa8ff](https://github.com/measuredco/puck/commit/46aa8ff3a68dcbd4aec4ebfef246d400469ca4d4))
* don't unintentionally use read-only styles in external fields ([acaf727](https://github.com/measuredco/puck/commit/acaf72746c2c82881a753dab6350161c774cd13f))
* fix defaultProps for root ([9a1cc7c](https://github.com/measuredco/puck/commit/9a1cc7c925f0b8a79b5f523fc7c8a6d6afdc2067))
* infer correct value types in Custom fields ([5c8c0e1](https://github.com/measuredco/puck/commit/5c8c0e1bfa9ca4da04e1cfac83c7a3ab5883fc5c))
* position field loader relative to sidebar, not fields ([2e8936e](https://github.com/measuredco/puck/commit/2e8936e4f416b0a04b273250cf3848447fb7e045))
* show external field modal when using custom interfaces ([6e97a0e](https://github.com/measuredco/puck/commit/6e97a0e18aea72581ba466e8cf3f87e60f3a65f3))
* show field loader when using field overrides ([8ccfa4c](https://github.com/measuredco/puck/commit/8ccfa4c0c3477b8e1d2db2fcc7a352b353643095))
* still load iframe if styles fail to load ([3e56bc1](https://github.com/measuredco/puck/commit/3e56bc1816c40c555de2eb28148baf5dcdcacbea))


### Features

* add AutoField component for using Puck fields inside custom fields ([106028b](https://github.com/measuredco/puck/commit/106028b59bb1a02756645bb76ce400adc398430d))
* add isEditing flag to `puck` object prop ([13bb1bd](https://github.com/measuredco/puck/commit/13bb1bdf03a62000c07a7d49a56ad09c1433fda0))
* add resolveFields API for dynamic fields ([0a18bdb](https://github.com/measuredco/puck/commit/0a18bdb9387f302565f74fa30f09fd912ea0769b))
* allow data prop to accept an empty object ([aedd401](https://github.com/measuredco/puck/commit/aedd401dd415e9d7dc1cbd6e33e59f5264180374))
* bump next recipe to Next@14 ([47a27ed](https://github.com/measuredco/puck/commit/47a27ed2c6aee80d4093975c399d96b950cb6956))
* enable override of publish button (breaking change) ([480467a](https://github.com/measuredco/puck/commit/480467ae2e06ae4d36c4fd67f75757557058f561))
* expose previous data to resolveData via `lastData` param ([dd7051e](https://github.com/measuredco/puck/commit/dd7051e8fbb3770714100c92f7f5c69d0be5dab6))
* replace history chevrons with undo/redo icons ([91dff22](https://github.com/measuredco/puck/commit/91dff227c382ddd5ad183cd69cb4d2fabd56f093))




## [0.14.2](https://github.com/measuredco/puck/compare/v0.14.0...v0.14.2) (2024-04-17)


### Bug Fixes

* add DropZone iframe compatablity mode for bug in Safari 17.2, 17.3 and 17.4 ([47496c2](https://github.com/measuredco/puck/commit/47496c25407b1a5fdb88333e1fbf5416efc51c50))
* check for optionality to handle race condition when dragging ([4dbd487](https://github.com/measuredco/puck/commit/4dbd487f6055ea3d38ab7de54e29bd6e4ffe84ce))
* defer iframe event binding until contentWindow is ready ([268ea53](https://github.com/measuredco/puck/commit/268ea53f969a892843c026e5ba9ced15edb9f801))
* don't crash if component is missing after referenced in category ([dc93789](https://github.com/measuredco/puck/commit/dc93789c4311e386b022b5c3d7c8595c00a8a212))
* don't force height of DropZones in custom interfaces ([046c255](https://github.com/measuredco/puck/commit/046c2557b6baa62994380c547ad006759b02cc92))
* don't query iframe document if not ready ([2b2ef32](https://github.com/measuredco/puck/commit/2b2ef32555387d4656872674289740b73dcd406b))
* don't throw undefined error if rapidly zooming browser in some environments ([282a8b0](https://github.com/measuredco/puck/commit/282a8b0d9f170ea95f5717c8b2ad08ec487d7d8f))
* fix drag-and-drop when entire Puck component used inside an iframe ([23db292](https://github.com/measuredco/puck/commit/23db292b9a2caa8e65117c08706843d3ed343454))
* fix support for boolean values in select fields ([c4a66ad](https://github.com/measuredco/puck/commit/c4a66addacd9acdc1f042ac54831b7dac38f2757))
* make draggable outlines consistent ([9008b70](https://github.com/measuredco/puck/commit/9008b70ed63155140a5241914c86456a2d4c9388))
* prevent grid layout issues in generated apps ([5c05f94](https://github.com/measuredco/puck/commit/5c05f945679f7f2c0edd5d99c652989c00920ac6))
* reflect value changes made via resolveData in radio fields ([9a7066f](https://github.com/measuredco/puck/commit/9a7066f4e837575aecbde0de4dd2bc96328a2a15))
* remove peer dependencies causing warnings ([041ca64](https://github.com/measuredco/puck/commit/041ca64a6fe96539681d88e9cd0e66a6ac27a6ce))
* resolve security warning when additional iframes present ([03ab0bd](https://github.com/measuredco/puck/commit/03ab0bd3314a4d6dfc863bdcf5f23246331b959b))
* use 100% width for Puck preview when iframe disabled ([#414](https://github.com/measuredco/puck/issues/414)) ([64303c8](https://github.com/measuredco/puck/commit/64303c8510df15b6ca94bc7be0294d9746193b35))
* use more custom interface friendly styles for iframes ([e6e01c6](https://github.com/measuredco/puck/commit/e6e01c6ec5b2bee9ab3a4a9425276ad4f1840c20))


### Performance Improvements

* add API for disabling auto-scroll due to performance issues ([3e5599e](https://github.com/measuredco/puck/commit/3e5599e687643094f7c80d0ce99a7c6a0c947e28))
* batch load initial iframe styles ([e585f20](https://github.com/measuredco/puck/commit/e585f2090c0457d124006bd6349a69c9883d3c03))
* don't lock main thread when iframe styles changed ([e529e85](https://github.com/measuredco/puck/commit/e529e8525eb758025261577c424d8601c1ed8daf))
* reuse host window styles in iframes ([e7fe7e0](https://github.com/measuredco/puck/commit/e7fe7e0d7577bae1ab90650e5d7986d6745fbaf9))




## [0.14.1](https://github.com/measuredco/puck/compare/v0.14.0...v0.14.1) (2024-04-01)


### Bug Fixes

* don't throw undefined error if rapidly zooming browser in some environments ([282a8b0](https://github.com/measuredco/puck/commit/282a8b0d9f170ea95f5717c8b2ad08ec487d7d8f))
* prevent grid layout issues in generated apps ([5c05f94](https://github.com/measuredco/puck/commit/5c05f945679f7f2c0edd5d99c652989c00920ac6))
* remove peer dependencies causing warnings ([041ca64](https://github.com/measuredco/puck/commit/041ca64a6fe96539681d88e9cd0e66a6ac27a6ce))




## [0.14.0](https://github.com/measuredco/puck/compare/v0.13.0...v0.14.0) (2024-03-28)


### Features

* add "name" prop to componentItem override ([45bbceb](https://github.com/measuredco/puck/commit/45bbceb1d2805455fa38f5bce91d892f6acacfbf))
* add `min` and `max` APIs to array fields ([53b7937](https://github.com/measuredco/puck/commit/53b7937675303bc3cf282bbd005309c8c276d1b2))
* add API to opt-out of iframes ([03dd90b](https://github.com/measuredco/puck/commit/03dd90b98c8a72e2af3baa8fc436ff7d4f4c7449))
* add Contentful field package ([d944288](https://github.com/measuredco/puck/commit/d94428819a958b4f566e5d0e8cd29b3bf1107881))
* add filter fields to ExternalFields ([7a55053](https://github.com/measuredco/puck/commit/7a5505374953ab8004720a9c91d8975ad3df94e5))
* add iframe support ([1d0bf57](https://github.com/measuredco/puck/commit/1d0bf57894200edc6b9a883a41937f7a3141074f))
* add `min` and `max` APIs to number fields ([4932a6e](https://github.com/measuredco/puck/commit/4932a6ef1b640410b3291cc67fb1f3153c04eac4))
* add `selectedItem` convenience param to usePuck ([c1224d0](https://github.com/measuredco/puck/commit/c1224d026d37bbbcf1366804947771902e29d9bb))
* add viewport switching ([ccf9149](https://github.com/measuredco/puck/commit/ccf91495f3a9f20a37051ba407abd992095a7b4d))
* enable mapping of table rows in external fields ([d50c56e](https://github.com/measuredco/puck/commit/d50c56e829b482f13c5ec08acc76eed70494d3cf))
* expose history via usePuck hook ([1b907cb](https://github.com/measuredco/puck/commit/1b907cba506dda7a2b1fe201a426e1c4bcfffecc))
* hide array Add button when array is readOnly ([4e27c3f](https://github.com/measuredco/puck/commit/4e27c3f18a0fa9a97dcd5fd240b01a133d7cb153))
* improve touch, contrast & keyboard a11y ([f975d87](https://github.com/measuredco/puck/commit/f975d87c5c2823e1f27161e6b6aa76a0d3fafad2))
* refine UI for external field modal ([6a2afa1](https://github.com/measuredco/puck/commit/6a2afa1abbd33a062bca6962b547b5534ed93036))
* support custom component labels via the new label param ([712fb8e](https://github.com/measuredco/puck/commit/712fb8eeac0502b2baea4c86a4494eb8f924ed82))
* update to 12-tint color palette ([d43da58](https://github.com/measuredco/puck/commit/d43da581da3bd79324ed846ca5c5cd0c86469b23))
* use InterVariable font ([88532fb](https://github.com/measuredco/puck/commit/88532fbc248a3a171dc2e26906dcd68ba5979570))


### Bug Fixes

* avoid FOUC of side bars on mobile ([83be956](https://github.com/measuredco/puck/commit/83be95643e4dcb96e30d0e6a9dbfe03c60f83002))
* correctly infer objectFields type from props ([e8991cc](https://github.com/measuredco/puck/commit/e8991cc90d5fd899a3357f6d1f50b382d90aad23))
* don't attempt to resolve data if component missing from config ([cc7d391](https://github.com/measuredco/puck/commit/cc7d391503cce3cbdbad9b769b5fb0fca6610cb0))
* don't flash nested DropZones on first drag ([38c3dc4](https://github.com/measuredco/puck/commit/38c3dc418e047b7f1218c8c50cf3ba3f2e6b74d8))
* don't unexpectedly show DropZone background ([2001fa2](https://github.com/measuredco/puck/commit/2001fa2bb6e69451f68cd94a3f872a0f83ff2b4b))
* ensure font loads for ExternalFields ([e9bca75](https://github.com/measuredco/puck/commit/e9bca751926db8a88f4f6ad2bc135a10705987d9))
* ensure heading-analyzer updates when content changes ([d75df7a](https://github.com/measuredco/puck/commit/d75df7a5c8ab365a4ef0de6c81c707e706433383))
* ensure select and radio fields support read only arrays ([cbdf66d](https://github.com/measuredco/puck/commit/cbdf66d348acc3461f321956c80dbc87a896069e))
* fix array field when used on root ([95280e6](https://github.com/measuredco/puck/commit/95280e686409342d3be3d68ec2acb90f7cfc570e))
* fix renderDropZone method in editor ([2c738dd](https://github.com/measuredco/puck/commit/2c738dd3761596925caecfee2bfdcb2960a10b83))
* lower opacity of DropZone background to support dark backgrounds ([9a5c0b8](https://github.com/measuredco/puck/commit/9a5c0b8ec57e41eeda3592d9a45ab00907a7a313))
* make getItemSummary optional on ExternalFields, as expected ([26bc4ff](https://github.com/measuredco/puck/commit/26bc4ff320cc93bf4376edd190b3779774f2f87c))
* only import Puck CSS on editor pages ([22a4182](https://github.com/measuredco/puck/commit/22a41823559d36fd06842496d59788004b316797))
* prevent unexpected field behaviour when pressing "Enter" key ([bf4f527](https://github.com/measuredco/puck/commit/bf4f5277f5d5cbf7a7ccf473130055575a5e983a))
* use strict return type for resolveData ([777cd3c](https://github.com/measuredco/puck/commit/777cd3c02a0b0ec8df1b81e19654b1179b56cb53))
* vertically align field icons ([fa92436](https://github.com/measuredco/puck/commit/fa924363c8f2e5ad3d866793ba34a1b488250ce5))



## [0.13.1](https://github.com/measuredco/puck/compare/v0.13.0...v0.13.1) (2023-12-23)


### Bug Fixes

* don't render plugins twice when using React strict mode ([f70c722](https://github.com/measuredco/puck/commit/f70c7222dd844257fab791fb4d5f8cf90e3361df))
* replace crypto with uuid lib ([a84e06f](https://github.com/measuredco/puck/commit/a84e06feec977bca1ac7e08b6e55ba8afe0141dc))




## [0.13.0](https://github.com/measuredco/puck/compare/v0.12.0...v0.13.0) (2023-12-19)


### Features

* add "ui" prop to Puck to set the initial state ([71f8b2f](https://github.com/measuredco/puck/commit/71f8b2f1143b9774fd763a8f5a3685957474237b))
* add APIs to restrict components dropped in DropZones ([28f24f9](https://github.com/measuredco/puck/commit/28f24f927a2d1c378834f124e85abfcc2267a0d7))
* add data migration API ([f987324](https://github.com/measuredco/puck/commit/f987324804d59e55a3a5e6770389305d88f39194))
* add generic Config type to Puck and Render components ([1c4b97f](https://github.com/measuredco/puck/commit/1c4b97f0a8487785b5a677a2a1ba168b292e5ca4))
* add object field type ([243278b](https://github.com/measuredco/puck/commit/243278bb01e34de6123a47d902fcc58ea7678642))
* add Puck class to outer div ([0698a12](https://github.com/measuredco/puck/commit/0698a127e093cb2cf66fa35dafca80ebd4c73f89))
* add search to external fields ([fe3b439](https://github.com/measuredco/puck/commit/fe3b4394c7464eeab69e1af5a96bd525bd15872a))
* add transformProps lib to migrate component props ([1ec2a78](https://github.com/measuredco/puck/commit/1ec2a78968e10efc5666aaf994b6feea6c820449))
* add usePuck hook ([13f3ccb](https://github.com/measuredco/puck/commit/13f3ccbd314e5a82f5a509c713ad34d3d0614b34))
* introduce UI overrides API ([8a7c325](https://github.com/measuredco/puck/commit/8a7c3252d8aed2c160e390c1ba7c411d8b884b6f))
* make onPublish prop optional ([60f317f](https://github.com/measuredco/puck/commit/60f317f75bb1a18bd59819d1323c45266334138c))
* remove renderComponentList in favour of overrides API ([97f65e3](https://github.com/measuredco/puck/commit/97f65e3f0411abab66a72ea3c9ecd485cd941b4e))
* replace existing plugin API with plugin overrides ([46cca26](https://github.com/measuredco/puck/commit/46cca26c879a2ae53cf3e668f1dad37bb480bd84))
* support compositional Puck ([22f053f](https://github.com/measuredco/puck/commit/22f053fa6209735c27b172eb625ea25d9df4bb3d))
* track isDragging in app state ([841ae12](https://github.com/measuredco/puck/commit/841ae126d3f5e8a9e40c064b69d5ee675169e4cd))


### Bug Fixes

* don't crash when loading external data into array field items ([d13d00b](https://github.com/measuredco/puck/commit/d13d00b67a7106889a0fc3beae94fa9c2e5bfcc3))
* enable user to pass in config without casting ([ee211e2](https://github.com/measuredco/puck/commit/ee211e2a3ae6fbcb3d2b12316172e49f11fecd1e)), closes [#185](https://github.com/measuredco/puck/issues/185)
* fix broken nested array fields ([7a3949f](https://github.com/measuredco/puck/commit/7a3949f7f10b2323504b31bcae9a9aa5d46f4074))
* fix initial UI state on mobile ([3aa0057](https://github.com/measuredco/puck/commit/3aa005740b650879d95318a01ac9e2949ec5e9d8))
* prevent pollution of global styles into component overlay ([3fcf8e3](https://github.com/measuredco/puck/commit/3fcf8e3f9975a14d8bc355e025585c9f55f233b1))
* record history when a user selects an item ([3a649c9](https://github.com/measuredco/puck/commit/3a649c9922cc0a6c8c6c2b96f5fbe44bd3a6176a))
* remove packages triggering superficial security warning ([0f52b61](https://github.com/measuredco/puck/commit/0f52b610769550b3365ab91f856b264d02d005c2))
* respect label in radio fields ([fe550d7](https://github.com/measuredco/puck/commit/fe550d795eed20ce3a3004a2e7c8dfdbaca0b67d))
* set aria-label on all loaders ([9adca27](https://github.com/measuredco/puck/commit/9adca2774dae5e532134be76de9c79e0b4af751c))
* stop color pollution in external field modals ([2e1b5ef](https://github.com/measuredco/puck/commit/2e1b5ef330ebbddee8c44b5002be65c2361fda4f))
* use correct title path in recipes ([60244ba](https://github.com/measuredco/puck/commit/60244ba5637d889530ae646986b1890c6b89efea))
* watch puck.config.tsx in Remix recipe ([ecb276c](https://github.com/measuredco/puck/commit/ecb276c39fd3cf03d524b221b3f34b3a8df99823))




## [0.12.0](https://github.com/measuredco/puck/compare/v0.11.0...v0.12.0) (2023-11-23)


### Features

* support React server components via @measured/puck/rsc bundle ([90ac161](https://github.com/measuredco/puck/commit/90ac161513d0c8c84f6b2bb968f7e5400c732a0a))
* add remix recipe ([f882878](https://github.com/measuredco/puck/commit/f882878e081b44a2b0bd1f773114f3c35b8398b1))
* add explicit rsc and css exports ([0b6a527](https://github.com/measuredco/puck/commit/0b6a52792628225d392775ba6b3d549aab5be59b))
* improve responsive behaviour ([889b4c7](https://github.com/measuredco/puck/commit/889b4c7a91f1a9b95c9fd7d4b3cdb20b2ee4946b))
* add visibility toggle for right-hand sidebar ([3d6c5d4](https://github.com/measuredco/puck/commit/3d6c5d479f2237400e0dc7cab6d5ed5773058d3b))
* allow custom fields to set UI state during onChange ([388793c](https://github.com/measuredco/puck/commit/388793c9b0ac27b14a538b70357abd0dc4f26779))
* expose field "id" to custom fields ([849161e](https://github.com/measuredco/puck/commit/849161ef0e2e2e01f6a1b9f517ba4bcc66cf6bd1))
* improve IconButton accessibility ([4c71d39](https://github.com/measuredco/puck/commit/4c71d39d1138f0fc823ada04710d0057433475b7))
* add new monospaced font stack ([c484ea6](https://github.com/measuredco/puck/commit/c484ea6bae5e6283bf82860e9a84413e60720163))
* tweak Field input focus state ([8012afd](https://github.com/measuredco/puck/commit/8012afdd9be2e3bc96185b4f0208b3ebdef0ed21))


### Bug Fixes

* don't enable style pollution of input background color ([bb1a76b](https://github.com/measuredco/puck/commit/bb1a76b314f744b76197cb670c448abc7896a45e))
* don't reset array item labels when changing order ([57563e1](https://github.com/measuredco/puck/commit/57563e1da1826dbfa08a32fabb27153e4618ab40))
* ensure field icon and label are vertically aligned ([caa40e0](https://github.com/measuredco/puck/commit/caa40e0499570831e5779f9a6a031e38f054c3f8))
* ensure root render receives props from latest data API ([abb6ff1](https://github.com/measuredco/puck/commit/abb6ff1bd53d7f93ef0ac287290712943ca2c1ce))
* export missing PuckAction type ([f22f32d](https://github.com/measuredco/puck/commit/f22f32dc5569eaa9cea90f896cf4cdafc59940fe))
* fix rootResolver behaviour when using recommended root data API ([5c13de5](https://github.com/measuredco/puck/commit/5c13de58a335f2b4c81f2b424fee8b4a356fb563))
* migrate to @hello-pangea/dnd to fix defaultProps warning ([2c97362](https://github.com/measuredco/puck/commit/2c97362e15f5d2046dc216c6e5fc25f5199d0a37))
* prevent inconsistent default input font-size ([99f90b3](https://github.com/measuredco/puck/commit/99f90b3ba81bf286758685f7c2a457abaffeb2e1))
* show a default value when no placeholder set on external fields ([e30b5b6](https://github.com/measuredco/puck/commit/e30b5b69b6a9f6467db4b05c55ffdc5f1ecebcfb))
* stop `zones` getting wiped out if data prop updated ([0c4514f](https://github.com/measuredco/puck/commit/0c4514fcde24d0ba585fea0981d73e7a8188840f))
* stop style pollution into array field items ([03b89d5](https://github.com/measuredco/puck/commit/03b89d568ded7cae6eb34e0dcf45e60eb758b552))
* stretch external field table to width of modal ([f6d89f6](https://github.com/measuredco/puck/commit/f6d89f69f1a24f94479365b9d955a3ea60b17b8d))
* use correct root data API in next recipe example database ([b598144](https://github.com/measuredco/puck/commit/b5981446ee64a3b5451eb17b8d42263f42df179f))
* use Inter font in button type Buttons ([1973847](https://github.com/measuredco/puck/commit/19738473723c49ddb0d764864283bf597280c7c5))




## [0.11.3](https://github.com/measuredco/puck/compare/v0.11.2...v0.11.3) (2023-11-12)


### Bug Fixes

* ensure field debounce doesn't sporadically lock preview update ([487ab83](https://github.com/measuredco/puck/commit/487ab83e2ffa42ad93ab90c2eadea9486008de9b))
* stop generator crashing on Windows due to commits with single quotes ([ab9d43f](https://github.com/measuredco/puck/commit/ab9d43f08113ef1c3f6fa30f7f87ba881b74a1e1))




## [0.11.2](https://github.com/measuredco/puck/compare/v0.11.1...v0.11.2) (2023-11-11)


### Bug Fixes

* add missing database.json back to generated next recipe ([3c15255](https://github.com/measuredco/puck/commit/3c15255a8f7f5e77c047ce853382f92715045c8d))




## [0.11.1](https://github.com/measuredco/puck/compare/v0.11.0...v0.11.1) (2023-11-11)


### Bug Fixes

* include next recipe in generator ([5b833ef](https://github.com/measuredco/puck/commit/5b833efd0f87b21e57303256e89f1456254b82bf))




## [0.11.0](https://github.com/measuredco/puck/compare/v0.10.0...v0.11.0) (2023-11-03)


### Bug Fixes

* don't flicker root DropZone when dragging ([358435c](https://github.com/measuredco/puck/commit/358435c36a216e6749be73599ab631ffdd8069c8))
* ensure array fields can render if value is undefined ([47ab3c9](https://github.com/measuredco/puck/commit/47ab3c971e4aafec443e8b4d73e7c921dec38ac6))
* isolate external field modal from high z-indexes ([fdf97c7](https://github.com/measuredco/puck/commit/fdf97c7f6da6035447e9b7deec9019217875c4ef))
* make Field types required based on type ([daf36ac](https://github.com/measuredco/puck/commit/daf36ac8864dc1b0f324c3e08294f9d62568acf2))
* prevent global style pollution in external fields ([429731d](https://github.com/measuredco/puck/commit/429731dbb77de2d8ca1c4a88832c73294a9b141c))
* prevent long header titles from rendering over actions ([4613df4](https://github.com/measuredco/puck/commit/4613df47fdde9ac796419f02a2d9f649892b3d35))
* use correct heading component for external inputs ([462266d](https://github.com/measuredco/puck/commit/462266d069b04a3de09684af4b816e1d1dac46dc))


### Features

* add categories API for grouping components in side bar ([594cc76](https://github.com/measuredco/puck/commit/594cc76c763a7d2ce06cd78f34a4683c0fa89f8e))
* add read-only states to all field types ([746d896](https://github.com/measuredco/puck/commit/746d896996f01d086d557f2a2918f4e76e3f5b35))
* add icon to external fields ([a3a018b](https://github.com/measuredco/puck/commit/a3a018bb1876fd4b831676e8ff848052ec7ba527))
* add loading state to external field modal ([5b4fc92](https://github.com/measuredco/puck/commit/5b4fc92f96caf83148fa335321dad3a5f1a65789))
* add lock icon when field is read-only ([a051000](https://github.com/measuredco/puck/commit/a05100016fed1e368be333f2707087b152fb4c0e))
* add mapProp API to external fields ([86c4979](https://github.com/measuredco/puck/commit/86c49795ac1d198836242772ec01bd755ee699c8))
* add renderComponentList API ([ec985e3](https://github.com/measuredco/puck/commit/ec985e3d28a4915f8fb2816b9599060d20bbf621))
* add resolveData API for modifying props dynamically ([c1181ad](https://github.com/measuredco/puck/commit/c1181ad9b1de6cc036cfedebcc3e57334ef62196))
* deprecate adaptors in favour of new external field APIs ([7f13efc](https://github.com/measuredco/puck/commit/7f13efc769ddc77fc7931a8191796f017354e89a))
* deprecate magic adaptor _data behaviour in favour of resolveData API ([4ee31e7](https://github.com/measuredco/puck/commit/4ee31e7c0d93578976b2b655e0c56477571f8341))
* deprecate props under root in favour of `root.props` ([7593584](https://github.com/measuredco/puck/commit/759358446e01b4320e55156dbe849d264e4e7edf))
* make external field more consistent with other fields ([5bfbc5b](https://github.com/measuredco/puck/commit/5bfbc5bf71b0af72e97e24b5828ad7009836e51e))
* update next recipe to render to static ([a333857](https://github.com/measuredco/puck/commit/a33385783022179e12ef3f732cb4e2e387985030))


### Performance Improvements

* cache data between fetchList calls in external fields ([04b7322](https://github.com/measuredco/puck/commit/04b7322d5fa5a5506b853c3dcde7a0b47d5b21bc))
* improve render performance of fields ([d92de7f](https://github.com/measuredco/puck/commit/d92de7fe6eaf081deff139b010e4741d07ba6114))




## [0.10.0](https://github.com/measuredco/puck/compare/v0.9.0...v0.10.0) (2023-10-18)


### Bug Fixes

* ensure layer tree consistently shows selected item ([6a9145c](https://github.com/measuredco/puck/commit/6a9145c23b1461e46f3568e9a107d3c429aa87d2))
* only render strings or numbers in external adaptors ([3c337be](https://github.com/measuredco/puck/commit/3c337be171c5fa6ad464f5a16fcb7f17e9b1a4f9))
* prevent style pollution for select fields ([fa7af7d](https://github.com/measuredco/puck/commit/fa7af7da9d770d5e790944d421dc0a30f0da84b1))


### Features

* align component list UI with refreshed array fields ([74cd3a7](https://github.com/measuredco/puck/commit/74cd3a7ba9100e5e7e1a5e626511906fbdf75b98))
* enable drag-and-drop of array items ([12800f8](https://github.com/measuredco/puck/commit/12800f816b872d614ed50c9fcf3179f41dbbbfb2))
* expose state dispatcher to plugins ([e94accb](https://github.com/measuredco/puck/commit/e94accb22bae2afbb30728e0d58f8c6a558b3e39))
* expose state to plugins, removing data ([89f9f2e](https://github.com/measuredco/puck/commit/89f9f2e3a526a1459d14bdd7301f2c761f7c340d))
* expose state to renderHeader, removing data ([29ddaaf](https://github.com/measuredco/puck/commit/29ddaaf376b57134be46a489e7686978d0465669))
* record application state in undo/redo history ([0f2d7c5](https://github.com/measuredco/puck/commit/0f2d7c55aebe898925084ff27d5af97e9a7b9090))
* refresh UI for array fields ([5ef8a96](https://github.com/measuredco/puck/commit/5ef8a96b6952d450927a499f1ec0f93610450864))




## [0.9.0](https://github.com/measuredco/puck/compare/v0.8.0...v0.9.0) (2023-10-06)


### Bug Fixes

* fill empty space under puck-root ([d42cfb6](https://github.com/measuredco/puck/commit/d42cfb69aa7c7e0b70321b4b509efd3c6fdbe393))
* prevent global pollution of Heading color ([327721c](https://github.com/measuredco/puck/commit/327721c705546a538fedd0a3b794926605cd58fc))
* render `icon` if provided to FieldLabel ([ae01891](https://github.com/measuredco/puck/commit/ae01891ce55b844c5a76a20faa33e5df16c2d593))
* reset stacking context for each item ([a826492](https://github.com/measuredco/puck/commit/a826492ee7bab57710edad6b7df498f294398606))


### Features

* add undo/redo history ([222697e](https://github.com/measuredco/puck/commit/222697e5b9e95e3b28d0dfd9ac0b85f46c56068e))
* make actions sticky to component scroll ([f3e5b50](https://github.com/measuredco/puck/commit/f3e5b50d921f0c75978f805a7d44b88511fbaf69))




## [0.8.0](https://github.com/measuredco/puck/compare/v0.7.0...v0.8.0) (2023-10-03)


 ### Features

 * introduce DropZone API for nesting components and advanced layouts ([5053a84](https://github.com/measuredco/puck/commit/5053a8430de1f4bfb6fb7a4b1f194a1474ed3ae3))
 * introduce new outline UI ([e32c4ff](https://github.com/measuredco/puck/commit/e32c4ff784a2fcc5f2e2879807c045bd2742f4ac))
 * redesign action overlay and move outside of component ([5145cba](https://github.com/measuredco/puck/commit/5145cba6595e2051d14a7bfd37d9b180d9553330))
 * cast number field types to Number ([d5df959](https://github.com/measuredco/puck/commit/d5df95946dd9abf1502cb21bfc8682dd98efb1e1))


 ### Bug Fixes

 * add missing id type to render props ([18753cf](https://github.com/measuredco/puck/commit/18753cf1142d70f7100bc6fd5aa913813491042e))
 * add missing optional chaining operator to next recipe ([a368319](https://github.com/measuredco/puck/commit/a368319ec73adfc5bce8fb6bd31ac8e46e669400))
 * don't show margin underneath placeholder when dragging in ([2620455](https://github.com/measuredco/puck/commit/26204557b6fc92b208ee1051921965b793a78b1e))
 * don't switch between controlled/uncontrolled inputs ([b20e298](https://github.com/measuredco/puck/commit/b20e2980be6df6d57f9dfb6987b512686ccc5a7a))
 * ensure form styles override global styles ([104091a](https://github.com/measuredco/puck/commit/104091ac87c95d1395687d1785e621f5580efd87))
 * ensure hooks can always be used within render functions ([cbf8e8e](https://github.com/measuredco/puck/commit/cbf8e8e49fc5d43a8818cf41010cfba6034bbf28))
 * ensure types allow for nested arrays ([06b145b](https://github.com/measuredco/puck/commit/06b145b9089548725166fec3dd54f757b6e932cc))
 * fix unpredictable rendering of drop placeholder ([bf5f16b](https://github.com/measuredco/puck/commit/bf5f16b394ef950318949e9a440dd1bf2407636e))
 * only show sidebar scroll bars if necessary ([87c8736](https://github.com/measuredco/puck/commit/87c87369003f417600ca0a7bb38041de5c675afb))
 * prevent global styles from overwriting fieldset styles ([550bd0e](https://github.com/measuredco/puck/commit/550bd0ef9263766817709cea2c0365e9bd3e95cf))
 * respect labels for array item fields ([f2e7843](https://github.com/measuredco/puck/commit/f2e7843de0b12df4b15b1c1dd953e8b4d82ce366))
 * prevent global styles from overwriting outline styles ([1dc222c](https://github.com/measuredco/puck/commit/1dc222cfa5924aca2e5eb5ea535f77cfe2fe1281))
 * prevent styles from clashing with dark mode root element ([8506e8e](https://github.com/measuredco/puck/commit/8506e8e7f72aa8df7e69a1e7349eae273ebdee0e))
 * upgrade next version in recipe to ensure vercel builds pass ([c2d7fae](https://github.com/measuredco/puck/commit/c2d7faeed59fea5c7c795f76915cf354151d644d))


 ### Performance Improvements

 * reduce bundle size by 61% by removing unused react-feather icons ([f4b0563](https://github.com/measuredco/puck/commit/f4b0563e38a93a5f582b0210b0d75a846e3bada4))


## [0.7.0](https://github.com/measuredco/puck/compare/v0.6.2...v0.7.0) (2023-09-14)


### Features

* add support for custom fields ([b46b721](https://github.com/measuredco/puck/commit/b46b721aea70698e249cd3dfff34f88717952da7))




## [0.6.2](https://github.com/measuredco/puck/compare/v0.6.1...v0.6.2) (2023-09-07)


### Bug Fixes

* bust cache in generated app on publish ([6e1c8ed](https://github.com/measuredco/puck/commit/6e1c8ed9df1be9634e49d18edc8c42c7ebf6e864))
* don't 404 on homepage in generated app ([8fd7b3b](https://github.com/measuredco/puck/commit/8fd7b3b38a046776f69105e25f86a622b5e41c40))
* don't call API when building generated app ([8041fc1](https://github.com/measuredco/puck/commit/8041fc1da598f61b4c30c711d8233466c8643099))
* fix type issues in generated app ([b16e98e](https://github.com/measuredco/puck/commit/b16e98e15407678524d904211ecc74230b205018))




## [0.6.1](https://github.com/measuredco/puck/compare/v0.6.0...v0.6.1) (2023-09-06)


### Bug Fixes

* add missing glob dependency for create-puck-app ([7dbe190](https://github.com/measuredco/puck/commit/7dbe1902bf1c31a674b35c1269ee44ac09aac763))
* return component to original position when drag cancelled ([cae760f](https://github.com/measuredco/puck/commit/cae760fbfb8497de09311bb81e3059c07efe75ac))
* use correct peer dependencies for react ([39f4e7f](https://github.com/measuredco/puck/commit/39f4e7fab5818266aa75046d2c2ca6e858803a13))




## [0.6.0](https://github.com/measuredco/puck/compare/v0.5.0...v0.6.0) (2023-08-15)


### Bug Fixes

* ensure component label doesn't inherit user styles ([5c0d65b](https://github.com/measuredco/puck/commit/5c0d65b8519897c454b2f321330dd24dd30f831f))
* make default props on root optional ([dc5b1ae](https://github.com/measuredco/puck/commit/dc5b1aec6518f1c3ed1ad8f798bcfe359077865f))


### Features

* export Button and IconButton to make extending header seamless ([d98eb29](https://github.com/measuredco/puck/commit/d98eb298f14ef0ae8888a710cadf85fac13e084d))




## [0.5.0](https://github.com/measuredco/puck/compare/v0.4.1...v0.5.0) (2023-08-14)


### Features

* add headerTitle and headerPath APIs ([ae5c7c2](https://github.com/measuredco/puck/commit/ae5c7c2083b16e8f69e9995d74f8be7fffbe6ea5))
* gracefully fallback if component definition doesn't exist ([d7e3190](https://github.com/measuredco/puck/commit/d7e31901626734ce43cd9161971d9811b6d5c483))
* refine editor styles ([9e57649](https://github.com/measuredco/puck/commit/9e57649e7bd9444b290122ecbc1c40bc6d88c3d1))
* support booleans in radios and selects ([acb7a96](https://github.com/measuredco/puck/commit/acb7a96b727c9bc6d4599dcd06e2448c10e82d0f))




## [0.4.1](https://github.com/measuredco/puck/compare/v0.4.0...v0.4.1) (2023-08-09)


### Bug Fixes

* move incorrect dependency to devDependencies ([6ffd86c](https://github.com/measuredco/puck/commit/6ffd86c9d668449991a0642d79fa85c1a364deae))




## [0.4.0](https://github.com/measuredco/puck/compare/v0.3.2...v0.4.0) (2023-07-07)


### Bug Fixes

* avoid hardcoding localhost in strapi adaptor ([f8d920c](https://github.com/measuredco/puck/commit/f8d920c6d188e9b8c9ea1bc7cb58d63e6f25d823))
* stretch ExternalInput button to fill container ([69ee221](https://github.com/measuredco/puck/commit/69ee221e41ab09aae3d4d4d89c92d799d9b387f9))


### Features

* add adaptor-fetch package ([eaf7875](https://github.com/measuredco/puck/commit/eaf787527c0f76f3d43cbb8fd6fd1542aebdf5b0))
* rename page to root in API ([8519675](https://github.com/measuredco/puck/commit/8519675ab450438ae459bee54a8ae00bdc7553b4))




## [0.3.2](https://github.com/measuredco/puck/compare/v0.3.1...v0.3.2) (2023-07-06)


### Bug Fixes

* export correct files for Strapi adaptor ([577a849](https://github.com/measuredco/puck/commit/577a84928cd3c8e4f7a57d1f2746abd69db23eeb))
* set correct font family for empty outlines ([3d45841](https://github.com/measuredco/puck/commit/3d4584190e13f9b07077d6012d1ce4197de0a436))




## [0.3.1](https://github.com/measuredco/puck/compare/v0.3.0...v0.3.1) (2023-07-05)


### Bug Fixes

* include .gitignore in recipes ([e18bf67](https://github.com/measuredco/puck/commit/e18bf67e366c431a6bea08a9965b7d40866119e2))




## [0.3.0](https://github.com/measuredco/puck/compare/v0.2.2...v0.3.0) (2023-07-05)


### Features

* release create-puck-app ([0722a65](https://github.com/measuredco/puck/commit/0722a656c7da4b4caa9212385affd62323a56c92))




## [0.2.2](https://github.com/measuredco/puck/compare/v0.2.1...v0.2.2) (2023-07-05)


### Bug Fixes

* ensure margin collapse fix works with coloured backgrounds ([fdec4fa](https://github.com/measuredco/puck/commit/fdec4faac197e541a04785ab7c16919223b3ec9d))




## [0.2.1](https://github.com/measuredco/puck/compare/v0.2.0...v0.2.1) (2023-07-05)


### Bug Fixes

* remove border on draggable components ([726a27c](https://github.com/measuredco/puck/commit/726a27cc0df6b8c439d0aa8e0dd05cac32774b3e))




## [0.2.0](https://github.com/measuredco/puck/compare/v0.1.3...v0.2.0) (2023-07-04)


### Bug Fixes

* inject react into libraries ([7e10d91](https://github.com/measuredco/puck/commit/7e10d9141901aaf79ae4ebfa3a7b60b589c6c715))
* render drag and drop correctly when using margins ([f88025b](https://github.com/measuredco/puck/commit/f88025bf27479036426305a1004acfe8f0ab6644))


### Features

* add icons to inputs ([f47482e](https://github.com/measuredco/puck/commit/f47482e8cabd334360666ea90d2e6a12b3648cf9))
* improve UI for fields ([aa0d2fe](https://github.com/measuredco/puck/commit/aa0d2fe56ff633b9c2cff2023ae00c8b9ec04df3))
* rename "group" field type to "array" ([4f99c7d](https://github.com/measuredco/puck/commit/4f99c7d761b8e1cfa280fb5e74f6f369be84d7a2))




## [0.1.6](https://github.com/measuredco/puck/compare/v0.1.3...v0.1.6) (2023-07-04)


### Bug Fixes

* inject react into libraries ([7e10d91](https://github.com/measuredco/puck/commit/7e10d9141901aaf79ae4ebfa3a7b60b589c6c715))




## 0.1.5 (2023-07-03)

- Publish all packages
