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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_01_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDU0LFxuICAgICAgICAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM1LFxuICAgICAgICA1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgMTM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNsaUIxQkpFejVtdlRiQ0pkMkcyelBjdVd4QW9VYmNZekpxVTNZZzdRQmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdWb0Y2TzhWUzVDZ2d6TUlGYVNfV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTU5M2M1ZGItOTY5ZC00NmFlLWExNDAtOGMwMzNhZDEzYzExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICA4MyxcbiAgICAgIDk1LFxuICAgICAgNDUsXG4gICAgICAxODgsXG4gICAgICAyMjIsXG4gICAgICA5MSxcbiAgICAgIDIwNSxcbiAgICAgIDIyNixcbiAgICAgIDgwLFxuICAgICAgMTkwLFxuICAgICAgMTAzLFxuICAgICAgODMsXG4gICAgICAyNDMsXG4gICAgICAxMTMsXG4gICAgICAzNCxcbiAgICAgIDE4OSxcbiAgICAgIDE4MCxcbiAgICAgIDEwNixcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAxMDgsXG4gICAgICAzMCxcbiAgICAgIDExNyxcbiAgICAgIDE0MixcbiAgICAgIDY4LFxuICAgICAgNzMsXG4gICAgICA2NCxcbiAgICAgIDE0NixcbiAgICAgIDE5MixcbiAgICAgIDE2OSxcbiAgICAgIDExLFxuICAgICAgMjA4LFxuICAgICAgMjExLFxuICAgICAgNTQsXG4gICAgICA0MyxcbiAgICAgIDcyLFxuICAgICAgMjEsXG4gICAgICA4NyxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCTFA5RlI2TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NzI3OTgyMjk5OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTE3MzAzNjAxMTc0ODoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKVHo0cXdDRUpybm9iVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi8xMjV4RDZJOU91cnpBZEh6UmhtRlBWWjBmZ0M2YnVTVW8vM3FsdmVGQjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWjdURTduSCtTMGMwQm4zSDczeTZZejJzQTFNNDluVGJBYVZiTG9Nbll1eVJIWVF5cmJWcHV1UHBmd3kvWjJrQVdOb3I2Vm5TblhDMXk3bzNNc203REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQXE5YTAweTZTMktKemh0VGlBVzAybzN3VmEvSVNlcW5VZnA1NDUwRUsrN2cvOEtKWWtjeW5pdldkeHZMMTVwUk9ydjhuQ1VhTyt3R2hmZHcvWUUrQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3NzI3OTgyMjk5OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjMxNTY3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhuTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSG5OLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYUNsS2hSdGM5RHRjOCt2Q0F5cTR6MGZtWi9Tcm04TWFZdHN4MnA5b1RJYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MzA3NjU5NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjA2NzI0MDY5OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
