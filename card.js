const card = (imgsrc, title, desc, gitLink) => {
  const col = document.createElement("div");
  col.classList.add("col-lg-4", "mb-4");

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = imgsrc;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = title;

  const cardDesc = document.createElement("p");
  cardDesc.classList.add("card-text");
  cardDesc.innerText = desc;

  const cardLink = document.createElement("a");
  cardLink.classList.add("btn", "btn-outline-danger", "btn-sm");
  cardLink.href = gitLink;
  cardLink.innerText = `Contributed by - ${gitLink}`;

  cardBody.append(cardTitle, cardDesc, cardLink);
  card.append(img, cardBody);
  col.append(card);

  return col;
};
