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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_54_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDY4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI4LFxuICAgICAgICA1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDYzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM5LFxuICAgICAgICA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMxLFxuICAgICAgICA4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDQxLFxuICAgICAgICAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJBdUFLRk92bHRvd0FqS3ZBNmYrdmI3QklXQ3BST2tlU0RLUVZ5d1Jib1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZkVHA4UW53UWhTX2x2MUxRUjJaVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmI0NWU2ZjAtY2Q3OS00N2EwLTljMWItOGY0NzE2MzQ5ZjJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDk3LFxuICAgICAgMjQ2LFxuICAgICAgMjQzLFxuICAgICAgMzcsXG4gICAgICAxNDgsXG4gICAgICAxMTYsXG4gICAgICA0OSxcbiAgICAgIDE5NCxcbiAgICAgIDIxMCxcbiAgICAgIDE2OCxcbiAgICAgIDE3LFxuICAgICAgMTE0LFxuICAgICAgOTgsXG4gICAgICA2NCxcbiAgICAgIDM2LFxuICAgICAgMTg0LFxuICAgICAgMTc0LFxuICAgICAgMTQ0LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAxODksXG4gICAgICA3OCxcbiAgICAgIDc0LFxuICAgICAgMzEsXG4gICAgICAxNDQsXG4gICAgICAxNTQsXG4gICAgICAxNTQsXG4gICAgICAxODEsXG4gICAgICAxMTcsXG4gICAgICAxNDQsXG4gICAgICA0NixcbiAgICAgIDkxLFxuICAgICAgMjA5LFxuICAgICAgMTQ0LFxuICAgICAgMzcsXG4gICAgICAyMTgsXG4gICAgICAzOCxcbiAgICAgIDM2LFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlMxUVhCQ0NHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3ODYwNjEzOTU6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLQUJPSVwiLFxuICAgIFwibGlkXCI6IFwiMTk1MzM4MTMzMDEzNTI6NzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUQ4ck5NRUVNbmh3TFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1STQzTWh4Uzczb2VFWUtLOERwNCtab1VpTjRyRzdIanJHaE83bXgzVFRVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZ4VVRscG5vY29MVnZnYmI3YnNYZGVmeFcxRklhNDJ6Q0R3cjhYZk9TQUM0QmwwWkU5YWxNYy9XSktyZm9DeFZHTWltcUFvZWc1OXpuQlZJdzA0eURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlOTXFJVlhpcmV6d1NRVXovaFgwYzJEbkRvVVhrK29Yc1IwZXdBUW9QaDg5ZXNwRzg1RExiRU9mTUZIRDhWc1lrUTJPWEFKVy92K0tXS2FqditsVmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc4NjA2MTM5NTo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODIyODYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSElLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEaGdhZlg1S0JUNkxvbmZNZTFSV0N5Qnd5L3BRZ2ZNOWcxUlFoZ0ZZbGhjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNDg1NDIyNjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "KABOITECH",


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
