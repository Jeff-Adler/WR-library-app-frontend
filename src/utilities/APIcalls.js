export async function retrieveAuthors () {
    try {
        const response = await fetch("http://localhost:3000/authors");
        const data = await response.json();
        if (data) {
            console.log(data)
            return data;
        }
    } catch (err) {
        alert(err);
    }
  };

export async function retrieveBooks () {
    try {
        const response = await fetch("http://localhost:3000/books");
        const data = await response.json();
        if (data) {
            console.log(data)
            return data;
        }
    } catch (err) {
        alert(err);
    }
  };