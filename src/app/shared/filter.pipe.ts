import { Pipe, PipeTransform } from "@angular/core";

//Pipes are a way to write display-value transformations that you can declare in your HTML
@Pipe({ name: "imageFilter" })
export class ImageFilterPipe implements PipeTransform {
  transform(items: any[], criteria: string): any {
    if (criteria === "all" || criteria === "") {
      return items;
    } else {
      return items.filter(item => {
        return item.category === criteria;
      });
    }
  }
}
