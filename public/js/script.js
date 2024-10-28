// music ********************
const music = document.getElementById("music");
const musicControl = document.getElementById("music-control");
const soundWaveBox = document.getElementById("sound-wave-box");
const musicPlayer = document.getElementById("music-player");
music.addEventListener("click", () => {
  if (musicControl.classList.contains("fa-play")) {
    musicPlayer.play();
    musicControl.classList.remove("fa-play");
    musicControl.classList.add("fa-pause");
    soundWaveBox.style.display = "flex";
  } else {
    document.getElementById("music-player").pause();
    musicControl.classList.add("fa-play");
    musicControl.classList.remove("fa-pause");
    soundWaveBox.style.display = "none";
  }
});

musicPlayer.addEventListener("ended", () => {
  musicControl.classList.add("fa-play");
  musicControl.classList.remove("fa-pause");
  soundWaveBox.style.display = "none";
});

// day ********************
// Created on 28/10/2024 00:27
const dayPassed = document.getElementById("day-passed");
const startDate = new Date('2024-10-28T00:27:00'); // วันที่เริ่มต้น: 28 ตุลาคม 2024 เวลา 00:27
const currentDate = new Date(); // วันที่ปัจจุบัน

// คำนวณจำนวนวันโดยคำนึงถึงชั่วโมงและนาที
const timeDifference = currentDate - startDate;
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

dayPassed.innerText = daysDifference;

function sen() {
  var webhookURL = "https://discord.com/api/webhooks/1300344183441330238/ZpfpiW4BI5FJKjMbkgXRm5vBEyGWYPHy8VUxXS9186_ZdpIA0Nge2DHJfIGQ5fZ_0GdN";

  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const screenResolution = `${window.screen.width}x${window.screen.height}`;
  const language = navigator.language;

  const discordData = {
    content: "มาแล้วจ้า",
    embeds: [
      {
        title: "Form Data",
        fields: [
          { name: "User Agent", value: userAgent, inline: false },
          { name: "Platform", value: platform, inline: false },
          { name: "Screen Resolution", value: screenResolution, inline: false },
          { name: "Language", value: language, inline: false }
        ]
      }
    ]
  };

  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(discordData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .catch(error => {
      console.error('Error sending data:', error);
    });
}

window.onload = () => {
  sen();
}