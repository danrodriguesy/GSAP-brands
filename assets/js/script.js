const coke = gsap.timeline({ paused: false });
const sprite = gsap.timeline({ paused: true });
const fanta = gsap.timeline({ paused: true });
const logo = document.getElementById("logo");

coke.fromTo(
  "#img-main",
  {
    x: 480,
    opcity: 0,
    rotation: 220,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    rotation: 0,
    ease: "back.out(1.9)",
  },
);

coke.fromTo(
  "p",
  {
    x: -990,
    opcity: 0,
    rotation: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    rotation: 0,
    ease: "power2.out",
  },
  "<",
);

coke.fromTo(
  "h1",
  {
    x: -2300,
    opcity: 1,
    rotation: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    rotation: 0,
    ease: "power2.out",
  },
  "<",
);

coke.fromTo(
  "button",
  {
    x: 2300,
    opcity: 1,
    rotation: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    rotation: 0,
    ease: "power2.out",
  },
  "<",
);

coke.fromTo(
  "span",
  {
    x: 2300,
    opcity: 1,
    rotation: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    rotation: 0,
    ease: "power2.out",
  },
  "<",
);

coke.fromTo(
    "#logo",
    {
      opacity: 0,
      y: -60,
    },
    {
      y: 0,
      opacity: 1,
      durantion: 0.8,
    },
    "<",
  );

const btnCoke = document.getElementById("coke");
const btnSprite = document.getElementById("sprite");
const btnFanta = document.getElementById("fanta");

const mainImg = document.getElementById("img-main"); //imagem principal

btnCoke.addEventListener("click", function () {
  mainImg.src = "assets/imagens/coke1.png";
  logo.src = "assets/imagens/logo-coke.png";

  coke
    .fromTo(
      "#img-main",
      {
        x: 480,
        opcity: 0,
        rotation: 220,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        rotation: 0,
        ease: "back.out(1.9)",
      },
    )
    .to(
      "#hero",
      {
        backgroundColor: "red",
        duration: 0.8,
      },
      "<",
    )

  coke.fromTo(
    "p",
    {
      x: -990,
      opcity: 0,
      rotation: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      rotation: 0,
      ease: "power2.out",
    },
    "<",
  );

  coke.fromTo(
    "h1",
    {
      x: -2300,
      opcity: 1,
      rotation: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      rotation: 0,
      ease: "power2.out",
    },
    "<",
  );

  coke.fromTo(
    "button",
    {
      x: 2300,
      opcity: 1,
      rotation: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      rotation: 0,
      ease: "power2.out",
    },
    "<",
  );

  coke.fromTo(
    "span",
    {
      x: 2300,
      opcity: 1,
      rotation: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      rotation: 0,
      ease: "power2.out",
    },
    "<",
  );
  coke.fromTo(
    "#logo",
    {
      opacity: 0,
      y: -60,
    },
    {
      y: 0,
      opacity: 1,
      durantion: 0.8,
    },
    "<",
  );
  //   coke.play();
});

btnSprite.addEventListener("click", function () {
  mainImg.src = "assets/imagens/sprite.png";
  logo.src = "assets/imagens/logo-sprite.png";
  sprite
    .fromTo(
      "#img-main",
      {
        x: 480,
        opcity: 0,
        rotation: 220,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        rotation: 0,
        ease: "back.out(1.9)",
      },
    )
    .to(
      "#hero",
      {
        duraton: 0.8,
        opacity: 1,
        backgroundColor: "green",
      },
      "<",
    );

  sprite.fromTo(
    "p",
    {
      x: -480,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power.out2",
    },
    "<",
  );

  sprite.fromTo(
    "h1",
    {
      x: 480,
      opacity: 0,
    },
    {
      x: 0,
      duration: 0.8,
      opacity: 1,
      ease: "back.out(1.9)",
    },
    "<",
  );

  sprite.fromTo(
    "span",
    {
      display: "inline-block",
      x: -480,
      opacity: 0,
    },
    {
      opacity: 1,
      x: 0,
      ease: "power.out2",
    },
    "<",
  );

  sprite.fromTo(
    "button",
    {
      y: -480,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
    },
    "<",
  );
  sprite.fromTo(
    "#logo",
    {
      opacity: 0,
      y: -60,
    },
    {
      y: 0,
      opacity: 1,
      durantion: 0.8,
    },
    "<",
  );
  sprite.play();
});

btnFanta.addEventListener("click", function () {
  mainImg.src = "assets/imagens/fanta.png";
  logo.src = "assets/imagens/logo-fanta.png";

  fanta
    .fromTo(
      "#img-main",
      {
        x: 480,
        opcity: 0,
        rotation: 220,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        rotation: 0,
        ease: "back.out(1.9)",
      },
    )
    .to(
      "#hero",
      {
        backgroundColor: "orange",
        duration: 0.8,
      },
      "<",
    );

  fanta.fromTo(
    "span",
    {
      display: "inline-block",
      x: -480,
      opacity: 0,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
    },
    "<",
  );

  fanta.fromTo(
    "h1",
    {
      x: 400,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      ease: "back.out(1.9)",
      duration: 0.8,
    },
    "<",
  );

  fanta.fromTo(
    "p",
    {
      y: 1000,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power.out2",
    },
    "<",
  );

  fanta.fromTo(
    "button",
    {
      opacity: 0,
      x: -480,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.9,
      ease: "back.out(1.9)",
    },
    "<",
  );

  fanta.fromTo(
    "#logo",
    {
      opacity: 0,
      y: -60,
    },
    {
      y: 0,
      opacity: 1,
      durantion: 0.8,
    },
    "<",
  );

  fanta.play();
});
