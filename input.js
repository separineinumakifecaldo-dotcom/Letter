
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

// MUSIC ON / OFF

musicBtn.addEventListener("click", async () => {

    if (bgMusic.paused) {

        try {
            await bgMusic.play();

            musicBtn.textContent = "♫ Music ON";

        } catch (error) {

            console.error("Music Error:", error);

            musicBtn.textContent = "♫ Music OFF";

            alert("Music file not found. Check your audio path.");

        }

    } else {

        bgMusic.pause();

        musicBtn.textContent = "♫ Music OFF";

    }

});

// OPEN LETTER AND PLAY MUSIC

document.getElementById("openBtn").addEventListener("click", async () => {

    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");

    try {

        await bgMusic.play();

        musicBtn.textContent = "♫ Music ON";

    } catch (error) {

        console.error("Playback error:", error);

    }

});
