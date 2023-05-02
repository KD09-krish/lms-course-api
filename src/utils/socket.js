import { io } from "socket.io-client";

// const URL = process.env.REACT_APP_BACKEND_URL;
const URL = process.env.REACT_APP_BACKEND_URL + "/";

const socket = io(URL, { autoConnect: false });

socket.onAny((events, ...args) => {
  console.log(events, ...args);
});

export const connect = (username) => {
  socket.auth = { username };
  return socket.connect();
};

export default socket;
