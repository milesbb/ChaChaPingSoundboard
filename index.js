// const db = new Dexie("chachacount");
// db.version(2).stores({
//   counters1: "id++, count",
//   counters2: "id++, count",
//   counters3: "id++, count",
//   counters4: "id++, count",
//   counters5: "id++, count",
//   counters6: "id++, count",
//   counters7: "id++, count",
//   counters8: "id++, count",
// });

// const PLAY_COUNTERS = document.querySelectorAll("span");
// const MAIN_IMAGES = document.querySelectorAll(".mainImg");

// // const initial = async () => {
// //     let count = 0;

// //     await db.counters.add({
// //         count: 0
// //     });
// //     await db.counters.add({
// //         count: 0
// //     });
// //     await db.counters.add({
// //         count: 0
// //     });
// //     await db.counters.add({
// //         count: 0
// //     });
// //     await db.counters.add({
// //         count: 0
// //     });
// //     await db.counters.add({
// //         count: 0
// //     });
// //     await db.counters.add({
// //         count: 0
// //     });
// //     await db.counters.add({
// //         count: 0
// //     });
// // }

// // window.onload = initial();

// const populateCounters = async () => {
//   let counthold0 = await db.counters.get(1).count;
//   PLAY_COUNTERS[0].innerText = "Plays: " + counthold0.count.toString();

//   let counthold1 = await db.counters.get(2);
//   PLAY_COUNTERS[1].innerText = "Plays: " + counthold1.count.toString();

//   let counthold2 = await db.counters.get(3);
//   PLAY_COUNTERS[2].innerText = "Plays: " + counthold2.count.toString();

//   let counthold3 = await db.counters.get(4);
//   PLAY_COUNTERS[3].innerText = "Plays: " + counthold3.count.toString();

//   let counthold4 = await db.counters.get(5);
//   PLAY_COUNTERS[4].innerText = "Plays: " + counthold4.count.toString();

//   let counthold5 = await db.counters.get(6);
//   PLAY_COUNTERS[5].innerText = "Plays: " + counthold5.count.toString();

//   let counthold6 = await db.counters.get(7);
//   PLAY_COUNTERS[6].innerText = "Plays: " + counthold6.count.toString();

//   let counthold7 = await db.counters.get(8);
//   PLAY_COUNTERS[7].innerText = "Plays: " + counthold7.count.toString();
// };

// window.onload = populateCounters;

// MAIN_IMAGES[0].addEventListener("click", async () => {
//   var newClicks = db.counters.get(1)["count"];
//   newClicks++;
//   db.counters.update(1, { count: newClicks });

//   populateCounters();
// });

// MAIN_IMAGES[1].addEventListener("click", async () => {
//   let newClicks = await db.counters.get(2).count;
//   newClicks++;
//   await db.counters.update(1, { count: newClicks });
//   await populateCounters();
// });

// MAIN_IMAGES[2].addEventListener("click", async () => {
//   let newClicks = await db.counters.get(3).count;
//   newClicks++;
//   await db.counters.update(2, { count: newClicks });
//   await populateCounters();
// });

// MAIN_IMAGES[3].addEventListener("click", async () => {
//   let newClicks = await db.counters.get(4).count;
//   newClicks++;
//   await db.counters.update(3, { count: newClicks });
//   await populateCounters();
// });

// MAIN_IMAGES[4].addEventListener("click", async () => {
//   let newClicks = await db.counters.get(5).count;
//   newClicks++;
//   await db.counters.update(4, { count: newClicks });
//   await populateCounters();
// });

// MAIN_IMAGES[5].addEventListener("click", async () => {
//   let newClicks = await db.counters.get(6).count;
//   newClicks++;
//   await db.counters.update(5, { count: newClicks });
//   await populateCounters();
// });

// MAIN_IMAGES[6].addEventListener("click", async () => {
//   let newClicks = await db.counters.get(7).count;
//   newClicks++;
//   await db.counters.update(6, { count: newClicks });
//   await populateCounters();
// });

// MAIN_IMAGES[7].addEventListener("click", async () => {
//   let newClicks = await db.counters.get(8).count;
//   newClicks++;
//   await db.counters.update(7, { count: newClicks });
//   await populateCounters();
// });
