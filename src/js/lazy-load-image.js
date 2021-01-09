

export const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      loadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
};

const loadImage = (image) => {
  const src = image.dataset.src;
  fetchImage(src).then(() => {
    image.src = src;
  });
};

const fetchImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    console.log("Current image", url);
    image.onload = resolve;
    image.onerror = reject;
  });
};
