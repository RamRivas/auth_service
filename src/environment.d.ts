import { Secret } from 'jsonwebtoken';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            DEBUG_MODE: boolean;
            HOST: string;
            USER: string;
            PASSWORD: string;
            DATABASE: string;
            MAX: number;
            IDLETIMEOUTMILLIS: number;
            CONNECTIONTIMEOUTMILLIS: number;
            SENDER_EMAIL: string;
            SENDER_PWD: string;
            SALT_ROUNDS: string;
            ACCESS_TOKEN_SECRET: Secret;
            REFRESH_TOKEN_SECRET: Secret;
            TEST_MODE: number;
        }
    }
}

export {};
