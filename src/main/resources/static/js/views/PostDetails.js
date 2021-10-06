import createView from "../createView.js";

function getCategories() {
    const url = `http://localhost:8080/api/categories`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(url, options)
        .then(data => {
            createView("/details")
        })
        .catch(error => console.error(error)); /* handle errors */
}

export default function PostDetailsComponent(props) {
    console.log(props.posts)
    return `
        <main>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3">
                    <form id="post-form" class=" card shadow-sm p-3">
                        <p id="error"></p>
                        <h5> New Blog </h5>
                        <input id="title" class="border-box m-1" name="title" type="text" placeholder="Blog Title" value = "${props.posts.title}"/>
                        <textarea cols="20" class="m-1" id="content" name="content" type="text" placeholder="Content">${props.posts.content}</textarea>
                        <button id="post-btn" class="btn-sm m-1" type="submit" data-id =${props.posts.user.id}> Post </button>
                    </form>
                </div>
        </main>
    `;
}

export function CreatePost() {
    $("#post-btn").click(function () {
        let obj = {
            title: document.querySelector("#title").value,
            content: document.querySelector("#content").value,
            id: $(this).attr("data-id")
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