import { Injectable } from "@angular/core";

@Injectable()
export class ImageService {
  visibleImages = [];
  getImages() {
    return (this.visibleImages = IMAGES.slice(0));
  }
  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {
    id: 100,
    category: "cats",
    caption: "Grumpy Cat!",
    src: "assets/img/grumpy-cat-1.jpg"
  },
  {
    id: 200,
    category: "cows",
    caption: "Friesian",
    src: "assets/img/friesian.jpg"
  },
  {
    id: 300,
    category: "other",
    caption: "Koala",
    src: "assets/img/koala.jpg"
  },
  {
    id: 201,
    category: "cows",
    caption: "The greatest cow in the history of all time - MONSTER eRNIE!",
    src: "assets/img/ernie-1.jpg"
  },
  {
    id: 101,
    category: "cats",
    caption: "Random artistic cat",
    src: "assets/img/cat-1.jpg"
  },
  {
    id: 102,
    category: "cows",
    caption: "Random artistic cat",
    src: "assets/img/cow-1.jpg"
  },
  {
    id: 304,
    category: "other",
    caption: "Dog",
    src: "assets/img/dog-1.jpg"
  },
  {
    id: 103,
    category: "cows",
    caption: "Random artistic cat",
    src: "assets/img/cow-2.jpg"
  },
  {
    id: 104,
    category: "cats",
    caption: "Random artistic cat",
    src: "assets/img/cat-2.jpg"
  },
  {
    id: 105,
    category: "cats",
    caption: "Tiger!",
    src: "assets/img/tiger.jpg"
  },
  {
    id: 302,
    category: "other",
    caption: "Hippo",
    src: "assets/img/hippo.jpg"
  },
  {
    id: 303,
    category: "other",
    caption: "Meerkat",
    src: "assets/img/meerkat.jpg"
  }
];
