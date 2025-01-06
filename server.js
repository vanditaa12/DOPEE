const dns = require('dns');
const dgram = require('dgram');

const PORT = 5353;

// Create a DNS server
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`Received message from ${rinfo.address}:${rinfo.port}`);
  // Basic response to any DNS query
  const response = Buffer.from([
    ...msg.slice(0, 2), // Copy transaction ID
    0x81, 0x80,        // Standard query response, no error
    0x00, 0x01,        // Questions
    0x00, 0x01,        // Answers
    0x00, 0x00,        // Authority RRs
    0x00, 0x00,        // Additional RRs
    ...msg.slice(12),  // Copy the query name
    0x00, 0x01, 0x00, 0x01, // Query type A, class IN
    0xC0, 0x0C,        // Pointer to query name
    0x00, 0x01, 0x00, 0x01, // Answer type A, class IN
    0x00, 0x00, 0x00, 0x3C, // TTL 60 seconds
    0x00, 0x04,        // Data length
    127, 0, 0, 1       // 127.0.0.1 as the response IP
  ]);

  server.send(response, rinfo.port, rinfo.address, () => {
    console.log(`Response sent to ${rinfo.address}:${rinfo.port}`);
  });
});

server.bind(PORT, () => {
  console.log(`DNS server running on port ${PORT}`);
});
