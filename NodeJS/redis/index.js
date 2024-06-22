const redis = require("redis");

const redisURL = "redis://127.0.0.1:6379";

const client = redis.createClient(redisURL);

client.set("name", "redis");
console.log("data is set");

client.get("name", (error, value) => {
  if (error) {
    console.log(error);
  }
  console.log(value);
});
