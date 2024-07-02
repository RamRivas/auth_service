import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT,
    DEBUG_MODE,
    HOST,
    USER,
    PASSWORD,
    DATABASE,
    MAX,
    IDLETIMEOUTMILLIS,
    CONNECTIONTIMEOUTMILLIS,
    SENDER_EMAIL,
    SENDER_PWD,
    SALT_ROUNDS,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    TEST_MODE,
} = process.env;
