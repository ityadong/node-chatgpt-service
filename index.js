import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { ChatGPTAPI } from 'chatgpt'

const app = express();
// 解析 application/x-www-form-urlencoded 类型的请求体
app.use(bodyParser.urlencoded({ extended: false }));
// 解析 application/json 类型的请求体
app.use(bodyParser.json());

// 指定接口跨域
// app.use(cors({
//     origin: 'http://localhost:3000/'
//   }));
// 解决跨域
app.use(cors());

app.post('/chatgpt', async (req, res) => {
    try {
        const { question } = req.body
        const api = new ChatGPTAPI({
            apiKey: '' // 在这里配置chatgpt的key
        })
        const chatRes = await api.sendMessage(question,
            {
                timeoutMs: 60 * 1000 // 一分钟超时
            })
        const responseData = {
            message: chatRes.text
        };
        console.log('question', question)
        res.json(responseData);
    } catch (err) {
        res.json(err);
        console.log('返回错误', err)
    }
});

app.listen(3000, () => {
    console.log('服务已启动，端口是3000');
});