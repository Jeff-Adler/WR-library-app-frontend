# Getting Started with Create React App

Library app to search and organize books by title and author

## Description

User should...

- be able to toggle between a list of books and a list of authors, from the home screen
  - A book entry contains:
    - title, duplicates
  - Author entry contains:
    - full name
- be able to click a book or an author
  - if they click a book:
    - book show page appears. contains:
      - title, link to duplicates, link to authors, option to convert to duplicate
        - if duplicate is clicked
          - duplicate show page appears, contains:
            - link to reference
            - option to convert duplicate to reference
        - if reference is clicked
          - reference show page appears, contains:
            - link to author, duplicates
            - option to convert reference to duplicate
              - warning is thrown if book has duplicates, and option to convert is chosen
              - if chosen, drop-down appears with list of possible references
        - if author is clicked
          - author show page appears (see below)
  - if they click an author:
