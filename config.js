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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_24_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDkwLFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjExLFxuICAgICAgICA4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc4LFxuICAgICAgICAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICA2MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxLFxuICAgICAgICAyNSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImhMRVBPK01HQ2NTd2NGdm5jYjZ5WVFSaVd2amZodkJRcExQbDRwaDdrb1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzA4MDgwMDk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGOTY5NkFCNUQxNzAxN0YxRjY1RkNBNkJDRjI5NDhCQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIzMzUwNTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieWZEQ180aEFUSnVJcDBTTXE2U3lMUVwiLFxuICBcInBob25lSWRcIjogXCIyMTE0MDUwMS03YjM1LTRlZGYtYmI5ZS1kNWFjYjI5OTE5NjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgNTcsXG4gICAgICA4NyxcbiAgICAgIDEwNixcbiAgICAgIDc4LFxuICAgICAgMjA1LFxuICAgICAgMjQyLFxuICAgICAgMTcyLFxuICAgICAgMjA0LFxuICAgICAgNzIsXG4gICAgICAxODksXG4gICAgICAyMzYsXG4gICAgICAyNixcbiAgICAgIDYsXG4gICAgICAxMjcsXG4gICAgICAyMDUsXG4gICAgICAxOTksXG4gICAgICAyMTAsXG4gICAgICA5MSxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAyMzksXG4gICAgICAyMTAsXG4gICAgICAxOTIsXG4gICAgICAxMjksXG4gICAgICAyMTAsXG4gICAgICA1MCxcbiAgICAgIDE4NSxcbiAgICAgIDIyNyxcbiAgICAgIDIxNCxcbiAgICAgIDM3LFxuICAgICAgMTA4LFxuICAgICAgMTMsXG4gICAgICA1NCxcbiAgICAgIDY3LFxuICAgICAgMTQ5LFxuICAgICAgMTYyLFxuICAgICAgMTQ5LFxuICAgICAgNSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZRlZERlE1NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzA4MDgwMDk5OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XnvCdl5zwnZeh8J2XmiDwnZea8J2XpfCdl5TwnZeX8J2XmFwiLFxuICAgIFwibGlkXCI6IFwiNzg2MTk4OTY0NTEzMjc6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm1wME1FRUVNTCtvclVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHWE1Edks5ZFN4czlWdUxmRVhmVVNjWWJ0aVRxcWhtalFCdXBCVGVjTWpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndhVzZTWllJYUxGUGZXVUVscmxaU2YwVDJlY0I2NFc5TnFXSU1kM0F4VWJ0cm9YZmJUclJlYzJHVFMzUEk4Wk05SW84ZGw3RENIRkV4ZjZMelcvZUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkljMDYxWkY0WmhSYTZWbGpxcU9XRTNkQXd4YzJVWVBxeUVuUFR0aTRPR093cHYvVER5NnNFNEF2dDF4VFA3cFljcGNkTW9EZEtacFFudCs2WGwwakNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NjcwODA4MDA5OToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzMzUwNDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKRzVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpHNS5qc29uIjogIntcImtleURhdGFcIjpcIlVlU3UxdHExOTNyK3ZON2xOYUNVOXNURXFKUWZSSS8wYUNGb3FsaWl2UE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIxMTM3Mjc2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
