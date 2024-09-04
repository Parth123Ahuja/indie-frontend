import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: '157.173.220.206:3127',
            changeOrigin: true,
        })
    );
};