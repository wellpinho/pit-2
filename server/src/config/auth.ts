const hash = process.env.SECRET_HASH;

if (!hash) {
    throw new Error("No secret hash provided");
}

const authConfig = {
    jwt: {
        secret: hash,
        expiresIn: "1d",
    },
};

export { authConfig };