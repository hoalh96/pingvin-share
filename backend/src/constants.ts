export const DATA_DIRECTORY = process.env.DATA_DIRECTORY || "/home/cbstrenw3kD/cbs.trentay.net/public_html/data";
export const SHARE_DIRECTORY = `/home/cbstrenw3kD/cbs.trentay.net/public_html/data/uploads/shares`;
export const DATABASE_URL =
  process.env.DATABASE_URL ||
  "file:../data/pingvin-share.db?connection_limit=1";
export const CLAMAV_HOST =
  process.env.CLAMAV_HOST ||
  (process.env.NODE_ENV == "docker" ? "clamav" : "127.0.0.1");
export const CLAMAV_PORT = parseInt(process.env.CLAMAV_PORT) || 3310;
