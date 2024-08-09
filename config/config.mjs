// config.mjs
import mongoose from 'mongoose';

// MongoDB URIs
const mongoURI1 = "mongodb://DB1userName:PASSWORD@142.250.194.110.54:27727/DB1Name"; //Enter your first MongoDB URI
const mongoURI2 = "mongodb://DB2userName:PASSWORD@52.95.116.115:27727/DB2Name"; //Enter your second MongoDB URI
const mongoURI3 = "mongodb://DB3UserName:PASSWORD@103.243.32.90:27727/DB3Name"; //Enter your third MongoDB URI

// Separate connection instances for each URI
const conn1 = mongoose.createConnection(mongoURI1);
const conn2 = mongoose.createConnection(mongoURI2);
const conn3 = mongoose.createConnection(mongoURI3);

export const connections = { conn1, conn2, conn3 };