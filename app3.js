import Humanoid from "humanoid-js";

let humanoid = new Humanoid();
humanoid.get("https://www.rtklive.com/sq/page.php?ID=28")
    .then(res => {
    	console.log(res.body) // <!DOCTYPE html><html lang="en">...
    })
    .catch(err => {
    	console.error(err)
    })