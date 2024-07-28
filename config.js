const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256786061395";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_24_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICA1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDcxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDExLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAwLFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTExLFxuICAgICAgICA2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk1LFxuICAgICAgICAzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBzdDNHSnpNL0VUQ0pGK2JIMUxwSVNJWlVWSGlZTUxHbGFYVDNuNkcyR2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkltNTVOanE5UkFXU2JabmR2VVVuZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmRkNzI5MGEtN2RlNy00NmYxLWJjZTAtZGUxNzhiOGFlNjE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDE2LFxuICAgICAgMTksXG4gICAgICA0LFxuICAgICAgMjUxLFxuICAgICAgMjMxLFxuICAgICAgMTk2LFxuICAgICAgNzYsXG4gICAgICAxMSxcbiAgICAgIDE3MixcbiAgICAgIDM2LFxuICAgICAgMzgsXG4gICAgICAxNDAsXG4gICAgICAxMzIsXG4gICAgICAzMixcbiAgICAgIDE3NixcbiAgICAgIDEyNixcbiAgICAgIDM5LFxuICAgICAgMTQ2LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMTY4LFxuICAgICAgMTAwLFxuICAgICAgMjA2LFxuICAgICAgMzcsXG4gICAgICA1LFxuICAgICAgMTg3LFxuICAgICAgMTY3LFxuICAgICAgMTk3LFxuICAgICAgMjIzLFxuICAgICAgNTAsXG4gICAgICAyNDMsXG4gICAgICAxNzQsXG4gICAgICAyNDAsXG4gICAgICA2NSxcbiAgICAgIDIzLFxuICAgICAgOTMsXG4gICAgICAxODcsXG4gICAgICAxNjEsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWktBWTY5Q0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc4NjA2MTM5NTo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktBQk9JXCIsXG4gICAgXCJsaWRcIjogXCIxOTUzMzgxMzMwMTM1Mjo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMzhyTk1FRUszczlMUUdHQjhnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVJNDNNaHhTNzNvZUVZS0s4RHA0K1pvVWlONHJHN0hqckdoTzdteDNUVFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQVFZdzBmZ01NeDI0dTgwTGZ1ZS84WHZna0RHeldaY29BMWlHZ1J2RCtBSkNOaVhQY1V3VDVrdUdkUkl1NVd0dUVzNFdvMENwU2luSDRHTmRrdHNZQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibU5Sb0pqWUhiK054L0Q5QTZYWkFveS96SHdDSE5jajR4bXpCSndHTWZLakhIYUwwd2szcDBwM2lZZmFxaVZNaHdQbE0rLzE0czlib0xFNVBJTFAwREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzg2MDYxMzk1OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1NzkwNTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFISUtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhJSy5qc29uIjogIntcImtleURhdGFcIjpcIkRoZ2FmWDVLQlQ2TG9uZk1lMVJXQ3lCd3kvcFFnZk05ZzFSUWhnRllsaGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI0ODU0MjI2OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
