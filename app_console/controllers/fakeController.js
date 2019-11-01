
/**
 * @module controllers/defaultController
 */
async function index (options) {
    console.log("start fake");
    for (let minute=0;minute<10;minute++){
        for (let second=0;second<60;second ++){
            console.log(`spend time -> ${minute}:${second}`);
            await new Promise(resolve=>setTimeout(resolve,1000));
        }
    }

    console.log("finish fake");
    process.exit(0);
};

module.exports = {index};


