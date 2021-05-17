// const tossCoin = new Promise((resolve, reject) => {
//     result = 0;
//     attempts = Math.random() > 0.5 ? "heads" : "tails";
//     headsCount = 0
//     while (headsCount < 5) {
//         attempts++;
//         resolve(`coin was tossed and ${result} was the result `);
//         if (result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//             reject(`It took ${attempts} attemps to get "heads" five times.`)
//         }
//         // let headsCount = 0;
//         // let attempts = 0;
//         // while (headsCount < 5) {
//         //     attempts++;
//         //     let result = tossCoin();
//         //     console.log(`${result} was flipped`);
//         //     if (result === "heads") {
//         //         headsCount++;
//         //     } else {
//         //         headsCount = 0;
//         //     }
//         //     return `It took ${attempts} tries to flip five "heads"`;
//     }
// });

// tossCoin
//     .then(res => console.log(res))
//     .catch(err => console.log(err));