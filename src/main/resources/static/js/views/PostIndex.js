import createView from "../createView.js";

export default function PostIndex(props) {
    console.log(props)
    return `
        <main>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3">
                    <form id="post-form" class=" card shadow-sm p-3">
                        <p id="error"></p>
                        <h5> New Blog </h5>
                        <input id="title" class="border-box m-1" name="title" type="text" placeholder="Blog Title"/>
                        <textarea cols="20"  class="m-1" id="content" name="content" type="text" placeholder="Content"></textarea>
                        <button id="post-btn" class="btn-sm m-1" type="submit"> Post </button>
                    </form>
                </div>
                 ${props.posts.map(post => `${printOutBlogs(post)}`).join('')}  
            </div>
            </div>
        </main>
    `;
}

function printOutBlogs(post) {
    console.log(post)
    let categories1 = post.categories;
    console.log(categories1);
    return `
        <div class="p-3">
            <div class="card shadow-sm p-0">
                   <button id="addNewBlog">Add new post</button>
                  <h5 contenteditable="false" class="card-header title"> ${post.title}</h5>
                  <p contenteditable="false"  class="p-3 card-text content">
                        ${post.content.substring(0, 150)} <a href="#">Read more...</a>
                  
                  </p>
                  <p class="px-3 author">By ${post.user.userName}</p>
                  <div class="px-3 text-muted">
                       ${categories1.map(category =>
                            `#${category.name} `
                        )}
                   </div>
                   <div class="d-flex justify-content-around m-3">
                        <button data-id="${post.id}" class="col-4 btn btn-secondary edit-save-btn" > Edit </button>
                        <button data-id="${post.id}" class="col-4 btn btn-secondary delete-cancel-btn" > Delete </button>
                  </div>
            </div>
        </div>
    `
}


export function PostEvent() {
    createPost();
    editPost();
    deleteCancelPost();
    addNewBlog();

}

function addNewBlog() {
    console.log("Yay! add new blog");
    $("#addNewBlog").click(function () {
        createView("/details")
    })
}

function createPost() {
    $("#post-btn").click(function () {
        let obj = {
            title: document.querySelector("#title").value,
            content: document.querySelector("#content").value,
        }

        const url = `http://localhost:8080/api/posts`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)

        };
        console.log(options)
        fetch(url, options)
            .then(data => {
                console.log(data)
                createView("/posts")
            })
            .catch(error => console.error(error)); /* handle errors */
    });
}

function editPost() {
    $(".edit-save-btn").click(function () {
        $(this).text("Save");
        $(this).parentsUntil(".card").children(".delete-cancel-btn").text("Cancel");
        let editableFields = ($(this).parentsUntil(".card").children("[contenteditable]"));
        editableFields.attr("contenteditable", "true");
        editableFields.toggleClass("form-control");
        $(this).parentsUntil(".card").children('.title').attr("data-oldText",$(this).parentsUntil(".card").children('.title').text());
        $(this).parentsUntil(".card").children('.content').attr("data-oldText",$(this).parentsUntil(".card").children('.content').text());
        $(this).on("click", savePost);
    });
}

function savePost() {

    $(this).text("Edit");
    $(".delete-cancel-btn").text("Delete");
    let editableFields = ($(this).parentsUntil(".card").children("[contenteditable]"));

    let obj = {
        title: $(this).parentsUntil(".card").children(".title").text(),
        content: $(this).parentsUntil(".card").children(".content").text(),
        id: $(this).attr("data-id")
    }

    editableFields.attr("contenteditable", "false");
    editableFields.toggleClass("form-control");
    $(this).off("click", savePost);

    const url = `http://localhost:8080/api/posts`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)

    };
    console.log(options)
    fetch(url, options)
        .then(data => {
            console.log(data)
            createView("/posts")
        })
        .catch(error => console.error(error)); /* handle errors */
}

function deleteCancelPost() {
    $(".delete-cancel-btn").click(function () {
        if ($(this).text().trim() === "Delete") {
            //On Delete
            if(confirm("Are you sure you want to delete the blog?"))
                deletePost($(this).attr("data-id"));
        }else{
            //On Cancel
            $(this).text("Delete");
            $(".edit-save-btn").text("Edit");
            let editableFields = ($(this).parentsUntil(".card").children("[contenteditable]"));
            editableFields.attr("contenteditable", "false");
            editableFields.toggleClass("form-control");
            $(this).parentsUntil(".card").children('.title').text($(this).parentsUntil(".card").children('.title').attr("data-oldText"));
            $(this).parentsUntil(".card").children('.content').text($(this).parentsUntil(".card").children('.content').attr("data-oldText"));
        }
    });
}

function deletePost(id) {
    const url = `http://localhost:8080/api/posts/${id}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    console.log(options)
    fetch(url, options)
        .then(data => {
            console.log(data)
            createView("/posts")
        })
        .catch(error => console.error(error)); /* handle errors */
}


