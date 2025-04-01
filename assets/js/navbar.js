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
  event.preventDefault();

  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");

  alert("Logged out successfully!");
  window.location.href = "index.html";
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
      title: "The Unexpected Love",
      desc: "I used to think badminton was my sport, my only game. But then, life threw me something unexpected—frisbee. It wasn’t just a sport; it was a rush, a thrill, a new way of seeing things. The wind against my skin, the disc soaring through the sky—it was art in motion, strategy wrapped in chaos. It reminded me of design. You never truly know where the next play will take you, but you chase after it anyway. You fall, you rise, you adjust, and in that split second before the catch, you realize—it’s not just about winning, it’s about the rhythm, the movement, the feeling of being part of something bigger than yourself."
    },
    3: {
      title: "Passion That Both Fuels and Destroys Me",
      desc: "Design. My first love, my greatest frustration. I live for the thrill of creating something out of nothing, yet I am my own worst critic. I push, I strive, I demand perfection from myself, only to be left questioning—will it ever be enough? There are days when creativity feels like a gift, and nights when it feels like a curse. The pressure, the expectations, the constant battle between loving and hating the very thing that defines me. But that’s the beauty of it. The struggle, the doubt, the relentless passion—it’s all part of the art. Because at the end of the day, I don’t just design. I feel. I live. I create. And maybe, just maybe, that’s enough."
    }
  };

  topic.innerText = textData[slideNumber].title;
  description.innerText = textData[slideNumber].desc;
}