const data1 = [
  {
    id: "followers",
    name: "facebook",
    icon: "icon-facebook",
    subtext: "followers",
    subtextCount: 1987,
    username: "nathanf",
    up: true,
    rating: 12,
  },
  {
    id: "followers",
    name: "twitter",
    icon: "icon-twitter",
    subtext: "followers",
    subtextCount: 1044,
    username: "nathanf",
    up: true,
    rating: 99,
  },
  {
    id: "followers",
    name: "instagram",
    icon: "icon-instagram",
    subtext: "followers",
    subtextCount: "11k",
    username: "realnathanf",
    up: true,
    rating: 1099,
  },
  {
    id: "followers",
    name: "youtube",
    icon: "icon-youtube",
    subtext: "subscribers",
    subtextCount: 8239,
    username: "Nathan F.",
    up: false,
    rating: 144,
  },
];

const data2 = [
  {
    id: "overview",
    overviewType: "Page Views",
    icon: "icon-facebook",
    overviewCount: 87,
    rating: "3%",
    up: true,
  },
  {
    id: "overview",
    overviewType: "Likes",
    icon: "icon-facebook",
    overviewCount: 52,
    rating: "2%",
    up: false,
  },
  {
    id: "overview",
    overviewType: "Likes",
    icon: "icon-instagram",
    overviewCount: 5462,
    rating: "2257%",
    up: true,
  },
  {
    id: "overview",
    overviewType: "Profile Views",
    icon: "icon-instagram",
    overviewCount: "52k",
    rating: "1375%",
    up: true,
  },
  {
    id: "overview",
    overviewType: "Retweets",
    icon: "icon-twitter",
    overviewCount: 117,
    rating: "303%",
    up: true,
  },
  {
    id: "overview",
    overviewType: "Likes",
    icon: "icon-twitter",
    overviewCount: 507,
    rating: "553%",
    up: true,
  },
  {
    id: "overview",
    overviewType: "Likes",
    icon: "icon-youtube",
    overviewCount: 107,
    rating: "19%",
    up: false,
  },
  {
    id: "overview",
    overviewType: "Total Views",
    icon: "icon-youtube",
    overviewCount: 1407,
    rating: "12%",
    up: false,
  },
];

const getCardBorderColor = (name) => {
  switch (name) {
    case "facebook":
      return "hsl(208, 92%, 53%)";
    case "twitter":
      return "hsl(203, 89%, 53%)";
    case "instagram":
      return ["hsl(37, 97%, 70%)", "hsl(329, 70%, 58%)"];
    case "youtube":
      return "hsl(348, 97%, 39%)";
  }
};

const getRatingTextColor = (up) => {
  return up ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)";
};

const createSocialIcon = (data) => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");

  const socialIcon = document.createElement("img");
  socialIcon.src = `./images/${data.icon}.svg`;
  socialIcon.alt = data.icon;

  imgContainer.appendChild(socialIcon);
  return imgContainer;
};

const createUsernameContainer = (data) => {
  const usernameContainer = document.createElement("div");
  usernameContainer.classList.add("usernameContainer");

  const imgContainer = createSocialIcon(data);
  usernameContainer.appendChild(imgContainer);

  const usernameText = document.createElement("p");
  usernameText.classList.add("username");
  usernameText.textContent = data.username;

  usernameContainer.appendChild(usernameText);
  return usernameContainer;
};

const createRatingContainer = (data) => {
  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("ratingContainer");

  const updownIconContainer = document.createElement("div");
  updownIconContainer.classList.add("updownIconContainer");

  const updownIcon = document.createElement("img");
  updownIcon.src = data.up ? `./images/icon-up.svg` : `./images/icon-down.svg`;
  updownIcon.alt = data.up ? "up" : "down";

  updownIconContainer.appendChild(updownIcon);
  ratingContainer.appendChild(updownIconContainer);

  const ratingText = document.createElement("p");
  ratingText.textContent = data.id === "followers" ? `${data.rating} Today` : data.rating;
  ratingText.style.color = getRatingTextColor(data.up);

  ratingContainer.appendChild(ratingText);
  return ratingContainer;
};

const createFollowersCard = (data) => {
  const followersCard = document.createElement("div");
  followersCard.classList.add("followersCard");

  const borderColor = getCardBorderColor(data.name);

  if (data.name === "instagram") {
    followersCard.style.borderImage = `linear-gradient(to right, ${borderColor[0]}, ${borderColor[1]}) 1`;
  } else {
    followersCard.style.borderTop = `4px solid ${borderColor}`;
  }

  const usernameContainer = createUsernameContainer(data);
  followersCard.appendChild(usernameContainer);

  const subTextCount = document.createElement("h1");
  subTextCount.textContent = data.subtextCount;

  const subText = document.createElement("p");
  subText.textContent = data.subtext;

  followersCard.appendChild(subTextCount);
  followersCard.appendChild(subText);

  const ratingContainer = createRatingContainer(data);
  followersCard.appendChild(ratingContainer);
  return followersCard;
};

const createOverviewCard = (data) => {
  const overviewCard = document.createElement("div");
  overviewCard.classList.add("overviewCard");

  const heading = document.createElement("div");
  heading.classList.add("heading");

  const overviewType = document.createElement("p");
  overviewType.textContent = data.overviewType;

  const imgContainer = createSocialIcon(data);

  heading.appendChild(overviewType);
  heading.appendChild(imgContainer);
  overviewCard.appendChild(heading);

  const overviewContent = document.createElement("div");
  overviewContent.classList.add("overviewContent");

  const overviewCount = document.createElement("h1");
  overviewCount.textContent = data.overviewCount;

  const ratingContainer = createRatingContainer(data);
  overviewContent.appendChild(overviewCount);
  overviewContent.appendChild(ratingContainer);
  overviewCard.appendChild(overviewContent);
  return overviewCard;
};

const cardsContainer = document.querySelector(".cardsContainer");
const overviewContainer = document.querySelector(".cardsContainer.overview");

const followersfragment = document.createDocumentFragment();
const overviewFragment = document.createDocumentFragment();

data1.forEach((data) => followersfragment.appendChild(createFollowersCard(data)));
data2.forEach((data) => overviewFragment.appendChild(createOverviewCard(data)));
cardsContainer.appendChild(followersfragment);
overviewContainer.appendChild(overviewFragment);

const toggleTheme = document.querySelector(".theme-toggle");

document.body.setAttribute("data-theme", "dark");
toggleTheme.style.backgroundImage = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";

const circle = document.querySelector(".circle");

toggleTheme.addEventListener("click", () => {
  let newTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  if (newTheme === "light") {
    circle.style.transform = "translateX(25px)";
    toggleTheme.style.backgroundColor = "hsl(230, 22%, 74%)";
    toggleTheme.style.backgroundImage = "";
  } else {
    circle.style.transform = "translateX(0px)";
    toggleTheme.style.backgroundImage = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    toggleTheme.style.backgroundColor = "";
  }
});
