# Onlyfans Downloader — Local Access Build

[简体中文](#简体中文) · [English](#english)

源码仓库 / Source repository: [https://github.com/0xddy/onlyfans-downloader](https://github.com/0xddy/onlyfans-downloader)

> This is an independently maintained Chrome extension and is not affiliated with, sponsored by, or endorsed by OnlyFans or Fenix International Limited.

## 简体中文

### 项目说明

这是一个需要手动安装的 Chrome Manifest V3 扩展，用于下载当前 OnlyFans 账号本来就有权访问的媒体。

此版本采用 **Local Access（本地直用）模式**：

- 不需要登录独立的下载器账号。
- 不需要第三方会员订阅，也没有 PRO/MAX 功能解锁流程。
- 不再显示下载器账号的登录、购买、邀请或会员管理入口。
- 仍然必须在同一个 Chrome 用户资料中登录 OnlyFans；扩展不会绕过 OnlyFans 的账号权限或付费墙。

### 界面语言

扩展界面支持：

- English
- 简体中文

首次运行会根据 Chrome 的界面语言自动选择。也可以通过扩展顶部导航栏或 OnlyFans 站内下载侧栏中的语言选择器随时切换；选择结果保存在 `chrome.storage.local` 中，并在扩展页面和站内侧栏之间同步。

### 功能

- 在 OnlyFans 页面中提供下载入口与下载队列侧栏。
- 独立的下载中心，可查看进行中、已完成和失败任务。
- 支持 Posts、Messages、Archived、Stories、Highlights、Purchased 和 All 等媒体来源。
- 支持 All、Image、Video 类型筛选，以及日期范围和文件大小筛选。
- 支持单创作者和多创作者批量任务。
- 可选择输出文件夹、自定义输出目录与文件名结构。
- 支持任务进度、文件预览、诊断信息和错误日志导出。
- 支持非 DRM 媒体；授权范围内的 DRM 处理依赖外部 DRM key service，因此不是完全离线功能。

实际可发现和下载的内容取决于当前 OnlyFans 账号权限、资源是否仍然有效，以及 OnlyFans 当前的页面和 API 行为。

### 安装

此目录是解压即用的构建产物，仅支持手动加载：

1. 下载并完整解压扩展目录。
2. 确认所选目录的根部直接包含 `manifest.json`。
3. 在 Chrome 地址栏打开 `chrome://extensions/`。
4. 打开右上角的“开发者模式”。
5. 点击“加载已解压的扩展程序”，选择本目录。
6. 可选：将扩展固定到工具栏，点击扩展图标打开主界面。
7. 安装或重新加载扩展后，刷新所有已打开的 OnlyFans 标签页，让新的 content script 生效。

此构建不通过 Chrome Web Store 自动更新。获得新版本后，需要替换文件并在 `chrome://extensions/` 中手动重新加载。

### 使用

1. 在安装扩展的同一个 Chrome 用户资料中登录 OnlyFans。
2. 手动确认目标创作者和媒体可以在网页中正常查看。
3. 打开扩展，等待 OnlyFans 授权状态就绪。
4. 选择创作者、Media Source、Media Type 和需要的筛选条件。
5. 选择或确认输出文件夹。
6. 点击开始按钮，将任务发送到下载中心。
7. 下载期间保持 Chrome、OnlyFans 标签页和登录会话有效。

如果 Purchased、Archived、Stories 等来源返回空结果，不一定是程序错误；资源可能已过期、账号没有访问权，或者 OnlyFans API 已发生变化。大批量任务建议拆成较小批次执行。

### 权限、网络与隐私

| 权限或主机 | 用途 |
| --- | --- |
| `cookies` | 读取 OnlyFans 登录 Cookie，以建立 API 和 DRM 请求所需的授权状态。 |
| `storage` | 保存语言、筛选设置、队列状态、输出配置和 OnlyFans 授权快照。 |
| `scripting` | 向 OnlyFans 页面注入下载相关逻辑。 |
| `tabs` | 查找或刷新 OnlyFans 标签页，并打开扩展页面。 |
| `downloads`, `downloads.open` | 保存下载文件，并在需要时打开下载结果。 |
| `*.onlyfans.com` | 读取当前账号有权访问的数据和媒体。 |
| `r2.hlsdownloader.com` | 获取 OnlyFans API 请求所需的动态签名规则。 |
| `api.savemydayapp.com` | 仅在 DRM 流程中请求解密所需的 key service。 |

DRM 请求可能包含 OnlyFans user ID、User-Agent、`x-bc`/指纹值、OnlyFans Cookie header、PSSH，以及 CloudFront 或其他签名媒体参数。当前 Local Access 构建已禁用旧的下载器账号登录、会员资料同步、安装归因/analytics 和远程版本检查，但下载、动态签名规则和 DRM 流程仍可能访问上表中的服务，因此本构建不是完全离线软件。

错误日志可能包含媒体 URL、文件名、创作者标识或带签名的查询参数。分享日志或截图前请先脱敏。切换 OnlyFans 账号或停止使用时，可以移除扩展或清除扩展存储，并在 OnlyFans 中退出登录。

### 限制与已知问题

- 扩展不会提供、购买或伪造任何 OnlyFans 订阅权限。
- OnlyFans DOM、API、签名规则或 DRM 服务变化都可能导致功能失效。
- DRM 能否处理取决于账号授权、外部服务可用性和适用的法律或合同限制。
- 大批量任务可能遇到限流、会话失效、网络中断、内存不足或目录权限错误。
- 当前需要手动更新；更新或重新加载扩展后，还需要刷新 OnlyFans 标签页。
- 本构建面向桌面版 Chrome。其他 Chromium 浏览器可能可用，但尚未作为正式支持目标验证。
- 本目录是编译和压缩后的发布产物，没有 `package.json`、源代码映射或完整源码构建链。

### 故障排查

**OnlyFans 页面没有下载按钮或侧栏**

在 `chrome://extensions/` 重新加载扩展，然后刷新 OnlyFans 标签页。旧标签页仍可能运行上一个版本的 content script。

**提示 OnlyFans authorization 未就绪**

确认当前 Chrome 用户资料已登录 OnlyFans，刷新网页后重试。必要时检查扩展 service worker、扩展页面和 OnlyFans 页面控制台。

**DRM key 请求失败**

确认 OnlyFans 会话仍有效，并检查 `api.savemydayapp.com` 的网络访问。这类错误与已移除的下载器会员校验无关。

**筛选后没有资源**

确认资源在网页中确实可见、Media Source 和 Media Type 选择正确、日期/文件大小条件没有排除资源，并检查输出文件夹权限。

**大批量任务中途失败**

缩小批次、保持标签页和登录会话有效，并在稍后重试。

### 开发与调试

本目录包含生成后的 bundle，只适合受控调试。长期维护应回到原始源代码工程完成，再重新构建发布产物。

- 本地直用开关位于 `chunks/debug-CzyvQXIg.js`，当前为 `OFDL_LOCAL_ACCESS_MODE=true`。
- 将该值改为 `false` 不会自动恢复旧登录体系；OAuth/web-auth 清单入口、账号路由和远程会员 API 已分别移除或设为 fail-closed。
- 界面翻译维护在 `i18n.js`；扩展名称和描述维护在 `_locales/en/messages.json` 与 `_locales/zh_CN/messages.json`。
- 调试时建议使用隔离的 Chrome 用户资料和测试账号。
- 不要将 Cookie、签名 URL、DRM 请求内容或未脱敏的错误日志提交到仓库。

修改后可执行基础检查：

```powershell
Get-ChildItem -Recurse -Filter *.js |
  Where-Object { $_.Name -notlike '*.bak' } |
  ForEach-Object { node --check $_.FullName }

Get-Content -Raw .\manifest.json | ConvertFrom-Json | Out-Null
Get-Content -Raw .\_locales\en\messages.json | ConvertFrom-Json | Out-Null
Get-Content -Raw .\_locales\zh_CN\messages.json | ConvertFrom-Json | Out-Null
```

建议至少完成以下 smoke test：

- 扩展可无错误加载，点击图标可打开主界面。
- English / 简体中文可互相切换并在刷新后保持。
- 不出现下载器账号的 Sign In、Buy、Manage Subscription 等入口。
- 所有 Media Source 选项可点击。
- 未登录 OnlyFans 时出现明确提示，登录后授权状态可就绪。
- 非 DRM 下载可完成；账号本来有权访问的 DRM 媒体可按预期处理。
- service worker 不再发起旧登录、`phoneProfile`、会员或 analytics 请求。

### 支持开发

计划通过爱发电提供自愿支持入口。爱发电仅用于支持开发，不用于登录、授权或解锁功能；正式发布前请在此处补充维护者的实际爱发电主页。

### 合法使用与免责声明

只下载你有权访问且获准保存的内容。不要转载、出售、公开分发，或将下载内容用于骚扰、侵犯隐私及其他侵权用途。能在网页中查看内容，并不自动意味着适用法律、OnlyFans 条款或创作者许可允许下载；DRM 内容还可能受到额外限制。使用者应自行确认适用的法律、合同和平台规则，并自行承担使用责任。

OnlyFans 是其权利人的商标。本项目与 OnlyFans 或 Fenix International Limited 没有隶属、赞助或背书关系。

### 许可证

此分发目录目前不包含 `LICENSE` 文件。不能因为文件可见或可下载而推定获得复制、修改或再发布授权。公开发布或接受外部贡献前，应由权利人补充明确的许可证。

---

## English

### Overview

This is a manually installed Chrome Manifest V3 extension for downloading media that the current OnlyFans account is already authorized to access.

This release uses **Local Access mode**:

- No separate downloader account is required.
- No third-party membership subscription or PRO/MAX entitlement flow is required.
- Downloader sign-in, purchase, referral, and membership-management entry points are removed.
- You must still be signed in to OnlyFans in the same Chrome profile. The extension does not bypass OnlyFans account permissions or paywalls.

### Interface languages

The extension UI supports:

- English
- Simplified Chinese

The initial language follows Chrome's UI language. You can switch languages at any time from the extension header or the in-site download sidebar. The selection is stored in `chrome.storage.local` and synchronized across extension pages and the OnlyFans sidebar.

### Features

- In-page download controls and a download queue sidebar on OnlyFans.
- A separate Download Center for processing, completed, and failed tasks.
- Media sources including Posts, Messages, Archived, Stories, Highlights, Purchased, and All.
- All, Image, and Video filters, plus date-range and file-size filters.
- Single-creator and multi-creator batch tasks.
- Selectable output folders and configurable directory/filename structures.
- Progress tracking, file previews, diagnostics, and error-log export.
- Non-DRM media support. Authorized DRM processing depends on an external DRM key service and is not an offline feature.

The media that can actually be discovered and downloaded depends on the current OnlyFans account permissions, resource availability, and current OnlyFans page/API behavior.

### Installation

This directory is a ready-to-load distribution and is installed manually:

1. Download and fully extract the extension directory.
2. Confirm that `manifest.json` is directly inside the directory you will select.
3. Open `chrome://extensions/` in Chrome.
4. Enable **Developer mode**.
5. Select **Load unpacked** and choose this directory.
6. Optionally pin the extension, then click its toolbar icon to open the app.
7. After installation or every extension reload, refresh all existing OnlyFans tabs so the new content script is active.

This build is not automatically updated through the Chrome Web Store. To install a newer build, replace the files and reload the extension manually from `chrome://extensions/`.

### Usage

1. Sign in to OnlyFans in the same Chrome profile where the extension is installed.
2. Confirm that the target creator and media are visible in the website normally.
3. Open the extension and wait for OnlyFans authorization to become ready.
4. Select creators, Media Source, Media Type, and any filters you need.
5. Select or confirm the output folder.
6. Start the task and send it to the Download Center.
7. Keep Chrome, the OnlyFans tab, and the login session active while downloading.

An empty result for Purchased, Archived, Stories, or another source is not necessarily a bug. The resource may have expired, the account may not have access, or the OnlyFans API may have changed. Split very large jobs into smaller batches.

### Permissions, network access, and privacy

| Permission or host | Purpose |
| --- | --- |
| `cookies` | Reads OnlyFans login cookies to establish authorization for API and DRM requests. |
| `storage` | Stores language, filters, queue state, output configuration, and an OnlyFans authorization snapshot. |
| `scripting` | Injects download logic into OnlyFans pages. |
| `tabs` | Finds or refreshes OnlyFans tabs and opens extension pages. |
| `downloads`, `downloads.open` | Saves downloaded files and opens download results when requested. |
| `*.onlyfans.com` | Reads data and media the signed-in account is authorized to access. |
| `r2.hlsdownloader.com` | Retrieves dynamic signing rules used for OnlyFans API requests. |
| `api.savemydayapp.com` | Contacts the DRM key service only during DRM processing. |

A DRM request may include the OnlyFans user ID, User-Agent, `x-bc`/fingerprint value, OnlyFans cookie header, PSSH, and CloudFront or other signed-media parameters. This Local Access build disables the legacy downloader-account login, membership profile sync, install attribution/analytics, and remote version checks. Downloads, dynamic signing rules, and DRM processing can still contact the services listed above, so this is not a fully offline build.

Error logs may contain media URLs, filenames, creator identifiers, or signed query parameters. Sanitize logs and screenshots before sharing them. When switching OnlyFans accounts or removing the extension, consider clearing extension storage and signing out of OnlyFans.

### Limitations and known issues

- The extension does not provide, purchase, or fabricate any OnlyFans subscription entitlement.
- Changes to the OnlyFans DOM, API, signing rules, or DRM services can break functionality.
- DRM processing depends on account authorization, external-service availability, and applicable legal or contractual restrictions.
- Large jobs may encounter rate limits, expired sessions, network interruptions, memory limits, or directory-permission errors.
- Updates are manual. Reload the extension and refresh OnlyFans tabs after updating.
- This build targets desktop Chrome. Other Chromium browsers may work but are not officially tested targets.
- This directory contains compiled and minified distribution files, without `package.json`, source maps, or a complete source build pipeline.

### Troubleshooting

**No download controls or sidebar on OnlyFans**

Reload the extension from `chrome://extensions/`, then refresh the OnlyFans tab. Existing tabs may still be running an older content script.

**OnlyFans authorization is not ready**

Confirm that OnlyFans is signed in within the current Chrome profile, refresh the page, and retry. If needed, inspect the extension service worker, app DevTools, and OnlyFans page console.

**DRM key request failed**

Confirm that the OnlyFans session is still valid and that `api.savemydayapp.com` is reachable. This error is unrelated to the removed downloader-membership checks.

**No resources after filtering**

Confirm that the media is visible on the site, Media Source and Media Type are correct, date/file-size filters are not excluding it, and output-folder permission is valid.

**A large batch stops partway through**

Reduce the batch size, keep the tab and login session active, and retry later.

### Development and debugging

This directory contains generated bundles and should only be edited for controlled debugging. Long-term maintenance should be performed in the original source project, followed by a clean rebuild.

- Local Access mode is enabled by `OFDL_LOCAL_ACCESS_MODE=true` in `chunks/debug-CzyvQXIg.js`.
- Changing that value to `false` does not restore the legacy login system. OAuth/web-auth manifest surfaces, account routes, and remote membership helpers were separately removed or made fail-closed.
- UI translations are maintained in `i18n.js`. Extension metadata is maintained in `_locales/en/messages.json` and `_locales/zh_CN/messages.json`.
- Use an isolated Chrome profile and a test account while debugging.
- Never commit cookies, signed URLs, DRM request contents, or unsanitized exported logs.

Basic checks after editing:

```powershell
Get-ChildItem -Recurse -Filter *.js |
  Where-Object { $_.Name -notlike '*.bak' } |
  ForEach-Object { node --check $_.FullName }

Get-Content -Raw .\manifest.json | ConvertFrom-Json | Out-Null
Get-Content -Raw .\_locales\en\messages.json | ConvertFrom-Json | Out-Null
Get-Content -Raw .\_locales\zh_CN\messages.json | ConvertFrom-Json | Out-Null
```

Recommended smoke checks:

- The unpacked extension loads without manifest or service-worker errors.
- English and Simplified Chinese switch in both directions and persist after reload.
- Downloader-account Sign In, Buy, and Manage Subscription entry points remain absent.
- Every Media Source option is clickable.
- Signed-out OnlyFans state has a clear error, and authorization becomes ready after sign-in.
- A non-DRM download completes, and authorized DRM content follows the expected flow.
- The service worker makes no legacy login, `phoneProfile`, membership, or analytics requests.

### Supporting development

An optional Afdian support page is planned. Afdian support is voluntary and does not sign users in, grant authorization, or unlock features. Add the maintainer's actual Afdian URL here before publishing.

### Responsible use and disclaimer

Download only content you are authorized to access and permitted to save. Do not repost, sell, publicly distribute, harass, invade privacy, or otherwise misuse downloaded material. Being able to view content does not automatically mean that applicable law, OnlyFans terms, or creator permission allows downloading. DRM-protected material may have additional restrictions. You are responsible for checking the laws, contracts, and platform rules that apply to your use.

OnlyFans is a trademark of its respective owner. This project is not affiliated with, sponsored by, or endorsed by OnlyFans or Fenix International Limited.

### License

This distribution currently does not include a `LICENSE` file. No right to copy, modify, or redistribute should be inferred from the files being available. The rights holder should add an explicit license before public redistribution or accepting external contributions.
