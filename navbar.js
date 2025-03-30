document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const navbar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", function() {
    navbar.classList.add("active");
  });

  cancelBtn.addEventListener("click", function() {
    navbar.classList.remove("active");
  });
});

function logoutUser(event) {
  event.preventDefault(); // Stop the default link behavior

  // Clear login status
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");

  alert("Logged out successfully!");
  window.location.href = "../../index.html"; // Redirect after logout
}

function updateText(slideNumber) {
  const topic = document.getElementById("topic");
  const description = document.getElementById("description");

  const textData = {
    1: {
      title: "Where It All Started",
      desc: "I am Frances Bea Magdayao, the youngest, the bunso, the last puzzle piece in a family that shaped who I am. My two kuyas carved their own paths, and I watched, learning from their every move. But me? I was different. While they chased their own dreams, I found solace in creativity, in colors, in designs that spoke louder than words. They say being the youngest means being protected, but in my case, it meant finding my own way. And in that journey, I discovered that design wasn’t just an interest—it was the language my heart spoke before I even knew how to put it into words."
    },
    2: {
      title: "TOWS",
      desc: "They say people come and go, but some leave footprints in your life forever. I met my friends as student officers in our first year—brought together by responsibility but bonded by laughter, late-night talks, and dreams that seemed so within reach. We weren’t just friends; we were a family built on shared ambitions, inside jokes, and moments that felt like they’d last forever. But like all good things, time had its way of pulling us in different directions. Some friendships stayed, some drifted, but the echoes of our laughter still linger in my heart. Just like in design, not every stroke remains in the final masterpiece, but every color, every detail, played a part in shaping the bigger picture."
    },
    3: {
      title: "The Unexpected Love",
      desc: "I used to think badminton was my sport, my only game. But then, life threw me something unexpected—frisbee. It wasn’t just a sport; it was a rush, a thrill, a new way of seeing things. The wind against my skin, the disc soaring through the sky—it was art in motion, strategy wrapped in chaos. It reminded me of design. You never truly know where the next play will take you, but you chase after it anyway. You fall, you rise, you adjust, and in that split second before the catch, you realize—it’s not just about winning, it’s about the rhythm, the movement, the feeling of being part of something bigger than yourself."
    },
    4: {
      title: "The Stories I Chose to Live",
      desc: "They say college is about academics, but for me, it was about something more—experiences. I wasn’t just a student; I was an explorer. Every event, every gathering, every spontaneous adventure became a page in my unwritten book. I said yes to moments others overlooked. I danced in places where no music played. I laughed with strangers who became friends. Some nights felt infinite, some mornings held regrets, but every single experience fueled my creativity. Because design, at its core, is about storytelling—and my stories are written in every events, every experience, every memory I refuse to let fade."
    },
    5: {
      title: "Passion That Both Fuels and Destroys Me",
      desc: "Design. My first love, my greatest frustration. I live for the thrill of creating something out of nothing, yet I am my own worst critic. I push, I strive, I demand perfection from myself, only to be left questioning—will it ever be enough? There are days when creativity feels like a gift, and nights when it feels like a curse. The pressure, the expectations, the constant battle between loving and hating the very thing that defines me. But that’s the beauty of it. The struggle, the doubt, the relentless passion—it’s all part of the art. Because at the end of the day, I don’t just design. I feel. I live. I create. And maybe, just maybe, that’s enough."
    }
  };

  topic.innerText = textData[slideNumber].title;
  description.innerText = textData[slideNumber].desc;
}