const TPImages = ["IMG_7086.jpg", "IMG_7126.jpg", "IMG_7138.jpg", "IMG_7275.jpg", "IMG_7276.jpg", "IMG_7277.jpg", "IMG_7294.jpg", "IMG_7311.jpg", "IMG_7389.jpg", "IMG_7390.jpg", "IMG_7396.jpg", "IMG_7853.jpg", "IMG_7868.jpg", "IMG_7868.jpg", "IMG_7876.jpg", "IMG_7877.jpg", "IMG_9275.jpg", "IMG_9276.jpg"];
const TrainID = require("../");
const RBLXTPImages = ["IMG_7086.jpg", "IMG_7126.jpg", "IMG_7138.jpg", "IMG_7275.jpg", "IMG_7276.jpg", "IMG_7277.jpg", "IMG_7294.jpg", "IMG_7311.jpg", "IMG_7389.jpg", "IMG_7390.jpg", "IMG_7396.jpg", "IMG_7853.jpg", "IMG_7868.jpg", "IMG_7868.jpg", "IMG_7876.jpg", "IMG_7877.jpg", "IMG_9275.jpg", "IMG_9276.jpg"];


async function auth (req, res) { // handle auth
    const { authTokens } = require ("../security.js");
    const authQuery = await req.query.auth;
    const authHeader = await req.headers.auth;
   // if (!authTokens.includes(authQuery || authHeader)) return await res.status(401).json({ status: 401, message: 'Unauthorized', info: 'You are missing a valid API key. See https://outcastcorp.xyz/api/v2/help for more details.' })
    if (!req.get('User-Agent')) return res.status(403).json({ status: 403, message: 'Forbidden', info: 'Please set a valid user agent.' });
};

module.exports = {
    train: async (req, res, /* authQuery, authHeader */) => {
        await auth (req, res);
        res.status(200).json({
            image: `https://cdn.outcastcorp.xyz/api/trains/${TPImages[Math.floor(Math.random()*TPImages.length)]}`,
            id: `${undefined} of ${TPImages.length}`,
            status: 200,
            message: 'Train !!',
        });
    },
    robloxtrains: async (req, res, /* authQuery, authHeader */) => {
        await auth (req, res);
        res.status(200).json({
            image: `https://cdn.outcastcorp.xyz/api/trains/${TPImages[Math.floor(Math.random()*TPImages.length)]}`,
            id: `${undefined} of ${undefined}`,
            status: 200,
            message: 'Train !!',
        });
    },
  };