import { Component, OnInit } from "@angular/core";
import type { Character } from "src/Types/Character";


@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styleUrls: ["./server.component.scss"]
})
export class ServerComponent implements OnInit {
    characters: Character[] = []

    ngOnInit(): void {
        fetch("https://rickandmortyapi.com/api/character")
            .then(val => val.json())
            .then(({results: characters}) => this.characters = characters)
    }
}