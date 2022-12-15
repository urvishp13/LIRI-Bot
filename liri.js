import * as dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";
import spotify from "node-spotify-api";
//import express from "express";
import keys from "./keys.cjs";
const { id, secret } = keys;

