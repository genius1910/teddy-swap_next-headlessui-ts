var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

var mock = new MockAdapter(axios);

mock.onGet('/getVolume').reply(function (req: any) {
    let now = new Date();
    let data = { data: [] as { name: string, price: number }[] };
    if (req.time === '1H') {
        for (let i = 0; i < 60; i++) {
            const date = new Date(now.getTime() - (60 - i) * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1) + '-' + date.getDate() + ' ' + date.getHours() + '-' + date.getMinutes(), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === '1D') {
        for (let i = 0; i < 24; i++) {
            const date = new Date(now.getTime() - (24 - i) * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1) + '-' + date.getDate() + ' ' + date.getHours(), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === '1W') {
        for (let i = 0; i < 24 * 7; i++) {
            const date = new Date(now.getTime() - (7 * 24 - i) * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1) + '-' + date.getDate() + ' ' + date.getHours(), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === '1M') {
        for (let i = 0; i < 30; i++) {
            const date = new Date(now.getTime() - (30 - i) * 24 * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1) + '-' + date.getDate(), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === '3M') {
        for (let i = 0; i < 91; i++) {
            const date = new Date(now.getTime() - (91 - i) * 24 * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1) + '-' + date.getDate(), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === '1Y') {
        for (let i = 0; i < 12; i++) {
            const date = new Date(now.getTime() - (12 - i) * 30 * 24 * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === 'All Time') {
        for (let i = 0; i < 20; i++) {
            const date = new Date(now.getTime() - (12 - i) * 30 * 24 * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    return [200, data];
});

mock.onGet('/getTVL').reply(function (req: any) {
    let now = new Date();
    let data = { data: [] as { name: string, price: number }[] };
    if (req.time === '1H') {
        for (let i = 0; i < 60; i++) {
            const date = new Date(now.getTime() - (60 - i) * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1) + '-' + date.getDate() + ' ' + date.getHours() + '-' + date.getMinutes(), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === '1D') {
        for (let i = 0; i < 24; i++) {
            const date = new Date(now.getTime() - (24 - i) * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1) + '-' + date.getDate() + ' ' + date.getHours(), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === '1W') {
        for (let i = 0; i < 24 * 7; i++) {
            const date = new Date(now.getTime() - (7 * 24 - i) * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1) + '-' + date.getDate() + ' ' + date.getHours(), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === '1M') {
        for (let i = 0; i < 30; i++) {
            const date = new Date(now.getTime() - (30 - i) * 24 * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1) + '-' + date.getDate(), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === '3M') {
        for (let i = 0; i < 91; i++) {
            const date = new Date(now.getTime() - (91 - i) * 24 * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1) + '-' + date.getDate(), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === '1Y') {
        for (let i = 0; i < 12; i++) {
            const date = new Date(now.getTime() - (12 - i) * 30 * 24 * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    if (req.time === 'All Time') {
        for (let i = 0; i < 20; i++) {
            const date = new Date(now.getTime() - (12 - i) * 30 * 24 * 60 * 60 * 1000);
            let item = { name: date.getFullYear() + '-' + Math.floor(date.getMonth() % 12 + 1), price: Math.floor(Math.random() * 100) };
            data.data.push(item);
        }
    }
    return [200, data];
});

mock.onGet('/getTopGainers').reply(function () {
    let data = { data: [] as { name: string, value: number, rate: number }[] };
    const nameList = ["TEDY", "USDA", "iUSD", "cBTC"];
    let index = Math.floor(Math.random() * 4);
    let topValue = 10;
    let topRate = 40;
    for (let i = 0; i < 4; i++) {
        let item = { name: nameList[(index + i) % 4], value: (10 - Math.random() * 10) % topValue + 1, rate: (40 - Math.random() * 40) % topRate + 1 }
        data.data.push(item);
        topValue = Math.floor(item.value);
        topRate = Math.floor(item.rate);
    }
    return [200, data];
})

mock.onGet('/getTopVolume').reply(function () {
    let data = { data: [] as { name: string, value: number, rate: number }[] };
    const nameList = ["iUSD", "TEDY", "USDA", "cBTC"];
    let index = Math.floor(Math.random() * 4);
    let topValue = 4000000;
    let topRate = 40;
    for (let i = 0; i < 4; i++) {
        let item = { name: nameList[(index + i) % 4], value: Math.floor(4000000 - Math.random() * 4000000) % topValue + 100, rate: (40 - Math.random() * 40) % topRate + 1 }
        data.data.push(item);
        topValue = Math.floor(item.value);
        topRate = Math.floor(item.rate);
    }
    return [200, data];
})

mock.onGet('/getTopLoser').reply(function () {
    let data = { data: [] as { name: string, value: number, rate: number }[] };
    const nameList = ["TEDY", "iUSD", "USDA", "cBTC"];
    let index = Math.floor(Math.random() * 4);
    let topValue = 4000000;
    let topRate = 40;
    for (let i = 0; i < 4; i++) {
        let item = { name: nameList[(index + i) % 4], value: Math.floor(4000000 - Math.random() * 4000000) % topValue + 100, rate: -(40 - Math.random() * 40) % topRate - 1 }
        data.data.push(item);
        topValue = Math.floor(item.value);
        topRate = Math.floor(-item.rate);
    }
    return [200, data];
})

mock.onGet('/getTokenData').reply(function (req: any) {
    let now = new Date();
    let data = { data: [] as { name: string, price: number, change: number, volume: number, tvl: number, cap: number }[] };
    const nameList = ["TEDY", "iUSD", "USDA", "cBTC"];
    if (req.time === '1D') {
        for (let i = 0; i < 6; i++) {
            let item = { name: nameList[Math.floor((Math.random() * 20)) % 4], price: Math.random() * 10, change: Math.random() * 20 - 5, volume: Math.random() * 4, tvl: Math.random() * 7, cap: Math.random() * 120 }
            data.data.push(item);
        }
    }
    if (req.time === '2D') {
        for (let i = 0; i < 14; i++) {
            let item = { name: nameList[Math.floor((Math.random() * 20)) % 4], price: Math.random() * 10, change: Math.random() * 20 - 5, volume: Math.random() * 4, tvl: Math.random() * 7, cap: Math.random() * 120 }
            data.data.push(item);
        }
    }
    if (req.time === '3D') {
        for (let i = 0; i < 20; i++) {
            let item = { name: nameList[Math.floor((Math.random() * 20)) % 4], price: Math.random() * 10, change: Math.random() * 20 - 5, volume: Math.random() * 4, tvl: Math.random() * 7, cap: Math.random() * 120 }
            data.data.push(item);
        }
    }
    if (req.time === '1W') {
        for (let i = 0; i < 70; i++) {
            let item = { name: nameList[Math.floor((Math.random() * 20)) % 4], price: Math.random() * 10, change: Math.random() * 20 - 5, volume: Math.random() * 4, tvl: Math.random() * 7, cap: Math.random() * 120 }
            data.data.push(item);
        }
    }
    return [200, data];
})

export const getVolume = async (time: string) => {
    let data;
    await axios.get('/getVolume', { time: time })
        .then((res: any) => {
            data = res.data.data;
        });
    return data;
}

export const getTVL = async (time: string) => {
    let data;
    await axios.get('/getTVL', { time: time })
        .then((res: any) => {
            data = res.data.data;
        });
    return data;
}

export const getTopGainers = async () => {
    let data;
    await axios.get('/getTopGainers')
        .then((res: any) => {
            data = res.data.data;
        });
    return data;
}

export const getTopVolume = async () => {
    let data;
    await axios.get('/getTopVolume')
        .then((res: any) => {
            data = res.data.data;
        });
    return data;
}

export const getTopLoser = async () => {
    let data;
    await axios.get('/getTopLoser')
        .then((res: any) => {
            data = res.data.data;
        });
    return data;
}

export const getTokenData = async (time: string) => {
    let data;
    await axios.get('/getTokenData', { time: time })
        .then((res: any) => {
            data = res.data.data;
        });
    return data;
}