//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxjMlpVR0hYRTVSTDlxWkV5L2NiWk9kci8zYXY2VCtqRUE5dXNnaXAxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1hiK3QwK0VpL2ZKNnl0czB2aDlHN28waUVNUW9XOFZubVZBelZOZ3FCYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RWZLZUpCaWlRZldaajFRZUhTT2wvNGlJdnRHZzNjWUN6N3RVQ3R5SmxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2L2l4dnRSeTUxclhvWG8reEdpNG9jQk8wTXF4UWs0V0l4M0VWckxsdzEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKcmFreU9XLzBHUW1VRm1IazM5Z2srZGVMN2ZRWlFnMHJhYTRtNjlSRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAybUJmWks1TExQemVaQlZCMkMxMXY0T0l2Q05kVThyaGxpNTVoSmZjbGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0J3ckdScnJJTTdJUGpaOU5PbjIzQ0t1VmNjcjhpZjZ3WFJIWUkrakpIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVhsbXRjc3c1VmlNODBxTTVjMUNnSHozSXFBaEdTRTZaaGFHWEFHbUNXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVVS2Z0ZmJ4VTN3ZllSTzczODRVWnVXSk4rNVgyR3ZkclhEb0tIWDcyWm1rRmFMd2ZhZHh6MmR0cGVnVHdKaU5PaTRyKytXcFRKZU9nSWhNaHZyQWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiIwQ2ZTa0FrQitrZlZuM2xERkFRMktkaEF1YWdDaXVRcU5kTWpQbHZoRG8wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrcFNGWTlNQVM3dU0yd0F1ZWtOanlRIiwicGhvbmVJZCI6IjE4YWFjMjUxLWI1ZTQtNDQ5Zi05OTJmLWVjMjQ5NGM1MDc3NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiVkplSEJrcWVJTnQ1NEdlaDJzM3dyZXpyT2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM09oNTNMUEJDMFlaM2t5dVpWbzhla0IrcnU0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFCQzIyQkdOIiwibWUiOnsiaWQiOiI5NDc4NTkzMDcxNzozM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0OTgwNDc1MTUzMjE0MDozM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2dmd1a0ZFSXZ6enNJR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjYrL2lPQUhzM3F3eFZuanpDdlZLcS9IWVQwUHBaYnBtZVY2RlREYVQxRVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Iktxbkozbi9jLzh1R0hnWHFtc25BL1JFL2xtQUVMZG0xWWxiYVNhcW1lK3pOYnpHUmVVa2RnZTl2ZVZYL01NUUYyRGw5bkFWMjdFUmF1VVgxaUVwMENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCb0pKN2dkSWNjQ3VkUHdXUnpLQlRwbHdKamp5QXkxTlhPSGI5ZE5qOHZ5Z1AycVFIUVZmUzFZSzUrbEVUZFNhWndPWENHbEprcHd0Rm1na2s4SUlqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg1OTMwNzE3OjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmV2djRqZ0I3TjZzTVZaNDh3cjFTcXZ4MkU5RDZXVzZabmxlaFV3Mms5UkcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDMxNzQ2MywibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMY0gifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94785930717",
  PASSWORD: 
    process.env.PASSWORD || "Hr1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94705349577"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
