import { Component, OnInit } from "@angular/core";
import type { Character } from "src/Types/Character";


@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styleUrls: ["./server.component.scss"]
})
export class ServerComponent implements OnInit {
    characters: Character[] = []
    allCharacters: Character[] = []
    filterValue = ""
    highlightFamily = false

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

    toggleHighlightFamily = (val: boolean) => {
        this.highlightFamily = val
    }

    filter(e: SubmitEvent) {
        e.preventDefault();

        if (this.filterValue) {
            this.characters = this.allCharacters.filter(({ name }) => name.toLowerCase().startsWith(this.filterValue.toLowerCase()))
        } else if (this.filterValue === "") {
            this.characters = [...this.allCharacters]
        }
    }

    randomSort() {
        this.characters = [...this.characters.sort(() => Math.random() > .5 ? 1 : -1)]
    }

    getBgColor = (char: Character) => this.highlightFamily && char.name.includes('Smith') ? 'purple' : '#11191f'
}