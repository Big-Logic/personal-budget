import express from "express";

const app = express();

app.use(express.json());

const envelopes = [];

app.post("/envelopes", (req, res) => {
    const {userId, budget} = req.body;
    if (!userId || !budget) {
        return res.status(400).json({error: "userId and budget are required"});
    }
    const envelope = {id: envelopes.length + 1, userId, budget};
    envelopes.push(envelope);
    res.status(201).json(envelope);

});

app.get("/envelopes", (req, res) => {
    res.json(envelopes);
});

export default app;