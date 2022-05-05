import rateLimit from 'express-rate-limit'

const RateLimitTime = Number(process.env.RATE_LIMIT_TIME) || 15;
const rateLimitRequest = Number(process.env.RATE_LIMIT_REQUESTS) || 100;

export default () => {
    return rateLimit({
        windowMs: RateLimitTime * 60 * 100,
        max: rateLimitRequest,
        message: 'Rate limit exceeded, please try again later.',
    });
}