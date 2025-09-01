# :rocket: Att göra i detta projekt

Projektets **huvudmål** är att få backenden med alla frågor att ladda ifrån ett Strapi-API istället för lokalt i applikationen. Github Repo för Strapi, [Repo](https://github.com/Nugget1368/CityHall-Quiz-Backend.)

**Klart**

- Vi kan hämta data ifrån Strapi-api:et
- Applikationen fungerar som det gjort tidigare innan uppdateringen

## Kvar att göra

### :broom:Städning

Just nu sker väldigt långa dykningar i programmets objekt, ex:

```js
let example = question.question.alternatives.alternatives[answer]
```
Detta måste fixas. De filer detta förekommer är:

**Builders**
- accordionBuilder.js
- builder.js
- questionBuilder.js

**services**
- correct-answer.js

`imports` som inte används behövs även tas bort.

### :computer: Data

Frågorna som ska ställas till användaren behöver göras om på nytt i Strapi-Api:et.

### :arrow_up: Uppladning

Publicera Strapi-api:et, se videolektion på studentportalen.