const hello = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello, world"
    });
};

module.exports = {
    hello
}
