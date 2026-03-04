```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: user types a note and clicks Save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note<br/>body: content=my note
    activate server
    Note right of server: server saves the note
    server-->>browser: 302 Redirect → go back to /notes
    deactivate server

    Note right of browser: ok the server told us to reload the page,<br/>so here we go again...

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "my note", "date": "..." }, ...]
    deactivate server

    Note right of browser: JS finally renders all the notes<br/>including the new one
    ```