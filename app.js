const { PeerServer } = require('peer');

const peerServer = PeerServer({ port: 9001, path: '/myapp' });
