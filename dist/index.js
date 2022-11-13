"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import your private configuration
require("dotenv/config");
// Run the database
require("./db");
// Run the API
require("./api");
// Run the websocket
require("./ws");
