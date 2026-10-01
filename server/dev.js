import { spawn } from 'node:child_process';
import { networkInterfaces } from 'node:os';
import { fileURLToPath } from 'node:url';
import { createLanServer } from './lan.js';

const lanPort = Number(process.env.LAN_PORT) || 5174;
const vitePath = fileURLToPath(new URL('../node_modules/vite/bin/vite.js', import.meta.url));
const lan = createLanServer({ port: lanPort });
const vite = spawn(process.execPath, [vitePath, '--host', '0.0.0.0', '--port', '5173', '--strictPort'], {
  stdio: 'inherit',
  env: { ...process.env, VITE_LAN_PORT: String(lanPort), VITE_ONLINE_BACKEND: 'lan' },
});

lan.on('listening', () => {
  console.log(`Máy chủ kiểm tra LAN đang nghe tại cổng ${lanPort}.`);
  for (const addresses of Object.values(networkInterfaces())) {
    for (const address of addresses || []) {
      if (address.family === 'IPv4' && !address.internal) console.log(`Mở trên thiết bị cùng LAN: http://${address.address}:5173/`);
    }
  }
});
lan.on('error', error => { console.error(`Không mở được cổng LAN ${lanPort}:`, error.message); vite.kill(); process.exitCode = 1; });
vite.on('exit', code => { lan.close(); process.exitCode = code || process.exitCode || 0; });
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => { vite.kill(signal); lan.close(); });
}
