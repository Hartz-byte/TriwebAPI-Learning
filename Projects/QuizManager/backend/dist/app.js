"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
// const connectionString =
//   "mongodb+srv://Hartz-byte:Hrshg%40%40123@cluster0.hr6ptoa.mongodb.net/workshopdb?retryWrites=true&w=majority&appName=Cluster0";
const connectionString = "mongodb+srv://Hartz-byte:Hrshg%40%40123@cluster0.hr6ptoa.mongodb.net/workshopdb?retryWrites=true&w=majority";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome!!");
});
app.use("/user", user_1.default);
// mongoose.connect(connectionString).then(() => {
//   console.log("Connected to MongoDB!");
// });
// // mongoose.connection.on("open", () => {
// //   console.log("Connected to MongoDB!");
// // });
// app.listen(3002, () => {
//   console.log("Server connected!");
// });
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(connectionString);
        console.log("Connected to MongoDB!");
        app.listen(3002, () => {
            console.log("Server connected!");
        });
    }
    catch (err) {
        console.error("Error connecting to MongoDB: ", err);
    }
});
startServer();
