module.exports = {
    LISTEN_CONNECTION_PORT: process.env.LISTEN_CONNECTION_PORT || 5000,
    MONGO_CONNECT_URL: process.env.MONGO_CONNECT_URL || 'mongodb://localhost:27017/my-job-portal',

    NO_REPLY_EMAIL_USER: process.env.NO_REPLY_EMAIL_USER,
    NO_REPLY_EMAIL_PASS: process.env.NO_REPLY_EMAIL_PASS,
};
