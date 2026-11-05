# PAGWG Studieportal

## Om studieportalen
Projektet är en mycket enkel onepage skriven i React i syfte att samla alla kursrelaterade länkar i programmet
Webbprogrammering 120hp (HT26) på BTH. Vi är flera studenter som virrat runt för att hitta rätt och navigera oss lätt
och smidigt, varför denna sida skapades. Tanken är att sidan går att bokmärka eller använda som startsida i sin
webbläsare för studierna för att enkelt navigera sig dit man vill.

## Bidrag
Alla typer av bidrag är varmt välkomna, med det sagt betyder det inte att alla bidrag accepteras. Sidan är tänkt att
vara enkel och nätt, skulle ett bidrag inte ta hänsyn till det finns en risk att vi nekar bidraget. Om du funderar på
att bidra med något nytt men känner dig osäker om det uppfyller vårt krav om enkelt och nätt är det bara att öppna en
issue och fråga. Ytterligare undanbedes vibe-kodad kod eller grovt AI-assisterad kod.

För förslag på möjliga bidrag hänvisas du till öppna issues, se i första hand [issues med labels som documentation-, enhancement-, och good-first-issue](https://github.com/Webbiga-Studiecirkeln/PAGWG/issues?q=is%3Aissue+state%3Aopen+label%3Abug%2Cdocumentation%2Cenhancement%2C%22good+first+issue%22).
Om du har förbättringsförslag är det bara att öppna ett issue.

### Kort att göra-lista som ska flyttas till issues:
- [ ] Kommentering av kod
- [ ] Testning av kod
- [ ] Dark mode
- [ ] Dubbelkolla att all kursdata och länkar stämmer överallt
- [ ] Metadata för trevligare länkning i Discord etc
- [ ] Trevliga transitions/animationer för "hover states"
- [ ] Footer
- [ ] Lägg till licens (MIT)
- [ ] Egna bilder till kurserna(?)
- [ ] Terminsnavigering och/eller terminsväljare(?)

## Kort om externa paket
Projektet bygger bland annat på följande paket:

| Namn                                    | Funktion                                                                                                |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------|
| [React](https://react.dev/)             | JavaScript-ramverk för dynamisk uppdatering av DOM samt komponenter.                                    |
| [TailwindCSS](https://tailwindcss.com/) | Ett "atomiskt" CSS-ramverk med fokus på små "hjälpklasser" som oftast ändrar en CSS-egenskap per klass. |
| [HeroIcons](https://heroicons.com/)     | Ikonbibliotek från skaparna bakom TailwindCSS.                                                          |

Utöver dessa används Vite och eslint för att skapa en så trevlig utvecklingsmiljö som möjligt.



## Kom igång med utvecklingsmiljön
1. Klona repo
    ```bash
    git clone git@github.com:Webbiga-Studiecirkeln/PAGWG.git
    ```
2. Förflytta dig till repots rot med `cd`
3. Installera paket
    ```bash
    npm install
    ```
4. Starta Vite (utvecklingsserver)
    ```bash
    npm run dev
    ``` 

### Använda lintern
```bash
npm run lint
```

### Bygga projektet (för produktion)
```bash
npm run build
```

## Hosting
Sidan hostas genom GitHub Pages, som automatiskt kör den senaste koden i main-branchen.

## Mirrors
Det är fritt fram att bygga projektet och lägga upp en så kallad mirror på sin egen server. Om du gör det får du gärna
göra en PR med länk till din mirror nedan.