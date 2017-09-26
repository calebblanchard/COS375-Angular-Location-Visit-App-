import { Component } from "@angular/core";
import { Location } from "../model/location.model";
import { LocationRepository } from "../model/location.repository";

@Component({
    selector: "view",
    moduleId: module.id,
    templateUrl: "view.component.html"
})
export class ViewComponent {
    public selectedCounty = null;
    public locationsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: LocationRepository) { }

    get locations(): Location[] {
        let pageIndex = (this.selectedPage - 1) * this.locationsPerPage
        return this.repository.getLocations(this.selectedCounty)
            .slice(pageIndex, pageIndex + this.locationsPerPage);
    }

    get counties(): string[] {
        return this.repository.getCounties();
    }

    changeCounty(newCounty?: string) {
        this.selectedCounty = newCounty;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.locationsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository
            .getLocations(this.selectedCounty).length / this.locationsPerPage)
    }
}
