<div align="center">

# ✦ Samaksh Bot

### `A powerful • all-in-one • open-source Discord bot`

**Security • Moderation • AI • Automation • Tickets • Giveaways • Fun**

<br>

[![Discord](https://img.shields.io/discord/1414217749038891102?style=for-the-badge\&logo=discord\&logoColor=white\&label=SUPPORT\&color=5865F2)](https://discord.gg/aerox)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Discord.js](https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge\&logo=discord\&logoColor=white)](https://discord.js.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge\&logo=postgresql\&logoColor=white)](https://www.postgresql.org/)

<br>

[ ✦ Features ](#-features) •
[ ⚙️ Setup ](#️-setup) •
[ 📁 Structure ](#-project-structure) •
[ 💜 Support ](#-support)

</div>

---

## ✦ What is Samaksh Bot?

**Samaksh Bot** is a powerful, self-hostable and open-source **all-in-one Discord bot** built with **Discord.js v14**.

Instead of using multiple bots for different tasks, Samaksh brings everything together in one place.

> 🛡️ Protect your server
> 🤖 Automate your community
> 🧠 Chat with AI
> 🎫 Manage support tickets
> 🎉 Run giveaways
> 📊 Track engagement
> ⚡ Control everything with commands

Samaksh supports both **prefix commands** and **slash commands** through a unified hybrid command system.

Persistent data is powered by **PostgreSQL + Sequelize ORM**, with configuration available on a per-server basis.

---

# ✨ Features

## 🛡️ Security & Anti-Nuke

Keep your server protected from destructive actions, raids and malicious users.

* 🔥 Mass channel deletion detection
* 🗑️ Mass role deletion protection
* 🪝 Unauthorized webhook detection
* 🤖 Unauthorized bot join detection
* ⚙️ Configurable detection thresholds
* 🚫 Automatic punishment actions
* 👑 Per-server whitelist system
* 🤝 Trusted user & bot management
* 🧙 Interactive security setup wizard

---

## 🔨 Moderation

Everything you need to keep your community organized.

* 🔨 Ban / Kick
* 🔇 Mute & temporary roles
* 📝 Reason tracking
* 🐌 Slowmode
* 🔒 Lock / Unlock channels
* ✏️ Nickname management
* 🧹 Bulk message purge
* 👤 User-specific purge filters
* 🤖 Bot-only purge
* 🔊 Voice moderation
* 🔇 Voice mute / deafen
* 👢 Voice kick
* ↔️ Move / Pull members
* 🔐 Private voice channels

---

## 🤖 AutoMod

Automatic protection without constantly watching your server.

* 🔗 Invite filtering
* 🌐 URL filtering
* 🚫 Anti-spam
* 📢 Mass mention detection
* ✅ Configurable whitelists
* 📌 Per-channel whitelist
* 🎭 Per-role whitelist

---

## 📜 Advanced Logging

A complete audit trail for your server.

* ✏️ Message edit logs
* 🗑️ Message deletion logs
* 📸 Deleted message content snapshots
* 📁 Channel changes
* 🎭 Role changes
* 😀 Emoji changes
* 👋 Member joins
* 🚪 Member leaves
* 👤 User updates
* 🔊 Voice state changes
* ⚙️ Configurable log channels

---

## 🧠 AI Assistant — Melon

Meet **Melon**, the built-in conversational AI assistant.

* ⚡ Powered by **Groq API**
* 👁️ Image analysis via **Gemini Vision**
* 🌐 Real-time web search via **SerpAPI**
* 💬 Per-channel AI enable / disable
* 🎭 Custom AI identity
* 🔒 Does not expose the underlying provider/model
* 🧩 Integrated directly into Discord

---

## 🎫 Ticket System

A complete support system for your community.

* 📂 Multiple ticket categories
* 👮 Dedicated staff roles
* 🙋 Ticket claiming
* 🔄 Ticket transferring
* ✏️ Ticket renaming
* 🔒 Ticket closing
* 🗑️ Ticket deletion
* ♻️ Ticket reopening
* 📜 Full transcripts
* 🎛️ Self-service ticket panels

---

## 🎉 Giveaways

Create clean and automated giveaways.

* 🎁 Custom prizes
* ⏱️ Custom duration
* 🏆 Multiple winners
* 🛑 End giveaways early
* 🔄 Reroll winners
* 📢 Automatic winner announcements

---

## 👋 Welcome & Farewell

Give your members a proper first impression.

* 👋 Custom welcome messages
* 🚪 Custom farewell messages
* 🎨 Rich embeds
* 🖼️ Image & background support
* 🧪 Preview/test commands
* 📌 Per-server configuration
* 📢 Custom channel routing

---

## 👤 Profile System

Give every member their own identity.

* 🪪 Canvas-generated profile cards
* ✍️ Custom biography
* 🖼️ Custom backgrounds
* 🔗 Social links
* 👀 View other members' profiles
* 💬 Global message leaderboard
* 📩 Invite leaderboard

---

## 🧰 Utility

A huge collection of useful utilities.

* 📏 CM ↔ FT
* ⚖️ KG ↔ LB
* 🔢 Base32
* 🔐 Hex
* 🔄 ROT13
* 💻 Binary conversion
* 🏠 Server information
* 👤 User information
* 🎭 Role information
* 🔗 Invite tracking
* 📊 Invite join positions
* 📦 Export bans
* 🎭 Export roles
* 👥 Export members
* 💬 Export messages
* 😴 AFK system
* ⏰ Personal reminders
* ✅ Todo lists
* 📚 Wikipedia search
* 🧮 Calculator

---

## ⚡ Automation

Let Samaksh handle repetitive tasks automatically.

### 🎙️ Join-to-Create — J2C

Automatically create temporary voice channels when users join a designated channel.

### 📢 Autopost

Schedule recurring messages in any channel.

### 🔄 Autobump

Automatically manage server bump scheduling.

### ❤️ Autoreact

Automatically react to messages in configured channels.

### 🎭 Vanity Roles

Automatically assign roles based on Discord status text.

### 🎨 Reaction Roles

Allow members to assign themselves roles using:

* 👍 Reactions
* 🔘 Buttons
* 🎛️ Interactive panels

---

## 🎮 Fun & Roleplay

Because every server needs some chaos. 😭

* 🤗 Hug
* 💋 Kiss
* 👋 Slap
* 🫳 Pat
* 🐶 Animal facts
* 🐱 Animal images
* 😂 Meme generation
* 💘 Ship calculator
* 💻 Fake hack
* 🐙 GitHub search
* ▶️ YouTube search

---

# ⚙️ Setup

### 📋 Requirements

* **Node.js >= 18**
* **PostgreSQL**
* Discord Bot Token
* Required API keys

### 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/SamakshBot/SamakshBot.git

# Enter the directory
cd SamakshBot

# Install dependencies
npm install

# Configure the bot
# Edit src/config.js with your credentials

# Start the bot
npm start
```

> 💡 **Tip:** Make sure your PostgreSQL database is accessible before starting the bot.

---

# 🎨 Emoji Synchronisation

Samaksh uses **Discord Application Emojis** instead of requiring a dedicated emoji server.

This means the bot's emojis can be used globally across servers.

### 🔄 Automatic Sync

On the first startup, if a `tempassets/` folder exists in the project root:

```text
tempassets/
├── emoji.webp
├── another.webp
├── animated.gif
└── ...
```

Samaksh automatically:

```text
📂 Scan tempassets/
       ↓
📤 Upload application emojis
       ↓
📝 Update src/emojis.json
       ↓
🗑️ Remove tempassets/
       ↓
🔄 Restart
       ↓
✅ Samaksh Bot online
```

No manual emoji configuration is required.

> ⚠️ **Note:** `tempassets/` is excluded through `.gitignore`.
>
> To synchronize new emojis, simply recreate the folder with the new `.webp` or `.gif` files and restart the bot.

---

# 🔐 Configuration

All configuration is located inside:

```text
src/config.js
```

| Key               | Description                   |
| ----------------- | ----------------------------- |
| `BOT_TOKEN`       | Discord bot token             |
| `CLIENT_ID`       | Discord application/client ID |
| `OWNER_ID`        | Owner Discord user ID         |
| `PREFIX`          | Default text command prefix   |
| `DATABASE_URL`    | PostgreSQL connection string  |
| `GROQ.API_KEY`    | Groq API key                  |
| `SERPAPI.API_KEY` | SerpAPI key                   |
| `STATUS.status`   | Bot presence                  |
| `STATUS.activity` | Bot activity                  |
| `SUPPORT_SERVER`  | Support server invite         |

> 🗄️ The database schema is automatically synchronized during startup — **no manual migrations required.**

---

# 📁 Project Structure

```text
src/
│
├── client.js
│   └── Main entry point
│
├── config.js
│   └── Bot configuration & API keys
│
├── emojis.json
│   └── Application emoji mappings
│
├── hybrid/
│   ├── ai/
│   ├── antinuke/
│   ├── automod/
│   ├── autobump/
│   ├── autopost/
│   ├── autoreact/
│   ├── farewell/
│   ├── giveaway/
│   ├── j2c/
│   ├── leaderboard/
│   ├── logging/
│   ├── profile/
│   ├── reactionroles/
│   ├── remind/
│   ├── ticket/
│   ├── todo/
│   ├── vanityroles/
│   ├── voice/
│   ├── welcome/
│   └── ...
│
├── gateway/
│   ├── antinuke/
│   ├── automod/
│   ├── interactions/
│   ├── messageCreate.js
│   ├── interactionCreate.js
│   ├── welcomeEvent.js
│   ├── farewellEvent.js
│   ├── voiceStateUpdate.js
│   ├── trackUserInvites.js
│   ├── trackUserMessages.js
│   └── ...
│
├── data/
│   └── models/
│       └── Sequelize models
│
├── lib/
│   ├── emojiSync.js
│   ├── profileCard.js
│   ├── pagination.js
│   ├── giveawayUtils.js
│   ├── ticketUtils.js
│   ├── commandLoader.js
│   └── ...
│
└── static/
    └── Fonts, badges & images
```

---

# 💜 Credits

<div align="center">

### 👨‍💻 Developer

**Samaksh Bot**

[GitHub](https://github.com/SamakshBot)

### 🤖 Project

**Samaksh Bot**

</div>

---

# 💬 Support

Need help, want to report a bug, or just want to hang out?

Join the **Samaksh Bot** Discord community.

<div align="center">

[![Join Discord](https://img.shields.io/badge/💜_JOIN_SUPPORT_SERVER-5865F2?style=for-the-badge\&logo=discord\&logoColor=white)](https://discord.gg/aerox)

</div>

---

<div align="center">

### ✦ Built with Discord.js • PostgreSQL • Sequelize • Node.js

<br>

**© 2026 Samaksh Bot**

<br>

`Made with 💜 for Discord communities`

</div>
