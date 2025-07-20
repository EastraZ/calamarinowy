/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/sellauth/checkout/route";
exports.ids = ["app/api/sellauth/checkout/route"];
exports.modules = {

/***/ "(rsc)/./app/api/sellauth/checkout/route.ts":
/*!********************************************!*\
  !*** ./app/api/sellauth/checkout/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(req) {\n    try {\n        const { productId, variantId, email } = await req.json();\n        const API_KEY = process.env.SELLAUTH_API_KEY;\n        const SHOP_ID = process.env.SELLAUTH_SHOP_ID;\n        if (!API_KEY || !SHOP_ID) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'SellAuth API credentials not set.'\n            }, {\n                status: 500\n            });\n        }\n        if (!productId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Missing productId.'\n            }, {\n                status: 400\n            });\n        }\n        // Get IP and user agent from headers (fallbacks for local dev)\n        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';\n        const user_agent = req.headers.get('user-agent') || 'unknown';\n        const body = {\n            cart: [\n                {\n                    productId,\n                    variantId: variantId || productId,\n                    quantity: 1\n                }\n            ],\n            ip,\n            user_agent\n        };\n        if (email) {\n            body.email = email;\n        }\n        const response = await fetch(`https://api.sellauth.com/v1/shops/${SHOP_ID}/checkout`, {\n            method: 'POST',\n            headers: {\n                'Authorization': `Bearer ${API_KEY}`,\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(body)\n        });\n        const data = await response.json();\n        if (!data.success) {\n            console.error('SellAuth API error:', response.status, data);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Checkout failed',\n                details: data\n            }, {\n                status: 400\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            url: data.url\n        });\n    } catch (error) {\n        console.error('Internal server error in SellAuth checkout route:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal server error',\n            details: error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbGxhdXRoL2NoZWNrb3V0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdEO0FBRWpELGVBQWVDLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNSCxJQUFJSSxJQUFJO1FBQ3RELE1BQU1DLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1FBQzVDLE1BQU1DLFVBQVVILFFBQVFDLEdBQUcsQ0FBQ0csZ0JBQWdCO1FBRTVDLElBQUksQ0FBQ0wsV0FBVyxDQUFDSSxTQUFTO1lBQ3hCLE9BQU9YLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQUVPLE9BQU87WUFBb0MsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3pGO1FBQ0EsSUFBSSxDQUFDWCxXQUFXO1lBQ2QsT0FBT0gscURBQVlBLENBQUNNLElBQUksQ0FBQztnQkFBRU8sT0FBTztZQUFxQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDMUU7UUFFQSwrREFBK0Q7UUFDL0QsTUFBTUMsS0FBS2IsSUFBSWMsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCO1FBQ2pELE1BQU1DLGFBQWFoQixJQUFJYyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUI7UUFFcEQsTUFBTUUsT0FBWTtZQUNoQkMsTUFBTTtnQkFBQztvQkFBRWpCO29CQUFXQyxXQUFXQSxhQUFhRDtvQkFBV2tCLFVBQVU7Z0JBQUU7YUFBRTtZQUNyRU47WUFDQUc7UUFDRjtRQUNBLElBQUliLE9BQU87WUFDVGMsS0FBS2QsS0FBSyxHQUFHQTtRQUNmO1FBRUEsTUFBTWlCLFdBQVcsTUFBTUMsTUFBTSxDQUFDLGtDQUFrQyxFQUFFWixRQUFRLFNBQVMsQ0FBQyxFQUFFO1lBQ3BGYSxRQUFRO1lBQ1JSLFNBQVM7Z0JBQ1AsaUJBQWlCLENBQUMsT0FBTyxFQUFFVCxTQUFTO2dCQUNwQyxnQkFBZ0I7WUFDbEI7WUFDQVksTUFBTU0sS0FBS0MsU0FBUyxDQUFDUDtRQUN2QjtRQUVBLE1BQU1RLE9BQU8sTUFBTUwsU0FBU2hCLElBQUk7UUFDaEMsSUFBSSxDQUFDcUIsS0FBS0MsT0FBTyxFQUFFO1lBQ2pCQyxRQUFRaEIsS0FBSyxDQUFDLHVCQUF1QlMsU0FBU1IsTUFBTSxFQUFFYTtZQUN0RCxPQUFPM0IscURBQVlBLENBQUNNLElBQUksQ0FBQztnQkFBRU8sT0FBTztnQkFBbUJpQixTQUFTSDtZQUFLLEdBQUc7Z0JBQUViLFFBQVE7WUFBSTtRQUN0RjtRQUVBLE9BQU9kLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRXlCLEtBQUtKLEtBQUtJLEdBQUc7UUFBQztJQUMzQyxFQUFFLE9BQU9sQixPQUFPO1FBQ2RnQixRQUFRaEIsS0FBSyxDQUFDLHFEQUFxREE7UUFDbkUsT0FBT2IscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFTyxPQUFPO1lBQXlCaUIsU0FBU2pCO1FBQU0sR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDN0Y7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx2ZWxvY2l0eVxcRGVza3RvcFxcV2Vic2l0ZXNcXG5ldyBjYWxhbWFyaVxcYXBwXFxhcGlcXHNlbGxhdXRoXFxjaGVja291dFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0SWQsIHZhcmlhbnRJZCwgZW1haWwgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuU0VMTEFVVEhfQVBJX0tFWTtcclxuICAgIGNvbnN0IFNIT1BfSUQgPSBwcm9jZXNzLmVudi5TRUxMQVVUSF9TSE9QX0lEO1xyXG5cclxuICAgIGlmICghQVBJX0tFWSB8fCAhU0hPUF9JRCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1NlbGxBdXRoIEFQSSBjcmVkZW50aWFscyBub3Qgc2V0LicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxuICAgIGlmICghcHJvZHVjdElkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyBwcm9kdWN0SWQuJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBJUCBhbmQgdXNlciBhZ2VudCBmcm9tIGhlYWRlcnMgKGZhbGxiYWNrcyBmb3IgbG9jYWwgZGV2KVxyXG4gICAgY29uc3QgaXAgPSByZXEuaGVhZGVycy5nZXQoJ3gtZm9yd2FyZGVkLWZvcicpIHx8ICcxMjcuMC4wLjEnO1xyXG4gICAgY29uc3QgdXNlcl9hZ2VudCA9IHJlcS5oZWFkZXJzLmdldCgndXNlci1hZ2VudCcpIHx8ICd1bmtub3duJztcclxuXHJcbiAgICBjb25zdCBib2R5OiBhbnkgPSB7XHJcbiAgICAgIGNhcnQ6IFt7IHByb2R1Y3RJZCwgdmFyaWFudElkOiB2YXJpYW50SWQgfHwgcHJvZHVjdElkLCBxdWFudGl0eTogMSB9XSxcclxuICAgICAgaXAsXHJcbiAgICAgIHVzZXJfYWdlbnQsXHJcbiAgICB9O1xyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGJvZHkuZW1haWwgPSBlbWFpbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zZWxsYXV0aC5jb20vdjEvc2hvcHMvJHtTSE9QX0lEfS9jaGVja291dGAsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtBUElfS0VZfWAsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYgKCFkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignU2VsbEF1dGggQVBJIGVycm9yOicsIHJlc3BvbnNlLnN0YXR1cywgZGF0YSk7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQ2hlY2tvdXQgZmFpbGVkJywgZGV0YWlsczogZGF0YSB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHVybDogZGF0YS51cmwgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ludGVybmFsIHNlcnZlciBlcnJvciBpbiBTZWxsQXV0aCBjaGVja291dCByb3V0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicsIGRldGFpbHM6IGVycm9yIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwicHJvZHVjdElkIiwidmFyaWFudElkIiwiZW1haWwiLCJqc29uIiwiQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJTRUxMQVVUSF9BUElfS0VZIiwiU0hPUF9JRCIsIlNFTExBVVRIX1NIT1BfSUQiLCJlcnJvciIsInN0YXR1cyIsImlwIiwiaGVhZGVycyIsImdldCIsInVzZXJfYWdlbnQiLCJib2R5IiwiY2FydCIsInF1YW50aXR5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic3VjY2VzcyIsImNvbnNvbGUiLCJkZXRhaWxzIiwidXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/sellauth/checkout/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsellauth%2Fcheckout%2Froute&page=%2Fapi%2Fsellauth%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsellauth%2Fcheckout%2Froute.ts&appDir=C%3A%5CUsers%5Cvelocity%5CDesktop%5CWebsites%5Cnew%20calamari%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cvelocity%5CDesktop%5CWebsites%5Cnew%20calamari&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsellauth%2Fcheckout%2Froute&page=%2Fapi%2Fsellauth%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsellauth%2Fcheckout%2Froute.ts&appDir=C%3A%5CUsers%5Cvelocity%5CDesktop%5CWebsites%5Cnew%20calamari%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cvelocity%5CDesktop%5CWebsites%5Cnew%20calamari&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_velocity_Desktop_Websites_new_calamari_app_api_sellauth_checkout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/sellauth/checkout/route.ts */ \"(rsc)/./app/api/sellauth/checkout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sellauth/checkout/route\",\n        pathname: \"/api/sellauth/checkout\",\n        filename: \"route\",\n        bundlePath: \"app/api/sellauth/checkout/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\velocity\\\\Desktop\\\\Websites\\\\new calamari\\\\app\\\\api\\\\sellauth\\\\checkout\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_velocity_Desktop_Websites_new_calamari_app_api_sellauth_checkout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZWxsYXV0aCUyRmNoZWNrb3V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZWxsYXV0aCUyRmNoZWNrb3V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VsbGF1dGglMkZjaGVja291dCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN2ZWxvY2l0eSU1Q0Rlc2t0b3AlNUNXZWJzaXRlcyU1Q25ldyUyMGNhbGFtYXJpJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUN2ZWxvY2l0eSU1Q0Rlc2t0b3AlNUNXZWJzaXRlcyU1Q25ldyUyMGNhbGFtYXJpJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM0QztBQUN6SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdmVsb2NpdHlcXFxcRGVza3RvcFxcXFxXZWJzaXRlc1xcXFxuZXcgY2FsYW1hcmlcXFxcYXBwXFxcXGFwaVxcXFxzZWxsYXV0aFxcXFxjaGVja291dFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VsbGF1dGgvY2hlY2tvdXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZWxsYXV0aC9jaGVja291dFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VsbGF1dGgvY2hlY2tvdXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFx2ZWxvY2l0eVxcXFxEZXNrdG9wXFxcXFdlYnNpdGVzXFxcXG5ldyBjYWxhbWFyaVxcXFxhcHBcXFxcYXBpXFxcXHNlbGxhdXRoXFxcXGNoZWNrb3V0XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsellauth%2Fcheckout%2Froute&page=%2Fapi%2Fsellauth%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsellauth%2Fcheckout%2Froute.ts&appDir=C%3A%5CUsers%5Cvelocity%5CDesktop%5CWebsites%5Cnew%20calamari%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cvelocity%5CDesktop%5CWebsites%5Cnew%20calamari&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsellauth%2Fcheckout%2Froute&page=%2Fapi%2Fsellauth%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsellauth%2Fcheckout%2Froute.ts&appDir=C%3A%5CUsers%5Cvelocity%5CDesktop%5CWebsites%5Cnew%20calamari%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cvelocity%5CDesktop%5CWebsites%5Cnew%20calamari&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();