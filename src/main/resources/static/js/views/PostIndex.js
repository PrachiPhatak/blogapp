import createView from "../createView.js";

export default function PostIndex(props) {

    return `
        <header xmlns="http://www.w3.org/1999/html">
            <h1 class="mx-auto">Welcome To my blogs</h1>
        </header>
        <main>
            <div class="container row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3">
               
                <div class="col mb-3">
                    <form id="post-form" class=" card shadow-sm p-1">
                        <h5> New Blog </h5>
                        <input id="title" class="border-box" name="title" type="text" placeholder="Blog Title"/>
                        <textarea cols="20"  id="content" name="content" type="text" placeholder="Content"></textarea>
                        <button id="post-btn" class="btn-sm" type="submit"> Post </button>
                    </form>
                </div>
                
                 ${props.posts.map(post => `${printOutBlogs(post)}`).join('')}  
                 
            </div>
        </main>
    `;
}

function printOutBlogs(post) {
    return `
            <div class="col mb-3">
                <div class=" card shadow-sm p-1">
                      <h5 contenteditable="false" class="title"> ${post.title}</h5>
                      <p contenteditable="false"  class="content">${post.content}</p>
                      <button data-id="${post.id}" class="col btn-sm edit-save-btn" type="submit"> Edit </button>
                      <button data-id="${post.id}" class="col btn-sm delete-cancel-btn" type="submit"> Delete </button>
                 </div>
             </div>
    `
}

export function PostEvent() {
    createPost();
    editPost();
    deleteCancelPost();
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
        $(".delete-cancel-btn").text("Cancel");
        let editableFields = ($(this).siblings("[contenteditable]"));
        editableFields.attr("contenteditable", "true");
        editableFields.toggleClass("form-control");
        $(this).on("click", savePost);
    });
}

function savePost() {

    $(this).text("Edit");
    $(".delete-cancel-btn").text("Delete");
    let editableFields = ($(this).siblings("[contenteditable]"));

    let obj = {
        title: $(this).siblings(".title").text(),
        content: $(this).siblings(".content").text(),
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
            let editableFields = ($(this).siblings("[contenteditable]"));
            editableFields.attr("contenteditable", "false");
            editableFields.toggleClass("form-control");
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


