const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());


const dbUrl = 'postgres://webadmin:QRYmts12232@node51698-saharatt1.proen.app.ruk-com.cloud:11537/Books'


const sequelize = new Sequelize(dbUrl)