(() => {
  "use strict";

  const STORAGE_KEY = "ofdl.uiLanguage";
  const OPEN_SOURCE_URL = "https://github.com/0xddy/onlyfans-downloader";
  const SUPPORTED_LANGUAGES = new Set(["en", "zh_CN"]);
  const TRANSLATABLE_ATTRIBUTES = ["aria-label", "placeholder", "title", "alt"];
  const CONTENT_HOST_SELECTOR = "ofdl-in-site-sidebar, ofdl-daily-prompt";
  const TECHNICAL_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE"]);

  const ZH_CN = Object.freeze({
    "Language": "语言",
    "Dashboard": "首页",
    "Home": "首页",
    "Downloads": "下载中心",
    "Download Center": "下载中心",
    "Download center": "下载中心",
    "Download Console": "下载控制台",
    "Download queues": "下载队列",
    "Download logs": "下载日志",
    "Settings": "设置",
    "Back": "返回",
    "Close": "关闭",
    "Close this dialog": "关闭此对话框",
    "Cancel": "取消",
    "Confirm": "确认",
    "Continue": "继续",
    "Retry": "重试",
    "Clear": "清除",
    "Clear All": "清除全部",
    "Delete": "删除",
    "Loading...": "正在加载…",
    "Loading": "正在加载",
    "Waiting": "等待中",
    "Writing": "正在写入",
    "Queued": "排队中",
    "queued": "排队中",
    "Submitted": "已提交",
    "Running": "运行中",
    "running": "运行中",
    "discovering": "正在发现资源",
    "completed": "已完成",
    "failed": "失败",
    "canceled": "已取消",
    "Ready": "就绪",
    "Success": "成功",
    "Warning": "警告",
    "Error": "错误",
    "Progress": "进度",
    "Info": "信息",
    "Checking...": "正在检查…",
    "Checking output...": "正在检查输出位置…",
    "Checking authorization...": "正在检查授权…",
    "Opening update...": "正在打开更新…",
    "Restarting extension...": "正在重新启动扩展…",
    "Unknown": "未知",
    "None": "无",
    "Other": "其他",
    "All": "全部",
    "Custom": "自定义",
    "Existing": "已存在",
    "Private": "私密",
    "Next": "下一步",
    "Finish": "完成",
    "Set": "设置",
    "Creator": "创作者",
    "Creators": "创作者",
    "All Creator": "全部创作者",
    "Creator Collections": "创作者合集",
    "Filter creators": "筛选创作者",
    "Select a collection to load creators.": "请选择一个合集以加载创作者。",
    "Loading creator collections...": "正在加载创作者合集…",
    "Loading creators...": "正在加载创作者…",
    "Fetching complete creator list": "正在获取完整创作者列表",
    "All creators loaded.": "所有创作者均已加载。",
    "Scroll to bottom to load more creators.": "滚动到底部以加载更多创作者。",
    "Filtered mode: auto paging paused.": "筛选模式：已暂停自动翻页。",
    "No creator collections found.": "未找到创作者合集。",
    "No creators matched this filter.": "没有符合筛选条件的创作者。",
    "Retry get creator list": "重新获取创作者列表",
    "Selected Creators": "已选创作者",
    "No creators selected": "尚未选择创作者",
    "Remove selected creator": "移除所选创作者",
    "Select at least one creator first.": "请先选择至少一位创作者。",
    "Batch selection mode": "批量选择模式",
    "Batch Mode": "批量模式",
    "SINGLE": "单选",
    "MULTI": "多选",
    "Single": "单选",
    "Multiple": "多选",
    "Bulk Download": "批量下载",
    "Bulk downloads for images and videos.": "批量下载图片和视频。",
    "Assets Filter": "资源筛选",
    "Media Source": "媒体来源",
    "Media Type": "媒体类型",
    "Response Type": "响应类型",
    "Posts": "帖子",
    "Post": "帖子",
    "POSTS": "帖子",
    "posts": "帖子",
    "Messages": "消息",
    "Message": "消息",
    "MESSAGES": "消息",
    "Archived": "已归档",
    "ARCHIVED": "已归档",
    "Stories": "动态",
    "STORIES": "动态",
    "Highlights": "精选",
    "HIGHLIGHTS": "精选",
    "Purchased": "已购买",
    "PURCHASED": "已购买",
    "ALL": "全部",
    "Image": "图片",
    "Images": "图片",
    "Photo": "图片",
    "Photos": "图片",
    "Video": "视频",
    "Videos": "视频",
    "Audio": "音频",
    "Date Range": "日期范围",
    "Start": "开始日期",
    "End": "结束日期",
    "Start Date": "开始日期",
    "End Date": "结束日期",
    "Start Time": "开始时间",
    "End Time": "结束时间",
    "Select date": "选择日期",
    "Select time": "选择时间",
    "Selected date": "已选日期",
    "Use the arrow keys and enter to select the day of the month": "使用方向键并按回车键选择日期",
    "Use the arrow keys and enter to select the month": "使用方向键并按回车键选择月份",
    "Use the arrow keys and enter to select the year": "使用方向键并按回车键选择年份",
    "Today": "今天",
    "Now": "此刻",
    "OK": "确定",
    "Previous Year": "上一年",
    "Next Year": "下一年",
    "Previous Month": "上个月",
    "Next Month": "下个月",
    "January": "一月",
    "February": "二月",
    "March": "三月",
    "April": "四月",
    "May": "五月",
    "June": "六月",
    "July": "七月",
    "August": "八月",
    "September": "九月",
    "October": "十月",
    "November": "十一月",
    "December": "十二月",
    "Jan": "1月",
    "Feb": "2月",
    "Mar": "3月",
    "Apr": "4月",
    "Jun": "6月",
    "Jul": "7月",
    "Aug": "8月",
    "Sep": "9月",
    "Oct": "10月",
    "Nov": "11月",
    "Dec": "12月",
    "Sun": "日",
    "Mon": "一",
    "Tue": "二",
    "Wed": "三",
    "Thu": "四",
    "Fri": "五",
    "Sat": "六",
    "Sunday": "星期日",
    "Monday": "星期一",
    "Tuesday": "星期二",
    "Wednesday": "星期三",
    "Thursday": "星期四",
    "Friday": "星期五",
    "Saturday": "星期六",
    "No Data": "暂无数据",
    "No data": "暂无数据",
    "No matching data": "无匹配数据",
    "Select": "请选择",
    "Enter keyword": "输入关键词",
    "decrease number": "减小数值",
    "increase number": "增大数值",
    "pick start value": "选择起始值",
    "pick end value": "选择结束值",
    "Illegal input": "输入无效",
    "Toggle Dropdown": "切换下拉菜单",
    "Go to previous page": "转到上一页",
    "Go to next page": "转到下一页",
    "Select all rows": "选择所有行",
    "Select this row": "选择此行",
    "Expand this row": "展开此行",
    "Collapse this row": "收起此行",
    "Reset": "重置",
    "Preview": "预览",
    "7 days": "7 天",
    "30 days": "30 天",
    "90 days": "90 天",
    "File Size": "文件大小",
    "Save as default": "保存为默认设置",
    "Saved as default.": "已保存为默认设置。",
    "DOWNLOAD": "下载",
    "Download": "下载",
    "site download": "站内下载",
    "Sync": "同步",
    "Sort:": "排序：",
    "MODE:": "模式：",
    "Super-Speed": "超高速",
    "Lightweight": "轻量",
    "Smart De-duplication": "智能去重",
    "Start Next Download": "开始下一个下载",
    "Tasks added to download queue.": "任务已加入下载队列。",
    "Tasks sent to Download Center.": "任务已发送到下载中心。",
    "Failed to create download session.": "创建下载会话失败。",
    "Download session id is missing.": "缺少下载会话 ID。",
    "Batch request id is missing.": "缺少批量请求 ID。",
    "Site task request id is missing.": "缺少站内任务请求 ID。",
    "No creators were selected for batch download.": "批量下载尚未选择创作者。",
    "No downloadable tasks were submitted.": "未提交可下载任务。",
    "No downloadable tasks were produced.": "未生成可下载任务。",
    "Processing": "进行中",
    "Completed": "已完成",
    "Failed": "失败",
    "Discovering": "正在发现资源",
    "Resolving": "正在解析",
    "Downloading": "正在下载",
    "Decrypting": "正在解密",
    "Merging": "正在合并",
    "Preparing": "正在准备",
    "Canceling...": "正在取消…",
    "Cancel All": "全部取消",
    "Cancel Processing Tasks": "取消进行中的任务",
    "Clear Pending Tasks": "清除待处理任务",
    "No Processing Tasks": "没有进行中的任务",
    "No processing tasks": "没有进行中的任务",
    "No pending tasks": "没有待处理任务",
    "No completed tasks": "没有已完成任务",
    "No successful tasks": "没有成功任务",
    "No failed tasks": "没有失败任务",
    "No downloads in this app session": "本次扩展会话中没有下载任务",
    "Canceled.": "已取消。",
    "Canceled by user.": "已由用户取消。",
    "Canceled all app downloads.": "已取消所有扩展下载。",
    "Canceled batch request.": "已取消批量请求。",
    "Download center canceled all app requests.": "下载中心已取消所有扩展任务。",
    "Canceled from app download center.": "已从下载中心取消。",
    "Canceled from in-site sidebar.": "已从站内侧栏取消。",
    "Download failed.": "下载失败。",
    "Operation in progress": "操作进行中",
    "Operation completed": "操作已完成",
    "Operation completed with errors": "操作完成，但出现错误",
    "Export Error Log": "导出错误日志",
    "Error Logs": "错误日志",
    "Diagnostics": "诊断信息",
    "Waiting for log output...": "正在等待日志输出…",
    "Output Structure": "输出结构",
    "Directory Zone": "文件夹结构",
    "Filename Zone": "文件名结构",
    "Available Tokens": "可用标记",
    "Creator access is enabled only after official activation.": "仅在正式启用后开放创作者访问。",
    "Drag tokens into directory and filename zones.": "将标记拖入文件夹和文件名区域。",
    "Drop tokens here.": "将标记拖放到这里。",
    "Filename zone requires at least one token.": "文件名结构至少需要一个标记。",
    "Reset to default layout": "恢复默认结构",
    "Save Output Structure": "保存输出结构",
    "Output structure saved.": "输出结构已保存。",
    "Output structure is invalid.": "输出结构无效。",
    "Directory": "文件夹",
    "Filename": "文件名",
    "Date": "日期",
    "Reverse TS": "反向时间戳",
    "Resolution": "分辨率",
    "Super Large Video Mode (SLVM)": "超大视频模式（SLVM）",
    "Enable Super Large Video Mode": "启用超大视频模式",
    "Keep SLVM enabled": "保持启用 SLVM",
    "We recommend keeping SLVM enabled for large downloads.": "下载大文件时，建议保持启用 SLVM。",
    "Large files may fail from higher memory usage.": "大文件可能因内存占用较高而失败。",
    "Super Large Video Mode is not supported by this browser.": "当前浏览器不支持超大视频模式。",
    "If SLVM is causing problems, contact us and we will help.": "如果 SLVM 出现问题，请联系我们。",
    "Driven by OFDownloader Engine": "由 OFDownloader Engine 驱动",
    "Choose output folder": "选择输出文件夹",
    "Choose output folder again": "重新选择输出文件夹",
    "Choose Folder": "选择文件夹",
    "Confirm output folder": "确认输出文件夹",
    "Confirm authorization": "确认授权",
    "No folder selected": "尚未选择文件夹",
    "Selected folder": "已选文件夹",
    "selected folder": "已选文件夹",
    "Set an output folder to continue download tasks.": "请设置输出文件夹以继续下载任务。",
    "Waiting for output folder...": "正在等待输出文件夹…",
    "Output directory permission is required before download starts.": "开始下载前需要输出文件夹权限。",
    "Output folder authorization was canceled.": "已取消输出文件夹授权。",
    "Output folder permission is required before previewing this file.": "预览此文件前需要输出文件夹权限。",
    "Directory permission is not granted.": "尚未授予文件夹权限。",
    "Failed to choose output folder.": "选择输出文件夹失败。",
    "Browser download storage ready": "浏览器下载存储已就绪",
    "Browser storage may cause repeated downloads.": "使用浏览器存储可能导致重复下载。",
    "Switch to browser storage": "切换到浏览器存储",
    "Switch to browser storage?": "切换到浏览器存储？",
    "Downloaded media preview": "已下载媒体预览",
    "Close preview": "关闭预览",
    "Preview unavailable.": "无法预览。",
    "Failed to load preview.": "加载预览失败。",
    "Preview filename is missing.": "缺少预览文件名。",
    "Preview path is missing.": "缺少预览路径。",
    "The downloaded file could not be found in the selected output folder.": "在所选输出文件夹中找不到已下载文件。",
    "Failed to read downloaded file.": "读取已下载文件失败。",
    "Open side panel": "打开侧栏",
    "Close side panel": "关闭侧栏",
    "OFDownloader in-site sidebar": "OFDownloader 站内侧栏",
    "Download task status": "下载任务状态",
    "Auto-collapse on outside interaction": "点击外部时自动收起",
    "User membership status": "用户状态",
    "MANAGE": "管理",
    "Manage": "管理",
    "Sign In": "登录",
    "Good Morning": "早上好",
    "Good Afternoon": "下午好",
    "Good evening": "晚上好",
    "Do you have idea for making": "你有让",
    "better?": "变得更好的建议吗？",
    "or": "或查看",
    "FAQs": "常见问题",
    "We'd love to hear about it!": "欢迎告诉我们！",
    "Update available": "有可用更新",
    "Update notes": "更新说明",
    "Current version": "当前版本",
    "Latest version": "最新版本",
    "Download & install guide": "下载与安装指南",
    "Install the latest version for product fixes and updates.": "安装最新版本以获取修复和更新。",
    "Restart extension to update": "重新启动扩展以更新",
    "Restart the extension to apply the latest store update.": "重新启动扩展以应用最新更新。",
    "Failed to open update download.": "无法打开更新下载页面。",
    "OnlyFans authorization needed": "需要 OnlyFans 授权",
    "Before continuing": "继续前请先完成以下操作",
    "Open or switch to the OnlyFans tab.": "打开或切换到 OnlyFans 标签页。",
    "Make sure your account is fully logged in.": "请确认你的 OnlyFans 账号已完整登录。",
    "Return here and confirm authorization.": "返回此处并确认授权。",
    "OnlyFans login not detected. Sign in, then try again.": "未检测到 OnlyFans 登录，请登录后重试。",
    "OnlyFans session is missing. Sign in, then try again.": "缺少 OnlyFans 会话，请登录后重试。",
    "OnlyFans authentication cookies are missing.": "缺少 OnlyFans 身份验证 Cookie。",
    "OnlyFans authentication check failed.": "OnlyFans 身份验证检查失败。",
    "Failed to create OnlyFans tab.": "创建 OnlyFans 标签页失败。",
    "Timed out waiting for OnlyFans tab to finish loading.": "等待 OnlyFans 标签页加载超时。",
    "OnlyFans tab closed before load completed.": "OnlyFans 标签页在加载完成前已关闭。",
    "OnlyFans verification is still loading. Refresh the site, then try again.": "OnlyFans 验证仍在加载，请刷新网站后重试。",
    "Authentication check failed. Please confirm your account is logged in on onlyfans.com, then retry.": "身份验证检查失败，请确认已登录 onlyfans.com 后重试。",
    "Confirm that onlyfans.com is logged in, then verify again.": "确认已登录 onlyfans.com，然后重新验证。",
    "Auth Error: Please log in to onlyfans.com and then click Retry.": "授权错误：请登录 onlyfans.com，然后点击重试。",
    "Authorization failed.": "授权失败。",
    "Authorization was not approved.": "未批准授权。",
    "Network error, please try again later.": "网络错误，请稍后重试。",
    "Failed to get user status. Please retry.": "获取用户状态失败，请重试。",
    "No downloadable media found.": "未找到可下载的媒体。",
    "Some videos were auto-downgraded to available resolutions.": "部分视频已自动降级为可用分辨率。",
    "RESOLUTION": "分辨率",
    "ORIGINAL": "原始画质",
    "Download is not available for the current account.": "当前 OnlyFans 账号无法下载此内容。",
    "This media type is not available for the current account.": "当前 OnlyFans 账号无法下载此媒体类型。",
    "Video resolution could not be verified for this account.": "无法验证当前 OnlyFans 账号可用的视频分辨率。",
    "Current account is limited to lower resolution videos.": "当前 OnlyFans 账号仅可访问较低分辨率视频。"
  });

  const textState = new WeakMap();
  const attributeState = new WeakMap();
  const observedRoots = new Set();
  const mainWorldElements = new Set();
  const mainWorldObservers = new Map();
  const rootObservers = new WeakMap();
  let language = detectLanguage();
  let documentObserver = null;
  let discoveryQueued = false;
  const pendingDiscoveryNodes = new Set();

  function normalizeLanguage(value) {
    if (value === "zh-CN" || value === "zh_CN" || /^zh(?:-|_|$)/i.test(String(value || ""))) {
      return "zh_CN";
    }
    return "en";
  }

  function detectLanguage() {
    try {
      const browserLanguage = globalThis.chrome?.i18n?.getUILanguage?.();
      if (browserLanguage) return normalizeLanguage(browserLanguage);
    } catch (_) {}
    return normalizeLanguage(globalThis.navigator?.language || "en");
  }

  function translateCore(value) {
    if (language !== "zh_CN" || !value) return value;
    if (Object.prototype.hasOwnProperty.call(ZH_CN, value)) return ZH_CN[value];
    if (value.includes(" · ")) {
      const parts = value.split(" · ");
      const translatedParts = parts.map((part) => translateCore(part));
      if (translatedParts.some((part, index) => part !== parts[index])) return translatedParts.join(" · ");
    }

    const patterns = [
      [/^Start (\d+) Now$/, (_, count) => `立即开始 ${count} 项`],
      [/^Selected (\d+) creators?$/, (_, count) => `已选择 ${count} 位创作者`],
      [/^Filtered (\d+) creators?$/, (_, count) => `已筛选出 ${count} 位创作者`],
      [/^Loaded (\d+) creators?$/, (_, count) => `已加载 ${count} 位创作者`],
      [/^(\d+) creators?$/, (_, count) => `${count} 位创作者`],
      [/^(\d+) users?$/, (_, count) => `${count} 位用户`],
      [/^(\d+) posts?$/, (_, count) => `${count} 个帖子`],
      [/^(\d+) users? ·$/, (_, count) => `${count} 位用户 ·`],
      [/^(\d+) days$/, (_, count) => `${count} 天`],
      [/^(\d+) videos?$/, (_, count) => `${count} 个视频`],
      [/^(\d+) images?$/, (_, count) => `${count} 张图片`],
      [/^(\d+) files?$/, (_, count) => `${count} 个文件`],
      [/^(\d+) DRM$/, (_, count) => `${count} 个 DRM`],
      [/^(\d+)\/(\d+) completed · (\d+) running · (\d+) failed$/, (_, done, total, running, failed) => `${done}/${total} 已完成 · ${running} 进行中 · ${failed} 失败`],
      [/^(\d+)\/(\d+) done$/, (_, done, total) => `${done}/${total} 已完成`],
      [/^(\d+) file size skipped$/, (_, count) => `因文件大小跳过 ${count} 项`],
      [/^(\d+) creators · site download$/, (_, count) => `${count} 位创作者 · 站内下载`],
      [/^(.+) · site download$/, (_, creator) => `${creator} · 站内下载`],
      [/^Selected folder: (.+)$/, (_, folder) => `已选文件夹：${folder}`],
      [/^Output folder selected: (.+)$/, (_, folder) => `已选择输出文件夹：${folder}`],
      [/^Output folder access was denied\. Choose the same folder again or allow file access in the browser settings for (.+)\.$/, (_, folder) => `输出文件夹访问被拒绝。请重新选择同一文件夹，或在浏览器设置中允许访问 ${folder}。`],
      [/^OnlyFans authentication is not ready: (.+)\.$/, (_, status) => `OnlyFans 身份验证尚未就绪：${status}。`],
      [/^slider between (.+) and (.+)$/, (_, min, max) => `滑块范围从 ${min} 到 ${max}`],
      [/^Total (\d+)$/, (_, total) => `共 ${total} 项`],
      [/^page (\d+)$/, (_, page) => `第 ${page} 页`],
      [/^Previous (\d+) pages$/, (_, count) => `向前 ${count} 页`],
      [/^Next (\d+) pages$/, (_, count) => `向后 ${count} 页`],
      [/^Resource files will be saved to folder: (.+)\.$/, (_, folder) => `资源文件将保存到文件夹：${folder}。`],
      [/^Output folder ready(?:: (.+))?$/, (_, folder) => folder ? `输出文件夹已就绪：${folder}` : "输出文件夹已就绪"],
      [/^Preview (.+)$/, (_, name) => `预览 ${name}`],
      [/^Step (\d+) of (\d+)$/, (_, step, total) => `第 ${step} 步，共 ${total} 步`],
      [/^(.+) is ready to download$/, (_, product) => `${product} 已可下载`],
      [/^(.+) is ready to install$/, (_, product) => `${product} 已可安装`],
      [/^Output already exists, skipped: (.+)$/, (_, path) => `输出已存在，已跳过：${path}`]
    ];

    for (const [pattern, replacement] of patterns) {
      if (pattern.test(value)) return value.replace(pattern, replacement);
    }
    return value;
  }

  function translateValue(value) {
    if (typeof value !== "string" || value.length === 0) return value;
    const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!match) return value;
    return `${match[1]}${translateCore(match[2])}${match[3]}`;
  }

  function shouldSkipElement(element) {
    return !element || TECHNICAL_TAGS.has(element.tagName) || Boolean(element.closest?.("[data-ofdl-i18n-control]"));
  }

  function translateTextNode(node) {
    const parent = node.parentElement;
    if (!parent || shouldSkipElement(parent)) return;
    const current = node.nodeValue || "";
    const previous = textState.get(node);
    const source = previous && current === previous.rendered ? previous.source : current;
    const rendered = translateValue(source);
    textState.set(node, { source, rendered });
    if (current !== rendered) node.nodeValue = rendered;
  }

  function translateAttributes(element) {
    if (shouldSkipElement(element)) return;
    let states = attributeState.get(element);
    if (!states) {
      states = new Map();
      attributeState.set(element, states);
    }
    for (const name of TRANSLATABLE_ATTRIBUTES) {
      if (!element.hasAttribute(name)) continue;
      const current = element.getAttribute(name) || "";
      const previous = states.get(name);
      const source = previous && current === previous.rendered ? previous.source : current;
      const rendered = translateValue(source);
      states.set(name, { source, rendered });
      if (current !== rendered) element.setAttribute(name, rendered);
    }
  }

  function translateSubtree(node) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      translateTextNode(node);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && node.nodeType !== Node.DOCUMENT_NODE) return;

    if (node.nodeType === Node.ELEMENT_NODE) translateAttributes(node);
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let current;
    while ((current = walker.nextNode())) {
      if (current.nodeType === Node.TEXT_NODE) translateTextNode(current);
      else translateAttributes(current);
    }
  }

  function customizeExtensionPage() {
    if (!isExtensionPage() || !document.body) return;

    for (const emailLink of document.querySelectorAll('a[href^="mailto:"]')) {
      const feedbackBlock = emailLink.parentElement?.parentElement;
      const feedbackText = feedbackBlock?.textContent || "";
      if (/Do you have idea for making|We'd love to hear about it|变得更好的建议|欢迎告诉我们/.test(feedbackText)) {
        feedbackBlock.remove();
      }
    }

    let footer = document.querySelector('[data-ofdl-open-source-footer]');
    if (!footer) {
      const copyrightLine = [...document.querySelectorAll("p")].find((element) => /©\s*2025/.test(element.textContent || ""));
      footer = copyrightLine?.parentElement || null;
    }
    if (!footer) return;

    let link = footer.querySelector('a[data-ofdl-open-source-link]');
    if (!link) {
      const line = document.createElement("p");
      line.className = "text-xs font-mono";
      link = document.createElement("a");
      link.dataset.ofdlOpenSourceLink = "";
      link.href = OPEN_SOURCE_URL;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "underline hover:text-blue-600";
      line.appendChild(link);
      footer.replaceChildren(line);
      footer.dataset.ofdlOpenSourceFooter = "";
    }
    const linkText = language === "zh_CN"
      ? `开源地址：${OPEN_SOURCE_URL}`
      : `Open Source: ${OPEN_SOURCE_URL}`;
    if (link.textContent !== linkText) link.textContent = linkText;
  }

  function applyLanguage(nextLanguage) {
    language = normalizeLanguage(nextLanguage);
    if (document.documentElement) {
      if (isExtensionPage()) document.documentElement.lang = language === "zh_CN" ? "zh-CN" : "en";
      document.documentElement.dataset.ofdlLanguage = language;
    }
    for (const root of observedRoots) translateSubtree(root);
    for (const element of [...mainWorldElements]) {
      if (!element.isConnected) {
        mainWorldElements.delete(element);
        mainWorldObservers.get(element)?.disconnect();
        mainWorldObservers.delete(element);
      } else translateSubtree(element);
    }
    updateLanguageControls();
    customizeExtensionPage();
    document.dispatchEvent(new CustomEvent("ofdl:i18n-changed", { detail: { language } }));
  }

  function getStoredLanguage() {
    return new Promise((resolve) => {
      const storage = globalThis.chrome?.storage?.local;
      if (!storage?.get) return resolve(undefined);
      let settled = false;
      const done = (result) => {
        if (settled) return;
        settled = true;
        resolve(result?.[STORAGE_KEY]);
      };
      try {
        const pending = storage.get([STORAGE_KEY], done);
        if (pending?.then) pending.then(done).catch(() => done(undefined));
      } catch (_) {
        done(undefined);
      }
    });
  }

  function storeLanguage(nextLanguage) {
    const storage = globalThis.chrome?.storage?.local;
    if (!storage?.set) return Promise.resolve();
    try {
      const pending = storage.set({ [STORAGE_KEY]: normalizeLanguage(nextLanguage) });
      return pending?.then ? pending.catch(() => undefined) : Promise.resolve();
    } catch (_) {
      return Promise.resolve();
    }
  }

  async function setLanguage(nextLanguage) {
    const normalized = normalizeLanguage(nextLanguage);
    applyLanguage(normalized);
    await storeLanguage(normalized);
  }

  function styleLanguageControl(control, compact) {
    Object.assign(control.style, {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: compact ? "6px" : "8px",
      color: "#4b5563",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontSize: compact ? "12px" : "13px",
      fontWeight: "600",
      lineHeight: "1",
      pointerEvents: "auto"
    });
  }

  function createLanguageControl(scope) {
    const compact = scope === "content";
    const control = document.createElement("label");
    control.dataset.ofdlI18nControl = scope;
    control.setAttribute("data-ofdl-i18n-control", scope);
    control.setAttribute("aria-label", language === "zh_CN" ? "界面语言" : "Interface language");
    styleLanguageControl(control, compact);

    const text = document.createElement("span");
    text.dataset.ofdlI18nLabel = "";
    control.appendChild(text);

    const select = document.createElement("select");
    select.dataset.ofdlI18nSelect = "";
    select.setAttribute("aria-label", language === "zh_CN" ? "选择界面语言" : "Select interface language");
    Object.assign(select.style, {
      minWidth: compact ? "88px" : "108px",
      height: compact ? "28px" : "30px",
      padding: "0 24px 0 9px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      background: "#ffffff",
      color: "#1f2937",
      font: "inherit",
      cursor: "pointer",
      outline: "none"
    });
    const english = document.createElement("option");
    english.value = "en";
    english.textContent = "English";
    const chinese = document.createElement("option");
    chinese.value = "zh_CN";
    chinese.textContent = "简体中文";
    select.append(english, chinese);
    select.value = language;
    select.addEventListener("change", () => setLanguage(select.value));
    control.appendChild(select);
    return control;
  }

  function ensureAppLanguageControl() {
    if (!isExtensionPage() || !document.body) return;
    const header = document.querySelector('[class~="max-w-screen-xl"][class~="mx-auto"]');
    if (!header) return;
    let control = document.querySelector('[data-ofdl-i18n-control="app"]');
    if (!control) control = createLanguageControl("app");
    if (control.parentElement !== header) header.appendChild(control);
    updateLanguageControls();
  }

  function ensureContentLanguageControl(root) {
    const footer = root.querySelector?.(".of-sidebar-footer");
    if (!footer) return;
    let control = root.querySelector('[data-ofdl-i18n-control="content"]');
    if (!control) {
      control = createLanguageControl("content");
      Object.assign(control.style, {
        width: "100%",
        boxSizing: "border-box",
        padding: "8px 12px 4px"
      });
    }
    if (control.parentElement !== footer) footer.appendChild(control);
    updateLanguageControls();
  }

  function updateLanguageControls() {
    for (const control of document.querySelectorAll?.("[data-ofdl-i18n-control]") || []) updateLanguageControl(control);
    for (const root of observedRoots) {
      if (root instanceof ShadowRoot) {
        for (const control of root.querySelectorAll("[data-ofdl-i18n-control]")) updateLanguageControl(control);
      }
    }
  }

  function updateLanguageControl(control) {
    const label = control.querySelector("[data-ofdl-i18n-label]");
    const select = control.querySelector("[data-ofdl-i18n-select]");
    const labelText = language === "zh_CN" ? "语言" : "Language";
    const controlLabel = language === "zh_CN" ? "界面语言" : "Interface language";
    const selectLabel = language === "zh_CN" ? "选择界面语言" : "Select interface language";
    const selectTitle = language === "zh_CN" ? "切换界面语言" : "Change interface language";
    if (label && label.textContent !== labelText) label.textContent = labelText;
    if (select) {
      if (select.value !== language) select.value = language;
      if (select.title !== selectTitle) select.title = selectTitle;
      if (select.getAttribute("aria-label") !== selectLabel) select.setAttribute("aria-label", selectLabel);
    }
    if (control.getAttribute("aria-label") !== controlLabel) control.setAttribute("aria-label", controlLabel);
  }

  function observeRoot(root, contentRoot = false) {
    if (!root || rootObservers.has(root)) return;
    observedRoots.add(root);
    translateSubtree(root);
    if (contentRoot) ensureContentLanguageControl(root);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") translateTextNode(mutation.target);
        else if (mutation.type === "attributes") translateAttributes(mutation.target);
        else for (const added of mutation.addedNodes) translateSubtree(added);
      }
      if (contentRoot) ensureContentLanguageControl(root);
      else {
        ensureAppLanguageControl();
        customizeExtensionPage();
      }
    });
    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: TRANSLATABLE_ATTRIBUTES
    });
    rootObservers.set(root, observer);
  }

  function observeContentHost(host) {
    if (host?.shadowRoot) observeRoot(host.shadowRoot, host.localName === "ofdl-in-site-sidebar");
  }

  function observeMainWorldElement(element) {
    if (!(element instanceof Element) || element.parentElement?.closest?.("[data-ofdl-role]") || mainWorldObservers.has(element)) return;
    mainWorldElements.add(element);
    translateSubtree(element);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") translateTextNode(mutation.target);
        else if (mutation.type === "attributes") translateAttributes(mutation.target);
        else for (const added of mutation.addedNodes) translateSubtree(added);
      }
    });
    observer.observe(element, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: TRANSLATABLE_ATTRIBUTES
    });
    mainWorldObservers.set(element, observer);
  }

  function processMainWorldNode(element) {
    if (!(element instanceof Element)) return;
    if (element.matches?.("[data-ofdl-role]")) observeMainWorldElement(element);
    for (const child of element.querySelectorAll?.("[data-ofdl-role]") || []) observeMainWorldElement(child);
  }

  function pruneDetachedUi() {
    for (const element of [...mainWorldElements]) {
      if (element.isConnected) continue;
      mainWorldObservers.get(element)?.disconnect();
      mainWorldObservers.delete(element);
      mainWorldElements.delete(element);
    }
    for (const root of [...observedRoots]) {
      if (!(root instanceof ShadowRoot) || root.host.isConnected) continue;
      rootObservers.get(root)?.disconnect();
      rootObservers.delete(root);
      observedRoots.delete(root);
    }
  }

  function discoverContentUi(node = document) {
    if (node instanceof Element) {
      if (node.matches(CONTENT_HOST_SELECTOR)) observeContentHost(node);
      processMainWorldNode(node);
    }
    for (const host of node.querySelectorAll?.(CONTENT_HOST_SELECTOR) || []) observeContentHost(host);
  }

  function queueContentDiscovery(records) {
    for (const record of records) {
      for (const node of record.addedNodes) pendingDiscoveryNodes.add(node);
    }
    if (discoveryQueued) return;
    discoveryQueued = true;
    queueMicrotask(() => {
      discoveryQueued = false;
      const nodes = [...pendingDiscoveryNodes];
      pendingDiscoveryNodes.clear();
      for (const node of nodes) discoverContentUi(node);
      pruneDetachedUi();
    });
  }

  function isExtensionPage() {
    return location.protocol === "chrome-extension:" || location.protocol === "moz-extension:" || document.documentElement?.hasAttribute("data-ofdl-i18n-test");
  }

  function start() {
    if (!document.documentElement) {
      document.addEventListener("DOMContentLoaded", start, { once: true });
      return;
    }

    document.documentElement.dataset.ofdlLanguage = language;
    if (isExtensionPage()) {
      observeRoot(document.documentElement, false);
      ensureAppLanguageControl();
      customizeExtensionPage();
    } else {
      discoverContentUi(document);
      documentObserver = new MutationObserver(queueContentDiscovery);
      documentObserver.observe(document.documentElement, { subtree: true, childList: true });
    }

    getStoredLanguage().then((stored) => {
      applyLanguage(SUPPORTED_LANGUAGES.has(stored) ? stored : language);
    });

    try {
      globalThis.chrome?.storage?.onChanged?.addListener((changes, areaName) => {
        const next = changes?.[STORAGE_KEY]?.newValue;
        if (areaName === "local" && SUPPORTED_LANGUAGES.has(next) && next !== language) applyLanguage(next);
      });
    } catch (_) {}
  }

  globalThis.OFDLI18n = Object.freeze({
    getLanguage: () => language,
    setLanguage,
    translate: (value) => translateValue(String(value ?? "")),
    refresh: () => applyLanguage(language),
    supportedLanguages: Object.freeze(["en", "zh_CN"])
  });

  start();
})();
