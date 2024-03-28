import PusherServer from 'pusher'

export const pusherServer = new PusherServer({
    appId: "1773274",
    key: "2e4273a2832ef9f6ff26",
    secret: "8884140c60a167972323",
    cluster: 'ap2',
    useTLS: true,
})