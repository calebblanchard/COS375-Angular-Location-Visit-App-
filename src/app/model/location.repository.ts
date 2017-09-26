import { Injectable } from "@angular/core";
import { Location } from "./location.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class LocationRepository {
    private products: Location[] = [];
    private counties: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getLocations().subscribe(data => {
            this.products = data;
            this.counties = data.map(p => p.county)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getLocations(county: string = null): Location[] {
        return this.products
            .filter(p => county == null || county == p.county);
    }

    getLocation(id: number): Location {
        return this.products.find(p => p.id == id);
    }

    getCounties(): string[] {
        return this.counties;
    }
}
