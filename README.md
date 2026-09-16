<div align="center">

# 🆔 Telegram ID-Finder Bot

**A single-file Cloudflare Worker Telegram bot for finding numeric Telegram IDs — no `wrangler`, no build step.**

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Telegram Bot API](https://img.shields.io/badge/Telegram-Bot%20API-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://core.telegram.org/bots/api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](#-license--مجوز--лицензия--许可证)
[![Languages](https://img.shields.io/badge/Languages-15-informational?style=for-the-badge)](#-supported-languages)

**🌐 Choose your language**
<br>**زبان خود را انتخاب کنید**
<br>**Выберите язык**
<br>**选择语言**

[![English](https://img.shields.io/badge/🇬🇧-English-0052CC?style=flat-square)](#-english)
[![فارسی](https://img.shields.io/badge/🇮🇷-فارسی-239F40?style=flat-square)](#-فارسی)
[![Русский](https://img.shields.io/badge/🇷🇺-Русский-D52B1E?style=flat-square)](#-русский)
[![中文](https://img.shields.io/badge/🇨🇳-中文-DE2910?style=flat-square)](#-中文)

</div>

---

## 🇬🇧 English

### Overview

**Telegram ID-Finder Bot** is a single JavaScript file that runs entirely on **Cloudflare Workers** — no local build tools, no `wrangler` CLI required. It helps users find the numeric Telegram ID of themselves, other users, channels, or groups. It ships with a full **admin panel**, a **forced-join (lock) system**, an **ad/broadcast system**, and **15 built-in languages**.

### ✨ Features

- 🔎 Find your own numeric ID, another user's ID (via forwarded message), or a public/private channel/group's ID
- 🌍 15 languages with automatic per-user language selection
- 🔒 Force-subscribe (join-lock) system for channels/groups before bot use
- 🛠 Admin panel: stats, lock management, ad management, broadcast
- 📢 Built-in ad system (forwarded post, copied message, or inline text)
- 💾 Persistent storage via Cloudflare KV — no external database needed
- ⚡ Zero dependencies, single file, deploys in minutes

### 📋 Requirements

- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free tier works)
- A Telegram bot token from [@BotFather](https://t.me/BotFather)

### 🚀 Deployment

1. Create a new **Worker** in the Cloudflare dashboard.
2. Paste the full contents of the worker file into the Worker editor.
3. Go to **Settings → Variables and Secrets** and add:

   | Variable    | Description                                                        |
   |-------------|---------------------------------------------------------------------|
   | `BOT_TOKEN` | Your bot token from `@BotFather`                                    |
   | `ADMIN_IDS` | Comma-separated numeric admin IDs, e.g. `111111,222222`             |

4. Go to **Settings → Bindings → KV Namespace** and add a binding:

   | Variable name | Binding             |
   |---------------|----------------------|
   | `BOT_KV`      | A KV namespace of your choice |

5. Click **Deploy**.
6. Open your Worker's URL once in a browser (a `GET` request) — the Telegram webhook is set automatically.

That's it — your bot is live. ✅

### 🈺 Supported Languages

🇮🇷 Persian · 🇬🇧 English · 🇷🇺 Russian · 🇸🇦 Arabic · 🇪🇸 Spanish · 🇹🇷 Turkish · 🇫🇷 French · 🇩🇪 German · 🇵🇹 Portuguese · 🇮🇹 Italian · 🇮🇳 Hindi · 🇵🇰 Urdu · 🇦🇿 Azerbaijani · 🇺🇿 Uzbek · 🇮🇩 Indonesian

### 💬 Contact & Support

If you have any questions or need to get in touch, join our Telegram channel: [@NetraIR](https://t.me/NetraIR)

---

## 🇮🇷 فارسی

### معرفی

**ربات یابنده آیدی عددی تلگرام** یک فایل جاوااسکریپت تک‌فایلی است که به‌طور کامل روی **Cloudflare Workers** اجرا می‌شود — بدون نیاز به ابزار بیلد یا `wrangler`. این ربات به کاربران کمک می‌کند آیدی عددی خودشان، کاربران دیگر، یا کانال/گروه‌ها را پیدا کنند. همچنین شامل **پنل مدیریت کامل**، **سیستم عضویت اجباری**، **سیستم تبلیغات و ارسال همگانی**، و **۱۵ زبان از پیش تعبیه‌شده** است.

### ✨ امکانات

- 🔎 پیدا کردن آیدی عددی خودتان، کاربران دیگر (با فوروارد پیام) یا کانال/گروه‌های عمومی و خصوصی
- 🌍 پشتیبانی از ۱۵ زبان با انتخاب خودکار برای هر کاربر
- 🔒 سیستم عضویت اجباری (قفل) برای کانال‌ها/گروه‌ها پیش از استفاده از ربات
- 🛠 پنل مدیریت: آمار، مدیریت قفل‌ها، مدیریت تبلیغات، ارسال همگانی
- 📢 سیستم تبلیغات تعبیه‌شده (فوروارد، کپی پیام، یا متن زیر نتیجه)
- 💾 ذخیره‌سازی دائمی با Cloudflare KV — بدون نیاز به دیتابیس خارجی
- ⚡ بدون وابستگی، تک‌فایل، استقرار در چند دقیقه

### 📋 پیش‌نیازها

- یک [حساب Cloudflare](https://dash.cloudflare.com/sign-up) (پلن رایگان کافی است)
- یک توکن ربات از [@BotFather](https://t.me/BotFather)

### 🚀 نحوه استقرار

1. یک **Worker** جدید در پنل Cloudflare بسازید.
2. کل محتوای فایل ورکر را در ویرایشگر Worker پیست کنید.
3. به بخش **Settings → Variables and Secrets** بروید و موارد زیر را اضافه کنید:

   | متغیر       | توضیحات                                                        |
   |-------------|------------------------------------------------------------------|
   | `BOT_TOKEN` | توکن ربات از `@BotFather`                                        |
   | `ADMIN_IDS` | آیدی عددی ادمین‌ها با کاما جدا شده، مثل: `111111,222222`         |

4. به بخش **Settings → Bindings → KV Namespace** بروید و یک باندینگ اضافه کنید:

   | نام متغیر | باندینگ                     |
   |-----------|-------------------------------|
   | `BOT_KV`  | یک KV namespace دلخواه         |

5. روی **Deploy** کلیک کنید.
6. آدرس Worker خود را یک بار در مرورگر باز کنید (درخواست `GET`) — webhook به‌صورت خودکار تنظیم می‌شود.

همین! ربات شما فعال شد. ✅

### 🈺 زبان‌های پشتیبانی‌شده

🇮🇷 فارسی · 🇬🇧 انگلیسی · 🇷🇺 روسی · 🇸🇦 عربی · 🇪🇸 اسپانیایی · 🇹🇷 ترکی · 🇫🇷 فرانسوی · 🇩🇪 آلمانی · 🇵🇹 پرتغالی · 🇮🇹 ایتالیایی · 🇮🇳 هندی · 🇵🇰 اردو · 🇦🇿 آذربایجانی · 🇺🇿 ازبکی · 🇮🇩 اندونزیایی

### 💬 ارتباط با ما

اگه سوالی داشتید یا خواستید باهامون در ارتباط باشید، به کانال تلگرام ما بپیوندید: [@NetraIR](https://t.me/NetraIR)

---

## 🇷🇺 Русский

### Обзор

**Telegram ID-Finder Bot** — это однофайловый бот на JavaScript, полностью работающий на **Cloudflare Workers**, без локальных инструментов сборки и без CLI `wrangler`. Он помогает пользователям находить числовой Telegram ID — свой собственный, другого пользователя, канала или группы. В комплекте: полноценная **админ-панель**, **система обязательной подписки**, **система рекламы и рассылок**, а также **15 встроенных языков**.

### ✨ Возможности

- 🔎 Поиск своего ID, ID другого пользователя (через пересланное сообщение) или ID публичного/приватного канала/группы
- 🌍 15 языков с автоматическим выбором для каждого пользователя
- 🔒 Система обязательной подписки на каналы/группы перед использованием бота
- 🛠 Админ-панель: статистика, управление подписками, управление рекламой, рассылка
- 📢 Встроенная система рекламы (пересылка, копирование сообщения или текст под результатом)
- 💾 Постоянное хранение данных через Cloudflare KV — внешняя база данных не нужна
- ⚡ Без зависимостей, один файл, развёртывание за несколько минут

### 📋 Требования

- [Аккаунт Cloudflare](https://dash.cloudflare.com/sign-up) (подходит бесплатный тариф)
- Токен бота от [@BotFather](https://t.me/BotFather)

### 🚀 Развёртывание

1. Создайте новый **Worker** в панели Cloudflare.
2. Вставьте полное содержимое файла worker в редактор Worker.
3. Перейдите в **Settings → Variables and Secrets** и добавьте:

   | Переменная  | Описание                                                          |
   |-------------|---------------------------------------------------------------------|
   | `BOT_TOKEN` | Токен бота от `@BotFather`                                          |
   | `ADMIN_IDS` | Числовые ID админов через запятую, например: `111111,222222`       |

4. Перейдите в **Settings → Bindings → KV Namespace** и добавьте привязку:

   | Имя переменной | Привязка                     |
   |-----------------|-------------------------------|
   | `BOT_KV`        | Любое пространство имён KV    |

5. Нажмите **Deploy**.
6. Один раз откройте URL вашего Worker в браузере (запрос `GET`) — webhook установится автоматически.

Готово — ваш бот запущен. ✅

### 🈺 Поддерживаемые языки

🇮🇷 Персидский · 🇬🇧 Английский · 🇷🇺 Русский · 🇸🇦 Арабский · 🇪🇸 Испанский · 🇹🇷 Турецкий · 🇫🇷 Французский · 🇩🇪 Немецкий · 🇵🇹 Португальский · 🇮🇹 Итальянский · 🇮🇳 Хинди · 🇵🇰 Урду · 🇦🇿 Азербайджанский · 🇺🇿 Узбекский · 🇮🇩 Индонезийский

### 💬 Связь и поддержка

Если у вас есть вопросы или вы хотите связаться с нами, присоединяйтесь к нашему Telegram-каналу: [@NetraIR](https://t.me/NetraIR)

---

## 🇨🇳 中文

### 概述

**Telegram ID 查找机器人** 是一个完全运行在 **Cloudflare Workers** 上的单文件 JavaScript 机器人，无需本地构建工具，也无需 `wrangler` CLI。它可以帮助用户查找自己、其他用户、频道或群组的数字 Telegram ID。内置完整的**管理面板**、**强制加群锁定系统**、**广告与群发系统**，并自带 **15 种语言**。

### ✨ 功能特性

- 🔎 查找自己的数字 ID、其他用户的 ID（通过转发消息）、公开或私密频道/群组的 ID
- 🌍 支持 15 种语言，每位用户可自动选择语言
- 🔒 使用机器人前的强制加入频道/群组锁定系统
- 🛠 管理面板：统计数据、锁定管理、广告管理、群发消息
- 📢 内置广告系统（转发、复制消息或结果下方文字）
- 💾 通过 Cloudflare KV 持久化存储，无需外部数据库
- ⚡ 无依赖、单文件、几分钟即可部署

### 📋 前置要求

- 一个 [Cloudflare 账户](https://dash.cloudflare.com/sign-up)（免费套餐即可）
- 从 [@BotFather](https://t.me/BotFather) 获取的机器人令牌

### 🚀 部署步骤

1. 在 Cloudflare 控制台中创建一个新的 **Worker**。
2. 将 worker 文件的全部内容粘贴到 Worker 编辑器中。
3. 进入 **Settings → Variables and Secrets** 并添加：

   | 变量        | 说明                                                        |
   |-------------|---------------------------------------------------------------|
   | `BOT_TOKEN` | 来自 `@BotFather` 的机器人令牌                                 |
   | `ADMIN_IDS` | 用逗号分隔的管理员数字 ID，例如：`111111,222222`               |

4. 进入 **Settings → Bindings → KV Namespace** 并添加绑定：

   | 变量名称   | 绑定内容                     |
   |------------|-------------------------------|
   | `BOT_KV`   | 任意一个 KV 命名空间           |

5. 点击 **Deploy**。
6. 在浏览器中打开一次 Worker 的地址（`GET` 请求）——Webhook 将自动设置完成。

完成！你的机器人已经上线。✅

### 🈺 支持的语言

🇮🇷 波斯语 · 🇬🇧 英语 · 🇷🇺 俄语 · 🇸🇦 阿拉伯语 · 🇪🇸 西班牙语 · 🇹🇷 土耳其语 · 🇫🇷 法语 · 🇩🇪 德语 · 🇵🇹 葡萄牙语 · 🇮🇹 意大利语 · 🇮🇳 印地语 · 🇵🇰 乌尔都语 · 🇦🇿 阿塞拜疆语 · 🇺🇿 乌兹别克语 · 🇮🇩 印尼语

### 💬 联系与支持

如果您有任何问题或需要联系我们，请加入我们的 Telegram 频道：[@NetraIR](https://t.me/NetraIR)

---

## 📄 License / مجوز / Лицензия / 许可证

This project is licensed under the **MIT License**.

<div align="center">

Made with ❤️ for the Telegram community

</div>
