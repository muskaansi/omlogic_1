module.exports = mongoose => {
    const Wallets = mongoose.model(
        "wallets",
        mongoose.Schema(
            {
                balance: Number,
                name: String
            },
            { timestamps: true}
        )
    );
    return Wallets;
};