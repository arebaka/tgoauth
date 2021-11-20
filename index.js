const crypto = require("crypto");

function createSecretKey(token)
{
    return crypto
        .createHash("sha256")
        .update(token)
        .digest();
}

function check(secretKey, data)
{
    const hash   = data.hash;
    let   concat = [];

    for (let key in data) {
        if (key != "hash") {
            concat.push(`${key}=${data[key]}`);
        }
    }

    concat.sort();
    concat = concat.join('\n');

    return crypto
        .createHmac("sha256", secretKey)
        .update(concat)
        .digest("hex") === hash;
}

module.exports = {
    createSecretKey,
    check
};
