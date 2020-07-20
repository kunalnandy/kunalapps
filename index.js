/**
 Copyright 2020 Arkadip Bhattacharya

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');

const app = express();

app.set('trust proxy', true);

app.use(express.static(path.resolve(__dirname, 'client', 'assets')));
app.get('/', rateLimit(), (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
app.get('/about', rateLimit(), (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'about.html'));
});
app.get('/clippings', rateLimit(), (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'clippings.html'));
});
app.get('/contact', rateLimit(), (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'contact.html'));
});
app.get('/gallery', rateLimit(), (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'gallery.html'));
});

app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`WWW server running on ${PORT}`));