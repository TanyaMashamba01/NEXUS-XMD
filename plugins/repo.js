

/*
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "repo",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖🫡🇿🇼",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *Joshuamambo1*

> *ngatifareyichso REPO:*
*|* https://github.com/pkdriller/B.M.B-XMD

> *SUPPORT GROUP:*
*|* Follow the MidKing 🇿🇼TECH 🇿🇼 channel on https://whatsapp.com/channel/0029VaraMtfFcowAKRdDdp1T
*╰──────────────●●►*

> *CREATED BY 🔥B.M.B-XMD🔥*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363347365643318@newsletter',
      newsletterName: "Joshuamambomz-𝚇𝙼𝙳 🇿🇼",
      serverMessageId: 999
    },
externalAdReply: { 
title: '𝙱.𝙼.𝙱-𝚇𝙼𝙳🇹🇿',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/bmbxmd/B.M.B-XMD" ,
thumbnailUrl: "https://i.postimg.cc/4NdSqms8/MidKing.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
*/

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["repo", "sc", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "🔥🫡🇿🇼",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/pkdriller/NEXUS-XMD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐄𝐑𝐄 🔥 Joshuamambo1-XMD 🔥 𝐖.𝐀 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑!* 

> *a whatsapp bot that enhance your experience with amazing features,developed by PKDRILLER.*🔥

*𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐄𝐈𝐍𝐆 🔥MidKing-𝐗𝐌𝐃🔥* 

> *Don't forget to Subscribe, like and Share to https://youtube.com/@joshuamambo1🌟🍴*

https://github.com/Joshuamambo1/don'tcopytjisrepo
──────────────────
${readMore}
\`BOT NAME:\`🪀
> ${repoData.name}

\`OWNER NAME:\`👨‍💻
> ${repoData.owner.login}

\`DESCRIPTION:\`📃
> ${repoData.description || 'No description'}\n
──────────────────
\n> *© Joshuamambo-XMD* 🎐`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://i.postimg.cc/4NdSqms8/MidKing.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363347365643318@newsletter',
                    newsletterName: '☇ Joshuamambo1-xmd suppσrt  ⃪🔥𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/1uh5pq.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363347365643318@newsletter',
                    newsletterName: '☇ midking suppσrt⃪🤖͎᪳᪳𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
