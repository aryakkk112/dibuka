// Tombol OK
const okButton = document.getElementById("okButton");
okButton.addEventListener("click", () => {
  alert("MAKASIH NOVA <3");
});

// Tombol Ga Mau
const noButton = document.getElementById("noButton");
noButton.addEventListener("click", () => {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  // Tentukan jarak minimum kabur
  const minDistance = 150;

  let randomX, randomY;

  do {
    // Hitung posisi acak baru
    randomX = Math.random() * (containerRect.width - buttonRect.width);
    randomY = Math.random() * (containerRect.height - buttonRect.height);

    // Hitung jarak antara posisi awal dan posisi baru
    const distance = Math.sqrt(
      Math.pow(randomX - (buttonRect.left - containerRect.left), 2) +
      Math.pow(randomY - (buttonRect.top - containerRect.top), 2)
    );

    // Ulangi jika jarak kurang dari jarak minimum
    if (distance >= minDistance) break;
  } while (true);

  // Pindahkan tombol ke posisi baru
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});
