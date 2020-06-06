class Books {
    constructor(name, author, type) {
        this.name = name,
            this.author = author,
            this.type = type
    }
}

class Display {
    add(book) {
        let tableBody = document.getElementById("tableBody")
        let html = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
        tableBody.innerHTML += html;
    }

    clear() {
        let libraryForm = document.getElementById("libraryForm")
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) { return false; }
        else {
            return true
        }
    }

    show(type, message) {
        let msg = document.getElementById("msg")
        msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong>${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
        setTimeout(() => {
            msg.innerHTML = "";
        }, 3000);
    }

}
let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById("bookName").value
    let author = document.getElementById("author").value
    let maths = document.getElementById("maths")
    let science = document.getElementById("science")
    let morals = document.getElementById("morals")
    let type;
    if (maths.checked) {
        type = maths.value
    }
    else if (science.checked) {
        type = science.value
    }
    else if (morals.checked) {
        type = morals.value
    }

    let book = new Books(name, author, type)
    

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been submitted successfully!! added")
    }
    else {
        display.show("error", "Sorry! Yo can not ad this book")
    }



    e.preventDefault();

}