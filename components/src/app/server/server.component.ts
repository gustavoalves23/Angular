import { Component, OnInit } from "@angular/core";
import type { Character } from "src/Types/Character";


@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styleUrls: ["./server.component.scss"]
})
export class ServerComponent implements OnInit  {
    characters: Character[] = []
    allCharacters: Character[] = []
    filterValue = ""

    ngOnInit(): void {
        fetch("https://rickandmortyapi.com/api/character")
        .then(val => val.json())
        .then(({ results: characters }) => {
            this.characters = characters
            this.allCharacters = characters
        })
    }

    reset() {
        this.characters = [...this.allCharacters]
    }

    log(val: string) {
        alert(val)
    }

    filter(e: SubmitEvent) {
        e.preventDefault();

        if (this.characters.length && this.filterValue) {
            this.characters = this.allCharacters.filter(({name}) => name.toLowerCase().startsWith(this.filterValue.toLowerCase()))
        } else if (this.filterValue === "") {
            this.characters = [...this.allCharacters]
        }
    }
}